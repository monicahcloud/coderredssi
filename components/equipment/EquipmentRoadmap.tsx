import {
  BarChart3,
  CalendarDays,
  Check,
  Clock3,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

type RoadmapPhase = {
  timeframe: string;
  title: string;
  description: string;
  items: string[];
  icon: LucideIcon;
};

const roadmapPhases: RoadmapPhase[] = [
  {
    timeframe: "0–6 Months",
    title: "Essential / Immediate",
    description:
      "Address urgent equipment needs and close the most critical safety gaps.",
    items: [
      "Core communication tools",
      "Priority entry-point security",
      "Basic emergency alerting",
    ],
    icon: Clock3,
  },
  {
    timeframe: "6–18 Months",
    title: "Enhanced / Near-Term",
    description:
      "Expand visibility, strengthen communication, and improve campus coverage.",
    items: [
      "Additional monitoring coverage",
      "Expanded mass notification",
      "Access-control improvements",
    ],
    icon: CalendarDays,
  },
  {
    timeframe: "18+ Months",
    title: "Integrated / Long-Term",
    description:
      "Connect systems and build a coordinated, sustainable equipment strategy.",
    items: [
      "System integration",
      "Advanced monitoring capabilities",
      "Ongoing modernization",
    ],
    icon: BarChart3,
  },
];

export default function EquipmentRoadmap() {
  return (
    <section
      id="equipment-roadmap"
      className="relative w-full max-w-full overflow-hidden bg-white">
      <div className="grid w-full max-w-full lg:grid-cols-[0.9fr_2.4fr]">
        {/* Red diagonal introduction */}
        <div className="relative z-10 overflow-hidden bg-red-700 px-7 py-14 text-white sm:px-10 lg:-mr-10 lg:px-12 lg:py-16 lg:pr-24 lg:[clip-path:polygon(0_0,84%_0,100%_100%,0_100%)]">
          {/* Background grid */}
          <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:48px_48px]" />

          {/* Background shield */}
          <ShieldCheck
            className="absolute -bottom-16 right-4 size-64 text-black/10"
            strokeWidth={1}
            aria-hidden="true"
          />

          <div className="relative">
            <p className="text-xs font-black uppercase tracking-[0.26em] text-white/65">
              Implementation roadmap
            </p>

            <h2 className="mt-5 text-4xl font-black uppercase leading-[0.96] tracking-tight sm:text-5xl">
              From equipment
              <br />
              to readiness.
            </h2>

            <div className="mt-6 h-1.5 w-16 bg-white" />

            <p className="mt-7 max-w-sm text-base leading-7 text-white/80">
              A phased approach that builds capability and confidence over time
              without overwhelming your team or budget.
            </p>
          </div>
        </div>

        {/* Roadmap phases */}
        <div className="grid bg-white md:grid-cols-3 lg:pl-10">
          {roadmapPhases.map((phase) => {
            const Icon = phase.icon;

            return (
              <article
                key={phase.timeframe}
                className="group relative border-b border-slate-200 px-7 py-12 last:border-b-0 md:border-b-0 md:border-l md:first:border-l-0 lg:px-9 lg:py-16">
                {/* Hover accent */}
                <div className="absolute left-0 top-0 h-1.5 w-0 bg-red-700 transition-all duration-500 group-hover:w-full" />

                {/* Icon */}
                <div className="flex size-16 items-center justify-center text-red-700">
                  <Icon
                    className="size-12 transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-5 text-xl font-black uppercase leading-tight text-[#080808]">
                  {phase.title}
                </h3>

                <p className="mt-2 text-xs font-black uppercase tracking-[0.18em] text-red-700">
                  {phase.timeframe}
                </p>

                <div className="mt-5 h-1 w-12 bg-red-700 transition-all duration-300 group-hover:w-20" />

                <p className="mt-5 text-sm leading-6 text-slate-600">
                  {phase.description}
                </p>

                <ul className="mt-5 space-y-3">
                  {phase.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm font-semibold leading-5 text-slate-600">
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-red-700"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      />

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
