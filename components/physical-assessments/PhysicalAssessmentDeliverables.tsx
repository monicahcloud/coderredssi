import {
  Building2,
  Check,
  ClipboardCheck,
  Clock3,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

type Deliverable = {
  timeframe: string;
  title: string;
  description: string;
  items: string[];
  icon: LucideIcon;
};

const deliverables: Deliverable[] = [
  {
    timeframe: "0–90 Days",
    title: "Immediate",
    description:
      "Low-cost, high-impact actions that can reduce risk right away.",
    items: [
      "Adjust procedures",
      "Improve visibility",
      "Reinforce access control",
    ],
    icon: Clock3,
  },
  {
    timeframe: "3–12 Months",
    title: "Near-Term",
    description:
      "Targeted improvements that strengthen safety and daily operations.",
    items: [
      "Upgrade priority hardware",
      "Enhance communication",
      "Improve the environment",
    ],
    icon: ClipboardCheck,
  },
  {
    timeframe: "1–3 Years",
    title: "Long-Term",
    description:
      "Strategic investments that build lasting resilience across the campus.",
    items: [
      "Plan capital improvements",
      "Strengthen security systems",
      "Build sustainable readiness",
    ],
    icon: Building2,
  },
];

export default function PhysicalAssessmentDeliverables() {
  return (
    <section
      id="assessment-deliverables"
      className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-full lg:grid-cols-[0.9fr_2.4fr]">
        {/* Red diagonal introduction panel */}
        <div className="relative z-10 overflow-hidden bg-red-700 px-7 py-14 text-white sm:px-10 lg:-mr-10 lg:px-12 lg:py-16 lg:pr-24 lg:[clip-path:polygon(0_0,84%_0,100%_100%,0_100%)]">
          {/* Decorative grid */}
          <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:48px_48px]" />

          {/* Background shield */}
          <ShieldCheck
            className="absolute -bottom-16 right-4 size-64 text-black/10"
            strokeWidth={1}
            aria-hidden="true"
          />

          <div className="relative">
            <p className="text-xs font-black uppercase tracking-[0.26em] text-white/65">
              Expected deliverables
            </p>

            <h2 className="mt-5 text-4xl font-black uppercase leading-[0.96] tracking-tight sm:text-5xl">
              From findings
              <br />
              to action.
            </h2>

            <div className="mt-6 h-1.5 w-16 bg-white" />

            <p className="mt-7 max-w-sm text-base leading-7 text-white/80">
              We turn insight into a practical roadmap so your team can act with
              clarity and confidence.
            </p>
          </div>
        </div>

        {/* Deliverable timeline */}
        <div className="grid bg-white md:grid-cols-3 lg:pl-10">
          {deliverables.map((deliverable) => {
            const Icon = deliverable.icon;

            return (
              <article
                key={deliverable.timeframe}
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

                {/* Timeline heading */}
                <h3 className="mt-5 text-2xl font-black uppercase leading-tight text-[#080808]">
                  {deliverable.title}
                </h3>

                <p className="mt-1 text-xs font-black uppercase tracking-[0.18em] text-[#080808]">
                  {deliverable.timeframe}
                </p>

                {/* Red divider */}
                <div className="mt-5 h-1 w-12 bg-red-700 transition-all duration-300 group-hover:w-20" />

                <p className="mt-5 text-sm leading-6 text-slate-600">
                  {deliverable.description}
                </p>

                <ul className="mt-5 space-y-3">
                  {deliverable.items.map((item) => (
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
