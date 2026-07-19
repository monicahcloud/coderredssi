import type { Metadata } from "next";

import SchoolFinancialModel from "@/components/schools/SchoolFinancialModel";
import SchoolGap from "@/components/schools/SchoolGap";
import SchoolHero from "@/components/schools/SchoolHero";
import SchoolProcess from "@/components/schools/SchoolProcess";
import SchoolPillars from "@/components/schools/SchoolPillars";
import SchoolCTA from "@/components/schools/SchoolCTA";
import SchoolMythFact from "@/components/schools/SchoolMythFact";

export const metadata: Metadata = {
  title: "Safer Schools | Code Red Safer Schools Initiative",
  description:
    "A coordinated school safety framework that helps K-12 schools assess risk, educate their communities, equip their campuses, and sustain readiness.",
};

export default function SchoolPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <SchoolHero />
      <SchoolGap />
      <SchoolMythFact />
      <SchoolPillars />
      <SchoolProcess />
      <SchoolFinancialModel />
      <SchoolCTA />
    </main>
  );
}
