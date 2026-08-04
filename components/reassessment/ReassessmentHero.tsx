import { RefreshCw } from "lucide-react";

import PillarHero from "@/components/pillars/PillarHero";

export default function ReassessmentHero() {
  return (
    <PillarHero
      ribbon="Reassessment"
      badge="Continuous Safety Improvement"
      heading="Continuous"
      highlightedHeading="Reassessment"
      statement="Readiness is maintained—not completed once."
      description="Our reassessment process measures progress, identifies emerging risks, verifies that improvements are working, and keeps your school’s safety strategy aligned with changing conditions."
      image="/images/teamassesement.png"
      imageAlt="School leaders reviewing safety progress during a reassessment meeting"
      imagePosition="center"
      icon={RefreshCw}
      primaryCTA="Schedule a Reassessment"
      secondaryCTA="Explore Reassessment"
      secondaryHref="#reassessment-details"
    />
  );
}
