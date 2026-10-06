export type TocItem = { id: string; title: string };

export function TableOfContents({ items }: { items: TocItem[] }) {
  return (
    <nav className="toc" aria-label="On this page">
      <p className="toc__title">On this page</p>
      <ol>
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.title}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
