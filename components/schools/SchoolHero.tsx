"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, School } from "lucide-react";

import { trackEvent } from "@/lib/analytics";

// const schoolAudiences = [
//   "District Leaders",
//   "School Administrators",
//   "Safety Teams",
//   "Educators & Staff",
// ] as const;

export default function SchoolHero() {
  return (
    <section className="relative min-h-[calc(100vh-76px)] w-full overflow-hidden bg-black text-white">
      <Image
        src="/images/schools-hero.png"
        alt="Students and educators outside a school campus"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

      {/* Top ribbon mirrors the Partnership hero */}
      <div className="absolute left-0 top-0 z-10">
        <div className="relative bg-red-700 px-5 py-3 pr-16 sm:px-8 lg:px-12">
          <p className="text-sm font-black uppercase tracking-[0.2em] sm:text-base lg:text-xl">
            For Schools & Districts
          </p>
          <div className="absolute right-[-48px] top-0 h-full w-12 bg-red-700 [clip-path:polygon(0_0,100%_0,0_100%)]" />
        </div>
      </div>

      <div className="relative z-20 flex min-h-[calc(100vh-76px)] w-full items-center px-5 py-24 sm:px-8 md:px-10 lg:px-14 xl:px-20 2xl:px-28">
        <div className="w-full max-w-full">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-red-500/40 bg-black/50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-red-100 backdrop-blur">
            <School className="h-8 w-8" />A Coordinated School Safety Framework
          </div>

          <h1 className="max-w-full text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl">
            Safer Schools.
            <span className="block text-red-600">Stronger Futures.</span>
          </h1>

          <div className="mt-6 h-2 w-56 bg-red-700 sm:w-80" />

          <p className="mt-7 max-w-4xl text-lg font-semibold leading-8 text-white sm:text-xl md:text-2xl">
            Helping K-12 schools assess risk, coordinate implementation, and
            sustain comprehensive safety strategies that actually work.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/#contact"
              onClick={() =>
                trackEvent("school_consultation_interest", {
                  location: "school_hero",
                })
              }
              className="inline-flex w-full items-center justify-center rounded-none bg-red-700 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-red-800 sm:w-auto">
              Start a School Conversation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <a
              href="/school-deck.pdf"
              download
              onClick={() =>
                trackEvent("school_deck_download", {
                  location: "school_hero",
                })
              }
              className="inline-flex w-full items-center justify-center rounded-none bg-red-700 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-red-800 sm:w-auto">
              Download School Overview
              <Download className="ml-2 h-5 w-5" />
            </a>
          </div>

          {/* <div className="mt-8 border-white/30 bg-black">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {schoolAudiences.map((audience) => (
                <div
                  key={audience}
                  className="border-2 border-white bg-black px-4 py-5 text-center">
                  <p className="text-xl font-black uppercase leading-tight tracking-tight sm:text-2xl">
                    {audience}
                  </p>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
