import Link from "next/link";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { INDEXABLE_PAGES, PAGES } from "@/lib/pages";
import { DOMAIN_PAGE_PATH, FOOTER_DISCLAIMER, SITE_NAME } from "@/lib/site-config";

export function Footer() {
  const topics = INDEXABLE_PAGES.filter((page) => page.path !== PAGES.home.path);
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div>
            <p className="site-footer__brand">{SITE_NAME}</p>
            <p className="site-footer__blurb">
              An educational resource on cost estimation and AI-assisted estimating workflows.
            </p>
          </div>
          <nav aria-label="Footer">
            <p className="site-footer__heading">Topics</p>
            <ul className="site-footer__list">
              <li>
                <Link href={PAGES.home.path}>AI cost estimator overview</Link>
              </li>
              {topics.map((page) => (
                <li key={page.path}>
                  <Link href={page.path}>{page.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="site-footer__heading">The domain</p>
            <ul className="site-footer__list">
              <li>
                <Link href={DOMAIN_PAGE_PATH}>About this domain</Link>
              </li>
            </ul>
          </div>
        </div>
        <DisclaimerBox title="Disclaimer">
          <p>{FOOTER_DISCLAIMER}</p>
        </DisclaimerBox>
        <p className="site-footer__copy">
          © {new Date().getFullYear()} {SITE_NAME}
        </p>
      </div>
    </footer>
  );
}
