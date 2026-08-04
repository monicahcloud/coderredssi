import EducationCTA from "@/components/education/EducationCTA";
import EducationDeliverables from "@/components/education/EducationDeliverables";
import EducationFramework from "@/components/education/EducationFramework";
import EducationHero from "@/components/education/EducationHero";
import EducationOutcomes from "@/components/education/EducationOutcomes";
import EducationProcess from "@/components/education/EducationProcess";
import EducationPrograms from "@/components/education/EducationPrograms";
import EducationPractices from "@/components/equipment/EquipmentPractices";

export const metadata = {
  title: "School Safety Education | Code Red SSI",
  description:
    "School safety education programs that prepare leaders, educators, staff, students, and families to recognize risks and respond confidently.",
};

export default function EducationPage() {
  return (
    <main className="w-full max-w-full overflow-x-hidden">
      <EducationHero />
      <EducationOutcomes />
      <EducationPrograms />
      <EducationProcess />
      <EducationDeliverables />
      <EducationPractices />
      <EducationFramework />
      <EducationCTA />
    </main>
  );
}
