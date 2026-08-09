"use client";

import { useState } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  GraduationCap,
  RotateCcw,
  ShieldCheck,
  Target,
  UserRoundSearch,
  Users,
} from "lucide-react";

const iconMap = {
  "shield-check": ShieldCheck,
  "graduation-cap": GraduationCap,
  target: Target,
  users: Users,
} as const;

type BoardIconName = keyof typeof iconMap;

type BoardMember = {
  number: string;
  name: string;
  role: string;
  image: string;
  eyebrow: string;
  summary: string;
  bio: readonly string[];
  icon: BoardIconName;
  highlights: readonly string[];
  quote: string;
};

type BoardMemberCardProps = {
  member: BoardMember;
  isReversed?: boolean;
};

export default function BoardMemberCard({
  member,
  isReversed = false,
}: BoardMemberCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = iconMap[member.icon];

  return (
    <>
      {/* MOBILE FLIP CARD */}
      <article className="md:hidden">
        <button
          type="button"
          onClick={() => setIsFlipped((current) => !current)}
          aria-pressed={isFlipped}
          aria-label={
            isFlipped
              ? `Show photo of ${member.name}`
              : `Read biography for ${member.name}`
          }
          className="flip-card relative block h-[620px] w-full text-left">
          <div
            className={`flip-card-inner relative h-full w-full ${
              isFlipped ? "[transform:rotateY(180deg)]" : ""
            }`}>
            {/* FRONT: PORTRAIT */}
            <div className="flip-card-front absolute inset-0 overflow-hidden border border-slate-200 bg-slate-950 shadow-xl">
              <Image
                src={member.image}
                alt={`${member.name}, ${member.role}`}
                fill
                sizes="100vw"
                className="object-contain"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />

              <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center bg-red-700 text-white">
                <Icon className="h-6 w-6" />
              </div>

              {/* <span className="absolute right-5 top-5 text-6xl font-black leading-none text-white/25">
                {member.number}
              </span> */}

              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-red-500">
                  {member.role}
                </p>

                <h3 className="mt-2 text-4xl font-black uppercase leading-none text-white">
                  {member.name}
                </h3>

                <p className="mt-4 max-w-sm text-sm font-bold uppercase leading-6 tracking-[0.14em] text-white/75">
                  {member.eyebrow}
                </p>

                <div className="mt-6 flex items-center gap-3 border-t border-white/20 pt-5 text-xs font-black uppercase tracking-[0.2em] text-white">
                  <UserRoundSearch className="h-5 w-5 text-red-500" />
                  Tap to read biography
                </div>
              </div>
            </div>

            {/* BACK: BIOGRAPHY */}
            <div className="flip-card-back absolute inset-0 flex flex-col overflow-y-auto border border-red-700 bg-white p-6 text-slate-950 shadow-xl">
              <div className="flex items-start justify-between gap-5 border-b border-slate-200 pb-5">
                <div className="flex min-w-0 items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-red-700 text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-red-700">
                      {member.role}
                    </p>

                    <h3 className="mt-1 text-2xl font-black uppercase leading-tight">
                      {member.name}
                    </h3>
                  </div>
                </div>

                {/* <span className="text-5xl font-black leading-none text-slate-100">
                  {member.number}
                </span> */}
              </div>

              <p className="mt-5 text-lg font-black leading-7">
                {member.summary}
              </p>

              <div className="mt-5 space-y-4 text-sm leading-6 text-slate-600">
                {member.bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-6 grid gap-2">
                {member.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-3 border border-slate-200 bg-slate-50 p-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-700" />

                    <p className="text-xs font-bold leading-5 text-slate-700">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>

              <blockquote className="mt-6 border-l-4 border-red-700 bg-slate-950 p-4 text-sm font-bold leading-6 text-white">
                “{member.quote}”
              </blockquote>

              <div className="mt-6 flex items-center justify-center gap-3 border-t border-slate-200 pt-5 text-xs font-black uppercase tracking-[0.2em] text-red-700">
                <RotateCcw className="h-4 w-4" />
                Tap to return to photo
              </div>
            </div>
          </div>
        </button>
      </article>

      {/* TABLET / DESKTOP PROFILE */}
      <article
        className={`hidden overflow-hidden border border-slate-200 bg-white shadow-xl md:grid ${
          isReversed ? "lg:grid-cols-[62%_38%]" : "lg:grid-cols-[38%_62%]"
        }`}>
        {/* IMAGE SIDE */}
        <div
          className={`relative min-h-[580px] overflow-hidden bg-slate-950 ${
            isReversed ? "lg:order-2" : ""
          }`}>
          <Image
            src={member.image}
            alt={`${member.name}, ${member.role}`}
            fill
            sizes="(max-width: 1024px) 42vw, 38vw"
            className="object-contain"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-7">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-red-500">
                  {member.role}
                </p>

                <h3 className="mt-2 text-4xl font-black uppercase leading-none text-white">
                  {member.name}
                </h3>
              </div>

              {/* <span className="text-7xl font-black leading-none text-white/20">
                {member.number}
              </span> */}
            </div>
          </div>
        </div>

        {/* TEXT SIDE */}
        <div
          className={`flex flex-col p-7 lg:p-8 ${
            isReversed ? "lg:order-1" : ""
          }`}>
          <div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-red-700 text-white">
                <Icon className="h-6 w-6" />
              </div>

              <p className="text-sm font-black uppercase tracking-[0.18em] text-red-700">
                {member.eyebrow}
              </p>
            </div>

            <p className="mt-5 text-xl font-black leading-7 text-slate-950">
              {member.summary}
            </p>

            {/* Full biography */}
            <div className="mt-5 space-y-4 text-sm leading-6 text-slate-600">
              {member.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="mt-7">
            <div className="grid gap-2 sm:grid-cols-2">
              {member.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-3 border border-slate-200 bg-slate-50 p-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-700" />

                  <p className="text-xs font-bold leading-5 text-slate-700">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>

            <blockquote className="mt-4 border-l-4 border-red-700 bg-slate-950 p-4 text-sm font-bold leading-6 text-white">
              “{member.quote}”
            </blockquote>
          </div>
        </div>
      </article>
    </>
  );
}
