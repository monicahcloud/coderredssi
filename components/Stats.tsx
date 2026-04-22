"use client";

import { motion } from "framer-motion";
import {
  School,
  ShieldCheck,
  Users,
  Landmark,
  ArrowUpRight,
} from "lucide-react";
import StatusCircle from "./StatusCircle";
import { PartnerCTA } from "./cta/PartnerCTA";

const stats = [
  {
    label: "Preparedness Gap",
    value: "75%",
    subtext: "of staff feel under-equipped",
    description:
      "A majority of educators report lack of tactical readiness for high-stress incidents.",
    icon: School,
  },
  {
    label: "Limited Assessments",
    value: "3+ Yrs",
    subtext:
      "Most schools see at most 1 professional safety assessment a year.",
    description:
      "Code Red adds complementary assessments and training so districts get continuous improvement, not one-off assessments and training.",
    icon: ShieldCheck,
  },
  {
    label: "Student Fights as a Recurring Issue",
    value: "13%",
    subtext: "Schools reporting physical fights as a recurring safety issue.",
    description:
      "Schools reporting physical fights as a recurring safety issue. Source: RAND.",
    icon: Users,
  },
  {
    label: "Unfunded upgrades",
    value: "250,000+",
    subtext:
      "Critical security equipment is routinely delayed or cut due to cost.",
    description:
      "Critical security equipment is routinely delayed or cut due to cost.",
    icon: Landmark,
  },
];

