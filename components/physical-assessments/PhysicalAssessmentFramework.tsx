import {
  ArrowRight,
  GraduationCap,
  RefreshCw,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

type Pillar = {
  number: string;
  category: string;
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

const pillars: Pillar[] = [
  {
    number: "01",
    category: "Assess",
    title: "Physical Assessments",
    description: "See the campus clearly. Act on what matters most.",
    href: "/schools/physical-assessments",
    icon: ShieldCheck,
  },
  {
    number: "02",
    category: "Educate",
    title: "Education",
    description: "Empower people and build a culture of preparedness.",
    href: "/schools/education",
    icon: GraduationCap,
  },
  {
    number: "03",
    category: "Equip",
    title: "Equipment",
    description: "Strengthen systems and support a faster response.",
    href: "/schools/equipment",
    icon: Wrench,
  },
  {
    number: "04",
    category: "Reassess",
    title: "Reassessment",
    description: "Measure progress and maintain long-term readiness.",
    href: "/schools/reassessment",
    icon: RefreshCw,
  },
];

export default function PhysicalAssessmentFramework() {
  return (
    <section className="relative overflow-hidden bg-[#080808] px-5 py-14 text-white sm:px-8 lg:px-14 lg:py-16 xl:px-20 2xl:px-28">
      {/* Blueprint grid */}
      <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] [background-size:64px_64px]" />

      {/* Decorative corner details */}
      <div className="absolute left-0 top-0 size-28 border-l border-t border-white/10" />
      <div className="absolute bottom-0 right-0 size-28 border-b border-r border-white/10" />

      <div className="relative mx-auto max-w-full">
        {/* Section heading */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-red-500">
              Continue the framework
            </p>

            <h2 className="mt-3 text-3xl font-black uppercase leading-tight sm:text-4xl lg:text-5xl">
              Four pillars.
              <span className="block text-red-600">One safer campus.</span>
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-white/60 sm:text-base">
            Each pillar works together to create a complete and sustainable
            school safety strategy.
          </p>
        </div>

        {/* Pillar cards */}
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4 xl:gap-4">
          {pillars.map((pillar, index) => {
            const isActive = index === 0;
            const hasNextPillar = index < pillars.length - 1;

            return (
              <div key={pillar.number} className="relative">
                <Link
                  href={pillar.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`group relative flex min-h-[170px] overflow-hidden border p-6 transition-all duration-300 hover:-translate-y-2 ${
                    isActive
                      ? "border-red-600 bg-red-700"
                      : "border-white/15 bg-white/[0.06] hover:border-red-600 hover:bg-white/[0.1]"
                  }`}>
                  {/* Large background number */}
                  <span
                    className={`pointer-events-none absolute -right-2 -top-5 text-[130px] font-black leading-none ${
                      isActive ? "text-black/10" : "text-white/[0.04]"
                    }`}
                    aria-hidden="true">
                    {pillar.number}
                  </span>

                  <div className="relative z-10 flex w-full flex-col">
                    <div className="pt-8">
                      <h3 className="mt-3 text-xl font-black uppercase leading-tight">
                        {pillar.title}
                      </h3>

                      <p
                        className={`mt-3 text-sm leading-6 ${
                          isActive ? "text-white/80" : "text-white/55"
                        }`}>
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </Link>

                {/* Connector between desktop cards */}
                {hasNextPillar ? (
                  <div className="absolute -right-4 top-1/2 z-20 hidden -translate-y-1/2 xl:flex">
                    <div className="flex size-8 items-center justify-center rounded-full border border-red-600 bg-[#080808]">
                      <ArrowRight
                        className="size-4 text-red-600"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
