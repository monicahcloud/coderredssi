"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SchoolCTA } from "@/components/cta/SchoolCTA";
import { PartnerCTA } from "@/components/cta/PartnerCTA";
import { School, Handshake, ArrowRight } from "lucide-react";

const audienceCards = [
  {
    id: "schools",
    eyebrow: "For Schools & Districts",
    title: "Move from fragmented safety efforts to a coordinated plan.",
    highlight: "coordinated plan",
    description:
      "We help schools assess current readiness, strengthen training, coordinate equipment, and build a more sustainable safety strategy over time.",
    bullets: [
      "Clear assessment of current safety posture",
      "Practical training for real-world scenarios",
      "Better coordination across plans, people, and tools",
      "Ongoing improvement instead of one-time fixes",
    ],
    icon: School,
    cta: <SchoolCTA className="w-full sm:w-auto" />,
  },
  {
    id: "partners",
    eyebrow: "For Partners & Supporters",
    title: "Support school safety through structured impact.",
    highlight: "structured impact",
    description:
      "We give partners a  framework to fund, support, and scale safety initiatives in ways that are accountable, and aligned with  school needs.",
    bullets: [
      "A structured model for meaningful support",
      "Visibility into where help is most needed",
      "Alignment with school operational priorities",
      "Measurable and scalable community impact",
    ],
    icon: Handshake,
    cta: <PartnerCTA className="w-full sm:w-auto" />,
  },
];

function highlightText(text: string, highlight: string) {
  if (!text.includes(highlight)) return text;

  const [before, after] = text.split(highlight);

  return (
    <>
      {before}
      <span className="text-primary italic">{highlight}</span>
      {after}
    </>
  );
}

export default function AudienceSplitSection() {
  return (
    <section
      id="audiences"
      className="relative overflow-hidden bg-[#09090f]/95 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-md">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.18),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.03),transparent)]" />
      </div>

      <div className="relative px-6 py-10 md:px-10 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-8xl ">
          <div className="relative mx-auto w-full max-w-[1800px]">
            <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className=" flex flex-col text-left gap-6">
                <h2 className="text-4xl font-bold uppercase tracking-tight italic sm:text-5xl md:text-6xl lg:text-7xl">
                  TWO PATHS <br />
                  <span className="text-primary">ONE MISSION</span>
                </h2>
              </div>
              <div className="max-w-md lg:mt-10">
                <p className="border-l border-white pl-6 text-xl font-medium leading-relaxed text-white">
                  Whether you are leading a school or supporting one, Code Red
                  SSI helps turn concern into coordinated action.
                </p>
              </div>
            </div>

            {/* subtle divider tying into cards */}
            <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2 max-w-8xl mx-auto">
          {audienceCards.map((card, idx) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.08 }}>
                <Card className="group relative overflow-hidden border border-white/10 bg-white/[0.03] text-white shadow-none transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/[0.05] hover:shadow-[0_25px_80px_rgba(0,0,0,0.35)] rounded-none">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.14),transparent_32%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <CardContent className="relative z-10 p-6 md:p-8">
                    <div className="mb-6 flex items-center justify-between gap-4">
                      <div className="flex h-14 w-14 items-center justify-center border border-white/10 bg-primary/15 transition-transform duration-300 group-hover:scale-105">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <p className="text-md font-semibold uppercase tracking-[0.18em] text-white/60">
                        {card.eyebrow}
                      </p>{" "}
                    </div>

                    <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                      {highlightText(card.title, card.highlight)}
                    </h3>

                    <p className="mt-4 text-base leading-7 text-white/75">
                      {card.description}
                    </p>

                    <div className="mt-6 space-y-3 text-sm text-white/80">
                      {card.bullets.map((bullet, bulletIdx) => (
                        <motion.div
                          key={bullet}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{ delay: 0.1 + bulletIdx * 0.05 }}
                          className="flex items-start gap-3">
                          <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-0.5" />
                          <span>{bullet}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-8 border-t border-white/10 pt-6">
                      {card.cta}
                    </div>
                  </CardContent>

                  <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute -left-[40%] top-0 h-full w-[24%] -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 blur-sm transition-all duration-700 ease-out group-hover:left-[120%] group-hover:opacity-100" />
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
