import Link from "next/link";
import { ArticlePage } from "@/components/ArticlePage";
import { ArticleSection } from "@/components/ArticleSection";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Cite, SourceCitation } from "@/components/SourceCitation";
import { UseCaseCard, type UseCase } from "@/components/UseCaseCard";
import { buildMetadata } from "@/lib/metadata";
import { PAGES } from "@/lib/pages";

const page = PAGES.useCases;

export const metadata = buildMetadata({ ...page, type: "article" });

const construction: UseCase[] = [
  {
    id: "construction-estimating",
    title: "Construction Cost Estimation",
    goal: "Develop an early or detailed cost estimate for a construction project.",
    inputs: "Project scope, drawings, quantities, labor assumptions, material requirements and historical cost data.",
    aiTask: "Extract relevant scope information, classify cost items, compare historical projects and identify potential inconsistencies.",
    humanDecision: "An estimator validates quantities, assumptions, local pricing and commercial risk.",
    output: "A structured project cost estimate with documented assumptions.",
  },
  {
    id: "project-budgeting",
    title: "Project Budgeting",
    goal: "Set a project budget that reflects scope, resources and risk.",
    inputs: "Scope statement, work breakdown, resource plans, rates, and budgets and actuals from past projects.",
    aiTask: "Draft a budget structure from similar projects, classify costs, flag missing categories and compare against earlier budgets.",
    humanDecision: "The project manager and finance team approve the budget, reserves and assumptions.",
    output: "An approved budget with a documented basis and stated reserves.",
  },
  {
    id: "renovation-estimating",
    title: "Renovation Estimating",
    goal: "Estimate the cost of renovating or retrofitting an existing building where some conditions are unknown.",
    inputs: "Survey notes, photos, available drawings, a scope list, quantities and historical renovation costs.",
    aiTask: "Extract scope items from notes and documents, suggest commonly associated work items for review, compare with past renovations and flag items with high uncertainty.",
    humanDecision: "An estimator judges hidden conditions, inspects the site where needed and sets allowances for unknowns.",
    output: "An estimate with explicit allowances and assumptions for unknown conditions.",
  },
  {
    id: "bid-preparation-support",
    title: "Bid Preparation Support",
    goal: "Prepare a well-supported cost basis for a bid or proposal.",
    inputs: "Tender documents, addenda, subcontractor and supplier proposals, and internal cost data.",
    aiTask: "Extract requirements and deadlines, compare proposals against the scope, find gaps and summarize changes between addenda.",
    humanDecision: "Estimators and management set margin and risk allowance and decide whether to bid.",
    output: "A reviewed cost estimate that supports the bid. The estimate itself is not the bid.",
  },
];

const technology: UseCase[] = [
  {
    id: "cloud-cost-estimation",
    title: "Cloud Cost Estimation",
    goal: "Estimate the expected cost of cloud workloads before or during deployment.",
    inputs: "Architecture description, expected usage, published provider pricing and historical billing data.",
    aiTask: "Map architecture components to services, project usage-based cost from historical patterns, model growth and commitment scenarios and detect anomalies in spend.",
    humanDecision: "Engineering, FinOps and finance teams validate usage assumptions, commitments and budget ownership.",
    output: "A cloud cost estimate or forecast with stated usage assumptions.",
  },
  {
    id: "software-project-estimation",
    title: "Software Project Estimation",
    goal: "Estimate the effort and cost of building software.",
    inputs: "Requirements, backlog, architecture notes, team rates and historical delivery data.",
    aiTask: "Summarize requirements, group similar past work, suggest effort ranges from historical data and flag unclear requirements.",
    humanDecision: "Engineering leads and product owners validate effort, dependencies and uncertainty, and decide scope.",
    output: "An effort and cost estimate presented as a range with documented assumptions.",
  },
  {
    id: "manufacturing-cost-estimation",
    title: "Manufacturing Cost Estimation",
    goal: "Estimate the unit and production cost of a product.",
    inputs: "Bill of materials, process steps, labor time, tooling, production volumes and supplier quotes.",
    aiTask: "Extract bill-of-materials items from drawings and specifications, match them to historical part costs, flag outliers and model volume scenarios.",
    humanDecision: "Manufacturing engineers and cost analysts validate processes, supplier terms and volume commitments.",
    output: "A cost breakdown per unit with assumptions for each volume scenario.",
  },
  {
    id: "energy-project-estimation",
    title: "Energy Project Estimation",
    goal: "Estimate capital and operating costs for an energy project, such as generation, storage or grid work.",
    inputs: "Technical scope, equipment lists, site and interconnection requirements, schedule and data from comparable projects.",
    aiTask: "Extract equipment and scope data, compare comparable projects, model scenarios for schedule and equipment choices and flag inconsistent items.",
    humanDecision: "Engineers and project developers validate technical assumptions, permitting and regulatory risk, and financing.",
    output: "A capital and operating cost estimate with scenarios and risk notes.",
  },
  {
    id: "logistics-cost-estimation",
    title: "Logistics Cost Estimation",
    goal: "Estimate transport, handling and storage costs for shipments or networks.",
    inputs: "Routes, volumes, service levels, carrier rates or quotes and historical shipment costs.",
    aiTask: "Classify and reconcile shipment costs, forecast volumes and cost, model route and mode scenarios and flag billing anomalies.",
    humanDecision: "Logistics managers validate service requirements, carrier terms and operational constraints.",
    output: "An estimated logistics cost by route or scenario.",
  },
];

