import Link from "next/link";

export type Category = {
  title: string;
  description: string;
  href?: string;
};

type Props = {
  items: Category[];
  columns?: 2 | 3 | 4;
  /** Heading level for card titles; defaults to h3. */
  headingLevel?: "h3" | "h4";
};

export function CostCategoryGrid({ items, columns = 3, headingLevel = "h3" }: Props) {
  const Heading = headingLevel;
  return (
    <ul className={`grid grid--${columns}`}>
      {items.map((item) => (
        <li key={item.title} className="card">
          <Heading className="card__title">
            {item.href ? <Link href={item.href}>{item.title}</Link> : item.title}
          </Heading>
          <p>{item.description}</p>
        </li>
      ))}
    </ul>
  );
}
