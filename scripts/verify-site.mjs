#!/usr/bin/env node
/**
 * Post-build verification. Run against a production server:
 *   npm run build && npx next start -p 3100 &
 *   BASE_URL=http://localhost:3100 npm run verify
 * Use --links-only to run just the internal link and anchor check.
 */
const BASE = (process.env.BASE_URL ?? "http://localhost:3000").replace(/\/$/, "");
const ORIGIN = "https://costestimatorai.com";
const linksOnly = process.argv.includes("--links-only");

const INDEXABLE = [
  "/",
  "/what-is-cost-estimation",
  "/ai-cost-estimation",
  "/project-cost-estimation",
  "/construction-cost-estimation",
  "/use-cases",
];
const ALL = [...INDEXABLE, "/domain"];

let failures = 0;
const fail = (msg) => { failures++; console.log(`  FAIL  ${msg}`); };
const ok = (msg) => console.log(`  ok    ${msg}`);
const check = (cond, msg) => (cond ? ok(msg) : fail(msg));

const decode = (s) =>
  s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&rsquo;/g, "’");

const getMeta = (html, attr, name) => {
  const re = new RegExp(`<meta[^>]+${attr}="${name}"[^>]*>`, "i");
  const tag = html.match(re)?.[0];
  return tag ? decode(tag.match(/content="([^"]*)"/i)?.[1] ?? "") : null;
};

const textOf = (fragment) =>
  decode(fragment.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();

const pages = {};
for (const path of ALL) {
  const res = await fetch(BASE + path);
  const html = await res.text();
  pages[path] = { status: res.status, html };
}

const idsOf = (html) => new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));

function linkCheck() {
  console.log("\nInternal links and anchors");
  const known = new Set(ALL);
  let count = 0;
  for (const [path, { html }] of Object.entries(pages)) {
    for (const m of html.matchAll(/<a\s[^>]*href="([^"]+)"/g)) {
      const href = decode(m[1]);
      if (/^(https?:|mailto:|tel:)/.test(href)) continue;
      count++;
      const [target, hash] = href.split("#");
      const targetPath = target === "" ? path : target;
      if (!known.has(targetPath)) { fail(`${path} -> ${href}: unknown route`); continue; }
      if (hash && !idsOf(pages[targetPath].html).has(hash)) fail(`${path} -> ${href}: missing anchor`);
    }
  }
  ok(`${count} internal links checked`);
}

if (linksOnly) {
  linkCheck();
  process.exit(failures ? 1 : 0);
}

console.log("Routes");
for (const path of ALL) check(pages[path].status === 200, `${path} returns 200`);
const nf = await fetch(BASE + "/this-page-does-not-exist");
check(nf.status === 404, "unknown route returns 404");
const nfHtml = await nf.text();
check((nfHtml.match(/<h1[\s>]/g) ?? []).length === 1, "404 page has exactly one H1");