const analysis: UseCase[] = [
  {
    id: "scenario-planning",
    title: "Scenario Planning",
    goal: "Understand how cost changes under different assumptions.",
    inputs: "A base estimate and ranges for prices, schedule and scope options.",
    aiTask: "Generate and compare scenarios and highlight which assumptions drive the most change.",
    humanDecision: "Decision-makers choose which scenarios are credible and what action to take.",
    output: "A scenario comparison that identifies the key cost drivers.",
  },
  {
    id: "cost-forecasting",
    title: "Cost Forecasting",
    goal: "Project the cost at completion or in future periods.",
    inputs: "Baseline estimate, actual costs to date, progress data, committed costs and historical patterns.",
    aiTask: "Project cost trends, update forecasts as new data arrives and flag deviations from the baseline.",
    humanDecision: "Project and finance leads interpret the forecast, decide on corrective action and approve reforecasts.",
    output: "An updated forecast with explained changes.",
  },
  {
    id: "variance-analysis",
    title: "Variance Analysis",
    goal: "Understand the differences between estimated and actual costs.",
    inputs: "The estimate, actual costs, change records and consistent cost coding.",
    aiTask: "Match actual costs to estimate lines, quantify variances, group likely causes and spot recurring patterns.",
    humanDecision: "Cost managers determine root causes and decide what to change in future estimates.",
    output: "A variance report with lessons for future estimates.",
  },
];

function Group({ items }: { items: UseCase[] }) {
  return (
    <>
      {items.map((item) => (
        <UseCaseCard key={item.id} variant="detail" {...item} />
      ))}
    </>
  );
}

export default function UseCasesPage() {
  return (
    <ArticlePage
      page={page}
      answer="AI cost estimation use cases are the tasks where AI can assist estimating, budgeting and forecasting: extracting scope, classifying costs, comparing history, modeling scenarios and flagging variances. In each case AI prepares or checks information and a person makes the decision."
      subtitle="Twelve application areas, each described as Goal, Inputs, AI-Assisted Task, Human Decision and Output."
      toc={[
        { id: "how-to-read", title: "How to read these use cases" },
        { id: "construction-and-projects", title: "Construction and projects" },
        { id: "technology-and-industry", title: "Technology and industry" },
        { id: "planning-and-analysis", title: "Planning and analysis" },
        { id: "sources", title: "Sources" },
      ]}
    >
      <ArticleSection
        id="how-to-read"
        title="How to Read These Use Cases"
        lead="Every use case follows the same chain, so you can compare them directly."
      >
        <ProcessSteps
          label="Use case structure"
          steps={[
            { title: "Goal" },
            { title: "Inputs" },
            { title: "AI-Assisted Task" },
            { title: "Human Decision" },
            { title: "Output" },
          ]}
        />
        <DisclaimerBox title="General descriptions">
          <p>
            These are general descriptions of how AI can assist estimating work. They are not descriptions of a
            product, and CostEstimatorAI.com does not currently offer software for any of them. For background, read{" "}
            <Link href={PAGES.ai.path}>AI Cost Estimation</Link>.
          </p>
        </DisclaimerBox>
      </ArticleSection>

      <ArticleSection
        id="construction-and-projects"
        title="Construction and Project Use Cases"
        lead={
          <>
            Estimating, budgeting and bidding for built environments and general projects. See also{" "}
            <Link href={PAGES.construction.path}>Construction Cost Estimation</Link> and{" "}
            <Link href={PAGES.project.path}>Project Cost Estimation</Link>. For the tooling side, see{" "}
            <Link href={PAGES.constructionAi.path}>construction estimating AI</Link>.
          </>
        }
      >
        <Group items={construction} />
      </ArticleSection>

      <ArticleSection
        id="technology-and-industry"
        title="Technology and Industry Use Cases"
        lead={
          <>
            Cost estimation in cloud, software, manufacturing, energy and logistics. For cloud spend, the FinOps
            Foundation describes forecasting as modeling expected cost from historical spend and planned changes
            <Cite id="finops" />.
          </>
        }
      >
        <Group items={technology} />
      </ArticleSection>

      <ArticleSection
        id="planning-and-analysis"
        title="Planning and Analysis Use Cases"
        lead="Decision-support tasks that apply across industries once an estimate exists."
      >
        <Group items={analysis} />
        <p>
          New to the fundamentals? Start with <Link href={PAGES.whatIs.path}>What Is Cost Estimation?</Link> To
          compare tools, see the <Link href={PAGES.aiEstimator.path}>AI cost estimator</Link> and{" "}
          <Link href={PAGES.software.path}>cost estimation software</Link> guides.
        </p>
      </ArticleSection>

      <SourceCitation ids={["finops"]} />
    </ArticlePage>
  );
}
