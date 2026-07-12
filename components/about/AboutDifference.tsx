"use client";

import { ClipboardCheck, Globe2, Network, ShieldCheck } from "lucide-react";

const differences = [
  {
    number: "01",
    title: "We Coordinate What Others Deliver",
    text: "Instead of managing multiple vendors, schools receive one coordinated strategy that brings assessments, trusted partners, technology, implementation, and continuous support together.",
    icon: Network,
    featured: true,
  },
  {
    number: "02",
    title: "Practitioner Built",
    text: "Our recommendations come from professionals with real-world experience in law enforcement, emergency management, and school operations—not product sales.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Built for Execution",
    text: "We move beyond recommendations into action by coordinating implementation, training, scheduling, oversight, and long-term follow-up.",
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title: "Scalable by Design",
    text: "Whether supporting one campus or an entire state, our framework grows while maintaining consistency, accountability, and measurable outcomes.",
    icon: Globe2,
  },
];

export default function AboutDifference() {
  const featuredItem = differences.find((item) => item.featured);
  const supportingItems = differences.filter((item) => !item.featured);

  if (!featuredItem) return null;

  const FeaturedIcon = featuredItem.icon;

  return (
    <section className="relative overflow-hidden bg-[#08090c] px-6 py-20 text-white sm:py-24 lg:px-10 lg:py-28">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.22),transparent_32%)]" />
      <div className="absolute bottom-0 right-0 h-[480px] w-[480px] bg-red-700/10 blur-[140px]" />

      <div className="relative mx-auto max-w-[1600px]">
        {/* Intro */}
        <div className="grid gap-10 border-b border-white/10 pb-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <div className="h-px w-14 bg-red-600" />

              <p className="text-sm font-black uppercase tracking-[0.3em] text-red-500">
                The Code Red Difference
              </p>
            </div>

            <h2 className="text-4xl font-black uppercase leading-[1.03] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              We Don&apos;t Sell
              <span className="block text-red-600">Products.</span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="text-2xl font-black uppercase leading-tight text-white sm:text-3xl">
              We build complete safety programs schools can actually execute.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
              Most organizations specialize in one piece of school safety. Code
              Red connects every piece into one coordinated framework—from
              assessment and planning through implementation and long-term
              improvement.
            </p>
          </div>
        </div>

        {/* Main difference layout */}
        <div className="mt-12 grid gap-6 xl:grid-cols-[1.05fr_1.4fr]">
          {/* Featured card */}
          <article className="group relative flex min-h-[520px] flex-col justify-between overflow-hidden border border-red-600 bg-red-700 p-8 sm:p-10 lg:p-12">
            <div className="absolute -right-20 -top-20 h-72 w-72 border-[48px] border-white/5" />

            <div className="relative">
              <div className="flex items-start justify-between gap-6">
                <div className="flex h-20 w-20 items-center justify-center bg-black text-white">
                  <FeaturedIcon className="h-10 w-10" />
                </div>

                <span className="text-7xl font-black leading-none text-white/15 sm:text-8xl">
                  {featuredItem.number}
                </span>
              </div>

              <p className="mt-10 text-xs font-black uppercase tracking-[0.3em] text-red-100">
                Our Core Advantage
              </p>

              <h3 className="mt-4 max-w-xl text-3xl font-black uppercase leading-tight sm:text-4xl lg:text-5xl">
                {featuredItem.title}
              </h3>
            </div>

            <div className="relative mt-12 border-t border-white/25 pt-8">
              <p className="max-w-2xl text-lg leading-8 text-red-50">
                {featuredItem.text}
              </p>
            </div>
          </article>

          {/* Supporting cards */}
          <div className="grid gap-6 md:grid-cols-2">
            {supportingItems.map((item, index) => {
              const Icon = item.icon;
              const isWide = index === supportingItems.length - 1;

              return (
                <article
                  key={item.title}
                  className={`group relative overflow-hidden border border-white/10 bg-white/[0.035] p-7 transition duration-300 hover:-translate-y-1 hover:border-red-600 hover:bg-white/[0.06] sm:p-8 ${
                    isWide ? "md:col-span-2" : ""
                  }`}>
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex min-w-0 items-center gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-red-700 text-white transition duration-300 group-hover:bg-white group-hover:text-red-700">
                        <Icon className="h-7 w-7" />
                      </div>

                      <h3 className="min-w-0 text-2xl font-black uppercase leading-tight tracking-tight sm:text-3xl">
                        {item.title}
                      </h3>
                    </div>

                    <span className="shrink-0 text-5xl font-black leading-none text-white/10">
                      {item.number}
                    </span>
                  </div>

                  <div
                    className={
                      isWide
                        ? "mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
                        : "mt-8"
                    }>
                    <p
                      className={`text-base leading-7 text-white/65 ${
                        isWide ? "lg:mt-0" : "mt-5"
                      }`}>
                      {item.text}
                    </p>
                  </div>

                  <div className="mt-8 h-1 w-16 bg-red-700 transition-all duration-300 group-hover:w-28" />
                </article>
              );
            })}
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-12 grid overflow-hidden border border-white/10 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="flex items-center bg-white px-8 py-10 text-black sm:px-10 lg:py-12">
            <h3 className="text-3xl font-black uppercase leading-tight sm:text-4xl">
              One Partner.
              <span className="block text-red-700">Complete Coordination.</span>
            </h3>
          </div>

          <div className="flex items-center bg-red-700 px-8 py-10 sm:px-10 lg:py-12">
            <p className="max-w-4xl text-lg leading-8 text-red-50">
              Schools should not have to coordinate multiple vendors,
              disconnected technologies, and competing recommendations. Code Red
              brings everything together into one trusted framework focused on
              protecting students and strengthening communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
