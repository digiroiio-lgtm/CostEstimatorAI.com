/**
 * Registry of the indexable pages. Drives metadata, sitemap, breadcrumbs,
 * related-page links and the build verification script.
 */

export type PageEntry = {
  path: string;
  /** Short label used in breadcrumbs and link lists. */
  label: string;
  /** <title> and Open Graph/Twitter title. */
  title: string;
  /** Meta description and Open Graph/Twitter description. */
  description: string;
  /** Visible H1 (must be unique per page). */
  h1: string;
  /** One-line summary for internal link cards. */
  summary: string;
  /** Primary search intent this page owns. */
  intent: string;
};

export const PAGES = {
  home: {
    path: "/",
    label: "Home",
    title: "AI Cost Estimator | CostEstimatorAI.com",
    description:
      "Learn how AI can assist cost estimation, project budgeting, construction estimating, forecasting and scenario analysis while keeping humans in control.",
    h1: "AI Cost Estimation for Better Budgeting and Project Decisions",
    summary: "The broad overview of AI-assisted cost estimation and how it fits into budgeting.",
    intent: "AI cost estimator, AI cost estimation, cost estimation software",
  },
  whatIs: {
    path: "/what-is-cost-estimation",
    label: "What Is Cost Estimation?",
    title: "What Is Cost Estimation? Process, Methods & Examples",
    description:
      "Learn how cost estimation works, what costs are included, which methods are used and how estimates support budgeting and project decisions.",
    h1: "What Is Cost Estimation?",
    summary: "Definition, purpose, cost components and how an estimate differs from a budget, quote or forecast.",
    intent: "what is cost estimation",
  },
  ai: {
    path: "/ai-cost-estimation",
    label: "AI Cost Estimation",
    title: "AI Cost Estimation: Methods, Workflow & Limitations",
    description:
      "Explore how AI can assist cost estimation through data extraction, historical analysis, cost modeling, scenario comparison and estimate review.",
    h1: "AI Cost Estimation: How Artificial Intelligence Can Assist Estimators",
    summary: "What AI can and cannot do in an estimating workflow, with a clear human-review step.",
    intent: "AI cost estimation, automated cost estimation, machine learning cost estimation",
  },
  project: {
    path: "/project-cost-estimation",
    label: "Project Cost Estimation",
    title: "Project Cost Estimation: Process, Methods & AI",
    description:
      "Understand project cost estimation, common estimating methods, major cost components and how AI can support budgeting and forecasting workflows.",
    h1: "Project Cost Estimation: Process, Methods and AI Support",
    summary: "The project estimating process, common methods and where AI can support budgeting.",
    intent: "project cost estimation, project budgeting",
  },
  construction: {
    path: "/construction-cost-estimation",
    label: "Construction Cost Estimation",
    title: "Construction Cost Estimation: Process & AI Assistance",
    description:
      "Learn how construction cost estimation works across quantities, labor, materials, equipment, overhead and AI-assisted estimating workflows.",
    h1: "Construction Cost Estimation: Costs, Workflow and AI Assistance",
    summary: "Quantities, labor, materials, equipment and overhead, and where AI can assist estimators.",
    intent: "construction cost estimation, construction estimating, AI construction estimating",
  },
  useCases: {
    path: "/use-cases",
    label: "Use Cases",
    title: "AI Cost Estimation Use Cases Across Industries",
    description:
      "Explore AI cost estimation use cases across construction, cloud, manufacturing, energy, logistics, software projects and commercial bidding.",
    h1: "AI Cost Estimation Use Cases",
    summary: "Twelve application areas, each with goal, inputs, AI-assisted task, human decision and output.",
    intent: "AI cost estimation use cases",
  },
} satisfies Record<string, PageEntry>;

export type PageKey = keyof typeof PAGES;

export const INDEXABLE_PAGES: PageEntry[] = Object.values(PAGES);

export const DOMAIN_PAGE = {
  path: "/domain",
  label: "Domain",
  title: "Acquire CostEstimatorAI.com | Domain Details",
  description:
    "CostEstimatorAI.com is a category domain for AI-assisted estimating, budgeting, forecasting and cost intelligence products.",
  h1: "Acquire CostEstimatorAI.com",
} as const;
