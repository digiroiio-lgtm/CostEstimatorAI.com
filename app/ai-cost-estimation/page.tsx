import Link from "next/link";
import { ArticlePage } from "@/components/ArticlePage";
import { ArticleSection } from "@/components/ArticleSection";
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

const page = PAGES.ai;

export const metadata = buildMetadata({ ...page, type: "article" });

const faqs: FaqItem[] = [
  {
    question: "How is AI cost estimation different from traditional cost estimation?",
    answer:
      "Traditional estimating relies on manual processes and estimator experience. AI-assisted estimating adds automated processing of documents, data and scenarios. The underlying principles are the same: define scope, document assumptions and review the result.",
  },
  {
    question: "Is AI cost estimation the same as automated cost estimation?",
    answer:
      "They overlap but are not identical. Automated estimating applies fixed rules and formulas, such as spreadsheets or parametric calculators. AI approaches such as machine learning and language models can also read unstructured documents and learn patterns from data. Many tools combine both.",
  },
  {
    question: "Does machine learning cost estimation need a lot of data?",
    answer:
      "Model-based approaches generally need enough relevant, consistent historical data to find reliable patterns. With little or inconsistent data, simpler methods and expert judgment are often more appropriate.",
  },
];

export default function AiCostEstimationPage() {
  return (
    <ArticlePage
      page={page}
      answer="AI cost estimation uses machine learning and other AI techniques to help estimators extract scope information, classify cost items, compare historical projects and test scenarios. It accelerates data-heavy steps, but people still validate assumptions, judge risk and approve the final estimate."
      subtitle="This guide covers what AI can assist with, a step-by-step workflow, what still needs human judgment and where the risks lie."
      toc={[
        { id: "what-is-ai-cost-estimation", title: "What is AI cost estimation?" },
        { id: "what-ai-can-assist", title: "What AI can assist with" },
        { id: "workflow", title: "Workflow" },
        { id: "human-judgment", title: "Human judgment" },
        { id: "risks-and-limitations", title: "Risks and limitations" },
        { id: "faq", title: "FAQ" },
        { id: "sources", title: "Sources" },
      ]}
      faqs={faqs}
    >
      <ArticleSection id="what-is-ai-cost-estimation" title="What Is AI Cost Estimation?">
        <DefinitionBox label="Definition">
          <p>
            AI cost estimation is the use of artificial intelligence, including machine learning and language models,
            to support parts of the <Link href={PAGES.whatIs.path}>cost estimation</Link> process. It is also called
            automated cost estimation or estimating automation when applied to repetitive steps. An AI cost estimator
            is a tool or workflow that does this work. A person remains responsible for the result.
          </p>
        </DefinitionBox>
        <p>AI cost estimation is made up of these capabilities:</p>
        <EntityRelations
          label="Components of AI cost estimation"
          items={[
            { from: "AI Cost Estimation", to: "Data Extraction", text: "Reads documents and turns them into structured scope and quantity data." },
            { from: "AI Cost Estimation", to: "Historical Analysis", text: "Finds patterns and comparable projects in past estimates and actual costs." },
            { from: "AI Cost Estimation", to: "Cost Classification", text: "Assigns line items to cost categories or code structures." },
            { from: "AI Cost Estimation", to: "Scenario Modeling", text: "Re-runs an estimate under alternative assumptions." },
            { from: "AI Cost Estimation", to: "Anomaly Detection", text: "Flags unusual, missing or inconsistent values." },
            { from: "AI Cost Estimation", to: "Human Validation", text: "Estimators check every output before it is used." },
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="what-ai-can-assist"
        title="What Can AI Assist With?"
        lead="AI is most useful where estimating involves large volumes of documents, line items or past data. Each task below ends with a human check."
      >
        <ComparisonTable
          caption="Estimating tasks AI can assist with, and what a person still checks"
          columns={["Task", "What AI can do", "What a person checks"]}
          rows={[
            ["Extracting scope information", "Reads specifications, drawings and bid documents and pulls out requirements, quantities and exclusions.", "That nothing was missed or misread, and how to resolve ambiguous scope."],
            ["Classifying cost items", "Assigns line items to cost codes or categories.", "Misclassifications, and that categories match the organization's own structure."],
            ["Analyzing historical estimates", "Finds patterns across past estimates and actual costs.", "Whether the history is current, relevant and comparable."],
            ["Identifying cost drivers", "Highlights variables associated with cost changes, such as size, location, complexity and duration.", "Whether a relationship is causal and still holds for this project."],
            ["Matching similar projects", "Retrieves comparable past projects by scope and attributes.", "Whether the projects are genuinely similar."],
            ["Forecasting costs", "Projects costs from trends and updated inputs.", "Assumptions, market conditions and plausibility."],
            ["Scenario modeling", "Re-runs the estimate under alternative assumptions.", "Which scenarios are realistic and relevant to the decision."],
            ["Anomaly detection", "Flags outliers, missing items and duplicate or inconsistent entries.", "Whether each flag is an error or a legitimate exception."],
            ["Document analysis", "Summarizes and compares contracts, addenda and specifications.", "Contractual meaning and how risk is allocated."],
            ["Estimate comparison", "Compares versions or competing estimates line by line.", "Why the differences exist and which assumptions are right."],
            ["Variance analysis", "Compares estimates with actual costs and surfaces patterns.", "Root causes and any corrective action."],
            ["Estimate updates", "Applies revised quantities, prices or scope to refresh an estimate.", "That revisions are approved and nothing was overwritten."],
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="workflow"
        title="AI Cost Estimation Workflow"
        lead="A typical AI-assisted workflow moves from raw scope and data to a reviewed estimate. Human review comes before the final estimate, not after."
      >
        <ProcessSteps
          label="AI cost estimation workflow"
          steps={[
            { title: "Scope / Data" },
            { title: "Extraction" },
            { title: "Cost Drivers" },
            { title: "Historical Comparison" },
            { title: "Estimate Model" },
            { title: "Scenario Analysis" },
            { title: "Human Review" },
            { title: "Final Estimate" },
          ]}
        />
        <ComparisonTable
          caption="Inputs and outputs at each stage of the workflow"
          columns={["Stage", "Input", "Output"]}
          rows={[
            ["Scope / Data", "Specifications, drawings, requirements, usage data, past estimates.", "A defined body of source material."],
            ["Extraction", "Source documents and data files.", "Structured scope items and quantities."],
            ["Cost Drivers", "Structured scope and historical data.", "A list of variables likely to move cost."],
            ["Historical Comparison", "Scope items and past project records.", "Comparable projects and reference costs."],
            ["Estimate Model", "Quantities, drivers, rates and reference costs.", "A draft estimate with stated assumptions."],
            ["Scenario Analysis", "The draft estimate and alternative assumptions.", "A set of cost outcomes under different conditions."],
            ["Human Review", "The draft, scenarios and flagged anomalies.", "Corrections, accepted assumptions and a contingency decision."],
            ["Final Estimate", "The reviewed estimate.", "An approved estimate with documented assumptions."],
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="human-judgment"
        title="What Still Requires Human Judgment?"
        lead={
          <>
            Final responsibility for an estimate stays with people. The NIST AI Risk Management Framework is a
            voluntary reference for managing AI risks and a useful starting point when deciding how much oversight a
            use case needs
            <Cite id="nist" />.
          </>
        }
      >
        <ul className="checklist">
          <li><strong>Scope interpretation.</strong> Documents are often incomplete or contradictory, and someone must decide what was intended.</li>
          <li><strong>Commercial assumptions.</strong> Payment terms, schedule pressure and strategy are business decisions.</li>
          <li><strong>Supplier conditions.</strong> Availability, lead times and negotiated terms are rarely in historical data.</li>
          <li><strong>Local market context.</strong> Labor availability, site access and local practice affect cost.</li>
          <li><strong>Contractual risk.</strong> Liability, penalties and change provisions need professional judgment.</li>
          <li><strong>Unusual projects.</strong> Little precedent means little relevant history to learn from.</li>
          <li><strong>Contingency.</strong> Setting an allowance depends on risk appetite and project knowledge.</li>
          <li><strong>Final approval.</strong> An accountable person signs off on the estimate.</li>
        </ul>
      </ArticleSection>

      <ArticleSection
        id="risks-and-limitations"
        title="Risks and Limitations"
        lead="The quality of an AI-assisted estimate depends on its inputs and on how its outputs are used."
      >
        <ComparisonTable
          caption="Common risks of AI cost estimation and ways to reduce them"
          columns={["Risk", "What can go wrong", "Ways to reduce it"]}
          rows={[
            ["Poor historical data", "Patterns learned from incomplete or inconsistent records are unreliable.", "Clean and standardize data; check comparability."],
            ["Outdated pricing", "Old unit costs understate or overstate current cost.", "Apply dated price adjustments from sourced data."],
            ["Missing scope", "Items not in the documents are not in the estimate.", "Run scope-gap reviews with an experienced estimator."],
            ["Bad assumptions", "An unstated or wrong assumption flows through every line.", "Record assumptions and review them separately."],
            ["False precision", "Exact-looking figures hide real uncertainty.", "Present ranges and state confidence honestly."],
            ["Regional price differences", "Costs vary by location, and national data may not fit a local project.", "Use local data and local expertise."],
            ["Model drift", "A model's performance can decline as conditions change.", "Monitor outputs against actual costs; retrain or retire models."],
            ["Unexpected market changes", "Sudden price or supply changes break historical relationships.", "Re-estimate; run scenarios for market shifts."],
            ["Over-reliance on automation", "Reviewers stop questioning outputs.", "Keep human review a required step with a named owner."],
          ]}
        />
        <DisclaimerBox tone="warning" title="Important statement">
          <p>AI-generated estimates should be treated as decision support, not as guaranteed final project costs.</p>
        </DisclaimerBox>
      </ArticleSection>

      <ArticleSection id="related-guides" title="Apply This to Your Work">
        <p>
          The AI workflow sits on top of general estimating practice. Start with the{" "}
          <Link href={PAGES.whatIs.path}>fundamentals of cost estimation</Link>, then see how it applies to{" "}
          <Link href={PAGES.project.path}>projects</Link>, to{" "}
          <Link href={PAGES.construction.path}>construction</Link> and to other{" "}
          <Link href={PAGES.useCases.path}>use cases</Link>.
        </p>
      </ArticleSection>

      <ArticleSection id="faq" title="Frequently Asked Questions">
        <FAQ items={faqs} />
      </ArticleSection>

      <SourceCitation ids={["nist"]} />
    </ArticlePage>
  );
}
