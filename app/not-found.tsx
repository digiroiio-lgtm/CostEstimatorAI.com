import type { Metadata } from "next";
import Link from "next/link";
import { INDEXABLE_PAGES } from "@/lib/pages";

export const metadata: Metadata = {
  title: { absolute: "Page Not Found | CostEstimatorAI.com" },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="hero hero--default">
      <div className="container prose">
        <h1>Page not found</h1>
        <p>The page you requested does not exist or has moved. These topics may help:</p>
        <ul>
          {INDEXABLE_PAGES.map((page) => (
            <li key={page.path}>
              <Link href={page.path}>{page.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
