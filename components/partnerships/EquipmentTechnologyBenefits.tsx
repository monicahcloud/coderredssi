import { Map, FileText, Lightbulb, Sprout } from "lucide-react";

const benefits = [
  {
    icon: Map,
    title: "National Brand Visibility",
    description:
      "Position your brand within a national, standards-based school safety model and gain stronger visibility with schools, districts, and education stakeholders.",
  },
  {
    icon: FileText,
    title: "Inclusion in Recommendations & Proposals",
    description:
      "Increase visibility in recommendations and proposals where solutions align with assessment findings, school needs, and implementation priorities.",
  },
  {
    icon: Lightbulb,
    title: "Pilot & Early Implementation Opportunities",
    description:
      "Gain opportunities to support early pilots, implementation pathways, and measurable school safety initiatives.",
  },
  {
    icon: Sprout,
    title: "Multi-State Growth Alignment",
    description:
      "Align with a school safety initiative designed for regional expansion and broader multi-state growth over time.",
  },
];

export default function EquipmentTechnologyBenefits() {
  return (
    <section className="bg-[#181818] px-6 py-24 text-white md:px-10 xl:px-16 2xl:px-24">
      <div className="mx-auto max-w-[1600px]">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-red-500">
          Equipment & Technology
        </p>

        <h2 className="max-w-5xl text-4xl font-black uppercase tracking-tight sm:text-5xl lg:text-6xl">
          Partner <span className="text-red-600">Benefits</span>
        </h2>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[2rem] border border-red-700/60 bg-black/30 p-8">
                <Icon className="mb-6 h-14 w-14 text-red-600" />
                <h3 className="text-2xl font-black uppercase">{item.title}</h3>
                <p className="mt-4 text-base leading-8 text-zinc-300">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