export default function StatsPage() {
  return (
    <section
      id="crisis"
      className="relative min-h-screen overflow-hidden bg-[#060606] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.16),transparent_28%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent)]" />

      <div className="relative mx-auto w-full max-w-8xl">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            <h1 className="mt-3 text-4xl font-black uppercase italic tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              The <span className="text-primary">Numbers</span> Behind Our{" "}
              <span className="text-primary">Mission</span>
            </h1>
          </div>

          <div className="max-w-md lg:-mt-2">
            <p className="border-l border-primary/20 pl-6 text-base leading-relaxed text-white/70 sm:text-lg">
              Code Red translates coordination, partnership, and planning into
              measurable school safety outcomes that communities can see and
              support.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.08 }}
                className="group relative overflow-hidden border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white/[0.06]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.12),transparent_30%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center border border-white/10 bg-black/20">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>

                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
                      {stat.label}
                    </p>
                  </div>
                  <div className="mt-4 flex items-end gap-3">
                    <p className="text-5xl font-black leading-none text-white">
                      {stat.value}
                    </p>
                    <ArrowUpRight className="mb-1 h-5 w-5 text-primary" />
                  </div>{" "}
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/55">
                    {stat.subtext}
                  </p>
                  {/* <p className="mt-5 text-sm leading-7 text-white/70">
                    {stat.description}
                  </p> */}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-red-500/20 bg-gradient-to-br from-[#2b0000] via-[#5a0000] to-[#120000] p-8">
            <p className="text-[20px] font-black uppercase tracking-[0.24em] text-red-200/70">
              The Cost
            </p>

            <h2 className="mt-3 text-3xl font-black uppercase italic tracking-tight sm:text-4xl">
              The <span className="text-red-500">Cost</span> of Doing{" "}
              <span className="text-red-500">Nothing</span>
            </h2>

            <p className="mt-6 text-base leading-8 text-white/80">
              Every preventable incident carries long-term consequences across
              students, educators, and entire communities. The absence of
              coordinated safety systems does not reduce risk — it amplifies it.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-3 sm:items-stretch">
              <div className="flex h-full flex-col">
                <p className="text-lg font-bold text-white">Human Impact</p>

                <ul className="mt-3 flex flex-1 flex-col text-sm text-white/75">
                  <li className="mb-2">
                    • Lives at risk and trauma that lasts generations.
                  </li>
                  <li className="mb-2">• Long-term psychological harm</li>
                  <li className="mb-2">
                    • Lifelong medical and counseling needs
                  </li>
                  <li className="mb-2">
                    • Annual costs of school crime at about{" "}
                    <span className="relative font-bold text-white">
                      <span className="relative z-10  text-red-400">
                        $3.5B{" "}
                      </span>
                      <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-gradient-to-r from-red-500 via-red-400 to-transparent" />
                    </span>
                    dollars
                  </li>

                  <li className="mt-auto flex min-h-[140px]  border-t border-red-500/30 pt-3 text-base font-bold text-white text-center">
                    <span>
                      Non-fatal gunshot injuries on school campuses cost the
                      average victim
                      <br />
                      <span className="relative font-bold text-white">
                        <span className="relative z-10  text-red-400 text-xl">
                          about $100,000{" "}
                        </span>
                        <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-gradient-to-r from-red-500 via-red-400 to-transparent" />
                      </span>
                      {/* <span className="text-red-500 font-bold underline">
                        {" "}
                        about $100,000
                      </span> */}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex h-full flex-col">
                <p className="text-lg font-bold text-white">
                  Financial &amp; Institutional
                </p>

                <ul className="mt-3 flex flex-1 flex-col text-sm text-white/75">
                  <li className="mb-2">
                    • Legal liability, settlements, and rising insurance
                    premiums
                  </li>
                  <li className="mb-2">
                    • Over{" "}
                    <span className="relative font-bold text-white">
                      <span className="relative z-10  text-red-400">
                        $430M+{" "}
                      </span>
                      <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-gradient-to-r from-red-500 via-red-400 to-transparent" />
                    </span>
                    {/* <span className="text-red-500 font-bold underline">
                      $430M+
                    </span>{" "} */}
                    from property loss and damage in U.S. schools
                  </li>
                  <li className="mb-2">
                    •{" "}
                    <span className="relative font-bold text-white">
                      <span className="relative z-10  text-red-400">
                        $600+{" "}
                      </span>
                      <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-gradient-to-r from-red-500 via-red-400 to-transparent" />
                    </span>
                    {/* <span className="text-red-500 font-bold underline">
                      $600M+
                    </span>{" "} */}
                    annual cost from school-based crime across healthcare,
                    mental health services, lost productivity, and property
                    damage
                  </li>

                  <li className="mt-auto flex min-h-[140px] border-t border-red-500/30 pt-3 text-base font-bold text-white text-center">
                    <span>
                      Nearly{" "}
                      <span className="relative font-bold text-white">
                        <span className="relative z-10  text-red-400 text-xl">
                          $60 Million{" "}
                        </span>
                        <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-gradient-to-r from-red-500 via-red-400 to-transparent" />
                      </span>{" "}
                      a year from serious on-campus assaults and gunshot
                      injuries
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex h-full flex-col">
                <p className="text-lg font-bold text-white">
                  Educational Impact
                </p>

                <ul className="mt-3 flex flex-1 flex-col text-sm text-white/75">
                  <li className="mb-2">• Loss of instructional time</li>
                  <li className="mb-2">• School closures</li>
                  <li className="mb-2">• Disrupted academic continuity</li>
                  <li className="mb-2">
                    • Reduced graduation and lifetime earnings
                  </li>

                  <li className="mt-auto flex min-h-[140px] border-t border-red-500/30 pt-3 text-base font-bold text-white text-center">
                    <span>
                      Estimates about <br />
                      <span className="relative font-bold text-white">
                        <span className="relative z-10  text-red-400 text-xl">
                          $11 Trillion
                        </span>
                        <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-gradient-to-r from-red-500 via-red-400 to-transparent" />
                      </span>
                      <br />
                      in lost lifetime earnings
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          <StatusCircle />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="mt-16 border border-white/10 bg-white/[0.03] p-8 text-center">
          <p className="text-[11px] font-black uppercase tracking-[0.24em] text-white/45">
            Next Step
          </p>
          <h3 className="mt-3 text-3xl font-black uppercase italic tracking-tight sm:text-4xl">
            Ready to Expand the <span className="text-primary">Impact</span>?
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/70">
            Schools can request a safety assessment. Partners can help fund,
            scale, and strengthen measurable school protection outcomes.
          </p>
        </motion.div>
      </div>
      <div className="mt-10 flex justify-center">
        <PartnerCTA className=" max-w-md" />
      </div>
    </section>
  );
}
