"use client";

import Image from "next/image";
import { Network, ShieldAlert, ShieldCheck } from "lucide-react";

const storyCards = [
  {
    title: "The Challenge",
    description:
      "Schools face increasing threats while navigating fragmented vendors, aging systems, and limited resources.",
    icon: ShieldAlert,
  },
  {
    title: "The Gap",
    description:
      "Cameras, training, emergency plans, and technology often operate independently instead of as one coordinated ecosystem.",
    icon: Network,
  },
  {
    title: "Our Solution",
    description:
      "Code Red coordinates trusted partners, proven technologies, and execution into one unified framework for safer schools.",
    icon: ShieldCheck,
  },
];

export default function AboutStory() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Decorative red block */}
      <div className="absolute left-0 top-10 hidden h-[420px] w-40 bg-red-700 md:block lg:w-56 xl:w-72" />

      <div className="relative mx-auto w-full">
        {/* Main story layout */}
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16 xl:gap-24">
          {/* Images */}
          <div className="relative min-w-0 px-5 sm:px-8 lg:pl-0 lg:pr-4">
            <div className="relative ml-auto h-[360px] w-full overflow-hidden shadow-2xl sm:h-[460px] lg:h-[520px] lg:w-[82%] xl:h-[560px] xl:w-[76%]">
              <div className="relative h-[360px] w-full overflow-hidden shadow-2xl sm:h-[460px] lg:h-[520px] lg:w-[100%] xl:h-[560px] xl:w-[100%]">
                <Image
                  src="/images/about-story.png"
                  alt="Students arriving at school"
                  fill
                  priority
                  sizes="(max-width: 1440px) 100vw, 38vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="relative -mt-10 ml-auto h-44 w-[72%] overflow-hidden border-4 border-white shadow-xl sm:h-56 sm:w-[62%] lg:absolute lg:-bottom-12 lg:right-0 lg:mt-0 lg:h-52 lg:w-[58%] xl:h-60 xl:w-[50%]">
              <Image
                src="/images/meetingoftheminds.png"
                alt="School safety planning"
                fill
                sizes="(max-width: 1024px) 70vw, 28vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="px-6 sm:px-8 lg:pr-10 xl:pr-16">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-red-600">
              Our Story
            </p>

            <h2 className="max-w-2xl text-4xl font-black uppercase leading-[1.05] text-slate-950 sm:text-5xl xl:text-6xl">
              Why Code Red Was Created
            </h2>

            <div className="mt-6 h-2 w-28 bg-red-700 sm:w-40" />

            <div className="mt-8 max-w-3xl space-y-5 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
              <p>
                Schools across America are facing increasing security
                challenges. Administrators are expected to protect students and
                staff while navigating vendors, evolving threats, limited
                budgets, changing regulations, and disconnected security
                systems.
              </p>

              <p>
                Too often, schools are forced to manage security in pieces. One
                company installs cameras. Another provides access control.
                Someone else conducts training. Emergency plans are written once
                and forgotten.
              </p>

              <p className="border-l-4 border-red-700 pl-5 text-lg font-bold text-slate-950 sm:text-xl">
                Code Red was founded to change that.
              </p>

              <p>
                Instead of adding another product, we became the organization
                that coordinates everything—bringing together planning, people,
                technology, implementation, and continuous improvement into one
                security framework schools can actually execute.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="mt-20 grid gap-6 px-6 sm:px-8 md:grid-cols-2 lg:mt-24 lg:grid-cols-3 lg:px-10">
          {storyCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="border border-slate-200 bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-8">
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-red-700 text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-black uppercase leading-tight text-slate-950 sm:text-2xl">
                    {card.title}
                  </h3>
                </div>

                <p className="leading-7 text-slate-600">{card.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
