import type { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  /** One- or two-sentence answer shown before the detail. */
  lead?: ReactNode;
  children?: ReactNode;
  /** Use "band" for a tinted full-width section on the home page. */
  tone?: "plain" | "band";
};

/** A titled <section> with an H2 and anchor id. */
export function ArticleSection({ id, title, lead, children, tone = "plain" }: Props) {
  return (
    <section id={id} className={`section section--${tone}`} aria-labelledby={`${id}-heading`}>
      <div className="section__inner">
        <h2 id={`${id}-heading`}>{title}</h2>
        {lead ? <p className="section__lead">{lead}</p> : null}
        {children}
      </div>
    </section>
  );
}
