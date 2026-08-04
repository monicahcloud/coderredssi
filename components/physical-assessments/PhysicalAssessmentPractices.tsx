import {
  Landmark,
  RefreshCw,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

type BestPractice = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const bestPractices: BestPractice[] = [
  {
    title: "Proven Frameworks",
    description:
      "Aligned with recognized industry standards and proven safety practices.",
    icon: ShieldCheck,
  },
  {
    title: "Real-World Experience",
    description:
      "Informed by practical experience within active K–12 environments.",
    icon: Users,
  },
  {
    title: "Compliance Ready",
    description:
      "Supports insurance requirements, due diligence, and campus readiness.",
    icon: Landmark,
  },
  {
    title: "Built to Evolve",
    description:
      "Designed to adapt as your campus, operations, and priorities change.",
    icon: RefreshCw,
  },
];

export default function PhysicalAssessmentPractices() {
  return (
    <section className="relative overflow-hidden border-y border-slate-200 bg-[#f5f5f3] px-5 py-10 sm:px-8 lg:px-14 lg:py-12 xl:px-20 2xl:px-28">
      {/* Subtle blueprint dots */}
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:10px_10px]" />

      <div className="relative mx-auto grid max-w-full gap-9 lg:grid-cols-[0.72fr_2.4fr] lg:items-center">
        {/* Section heading */}
        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-red-700">
            Grounded in
          </p>

          <h2 className="mt-2 text-3xl font-black uppercase leading-[0.95] tracking-tight sm:text-4xl">
            Best
            <br />
            practices.
          </h2>

          <div className="mt-4 h-1.5 w-14 bg-red-700" />
        </div>

        {/* Best-practice items */}
        <div className="grid gap-0 border-y border-slate-300 sm:grid-cols-2 sm:border-y-0 xl:grid-cols-4">
          {bestPractices.map((practice) => {
            const Icon = practice.icon;

            return (
              <article
                key={practice.title}
                className="group grid grid-cols-[56px_1fr] items-start gap-4 border-b border-slate-300 px-3 py-6 last:border-b-0 sm:border-b-0 sm:border-l sm:px-6 sm:first:border-l-0 xl:min-h-36">
                {/* Icon */}
                <div className="flex size-12 items-center justify-center rounded-full border border-slate-400 bg-white text-slate-700 transition-all duration-300 group-hover:border-red-700 group-hover:bg-red-700 group-hover:text-white">
                  <Icon
                    className="size-6 transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xs font-black uppercase leading-5 tracking-[0.06em] text-[#080808]">
                    {practice.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {practice.description}
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
