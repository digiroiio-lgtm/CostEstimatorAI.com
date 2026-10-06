import Link from "next/link";
import { ArticleSection } from "@/components/ArticleSection";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CostCategoryGrid } from "@/components/CostCategoryGrid";
import { DefinitionBox } from "@/components/DefinitionBox";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { EntityRelations } from "@/components/EntityRelations";
import { EstimateAnatomy } from "@/components/EstimateAnatomy";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { ProcessSteps } from "@/components/ProcessSteps";
import { RelatedPages } from "@/components/RelatedPages";
import { SaleLink } from "@/components/SaleLink";
import { Cite, SourceCitation } from "@/components/SourceCitation";
import { UseCaseCard } from "@/components/UseCaseCard";
import { homeGraph, type FaqItem } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import { PAGES } from "@/lib/pages";
import { SALE_CTA_LABEL } from "@/lib/site-config";

const page = PAGES.home;

export const metadata = buildMetadata(page);

const faqs: FaqItem[] = [
  {
    question: "What is an AI cost estimator?",
    answer:
      "An AI cost estimator is a tool or workflow that uses artificial intelligence to assist with parts of estimating, such as extracting quantities, classifying cost items and comparing historical projects. A person reviews and approves the result. CostEstimatorAI.com is an educational resource and does not currently offer estimating software.",
  },
  {
    question: "Can AI replace human cost estimators?",
    answer:
      "No. AI can speed up data processing and scenario analysis, but scope interpretation, local market knowledge, commercial judgment and final approval still need experienced people.",
  },
  {
    question: "How accurate is AI cost estimation?",
    answer:
      "Accuracy depends on how well the scope is defined, the quality and age of the data, and the method used. No single accuracy figure applies to every project, so validate any tool against your own past projects before relying on it.",
  },
  {
    question: "What data does AI cost estimation need?",
    answer:
      "Typically scope documents, quantities, labor and material assumptions, past estimates, actual project costs and current pricing. Cleaner, better-organized data generally produces more useful output.",
  },
  {
    question: "What is the difference between a cost estimate and a quote?",
    answer:
      "An estimate predicts the likely cost of work using the information available. A quote is a price offered to a customer, usually on stated terms and sometimes binding. An estimate is often one input to a quote.",
  },
  {
    question: "Does CostEstimatorAI.com provide estimates or quotes?",
    answer:
      "No. The site provides general educational information only. It does not provide binding quotes, financial advice, engineering advice or professional estimating services.",
  },
];

