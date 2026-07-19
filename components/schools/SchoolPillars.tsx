"use client";

import Link from "next/link";
import { ArrowRight, Layers3 } from "lucide-react";

import { schoolPillars } from "./school-page-data";
import Image from "next/image";

const panelStyles = [
  {
    base: "bg-red-600",
    hover: "hover:bg-red-500 focus-visible:bg-red-500",
    initial: "left-0 w-[34%] z-40",
    expanded:
      "group-hover/stage:left-0 group-hover/stage:w-1/4 group-focus-within/stage:left-0 group-focus-within/stage:w-1/4",
  },
  {
    base: "bg-red-800",
    hover: "hover:bg-red-700 focus-visible:bg-red-700",
    initial: "left-[6%] w-[34%] z-30",
    expanded:
      "group-hover/stage:left-1/4 group-hover/stage:w-1/4 group-focus-within/stage:left-1/4 group-focus-within/stage:w-1/4",
  },
  {
    base: "bg-slate-800",
    hover: "hover:bg-slate-700 focus-visible:bg-slate-700",
    initial: "left-[12%] w-[34%] z-20",
    expanded:
      "group-hover/stage:left-1/2 group-hover/stage:w-1/4 group-focus-within/stage:left-1/2 group-focus-within/stage:w-1/4",
  },
  {
    base: "bg-slate-950",
    hover: "hover:bg-black focus-visible:bg-black",
    initial: "left-[18%] w-[82%] z-10",
    expanded:
      "group-hover/stage:left-3/4 group-hover/stage:w-1/4 group-focus-within/stage:left-3/4 group-focus-within/stage:w-1/4",
  },
] as const;

export default function SchoolPillars() {
  return (
    <section
      id="pillars"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-black to-red-950 px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-fulll">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">
              Our coordinated framework
            </p>
            <h2 className="mt-5 max-w-4xl text-4xl font-black sm:text-5xl lg:text-6xl">
              Four Pillars. One Safer School Strategy.
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-8 text-slate-600 lg:text-right">
            Hover over the layered framework to see how each pillar contributes
            to a safer, more prepared school.
          </p>
        </div>

        {/* Mobile and tablet: all links remain visible without hover */}
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:hidden">
          {schoolPillars.map((pillar, index) => {
            const style = panelStyles[index]!;

            return (
              <Link
                key={pillar.title}
                href={pillar.href}
                className={`group flex min-h-[340px] flex-col p-7 text-white transition ${style.base} ${style.hover}`}>
                <div className="flex h-14 w-14 items-center justify-center ">
                  <div className="relative h-24 w-24 shrink-0">
                    <Image
                      src={pillar.badge}
                      alt={`${pillar.title} pillar badge`}
                      fill
                      sizes="96px"
                      className="object-contain"
                    />
                  </div>
                  <span className="text-5xl font-black text-white/20">
                    {pillar.number}
                  </span>
                </div>

                <p className="mt-8 text-xs font-black uppercase tracking-[0.22em] text-white/65">
                  {pillar.shortTitle}
                </p>
                <h3 className="mt-2 text-3xl font-black">{pillar.title}</h3>
                <p className="mt-4 leading-7 text-white/75">
                  {pillar.description}
                </p>

                <span className="mt-auto flex items-center pt-7 text-sm font-black uppercase tracking-[0.14em]">
                  Explore this pillar
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
                </span>
              </Link>
            );
          })}
        </div>

        {/* Desktop: layered stack expands into four linked panels */}
        <div className="group/stage relative mt-14 hidden h-[620px] overflow-hidden bg-slate-950 shadow-2xl lg:block">
          {schoolPillars.map((pillar, index) => {
            const style = panelStyles[index]!;

            return (
              <Link
                key={pillar.title}
                href={pillar.href}
                aria-label={`Explore ${pillar.title}`}
                className={`group/panel absolute inset-y-0 overflow-hidden text-white outline-none transition-[left,width,background-color,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${style.base} ${style.hover} ${style.initial} ${style.expanded}`}
                style={{
                  clipPath:
                    index === schoolPillars.length - 1
                      ? "none"
                      : "polygon(0 0, calc(100% - 58px) 0, 100% 50%, calc(100% - 58px) 100%, 0 100%)",
                }}>
                {/* Layer number visible before expansion */}

                {/* Full tile content fades in after panels spread */}
                <div className="flex h-full min-w-[280px] flex-col px-7 py-9 opacity-0 transition-opacity delay-0 duration-200 group-hover/stage:opacity-100 group-hover/stage:delay-300 group-focus-within/stage:opacity-100 group-focus-within/stage:delay-300 xl:px-9">
                  <div className="flex items-start justify-between gap-4">
                    <div className="relative h-28 w-28 shrink-0 xl:h-32 xl:w-32">
                      <Image
                        src={pillar.badge}
                        alt={`${pillar.title} pillar badge`}
                        fill
                        sizes="128px"
                        className="object-contain transition-transform duration-500 group-hover/panel:scale-110"
                      />
                    </div>
                    {/* <span className="text-6xl font-black text-white/20">
                      {pillar.number}
                    </span> */}
                  </div>

                  <p className="mt-10 text-xs font-black uppercase tracking-[0.22em] text-white/65">
                    {pillar.shortTitle}
                  </p>
                  <h3 className="mt-3 text-3xl font-black leading-tight xl:text-4xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-6 leading-7 text-white/75">
                    {pillar.description}
                  </p>

                  <span className="mt-auto flex items-center border-t border-white/20 pt-6 text-sm font-black uppercase tracking-[0.14em]">
                    Explore
                    <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover/panel:translate-x-2" />
                  </span>
                </div>
              </Link>
            );
          })}

          {/* Initial message shown beside the stacked layers */}
          <div className="pointer-events-none absolute inset-y-0 right-0 z-50 flex w-[58%] items-center px-12 transition-all duration-300 group-hover/stage:translate-x-12 group-hover/stage:opacity-0 group-focus-within/stage:translate-x-12 group-focus-within/stage:opacity-0 xl:px-20">
            <div className="ml-auto max-w-2xl text-right">
              <div className="mb-7 ml-auto flex h-16 w-16 items-center justify-center bg-red-700 text-white">
                <Layers3 className="h-8 w-8" />
              </div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-red-400">
                One connected framework
              </p>
              <h3 className="mt-4 text-6xl font-black uppercase leading-[0.95] tracking-tight text-white xl:text-7xl">
                Four Pillars
                <span className="block text-red-600">Working Together.</span>
              </h3>
              <p className="ml-auto mt-6 max-w-xl text-lg leading-8 text-white/65">
                Move over the layered framework to reveal the four parts of the
                Code Red school safety strategy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
