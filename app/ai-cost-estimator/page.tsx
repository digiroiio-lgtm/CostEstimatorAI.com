import Link from "next/link";
import { ArticlePage } from "@/components/ArticlePage";
import { ArticleSection } from "@/components/ArticleSection";
import { AssetNote } from "@/components/AssetNote";
import { ComparisonTable } from "@/components/ComparisonTable";
import { DefinitionBox } from "@/components/DefinitionBox";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { EntityRelations } from "@/components/EntityRelations";
import { FAQ } from "@/components/FAQ";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Cite, SourceCitation } from "@/components/SourceCitation";
import type { FaqItem } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import { PAGES } from "@/lib/pages";

const page = PAGES.aiEstimator;

export const metadata = buildMetadata({ ...page, type: "article" });

const faqs: FaqItem[] = [
  {
    question: "Is an AI cost estimator the same as a cost calculator?",
    answer:
      "No. A calculator applies fixed formulas to inputs you provide. An AI cost estimator can also read unstructured documents, classify items and compare historical projects. Many products combine both, so check which functions actually use AI.",
  },
  {
    question: "Is an AI cost estimator accurate?",
    answer:
      "Accuracy depends on scope definition, data quality, price currency and the method used. No single figure applies to every project. Test any tool against your own completed projects and actual costs before relying on it.",
  },
  {
    question: "Who uses an AI cost estimator?",
    answer:
      "Estimators, project managers, contractors, finance and FP&A teams, FinOps teams, manufacturers and procurement teams use estimating tools. In each case a person remains responsible for the final estimate.",
  },
];

