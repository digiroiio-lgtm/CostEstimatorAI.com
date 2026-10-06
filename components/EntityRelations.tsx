import type { ReactNode } from "react";

export type Relation = { from: string; to: string; text: ReactNode };

/** Explicit "A → B: how they relate" list used to state entity relationships in plain language. */
export function EntityRelations({ items, label }: { items: Relation[]; label: string }) {
  return (
    <dl className="relations" aria-label={label}>
      {items.map((item) => (
        <div key={`${item.from}-${item.to}`} className="relations__row">
          <dt>
            {item.from} <span aria-hidden="true">→</span>
            <span className="sr-only"> relates to </span> {item.to}
          </dt>
          <dd>{item.text}</dd>
        </div>
      ))}
    </dl>
  );
}
