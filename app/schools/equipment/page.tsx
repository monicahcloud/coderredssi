import EquipmentFramework from "@/components/equipment/EquipmentFramework";
import EquipmentCTA from "@/components/equipment/EquipmentCTA";
import EquipmentHero from "@/components/equipment/EquipmentHero";
import EquipmentOutcomes from "@/components/equipment/EquipmentOutcomes";
import EquipmentPractices from "@/components/equipment/EquipmentPractices";
import EquipmentProcess from "@/components/equipment/EquipmentProcess";
import EquipmentRoadmap from "@/components/equipment/EquipmentRoadmap";
import EquipmentSystems from "@/components/equipment/EquipmentSystems";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Equipment | Code Red Safer Schools Initiative",
  description:
    "Integrated school safety equipment, communication tools, access controls, monitoring systems, and emergency response solutions.",
};

export default function EquipmentPage() {
  return (
    <main className="overflow-hidden bg-white text-[#080808]">
      <EquipmentHero />
      <EquipmentOutcomes />
      <EquipmentSystems />
      <EquipmentProcess />
      <EquipmentRoadmap />
      <EquipmentPractices />
      <EquipmentFramework />
      <EquipmentCTA />
    </main>
  );
}
