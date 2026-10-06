import type { ReactNode } from "react";

type Props = {
  title?: string;
  children: ReactNode;
  tone?: "note" | "warning";
};

/** Callout for limitations, assumptions and required disclaimers. */
export function DisclaimerBox({ title, children, tone = "note" }: Props) {
  return (
    <aside className={`callout callout--${tone}`}>
      {title ? <p className="callout__title">{title}</p> : null}
      <div className="callout__body">{children}</div>
    </aside>
  );
}
