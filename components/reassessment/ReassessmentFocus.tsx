import {
  Building2,
  CalendarDays,
  ClipboardCheck,
  RefreshCw,
  ShieldCheck,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

type ReassessmentArea = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const reassessmentAreas: ReassessmentArea[] = [
  {
    title: "Campus Walkthroughs",
    description:
      "Observe changes in the physical environment, daily operations, and how people use campus spaces.",
    icon: Building2,
  },
  {
    title: "System Audits",
    description:
      "Review policies, technology, communication tools, training, and response procedures.",
    icon: ClipboardCheck,
  },
  {
    title: "After-Action Reviews",
    description:
      "Capture lessons from drills, incidents, events, and everyday operations.",
    icon: UsersRound,
  },
  {
    title: "Annual Review",
    description:
      "Revisit priorities, update plans, and establish readiness goals for the year ahead.",
    icon: CalendarDays,
  },
];

export default function ReassessmentFocus() {
  return (
    <section className="relative w-full max-w-full overflow-hidden bg-[#f4f4f2] px-5 py-16 sm:px-8 lg:px-14 lg:py-20 xl:px-20 2xl:px-28">
      {/* Folded corner */}
      <div className="absolute right-0 top-0 z-20 size-24 bg-red-700 [clip-path:polygon(100%_0,100%_100%,0_0)] lg:size-36" />

      {/* Background dots */}
      <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:10px_10px]" />

      <div className="relative grid w-full max-w-full gap-12 lg:grid-cols-[0.68fr_1.6fr] lg:items-center">
        {/* Section content */}
        <div>
          <p className="text-xs font-black uppercase tracking-[0.26em] text-red-700">
            Continuous attention to
          </p>

          <h2 className="mt-5 text-4xl font-black uppercase leading-[0.97] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            What has changed.
          </h2>

          <div className="mt-6 h-1.5 w-20 bg-red-700" />

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
            Schools never stand still. People change, facilities evolve,
            technology is updated, and new risks emerge. Reassessment keeps your
            safety strategy aligned with today&apos;s realities.
          </p>

          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
            We review what has improved, identify what still needs attention,
            and help your team determine the next practical priorities.
          </p>
        </div>

        {/* Reassessment areas and improvement cycle */}
        <div className="relative min-h-[680px] overflow-hidden border border-slate-300 bg-white p-6 shadow-[0_25px_80px_rgba(15,23,42,0.14)] sm:p-8 lg:min-h-[620px]">
          {/* Blueprint grid */}
          <div className="pointer-events-none absolute inset-0 opacity-55 [background-image:linear-gradient(#e1e5e9_1px,transparent_1px),linear-gradient(90deg,#e1e5e9_1px,transparent_1px)] [background-size:32px_32px]" />

          <div className="relative grid h-full min-h-[720px] gap-8 lg:grid-cols-[1fr_360px_1fr] lg:items-center">
            {/* Left review areas */}
            <div className="grid gap-5">
              {reassessmentAreas.slice(0, 2).map((area) => (
                <FocusCard key={area.title} area={area} />
              ))}
            </div>

            {/* Continuous cycle */}
            <div className="relative mx-auto my-10 flex size-72 items-center justify-center sm:size-80 lg:my-0 lg:size-[360px]">
              {/* Outer background ring */}
              <div className="absolute inset-0 rounded-full border-[24px] border-slate-100 shadow-[0_20px_60px_rgba(15,23,42,0.12)]" />

              {/* Rotating dashed ring */}
              <div className="absolute inset-4 animate-[spin_24s_linear_infinite] rounded-full border-4 border-dashed border-red-700" />

              {/* Inner ring */}
              <div className="absolute inset-12 rounded-full border border-slate-300 bg-white/85 shadow-inner" />

              {/* Cycle labels */}
              <div className="absolute -top-3 left-1/2 z-20 -translate-x-1/2 bg-red-700 px-5 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-white shadow-lg">
                Observe
              </div>

              <div className="absolute -right-10 top-1/2 z-20 -translate-y-1/2 rotate-90 bg-[#111827] px-5 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-white shadow-lg">
                Assess
              </div>

              <div className="absolute -bottom-3 left-1/2 z-20 -translate-x-1/2 bg-red-700 px-5 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-white shadow-lg">
                Adjust
              </div>

              <div className="absolute -left-10 top-1/2 z-20 -translate-y-1/2 -rotate-90 bg-[#111827] px-5 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-white shadow-lg">
                Repeat
              </div>

              {/* Center */}
              <div className="relative z-10 flex size-36 flex-col items-center justify-center rounded-full border-4 border-red-700 bg-white text-center shadow-[0_15px_40px_rgba(185,28,28,0.2)] sm:size-40 lg:size-44">
                <ShieldCheck
                  className="size-12 text-red-700 lg:size-14"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />

                <p className="mt-3 text-[10px] font-black uppercase leading-4 tracking-[0.12em] text-slate-900">
                  Continuous
                  <br />
                  Improvement
                </p>
              </div>

              <RefreshCw
                className="absolute -bottom-8 -right-2 z-30 size-14 rounded-full bg-red-700 p-3 text-white shadow-lg"
                aria-hidden="true"
              />
            </div>

            {/* Right review areas */}
            <div className="grid gap-5">
              {reassessmentAreas.slice(2).map((area) => (
                <FocusCard key={area.title} area={area} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type FocusCardProps = {
  area: ReassessmentArea;
};

function FocusCard({ area }: FocusCardProps) {
  const Icon = area.icon;

  return (
    <article className="group border border-slate-200 bg-white/95 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-700 hover:shadow-lg">
      <div className="flex items-center gap-3">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-red-700/30 bg-red-700/5 text-red-700 transition-colors group-hover:bg-red-700 group-hover:text-white">
          <Icon className="size-6" strokeWidth={1.6} aria-hidden="true" />
        </div>

        <h3 className="text-sm font-black uppercase">{area.title}</h3>
      </div>

      <p className="mt-4 text-xs leading-5 text-slate-500">
        {area.description}
      </p>
    </article>
  );
}
