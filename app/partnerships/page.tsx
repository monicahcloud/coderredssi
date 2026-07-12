import PartnershipHero from "@/components/partnerships/PartnershipHero";
import PartnershipOptions from "@/components/partnerships/PartnershipOptions";
import SponsorBenefits from "@/components/partnerships/SponsorBenefits";
import PartnershipCTA from "@/components/partnerships/PartnershipCTA";
import WhyPartner from "@/components/partnerships/WhyPartner";
import PartnershipProcess from "@/components/partnerships/PartnershipProcess";
import ImpactAreas from "@/components/partnerships/ImpactAreas";
import ImpactCalculator from "@/components/partnerships/ImpactCalculator";

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
        <WhyPartner />
        <SponsorBenefits />
        <PartnershipOptions />
        <ImpactCalculator />
        <PartnershipProcess />
      </section>
    </main>
  );
}