export default function HomePage() {
  return (
    <div className="home">
      <JsonLd data={homeGraph(page, faqs)} />

      <Hero
        size="large"
        eyebrow="AI-assisted cost estimation"
        title={page.h1}
        answer="AI cost estimation uses artificial intelligence to help analyze project scope, historical costs, labor, materials, usage data and other cost drivers. It can accelerate data processing and scenario analysis, but final budgets and commercial decisions should remain under appropriate human review. It supports estimators; it does not replace them."
        subtitle="Understand how AI can support cost estimation by analyzing scope, historical data, cost drivers and scenarios while keeping experienced professionals in control."
        actions={
          <>
            <Link href={PAGES.whatIs.path} className="btn btn--primary">
              Explore Cost Estimation
            </Link>
            <SaleLink className="btn btn--outline">{SALE_CTA_LABEL}</SaleLink>
          </>
        }
        aside={<EstimateAnatomy />}
      />

      <ArticleSection id="what-is-cost-estimation" title="What Is Cost Estimation?" tone="band">
        <DefinitionBox label="Definition">
          <p>
            Cost estimation is the process of forecasting the money, resources and time a project, product or
            service is likely to require, based on its scope and the information available at the time.
          </p>
        </DefinitionBox>
        <EntityRelations
          label="How cost estimation relates to other concepts"
          items={[
            { from: "Cost Estimation", to: "Budgeting", text: "An estimate informs the budget that is approved and later controlled." },
            { from: "Cost Estimation", to: "Project Planning", text: "Sequencing and resourcing decisions depend on estimated cost and effort." },
            { from: "Cost Estimation", to: "Scope", text: "Scope defines what is being priced; unclear scope is a common cause of estimate changes." },
            { from: "Cost Estimation", to: "Labor", text: "Hours and rates are priced as labor." },
            { from: "Cost Estimation", to: "Materials", text: "Quantities multiplied by unit prices produce material costs." },
            { from: "Cost Estimation", to: "Equipment", text: "Owned, rented or purchased equipment adds usage or ownership cost." },
            { from: "Cost Estimation", to: "Overhead", text: "Indirect costs such as supervision and administration are allocated to the work." },
            { from: "Cost Estimation", to: "Contingency", text: "An allowance for identified risk and uncertainty, usually shown separately." },
            { from: "Cost Estimation", to: "Forecasting", text: "Estimates are updated as work progresses to forecast final cost." },
          ]}
        />
        <p>
          <Link href={PAGES.whatIs.path} className="inline-cta">
            Read the full guide: What Is Cost Estimation? →
          </Link>
        </p>
      </ArticleSection>

      <ArticleSection
        id="how-ai-can-assist"
        title="How Can AI Assist Cost Estimation?"
        lead="AI helps most with the data-heavy steps of estimating: reading documents, sorting cost items, comparing past projects and testing scenarios. Each output is a draft for an estimator to check."
      >
        <CostCategoryGrid
          columns={4}
          items={[
            { title: "Scope Analysis", description: "Extracts quantities, requirements and exclusions from specifications and bid documents." },
            { title: "Historical Costs", description: "Compares current scope with your own past estimates and actual costs." },
            { title: "Labor", description: "Organizes labor assumptions, productivity records and rates for review." },
            { title: "Materials", description: "Matches line items to categories and flags missing or inconsistent quantities." },
            { title: "Cost Drivers", description: "Highlights variables such as size, location, complexity and duration that move cost." },
            { title: "Scenario Modeling", description: "Re-runs an estimate under different assumptions for scope, schedule or suppliers." },
            { title: "Variance Detection", description: "Flags line items that differ from comparable projects or earlier versions." },
            { title: "Forecasting", description: "Projects costs forward from historical patterns and updated inputs." },
          ]}
        />
        <EntityRelations
          label="How AI cost estimation relates to its component tasks"
          items={[
            { from: "AI Cost Estimation", to: "Data Extraction", text: "Pulls structured data from documents." },
            { from: "AI Cost Estimation", to: "Historical Analysis", text: "Compares scope with past projects." },
            { from: "AI Cost Estimation", to: "Cost Classification", text: "Sorts items into cost categories." },
            { from: "AI Cost Estimation", to: "Scenario Modeling", text: "Tests alternative assumptions." },
            { from: "AI Cost Estimation", to: "Anomaly Detection", text: "Flags unusual values for review." },
            { from: "AI Cost Estimation", to: "Human Validation", text: "A person reviews every output before use." },
          ]}
        />
        <p>
          <Link href={PAGES.ai.path} className="inline-cta">
            Read more: AI Cost Estimation →
          </Link>
        </p>
      </ArticleSection>

      <ArticleSection
        id="workflow"
        title="Cost Estimation Workflow"
        tone="band"
        lead="Most estimates follow the same arc, with or without AI. AI changes how quickly some steps are done, not the need for review."
      >
        <ProcessSteps
          label="Cost estimation workflow"
          steps={[
            { title: "Scope" },
            { title: "Inputs" },
            { title: "Cost Drivers" },
            { title: "Estimation" },
            { title: "Scenario Analysis" },
            { title: "Human Review" },
            { title: "Budget / Decision" },
          ]}
        />
        <p>
          See each step in detail in{" "}
          <Link href={PAGES.project.path}>Project Cost Estimation</Link> and{" "}
          <Link href={PAGES.construction.path}>Construction Cost Estimation</Link>.
        </p>
      </ArticleSection>

      <ArticleSection
        id="cost-components"
        title="Major Cost Components"
        lead="Labor, materials, equipment and subcontractors are generally direct costs. Overhead is an indirect cost. Contingency covers risk."
      >
        <CostCategoryGrid
          items={[
            { title: "Labor", description: "Staff or crew time multiplied by rates, including productivity assumptions." },
            { title: "Materials", description: "Quantities multiplied by unit prices, plus waste and delivery where relevant." },
            { title: "Equipment", description: "Purchase, rental or usage cost of tools, machinery or infrastructure." },
            { title: "Subcontractors and Services", description: "Work priced by outside parties, including software and professional services." },
            { title: "Overhead", description: "Indirect cost of supervision, facilities, administration and general conditions." },
            { title: "Contingency", description: "An allowance for identified risks and remaining uncertainty." },
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="use-cases"
        title="Common Cost Estimation Use Cases"
        tone="band"
        lead="The same estimating logic applies across sectors, with different inputs and cost structures."
      >
        <ul className="grid grid--3">
          <UseCaseCard variant="summary" title="Construction" href={PAGES.construction.path} description="Quantities, labor, materials and subcontractor costs for buildings and sites." />
          <UseCaseCard variant="summary" title="Projects" href={PAGES.project.path} description="Work breakdowns, resource needs and budgets for general project delivery." />
          <UseCaseCard variant="summary" title="Cloud" href={`${PAGES.useCases.path}#cloud-cost-estimation`} description="Usage-based cost estimates and forecasts for cloud workloads." />
          <UseCaseCard variant="summary" title="Manufacturing" href={`${PAGES.useCases.path}#manufacturing-cost-estimation`} description="Material, labor, tooling and overhead for products and production runs." />
          <UseCaseCard variant="summary" title="Energy" href={`${PAGES.useCases.path}#energy-project-estimation`} description="Capital and operating cost estimates for energy projects." />
          <UseCaseCard variant="summary" title="Logistics" href={`${PAGES.useCases.path}#logistics-cost-estimation`} description="Transport, handling and storage costs across routes and volumes." />
        </ul>
        <p>
          <Link href={PAGES.useCases.path} className="inline-cta">
            See all twelve use cases →
          </Link>
        </p>
      </ArticleSection>

      <ArticleSection
        id="ai-vs-traditional"
        title="AI-Assisted vs Traditional Estimating"
        lead="Traditional estimating relies on estimator experience, spreadsheets and manual takeoff. AI-assisted estimating adds automated processing on top of that expertise; it does not remove the need for it."
      >
        <ComparisonTable
          caption="Typical roles of traditional and AI-assisted estimating"
          columns={["Task", "Traditional estimating", "AI-assisted estimating"]}
          rows={[
            ["Data processing", "Manual entry and review of documents and spreadsheets.", "Automated extraction and structuring, checked by an estimator."],
            ["Historical comparison", "Depends on what the estimator remembers or can find.", "Can search many past projects quickly if the data is well organized."],
            ["Scenario modeling", "Each scenario is rebuilt by hand, so few are tested.", "Many scenarios can be generated from the same inputs."],
            ["Anomaly detection", "Found during review, sometimes late.", "Unusual line items can be flagged for a closer look."],
            ["Local knowledge", "Strong when the estimator knows the market and the site.", "Limited to the data supplied. Estimator input stays essential."],
            ["Commercial judgment", "Estimator and management set pricing strategy and risk appetite.", "Not an AI strength. Remains a human responsibility."],
            ["Risk interpretation", "Experienced estimators weigh project-specific and contractual risk.", "AI can surface patterns. People decide what they mean."],
            ["Final approval", "Accountable estimator and management.", "Accountable estimator and management. Unchanged."],
          ]}
          note="The table describes typical roles, not measured performance."
        />
      </ArticleSection>

      <ArticleSection
        id="industries"
        title="Which Industries Use Cost Estimation?"
        tone="band"
        lead="Cost estimation is used wherever money is committed before the work is finished."
      >
        <p>
          Estimators and project managers use it in construction and renovation. Finance teams use it for budgeting
          and forecasting. FinOps teams estimate cloud spend. Manufacturers cost products and production runs.
          Procurement teams evaluate bids, and software teams scope development work. Energy and logistics operators
          estimate capital and operating costs for facilities and networks.
        </p>
        <ul className="tags">
          <li>Construction</li>
          <li>Software and cloud</li>
          <li>Manufacturing</li>
          <li>Energy</li>
          <li>Logistics</li>
          <li>Procurement and bidding</li>
          <li>Finance and FP&amp;A</li>
        </ul>
      </ArticleSection>

      <ArticleSection
        id="reliable-estimate"
        title="What Makes an Estimate Reliable?"
        lead={
          <>
            Reliability comes from the process behind the number, not from the number itself. Public-sector guidance
            describes a reliable estimate as comprehensive, well documented, accurate and credible
            <Cite id="gao" />.
          </>
        }
      >
        <ul className="checklist">
          <li>A clearly defined scope, with exclusions stated.</li>
          <li>Documented assumptions and data sources.</li>
          <li>Cost data that is current and relevant to the project.</li>
          <li>Contingency that is explained rather than arbitrary.</li>
          <li>Independent review before the estimate is used.</li>
          <li>Revisions as scope, prices or schedules change.</li>
        </ul>
        <p>
          More detail: <Link href={`${PAGES.whatIs.path}#reliable-estimate`}>what makes a cost estimate reliable</Link>.
        </p>
      </ArticleSection>

      <ArticleSection id="risks" title="Risks and Limitations of AI Cost Estimation" tone="band">
        <ul className="checklist checklist--caution">
          <li>Incomplete or inconsistent historical data produces weak comparisons.</li>
          <li>Outdated pricing and regional differences can make outputs misleading.</li>
          <li>Missing scope and unstated assumptions pass straight through to the result.</li>
          <li>Precise-looking numbers can create false confidence.</li>
          <li>Models can drift, and markets can change faster than the data.</li>
        </ul>
        <DisclaimerBox tone="warning" title="Important">
          <p>AI-generated estimates should be treated as decision support, not as guaranteed final project costs.</p>
        </DisclaimerBox>
        <p>
          <Link href={`${PAGES.ai.path}#risks-and-limitations`}>Read the full risks and limitations</Link>.
        </p>
      </ArticleSection>

      <ArticleSection id="faq" title="Frequently Asked Questions">
        <FAQ items={faqs} />
      </ArticleSection>

      <SourceCitation ids={["gao"]} />

      <RelatedPages title="Explore the Guides" />
    </div>
  );
}
