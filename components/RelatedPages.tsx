import Link from "next/link";
import { INDEXABLE_PAGES, type PageEntry } from "@/lib/pages";

type Props = {
  /** Path of the current page, excluded from the list. */
  current?: string;
  title?: string;
  /** Specific paths to show; defaults to every informational pillar page except the current one. */
  paths?: string[];
};

/** Internal-link block pointing to the other pillar pages. */
export function RelatedPages({ current, title = "Continue Learning", paths }: Props) {
  const pages: PageEntry[] = INDEXABLE_PAGES.filter((page) =>
    paths ? paths.includes(page.path) : page.group === "pillar" && page.path !== current && page.path !== "/",
  );
  return (
    <section className="section" aria-labelledby="related-heading">
      <div className="section__inner">
        <h2 id="related-heading">{title}</h2>
        <ul className="grid grid--3">
          {pages.map((page) => (
            <li key={page.path} className="card">
              <h3 className="card__title">
                <Link href={page.path}>{page.label}</Link>
              </h3>
              <p>{page.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
