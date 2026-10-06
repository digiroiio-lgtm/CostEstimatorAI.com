import type { PageEntry } from "@/lib/pages";
import { PAGES } from "@/lib/pages";
import {
  CONTENT_UPDATED,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_ORIGIN,
  absoluteUrl,
} from "@/lib/site-config";

export type Crumb = { name: string; path: string };
export type FaqItem = { question: string; answer: string };

const ORG_ID = `${SITE_ORIGIN}/#organization`;
const SITE_ID = `${SITE_ORIGIN}/#website`;

/** Minimal publisher entity: name and URL only. No invented company details. */
const organization = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: SITE_NAME,
  url: SITE_ORIGIN,
};

const website = {
  "@type": "WebSite",
  "@id": SITE_ID,
  url: SITE_ORIGIN,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  inLanguage: "en-US",
  publisher: { "@id": ORG_ID },
};

export function breadcrumbsFor(page: PageEntry): Crumb[] {
  return [
    { name: PAGES.home.label, path: PAGES.home.path },
    { name: page.label, path: page.path },
  ];
}

function breadcrumbList(crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(crumbs[crumbs.length - 1].path)}#breadcrumb`,
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

function webPage(page: PageEntry, extra: Record<string, unknown> = {}) {
  const url = absoluteUrl(page.path);
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: page.title,
    description: page.description,
    inLanguage: "en-US",
    isPartOf: { "@id": SITE_ID },
    datePublished: CONTENT_UPDATED,
    dateModified: CONTENT_UPDATED,
    ...extra,
  };
}

function faqPage(page: PageEntry, faqs: FaqItem[]) {
  return {
    "@type": "FAQPage",
    "@id": `${absoluteUrl(page.path)}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

/** Home: Organization, WebSite, WebPage and FAQPage (FAQ is visible on the page). */
export function homeGraph(page: PageEntry, faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      website,
      webPage(page, { about: { "@type": "Thing", name: "AI-assisted cost estimation" } }),
      faqPage(page, faqs),
    ],
  };
}

/** Pillar pages: WebPage, BreadcrumbList, Article and optional FAQPage. */
export function articleGraph(page: PageEntry, faqs: FaqItem[] = []) {
  const url = absoluteUrl(page.path);
  const crumbs = breadcrumbsFor(page);
  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      website,
      webPage(page, { breadcrumb: { "@id": `${url}#breadcrumb` } }),
      breadcrumbList(crumbs),
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: page.h1,
        description: page.description,
        inLanguage: "en-US",
        datePublished: CONTENT_UPDATED,
        dateModified: CONTENT_UPDATED,
        mainEntityOfPage: { "@id": `${url}#webpage` },
        author: { "@id": ORG_ID },
        publisher: { "@id": ORG_ID },
        isPartOf: { "@id": SITE_ID },
      },
      ...(faqs.length ? [faqPage(page, faqs)] : []),
    ],
  };
}
