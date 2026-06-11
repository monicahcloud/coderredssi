"use client";

import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function PartnershipCTA() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/images/pitchdeckcover.png')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-black/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.25),transparent_45%)]" />

      <div className="relative mx-auto flex min-h-[70vh] w-full max-w-[1600px] items-center px-6 py-24 md:px-10 xl:px-16 2xl:px-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-6 text-sm font-black uppercase tracking-[0.3em] text-red-500">
            Join The Mission
          </p>

          <h2 className="text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
            Help Build
            <span className="block text-red-600">Safer Schools</span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-300 sm:text-xl">
            Every partnership helps schools strengthen preparedness, improve
            response readiness, and create safer learning environments for
            students, educators, and communities.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact?interest=partnership"
              onClick={() =>
                trackEvent("partnership_interest", {
                  location: "partnership_cta",
                })
              }
              className="inline-flex items-center justify-center rounded-xl bg-red-700 px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-red-800">
              Become a Partner
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <a
              href="/sponsor-deck.pdf"
              download
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-white backdrop-blur transition hover:bg-white/10">
              Download Sponsor Deck
              <Download className="ml-2 h-5 w-5" />
            </a>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            <div>
              <p className="text-4xl font-black text-red-500">4</p>
              <p className="mt-2 text-sm font-bold uppercase tracking-widest text-zinc-400">
                Impact Pillars
              </p>
            </div>

            <div>
              <p className="text-4xl font-black text-red-500">1</p>
              <p className="mt-2 text-sm font-bold uppercase tracking-widest text-zinc-400">
                Unified Framework
              </p>
            </div>

            <div>
              <p className="text-4xl font-black text-red-500">∞</p>
              <p className="mt-2 text-sm font-bold uppercase tracking-widest text-zinc-400">
                Community Impact
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
