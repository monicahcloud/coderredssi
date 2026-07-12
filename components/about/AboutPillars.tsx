"use client";

import Image from "next/image";
import {
  Camera,
  ClipboardCheck,
  GraduationCap,
  RefreshCw,
  ArrowRight,
} from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "Physical Assessments",
    icon: ClipboardCheck,
    image: "/images/assesmentpillar.png",
    text: "We evaluate campus vulnerabilities, establish security baselines, identify risks, and develop practical recommendations that strengthen physical preparedness.",
  },
  {
    number: "02",
    title: "Education",
    icon: GraduationCap,
    image: "/images/pillar-education.jpg",
    text: "Through role-based training, tabletop exercises, and realistic emergency drills, we help schools respond confidently during critical incidents.",
  },
  {
    number: "03",
    title: "Equipment",
    icon: Camera,
    image: "/images/pillar-equipment.jpg",
    text: "We coordinate security technologies including access control, surveillance, communications, and alerting systems so every component works together.",
  },
  {
    number: "04",
    title: "Reassessment",
    icon: RefreshCw,
    image: "/images/pillar-reassessment.jpg",
    text: "Through audits, reviews, annual evaluations, and continuous improvement, we help schools adapt as campuses, technologies, and threats evolve.",
  },
];

export default function AboutPillars() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-28">
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-red-100 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-slate-100 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-red-600">
              Our Four Pillars
            </p>

            <h2 className="max-w-4xl text-4xl font-black uppercase leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              A Continuous Framework for{" "}
              <span className="text-red-600">School Safety.</span>
            </h2>
          </div>

          <p className="max-w-3xl text-lg leading-8 text-slate-600 lg:justify-self-end">
            Code Red’s framework is built around four connected pillars that
            move schools from awareness to action, then into continuous
            improvement over time.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <article
                key={pillar.title}
                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/70 transition duration-300 hover:-translate-y-2">
                <div className="relative h-[280px] overflow-hidden">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute left-6 top-6 flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-700 text-white shadow-lg">
                      <Icon className="h-7 w-7" />
                    </div>

                    <span className="text-5xl font-black tracking-tight text-white/35">
                      {pillar.number}
                    </span>
                  </div>

                  <h3 className="absolute bottom-6 left-6 right-6 text-3xl font-black uppercase leading-tight text-white">
                    {pillar.title}
                  </h3>
                </div>

                <div className="p-8">
                  <p className="text-base leading-8 text-slate-700">
                    {pillar.text}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-red-600">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-16 rounded-[2rem] bg-slate-950 px-8 py-10 text-center text-white">
          <p className="mx-auto max-w-4xl text-2xl font-black uppercase leading-tight sm:text-3xl md:text-4xl">
            Assessment. Education. Equipment. Reassessment.
            <span className="block text-red-600">
              One cycle of continuous protection.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
