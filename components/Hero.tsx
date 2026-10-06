import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import type { Crumb } from "@/lib/jsonld";

type Props = {
  /** The page's only H1. */
  title: string;
  eyebrow?: string;
  /** Concise direct answer shown immediately below the H1. */
  answer: ReactNode;
  answerLabel?: string;
  /** Supporting line below the answer. */
  subtitle?: ReactNode;
  actions?: ReactNode;
  crumbs?: Crumb[];
  /** Optional visual (HTML/CSS) shown beside the text on wide screens. */
  aside?: ReactNode;
  meta?: ReactNode;
  size?: "large" | "default";
};

export function Hero({
  title,
  eyebrow,
  answer,
  answerLabel = "Short answer",
  subtitle,
  actions,
  crumbs,
  aside,
  meta,
  size = "default",
}: Props) {
  return (
    <section className={`hero hero--${size}${aside ? " hero--split" : ""}`}>
      <div className="container">
        {crumbs ? <Breadcrumbs crumbs={crumbs} /> : null}
        <div className="hero__grid">
          <div className="hero__text">
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            <h1>{title}</h1>
            <div className="hero__answer">
              <p className="definition__label">{answerLabel}</p>
              <p>{answer}</p>
            </div>
            {subtitle ? <p className="hero__subtitle">{subtitle}</p> : null}
            {actions ? <div className="hero__actions">{actions}</div> : null}
            {meta ? <p className="hero__meta">{meta}</p> : null}
          </div>
          {aside ? <div className="hero__aside">{aside}</div> : null}
        </div>
      </div>
    </section>
  );
}
