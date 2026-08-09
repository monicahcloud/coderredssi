"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpenCheck } from "lucide-react";

import { trackEvent } from "@/lib/analytics";

export default function InsightsHero() {
  return (
    <section className="relative min-h-[calc(100vh-76px)] w-full overflow-hidden bg-black text-white">
      <Image
        src="/images/meetingoftheminds.png"
        alt="School safety leaders collaborating around a table"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Image overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

      {/* Top label */}
      <div className="absolute left-0 top-0 z-10">
        <div className="relative bg-red-700 px-5 py-3 pr-16 sm:px-8 lg:px-12">
          <p className="text-sm font-black uppercase tracking-[0.2em] sm:text-base lg:text-xl">
            Insights & Resources
          </p>

          <div className="absolute right-[-48px] top-0 h-full w-12 bg-red-700 [clip-path:polygon(0_0,100%_0,0_100%)]" />
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-20 flex min-h-[calc(100vh-76px)] w-full items-center px-5 py-24 sm:px-8 md:px-10 lg:px-14 xl:px-20 2xl:px-28">
        <div className="w-full max-w-full">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-black/50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-red-100 backdrop-blur">
            <BookOpenCheck className="h-8 w-8" />
            Practitioner-Informed. Action-Focused.
          </div>

          <h1 className="max-w-full text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl">
            Better Insight. <br />
            Stronger Decisions.
            <span className="block text-red-600">Safer Schools.</span>
          </h1>

          <div className="mt-6 h-2 w-56 bg-red-700 sm:w-80" />

          <p className="mt-7 max-w-4xl text-lg font-semibold leading-8 text-white sm:text-xl md:text-2xl">
            Practical school safety guidance to help leaders understand risk,
            strengthen readiness, make informed investments, and sustain
            meaningful improvement.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/schools"
              onClick={() =>
                trackEvent("insights_framework_click", {
                  location: "insights_hero",
                })
              }
              className="inline-flex w-full items-center justify-center rounded-none bg-red-700 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-red-800 sm:w-auto">
              Explore the Framework
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