export default function AiCostEstimatorPage() {
  return (
    <ArticlePage
      page={page}
      answer="An AI cost estimator is software or a workflow that uses artificial intelligence to help prepare cost estimates. It can extract scope from documents, classify cost items, compare historical projects, model scenarios and flag anomalies. An experienced estimator still validates assumptions, pricing and risk before the estimate is used. It supports estimators; it is not a binding quote."
      subtitle="A category guide to what AI cost estimators do, how they work and what buyers typically evaluate."
      toc={[
        { id: "what-is-an-ai-cost-estimator", title: "What it is" },
        { id: "capabilities", title: "Capabilities" },
        { id: "how-it-works", title: "How it works" },
        { id: "evaluation-criteria", title: "Evaluation criteria" },
        { id: "use-cases", title: "Use cases" },
        { id: "ai-vs-manual", title: "AI-assisted vs manual" },
        { id: "limitations", title: "Limitations and oversight" },
        { id: "faq", title: "FAQ" },
        { id: "sources", title: "Sources" },
      ]}
      faqs={faqs}
      related={{
        title: "Explore Related Category Content",
        paths: [
          PAGES.software.path,
          PAGES.constructionAi.path,
          PAGES.ai.path,
          PAGES.whatIs.path,
          PAGES.useCases.path,
        ],
      }}
      after={<AssetNote category="AI estimating" />}
    >
      <ArticleSection id="what-is-an-ai-cost-estimator" title="What Is an AI Cost Estimator?">
        <DefinitionBox label="Definition">
          <p>
            An AI cost estimator is a tool or workflow that applies artificial intelligence, such as machine learning
            and language models, to the preparation of <Link href={PAGES.whatIs.path}>cost estimates</Link>. It takes
            project information as input and produces draft estimates, comparisons and review flags as output.
          </p>
        </DefinitionBox>
        <EntityRelations
          label="How an AI cost estimator relates to estimating inputs and outputs"
          items={[
            { from: "AI Cost Estimator", to: "Inputs", text: "Scope documents, quantities, historical estimates, actual costs, usage data and price data." },
            { from: "AI Cost Estimator", to: "Outputs", text: "Draft estimates, scenario comparisons, cost-driver summaries and anomaly flags." },
            { from: "AI Cost Estimator", to: "Estimator", text: "The estimator reviews assumptions and approves the result." },
          ]}
        />
        <ComparisonTable
          caption="AI cost estimators compared with other estimating approaches"
          columns={["Approach", "How it works", "Typically suited to", "Watch for"]}
          rows={[
            ["Spreadsheet", "Manual entry and formulas built by the user.", "Small or one-off estimates with a careful owner.", "Formula errors and version sprawl."],
            ["Rule-based calculator", "Fixed formulas or parametric rates applied to inputs.", "Repeatable estimates of a known type.", "Cannot read documents or learn from new data."],
            ["AI cost estimator", "Adds extraction, classification, comparison and scenario functions powered by AI.", "Document-heavy work with usable historical data.", "Outputs need verification; quality depends on data."],
            ["General-purpose AI assistant", "Answers questions and drafts text from a prompt.", "Summarizing documents and brainstorming.", "Not tied to controlled cost data or an audit trail by default."],
          ]}
          note="The table describes typical roles, not the features of any specific product."
        />
      </ArticleSection>

      <ArticleSection
        id="capabilities"
        title="What Capabilities Do Buyers Typically Evaluate?"
        lead="Buyers compare tools on how well each capability works with their own documents and data, not on the capability's name."
      >
        <ComparisonTable
          caption="Capabilities of AI cost estimators and what to look for"
          columns={["Capability", "What to look for"]}
          rows={[
            ["Document and scope extraction", "Supported file types, handling of scanned or poor-quality files, and a link from each extracted item back to its source."],
            ["Cost classification", "Support for your own cost codes or a standard structure, with easy correction of mistakes."],
            ["Historical analysis", "Ability to use your past estimates and actual costs, with visible criteria for what counts as comparable."],
            ["Cost driver identification", "Plain explanation of which variables matter and why, not just a score."],
            ["Scenario modeling", "Ability to change assumptions and compare outcomes side by side."],
            ["Anomaly and variance detection", "Flags that explain what looks unusual, so a reviewer can act on them."],
            ["Explainability and audit trail", "Recorded assumptions, data sources, versions and who changed what."],
            ["Integration and export", "Moves data to and from your spreadsheets, accounting and scheduling systems."],
            ["Human review workflow", "Required review steps, overrides and approvals."],
            ["Security and access control", "Data ownership, permissions and handling of confidential project documents."],
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="how-it-works"
        title="How an AI Cost Estimator Works"
        lead="Most tools follow the same sequence. The human review step sits before the estimate is approved, not after."
      >
        <ProcessSteps
          label="AI cost estimator workflow"
          steps={[
            { title: "Inputs" },
            { title: "Extraction" },
            { title: "Classification" },
            { title: "Historical Comparison" },
            { title: "Draft Estimate" },
            { title: "Scenarios" },
            { title: "Human Review" },
            { title: "Approved Estimate" },
          ]}
        />
        <p>
          The underlying methods, stage inputs and outputs are described in{" "}
          <Link href={PAGES.ai.path}>AI Cost Estimation</Link>. For the wider software landscape, see{" "}
          <Link href={PAGES.software.path}>cost estimation software</Link>.
        </p>
      </ArticleSection>

      <ArticleSection
        id="evaluation-criteria"
        title="How to Evaluate an AI Cost Estimator"
        lead={
          <>
            Evaluate an AI estimating tool the way you would evaluate any AI system that influences decisions. The
            NIST AI Risk Management Framework lists characteristics of trustworthy AI, including validity and
            reliability, security, accountability and transparency, explainability, privacy and fairness
            <Cite id="nist" />.
          </>
        }
      >
        <ul className="checklist">
          <li><strong>Back-test on your own projects.</strong> Compare outputs with completed projects whose actual costs you know.</li>
          <li><strong>Check transparency.</strong> Can you see the assumptions, data sources and reasoning behind each number?</li>
          <li><strong>Understand data needs.</strong> Find out what history, structure and volume the tool needs to perform.</li>
          <li><strong>Confirm price handling.</strong> Learn who supplies prices, how current they are and how location is treated.</li>
          <li><strong>Test overrides and versioning.</strong> An estimator must be able to correct, annotate and roll back.</li>
          <li><strong>Review security and ownership.</strong> Know where documents are stored and who can use them.</li>
          <li><strong>Examine failure modes.</strong> Ask what happens with missing scope, odd documents and unfamiliar project types.</li>
        </ul>
      </ArticleSection>

      <ArticleSection
        id="use-cases"
        title="Common Use Cases"
        lead="AI cost estimators are applied wherever estimating involves many documents, line items or past records."
      >
        <ul className="grid grid--3">
          <li className="card">
            <h3 className="card__title"><Link href={`${PAGES.useCases.path}#construction-estimating`}>Construction</Link></h3>
            <p>Scope extraction, quantity review and historical comparison. See <Link href={PAGES.constructionAi.path}>construction estimating AI</Link>.</p>
          </li>
          <li className="card">
            <h3 className="card__title"><Link href={`${PAGES.useCases.path}#project-budgeting`}>Project budgeting</Link></h3>
            <p>Draft budgets from similar projects and flag missing categories.</p>
          </li>
          <li className="card">
            <h3 className="card__title"><Link href={`${PAGES.useCases.path}#cloud-cost-estimation`}>Cloud costs</Link></h3>
            <p>Usage-based estimates and forecasts for workloads.</p>
          </li>
          <li className="card">
            <h3 className="card__title"><Link href={`${PAGES.useCases.path}#manufacturing-cost-estimation`}>Manufacturing</Link></h3>
            <p>Bill-of-materials costing and volume scenarios.</p>
          </li>
          <li className="card">
            <h3 className="card__title"><Link href={`${PAGES.useCases.path}#bid-preparation-support`}>Bid preparation</Link></h3>
            <p>Comparing proposals against scope and finding gaps.</p>
          </li>
          <li className="card">
            <h3 className="card__title"><Link href={`${PAGES.useCases.path}#variance-analysis`}>Variance analysis</Link></h3>
            <p>Matching actual costs to estimate lines to learn from differences.</p>
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection id="ai-vs-manual" title="AI-Assisted vs Manual Estimating">
        <ComparisonTable
          caption="Typical differences between manual and AI-assisted estimating"
          columns={["Task", "Manual", "AI-assisted"]}
          rows={[
            ["Reading documents", "Estimator reads and extracts by hand.", "Draft extraction for the estimator to check."],
            ["Finding comparable projects", "Relies on memory and file searches.", "Searches records and proposes candidates."],
            ["Testing scenarios", "Each scenario rebuilt manually.", "Scenarios generated from the same inputs."],
            ["Spotting outliers", "Found during review.", "Flagged earlier for review."],
            ["Setting assumptions and approving", "Estimator and management.", "Estimator and management. Unchanged."],
          ]}
        />
      </ArticleSection>

      <ArticleSection id="limitations" title="Limitations and Human Oversight">
        <ul className="checklist checklist--caution">
          <li>Output quality depends on the quality, age and relevance of the data.</li>
          <li>Missing scope and unstated assumptions pass through to the result.</li>
          <li>Precise-looking numbers can hide real uncertainty.</li>
          <li>Models can drift, and prices can move faster than the data.</li>
          <li>Local conditions, supplier terms and contract risk need people.</li>
        </ul>
        <DisclaimerBox tone="warning" title="Important statement">
          <p>AI-generated estimates should be treated as decision support, not as guaranteed final project costs.</p>
        </DisclaimerBox>
        <p>
          See <Link href={`${PAGES.ai.path}#risks-and-limitations`}>risks and limitations</Link> for a fuller list, or{" "}
          <Link href={`${PAGES.whatIs.path}#reliable-estimate`}>what makes an estimate reliable</Link>.
        </p>
      </ArticleSection>

      <ArticleSection id="faq" title="Frequently Asked Questions">
        <FAQ items={faqs} />
      </ArticleSection>

      <SourceCitation ids={["nist"]} />
    </ArticlePage>
  );
}
