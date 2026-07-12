// app/about/board/page.tsx

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Landmark,
  Network,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

const boardMembers = [
  {
    number: "01",
    name: "James Hicks",
    role: "Chairman of the Board",
    image: "/images/board/james-hicks.jpg",
    eyebrow: "Security, Procurement & Strategy",
    summary:
      "James brings combat-tested security experience and more than a decade of procurement and contracting leadership to Code Red.",
    bio: [
      "Drawing on his service as a United States Air Force Security Forces Defender, including deployments to Iraq and the United Arab Emirates, James has firsthand experience protecting critical infrastructure and coordinating responses in high-threat environments.",
      "His career as a Procurement and Contracting Officer gives him a rare ability to connect real-world security needs with budgets, contracts, vendor evaluation, regulation, and long-term implementation.",
      "At Code Red, James focuses on developing practical, sustainable safety solutions that move schools beyond check-the-box compliance and toward executable plans designed to work under pressure.",
    ],
    icon: ShieldCheck,
    highlights: [
      "United States Air Force Security Forces veteran",
      "Department of Defense procurement experience",
      "Vendor, contract, and risk evaluation",
      "Student-first security planning",
    ],
    quote:
      "Every child and educator deserves to go home safe at the end of the day.",
  },
  {
    number: "02",
    name: "Cory Hebb",
    role: "Vice Chairman of the Board",
    image: "/images/board/cory-hebb.jpg",
    eyebrow: "Red Team Operations & Threat Assessment",
    summary:
      "Cory brings three decades of security experience, including advanced Red Team operations supporting national security organizations.",
    bio: [
      "Cory began his security career as a United States Air Force Security Forces Airman and served for 21 years across stateside assignments and multiple deployments.",
      "During his final posting, he spent nine years as a Red Team member for the Pentagon Force Protection Agency, helping assess and strengthen protection for one of the world’s most strategically significant facilities.",
      "He has also supported organizations including the CIA, DIA, and United States Capitol Police in developing and strengthening Red Team programs. Through Code Red, he now applies that expertise to help schools identify vulnerabilities before they become emergencies.",
    ],
    icon: Target,
    highlights: [
      "Three decades of security experience",
      "Pentagon Force Protection Agency Red Team",
      "Threat and vulnerability assessment",
      "School security resource advocacy",
    ],
    quote:
      "Peace of mind should never be a luxury for children or their parents.",
  },
  {
    number: "03",
    name: "Cory Walton Sr.",
    role: "Secretary",
    image: "/images/corywaltonsr.png",
    eyebrow: "Leadership, Governance & Execution",
    summary:
      "Cory brings more than 27 years of leadership, organizational strategy, and mission-focused execution experience.",
    bio: [
      "As CEO of MaxWork Consulting LLC, Cory specializes in leadership development, organizational transformation, and strategic execution.",
      "In his federal government leadership role, he provides enterprise-level oversight, supports resource allocation, strengthens workflows, and translates organizational strategy into measurable action.",
      "His leadership foundation was shaped by 23 years of service in the United States Army. At Code Red, he helps schools build stronger systems, clearer communication, and accountable structures that make safety a sustainable organizational capability.",
    ],
    icon: Users,
    highlights: [
      "Leadership and organizational strategy",
      "23-year United States Army veteran",
      "Federal enterprise operations",
      "Performance and accountability systems",
    ],
    quote:
      "Safety must become an organizational capability, not simply a written procedure.",
  },
];

const boardResponsibilities = [
  {
    title: "Mission Stewardship",
    text: "Protecting the purpose, values, and long-term direction of the organization.",
    icon: Landmark,
  },
  {
    title: "Strategic Oversight",
    text: "Guiding priorities, partnerships, programs, and responsible organizational growth.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Operational Accountability",
    text: "Ensuring decisions lead to measurable action, transparency, and sustainable impact.",
    icon: CheckCircle2,
  },
  {
    title: "Community Alignment",
    text: "Keeping the needs of students, educators, schools, and communities at the center.",
    icon: Network,
  },
];

