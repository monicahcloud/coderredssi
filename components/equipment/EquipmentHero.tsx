import { Cctv } from "lucide-react";

import PillarHero from "@/components/pillars/PillarHero";

export default function EquipmentHero() {
  return (
    <PillarHero
      ribbon="Equipment"
      badge="School Safety Equipment"
      heading="Safety"
      highlightedHeading="Equipment"
      statement="Strengthen your systems. Support a faster response."
      description="We help schools evaluate and prioritize the physical security equipment, communication tools, access controls, and safety systems needed to strengthen everyday readiness."
      image="/images/securitycameras.png"
      imageAlt="School security cameras and safety equipment supporting campus readiness"
      imagePosition="center"
      icon={Cctv}
      primaryCTA="Discuss Equipment Needs"
      secondaryCTA="Explore Equipment"
      secondaryHref="#equipment-details"
    />
  );
}
