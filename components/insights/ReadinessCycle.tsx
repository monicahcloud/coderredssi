import { ArrowDown, ArrowRight, RefreshCcw } from "lucide-react";

import { readinessCycle } from "./insights-data";

export default function ReadinessCycle() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
      {/* Top accent */}
      <div className="absolute left-0 top-0 h-2 w-full bg-red-700" />

      {/* Decorative background */}
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border-[40px] border-red-700/10" />

      <div className="relative mx-auto max-w-[1500px]">
        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <div className="group flex h-16 w-16 items-center justify-center bg-red-700">
              <RefreshCcw className="h-8 w-8 transition-transform duration-700 group-hover:rotate-180" />
            </div>

            <p className="mt-7 text-sm font-black uppercase tracking-[0.24em] text-red-500">
              Continuous Improvement
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-7xl">
              Readiness is
              <span className="block text-red-600">a cycle.</span>
            </h2>

            <div className="mt-6 h-2 w-36 bg-red-700" />
          </div>

          <div className="border-l-4 border-red-700 pl-6 sm:pl-8">
            <p className="max-w-4xl text-xl font-bold leading-8 text-white sm:text-2xl sm:leading-9">
              School environments do not remain static. People, buildings,
              technology, threats, and resources change over time.
            </p>

            <p className="mt-5 max-w-3xl leading-7 text-white/60">
              A sustainable safety strategy regularly examines current
              conditions, prioritizes the most important needs, implements
              practical improvements, and measures what changed.
            </p>
          </div>
        </div>

        {/* Cycle steps */}
        <div className="mt-16 grid gap-5 lg:grid-cols-4 lg:gap-0">
          {readinessCycle.map((step, index) => {
            const isRed = index % 2 === 0;

            return (
              <div
                key={step.label}
                className="group relative flex lg:items-stretch">
                <article
                  className={`relative flex min-h-64 w-full flex-col justify-between overflow-hidden border p-7 transition duration-300 hover:-translate-y-2 sm:p-8 ${
                    isRed
                      ? "border-red-700 bg-red-700"
                      : "border-white/15 bg-white/[0.04]"
                  }`}>
                  <span
                    className={`absolute -right-3 -top-7 text-[9rem] font-black leading-none ${
                      isRed ? "text-black/10" : "text-white/[0.04]"
                    }`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="relative">
                    <p
                      className={`text-xs font-black uppercase tracking-[0.22em] ${
                        isRed ? "text-white/65" : "text-red-500"
                      }`}>
                      Step {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3 className="mt-4 text-3xl font-black uppercase">
                      {step.label}
                    </h3>
                  </div>

                  <p
                    className={`relative mt-8 text-sm font-medium leading-6 ${
                      isRed ? "text-white/80" : "text-white/60"
                    }`}>
                    {step.text}
                  </p>
                </article>

                {/* Desktop connector */}
                {index < readinessCycle.length - 1 && (
                  <div className="relative z-10 hidden w-12 shrink-0 items-center justify-center lg:flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-slate-950 bg-white text-red-700">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                )}

                {/* Mobile connector */}
                {index < readinessCycle.length - 1 && (
                  <div className="absolute -bottom-8 left-1/2 z-10 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border-4 border-slate-950 bg-white text-red-700 lg:hidden">
                    <ArrowDown className="h-5 w-5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Closing statement */}
        <div className="mt-14 border border-white/15 bg-black/40 p-7 text-center sm:p-9">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-red-500">
            The objective
          </p>

          <p className="mx-auto mt-4 max-w-4xl text-xl font-black uppercase leading-8 sm:text-2xl">
            Build a safety system that learns, adapts, and becomes stronger with
            every cycle.
          </p>
        </div>
      </div>
    </section>
  );
}
