import Image from "next/image";
import { Check, ShieldCheck, X } from "lucide-react";

const preparednessIncludes = [
  "Training",
  "Assessments",
  "Communication",
  "Reassessment",
] as const;

export default function SchoolMythFact() {
  return (
    <section
      aria-labelledby="myth-fact-heading"
      className="relative overflow-hidden bg-zinc-100 px-5 py-20 sm:px-8 lg:px-12 lg:py-20">
      <div className="absolute left-0 top-0 h-2 w-full bg-red-700" />
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-red-700/5" />
      <div className="absolute bottom-0 right-0 h-64 w-72 rounded-full bg-red-700/5" />
      {/* <div className="absolute bottom-0 right-0 h-56 w-72 bg-red-700 [clip-path:polygon(100%_0,100%_100%,0_100%)]" />
      <div className="absolute bottom-0 right-0 h-36 w-48 bg-slate-950 [clip-path:polygon(100%_0,100%_100%,0_100%)]" /> */}

      <div className="relative mx-auto max-w-full">
        <div className="mb-12 flex flex-col gap-5 border-b border-slate-300 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.26em] text-red-700">
              Myth vs. fact
            </p>
            <h2
              id="myth-fact-heading"
              className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Equipment Is Only One Part of Readiness.
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-8 text-slate-600 lg:text-right">
            A visible security system can support a safety strategy, but it
            cannot replace the people, practice, and coordination behind it.
          </p>
        </div>

        <div className="grid gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:items-stretch">
          <article className="relative flex min-h-[520px] flex-col overflow-hidden bg-red-700 p-7 text-white sm:p-10 lg:p-12">
            <span className="absolute -right-4 -top-8 text-[12rem] font-black leading-none text-black/[0.08]">
              ?
            </span>

            <div className="relative flex items-center justify-between border-b border-white/25 pb-6">
              <p className="text-xl font-black uppercase tracking-[0.28em]">
                The myth
              </p>
            </div>

            <div className="item-center justify-center max-auto mt-10 flex">
              <Image
                src="/images/securitycameras.png"
                alt="security cameras"
                width={350}
                height={350}
              />
            </div>

            <blockquote className="relative mt-auto pt-12 text-4xl font-black leading-tight sm:text-5xl">
              “We have cameras, so we’re prepared.”
            </blockquote>

            <div className="relative mt-8 h-1 w-full overflow-hidden bg-white/25">
              <div className="h-full w-2/3 bg-slate-950" />
            </div>
          </article>

          <article className="group relative min-h-[680px] overflow-hidden bg-slate-950 text-white">
            <Image
              src="/images/technology.png"
              alt="School emergency plans and unused drill equipment prepared for a readiness exercise"
              fill
              sizes="(max-width: 1024px) 100vw, 65vw"
              className="object-cover object-center transition duration-700 group-hover:scale-[1.025] rounded-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/5" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-transparent to-transparent" />

            <div className="absolute left-6 top-6 flex items-center gap-3 px-4 py-3 text-slate-950 sm:left-10 sm:top-10">
              <ShieldCheck className="h-6 w-6 text-red-700" />
              <span className="text-xl font-black text-white uppercase tracking-[0.22em]">
                The fact
              </span>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10 lg:p-12">
              <h3 className="max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Technology alone does not create preparedness.
              </h3>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {preparednessIncludes.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border border-white/20 bg-black/55 px-4 py-4 backdrop-blur-md">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-red-700">
                      <Check className="h-4 w-4" strokeWidth={3} />
                    </span>
                    <span className="text-sm font-black uppercase tracking-[0.08em]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
