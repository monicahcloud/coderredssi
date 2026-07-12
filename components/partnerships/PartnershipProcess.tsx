"use client";

import { trackEvent } from "@/lib/analytics";
import {
  ArrowRight,
  ClipboardList,
  Handshake,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: Handshake,
    step: "01",
    title: "Start the Conversation",
    description:
      "We discuss your partnership goals, preferred impact area, and the type of support you want to provide.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Align on Impact",
    description:
      "Together we identify the school, district, region, or initiative your support will help strengthen.",
  },
  {
    icon: ShieldCheck,
    step: "03",
    title: "Build the Partnership Plan",
    description:
      "Code Red outlines the support structure, visibility, reporting, and implementation pathway.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch and Report",
    description:
      "The partnership moves into action with ongoing updates, recognition, and measurable outcomes.",
  },
];

export default function PartnershipProcess() {
  return (
    <section className="bg-zinc-100 px-6 py-24 text-slate-950 md:px-10 xl:px-16 2xl:px-24">
      <div className="mx-auto w-full max-w-full">
        <div className="mb-10 max-w-4xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-red-600">
            Partnership Process
          </p>

          <h2 className="text-4xl font-heading font-bold tracking-tight sm:text-5xl lg:text-6xl">
            From Interest to Implementation
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Code Red keeps the process clear, practical, and mission-aligned so
            partners understand how their support becomes measurable school
            safety impact.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {steps.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.step}
                className="relative border border-slate-200 bg-white p-7 shadow-sm">
                <p className="text-6xl font-black text-red-100">{item.step}</p>

                <div className="mt-4 mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-600">
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-black text-slate-950">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-8  bg-black p-8 text-white sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-red-500">
                Ready to Begin?
              </p>
              <h3 className="mt-3 text-3xl font-black sm:text-4xl">
                Start with a partnership conversation.
              </h3>
            </div>

            <Link
              href="/contact?interest=partnership"
              onClick={() =>
                trackEvent("partnership_interest", {
                  location: "partnership_cta",
                })
              }
              className="inline-flex shrink-0 items-center justify-center rounded-xl bg-red-700 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-red-800">
              Contact Code Red
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
