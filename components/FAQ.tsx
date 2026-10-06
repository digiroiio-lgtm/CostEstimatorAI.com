import type { FaqItem } from "@/lib/jsonld";

/**
 * Visible question-and-answer list. Answers are always rendered (not collapsed)
 * so people and crawlers see the same content as the FAQPage JSON-LD.
 */
export function FAQ({ items }: { items: FaqItem[] }) {
  return (
    <div className="faq">
      {items.map((item) => (
        <div key={item.question} className="faq__item">
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}
    </div>
  );
}
