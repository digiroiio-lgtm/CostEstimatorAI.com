import Link from "next/link";
import { SaleLink } from "@/components/SaleLink";
import { SiteNav } from "@/components/SiteNav";
import {
  NAVIGATION,
  SALE_CTA_LABEL,
  SITE_NAME,
  getSaleUrl,
  isSaleUrlExternal,
} from "@/lib/site-config";

export function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="brand" aria-label={`${SITE_NAME} home`}>
          <svg className="brand__mark" viewBox="0 0 32 32" width="28" height="28" aria-hidden="true" focusable="false">
            <rect width="32" height="32" rx="7" fill="#12263f" />
            <rect x="7" y="17" width="4" height="8" rx="1" fill="#6fb3ff" />
            <rect x="14" y="12" width="4" height="13" rx="1" fill="#3fbf9a" />
            <rect x="21" y="7" width="4" height="18" rx="1" fill="#ffffff" />
          </svg>
          <span className="brand__name">
            CostEstimator<span className="brand__accent">AI</span>.com
          </span>
        </Link>
        <SiteNav
          items={NAVIGATION}
          saleHref={getSaleUrl()}
          saleExternal={isSaleUrlExternal()}
          saleLabel={SALE_CTA_LABEL}
        />
        <SaleLink className="btn btn--outline btn--small site-header__cta">{SALE_CTA_LABEL}</SaleLink>
      </div>
    </header>
  );
}
