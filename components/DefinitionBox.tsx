import type { ReactNode } from "react";

type Props = {
  /** Label shown above the text, e.g. "Short answer" or "Definition". */
  label?: string;
  children: ReactNode;
};

/** Direct-answer/definition block: states the answer before the detail. */
export function DefinitionBox({ label = "Short answer", children }: Props) {
  return (
    <div className="definition">
      <p className="definition__label">{label}</p>
      <div className="definition__body">{children}</div>
    </div>
  );
}
