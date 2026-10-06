import Link from "next/link";
import { ArticlePage } from "@/components/ArticlePage";
import { ArticleSection } from "@/components/ArticleSection";
import { ComparisonTable } from "@/components/ComparisonTable";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { EntityRelations } from "@/components/EntityRelations";
import { FAQ } from "@/components/FAQ";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Cite, SourceCitation } from "@/components/SourceCitation";
import type { FaqItem } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import { PAGES } from "@/lib/pages";

const page = PAGES.whatIs;

export const metadata = buildMetadata({ ...page, type: "article" });

const faqs: FaqItem[] = [
  {
    question: "What is the difference between cost estimation and cost estimating?",
    answer:
      "Cost estimating usually refers to the activity or discipline, and cost estimation to the process or its result. In practice the two terms are used interchangeably.",
  },
  {
    question: "Who prepares cost estimates?",
    answer:
      "Estimators, project managers, engineers, cost analysts and finance teams, depending on the industry. Larger or higher-risk work often has dedicated estimating staff and independent reviewers.",
  },
  {
    question: "Can a cost estimate be exact?",
    answer:
      "No. An estimate predicts future prices, productivity and conditions, so it cannot be exact in advance. Good estimates state their assumptions and uncertainty instead of implying precision.",
  },
];

export default function WhatIsCostEstimationPage() {
  return (
    <ArticlePage
      page={page}
      answer="Cost estimation is the process of predicting how much money, labor, materials and time a project, product or service will require. An estimate is built from scope, quantities, unit costs, indirect costs and an allowance for risk, and it is refined as better information becomes available."
      subtitle="This guide explains what an estimate contains, how it differs from a budget, quote or forecast, and what makes it reliable."
      toc={[
        { id: "purpose", title: "Purpose of cost estimation" },
        { id: "includes", title: "What an estimate includes" },
        { id: "direct-indirect", title: "Direct and indirect costs" },
        { id: "process", title: "The estimation process" },
        { id: "estimate-vs-budget", title: "Estimate vs budget" },
        { id: "estimate-vs-quote", title: "Estimate vs quote" },
        { id: "estimate-vs-forecast", title: "Estimate vs forecast" },
        { id: "at-a-glance", title: "Comparison table" },
        { id: "reliable-estimate", title: "Reliable estimates" },
        { id: "where-ai-fits", title: "Where AI fits in" },
        { id: "faq", title: "FAQ" },
        { id: "sources", title: "Sources" },
      ]}
      faqs={faqs}
    >
      <ArticleSection
        id="purpose"
        title="What Is the Purpose of Cost Estimation?"
        lead="Cost estimation gives decision-makers a documented, reasoned prediction of cost before money is committed."
      >
        <p>Organizations estimate cost to:</p>
        <ul>
          <li>decide whether a project is worth pursuing;</li>
          <li>set a budget and request funding;</li>
          <li>compare design, supplier or delivery alternatives;</li>
          <li>plan staffing, procurement and schedule; and</li>
          <li>create a baseline against which actual spending is tracked.</li>
        </ul>
        <EntityRelations
          label="Why cost estimation connects to planning"
          items={[
            { from: "Cost Estimation", to: "Budgeting", text: "The estimate is the main input to the budget that management approves." },
            { from: "Cost Estimation", to: "Project Planning", text: "Resource, schedule and procurement plans rely on estimated effort and cost." },
            { from: "Cost Estimation", to: "Forecasting", text: "The estimate is the starting baseline that later forecasts update with actual results." },
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="includes"
        title="What Does a Cost Estimate Include?"
        lead="A complete estimate states what is included, how each cost was derived and what is left out."
      >
        <p>Most estimates contain these elements:</p>
        <ul>
          <li><strong>Scope</strong> of the work, including stated exclusions.</li>
          <li><strong>Quantities</strong> or effort, such as units of material or hours of work.</li>
          <li><strong>Labor</strong>, priced from hours and rates.</li>
          <li><strong>Materials</strong>, priced from quantities and unit costs.</li>
          <li><strong>Equipment</strong>, whether owned, rented or purchased.</li>
          <li><strong>Subcontractors and services</strong> priced by outside parties.</li>
          <li><strong>Overhead</strong> and other indirect costs.</li>
          <li><strong>Contingency</strong> for identified risk and remaining uncertainty.</li>
          <li><strong>Assumptions</strong>, price date and currency, often called the basis of estimate.</li>
        </ul>
        <ComparisonTable
          caption="Illustrative example of how estimate components combine"
          columns={["Component", "Basis (assumed)", "Amount"]}
          rows={[
            ["Labor", "Assumed hours × assumed hourly rate", "$20,000"],
            ["Materials", "Assumed quantities × assumed unit prices", "$30,000"],
            ["Equipment", "Assumed rental for the project duration", "$5,000"],
            ["Direct costs subtotal", "Sum of the three lines above", "$55,000"],
            ["Overhead", "Assumed 10% of direct costs", "$5,500"],
            ["Subtotal", "Direct costs plus overhead", "$60,500"],
            ["Contingency", "Assumed 10% of the subtotal", "$6,050"],
            ["Estimate", "Subtotal plus contingency", "$66,550"],
          ]}
          note="Illustrative arithmetic only. The figures and percentages are invented round numbers that show how components combine. They are not market data, benchmarks or recommendations."
        />
      </ArticleSection>

      <ArticleSection
        id="direct-indirect"
        title="What Are Direct and Indirect Costs?"
        lead="Direct costs trace to specific work. Indirect costs support the work as a whole."
      >
        <h3>Direct costs</h3>
        <p>
          Direct costs can be tied to a particular piece of work. Labor, materials, equipment and subcontractor
          charges for a defined task are typical examples.
        </p>
        <h3>Indirect costs</h3>
        <p>
          Indirect costs, often grouped as overhead, support several activities at once. Examples include supervision,
          facilities, insurance and administration. Definitions and allocation methods vary by organization and
          industry, so a good estimate states which approach it uses.
        </p>
      </ArticleSection>

      <ArticleSection
        id="process"
        title="What Is the Cost Estimation Process?"
        lead={
          <>
            The exact steps vary, but sound estimating follows a repeatable sequence. The U.S. Government
            Accountability Office describes a 12-step process for reliable estimates
            <Cite id="gao" />. A simplified version follows.
          </>
        }
      >
        <ProcessSteps
          variant="detailed"
          label="Cost estimation process"
          steps={[
            { title: "Define purpose and scope", description: "State what is being estimated, why, and what is excluded." },
            { title: "Gather inputs", description: "Collect drawings, specifications, requirements, past costs and current prices." },
            { title: "Break the work down", description: "Divide the scope into components that can be quantified and priced." },
            { title: "Quantify", description: "Measure quantities or estimate effort for each component." },
            { title: "Apply unit costs and rates", description: "Price labor, materials, equipment and services." },
            { title: "Add indirect costs", description: "Allocate overhead and general costs to the work." },
            { title: "Assess risk and set contingency", description: "Identify uncertainties and decide on an allowance." },
            { title: "Document assumptions", description: "Record the basis of estimate, price date and exclusions." },
            { title: "Review and approve", description: "Have someone other than the preparer check the result." },
            { title: "Revise as information changes", description: "Update the estimate when scope, prices or conditions move." },
          ]}
        />
      </ArticleSection>

      <ArticleSection id="estimate-vs-budget" title="Cost Estimate vs Budget">
        <p>
          An estimate is a prediction of what work will cost. A budget is an approved allocation of funds, set by
          management and usually informed by one or more estimates. Budgets are used to control spending and may
          include amounts the estimate does not, such as reserves held by the owner.
        </p>
      </ArticleSection>

      <ArticleSection id="estimate-vs-quote" title="Cost Estimate vs Quote">
        <p>
          A quote or bid is a price offered to a customer for defined work, normally with stated terms and a validity
          period. It can be legally binding once accepted. An estimate carries no such commitment. A contractor often
          starts from an estimate, then adds profit, commercial terms and risk decisions to arrive at a quote. Nothing
          on this site is a quote.
        </p>
      </ArticleSection>

      <ArticleSection id="estimate-vs-forecast" title="Cost Estimate vs Forecast">
        <p>
          An estimate predicts cost at a point in time, usually before or early in the work. A forecast projects the
          cost at completion or for a future period, using actual results to date plus the work that remains. The
          FinOps Foundation draws a similar line for cloud costs: estimating explores the potential cost of
          scenarios, while forecasting models expected spend from historical patterns and planned changes
          <Cite id="finops" />.
        </p>
      </ArticleSection>

      <ArticleSection id="at-a-glance" title="Estimate, Budget, Quote and Forecast Compared">
        <ComparisonTable
          caption="How an estimate differs from a budget, a quote and a forecast"
          columns={["Term", "What it is", "Typically based on", "Commitment"]}
          rows={[
            ["Cost estimate", "A prediction of what work will cost.", "Scope, quantities, unit costs and assumptions.", "None. Advisory."],
            ["Budget", "An approved allocation of funds.", "One or more estimates plus management decisions.", "A spending limit set by the organization."],
            ["Quote or bid", "A price offered to a customer.", "An estimate plus margin, terms and commercial risk decisions.", "Can be binding once accepted, under its stated terms."],
            ["Forecast", "A projection of cost at completion or in a future period.", "Actual costs to date plus remaining work.", "None. Sets expectations and is updated regularly."],
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="reliable-estimate"
        title="What Makes a Cost Estimate Reliable?"
        lead={
          <>
            A reliable estimate has a defined scope, documented assumptions, relevant data and independent review. GAO
            names four characteristics: comprehensive, well documented, accurate and credible
            <Cite id="gao" />.
          </>
        }
      >
        <ul className="checklist">
          <li><strong>Defined scope.</strong> You cannot price what is not described.</li>
          <li><strong>Documented assumptions.</strong> Readers can see what the numbers depend on.</li>
          <li><strong>Relevant, current data.</strong> Historical costs are adjusted for time, location and scale.</li>
          <li><strong>A method that fits the project stage.</strong> Early estimates differ from detailed ones.</li>
          <li><strong>Acknowledged uncertainty.</strong> Ranges and contingency show what is not yet known.</li>
          <li><strong>Independent review.</strong> A second person checks logic, quantities and prices.</li>
        </ul>
        <p>
          AACE International&rsquo;s estimate classification system links the level of uncertainty to how mature the
          project definition is: the less defined the project, the wider the expected uncertainty
          <Cite id="aace" />.
        </p>
        <DisclaimerBox title="Note on examples">
          <p>Any figures on this site are illustrative. CostEstimatorAI.com does not publish current market prices or cost benchmarks.</p>
        </DisclaimerBox>
      </ArticleSection>

      <ArticleSection id="where-ai-fits" title="Where Does AI Fit In?">
        <p>
          AI can assist with parts of this process, such as extracting quantities, classifying cost items and comparing
          past projects, while people keep responsibility for assumptions and approval. See{" "}
          <Link href={PAGES.ai.path}>AI Cost Estimation</Link> for the workflow, or go to{" "}
          <Link href={PAGES.project.path}>Project Cost Estimation</Link> and{" "}
          <Link href={PAGES.construction.path}>Construction Cost Estimation</Link> for applied detail. To compare
          tools, see <Link href={PAGES.software.path}>cost estimation software</Link>.
        </p>
      </ArticleSection>

      <ArticleSection id="faq" title="Frequently Asked Questions">
        <FAQ items={faqs} />
      </ArticleSection>

      <SourceCitation ids={["gao", "aace", "finops"]} />
    </ArticlePage>
  );
}
