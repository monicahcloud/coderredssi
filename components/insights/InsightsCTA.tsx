"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

import { trackEvent } from "@/lib/analytics";

export default function InsightsCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-black px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
      {/* Background image */}
      <Image
        src="/images/securitycameras.png"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-center opacity-30"
      />

      {/* Overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/90 to-black/55" />
      <div className="absolute inset-x-0 top-0 h-2 bg-red-700" />

      {/* Decorative shapes */}
      <div className="absolute right-0 top-0 h-48 w-64 bg-red-700/20 [clip-path:polygon(100%_0,100%_100%,0_0)] sm:h-72 sm:w-96" />
      <div className="absolute bottom-0 left-0 h-28 w-40 bg-red-700 [clip-path:polygon(0_0,100%_100%,0_100%)] sm:h-40 sm:w-60" />

      <div className="relative mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <div className="flex h-16 w-16 items-center justify-center bg-red-700">
            <ShieldCheck className="h-8 w-8" />
          </div>

          <p className="mt-7 text-sm font-black uppercase tracking-[0.24em] text-red-500">
            Turn Insight Into Action
          </p>

          <h2 className="mt-4 max-w-5xl text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Start with your school’s
            <span className="block text-red-600">real conditions.</span>
          </h2>

          <div className="mt-6 h-2 w-40 bg-red-700" />

          <p className="mt-7 max-w-3xl text-lg font-semibold leading-8 text-white/75 sm:text-xl">
            Connect with Code Red to discuss your campus, current challenges,
            and the most practical next step for your school community.
          </p>
        </div>

        <Link
          href="/contact"
          onClick={() =>
            trackEvent("insights_contact_click", {
              location: "insights_cta",
            })
          }
          className="inline-flex min-h-16 w-full items-center justify-center bg-red-700 px-8 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-red-800 sm:w-auto">
          Contact Our Team
          <ArrowRight className="ml-3 h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}
