import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const readinessChecklist = [
  "Emergency plan updated",
  "Staff trained",
  "Communication systems tested",
  "Safety assessment completed",
  "Reassessment scheduled",
] as const;

export default function SchoolCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-black px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
      <Image
        src="/images/schools-hero.png"
        alt="School entrance prepared to welcome students and staff"
        fill
        sizes="100vw"
        className="-z-30 object-cover object-center"
      />
      <div className="absolute inset-0 -z-20 bg-black/80" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/75 to-black/45" />
      <div className="absolute inset-x-0 top-0 h-2 bg-red-700" />

      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-red-500">
              Readiness check
            </p>

            <h2 className="mt-5 text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
              Is Your School
              <span className="block text-red-600">Ready?</span>
            </h2>

            <div className="mt-7 h-2 w-64 bg-red-700 sm:w-96" />

            <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-white/70 sm:text-xl">
              Preparedness is not a single purchase or a one-time plan. It is a
              coordinated practice that must be maintained.
            </p>
          </div>

          <div className="border border-white/15 bg-black/70 p-6 shadow-2xl backdrop-blur-md sm:p-8 lg:p-10">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-red-400">
              Can you check every box?
            </p>

            <ul className="mt-7 space-y-5">
              {readinessChecklist.map((item) => (
                <li key={item} className="flex items-center gap-4">
                  <span className="relative flex h-10 w-10 shrink-0 items-center justify-center border-2 border-white/80">
                    <Check
                      className="h-9 w-9 translate-x-1 -translate-y-1 text-red-600"
                      strokeWidth={3.5}
                    />
                  </span>
                  <span className="text-xl font-black leading-tight sm:text-2xl">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative mt-14 overflow-hidden bg-red-700 px-6 py-9 sm:px-10 lg:px-14">
          <div className="absolute inset-y-0 right-0 w-1/3 bg-red-800 [clip-path:polygon(35%_0,100%_0,100%_100%,0_100%)]" />

          <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-red-100">
                If not, now is the time.
              </p>
              <h3 className="mt-2 text-3xl font-black uppercase sm:text-4xl lg:text-5xl">
                Start With a Readiness Conversation.
              </h3>
            </div>

            <Link
              href="/#contact"
              className="group inline-flex min-h-16 w-full shrink-0 items-center justify-center bg-white px-8 text-center text-sm font-black uppercase tracking-[0.16em] text-slate-950 transition hover:bg-slate-950 hover:text-white sm:w-auto">
              Talk With Code Red
              <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
