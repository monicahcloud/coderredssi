"use client";

import Image from "next/image";
import { Eye, Target } from "lucide-react";

export default function AboutMissionVision() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 text-slate-950">
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-red-100 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-slate-100 blur-3xl" />

      <div className="relative mx-auto max-w-full px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 text-sm font-black uppercase tracking-[0.3em] text-red-600">
            Our Purpose
          </p>

          <h2 className="text-4xl font-black uppercase tracking-normal leading-15 sm:text-5xl md:text-6xl">
            More Than a Mission.
            <span className="block text-red-600">A Commitment.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-6 text-slate-600">
            Every recommendation, partnership, and solution is guided by one
            goal: helping schools create safer environments for students,
            educators, and communities.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Mission */}
          <article className="group overflow-hidden rounded-none border border-slate-200 bg-white shadow-xl shadow-slate-200/70">
            <div className="relative h-[320px] overflow-hidden sm:h-[420px]">
              <Image
                src="/images/donate-hero.png"
                alt="School safety professionals supporting students on campus"
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute left-6 top-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-700 text-white shadow-lg">
                <Target className="h-8 w-8" />
              </div>
            </div>

            <div className="p-8 sm:p-10">
              <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-red-600">
                Our Mission
              </p>

              <h3 className=" text-3xl font-black uppercase leading-tight sm:text-4xl">
                Prevent. Prepare. Respond.
              </h3>

              <div className="mt-5 h-1.5 w-32 bg-red-700" />

              <p className="mt-6 text-lg leading-8 text-slate-700">
                To help schools prevent, prepare for, and respond to security
                incidents through a coordinated security and emergency
                management framework that connects people, technology, training,
                and implementation into one sustainable solution.
              </p>
            </div>
          </article>

          {/* Vision */}
          <article className="group overflow-hidden rounded-none border border-slate-200 bg-white shadow-xl shadow-slate-200/70">
            <div className="relative h-[320px] overflow-hidden sm:h-[420px]">
              <Image
                src="/images/vision.png"
                alt="Students arriving safely at a modern school campus"
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute left-6 top-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg">
                <Eye className="h-8 w-8" />
              </div>
            </div>

            <div className="p-8 sm:p-10">
              <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-red-600">
                Our Vision
              </p>

              <h3 className=" text-3xl font-black uppercase leading-tight sm:text-4xl">
                Safer Schools. Stronger Communities.
              </h3>

              <div className="mt-5 h-1.5 w-32 bg-red-700" />

              <p className="mt-6 text-lg leading-8 text-slate-700">
                We envision a future where every K–12 campus has equal access to
                expertise, partnerships, technology, and coordinated support
                needed to create safe learning environments for every student
                and educator.
              </p>
            </div>
          </article>
        </div>

        <div className="mt-10 border border-red-100 bg-red-50 px-8 py-8 text-center">
          <p className="text-2xl font-black uppercase leading-tight text-slate-950 sm:text-3xl md:text-5xl">
            One Mission.
            <span className="text-red-600"> One Vision.</span>
            <span className="block">One Safer Future.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
