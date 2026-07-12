"use client";

import Image from "next/image";
import {
  ShieldCheck,
  BadgeCheck,
  Siren,
  LockKeyhole,
  SearchCheck,
  MonitorCheck,
  Users,
} from "lucide-react";

const expertise = [
  {
    title: "School Safety Officers",
    icon: ShieldCheck,
  },
  {
    title: " Law Enforcement Officers",
    icon: BadgeCheck,
  },
  {
    title: "Emergency Management Personnel",
    icon: Siren,
  },
  // {
  //   title: "Physical Security",
  //   icon: LockKeyhole,
  // },
  // {
  //   title: "Risk Assessment",
  //   icon: SearchCheck,
  // },
  {
    title: "Security Technology Leaders",
    icon: MonitorCheck,
  },
  // {
  //   title: "Public Safety Operations",
  //   icon: Users,
  // },
];

export default function AboutWhoWeAre() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-24 text-white">
      <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.22),transparent_35%)]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 bg-red-700/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-full px-10 items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        {/* LEFT CONTENT */}
        <div>
          <div className="mb-5 flex items-center gap-4">
            <div className="h-px w-14 bg-red-600" />
            <p className="text-sm font-black uppercase tracking-[0.3em] text-red-500">
              Who We Are
            </p>
          </div>

          <h2 className="max-w-2xl text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Security-first.
            <br />
            Execution-focused.
            <span className="block text-red-600">Practitioner-built.</span>
          </h2>

          <div className="mt-6 h-2 w-44 bg-red-700" />

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/75">
            Code Red Safer Schools Initiative is built by practitioners with
            real-world experience. Our framework is shaped by people who
            understand what schools face and what works when pressure is high.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {expertise.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group flex items-center gap-4 border border-white/10 bg-white/[0.03] px-4 py-4 transition hover:border-red-500/60 hover:bg-red-700/10">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-red-500/50 bg-black/40 text-red-500 transition group-hover:bg-red-700 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <p className="text-sm font-black uppercase tracking-[0.12em] text-white">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT IMAGE COLLAGE */}
        <div className="relative">
          <div className="absolute -left-10 top-0 hidden h-[100%] w-250 -skew-x-3 bg-red-700/80 lg:block" />

          <div className="relative grid gap-4">
            <div className="relative h-[360px] overflow-hidden border border-white/10 shadow-2xl sm:h-[430px]">
              <Image
                src="/images/securityassessment.png"
                alt="Code Red safety professionals reviewing a campus safety plan"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="relative h-36 overflow-hidden border border-white/10 sm:h-44">
                <Image
                  src="/images/partnership-hero.png"
                  alt="Emergency management professional outside a school"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative h-36 overflow-hidden border border-white/10 sm:h-44">
                <Image
                  src="/images/securitycameras.png"
                  alt="Security camera installed on a school campus"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative h-36 overflow-hidden border border-white/10 sm:h-44">
                <Image
                  src="/images/kidswalkingtoschool.png"
                  alt="Children walking to school"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="border border-white/10 bg-black/70 px-6 py-5 backdrop-blur">
              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-red-700">
                  <ShieldCheck className="h-7 w-7 text-white" />
                </div>

                <p className="text-base text-center font-semibold leading-7 text-white/85 sm:text-lg">
                  Real-world experience. Proven strategies.
                  <span className="block text-white">
                    One mission: safer schools.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
