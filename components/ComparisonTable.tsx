import type { ReactNode } from "react";

type Props = {
  caption: string;
  /** Header cells. The first column is treated as the row header. */
  columns: string[];
  rows: ReactNode[][];
  note?: ReactNode;
};

export function ComparisonTable({ caption, columns, rows, note }: Props) {
  return (
    <figure className="table-figure">
      <div className="table-scroll" role="region" aria-label={caption} tabIndex={0}>
        <table className="table">
          <caption>{caption}</caption>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column} scope="col">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) =>
                  cellIndex === 0 ? (
                    <th key={cellIndex} scope="row">
                      {cell}
                    </th>
                  ) : (
                    <td key={cellIndex}>{cell}</td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note ? <figcaption className="table-note">{note}</figcaption> : null}
    </figure>
  );
}