export default function BoardPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      {/* Hero */}
      <section className="bg-red-700 px-6 py-10 text-white lg:px-10">
        <div className="mx-auto max-w-8xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-red-100">
            Leadership Commitment
          </p>

          <blockquote className="mt-4 text-4xl font-black uppercase leading-[1.05] sm:text-5xl lg:text-6xl">
            Every Decision We Make
            <span className="block text-slate-950">
              Is Measured By One Question.
            </span>
          </blockquote>

          <div className="mx-auto mt-6 max-w-6xl border-y border-white/20 py-6">
            <p className="text-2xl font-bold leading-8 text-white">
              <span className="text-slate-950">
                Does this make schools safer
              </span>{" "}
              for students, educators, and the communities they serve?
            </p>
          </div>
        </div>
      </section>

      {/* Board profiles */}
      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10 lg:py-10">
        <div className="mx-auto w-full">
          <div className="mb-8 max-w-full">
            <h1 className="text-5xl text-center font-black uppercase  text-red-700">
              Meet the Board
            </h1>

            <p className="mt-5 text-2xl font-black uppercase text-center sm:text-5xl lg:text-4xl">
              Proven Leaders.
              <span className=" text-red-700"> One Shared Responsibility.</span>
            </p>
          </div>

          <div className="space-y-12 lg:space-y-20">
            {boardMembers.map((member, index) => {
              const Icon = member.icon;
              const isReversed = index % 2 !== 0;

              return (
                <article
                  key={member.name}
                  className="grid overflow-hidden border border-slate-200 bg-white shadow-xl lg:grid-cols-2">
                  {/* Portrait */}
                  <div
                    className={`relative aspect-[4/5]" ${
                      isReversed ? "lg:order-2" : ""
                    }`}>
                    <Image
                      src={member.image}
                      alt={`${member.name}, ${member.role}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-contain"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-10">
                      <div className="flex items-end justify-between gap-6">
                        <div>
                          <p className="text-sm font-black uppercase tracking-[0.25em] text-red-500">
                            {member.role}
                          </p>

                          <h3 className="mt-2 text-4xl font-black uppercase leading-none text-white sm:text-5xl">
                            {member.name}
                          </h3>
                        </div>

                        <span className="text-7xl font-black leading-none text-white/20 sm:text-8xl">
                          {member.number}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Biography */}
                  <div
                    className={`flex flex-col justify-between p-7 sm:p-6 lg:p-6  ${
                      isReversed ? "lg:order-1" : ""
                    }`}>
                    <div>
                      <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-red-700 text-white">
                          <Icon className="h-7 w-7" />
                        </div>

                        <p className="text-sm font-black uppercase tracking-[0.2em] text-red-700">
                          {member.eyebrow}
                        </p>
                      </div>

                      <p className="mt-8 text-2xl font-black leading-9 text-slate-950">
                        {member.summary}
                      </p>

                      <div className="mt-8 space-y-5 text-base leading-7 text-slate-600">
                        {member.bio.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>

                    <div className="mt-10">
                      <div className="grid gap-3 sm:grid-cols-2">
                        {member.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="flex items-start gap-3 border border-slate-200 bg-slate-50 p-4">
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-red-700" />

                            <p className="text-sm font-bold leading-6 text-slate-700">
                              {highlight}
                            </p>
                          </div>
                        ))}
                      </div>

                      <blockquote className="mt-8 border-l-4 border-red-700 bg-slate-950 p-6 text-lg font-bold leading-8 text-white">
                        “{member.quote}”
                      </blockquote>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      {/* Board role */}
      <section className="border-b border-slate-200 bg-slate-50 px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto w-full">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-red-600">
                Governance With Purpose
              </p>

              <h2 className="mt-5 text-4xl font-black uppercase leading-tight sm:text-5xl">
                Leadership Beyond
                <span className="block text-red-700">The Board room.</span>
              </h2>
            </div>

            <div className="grid gap-px border border-slate-200 bg-slate-200 sm:grid-cols-2">
              {boardResponsibilities.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="group bg-white p-7 transition hover:bg-slate-950 sm:p-8">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-red-700 text-white">
                        <Icon className="h-6 w-6" />
                      </div>

                      <h3 className="text-xl font-black uppercase leading-tight transition group-hover:text-white">
                        {item.title}
                      </h3>
                    </div>

                    <p className="mt-5 leading-7 text-slate-600 transition group-hover:text-white/70">
                      {item.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* Shared commitment */}
      <section className="relative overflow-hidden bg-red-700 px-6 py-16 text-white sm:px-8 sm:py-20 lg:px-25 lg:py-20">
        <div className="absolute right-0 top-0 h-80 w-80 bg-black/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-72 w-72 bg-white/10 blur-3xl" />

        <div className="relative mx-auto grid w-full gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-16">
          <div>
            <h2 className="max-w-5xl text-4xl font-black uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Strong Governance.
              <span className="block text-slate-950">
                Safer School Communities.
              </span>
            </h2>

            <p className="mt-6 max-w-4xl text-base leading-7 text-red-50 sm:text-lg sm:leading-8">
              Every board decision is measured against the same standard:
              whether it strengthens protection, supports responsible execution,
              and advances safer learning environments for students and
              educators.
            </p>
          </div>

          <Link
            href="/#contact"
            className="group inline-flex min-h-16 w-full items-center justify-around gap-6 bg-white px-7 text-sm font-black uppercase tracking-[0.16em] text-red-700 transition hover:bg-slate-950 hover:text-white sm:w-auto sm:min-w-[280px]">
            <span>Connect With Code Red</span>

            <ArrowRight className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}
