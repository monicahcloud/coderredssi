import { CheckCircle2 } from "lucide-react";

import { insightAreas } from "./insights-data";

export default function InsightAreas() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 text-slate-950 sm:px-8 lg:px-12 lg:py-28">
      {/* Left accent */}
      <div className="absolute left-0 top-0 h-full w-3 bg-red-700 sm:w-6" />

      {/* Angled corner */}
      <div className="absolute right-0 top-0 h-40 w-52 bg-slate-950 [clip-path:polygon(100%_0,100%_100%,0_0)] sm:h-56 sm:w-72" />

      <div className="relative mx-auto max-w-[1500px]">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-red-700">
              Four Areas of Informed Action
            </p>

            <h2 className="mt-4 max-w-5xl text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-7xl">
              Questions every school
              <span className="block text-red-700">leader should ask.</span>
            </h2>

            <div className="mt-6 h-2 w-40 bg-slate-950" />
          </div>

          <p className="max-w-2xl border-l-4 border-red-700 pl-6 text-lg font-semibold leading-8 text-slate-600">
            Stronger decisions begin with stronger questions. These four areas
            help leadership teams examine current conditions and identify
            practical opportunities for improvement.
          </p>
        </div>

        {/* Insight cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {insightAreas.map((area) => {
            const Icon = area.icon;

            return (
              <article
                key={area.number}
                className="group relative overflow-hidden border border-slate-200 bg-slate-50 transition duration-300 hover:-translate-y-1 hover:border-red-700 hover:shadow-xl">
                {/* Card header */}
                <div className="relative flex items-center justify-between overflow-hidden bg-slate-950 px-6 py-5 text-white sm:px-8">
                  <div className="absolute right-0 top-0 h-full w-28 bg-red-700 [clip-path:polygon(45%_0,100%_0,100%_100%,0_100%)]" />

                  <div className="relative flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-red-700">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-red-500">
                        Insight {area.number}
                      </p>

                      <p className="mt-1 text-sm font-black uppercase tracking-[0.16em]">
                        {area.eyebrow}
                      </p>
                    </div>
                  </div>

                  <span className="relative text-5xl font-black leading-none text-white/30">
                    {area.number}
                  </span>
                </div>

                {/* Card body */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl font-black uppercase leading-tight sm:text-3xl">
                    {area.title}
                  </h3>

                  <p className="mt-5 font-semibold leading-7 text-slate-700">
                    {area.summary}
                  </p>

                  <div className="mt-7 space-y-4 border-t border-slate-200 pt-6">
                    {area.points.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center bg-red-700 text-white">
                          <CheckCircle2 className="h-4 w-4" />
                        </div>

                        <p className="text-sm font-medium leading-6 text-slate-600">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="h-2 w-full bg-slate-950 transition-colors group-hover:bg-red-700" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
