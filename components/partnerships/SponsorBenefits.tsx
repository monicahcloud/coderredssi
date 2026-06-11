import {
  BadgeCheck,
  BarChart3,
  Globe2,
  Handshake,
  Megaphone,
  ShieldCheck,
} from "lucide-react";

const benefits = [
  {
    icon: Globe2,
    title: "Website Recognition",
    description:
      "Partners can be recognized on the Code Red website with logo placement and partnership visibility.",
  },
  {
    icon: Megaphone,
    title: "Social Media Recognition",
    description:
      "Support can be highlighted through branded announcements, partner spotlights, and campaign updates.",
  },
  {
    icon: BarChart3,
    title: "Impact Reporting",
    description:
      "Partners receive clear updates showing schools supported, students reached, and safety work completed.",
  },
  {
    icon: BadgeCheck,
    title: "Partnership Badge",
    description:
      "Partners may receive a digital recognition badge aligned with their investment or support level.",
  },
  {
    icon: ShieldCheck,
    title: "Mission Alignment",
    description:
      "Show visible commitment to safer schools, stronger communities, and proactive preparedness.",
  },
  {
    icon: Handshake,
    title: "Long-Term Collaboration",
    description:
      "Opportunities may include pilots, local initiatives, statewide programs, or strategic implementation support.",
  },
];

export default function SponsorBenefits() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-24 text-white md:px-10 xl:px-16 2xl:px-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.22),transparent_35%)]" />

      <div className="relative mx-auto w-full max-w-[1600px]">
        <div className="mb-16 max-w-4xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-red-500">
            Sponsor Benefits
          </p>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Recognition Built Around Impact and Accountability
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Code Red partnerships are designed to give sponsors visible
            recognition while keeping the focus on measurable school safety
            outcomes.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-red-600 hover:bg-red-950/20">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600">
                  <Icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="text-2xl font-black text-white">
                  {benefit.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-zinc-300">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-14 rounded-[2rem] border border-red-600/30 bg-red-950/30 p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-red-400">
                Built on Transparency
              </p>

              <h3 className="mt-3 text-3xl font-black sm:text-4xl">
                Partners should see where their support goes.
              </h3>

              <p className="mt-4 max-w-4xl text-base leading-8 text-zinc-300">
                Code Red emphasizes clear reporting, measurable outcomes, and
                accountable implementation so sponsors can connect their support
                to real school safety progress.
              </p>
            </div>

            <div className="rounded-2xl bg-white px-6 py-5 text-center text-slate-950">
              <p className="text-4xl font-black text-red-700">4</p>
              <p className="mt-1 text-xs font-black uppercase tracking-widest">
                Impact Pillars
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
