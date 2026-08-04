import {
  ClipboardCheck,
  MapPinned,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

type Outcome = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const outcomes: Outcome[] = [
  {
    number: "01",
    title: "Map Vulnerabilities",
    description:
      "Identify physical risks, weak points, and security gaps across the entire campus.",
    icon: MapPinned,
  },
  {
    number: "02",
    title: "Establish a Baseline",
    description:
      "Create a clear, documented understanding of current security conditions and readiness.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Prioritize Action",
    description:
      "Focus attention and resources on the improvements that will make the greatest difference.",
    icon: ShieldCheck,
  },
];

export default function PhysicalAssessmentOutcomes() {
  return (
    <section
      id="assessment-details"
      className="relative overflow-hidden bg-[#080808] px-5 py-16 text-white sm:px-8 lg:px-14 lg:py-20 xl:px-20 2xl:px-28">
      {/* Blueprint grid */}
      <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] [background-size:64px_64px]" />

      {/* Red decorative glow */}
      <div className="absolute -left-40 top-1/2 size-96 -translate-y-1/2 rounded-full bg-red-700/15 blur-3xl" />

      <div className="relative mx-auto max-w-full">
        {/* Section heading */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.65fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-red-500">
              The outcomes that matter
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
              Strategic
              <span className="block text-red-600">Insight.</span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-3xl text-lg font-semibold leading-8 text-white/75 sm:text-xl">
              Every assessment delivers a clear picture of current conditions
              and a practical path toward measurable improvements.
            </p>

            <div className="mt-6 h-1.5 w-40 bg-red-700 sm:w-56" />
          </div>
        </div>

        {/* Outcome cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {outcomes.map((outcome) => {
            const Icon = outcome.icon;

            return (
              <article
                key={outcome.number}
                className="group relative min-h-[310px] overflow-hidden border border-white/15 bg-white/[0.04] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-red-600 hover:bg-white/[0.08] sm:p-8">
                {/* Animated top border */}
                <div className="absolute left-0 top-0 h-1.5 w-0 bg-red-700 transition-all duration-500 group-hover:w-full" />

                {/* Decorative background number */}
                <span
                  className="pointer-events-none absolute -bottom-7 -right-2 text-[140px] font-black leading-none text-white/[0.035]"
                  aria-hidden="true">
                  {outcome.number}
                </span>

                <div className="">
                  {/* Outcome number */}
                  {/* <span className="text-5xl font-black text-red-600">
                    {outcome.number}
                  </span> */}

                  {/* Icon and heading on the same line */}
                  <div className="mt-10 flex flex-row flex-nowrap items-center gap-4">
                    <div className="flex size-14 shrink-0 items-center justify-center rounded-full border-2 border-red-700 bg-red-700/10 text-white transition-all duration-300 group-hover:bg-red-700">
                      <Icon
                        className="size-7"
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="m-0 text-lg font-black uppercase leading-tight sm:text-xl">
                      {outcome.title}
                    </h3>
                  </div>

                  <p className="mt-5 max-w-sm text-sm leading-7 text-white/60 transition-colors group-hover:text-white/80">
                    {outcome.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
