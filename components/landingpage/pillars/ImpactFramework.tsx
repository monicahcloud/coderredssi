"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SchoolCTA } from "@/components/cta/SchoolCTA";

const pillars = [
  {
    badge: "/images/assesmentpillar.png",
    title: "Physical Assessments",
    image: "/images/hallwaymonitors.png",
    impact:
      "Physical assessments give district leaders a clear, prioritized roadmap for investment—what to fix first, what can wait, and what can be done at low or no cost. That clarity helps you justify funding, align stakeholders, and demonstrate due diligence to parents, boards, and insurers.",
    description:
      "Our Physical Assessment Program establishes a clear, objective understanding of a school’s current security posture. We conduct on-site evaluations to identify vulnerabilities, assess readiness, and document physical risks across campus facilities. Findings are translated into actionable insights that inform immediate improvements and long-term security planning.",
    purpose:
      "You can’t fix what you haven’t measured. A structured physical safety assessment reveals blind spots in campus layout, access control, and emergency readiness that are often invisible to day‑to‑day staff. By turning “we think we’re safe” into evidence‑based findings, schools can move from assumptions to action.",
    features: [
      "Infrastructure vulnerability audits",
      "Operational risk analysis",
      "Strategic action roadmaps",
      "Compliance benchmark analysis",
    ],
  },
  {
    badge: "/images/educationpillar.png",
    image: "/images/classroom.png",
    title: "Education",
    impact:
      "Education transforms safety from a one‑time initiative into a living culture. Ongoing training supports compliance with state requirements, aligns practices across campuses, and gives families visible proof that safety is more than a policy—it’s a priority. Well‑trained people also help protect the district’s reputation and reduce risk exposure.",
    description:
      "Our Education Program ensures that safety plans are not just written, but understood and executed under pressure. Through structured, role-based training, we equip teachers, staff, and students with the knowledge and confidence to respond effectively during emergencies. Instruction emphasizes clarity, repetition, and practical application to reduce confusion and improve outcomes.",
    purpose:
      "Even the best plans and tools fail if people don’t know what to do. Focused education for staff, students, and volunteers builds the muscle memory needed to respond quickly and calmly in a real emergency. Clear training reduces confusion, panic, and inconsistent responses that can cost precious seconds when it matters most.",
    features: [
      "Administrative readiness",
      "Student crisis training",
      "Stakeholder management",
      "Institutional proficiency training",
    ],
  },
  {
    badge: "/images/equipmentpillar.png",
    image: "/images/schoolcamera.png",
    title: "Equipment",
    impact:
      "Investing in modern safety equipment is a visible, measurable way to upgrade protection without redesigning entire buildings. It supports grant applications and funding requests by tying dollars to specific, high‑impact improvements, and it reassures parents, staff, and community partners that concrete steps are being taken to safeguard students.",
    purpose:
      "When a threat appears, the physical environment must immediately work in your favor. Purpose‑built safety equipment—such as reinforced door‑locking devices and barriers—creates instant layers of protection between students and potential harm. The right tools can turn ordinary classrooms into secure spaces in seconds.",
    description:
      "Our Equipment Program translates assessment findings and training plans into real-world capability. We oversee the coordinated deployment of physical security technologies to ensure systems are properly selected, integrated, and functional. The focus is not just on installing equipment, but on ensuring it operates as a unified, reliable security ecosystem.",
    features: [
      "Safety hardware support",
      "Resource distribution",
      "Integration guidance",
      "Procurement assistance",
    ],
  },
  {
    badge: "/images/reassesspillar.png",
    image: "/images/securityassessment.png",
    title: "Reassessment",
    impact:
      "Reassessments close the loop, turning safety into a continuous improvement cycle instead of a one‑and‑done project. They provide updated data to refine budgets, guide future investments, and show boards and community partners that funds are being used responsibly and effectively over time. This ongoing validation strengthens trust and supports long‑term sustainability for your safety initiatives.",
    description:
      "Our Reassessment Program ensures that security efforts remain effective over time. Through routine audits, post-incident reviews, and scheduled evaluations, we verify that systems, procedures, and training continue to function as intended. This ongoing process allows schools to adapt to changing environments, emerging threats, and operational lessons learned.",
    purpose:
      "Schools change, threats evolve, and people move on. What was “safe enough” last year may not be sufficient today. Regular reassessments ensure that plans, training, and equipment keep pace with new risks, new buildings, and new students. Without periodic check‑ups, even strong safety programs can quietly drift out of date.",
    features: [
      "Post-implementation audits",
      "After-action reviews",
      "Annual reassessment",
      "Continuous improvement planning",
    ],
  },
];

