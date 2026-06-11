import PartnershipHero from "@/components/partnerships/PartnershipHero";
import PartnershipOptions from "@/components/partnerships/PartnershipOptions";
import SponsorBenefits from "@/components/partnerships/SponsorBenefits";
import PartnershipCTA from "@/components/partnerships/PartnershipCTA";
import WhyPartner from "@/components/partnerships/WhyPartner";
import ImpactAreas from "@/components/partnerships/ImpactAreas";
import PartnershipProcess from "@/components/partnerships/PartnershipProcess";
import PartnershipFAQ from "@/components/partnerships/PartnershipFAQ";

export const metadata = {
  title: "Partnerships | Code Red Safer Schools Initiative",
  description:
    "Partner with Code Red Safer Schools Initiative to help schools strengthen preparedness, improve safety awareness, and support safer learning environments.",
};

export default function PartnershipsPage() {
  return (
    <main className="w-full bg-black text-white">
      <section className="relative">
        <div className="">
          <PartnershipHero />
        </div>

        {/* <TransitionSlide
          eyebrow="why partner"
          title="A Coordinated Approach to School Protection"
          highlight="Coordinated"
          description="Code Red connects schools, partners, technology providers, and safety professionals into one framework schools can actually implement."
          tone="neutral"
        /> */}

        <WhyPartner />
        {/* 
        <TransitionSlide
          eyebrow="partner impact"
          title="Your Support Moves Schools From Risk to Readiness"
          highlight="Readiness"
          description={[
            "Support school safety assessments",
            "Expand preparedness education",
            "Strengthen emergency response planning",
            "Help reduce financial barriers for schools",
          ]}
          tone="red"
        /> */}

        <ImpactAreas />

        {/* <TransitionSlide
          eyebrow="investment tiers"
          title="Funding Translates Into Measurable School Protection"
          highlight="Measurable"
          description="Partnership investment can support schools, districts, and statewide initiatives through a structured impact model."
          tone="dark"
        /> */}

        <PartnershipOptions />

        {/* <TransitionSlide
          eyebrow="sponsor value"
          title="Recognition, Accountability, and Mission Alignment"
          highlight="Accountability"
          description="Partners receive clear recognition, tier-appropriate impact reporting, and a visible role in building safer schools."
          tone="neutral"
        /> */}

        <SponsorBenefits />
        <PartnershipProcess />
        <PartnershipCTA />
        <PartnershipFAQ />
      </section>
    </main>
  );
}
