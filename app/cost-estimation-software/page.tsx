import Link from "next/link";
import { ArticlePage } from "@/components/ArticlePage";
import { ArticleSection } from "@/components/ArticleSection";
import { AssetNote } from "@/components/AssetNote";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CostCategoryGrid } from "@/components/CostCategoryGrid";
import { DefinitionBox } from "@/components/DefinitionBox";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { EntityRelations } from "@/components/EntityRelations";
import { FAQ } from "@/components/FAQ";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Cite, SourceCitation } from "@/components/SourceCitation";
import type { FaqItem } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import { PAGES } from "@/lib/pages";

const page = PAGES.software;

export const metadata = buildMetadata({ ...page, type: "article" });

const faqs: FaqItem[] = [
  {
    question: "What is the difference between cost estimation software and cost management software?",
    answer:
      "Estimation software helps predict cost before or early in the work. Cost management software tracks budgets, commitments, actual costs and forecasts during delivery. Some suites combine both, so check which functions you need.",
  },
  {
    question: "Are spreadsheets enough for cost estimation?",
    answer:
      "For small or simple estimates with careful controls, they can be. As estimates grow, risks include formula errors, version confusion and weak audit trails. Dedicated software is one way to address those risks, but it does not replace sound method.",
  },
  {
    question: "Does cost estimation software include price data?",
    answer:
      "Some products include or license cost data, and others rely on the user's own. Always check where prices come from, how current they are and whether they reflect your location.",
  },
];

