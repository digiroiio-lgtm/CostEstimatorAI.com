/**
 * External references cited on the site. Only add sources that exist and that
 * support the claim they are attached to. Rendered by <SourceCitation />.
 */

export type Source = {
  id: string;
  /** Short label used for inline citations. */
  short: string;
  title: string;
  publisher: string;
  url: string;
  /** What the source is cited for. */
  note: string;
};

export const SOURCES = {
  gao: {
    id: "gao",
    short: "GAO",
    title: "Cost Estimating and Assessment Guide: Best Practices for Developing and Managing Program Costs (GAO-20-195G)",
    publisher: "U.S. Government Accountability Office",
    url: "https://www.gao.gov/products/gao-20-195g",
    note: "A 12-step cost estimating process and four characteristics of a reliable estimate: comprehensive, well documented, accurate and credible.",
  },
  pmi: {
    id: "pmi",
    short: "PMI",
    title: "Leveraging the new practice standard for project estimating",
    publisher: "Project Management Institute",
    url: "https://www.pmi.org/learning/library/leveraging-new-practice-standard-project-estimating-6222",
    note: "Background on PMI's practice standard for project estimating and common estimating techniques.",
  },
  aace: {
    id: "aace",
    short: "AACE",
    title: "Cost Estimate Classification System (Recommended Practices 17R-97 and 18R-97)",
    publisher: "AACE International",
    url: "https://www.aacei.org",
    note: "Classifies estimates by the maturity of project definition; less defined projects carry more uncertainty.",
  },
  nist: {
    id: "nist",
    short: "NIST",
    title: "Artificial Intelligence Risk Management Framework (AI RMF 1.0)",
    publisher: "National Institute of Standards and Technology",
    url: "https://www.nist.gov/itl/ai-risk-management-framework",
    note: "A voluntary framework for managing risks of AI systems, including the role of human oversight.",
  },
  finops: {
    id: "finops",
    short: "FinOps Foundation",
    title: "FinOps Framework: Forecasting capability",
    publisher: "FinOps Foundation",
    url: "https://www.finops.org/framework/capabilities/forecasting",
    note: "Describes forecasting of cloud cost using historical spend and planned changes, and how it informs budgeting.",
  },
  masterformat: {
    id: "masterformat",
    short: "CSI",
    title: "MasterFormat",
    publisher: "Construction Specifications Institute",
    url: "https://www.csiresources.org/standards/masterformat",
    note: "A widely used standard for organizing construction requirements and work results, often used to structure estimates.",
  },
} satisfies Record<string, Source>;

export type SourceId = keyof typeof SOURCES;
