import Link from "next/link";
import { ArticlePage } from "@/components/ArticlePage";
import { ArticleSection } from "@/components/ArticleSection";
import { ComparisonTable } from "@/components/ComparisonTable";
import { DefinitionBox } from "@/components/DefinitionBox";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { FAQ } from "@/components/FAQ";
import { ProcessSteps } from "@/components/ProcessSteps";
import { SaleLink } from "@/components/SaleLink";
import { Cite, SourceCitation } from "@/components/SourceCitation";
import type { FaqItem } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import { PAGES } from "@/lib/pages";

const page = PAGES.construction;

export const metadata = buildMetadata({ ...page, type: "article" });

const faqs: FaqItem[] = [
  {
    question: "How do construction estimators calculate cost?",
    answer:
      "They measure the quantities of each work item, multiply by unit costs, add labor, equipment and subcontractor costs, then add overhead, profit and contingency. The method and level of detail depend on how much of the design is defined.",
  },
  {
    question: "What is a quantity takeoff?",
    answer:
      "A quantity takeoff is the process of measuring and counting the materials and work items shown in drawings and specifications. In a detailed estimate it is usually the basis for pricing.",
  },
  {
    question: "Can AI perform a construction takeoff?",
    answer:
      "AI can help by detecting and measuring elements in digital drawings, but results vary with drawing quality and the tool used. An estimator should verify quantities against the drawings and specifications before pricing.",
  },
];

