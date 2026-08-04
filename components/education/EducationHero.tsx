import { GraduationCap } from "lucide-react";

import PillarHero from "@/components/pillars/PillarHero";

export default function EducationHero() {
  return (
    <PillarHero
      ribbon="Education"
      badge="School Safety Education"
      heading="Safety"
      highlightedHeading="Education"
      statement="Empower people. Build a culture of preparedness."
      description="Our education programs give school leaders, educators, staff, students, and families the knowledge and confidence to recognize risks, respond appropriately, and contribute to a safer learning environment."
      image="/images/educationhero.png"
      imageAlt="Students and educators participating in a school safety education program"
      imagePosition="center"
      icon={GraduationCap}
      primaryCTA="Request Training Information"
      secondaryCTA="Explore Education"
      secondaryHref="#education-details"
    />
  );
}
