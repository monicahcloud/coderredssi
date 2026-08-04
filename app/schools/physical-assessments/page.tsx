import PhysicalAssessmentHero from "@/components/physical-assessments/PhysicalAssesmentHero";
import PhysicalAssessmentProcess from "@/components/physical-assessments/PhysicalAssesmentProcess";
import PhysicalAssessmentAreas from "@/components/physical-assessments/PhysicalAssessmentAreas";
import PhysicalAssessmentCTA from "@/components/physical-assessments/PhysicalAssessmentCTA";
import PhysicalAssessmentDeliverables from "@/components/physical-assessments/PhysicalAssessmentDeliverables";
import PhysicalAssessmentFramework from "@/components/physical-assessments/PhysicalAssessmentFramework";
import PhysicalAssessmentOutcomes from "@/components/physical-assessments/PhysicalAssessmentOutcomes";
import PhysicalAssessmentPractices from "@/components/physical-assessments/PhysicalAssessmentPractices";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Physical Assessments | Code Red Safer Schools Initiative",
  description:
    "On-site school security assessments that identify vulnerabilities, establish a readiness baseline, and prioritize practical improvements.",
};

export default function PhysicalAssessmentsPage() {
  return (
    <main className="overflow-hidden bg-white text-[#070b1c]">
      <PhysicalAssessmentHero />
      <PhysicalAssessmentOutcomes />
      <PhysicalAssessmentAreas />
      <PhysicalAssessmentProcess />
      <PhysicalAssessmentDeliverables />
      <PhysicalAssessmentPractices />
      <PhysicalAssessmentFramework />
      <PhysicalAssessmentCTA />
    </main>
  );
}
