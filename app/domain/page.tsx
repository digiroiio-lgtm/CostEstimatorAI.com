import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CostCategoryGrid } from "@/components/CostCategoryGrid";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { buildMetadata } from "@/lib/metadata";
import { DOMAIN_PAGE } from "@/lib/pages";
import { PAGES } from "@/lib/pages";
import { SALE_URL_CONFIGURED, isSaleUrlExternal } from "@/lib/site-config";

// noindex, follow. Also excluded from the sitemap.
export const metadata = buildMetadata({
  path: DOMAIN_PAGE.path,
  title: DOMAIN_PAGE.title,
  description: DOMAIN_PAGE.description,
  noindex: true,
});

export default function DomainPage() {
  const configured = SALE_URL_CONFIGURED !== "";
  return (
    <>
      <section className="hero hero--default">
        <div className="container prose">
          <Breadcrumbs
            crumbs={[
              { name: PAGES.home.label, path: PAGES.home.path },
              { name: DOMAIN_PAGE.label, path: DOMAIN_PAGE.path },
            ]}
          />
          <h1>{DOMAIN_PAGE.h1}</h1>
          <p className="section__lead">
            CostEstimatorAI.com is a premium category domain for companies building AI-assisted estimating,
            budgeting, forecasting and cost intelligence products.
          </p>
        </div>
      </section>

      <div className="page">
        <div className="container prose">
          <h2>Potential Applications</h2>
          <CostCategoryGrid
            columns={2}
            headingLevel="h3"
            items={[
              { title: "Construction estimating software", description: "Takeoff, estimate assembly and bid support for contractors and owners." },
              { title: "Project cost management", description: "Budgets, forecasts and variance tracking for project teams." },
              { title: "AI estimating SaaS", description: "A software product centered on AI-assisted estimating workflows." },
              { title: "Cloud cost intelligence", description: "Cost estimation and forecasting for cloud and FinOps teams." },
              { title: "Manufacturing cost software", description: "Product and production cost modeling." },
              { title: "Energy estimation tools", description: "Capital and operating cost estimation for energy projects." },
              { title: "Procurement and bidding software", description: "Bid comparison, scope checking and cost analysis." },
              { title: "Budgeting platforms", description: "Planning and forecasting tools for finance teams." },
            ]}
          />

          <h2>What the Acquisition Includes</h2>
          <p>
            The buyer is acquiring the domain name and the associated informational website asset: an educational site
            on AI-assisted cost estimation with a search-ready structure. See the{" "}
            <Link href={PAGES.home.path}>homepage</Link> and the five guides it links to.
          </p>
          <DisclaimerBox title="What this is not">
            <p>
              CostEstimatorAI.com is not represented as an operating estimating SaaS company. It has no customers,
              software, pricing data or proprietary models unless separately agreed in writing.
            </p>
          </DisclaimerBox>

          <h2>Make an Inquiry</h2>
          {configured ? (
            <p>
              <a
                className="btn btn--primary"
                href={SALE_URL_CONFIGURED}
                rel={isSaleUrlExternal() ? "noopener" : undefined}
              >
                Make an Inquiry
              </a>
            </p>
          ) : (
            <>
              <p>
                <button type="button" className="btn btn--primary" disabled>
                  Make an Inquiry
                </button>
              </p>
              <p className="table-note">Inquiry details are being finalized.</p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