const titles = new Map(), descs = new Map();
for (const path of ALL) {
  const { html } = pages[path];
  console.log(`\n${path}`);
  const h1s = html.match(/<h1[\s>][\s\S]*?<\/h1>/g) ?? [];
  check(h1s.length === 1, `exactly one H1 (${h1s.length})`);
  // Heading order: no jump from H1/H2 to H4, and H3 only after an H2
  const levels = [...html.matchAll(/<h([1-6])[\s>]/g)].map((m) => Number(m[1]));
  let hierarchyOk = true;
  levels.reduce((prev, cur) => { if (cur - prev > 1) hierarchyOk = false; return cur; }, 0);
  check(hierarchyOk, "heading levels never skip");

  const title = decode(html.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? "");
  const desc = getMeta(html, "name", "description");
  check(!!title && !titles.has(title), `unique title: "${title}"`);
  check(!!desc && !descs.has(desc), `unique description (${desc?.length} chars)`);
  titles.set(title, path); descs.set(desc, path);

  const canonical = html.match(/<link[^>]+rel="canonical"[^>]*href="([^"]+)"/)?.[1];
  const expected = path === "/" ? ORIGIN : ORIGIN + path;
  check(canonical === expected, `canonical = ${canonical}`);
  check(getMeta(html, "property", "og:title") === title, "og:title matches title");
  check(getMeta(html, "property", "og:description") === desc, "og:description matches description");
  check(getMeta(html, "property", "og:url") === expected, "og:url matches canonical");
  check(getMeta(html, "property", "og:image") === `${ORIGIN}/og-default.png`, "og:image set");
  check(getMeta(html, "name", "twitter:card") === "summary_large_image", "twitter:card set");
  check(getMeta(html, "name", "twitter:title") === title, "twitter:title set");
  check(!!getMeta(html, "name", "twitter:description"), "twitter:description set");
  check(/<html[^>]+lang="en"/.test(html), "html lang=en");

  const robots = getMeta(html, "name", "robots");
  if (path === "/domain") check(/noindex/.test(robots ?? "") && /follow/.test(robots ?? "") && !/nofollow/.test(robots ?? ""), `robots meta: ${robots}`);
  else check(!/noindex/.test(robots ?? ""), `indexable (robots: ${robots ?? "default"})`);

  check(/sale-banner/.test(html) && /This domain is for sale/.test(html) && /available for acquisition/.test(html), "sale banner rendered");
  check(/href="\/domain"/.test(html) || process.env.NEXT_PUBLIC_DOMAIN_SALE_URL, "sale links resolve (/domain fallback)");
  check(/does not provide binding quotes, financial advice, engineering advice or professional estimating services/.test(html), "footer disclaimer present");
  check(/aria-controls="mobile-menu"/.test(html), "mobile menu toggle present");

  // JSON-LD must parse and match visible content
  const main = html.match(/<main[\s\S]*?<\/main>/)?.[0] ?? "";
  const mainText = textOf(main);
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (path === "/domain") {
    check(blocks.length === 0, "no JSON-LD on noindex page");
  } else {
    check(blocks.length === 1, "one JSON-LD block");
    try {
      const graph = JSON.parse(blocks[0][1].replace(/\\u003c/g, "<"))["@graph"];
      const types = graph.map((n) => n["@type"]);
      ok(`JSON-LD types: ${types.join(", ")}`);
      const article = graph.find((n) => n["@type"] === "Article");
      const h1Text = textOf(h1s[0]);
      if (path !== "/") {
        check(article && article.headline === h1Text, "Article.headline equals visible H1");
        const bc = graph.find((n) => n["@type"] === "BreadcrumbList");
        const crumbText = textOf(html.match(/<nav class="breadcrumbs"[\s\S]*?<\/nav>/)?.[0] ?? "");
        check(bc && bc.itemListElement.every((i) => crumbText.includes(i.name)), "BreadcrumbList matches visible breadcrumbs");
      }
      const faq = graph.find((n) => n["@type"] === "FAQPage");
      if (faq) check(faq.mainEntity.every((q) => mainText.includes(q.name) && mainText.includes(q.acceptedAnswer.text)), `FAQPage (${faq.mainEntity.length} Q&A) matches visible FAQ`);
      const wp = graph.find((n) => n["@type"] === "WebPage");
      check(wp.url === expected, "WebPage.url equals canonical");
      const banned = ["Review", "AggregateRating", "Product", "Offer", "Person"];
      check(!types.some((t) => banned.includes(t)), "no review/rating/offer/person schema");
    } catch (e) {
      fail(`JSON-LD parse error: ${e.message}`);
    }
  }

  const words = mainText.split(" ").length;
  console.log(`        main content: ${words} words`);
}

console.log("\nContent safety scan (visible text)");
const percentAllowed = { "/what-is-cost-estimation": 2 }; // two "10%" assumptions in the labeled illustrative table
for (const path of ALL) {
  const text = textOf(pages[path].html.match(/<main[\s\S]*?<\/main>/)?.[0] ?? "");
  const pct = text.match(/\d+(\.\d+)?\s?%/g) ?? [];
  const dollars = text.match(/\$\s?\d[\d,]*/g) ?? [];
  check(pct.length === (percentAllowed[path] ?? 0), `${path}: ${pct.length} percentage figure(s)${pct.length ? " " + JSON.stringify(pct) : ""}`);
  check(dollars.length === (path === "/what-is-cost-estimation" ? 8 : 0), `${path}: ${dollars.length} dollar figure(s)`);
  if (path === "/what-is-cost-estimation") check(/Illustrative arithmetic only/.test(text), "dollar figures are labeled illustrative");
  const bad = text.match(/\b(testimonial|free trial|start free|sign up|log ?in|get a quote|case study|trusted by)\b/gi) ?? [];
  check(bad.length === 0, `${path}: no fake-SaaS language${bad.length ? " " + JSON.stringify(bad) : ""}`);
}

linkCheck();

console.log("\nsitemap.xml and robots.txt");
const sm = await (await fetch(BASE + "/sitemap.xml")).text();
const locs = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
check(locs.length === 6, `sitemap lists ${locs.length} URLs`);
for (const path of INDEXABLE) check(locs.includes(path === "/" ? ORIGIN : ORIGIN + path), `sitemap includes ${path}`);
check(!locs.some((l) => l.includes("/domain")), "sitemap excludes /domain");
const rb = await (await fetch(BASE + "/robots.txt")).text();
check(/User-Agent: \*/i.test(rb) && /Allow: \//i.test(rb), "robots allows crawlers");
check(!/Disallow/i.test(rb), "robots has no Disallow rules");
check(rb.includes(`Sitemap: ${ORIGIN}/sitemap.xml`), "robots references sitemap");

console.log(failures ? `\n${failures} check(s) FAILED` : "\nAll checks passed");
process.exit(failures ? 1 : 0);
