import DonateHero from "@/components/donate/DonateHero";
import DonationCTA from "@/components/donate/DonationCTA";
import DonationPanel from "@/components/donate/DonationPanel";

export const metadata = {
  title: "Donate | Code Red Safer Schools Initiative",
  description:
    "Support Code Red Safer Schools Initiative and help schools strengthen safety preparedness, response readiness, and safer learning environments.",
};

export default function DonatePage() {
  return (
    <main className="bg-black text-white">
      <DonateHero />
      <DonationPanel />
      <DonationCTA />
    </main>
  );
}
