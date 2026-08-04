import { ArrowRight, RefreshCw } from "lucide-react";
import Link from "next/link";

export default function ReassessmentCTA() {
  return (
    <section className="relative w-full max-w-full overflow-hidden bg-red-700 px-5 py-14 text-white sm:px-8 lg:px-14 lg:py-16 xl:px-20 2xl:px-28">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:52px_52px]" />

      {/* Decorative icon */}
      <RefreshCw
        className="pointer-events-none absolute -bottom-24 right-[12%] size-80 text-black/10"
        strokeWidth={1}
        aria-hidden="true"
      />

      {/* Diagonal accent */}
      <div className="absolute -right-20 top-0 hidden h-full w-80 -skew-x-[18deg] bg-black/10 lg:block" />

      <div className="relative flex w-full max-w-full flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-white/65">
            Continue the progress
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl">
            Readiness is a journey, not a destination.
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-7 text-white/75">
            Schedule a reassessment to verify improvements, address changing
            risks, and keep your school&apos;s safety priorities moving forward.
          </p>
        </div>

        <Link
          href="/#contact"
          className="group inline-flex min-h-16 w-full shrink-0 items-center justify-center gap-4 bg-white px-9 text-sm font-black uppercase tracking-[0.16em] text-[#070b1c] transition hover:bg-[#070b1c] hover:text-white sm:w-auto">
          Schedule a Reassessment
          <ArrowRight
            className="size-5 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </section>
  );
}
