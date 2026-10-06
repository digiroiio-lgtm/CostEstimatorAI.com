/**
 * Single source of truth for site-wide values.
 * Change the canonical origin here and nowhere else.
 */

export const SITE_DOMAIN = "costestimatorai.com";
export const SITE_NAME = "CostEstimatorAI.com";
export const SITE_ORIGIN = `https://${SITE_DOMAIN}`;

export const SITE_DESCRIPTION =
  "Learn how AI can assist cost estimation, project budgeting, construction estimating, forecasting and scenario analysis while keeping humans in control.";

/** Date the educational content was last reviewed (ISO 8601). Shown on pages and used in sitemap/JSON-LD. */
export const CONTENT_UPDATED = "2026-10-06";

/** Internal fallback used when no external sale/contact URL is configured. */
export const DOMAIN_PAGE_PATH = "/domain";

/**
 * Where "domain for sale" calls to action point.
 * Set NEXT_PUBLIC_DOMAIN_SALE_URL to a listing, broker or contact URL.
 * When empty, links route to the internal /domain page.
 */
export const SALE_URL_CONFIGURED = (process.env.NEXT_PUBLIC_DOMAIN_SALE_URL ?? "").trim();

export function getSaleUrl(): string {
  return SALE_URL_CONFIGURED || DOMAIN_PAGE_PATH;
}

export function isSaleUrlExternal(): boolean {
  return /^https?:\/\//i.test(SALE_URL_CONFIGURED);
}

export type NavItem = { label: string; href: string };

export const NAVIGATION: NavItem[] = [
  { label: "Cost Estimation", href: "/what-is-cost-estimation" },
  { label: "AI Estimation", href: "/ai-cost-estimation" },
  { label: "Project Costs", href: "/project-cost-estimation" },
  { label: "Construction", href: "/construction-cost-estimation" },
  { label: "Use Cases", href: "/use-cases" },
];

export const SALE_CTA_LABEL = "Domain for Sale";

export const DEFAULT_OG_IMAGE = {
  url: "/og-default.png",
  width: 1200,
  height: 630,
  alt: "CostEstimatorAI.com: AI-assisted cost estimation, explained",
};

export const LOCALE = "en_US";

export const FOOTER_DISCLAIMER =
  "CostEstimatorAI.com provides general educational information about cost estimation and AI-assisted estimating workflows. It does not provide binding quotes, financial advice, engineering advice or professional estimating services.";

export function absoluteUrl(path: string): string {
  if (path === "/" || path === "") return SITE_ORIGIN;
  return `${SITE_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}
