"use client";

import Link from "next/link";
import { Handshake, HeartHandshake } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const DONATE_URL = "https://buy.stripe.com/REPLACE_ME";

export default function DonationCTA() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-24 text-white md:px-10 xl:px-16 2xl:px-24">
      <div className="absolute inset-0 bg-[url('/images/pitchdeckcover.png')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-black/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.28),transparent_45%)]" />

      <div className="relative mx-auto flex min-h-[55vh] max-w-[1400px] items-center justify-center text-center">
        <div>
          <p className="mb-5 text-sm font-black uppercase tracking-[0.3em] text-red-500">
            Give Today
          </p>

          <h2 className="text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Support Safer
            <span className="block text-red-600">Schools</span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-zinc-300 sm:text-xl">
            Your gift helps advance school safety readiness through assessment,
            education, preparedness resources, and ongoing support.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent("donation_click", {
                  location: "donation_final_cta",
                  type: "one_time",
                })
              }
              className="inline-flex items-center justify-center rounded-xl bg-red-700 px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-red-800">
              Donate Now
              <HeartHandshake className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="/partnerships"
              onClick={() =>
                trackEvent("partnership_interest", {
                  location: "donation_final_cta",
                  button: "become_partner",
                })
              }
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-white backdrop-blur transition hover:bg-white/10">
              Become a Partner
              <Handshake className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
