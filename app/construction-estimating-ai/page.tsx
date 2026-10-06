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

const page = PAGES.constructionAi;

export const metadata = buildMetadata({ ...page, type: "article" });

const faqs: FaqItem[] = [
  {
    question: "Is construction estimating AI the same as takeoff software?",
    answer:
      "Not exactly. Takeoff software helps measure quantities from digital plans, usually with manual measuring. Construction estimating AI adds automated detection, classification and comparison. Many products combine both.",
  },
  {
    question: "Does construction estimating AI provide current prices?",
    answer:
      "It depends on the product. Prices may come from the user's own records, a licensed cost database or another source. Check where prices come from, their date and whether they reflect the project location.",
  },
  {
    question: "Can AI-generated construction estimates be used as bids?",
    answer:
      "No. An estimate is a prediction of cost. A bid is a price offered on stated terms and may be binding. An estimator and management decide margin, risk and terms before a bid is submitted.",
  },
];

export default function ConstructionEstimatingAiPage() {
  return (
    <ArticlePage
      page={page}
      answer="Construction estimating AI applies artificial intelligence to estimating tasks such as reading plans and specifications, identifying quantities, classifying cost items, comparing scope and flagging changes. It can reduce manual document work, but estimators must verify quantities, local pricing, site conditions and risk. Its output is a draft estimate, not a bid or contractual quote."
      subtitle="A category guide to how AI is applied in construction estimating, what to evaluate and where its limits lie."
      toc={[
        { id: "what-is-construction-estimating-ai", title: "What it is" },
        { id: "capabilities", title: "Capabilities" },
        { id: "workflow", title: "Workflow" },
        { id: "project-stage", title: "By project stage" },
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
          PAGES.construction.path,
          PAGES.aiEstimator.path,
          PAGES.software.path,
          PAGES.ai.path,
          PAGES.useCases.path,
        ],
      }}
      after={<AssetNote category="construction technology" />}
    >
      <ArticleSection id="what-is-construction-estimating-ai" title="What Is Construction Estimating AI?">
        <DefinitionBox label="Definition">
          <p>
            Construction estimating AI is the use of artificial intelligence, including machine learning and
            language models, to support parts of{" "}
            <Link href={PAGES.construction.path}>construction cost estimation</Link>. It works on construction
            documents and cost data and produces draft quantities, classifications, comparisons and flags.
          </p>
        </DefinitionBox>
        <EntityRelations
          label="How construction estimating AI relates to estimating tasks"
          items={[
            { from: "Construction Estimating AI", to: "Document Extraction", text: "Reads plans, specifications and addenda." },
            { from: "Construction Estimating AI", to: "Quantity Identification", text: "Proposes quantities for the estimator to verify." },
            { from: "Construction Estimating AI", to: "Scope Comparison", text: "Finds gaps and overlaps across documents and proposals." },
            { from: "Construction Estimating AI", to: "Cost Classification", text: "Assigns items to cost codes." },
            { from: "Construction Estimating AI", to: "Estimator Validation", text: "An experienced estimator reviews all output." },
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="capabilities"
        title="Capabilities Buyers Typically Evaluate"
        lead="In construction, traceability matters most: every extracted quantity or flag should lead back to the drawing or specification it came from."
      >
        <ComparisonTable
          caption="Construction estimating AI capabilities, typical inputs and what buyers look for"
          columns={["Capability", "Typical inputs", "What buyers look for"]}
          rows={[
            ["Drawing and document extraction", "Digital drawings, specifications and addenda.", "Supported file types, handling of scanned or low-quality sets, and links to source pages."],
            ["Quantity identification", "Digital plan sets.", "Measurements the estimator can see, edit and audit."],
            ["Scope comparison", "Specifications, addenda and subcontractor proposals.", "Clear lists of gaps and overlaps."],
            ["Cost item classification", "Line items or extracted work items.", "Support for company cost codes or CSI MasterFormat structure."],
            ["Historical comparison", "Past estimates and actual costs.", "Visible criteria for what counts as a comparable project."],
            ["Change detection", "Successive document revisions.", "Highlighted changes, with cost impact left to the estimator."],
            ["Estimate review", "A draft estimate.", "Outlier flags that explain what looks unusual."],
          ]}
          note={
            <>
              CSI MasterFormat is a widely used standard for organizing construction requirements and work results
              <Cite id="masterformat" />.
            </>
          }
        />
      </ArticleSection>

      <ArticleSection
        id="workflow"
        title="AI-Assisted Construction Estimating Workflow"
        lead="AI handles document-heavy steps first. Pricing judgment and the bid decision stay with people."
      >
        <ProcessSteps
          label="AI-assisted construction estimating workflow"
          steps={[
            { title: "Plans and Specs" },
            { title: "Extraction" },
            { title: "Takeoff Review" },
            { title: "Pricing" },
            { title: "Scope Check" },
            { title: "Estimator Review" },
            { title: "Bid Decision" },
          ]}
        />
        <p>
          For the underlying steps without AI, see the{" "}
          <Link href={`${PAGES.construction.path}#workflow`}>construction estimating workflow</Link>.
        </p>
      </ArticleSection>

      <ArticleSection
        id="project-stage"
        title="Where Does AI Help by Project Stage?"
        lead={
          <>
            Estimate uncertainty is linked to how mature the project definition is
            <Cite id="aace" />, so the useful role of AI changes as drawings develop.
          </>
        }
      >
        <ComparisonTable
          caption="Possible AI roles and human focus by estimating stage"
          columns={["Stage", "AI may assist with", "Human focus"]}
          rows={[
            ["Early, conceptual", "Finding comparable past projects and scaling from them.", "Judging comparability, scope growth and contingency."],
            ["Design development", "Extracting scope from partial documents and flagging gaps.", "Interpreting incomplete design and setting allowances."],
            ["Detailed or bid stage", "Quantity review, scope comparison, change detection and outlier flags.", "Verifying quantities, local pricing, site conditions and risk."],
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="evaluation-criteria"
        title="How to Evaluate Construction Estimating AI"
        lead="Run any tool against a past project whose drawings and final costs you already have."
      >
        <ul className="checklist">
          <li><strong>Traceability.</strong> Every quantity and flag links to its source.</li>
          <li><strong>Editable, auditable quantities.</strong> The estimator can correct and annotate them.</li>
          <li><strong>File support.</strong> It handles the formats and drawing quality you actually receive.</li>
          <li><strong>Trade coverage.</strong> Check performance on your project types, such as building, civil or specialty trades.</li>
          <li><strong>Pricing source.</strong> Know who supplies prices, their date and how location is handled.</li>
          <li><strong>Revision handling.</strong> It copes with addenda and updated drawing sets.</li>
          <li><strong>Fit with existing tools.</strong> Data should move to your estimating and accounting systems.</li>
          <li><strong>Data security.</strong> Confirm ownership and storage of confidential project documents.</li>
        </ul>
        <p>
          General evaluation questions are in <Link href={`${PAGES.aiEstimator.path}#evaluation-criteria`}>AI cost estimator</Link>,
          and software categories are in <Link href={PAGES.software.path}>cost estimation software</Link>.
        </p>
      </ArticleSection>

      <ArticleSection
        id="use-cases"
        title="Construction Estimating AI Use Cases"
        lead="The same capabilities apply to several kinds of construction work."
      >
        <ul>
          <li><strong>General contractors:</strong> scope review and comparison of subcontractor proposals during bid preparation. See <Link href={`${PAGES.useCases.path}#bid-preparation-support`}>bid preparation support</Link>.</li>
          <li><strong>Subcontractors:</strong> quantity review for a single trade&rsquo;s scope.</li>
          <li><strong>Owners and developers:</strong> early budgets built from comparable projects.</li>
          <li><strong>Renovation teams:</strong> extracting scope from surveys and notes where conditions are partly unknown. See <Link href={`${PAGES.useCases.path}#renovation-estimating`}>renovation estimating</Link>.</li>
          <li><strong>Estimating departments:</strong> checking estimates against past projects and tracking variance.</li>
        </ul>
      </ArticleSection>

      <ArticleSection id="ai-vs-manual" title="AI-Assisted vs Manual Construction Estimating">
        <ComparisonTable
          caption="Typical differences between manual and AI-assisted construction estimating"
          columns={["Task", "Manual", "AI-assisted"]}
          rows={[
            ["Reading plans and specifications", "Estimator reads in full.", "Draft extraction for the estimator to check."],
            ["Quantity takeoff", "Measured and counted by hand or with digital tools.", "Proposed quantities verified by the estimator."],
            ["Comparing addenda and revisions", "Manual redline review.", "Highlighted changes for review."],
            ["Site conditions and constructability", "Estimator judgment.", "Estimator judgment. Unchanged."],
            ["Pricing strategy and sign-off", "Estimator and management.", "Estimator and management. Unchanged."],
          ]}
        />
      </ArticleSection>

      <ArticleSection id="limitations" title="Limitations and What Still Needs an Estimator">
        <ul className="checklist checklist--caution">
          <li>Poor drawings, missing sheets or unusual details can produce wrong or incomplete extraction.</li>
          <li>Models cannot see site conditions, access constraints or local practice.</li>
          <li>Historical comparisons mislead if past projects differ in type, size, place or date.</li>
          <li>Productivity, subcontractor scope gaps and contract risk need experienced judgment.</li>
        </ul>
        <DisclaimerBox tone="warning" title="An estimate is not a bid">
          <p>
            AI-generated construction estimates are decision support. They are not bids or contractual quotes, and
            this site does not publish current construction prices. See{" "}
            <Link href={`${PAGES.construction.path}#experienced-estimator`}>what requires an experienced estimator</Link>.
          </p>
        </DisclaimerBox>
      </ArticleSection>

      <ArticleSection id="faq" title="Frequently Asked Questions">
        <FAQ items={faqs} />
      </ArticleSection>

      <SourceCitation ids={["masterformat", "aace"]} />
    </ArticlePage>
  );
}
