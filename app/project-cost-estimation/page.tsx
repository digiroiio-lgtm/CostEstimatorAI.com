import Link from "next/link";
import { ArticlePage } from "@/components/ArticlePage";
import { ArticleSection } from "@/components/ArticleSection";
import { ComparisonTable } from "@/components/ComparisonTable";
import { DefinitionBox } from "@/components/DefinitionBox";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { FAQ } from "@/components/FAQ";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Cite, SourceCitation } from "@/components/SourceCitation";
import type { FaqItem } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import { PAGES } from "@/lib/pages";

const page = PAGES.project;

export const metadata = buildMetadata({ ...page, type: "article" });

const faqs: FaqItem[] = [
  {
    question: "How much contingency should a project include?",
    answer:
      "There is no universal percentage. Contingency should reflect identified risks, how well the scope is defined and organizational policy, and it should be documented. Early estimates with less defined scope generally need a larger allowance than detailed ones.",
  },
  {
    question: "What is the difference between a project estimate and a project budget?",
    answer:
      "A project estimate predicts what the work will cost. A project budget is the approved allocation of funds, usually informed by the estimate and used to control spending.",
  },
  {
    question: "What is a project cost estimator?",
    answer:
      "The term can mean a person who prepares project estimates or a tool that supports the work. Software can automate calculations and data handling, but a qualified person remains responsible for assumptions and approval.",
  },
];

