import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  GraduationCap,
  RefreshCcw,
  SearchCheck,
  Wrench,
} from "lucide-react";

const frameworkAreas = [
  {
    icon: SearchCheck,
    title: "Assess",
    text: "Identify current conditions, vulnerabilities, and operational gaps.",
  },
  {
    icon: GraduationCap,
    title: "Educate",
    text: "Prepare students, staff, leadership, and the wider school community.",
  },
  {
    icon: Wrench,
    title: "Equip",
    text: "Align technology and equipment with clearly defined safety needs.",
  },
  {
    icon: RefreshCcw,
    title: "Reassess",
    text: "Measure progress and respond to changing conditions over time.",
  },
];

export default function FeaturedPerspective() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Top red accent */}
      <div className="absolute left-0 top-0 z-20 h-2 w-full bg-red-700" />

      <div className="grid min-h-[720px] lg:grid-cols-[0.9fr_1.1fr]">
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center px-5 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-20">
          <div className="flex h-16 w-16 items-center justify-center bg-red-700">
            <BookOpenCheck className="h-8 w-8" />
          </div>

          <p className="mt-7 text-sm font-black uppercase tracking-[0.24em] text-red-500">
            The Code Red Framework
          </p>

          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
            Four connected pillars.
            <span className="block text-red-600">One safer system.</span>
          </h2>

          <div className="mt-6 h-2 w-40 bg-red-700" />

          <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-white/80">
            Sustainable school safety requires assessment, education, equipment,
            and reassessment to work together as one continuous improvement
            cycle.
          </p>

          <p className="mt-5 max-w-2xl leading-7 text-white/60">
            This approach helps school leaders prioritize real needs, align
            spending with risk, prepare people to act, and evaluate whether
            investments are creating safer outcomes.
          </p>

          <Link
            href="/schools"
            className="mt-9 inline-flex w-full items-center justify-center bg-red-700 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-red-800 sm:w-fit">
            Explore the Framework
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        {/* Image and framework areas */}
        <div className="relative min-h-[680px] overflow-hidden">
          <Image
            src="/images/schools-hero.png"
            alt="Students and educators on a school campus"
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-transparent lg:from-slate-950/40" />

          <div className="absolute inset-x-0 bottom-0 z-10 grid gap-3 p-5 sm:grid-cols-2 sm:p-8 lg:p-10">
            {frameworkAreas.map(({ icon: Icon, title, text }, index) => (
              <div
                key={title}
                className="border border-white/20 bg-black/70 p-5 backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-red-700 text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-red-500">
                      Step {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3 className="mt-1 text-xl font-black uppercase">
                      {title}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-6 text-white/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