export default function ConstructionCostEstimationPage() {
  return (
    <ArticlePage
      page={page}
      answer="Construction cost estimation is the process of predicting what it will cost to build a project by measuring quantities of work and pricing materials, labor, equipment, subcontractors, overhead, profit and contingency. AI can help extract quantities and compare documents, but an experienced estimator validates every assumption. An estimate is not a bid or a contractual quote."
      subtitle="This guide explains what a construction estimate contains, how the estimating workflow runs and where AI can assist estimators."
      toc={[
        { id: "what-is-construction-cost-estimation", title: "What is it?" },
        { id: "estimate-contents", title: "What an estimate includes" },
        { id: "workflow", title: "Estimating workflow" },
        { id: "ai-assistance", title: "How AI can assist" },
        { id: "experienced-estimator", title: "Experienced estimator" },
        { id: "estimating-errors", title: "Sources of error" },
        { id: "estimate-vs-bid", title: "Estimate vs bid" },
        { id: "faq", title: "FAQ" },
        { id: "sources", title: "Sources" },
      ]}
      faqs={faqs}
    >
      <ArticleSection id="what-is-construction-cost-estimation" title="What Is Construction Cost Estimation?">
        <DefinitionBox label="Definition">
          <p>
            Construction cost estimation, also called construction estimating, is the process of forecasting the cost
            of building a project. A building cost estimate is derived from quantities of work, the unit costs of
            materials and labor, the cost of equipment and subcontractors, and allowances for overhead, profit and
            risk.
          </p>
        </DefinitionBox>
        <p>
          It applies the general method in <Link href={PAGES.whatIs.path}>What Is Cost Estimation?</Link> to the
          physical delivery of buildings and infrastructure. A construction cost estimator, whether a person or a
          team, usually prepares estimates at several stages: early budgets from limited information, then more
          detailed estimates as drawings develop. AACE International&rsquo;s classification system describes this
          link between project definition and estimate uncertainty
          <Cite id="aace" />.
        </p>
      </ArticleSection>

      <ArticleSection
        id="estimate-contents"
        title="What Does a Construction Estimate Include?"
        lead="A construction estimate combines measured quantities with priced resources and allowances."
      >
        <ComparisonTable
          caption="Typical elements of a construction estimate"
          columns={["Element", "What it covers"]}
          rows={[
            ["Quantities", "Measured amounts of each work item, such as area, length, volume or count, taken from drawings and specifications."],
            ["Materials", "Quantities multiplied by unit prices, including waste, delivery and storage where relevant."],
            ["Labor", "Crew hours and rates, adjusted for productivity assumptions and working conditions."],
            ["Equipment", "Owned or rented machinery and tools, including mobilization and operating cost."],
            ["Subcontractors", "Work priced by specialty firms, such as electrical or mechanical trades."],
            ["Site conditions", "Access, ground conditions, existing structures, logistics and other factors specific to the site."],
            ["Permits (where applicable)", "Fees and approvals required by the jurisdiction."],
            ["Overhead", "Project and company indirect costs such as supervision, insurance and administration."],
            ["Profit", "The contractor's margin, a commercial decision added when pricing a bid."],
            ["Contingency", "An allowance for identified risk and uncertainty in scope, prices or conditions."],
          ]}
        />
        <p>
          Estimates are often organized with a standard structure so that quantities and costs can be compared
          across projects. CSI MasterFormat is a widely used standard for organizing construction requirements and
          work results
          <Cite id="masterformat" />.
        </p>
      </ArticleSection>

      <ArticleSection
        id="workflow"
        title="Construction Estimating Workflow"
        lead="A detailed estimate starts from the documents and builds up to a reviewed total."
      >
        <ProcessSteps
          label="Construction estimating workflow"
          steps={[
            { title: "Drawings / Scope" },
            { title: "Quantity Takeoff" },
            { title: "Unit Costs" },
            { title: "Labor" },
            { title: "Equipment" },
            { title: "Subcontractor Costs" },
            { title: "Overhead" },
            { title: "Contingency" },
            { title: "Estimate Review" },
          ]}
        />
        <ComparisonTable
          caption="What happens at each step of construction estimating"
          columns={["Step", "What happens"]}
          rows={[
            ["Drawings / Scope", "Review drawings, specifications and addenda to understand what is to be built and what is excluded."],
            ["Quantity Takeoff", "Measure and count the work items shown in the documents."],
            ["Unit Costs", "Apply prices per unit to materials and work items from current, sourced data."],
            ["Labor", "Estimate crew size, hours and rates for each activity."],
            ["Equipment", "Identify equipment needs and price ownership, rental and operation."],
            ["Subcontractor Costs", "Collect and compare subcontractor and supplier pricing and check their scopes."],
            ["Overhead", "Add project and company indirect costs."],
            ["Contingency", "Set an allowance in line with identified risks and the maturity of the design."],
            ["Estimate Review", "Check quantities, prices, scope coverage and assumptions before the estimate is used."],
          ]}
        />
        <p>
          Early-stage estimates often start from analogous or parametric methods, such as costs of similar completed
          projects scaled by size, before quantities are available. As design develops, estimators move toward
          quantity-based pricing.
        </p>
      </ArticleSection>

      <ArticleSection
        id="ai-assistance"
        title="How Can AI Assist Construction Estimating?"
        lead="AI can reduce manual effort on document-heavy steps and highlight issues for review. It does not remove the need to verify quantities and prices."
      >
        <ComparisonTable
          caption="AI-assisted construction estimating tasks and the human check on each"
          columns={["Task", "How AI can assist", "What the estimator verifies"]}
          rows={[
            ["Drawing and document extraction", "Reads plans, specifications and addenda and extracts requirements, notes and dimensions.", "That the extraction is complete and was read correctly."],
            ["Quantity identification", "Detects and measures elements in digital drawings to propose quantities.", "Quantities against the drawings, and anything the model cannot see."],
            ["Scope comparison", "Compares scope documents, addenda or subcontractor proposals to find gaps and overlaps.", "Which differences matter and how they are priced."],
            ["Cost item classification", "Assigns items to cost codes or categories.", "That classification fits the company's cost structure."],
            ["Historical comparison", "Finds similar past projects and compares cost patterns.", "Whether the projects are truly comparable in type, size, location and date."],
            ["Change detection", "Highlights what changed between document revisions.", "The cost effect of each change."],
            ["Estimate review", "Flags outliers, missing items and inconsistencies for a closer look.", "Whether each flag is an error or a valid exception."],
          ]}
        />
        <p>
          See <Link href={PAGES.ai.path}>AI Cost Estimation</Link> for the general workflow and its risks, and{" "}
          <Link href={PAGES.constructionAi.path}>construction estimating AI</Link> for what to evaluate in tools.
        </p>
      </ArticleSection>

      <ArticleSection
        id="experienced-estimator"
        title="What Requires an Experienced Estimator?"
        lead="Construction involves conditions and commercial choices that documents and historical data do not fully capture."
      >
        <ul className="checklist">
          <li><strong>Reading the design in context,</strong> including constructability and how the work will be built.</li>
          <li><strong>Site conditions,</strong> such as access, ground and existing structures.</li>
          <li><strong>Productivity and crew assumptions</strong> that fit the project and the team.</li>
          <li><strong>Subcontractor scope gaps</strong> and comparing proposals on an equal basis.</li>
          <li><strong>Local prices and market conditions,</strong> including availability and lead times.</li>
          <li><strong>Risk and contingency,</strong> including contract terms that allocate risk.</li>
          <li><strong>Bid strategy and commercial terms,</strong> which are business decisions.</li>
          <li><strong>Final sign-off,</strong> which belongs to an accountable person.</li>
        </ul>
      </ArticleSection>

      <ArticleSection
        id="estimating-errors"
        title="Common Sources of Estimating Error"
        lead="Most errors come from missing information and unchecked assumptions rather than from arithmetic."
      >
        <ul className="checklist checklist--caution">
          <li>Quantities that are miscounted, omitted or measured from outdated drawings.</li>
          <li>Addenda or scope items that were missed.</li>
          <li>Unit prices that are old, national rather than local, or not tied to a date.</li>
          <li>Labor productivity assumed without regard to site conditions or crew.</li>
          <li>Site conditions underestimated or not investigated.</li>
          <li>Subcontractor scope gaps and overlaps left unreconciled.</li>
          <li>Double counting of items, or items counted in no category.</li>
          <li>Escalation and schedule effects ignored.</li>
          <li>Contingency set arbitrarily instead of from identified risk.</li>
          <li>Spreadsheet or formula errors that go unreviewed.</li>
        </ul>
      </ArticleSection>

      <ArticleSection id="estimate-vs-bid" title="Estimate vs Bid or Quote">
        <DisclaimerBox tone="warning" title="An estimate is not a bid">
          <p>
            A construction estimate is a prediction of cost. A bid or quote is a price offered to an owner on stated
            terms and may be contractually binding. This site does not publish current construction prices and does
            not provide bids, quotes or professional estimating services. Use dated, local and sourced cost data
            when preparing a real estimate.
          </p>
        </DisclaimerBox>
        <p>
          For general definitions, see <Link href={`${PAGES.whatIs.path}#estimate-vs-quote`}>cost estimate vs quote</Link>.
          For other application areas, see <Link href={`${PAGES.useCases.path}#renovation-estimating`}>renovation estimating</Link>{" "}
          and <Link href={`${PAGES.useCases.path}#bid-preparation-support`}>bid preparation support</Link>.
        </p>
      </ArticleSection>

      <ArticleSection id="faq" title="Frequently Asked Questions">
        <FAQ items={faqs} />
      </ArticleSection>

      <p className="table-note">
        Building in construction technology? CostEstimatorAI.com is available for acquisition.{" "}
        <SaleLink className="inline-cta">View domain details →</SaleLink>
      </p>

      <SourceCitation ids={["masterformat", "aace"]} />
    </ArticlePage>
  );
}
