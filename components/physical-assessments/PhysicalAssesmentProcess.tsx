import {
  ArrowRight,
  ClipboardCheck,
  Eye,
  Search,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

type ProcessStep = {
  number: string;
  label: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const processSteps: ProcessStep[] = [
  {
    number: "01",
    label: "Observe",
    title: "Walk the Campus",
    description:
      "We tour your campus with key stakeholders to observe how spaces function under real-world conditions.",
    icon: Search,
  },
  {
    number: "02",
    label: "Document",
    title: "Capture the Risks",
    description:
      "We document findings, measure conditions, and capture supporting photos and notes for accuracy.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    label: "Analyze",
    title: "Identify the Gaps",
    description:
      "We compare observations against recognized practices to identify risks, gaps, and opportunities.",
    icon: Eye,
  },
  {
    number: "04",
    label: "Prioritize",
    title: "Deliver the Roadmap",
    description:
      "We provide clear recommendations organized by impact, feasibility, urgency, and timeline.",
    icon: ShieldCheck,
  },
];

export default function PhysicalAssessmentProcess() {
  return (
    <section className="relative overflow-hidden bg-[#080808] px-5 py-16 text-white sm:px-8 lg:px-14 lg:py-20 xl:px-20 2xl:px-28">
      {/* Blueprint grid */}
      <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] [background-size:64px_64px]" />

      {/* Red background accents */}
      <div className="absolute -left-32 top-0 h-full w-56 -skew-x-12 bg-red-700/10" />
      <div className="absolute -right-40 top-1/2 size-96 -translate-y-1/2 rounded-full bg-red-700/10 blur-3xl" />

      <div className="relative mx-auto max-w-full">
        {/* Section introduction */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-red-500">
              Our process
            </p>

            <h2 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
              A proven,
              <span className="block text-red-600">
                collaborative approach.
              </span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-2xl text-base font-medium leading-8 text-white/65 sm:text-lg">
              From the first walkthrough to the final roadmap, every stage is
              designed to turn observations into informed, practical action.
            </p>

            <div className="mt-6 h-1.5 w-40 bg-red-700 sm:w-56" />
          </div>
        </div>

        {/* Process timeline */}
        <div className="relative mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-6">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const hasNextStep = index < processSteps.length - 1;

            return (
              <article
                key={step.number}
                className="group relative min-h-[340px] overflow-visible border border-white/15 bg-white/[0.035] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-red-600 hover:bg-white/[0.07]">
                {/* Animated top border */}
                <div className="absolute left-0 top-0 h-1.5 w-16 bg-red-700 transition-all duration-500 group-hover:w-full" />

                {/* Large faded number */}
                <span
                  className="pointer-events-none absolute -right-1 top-1 text-[100px] font-black leading-none text-white/[0.035]"
                  aria-hidden="true">
                  {step.number}
                </span>

                <div className="relative z-10">
                  {/* Number and stage */}
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <span className="text-4xl font-black text-red-600">
                        {step.number}
                      </span>

                      <p className="mt-1 text-[10px] font-black uppercase tracking-[0.24em] text-white/45">
                        {step.label}
                      </p>
                    </div>

                    {/* Icon */}
                    <div className="relative flex size-20 shrink-0 items-center justify-center rounded-full border-2 border-red-700 bg-black text-white ring-4 ring-white/[0.06] transition-all duration-300 group-hover:scale-110 group-hover:bg-red-700 group-hover:ring-red-700/20">
                      <Icon
                        className="size-9 transition-transform duration-500 group-hover:rotate-6"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />

                      <span className="absolute inset-2 rounded-full border border-white/10" />
                    </div>
                  </div>

                  <h3 className="mt-9 text-xl font-black uppercase leading-tight">
                    {step.title}
                  </h3>

                  <div className="mt-4 h-px w-16 bg-red-700 transition-all duration-500 group-hover:w-28" />

                  <p className="mt-5 text-sm leading-7 text-white/60 transition-colors group-hover:text-white/80">
                    {step.description}
                  </p>
                </div>

                {/* Desktop connector */}
                {hasNextStep ? (
                  <div className="absolute -right-7 top-1/2 z-20 hidden -translate-y-1/2 items-center xl:flex">
                    <span className="h-px w-7 border-t-2 border-dashed border-red-600" />

                    <ArrowRight
                      className="-ml-1 size-5 text-red-600"
                      aria-hidden="true"
                    />
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>

        {/* Closing statement */}
        <div className="mt-12 flex flex-col gap-4 border-l-4 border-red-700 bg-white/[0.04] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-white/75">
            Every finding connects to a clear, actionable priority.
          </p>

          {/* <a
            href="#assessment-deliverables"
            className="group inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-red-500 transition hover:text-white">
            See what you receive
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a> */}
        </div>
      </div>
    </section>
  );
}
