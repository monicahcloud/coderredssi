"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const gapStories = [
  {
    title: "Security in Silos",
    description:
      "Physical security, emergency communications, and procedures are often purchased and managed separately.",
    image: "/images/gap1.png",
  },
  {
    title: "No Coordinated Ecosystem",
    description:
      "Safety plans, systems, people, and procedures are not always connected through one actively managed framework.",
    image: "/images/gap2.png",
  },
  {
    title: "Outdated, Untested Plans",
    description:
      "Emergency plans can sit in binders without the drills, repetition, and role clarity needed to work under pressure.",
    image: "/images/gap3.png",
  },
  {
    title: "Conflicting Vendor Advice",
    description:
      "Competing vendors and disconnected recommendations leave schools to coordinate a complex safety ecosystem alone.",
    image: "/images/gap4.png",
  },
] as const;

const cardPositions = ["xl:mt-0", "xl:mt-15", "xl:mt-0", "xl:mt-15"] as const;

const imageHeights = [
  "h-[310px] xl:h-[360px]",
  "h-[310px] xl:h-[360px]",
  "h-[310px] xl:h-[360px]",
  "h-[310px] xl:h-[360px]",
] as const;

export default function SchoolGap() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasSettled, setHasSettled] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timer = window.setTimeout(() => setHasSettled(true), 1200);
    return () => window.clearTimeout(timer);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="absolute left-0 top-0 h-24 w-64 rounded-br-3xl bg-red-700" />
      <div className="absolute -bottom-7 right-0 h-48 w-72 bg-red-700 [clip-path:polygon(100%_0,100%_100%,0_100%)]" />
      <div className="absolute -bottom-5 right-0 h-32 w-52 bg-slate-950 [clip-path:polygon(100%_0,100%_100%,0_100%)]" />

      <div className="relative mx-auto max-w-full pt-10 ">
        <div className="grid gap-7 xl:grid-cols-[minmax(320px,0.72fr)_minmax(0,2.28fr)] xl:items-start">
          <div className="relative z-10">
            <p className="text-sm font-black text-center uppercase tracking-[0.25em] text-red-700">
              The challenge
            </p>

            <h2 className="mt-3 max-w-4xl text-center text-5xl font-black leading-[0.9] tracking-tight text-slate-950 sm:text-6xl xl:text-6xl">
              <span className="text-red-700">“</span>The gap is not awareness.
              <span className="mt-3 block text-red-700">
                It is coordination.
              </span>
            </h2>
            <p className="mt-5 max-w-lg text-center text-lg font-semibold leading-6 text-slate-600">
              Schools understand the risk. What they often lack is one framework
              connecting assessment, training, technology, implementation, and
              long-term support.
            </p>
          </div>

          {/* Exactly four cards in one wide-screen row, with staggered offsets. */}
          <div className="grid min-w-0 gap-3 md:grid-cols-2 xl:grid-cols-4 -mt-10">
            {gapStories.map((story, index) => (
              <article
                key={story.title}
                className={`group/card min-w-0 transition-[opacity,transform] duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
                  isVisible
                    ? "translate-y-0 opacity-100 hover:-translate-y-3"
                    : "translate-y-16 opacity-0"
                } ${cardPositions[index] ?? ""}`}
                style={{
                  transitionDelay: hasSettled ? "0ms" : `${index * 140}ms`,
                }}>
                <div
                  className={`relative overflow-hidden rounded-[1.5rem] shadow-lg transition-[box-shadow,transform] duration-500 group-hover/card:shadow-2xl ${
                    imageHeights[index] ?? "h-[330px]"
                  }`}>
                  <Image
                    src={story.image}
                    alt={`${story.title} school safety challenge`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 18vw"
                    className="object-cover transition duration-700 ease-out group-hover/card:scale-110 group-hover/card:saturate-[1.08]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />
                  <div className="absolute inset-0 bg-red-700/0 transition-colors duration-500 group-hover/card:bg-red-700/10" />

                  <span className="absolute bottom-5 left-5 text-5xl font-black text-white/35 transition duration-500 group-hover/card:-translate-y-2 group-hover/card:text-white/80">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="px-1 pt-5 text-center transition-transform duration-500 group-hover/card:-translate-y-1">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-red-700">
                    Gap {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-xl font-black uppercase leading-tight text-slate-950 2xl:text-2xl">
                    {story.title}
                  </h3>
                  <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-600 2xl:text-base 2xl:leading-5">
                    {story.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
