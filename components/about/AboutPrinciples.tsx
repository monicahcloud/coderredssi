"use client";

import Image from "next/image";
import { BadgeCheck, BarChart3, FileCheck2, ShieldCheck } from "lucide-react";

const principles = [
  {
    title: "Industry Credibility",
    text: "Our leadership draws from law enforcement, emergency management, and K–12 operations while aligning with recognized physical security and emergency management practices.",
    icon: BadgeCheck,
  },
  {
    title: "Transparency",
    text: "Schools and partners deserve clear reporting, measurable outcomes, and responsible stewardship throughout every engagement.",
    icon: FileCheck2,
  },
  {
    title: "Accountability",
    text: "We believe success should be measured through meaningful performance indicators, continuous evaluation, and a commitment to improving every year.",
    icon: BarChart3,
  },
];

export default function AboutPrinciples() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.18),transparent_35%)]" />

      <div className="relative mx-auto grid max-w-full px-10 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        {/* LEFT CONTENT */}
        <div>
          <div className="mb-5 flex items-center gap-4">
            <div className="h-px w-14 bg-red-600" />
            <p className="text-sm font-black uppercase tracking-[0.3em] text-red-500">
              Guiding Principles
            </p>
          </div>

          <h2 className="max-w-4xl text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Built on Expertise.
            <span className="block text-red-600">
              Driven by Accountability.
            </span>
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/70">
            Code Red is guided by credibility, transparency, and measurable
            outcomes. Every recommendation is designed to strengthen trust,
            improve readiness, and support safer schools over time.
          </p>

          <div className="mt-12 space-y-5">
            {principles.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group flex gap-5 border border-white/10 bg-white/[0.03] p-6 transition hover:border-red-500/60 hover:bg-white/[0.06]">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-red-700 text-white">
                    <Icon className="h-7 w-7" />
                  </div>

                  <div>
                    <h3 className="text-xl font-black uppercase text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-base leading-7 text-white/70">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="absolute -right-6 -top-6 h-40 w-40 bg-red-700" />
          <div className="absolute -bottom-6 -left-6 h-40 w-40 border-4 border-red-700" />

          <div className="relative overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="/images/quote.png"
              alt="School safety professionals reviewing impact reporting and emergency readiness plans"
              width={900}
              height={1100}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            {/* <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="border border-white/15 bg-black/70 p-6 backdrop-blur">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-red-700">
                    <ShieldCheck className="h-7 w-7 text-white" />
                  </div>

                  <p className="text-lg font-bold leading-7 text-white">
                    Safety. Integrity. Transparency.
                    <span className="block text-red-500">Always.</span>
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
