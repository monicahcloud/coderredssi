import { Eye, RadioTower, ShieldCheck, type LucideIcon } from "lucide-react";

type EquipmentOutcome = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const outcomes: EquipmentOutcome[] = [
  {
    number: "01",
    title: "Strengthen Communication",
    description:
      "Create clear, reliable communication across the campus and to emergency responders.",
    icon: RadioTower,
  },
  {
    number: "02",
    title: "Improve Visibility",
    description:
      "Use monitoring tools to identify risks, observe activity, and support informed decisions.",
    icon: Eye,
  },
  {
    number: "03",
    title: "Support Faster Action",
    description:
      "Equip staff and systems to enable a quick, coordinated response when it matters.",
    icon: ShieldCheck,
  },
];

export default function EquipmentOutcomes() {
  return (
    <section
      id="equipment-details"
      className="relative overflow-hidden border-b border-slate-200 bg-white px-5 py-14 sm:px-8 lg:px-14 lg:py-16 xl:px-20 2xl:px-28">
      {/* Subtle blueprint dots */}
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:10px_10px]" />

      <div className="relative mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.8fr_2.2fr] lg:items-stretch">
        {/* Section introduction */}
        <div className="flex flex-col justify-center border-b border-slate-300 pb-9 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-10">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-red-700">
            The outcomes that matter
          </p>

          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.98] tracking-tight sm:text-5xl">
            Connected systems.
            <span className="block text-red-700">Confident response.</span>
          </h2>

          <div className="mt-6 h-1.5 w-20 bg-red-700" />
        </div>

        {/* Outcome columns */}
        <div className="grid md:grid-cols-3">
          {outcomes.map((outcome) => {
            const Icon = outcome.icon;

            return (
              <article
                key={outcome.number}
                className="group relative border-b border-slate-200 px-0 py-8 last:border-b-0 md:border-b-0 md:border-l md:px-8 md:py-4 md:first:border-l-0">
                {/* Number and icon */}
                <div className="flex items-start justify-between gap-5">
                  <span className="text-5xl font-black leading-none text-red-700">
                    {outcome.number}
                  </span>

                  <div className="flex size-14 items-center justify-center rounded-full border border-slate-300 bg-white text-[#080808] transition-all duration-300 group-hover:border-red-700 group-hover:bg-red-700 group-hover:text-white">
                    <Icon
                      className="size-7 transition-transform duration-300 group-hover:scale-110"
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <h3 className="mt-7 text-lg font-black uppercase leading-tight">
                  {outcome.title}
                </h3>

                <div className="mt-4 h-1 w-12 bg-red-700 transition-all duration-300 group-hover:w-20" />

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {outcome.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
