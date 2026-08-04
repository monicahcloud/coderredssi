import {
  BrainCircuit,
  SearchCheck,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

type ReassessmentOutcome = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const reassessmentOutcomes: ReassessmentOutcome[] = [
  {
    number: "01",
    title: "Verify Performance",
    description:
      "Confirm that plans, systems, procedures, and improvements are working as intended.",
    icon: SearchCheck,
  },
  {
    number: "02",
    title: "Learn and Adapt",
    description:
      "Use observations and findings to refine strategies, address gaps, and strengthen safety.",
    icon: BrainCircuit,
  },
  {
    number: "03",
    title: "Sustain Readiness",
    description:
      "Build a continuous review process that keeps your school prepared for what comes next.",
    icon: ShieldCheck,
  },
];

export default function ReassessmentOutcomes() {
  return (
    <section
      id="reassessment-details"
      className="relative w-full max-w-full overflow-hidden bg-[#080808] text-white">
      {/* Blueprint grid */}
      <div className="pointer-events-none absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="relative grid w-full max-w-full lg:grid-cols-[1.05fr_3fr]">
        {/* Section introduction */}
        <div className="border-b border-white/15 bg-black/30 px-7 py-12 sm:px-10 lg:border-b-0 lg:border-r lg:px-14 lg:py-16">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-red-500">
            The outcomes that matter
          </p>

          <h2 className="mt-5 text-3xl font-black uppercase leading-[1.05] sm:text-4xl">
            Accountability
            <br />
            that keeps
            <br />
            progress moving.
          </h2>

          <div className="mt-6 h-1.5 w-20 bg-red-700" />
        </div>

        {/* Outcome cards */}
        <div className="grid md:grid-cols-3">
          {reassessmentOutcomes.map((outcome) => {
            const Icon = outcome.icon;

            return (
              <article
                key={outcome.number}
                className="group border-b border-white/15 px-7 py-10 transition-colors last:border-b-0 hover:bg-white/5 md:border-b-0 md:border-l md:first:border-l-0 lg:px-10 lg:py-14">
                <div className="flex items-center justify-between gap-5">
                  <span className="text-5xl font-black text-red-600 sm:text-6xl">
                    {outcome.number}
                  </span>

                  <div className="flex size-16 shrink-0 items-center justify-center rounded-full border-2 border-red-700 bg-red-700/10 text-white transition-all duration-300 group-hover:bg-red-700">
                    <Icon
                      className="size-8"
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <h3 className="mt-9 text-lg font-black uppercase leading-tight sm:text-xl">
                  {outcome.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-white/60 sm:text-base sm:leading-7">
                  {outcome.description}
                </p>

                <div className="mt-7 h-1 w-12 bg-red-700 transition-all duration-300 group-hover:w-24" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
