import { ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function PhysicalAssessmentCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-red-800 via-red-700 to-red-600 px-5 py-14 text-white sm:px-8 lg:px-14 lg:py-16 xl:px-20 2xl:px-28">
      {/* Blueprint grid */}
      <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:52px_52px]" />

      {/* Decorative diagonal panel */}
      <div className="absolute -right-28 top-0 hidden h-full w-[42%] -skew-x-12 bg-black/10 lg:block" />

      {/* Background shield */}
      <ShieldCheck
        className="absolute -bottom-28 left-[48%] size-[360px] text-black/[0.08]"
        strokeWidth={1}
        aria-hidden="true"
      />

      {/* Decorative corner lines */}
      <div className="absolute left-0 top-0 size-28 border-l border-t border-white/15" />
      <div className="absolute bottom-0 right-0 size-28 border-b border-r border-white/15" />

      <div className="relative mx-auto grid max-w-full gap-10 lg:grid-cols-[1.5fr_auto] lg:items-center">
        {/* CTA content */}
        <div>
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-white/60" />

            <p className="text-xs font-black uppercase tracking-[0.25em] text-white/70">
              Take the next step
            </p>
          </div>

          <h2 className="mt-5 max-w-5xl text-4xl font-black uppercase leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
            Let&apos;s build a safer
            <span className="block">campus—together.</span>
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-7 text-white/80 sm:text-lg">
            Request an assessment and take the first step toward a stronger,
            more prepared campus.
          </p>

          {/* Supporting points */}
          <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-xs font-bold uppercase tracking-[0.12em] text-white/65">
            <span className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-white" />
              On-site evaluation
            </span>

            <span className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-white" />
              Actionable roadmap
            </span>

            <span className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-white" />
              Prioritized recommendations
            </span>
          </div>
        </div>

        {/* CTA button */}
        <div className="lg:justify-self-end">
          <Link
            href="/#contact"
            className="group inline-flex min-h-16 w-full items-center justify-center gap-5 border-2 border-white bg-white px-9 text-sm font-black uppercase tracking-[0.16em] text-[#080808] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#080808] hover:bg-[#080808] hover:text-white sm:w-auto">
            Request an Assessment
            <span className="flex size-9 items-center justify-center rounded-full border border-current">
              <ArrowRight
                className="size-5 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </span>
          </Link>

          <p className="mt-3 text-center text-xs text-white/55">
            Start with an initial conversation.
          </p>
        </div>
      </div>
    </section>
  );
}
