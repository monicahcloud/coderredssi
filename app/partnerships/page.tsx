import PartnershipHero from "@/components/partnerships/PartnershipHero";
import PartnershipOptions from "@/components/partnerships/PartnershipOptions";
import SponsorBenefits from "@/components/partnerships/SponsorBenefits";
import PartnershipCTA from "@/components/partnerships/PartnershipCTA";
import WhyPartner from "@/components/partnerships/WhyPartner";
import ImpactAreas from "@/components/partnerships/ImpactAreas";
import PartnershipProcess from "@/components/partnerships/PartnershipProcess";
import EquipmentTechnologyBenefits from "@/components/partnerships/EquipmentTechnologyBenefits";
import VendorNeutrality from "@/components/partnerships/VendorNeutrality";

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
        <EquipmentTechnologyBenefits />
        <ImpactAreas />

        <VendorNeutrality />
        <PartnershipOptions />

        <PartnershipProcess />
        <PartnershipCTA />
        {/* <PartnershipFAQ /> */}
      </section>
    </main>
  );
}
