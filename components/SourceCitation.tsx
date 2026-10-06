import { SOURCES, type SourceId } from "@/lib/sources";

/** Inline citation marker that links to the matching entry in <SourceCitation />. */
export function Cite({ id }: { id: SourceId }) {
  const source = SOURCES[id];
  return (
    <sup className="cite">
      <a href={`#src-${id}`} aria-label={`Source: ${source.short}`}>
        [{source.short}]
      </a>
    </sup>
  );
}

/** "Sources" list for a page. Only external references that exist in lib/sources.ts. */
export function SourceCitation({ ids }: { ids: SourceId[] }) {
  return (
    <section id="sources" className="section" aria-labelledby="sources-heading">
      <div className="section__inner">
        <h2 id="sources-heading">Sources and Further Reading</h2>
        <ul className="sources">
          {ids.map((id) => {
            const source = SOURCES[id];
            return (
              <li key={id} id={`src-${id}`}>
                <a href={source.url} rel="noopener noreferrer" target="_blank">
                  {source.title}
                </a>{" "}
                <span className="sources__pub">— {source.publisher}.</span>{" "}
                <span className="sources__note">{source.note}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
