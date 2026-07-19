import { ArrowDown, ArrowRight } from "lucide-react";

import { schoolProcess } from "./school-page-data";

export default function SchoolProcess() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      {/* Folded corner and side rail inspired by the reference slide */}
      <div className="absolute left-0 top-0 h-full w-4 bg-red-700 sm:w-8" />
      <div className="absolute right-0 top-0 h-64 w-64 bg-red-700 [clip-path:polygon(100%_0,100%_100%,0_0)]" />
      <div className="absolute right-16 top-0 h-28 w-28 bg-black/15 blur-xl [clip-path:polygon(100%_0,100%_100%,0_0)]" />

      <div className="relative mx-auto max-w-[1500px]">
        <div className="max-w-5xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-slate-700">
            Program process
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
            Step-by-Step
            <span className="block text-red-700">
              From Alignment to Long-Term Readiness
            </span>
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Code Red serves as the single coordinating point across planning,
            training, equipment, implementation, and follow-up.
          </p>
        </div>

        {/* Desktop connected circle sequence */}
        <div className="mt-16 hidden grid-cols-5 items-start lg:grid">
          {schoolProcess.map((step, index) => {
            const isDark = index % 2 === 1;

            return (
              <div
                key={step.number}
                className="group/step relative flex flex-col items-center"
              >
                <span className="mb-5 text-4xl font-black text-slate-950 transition-colors duration-300 group-hover/step:text-red-700">
                  {Number(step.number)}
                </span>

                <div className="relative flex h-48 w-48 items-center justify-center rounded-full bg-white p-4 transition-transform duration-500 group-hover/step:scale-105">
                  {/* The ring spins independently so the title stays readable. */}
                  <div className="absolute inset-0 rounded-full border-4 border-red-700 transition-transform duration-700 ease-in-out motion-reduce:transform-none group-hover/step:rotate-[360deg]">
                    <span className="absolute left-1/2 top-[-10px] h-4 w-4 -translate-x-1/2 rounded-full border-2 border-white bg-slate-950 shadow-md" />
                    <span className="absolute bottom-[-8px] left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-red-700" />
                  </div>

                  <div
                    className={`relative z-10 flex h-full w-full items-center justify-center rounded-full p-5 text-center shadow-lg transition-colors duration-500 ${
                      isDark ? "bg-slate-950" : "bg-red-700"
                    } ${isDark ? "group-hover/step:bg-red-700" : "group-hover/step:bg-slate-950"}`}
                  >
                    <h3 className="text-2xl font-black leading-tight text-white">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-6 max-w-[220px] text-center text-sm leading-6 text-slate-600 transition-transform duration-500 group-hover/step:-translate-y-1">
                  {step.description}
                </p>

                {index < schoolProcess.length - 1 && (
                  <div className="absolute left-[calc(50%+96px)] top-[136px] flex w-[calc(100%-192px)] items-center">
                    <span className="h-1 flex-1 bg-red-700" />
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-700 text-white transition-transform duration-500 group-hover/step:translate-x-2">
                      <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover/step:translate-x-0.5" />
                    </div>
                    <span className="h-1 flex-1 bg-red-700" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile and tablet vertical sequence */}
        <div className="mt-12 grid gap-0 lg:hidden">
          {schoolProcess.map((step, index) => (
            <div
              key={step.number}
              className="group/mobile flex flex-col items-center"
            >
              <div className="grid w-full max-w-2xl grid-cols-[72px_1fr] items-center gap-5 border border-slate-200 bg-white p-5 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-lg">
                <div className="relative flex h-16 w-16 items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-2 border-red-700 transition-transform duration-700 motion-reduce:transform-none group-hover/mobile:rotate-[360deg]">
                    <span className="absolute left-1/2 top-[-6px] h-3 w-3 -translate-x-1/2 rounded-full bg-slate-950" />
                  </div>
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-red-700 text-xl font-black text-white">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-950">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>

              {index < schoolProcess.length - 1 && (
                <div className="flex h-14 w-14 items-center justify-center text-red-700">
                  <ArrowDown className="h-7 w-7 transition-transform duration-500 group-hover/mobile:translate-y-2" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
