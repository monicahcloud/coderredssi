import {
  ArrowRight,
  ClipboardCheck,
  RefreshCw,
  Search,
  SlidersHorizontal,
  type LucideIcon,
} from "lucide-react";

type ReassessmentStep = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const reassessmentSteps: ReassessmentStep[] = [
  {
    number: "01",
    title: "Observe",
    description:
      "Review the campus environment, daily operations, systems, procedures, and recent changes.",
    icon: Search,
  },
  {
    number: "02",
    title: "Assess",
    description:
      "Measure performance, examine findings, identify risks, and determine what has changed.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Adjust",
    description:
      "Refine priorities, strengthen plans, and implement improvements that address current needs.",
    icon: SlidersHorizontal,
  },
  {
    number: "04",
    title: "Repeat",
    description:
      "Revisit progress regularly so readiness continues to improve as your school evolves.",
    icon: RefreshCw,
  },
];

export default function ReassessmentProcess() {
  return (
    <section className="relative w-full max-w-full overflow-hidden bg-[#030718] px-5 py-16 text-white sm:px-8 lg:px-14 lg:py-20 xl:px-20 2xl:px-28">
      {/* Blueprint grid */}
      <div className="pointer-events-none absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:64px_64px]" />

      {/* Red side rail */}
      <div className="absolute left-0 top-0 h-full w-1.5 bg-red-700" />

      <div className="relative w-full max-w-full">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-red-500">
          Our process
        </p>

        <h2 className="mt-4 max-w-4xl text-3xl font-black uppercase leading-tight sm:text-4xl lg:text-5xl">
          The continuous improvement cycle.
        </h2>

        <p className="mt-5 max-w-3xl text-base leading-7 text-white/60">
          Reassessment turns observation into action and action into lasting
          readiness through a clear, repeatable process.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {reassessmentSteps.map((step, index) => {
            const Icon = step.icon;
            const hasNextStep = index < reassessmentSteps.length - 1;

            return (
              <article
                key={step.number}
                className="group relative border-t border-white/20 pt-7">
                <div className="flex items-center gap-5">
                  <div className="flex size-20 shrink-0 items-center justify-center rounded-full border-2 border-white/25 bg-white/5 text-white/65 transition-all duration-300 group-hover:rotate-6 group-hover:border-red-600 group-hover:bg-red-700 group-hover:text-white">
                    <Icon
                      className="size-9"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>

                  <span className="text-4xl font-black text-red-600">
                    <h3 className="font-black uppercase">{step.title}</h3>
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-white/60">
                  {step.description}
                </p>

                <div className="mt-6 h-1 w-10 bg-red-700 transition-all duration-300 group-hover:w-20" />

                {hasNextStep && (
                  <ArrowRight
                    className="absolute -right-5 top-12 hidden size-6 text-red-600 xl:block"
                    aria-hidden="true"
                  />
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
