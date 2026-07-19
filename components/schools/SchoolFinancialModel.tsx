import Link from "next/link";
import {
  ArrowRight,
  Handshake,
  RefreshCcw,
  Rocket,
  ShieldCheck,
} from "lucide-react";

const modelBenefits = [
  {
    title: "Initial Coordination",
    description:
      "Code Red helps align the equipment and resources needed to begin implementation.",
    icon: Handshake,
  },
  {
    title: "First-Year Adoption",
    description:
      "Structured support helps staff move from receiving resources to using them effectively.",
    icon: Rocket,
  },
  {
    title: "Long-Term Sustainment",
    description:
      "District leaders can plan responsibly for reassessment, maintenance, and continued readiness.",
    icon: RefreshCcw,
  },
] as const;

export default function SchoolFinancialModel() {
  return (
    <section className="relative overflow-hidden bg-zinc-100 px-5 py-20 text-slate-950 sm:px-8 lg:px-12 lg:py-28">
      <div className="absolute left-0 top-0 h-32 w-72 bg-red-700 [clip-path:polygon(0_0,100%_0,78%_100%,0_100%)]" />
      <div className="absolute bottom-0 right-0 h-48 w-80 bg-slate-950 [clip-path:polygon(100%_0,100%_100%,0_100%)]" />

      <div className="relative mx-auto max-w-full">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div className="pt-16 lg:pt-10">
            <p className="text-sm font-black uppercase tracking-[0.26em] text-red-700">
              Designed to remove barriers
            </p>
            <h2 className="mt-5 text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-6xl lg:text-6xl">
              Start Without the
              <span className="mt-2 block text-red-700">
                Upfront Equipment Purchase.
              </span>
            </h2>
          </div>

          <div className="border-l-4 border-red-700 pl-6 sm:pl-8">
            <p className="text-xl font-bold leading-8 text-slate-700 sm:text-2xl sm:leading-9">
              The Code Red program model helps schools begin with a coordinated
              system, supported adoption, and a responsible path toward
              long-term sustainment.
            </p>
          </div>
        </div>

        <div className="mt-14 grid overflow-hidden border border-slate-300 bg-slate-300 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="relative flex min-h-[460px] flex-col overflow-hidden bg-slate-950 p-8 text-white sm:p-10 lg:p-8">
            <ShieldCheck
              aria-hidden="true"
              className="absolute -bottom-20 -right-20 h-80 w-80 text-white/[0.05]"
              strokeWidth={0.7}
            />

            <p className="relative mt-10 text-xs font-black uppercase tracking-[0.24em] text-red-400">
              Partnership-supported launch
            </p>
            <h3 className="relative mt-3 max-w-lg text-4xl font-black leading-tight sm:text-5xl">
              Remove the Purchase Barrier. Keep the Readiness Standard.
            </h3>

            <Link
              href="/partnerships"
              className="group relative mt-auto inline-flex min-h-16 w-full items-center justify-center bg-red-700 px-7 pt-1 text-center text-sm font-black uppercase tracking-[0.15em] transition hover:bg-red-600 sm:w-fit">
              View Partnership Model
              <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>

          <div className="grid gap-px bg-slate-300 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {modelBenefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className="group flex min-h-[300px] flex-col bg-white p-7 transition hover:bg-red-50 sm:p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-red-700 text-white transition group-hover:bg-slate-950">
                      <Icon className="h-7 w-7" />
                    </div>

                    <h3 className="min-w-0 flex-1 text-xl font-black uppercase leading-tight">
                      {benefit.title}
                    </h3>

                    <span className="shrink-0 text-4xl font-black text-slate-100">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="mt-4 leading-7 text-slate-600">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        <p className="mt-6 max-w-5xl text-sm leading-6 text-slate-500">
          Program structure, eligibility, included resources, and long-term
          responsibilities are confirmed during the partnership planning
          process.
        </p>
      </div>
    </section>
  );
}
