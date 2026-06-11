"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Handshake } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function PartnershipHero() {
  return (
    <section className="relative min-h-[calc(100vh-76px)] w-full overflow-hidden bg-black text-white">
      <Image
        src="/images/partnership-hero.png"
        alt="School leaders, safety personnel, and community partners standing outside a school"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

      <div className="absolute left-0 top-0 z-10">
        <div className="relative bg-red-700 px-5 py-3 pr-16 sm:px-8 lg:px-12">
          <p className="text-sm font-black uppercase tracking-[0.2em] sm:text-base lg:text-xl">
            Join The Mission
          </p>
          <div className="absolute right-[-48px] top-0 h-full w-12 bg-red-700 [clip-path:polygon(0_0,100%_0,0_100%)]" />
        </div>
      </div>

      <div className="relative z-20 flex min-h-[calc(100vh-76px)] w-full items-center px-5 py-24 sm:px-8 md:px-10 lg:px-14 xl:px-20 2xl:px-28">
        <div className="w-full max-w-[920px] pt-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-black/50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-red-100 backdrop-blur">
            <Handshake className="h-4 w-4" />
            Corporate & Community Partnerships
          </div>

          <h1 className="max-w-5xl text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl">
            Stronger <br />
            Together.
            <span className="block text-red-600">Safer Together.</span>
          </h1>

          <div className="mt-6 h-2 w-56 bg-red-700 sm:w-80" />

          <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-white sm:text-xl md:text-2xl">
            Recognizing the organizations and leaders helping build safer
            schools and stronger communities.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/contact?interest=partnership"
              onClick={() =>
                trackEvent("partnership_interest", {
                  location: "partnership_cta",
                })
              }
              className="inline-flex w-full items-center justify-center rounded-none bg-red-700 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-red-800 sm:w-auto">
              Become a Partner
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <a
              href="/sponsor-deck.pdf"
              download
              className="inline-flex w-full items-center justify-center rounded-none border-2 border-white bg-black/50 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white backdrop-blur transition hover:bg-white hover:text-black sm:w-auto">
              Download Sponsor Deck
              <Download className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* <div className="relative z-20 border-t border-white/30 bg-black px-5 py-5 sm:px-8 lg:px-14 xl:px-20 2xl:px-28">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "School Leaders",
            "Teachers & Staff",
            "Community Partners",
            "Parents & Guardians",
          ].map((item) => (
            <div
              key={item}
              className="border-2 border-white bg-black px-4 py-5 text-center">
              <p className="text-xl font-black uppercase leading-tight tracking-tight sm:text-2xl">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
}
