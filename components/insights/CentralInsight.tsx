import { CheckCircle2, ShieldCheck } from "lucide-react";

const principles = [
  "People",
  "Processes",
  "Technology",
  "Continuous Improvement",
];

export default function CentralInsight() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 text-slate-950 sm:px-8 lg:px-12 lg:py-28">
      {/* Left accent rail */}
      <div className="absolute left-0 top-0 h-full w-3 bg-red-700 sm:w-6" />

      {/* Decorative corner */}
      <div className="absolute right-0 top-0 h-40 w-52 bg-red-700 [clip-path:polygon(100%_0,100%_100%,0_0)] sm:h-56 sm:w-72" />

      <div className="relative mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
        {/* Section introduction */}
        <div>
          <div className="flex h-16 w-16 items-center justify-center bg-red-700 text-white">
            <ShieldCheck className="h-8 w-8" />
          </div>

          <p className="mt-7 text-sm font-black uppercase tracking-[0.24em] text-red-700">
            The Central Insight
          </p>

          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
            Safety works
            <span className="block text-red-700">as a system.</span>
          </h2>

          <div className="mt-6 h-2 w-32 bg-slate-950" />
        </div>

        {/* Main statement */}
        <div>
          <p className="border-l-4 border-red-700 pl-6 text-2xl font-black leading-9 sm:pl-8 sm:text-3xl sm:leading-10 lg:text-4xl lg:leading-[1.2]">
            School safety is not a single product, policy, or training session.
            It is a coordinated system that must be understood, practiced,
            measured, and continuously improved.
          </p>

          <p className="mt-7 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">
            Strong safety outcomes emerge when leadership, people, procedures,
            training, communication, and technology operate together toward the
            same mission.
          </p>

          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {principles.map((principle) => (
              <div
                key={principle}
                className="flex items-center gap-3 border border-slate-200 bg-slate-50 p-4">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-red-700" />

                <span className="text-sm font-black uppercase tracking-[0.12em]">
                  {principle}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
