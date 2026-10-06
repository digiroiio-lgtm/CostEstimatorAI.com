import Link from "next/link";

export type UseCase = {
  id: string;
  title: string;
  goal: string;
  inputs: string;
  aiTask: string;
  humanDecision: string;
  output: string;
};

type SummaryProps = { variant: "summary"; title: string; description: string; href: string };
type DetailProps = { variant: "detail" } & UseCase;

/**
 * "summary": a short card linking to a page (home).
 * "detail": the full Goal → Inputs → AI-Assisted Task → Human Decision → Output chain.
 */
export function UseCaseCard(props: SummaryProps | DetailProps) {
  if (props.variant === "summary") {
    return (
      <li className="card">
        <h3 className="card__title">
          <Link href={props.href}>{props.title}</Link>
        </h3>
        <p>{props.description}</p>
      </li>
    );
  }

  const rows: [string, string][] = [
    ["Goal", props.goal],
    ["Inputs", props.inputs],
    ["AI-Assisted Task", props.aiTask],
    ["Human Decision", props.humanDecision],
    ["Output", props.output],
  ];

  return (
    <article id={props.id} className="usecase" aria-labelledby={`${props.id}-title`}>
      <h3 id={`${props.id}-title`}>{props.title}</h3>
      <dl className="usecase__chain">
        {rows.map(([term, detail]) => (
          <div key={term} className="usecase__row">
            <dt>{term}</dt>
            <dd>{detail}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
