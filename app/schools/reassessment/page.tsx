import ReassessmentCTA from "@/components/reassessment/ReassessmentCTA";
import ReassessmentDeliverables from "@/components/reassessment/ReassessmentDeliverables";
import ReassessmentFocus from "@/components/reassessment/ReassessmentFocus";
import ReassessmentFramework from "@/components/reassessment/ReassessmentFramework";
import ReassessmentHero from "@/components/reassessment/ReassessmentHero";
import ReassessmentOutcomes from "@/components/reassessment/ReassessmentOutcomes";
import ReassessmentPractices from "@/components/reassessment/ReassessmentPractices";
import ReassessmentProcess from "@/components/reassessment/ReassessmentProcess";

export default function ReassessmentPage() {
  return (
    <main>
      <ReassessmentHero />
      <ReassessmentOutcomes />
      <ReassessmentFocus />
      <ReassessmentProcess />
      <ReassessmentDeliverables />
      <ReassessmentPractices />
      <ReassessmentFramework />
      <ReassessmentCTA />

      {/* Remaining sections */}
    </main>
  );
}
