import { SaleLink } from "@/components/SaleLink";

/** Slim, visually secondary sitewide notice that the domain is available. */
export function DomainSaleBanner() {
  return (
    <aside className="sale-banner" aria-label="Domain availability">
      <div className="container sale-banner__inner">
        <SaleLink className="sale-banner__link">
          <span className="sale-banner__long">
            CostEstimatorAI.com is available for acquisition
            <span aria-hidden="true"> → </span>
            <span className="sale-banner__action">View Domain Details</span>
          </span>
          <span className="sale-banner__short">
            This domain is for sale <span aria-hidden="true">→</span>
          </span>
        </SaleLink>
      </div>
    </aside>
  );
}