export default function ImpactFramework() {
  return (
    <section
      id="framework"
      className="relative overflow-hidden bg-white px-4 py-10 text-black sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[url('/images/concrete-texture.png')] bg-cover bg-center opacity-20" />

      <div className="relative mx-auto w-full max-w-[1800px]">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className=" flex flex-col text-left gap-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl pl-6 font-bold uppercase tracking-tight italic">
              FOUR <span className="text-primary">PILLARS</span> OF <br />
              <span className="text-primary">IMPACT</span>
            </h2>
          </div>
          <div className="max-w-md lg:mt-10">
            <p className="border-l border-primary/20 pl-6 text-xl font-medium leading-relaxed text-muted-foreground">
              Code Red converts philanthropic capital into measurable
              institutional infrastructure, ensuring long-term sustainability
              and student protection.
            </p>{" "}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map((pillar, idx) => (
            <Dialog key={pillar.title}>
              <DialogTrigger asChild>
                <motion.button
                  type="button"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="flip-card group relative w-full min-h-[280px] sm:min-h-[340px] md:min-h-[520px] lg:min-h-[560px] transition-all duration-300 md:hover:-translate-y-2 md:hover:shadow-[0_22px_50px_rgba(120,0,0,0.28)]">
                  <div className="relative h-full w-full [perspective:1200px] [-webkit-perspective:1200px]">
                    <div className="relative h-full w-full flip-card-inner">
                      {/* FRONT */}
                      <div className="flip-card-front absolute inset-0 flex h-full flex-col bg-linear-to-r from-[#7a0000] via-[#650101] to-[#a70000] p-4 sm:p-5 md:p-6">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.12),transparent_35%)]" />

                        <div className="relative z-10 flex flex-1 items-center justify-center pt-2 pb-2">
                          <Image
                            src={pillar.badge}
                            alt={pillar.title.replace("\n", " ")}
                            width={480}
                            height={480}
                            className="h-auto w-[62%] sm:w-[70%] md:w-[85%] max-w-[180px] sm:max-w-[240px] md:max-w-[420px] object-contain drop-shadow-[0_28px_40px_rgba(0,0,0,0.5)] transition-transform duration-300 md:group-hover:scale-[1.06]"
                          />
                        </div>

                        <div className="relative z-10 pt-2 sm:pt-3 md:pt-4">
                          <h3 className="whitespace-pre-line text-center text-2xl font-black italic leading-[0.95] tracking-tight text-white sm:text-3xl md:text-4xl">
                            {pillar.title}
                          </h3>
                        </div>

                        {/* Mobile helper text */}
                        <div className="relative z-10 mt-4 text-center text-[10px] font-bold uppercase tracking-[0.16em] text-white/70 md:hidden">
                          Tap to explore
                        </div>
                      </div>

                      {/* BACK - desktop only */}
                      <div className="flip-card-back absolute inset-0 hidden h-full flex-col justify-between overflow-y-auto bg-gradient-to-b from-[#1a0000] via-[#2b0000] to-[#000000] p-5 text-white md:flex">
                        <div className="min-h-full">
                          <div>
                            <h3 className="mb-4 text-2xl font-bold italic text-white">
                              {pillar.title.replace("\n", " ")}
                            </h3>

                            <p className="text-sm leading-relaxed text-white/80">
                              {pillar.description}
                            </p>
                          </div>

                          <div className="mt-6 text-xs uppercase tracking-[0.15em] text-red-400">
                            Click to explore →
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* GLOW SWEEP - desktop only */}
                  <div className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block">
                    <div className="absolute -left-[35%] top-0 h-full w-[30%] -skew-x-12 bg-gradient-to-r from-transparent via-white/18 to-transparent opacity-0 transition-all duration-700 ease-out group-hover:left-[115%] group-hover:opacity-100" />
                  </div>
                </motion.button>
              </DialogTrigger>

              <DialogContent className="max-h-[90vh] overflow-y-auto border-0 bg-transparent p-0 shadow-none max-w-4xl md:max-w-5xl">
                <div className="overflow-hidden border border-black/40 bg-[#f3efe9] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                  {/* TOP HERO PANEL */}
                  <div className="relative overflow-hidden bg-linear-to-r from-[#7a0000] via-[#650101] to-[#a70000] px-5 py-6 md:px-10 md:py-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.14),transparent_34%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.18))]" />

                    <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center border border-white/15 md:h-20 md:w-20">
                          <Image
                            src={pillar.badge}
                            alt={pillar.title.replace("\n", " ")}
                            width={72}
                            height={72}
                            className="h-12 w-12 object-contain drop-shadow-[0_10px_18px_rgba(0,0,0,0.35)] md:h-14 md:w-14"
                          />
                        </div>

                        <DialogHeader className="space-y-2 text-left">
                          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/70">
                            Pillar Overview
                          </p>

                          <DialogTitle className="whitespace-pre-line text-2xl font-black uppercase italic leading-[0.95] tracking-tight text-white sm:text-3xl md:text-5xl">
                            {pillar.title}
                          </DialogTitle>
                        </DialogHeader>
                      </div>
                    </div>
                  </div>

                  {/* BODY */}
                  <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
                    {/* LEFT COLUMN */}
                    <div className="px-5 py-5 md:border-r md:border-black/10 md:px-10 md:py-8">
                      <div className="mb-6">
                        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-primary">
                          Description
                        </p>

                        <div className="border border-black/10 bg-white px-4 py-4 md:px-5 md:py-5 shadow-[0_8px_24px_rgba(0,0,0,0.05)]">
                          <p className="text-sm leading-7 text-slate-800 md:text-base">
                            {pillar.description}
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.24em] text-primary">
                          Key Focus Areas
                        </p>
                        <div className="relative pl-8">
                          <div className="absolute left-[11px] top-1 bottom-1 w-px bg-slate-300" />

                          <div className="space-y-5">
                            {pillar.features.map((feature) => (
                              <div
                                key={feature}
                                className="relative flex items-start gap-4">
                                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
                                  ✓
                                </span>

                                <p className="text-sm leading-relaxed text-slate-800 md:text-[15px]">
                                  {feature}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>{" "}
                      <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-black/20 to-transparent" />
                      <div className="sm:mt-15 md:-mt-30 ">
                        {pillar.image && (
                          <div className=" overflow-hidden">
                            <div className="relative w-full h-[260px] sm:h-[320px] md:h-[420px] lg:h-[520px]">
                              <Image
                                src={pillar.image}
                                alt={pillar.title.replace("\n", " ")}
                                fill
                                className="object-contain opacity-95"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    {/* RIGHT COLUMN */}
                    <div className="bg-[#ece6df] px-5 py-5 md:px-8 md:py-8">
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-primary">
                        Strategic Impact
                      </p>

                      <div className="border border-primary/15 bg-primary/5 px-4 py-4 md:px-5 md:py-5">
                        <p className="text-sm leading-7 text-slate-900 md:text-[15px]">
                          {pillar.impact}
                        </p>
                      </div>

                      <p className="mt-6 mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-primary">
                        Why It Matters
                      </p>

                      <div className="border border-black/10 bg-white px-4 py-4 md:px-5 md:py-5">
                        <p className="text-sm leading-7 text-slate-700 md:text-[15px]">
                          {pillar.purpose}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <SchoolCTA className="w-full max-w-md" />
        </div>
      </div>
    </section>
  );
}
