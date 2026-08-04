import { ArrowDown, ArrowRight, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PhysicalAssessmentHero() {
  return (
    <section className="relative min-h-[calc(100vh-76px)] w-full overflow-hidden bg-black text-white">
      {/* Full hero image */}
      <Image
        src="/images/securityassessment.png"
        alt="School safety professionals reviewing a campus assessment"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Partnership-style overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

      {/* Subtle blueprint grid */}
      <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:72px_72px]" />

      {/* Red diagonal divider */}
      {/* <div className="absolute left-[43%] top-0 z-10 hidden h-full w-24 -skew-x-6 bg-red-700/90 lg:block" /> */}

      {/* Top ribbon */}
      <div className="absolute left-0 top-0 z-30">
        <div className="relative bg-red-700 px-5 py-3 pr-16 sm:px-8 lg:px-12">
          <p className="text-sm font-black uppercase tracking-[0.2em] sm:text-base lg:text-xl">
            Physical Assessments
          </p>

          <div className="absolute right-[-48px] top-0 h-full w-12 bg-red-700 [clip-path:polygon(0_0,100%_0,0_100%)]" />
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-20 flex min-h-[calc(100vh-76px)] w-full items-center px-5 py-24 sm:px-8 md:px-10 lg:px-14 xl:px-20 2xl:px-28">
        <div className="w-full max-w-full">
          {/* Pillar badge */}
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-red-500/40 bg-black/50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-red-100 backdrop-blur">
            <div className="flex size-10 items-center justify-center ">
              <ShieldCheck className="h-8 w-8" />
            </div>
            Physical Security Assessment
          </div>

          {/* Main heading */}
          <h1 className="max-w-full text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl">
            Physical
            <span className="block text-red-600">Assessments</span>
          </h1>

          {/* Red underline */}
          <div className="mt-6 h-2 w-56 bg-red-700 sm:w-80" />

          {/* Main statement */}
          <p className="mt-7 max-w-4xl text-lg font-semibold leading-8 text-white sm:text-xl md:text-2xl">
            See the campus clearly. Act on what matters most.
          </p>

          {/* Supporting description */}
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/75 sm:text-lg">
            Our on-site physical assessment establishes an objective
            understanding of your school&apos;s current security posture. We
            identify vulnerabilities, document physical risks, and translate
            findings into practical priorities.
          </p>

          {/* CTA buttons */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/#contact"
              className="group inline-flex w-full items-center justify-center rounded-none bg-red-700 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-red-800 sm:w-auto">
              Request an Assessment
              <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href="#assessment-details"
              className="group inline-flex w-full items-center justify-center rounded-none border border-white/40 bg-black/50 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white backdrop-blur transition hover:border-red-700 hover:bg-red-700 sm:w-auto">
              Explore the Process
              <ArrowDown className="ml-2 size-5 transition-transform group-hover:translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
