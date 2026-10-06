export type Step = { title: string; description?: string };

type Props = {
  steps: Step[];
  /** Accessible name for the list, e.g. "Cost estimation workflow". */
  label: string;
  /** "flow" is a compact HTML/CSS diagram; "detailed" shows descriptions as a numbered list. */
  variant?: "flow" | "detailed";
};

export function ProcessSteps({ steps, label, variant = "flow" }: Props) {
  return (
    <ol className={`steps steps--${variant}`} aria-label={label}>
      {steps.map((step, index) => (
        <li key={step.title} className="steps__item">
          <span className="steps__num" aria-hidden="true">
            {index + 1}
          </span>
          <div className="steps__content">
            <span className="steps__title">{step.title}</span>
            {step.description ? <span className="steps__desc">{step.description}</span> : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
