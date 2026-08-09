import type { Metadata } from "next";

import CentralInsight from "@/components/insights/CentralInsight";
import FeaturedPerspective from "@/components/insights/FeaturedPerspective";
import InsightAreas from "@/components/insights/InsightAreas";
import InsightsCTA from "@/components/insights/InsightsCTA";
import InsightsHero from "@/components/insights/InsightsHero";
import ReadinessCycle from "@/components/insights/ReadinessCycle";

export const metadata: Metadata = {
  title: "School Safety Insights | Code Red SSI",
  description:
    "Practical school safety guidance for assessment, preparedness, education, technology, and continuous improvement.",
};

export default function InsightsPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <InsightsHero />
      <CentralInsight />
      <FeaturedPerspective />
      <InsightAreas />
      <ReadinessCycle />
      <InsightsCTA />
    </main>
  );
}
