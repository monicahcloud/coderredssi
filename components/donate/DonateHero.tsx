"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartHandshake } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const ONE_TIME_DONATION_URL =
  "https://donate.stripe.com/00w9AN3C94gE0XX8xzbbG04";

export default function DonateHero() {
  return (
    <section className="relative min-h-[calc(100vh-76px)] overflow-hidden bg-black text-white">
      <Image
        src="/images/donate-hero.png"
        alt="Students and school community"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(220,38,38,0.35),transparent_35%)]" />

      <div className="relative z-10 flex min-h-[calc(100vh-76px)] items-center px-5 py-24 sm:px-8 lg:px-14 xl:px-20 2xl:px-28">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-black/50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-red-100 backdrop-blur">
            <HeartHandshake className="h-4 w-4" />
            Support Safer Schools
          </div>

          <h1 className="text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl xl:text-8xl">
            Give Today.
            <span className="block text-red-600">Protect Tomorrow.</span>
          </h1>

          <div className="mt-6 h-2 w-56 bg-red-700 sm:w-80" />

          <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-zinc-200 sm:text-xl md:text-2xl">
            Your donation helps schools strengthen preparedness, improve
            response readiness, and create safer learning environments for
            students, educators, and communities.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href={ONE_TIME_DONATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent("donation_click", {
                  location: "donate_hero",
                  type: "one_time",
                })
              }
              className="inline-flex items-center justify-center rounded-none bg-red-700 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-red-800">
              Donate Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="/partnerships"
              className="inline-flex items-center justify-center rounded-none border-2 border-white bg-black/50 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white backdrop-blur transition hover:bg-white hover:text-black">
              Explore Partnerships
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
