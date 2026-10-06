import type { ReactNode } from "react";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { RelatedPages } from "@/components/RelatedPages";
import { TableOfContents, type TocItem } from "@/components/TableOfContents";
import { articleGraph, breadcrumbsFor, type FaqItem } from "@/lib/jsonld";
import type { PageEntry } from "@/lib/pages";
import { CONTENT_UPDATED } from "@/lib/site-config";

type Props = {
  page: PageEntry;
  /** Direct answer shown immediately below the H1. */
  answer: ReactNode;
  subtitle?: ReactNode;
  toc: TocItem[];
  faqs?: FaqItem[];
  /** Override the related-pages block (used by the commercial category pages). */
  related?: { title?: string; paths: string[] };
  /** Optional extra block rendered after the article, after related pages. */
  after?: ReactNode;
  children: ReactNode;
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

/** Shared shell for the pillar pages: hero, breadcrumbs, table of contents, JSON-LD, related links. */
export function ArticlePage({ page, answer, subtitle, toc, faqs, related, after, children }: Props) {
  return (
    <>
      <JsonLd data={articleGraph(page, faqs)} />
      <Hero
        title={page.h1}
        answer={answer}
        subtitle={subtitle}
        crumbs={breadcrumbsFor(page)}
        meta={
          <>
            Educational content. Last updated{" "}
            <time dateTime={CONTENT_UPDATED}>{dateFormatter.format(new Date(CONTENT_UPDATED))}</time>.
          </>
        }
      />
      <div className="page">
        <div className="container page__grid page__grid--toc">
          <TableOfContents items={toc} />
          <div className="page__main">{children}</div>
        </div>
      </div>
      <div className="container">
        <RelatedPages current={page.path} title={related?.title} paths={related?.paths} />
      </div>
      {after}
    </>
  );
}
