"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

const tiers = [
  {
    name: "Diamond",
    type: "Statewide Partner",
    amount: "$2M+",
    reach: "100+ schools",
    impact: "150K+ students and staff protected",
    badgeSrc: "/images/diamondbadge.png",
    accent: "from-cyan-500 to-cyan-200",
  },
  {
    name: "Gold",
    type: "Regional Partner",
    amount: "$500K - $2M",
    reach: "25–50 schools",
    impact: "50K+ students and staff protected",
    badgeSrc: "/images/goldbadge.png",
    accent: "from-yellow-600 to-yellow-300",
  },

  {
    name: "Silver",
    type: "District Partner",
    amount: "$100K - $500K",
    reach: "10–25 schools",
    impact: "20K+ students and staff protected",
    badgeSrc: "/images/silverbadge.png",
    accent: "from-slate-500 to-slate-300",
  },

  {
    name: "Bronze",
    type: "Community Partner",
    amount: "$25K - $100K",
    reach: "3–5 schools",
    impact: "7.5K+ students and staff protected",
    badgeSrc: "/images/bronzebadge.png",
    accent: "from-amber-700 to-amber-500",
  },
];

export default function PartnershipOptions() {
  return (
    <section
      id="partnership-options"
      className="relative overflow-hidden bg-zinc-100 px-6 py-24 text-slate-950 md:px-10 xl:px-16 2xl:px-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.12),transparent_35%)]" />

      <div className="relative mx-auto w-full max-w-[1600px]">
        <div className="mb-16 max-w-5xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-red-600">
            Partnership Options
          </p>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Choose the Partnership Level That Matches Your Impact Goals
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Each investment tier supports measurable school protection outcomes
            through safety assessments, training, equipment coordination, and
            ongoing reassessment.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">
              <div
                className={`absolute left-0 top-0 h-2 w-full bg-gradient-to-r ${tier.accent}`}
              />

              <div className="grid gap-8 sm:grid-cols-[160px_1fr] sm:items-center">
                <div className="flex justify-center sm:justify-start">
                  <motion.div
                    animate={{ rotateY: 360 }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{ transformStyle: "preserve-3d" }}>
                    <Image
                      src={tier.badgeSrc}
                      alt={`${tier.name} partnership badge`}
                      width={140}
                      height={140}
                      className="h-auto w-[120px] object-contain drop-shadow-xl sm:w-[140px]"
                    />
                  </motion.div>
                </div>

                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-slate-500">
                    {tier.type}
                  </p>

                  <h3 className="mt-2 text-4xl font-black uppercase tracking-tight text-slate-950 sm:text-5xl">
                    {tier.name}
                  </h3>

                  <p className="mt-4 text-2xl font-black text-red-700">
                    {tier.amount}
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl bg-zinc-100 p-4">
                      <CheckCircle2 className="mb-2 h-5 w-5 text-red-600" />
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                        Reach
                      </p>
                      <p className="mt-1 text-lg font-black text-slate-950">
                        {tier.reach}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-zinc-100 p-4">
                      <CheckCircle2 className="mb-2 h-5 w-5 text-red-600" />
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                        Impact
                      </p>
                      <p className="mt-1 text-lg font-black text-slate-950">
                        {tier.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] bg-black p-8 text-white sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-red-500">
                Custom Partnerships Available
              </p>
              <h3 className="mt-3 text-3xl font-black sm:text-4xl">
                Support can include funding, equipment, services, or expertise.
              </h3>
            </div>

            <Link
              href="/contact?interest=partnership"
              onClick={() =>
                trackEvent("partnership_interest", {
                  location: "partnership_cta",
                })
              }
              className="inline-flex shrink-0 items-center justify-center rounded-xl bg-red-700 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-red-800">
              Start Partnership
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
