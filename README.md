# CostEstimatorAI.com

An informational resource site about **AI-assisted cost estimation**. It is built to rank and to be understood
by search engines and AI systems, and to support the value of the CostEstimatorAI.com domain, which is for sale.

The site is **not** a software product. It has no calculator, login, pricing, customers, testimonials or cost
database, and it publishes no current market prices.

## Stack

Next.js (App Router) · TypeScript · plain CSS · no client-side JavaScript except the mobile menu.
All pages are statically rendered.

## Commands

```bash
npm install
npm run dev          # local development
npm run build        # production build
npm run start        # serve the production build
npm run lint         # ESLint
npm run typecheck    # tsc --noEmit
npm run verify       # post-build checks (needs a running server, see below)
npm run check:links  # internal link + anchor check only
```

Post-build verification:

```bash
npm run build
npx next start -p 3100 &
BASE_URL=http://localhost:3100 npm run verify
```

`verify` checks every route: status, exactly one H1, heading order, unique title/description, canonical, Open Graph
and Twitter tags, robots meta, sale banner, footer disclaimer, JSON-LD validity and match with visible content,
internal links and anchors, sitemap, robots.txt, and a scan for stray percentages, dollar figures and SaaS-style language.

## Configuration

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_DOMAIN_SALE_URL` | Full URL for the sale banner, header button, hero button and the `/domain` "Make an Inquiry" button. Leave empty to route banner/header/hero links to `/domain`. Set at build time. |

Copy `.env.example` to `.env.local` for local use. On Vercel, set it under Project Settings → Environment Variables.

The canonical origin (`https://costestimatorai.com`), site name, navigation, default metadata and the footer
disclaimer live in `lib/site-config.ts`.

## Structure

```
app/            routes, layout, robots.ts, sitemap.ts, not-found.tsx, icons
components/     Header, Footer, DomainSaleBanner, Breadcrumbs, Hero, DefinitionBox, ComparisonTable,
                ProcessSteps, CostCategoryGrid, UseCaseCard, FAQ, ArticleSection, DisclaimerBox,
                SourceCitation (+ ArticlePage, EntityRelations, RelatedPages, TableOfContents, JsonLd, ...)
lib/            site-config.ts, pages.ts (page registry), metadata.ts, jsonld.ts, sources.ts
public/         og-default.png
scripts/        verify-site.mjs
```

Indexable pages: `/`, `/what-is-cost-estimation`, `/ai-cost-estimation`, `/project-cost-estimation`,
`/construction-cost-estimation`, `/use-cases`. `/domain` is `noindex, follow` and excluded from the sitemap.

## Content rules

- Figures on the site are illustrative only and labeled as such (one worked example on `/what-is-cost-estimation`).
- External claims are cited through `lib/sources.ts`. Only add a source that exists and supports the claim.
- Structured data is generated from the same data as the visible breadcrumbs and FAQ.
- When content is edited, update `CONTENT_UPDATED` in `lib/site-config.ts`.