export default function CostEstimationSoftwarePage() {
  return (
    <ArticlePage
      page={page}
      answer="Cost estimation software helps teams build, organize and revise cost estimates using structured cost data, templates and calculations. Categories range from spreadsheets and construction takeoff tools to project cost management systems, cloud cost tools and AI-assisted estimators. The right choice depends on the type of work, the data available and the level of review required."
      subtitle="A category guide to the types of cost estimation software, the features buyers evaluate and how to choose."
      toc={[
        { id: "what-is-cost-estimation-software", title: "What it is" },
        { id: "types", title: "Types of software" },
        { id: "features", title: "Features buyers evaluate" },
        { id: "workflow", title: "Workflow" },
        { id: "how-to-choose", title: "How to choose" },
        { id: "use-cases", title: "Use cases by team" },
        { id: "where-ai-fits", title: "Where AI fits" },
        { id: "limitations", title: "Limitations" },
        { id: "faq", title: "FAQ" },
        { id: "sources", title: "Sources" },
      ]}
      faqs={faqs}
      related={{
        title: "Explore Related Category Content",
        paths: [
          PAGES.aiEstimator.path,
          PAGES.constructionAi.path,
          PAGES.whatIs.path,
          PAGES.project.path,
          PAGES.useCases.path,
        ],
      }}
      after={<AssetNote category="estimating software" />}
    >
      <ArticleSection id="what-is-cost-estimation-software" title="What Is Cost Estimation Software?">
        <DefinitionBox label="Definition">
          <p>
            Cost estimation software is a tool for preparing, documenting and revising{" "}
            <Link href={PAGES.whatIs.path}>cost estimates</Link>. It stores cost data, applies rates and formulas to
            quantities, and produces estimates that can be reviewed, versioned and shared.
          </p>
        </DefinitionBox>
        <EntityRelations
          label="How cost estimation software relates to other cost functions"
          items={[
            { from: "Cost Estimation Software", to: "Estimating", text: "Assembles estimates from scope, quantities, unit costs and assumptions." },
            { from: "Cost Estimation Software", to: "Budgeting", text: "Passes approved estimates to budgets, sometimes inside the same suite." },
            { from: "Cost Estimation Software", to: "Forecasting", text: "Some products compare actuals with the estimate and project cost at completion." },
            { from: "Cost Estimation Software", to: "AI-Assisted Estimating", text: "Adds extraction, classification and scenario functions in some products." },
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="types"
        title="Types of Cost Estimation Software"
        lead="Products overlap, but most fall into six categories. Categories are listed here without naming vendors."
      >
        <ComparisonTable
          caption="Main categories of cost estimation software"
          columns={["Type", "Typical use", "Strength", "Watch for"]}
          rows={[
            ["Spreadsheets", "General-purpose estimates and budgets.", "Flexible and familiar.", "Formula errors, version control and audit trail."],
            ["Construction estimating and takeoff software", "Quantities and pricing for building and civil work.", "Built around drawings, trades and cost codes.", "Fit with the trades and project types you work on."],
            ["Project cost management software", "Budgets, commitments, actuals and forecasts.", "Tracks cost through delivery.", "May offer limited estimate building."],
            ["Product and manufacturing costing software", "Bills of materials, processes and volumes.", "Models unit and production cost.", "Data setup effort."],
            ["Cloud cost management tools", "Estimating and forecasting cloud spend.", "Uses usage and billing data.", "Cloud-specific; not for other cost types."],
            ["AI-assisted estimating software", "Document-heavy estimating with historical data.", "Automates extraction, comparison and scenarios.", "Needs verification and good data. See below."],
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="features"
        title="Features Buyers Typically Evaluate"
        lead="Feature lists look similar across products. Test how each feature behaves with your own estimates."
      >
        <CostCategoryGrid
          items={[
            { title: "Cost libraries", description: "Storing, updating and dating unit costs, rates and assemblies." },
            { title: "Estimate assembly", description: "Templates, work breakdown structures and reusable items." },
            { title: "Quantity input or takeoff", description: "Importing or measuring quantities from documents." },
            { title: "Versioning and revisions", description: "Keeping each revision and showing what changed." },
            { title: "Review and collaboration", description: "Comments, approvals and role-based access." },
            { title: "Reporting and export", description: "Summaries by category, phase or cost code, exportable to other tools." },
            { title: "Integrations", description: "Connections to accounting, ERP, scheduling and project systems." },
            { title: "Audit trail", description: "Recorded assumptions, sources and changes." },
            { title: "AI-assisted functions", description: "Extraction, classification, comparison and scenario tools, where offered." },
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="workflow"
        title="Typical Cost Estimation Software Workflow"
        lead="Software supports an established process. It does not replace the steps in project cost estimation."
      >
        <ProcessSteps
          label="Cost estimation software workflow"
          steps={[
            { title: "Define Scope" },
            { title: "Import Data" },
            { title: "Build Estimate" },
            { title: "Apply Rates" },
            { title: "Review" },
            { title: "Approve" },
            { title: "Track and Forecast" },
          ]}
        />
        <p>
          The methods behind these steps are covered in{" "}
          <Link href={PAGES.project.path}>Project Cost Estimation</Link>.
        </p>
      </ArticleSection>

      <ArticleSection
        id="how-to-choose"
        title="How to Choose Cost Estimation Software"
        lead={
          <>
            Start from the estimate you need to produce, not from the feature list. Public-sector guidance describes
            a reliable estimate as comprehensive, well documented, accurate and credible
            <Cite id="gao" />, so software should make documentation and review easier.
          </>
        }
      >
        <ul className="checklist">
          <li><strong>Fit with estimate type and stage.</strong> Early parametric budgets and detailed bottom-up estimates need different functions.</li>
          <li><strong>Method support.</strong> Check that it supports the estimating methods you use.</li>
          <li><strong>Data ownership.</strong> Know who owns the cost library and how you can export it.</li>
          <li><strong>Transparency.</strong> Assumptions, sources and calculations should be visible.</li>
          <li><strong>Integration.</strong> Confirm it connects to the systems that hold your actual costs.</li>
          <li><strong>Permissions and security.</strong> Confidential estimates need controlled access.</li>
          <li><strong>Adoption effort.</strong> Include data migration, training and support in the assessment.</li>
          <li><strong>Pilot on real work.</strong> Re-create a completed estimate and compare with actual costs.</li>
        </ul>
      </ArticleSection>

      <ArticleSection id="use-cases" title="Cost Estimation Software Use Cases by Team">
        <ComparisonTable
          caption="What different teams typically need from cost estimation software"
          columns={["Team", "Typical need"]}
          rows={[
            ["Contractors and estimators", "Quantities, unit costs, subcontractor pricing and bid-ready estimates."],
            ["Project managers", "Budgets, work breakdowns and change tracking."],
            ["Finance and FP&A", "Budgets, forecasts and variance reporting."],
            ["FinOps and engineering", "Cloud usage forecasts and scenario comparisons."],
            ["Manufacturers", "Unit costs by material, process and volume."],
            ["Procurement", "Comparing bids and checking scope coverage."],
          ]}
          note={
            <>
              See <Link href={PAGES.useCases.path}>AI cost estimation use cases</Link> for goal, input, task and
              decision detail.
            </>
          }
        />
      </ArticleSection>

      <ArticleSection
        id="where-ai-fits"
        title="Where Does AI Fit in Cost Estimation Software?"
        lead="AI adds functions on top of conventional estimating features. It is a subset of the category, not a separate one."
      >
        <ComparisonTable
          caption="Conventional and AI-assisted functions in estimating software"
          columns={["Function", "Conventional", "AI-assisted"]}
          rows={[
            ["Getting data in", "Manual entry or file import.", "Extraction from documents, reviewed by a person."],
            ["Categorizing costs", "Manual coding or fixed rules.", "Suggested classification, corrected by a person."],
            ["Finding similar work", "Manual search of past estimates.", "Suggested comparable projects."],
            ["Testing assumptions", "Manual rework.", "Generated scenarios."],
            ["Checking the estimate", "Peer review.", "Anomaly flags that support peer review."],
          ]}
        />
        <p>
          Read <Link href={PAGES.aiEstimator.path}>AI cost estimator</Link> for the AI-specific capabilities and
          evaluation criteria, and <Link href={PAGES.ai.path}>AI Cost Estimation</Link> for the methodology.
        </p>
      </ArticleSection>

      <ArticleSection id="limitations" title="Limitations of Cost Estimation Software">
        <ul className="checklist checklist--caution">
          <li>Software organizes an estimate. It does not make the underlying assumptions correct.</li>
          <li>Outdated or non-local price data produces outdated estimates.</li>
          <li>Polished reports can create more confidence than the estimate deserves.</li>
          <li>Judgment on scope, risk and commercial terms stays with people.</li>
        </ul>
        <DisclaimerBox tone="warning" title="Important statement">
          <p>
            Estimates produced with any software are decision support, not binding quotes or guaranteed final costs.
          </p>
        </DisclaimerBox>
      </ArticleSection>

      <ArticleSection id="faq" title="Frequently Asked Questions">
        <FAQ items={faqs} />
      </ArticleSection>

      <SourceCitation ids={["gao"]} />
    </ArticlePage>
  );
}
