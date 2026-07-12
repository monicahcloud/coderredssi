// app/about/page.tsx

import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutWhoWeAre from "@/components/about/AboutWhoWeAre";
import AboutMissionVision from "@/components/about/AboutMissionVision";
import AboutDifference from "@/components/about/AboutDifference";
import AboutPrinciples from "@/components/about/AboutPrinciples";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-950">
      <AboutHero />
      <AboutStory />
      <AboutWhoWeAre />
      <AboutMissionVision />
      <AboutDifference />
      {/* <AboutPillars /> */}
      <AboutPrinciples />
      {/* <AboutLookingAhead /> */}
      <AboutCTA />
    </main>
  );
}