export default function ProjectCostEstimationPage() {
  return (
    <ArticlePage
      page={page}
      answer="Project cost estimation is the process of predicting the total cost of a project's work, including labor, materials, equipment, overhead, risk and contingency. The estimate becomes the basis for the project budget and is refined as scope and information change. AI can support the data-heavy steps, but estimators remain accountable."
      subtitle="This guide covers what to include, a step-by-step process, five common estimating methods and where AI can help."
      toc={[
        { id: "what-is-project-cost-estimation", title: "What is it?" },
        { id: "costs-included", title: "Costs to include" },
        { id: "process", title: "Process" },
        { id: "methods", title: "Estimating methods" },
        { id: "ai-support", title: "How AI can assist" },
        { id: "why-estimates-change", title: "Why estimates change" },
        { id: "estimate-vs-forecast", title: "Estimate vs forecast" },
        { id: "faq", title: "FAQ" },
        { id: "sources", title: "Sources" },
      ]}
      faqs={faqs}
    >
      <ArticleSection id="what-is-project-cost-estimation" title="What Is Project Cost Estimation?">
        <DefinitionBox label="Definition">
          <p>
            Project cost estimation is the process of predicting the cost of the resources a project needs to deliver
            its defined scope. It is the foundation of project budgeting and project cost planning: the estimate says
            what the work is expected to cost, and the budget sets what the organization will spend.
          </p>
        </DefinitionBox>
        <p>
          A project estimate applies the general principles in{" "}
          <Link href={PAGES.whatIs.path}>What Is Cost Estimation?</Link> to work with a defined start, end and
          deliverables, such as a software release, a facility upgrade, a product launch or a building.
        </p>
      </ArticleSection>

      <ArticleSection
        id="costs-included"
        title="What Costs Should Be Included?"
        lead="Include every cost needed to deliver the scope, and state which items are excluded or handled elsewhere."
      >
        <ComparisonTable
          caption="Cost categories commonly included in a project estimate"
          columns={["Category", "What it covers"]}
          rows={[
            ["Labor", "Internal staff and contractor time, priced from hours and rates, including payroll costs as the organization defines them."],
            ["Materials", "Quantities multiplied by unit prices, plus waste and delivery where relevant."],
            ["Equipment", "Purchase, rental, operation and maintenance of tools, machinery or infrastructure."],
            ["Subcontractors", "Work performed and priced by outside firms."],
            ["Software", "Licenses, subscriptions, development tools and usage-based services."],
            ["Logistics", "Transport, shipping, storage, handling and travel."],
            ["Overhead", "Indirect costs such as supervision, administration, facilities and insurance."],
            ["Contingency", "An allowance for identified risk and remaining uncertainty."],
            ["Financing (where relevant)", "Interest and fees if the project is funded with borrowed money."],
            ["Taxes (where relevant)", "Sales, use or other applicable taxes. Rules vary by jurisdiction, so confirm with a qualified tax professional."],
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="process"
        title="Project Cost Estimation Process"
        lead="Each step builds on the one before. Skipping scope or risk work is a common reason estimates fail later."
      >
        <ProcessSteps
          label="Project cost estimation process"
          steps={[
            { title: "Scope" },
            { title: "Work Breakdown" },
            { title: "Resource Requirements" },
            { title: "Unit Costs" },
            { title: "Indirect Costs" },
            { title: "Risk" },
            { title: "Contingency" },
            { title: "Estimate" },
            { title: "Review" },
          ]}
        />
        <ComparisonTable
          caption="What happens at each step"
          columns={["Step", "What happens", "Typical output"]}
          rows={[
            ["Scope", "Define deliverables, boundaries and exclusions.", "A scope statement."],
            ["Work Breakdown", "Divide the scope into manageable work packages.", "A work breakdown structure."],
            ["Resource Requirements", "Determine the people, materials and equipment each package needs.", "Resource lists and quantities."],
            ["Unit Costs", "Apply rates and prices to resources.", "Direct cost by work package."],
            ["Indirect Costs", "Allocate overhead and general costs.", "Indirect cost allocation."],
            ["Risk", "Identify uncertainties and their possible cost effects.", "A risk register."],
            ["Contingency", "Decide an allowance in line with identified risk.", "A documented contingency."],
            ["Estimate", "Combine all elements and document assumptions.", "The project cost estimate."],
            ["Review", "Have independent reviewers check logic, quantities and prices.", "An approved, versioned estimate."],
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="methods"
        title="Common Project Estimation Methods"
        lead={
          <>
            Five methods are widely described in project management guidance
            <Cite id="pmi" />. No method is universally superior. The right choice depends on how much is known,
            what data exists and what the estimate will be used for, and many estimates combine several methods.
          </>
        }
      >
        <h3>Analogous estimating</h3>
        <p>
          Analogous estimating uses the actual cost of a similar past project as the basis for the new one, adjusted
          for differences in size or complexity. It is fast and works with limited detail, but it depends on how truly
          comparable the earlier project is.
        </p>
        <h3>Parametric estimating</h3>
        <p>
          Parametric estimating applies a statistical relationship between historical data and a variable, such as
          cost per unit of size or per hour of effort. It can scale well when the relationship is validated, but it is
          only as good as the underlying data and the range over which the relationship holds.
        </p>
        <h3>Bottom-up estimating</h3>
        <p>
          Bottom-up estimating prices each work package or activity individually and adds the results together. It
          can be detailed and traceable, but it needs a well-defined scope and takes more time.
        </p>
        <h3>Three-point estimating</h3>
        <p>
          Three-point estimating gives an optimistic (O), most likely (M) and pessimistic (P) value for an item. The
          values are combined into an expected figure, either by simple average, (O + M + P) ÷ 3, or by weighting the
          most likely value, (O + 4M + P) ÷ 6. It makes uncertainty explicit, but the quality depends on how the three
          values are chosen.
        </p>
        <h3>Expert judgment</h3>
        <p>
          Expert judgment relies on the knowledge of people experienced with similar work, technology or markets. It
          is useful where data is scarce, but it can be subject to bias, so it works best when documented and
          challenged by other reviewers.
        </p>
      </ArticleSection>

      <ArticleSection
        id="ai-support"
        title="How Can AI Assist Project Cost Estimation?"
        lead="AI can support several steps of the process by handling documents and historical data at scale. The estimator still owns scope, assumptions and approval."
      >
        <ul>
          <li><strong>Scope:</strong> extract deliverables and requirements from project documents.</li>
          <li><strong>Work breakdown:</strong> propose a structure based on similar past projects.</li>
          <li><strong>Resources and unit costs:</strong> match items to historical records and flag gaps.</li>
          <li><strong>Risk:</strong> surface risk patterns from past projects for the team to consider.</li>
          <li><strong>Estimate and review:</strong> compare versions, run scenarios and flag anomalies.</li>
          <li><strong>During delivery:</strong> compare actual costs with the baseline and project updated forecasts.</li>
        </ul>
        <p>
          The workflow and its limits are covered in <Link href={PAGES.ai.path}>AI Cost Estimation</Link>. For the
          tooling landscape, see <Link href={PAGES.software.path}>cost estimation software</Link>.
        </p>
      </ArticleSection>

      <ArticleSection
        id="why-estimates-change"
        title="Why Estimates Change During a Project"
        lead="Estimates change because they are predictions made with incomplete information. Change is normal; undocumented change is the problem."
      >
        <ul>
          <li>Scope is added, removed or clarified.</li>
          <li>Design or requirements develop and replace early assumptions.</li>
          <li>Prices for labor, materials or services move.</li>
          <li>Schedules shift, which can alter duration-related costs.</li>
          <li>Productivity differs from what was assumed.</li>
          <li>Identified risks occur, or new ones appear.</li>
          <li>Errors and omissions are found in review or delivery.</li>
        </ul>
        <p>
          AACE International&rsquo;s classification system reflects this: estimates prepared when a project is less
          defined carry more uncertainty than those prepared with mature definition
          <Cite id="aace" />.
        </p>
      </ArticleSection>

      <ArticleSection id="estimate-vs-forecast" title="Cost Estimate vs Cost Forecast">
        <p>
          A cost estimate predicts what the work is expected to cost, usually before or early in delivery. A cost
          forecast is updated during delivery and projects the cost at completion from actual costs to date plus the
          work that remains. Techniques such as earned value management support this tracking
          <Cite id="gao" />.
        </p>
        <DisclaimerBox title="Keep the baseline">
          <p>
            Keep the original estimate and each revision. Comparing the baseline with later forecasts is how teams
            learn which assumptions held and which did not.
          </p>
        </DisclaimerBox>
      </ArticleSection>

      <ArticleSection id="faq" title="Frequently Asked Questions">
        <FAQ items={faqs} />
      </ArticleSection>

      <SourceCitation ids={["pmi", "aace", "gao"]} />
    </ArticlePage>
  );
}
