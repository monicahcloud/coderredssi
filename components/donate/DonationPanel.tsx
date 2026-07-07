"use client";

import { useMemo, useState } from "react";

import {
  Shield,
  GraduationCap,
  ClipboardCheck,
  RefreshCcw,
  ArrowRight,
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";

type Frequency = "one-time" | "monthly";
type DonationAmount = 25 | 50 | 100 | 250 | 500 | 1000 | "custom";

const donationLinks = {
  "one-time": {
    25: process.env.NEXT_PUBLIC_STRIPE_25,
    50: process.env.NEXT_PUBLIC_STRIPE_50,
    100: process.env.NEXT_PUBLIC_STRIPE_100,
    250: process.env.NEXT_PUBLIC_STRIPE_250,
    custom: process.env.NEXT_PUBLIC_STRIPE_CUSTOM,
  },
  monthly: {
    25: process.env.NEXT_PUBLIC_STRIPE_MONTHLY_25,
    50: process.env.NEXT_PUBLIC_STRIPE_MONTHLY_50,
    100: process.env.NEXT_PUBLIC_STRIPE_MONTHLY_100,
    250: process.env.NEXT_PUBLIC_STRIPE_MONTHLY_250,
    custom: process.env.NEXT_PUBLIC_STRIPE_MONTHLY_CUSTOM,
  },
} as const;

const impactItems = [
  { icon: ClipboardCheck, text: "School Safety Assessments" },
  { icon: GraduationCap, text: "Preparedness Education" },
  { icon: Shield, text: "Emergency Planning Support" },
  { icon: RefreshCcw, text: "Continuous Safety Improvement" },
];

export default function DonationPanel() {
  const [frequency, setFrequency] = useState<Frequency>("one-time");
  const [selectedAmount, setSelectedAmount] = useState<DonationAmount>(100);
  const [customAmount, setCustomAmount] = useState(300);
  const amounts =
    frequency === "monthly"
      ? [
          { amount: 25, label: "$25/mo", name: "Supporter" },
          { amount: 50, label: "$50/mo", name: "Advocate" },
          { amount: 100, label: "$100/mo", name: "Champion" },
          { amount: 250, label: "$250/mo", name: "Guardian" },
        ]
      : [
          { amount: 25, label: "$25", name: "Supporter" },
          { amount: 50, label: "$50", name: "Advocate" },
          { amount: 100, label: "$100", name: "Champion" },
          { amount: 250, label: "$250", name: "Guardian" },
        ];

  const donateUrl = useMemo(() => {
    const links = donationLinks[frequency];

    if (selectedAmount === "custom") {
      return links.custom || "#";
    }

    return links[selectedAmount as keyof typeof links] || links.custom || "#";
  }, [frequency, selectedAmount]);

  const selectedLabel =
    selectedAmount === "custom"
      ? "Custom Amount"
      : amounts.find((item) => item.amount === selectedAmount)?.label ||
        `$${selectedAmount}`;

  const handleFrequencyChange = (nextFrequency: Frequency) => {
    setFrequency(nextFrequency);
    setSelectedAmount(nextFrequency === "monthly" ? 25 : 100);
  };

  const finalDonateUrl =
    selectedAmount === "custom"
      ? `/api/checkout/custom?amount=${customAmount}&frequency=${frequency}`
      : donateUrl;

  return (
    <section className="bg-white py-24">
      <div className="mx-auto w-full px-5 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-zinc-200 shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="bg-zinc-50 p-8 lg:p-12">
              <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-red-600">
                Your Impact
              </p>

              <h2 className="text-4xl font-black leading-tight text-black lg:text-5xl">
                Every Donation Helps Build
                <span className="block text-red-600">Safer Schools</span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-zinc-600">
                Your support helps schools strengthen preparedness, improve
                response readiness, and create safer learning environments for
                students, educators, and communities.
              </p>

              <div className="mt-10 space-y-4">
                {impactItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.text} className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-700">
                        <Icon className="h-5 w-5 text-white" />
                      </div>

                      <span className="font-semibold text-zinc-800">
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-12 rounded-2xl bg-black p-6 text-white">
                <p className="text-sm uppercase tracking-widest text-red-500">
                  Why It Matters
                </p>

                <p className="mt-3 text-lg font-semibold leading-8">
                  Every stakeholder has a role to play in creating safer
                  learning environments.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 lg:p-12">
              <p className="mb-8 text-sm font-black uppercase tracking-[0.25em] text-red-600">
                Make A Donation
              </p>

              <div className="mb-8 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handleFrequencyChange("one-time")}
                  className={`h-14 font-bold uppercase transition ${
                    frequency === "one-time"
                      ? "bg-red-700 text-white"
                      : "border border-zinc-300 bg-white text-zinc-600"
                  }`}>
                  One Time
                </button>

                <button
                  type="button"
                  onClick={() => handleFrequencyChange("monthly")}
                  className={`h-14 font-bold uppercase transition ${
                    frequency === "monthly"
                      ? "bg-red-700 text-white"
                      : "border border-zinc-300 bg-white text-zinc-600"
                  }`}>
                  Monthly
                </button>
              </div>

              <p className="mb-4 text-sm font-bold uppercase tracking-wider text-zinc-500">
                Select Donation Amount
              </p>

              <div className="grid grid-cols-2 gap-4">
                {amounts.map((item) => (
                  <button
                    key={item.amount}
                    type="button"
                    onClick={() =>
                      setSelectedAmount(item.amount as DonationAmount)
                    }
                    className={`min-h-20 border p-3 text-left transition ${
                      selectedAmount === item.amount
                        ? "border-red-700 bg-red-700 text-white"
                        : "border-zinc-300 bg-white text-zinc-800 hover:border-red-700"
                    }`}>
                    <span className="block text-2xl font-black text-center">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-xs font-bold uppercase tracking-widest text-center opacity-80">
                      {item.name}
                    </span>
                  </button>
                ))}

                {/* <button
                  type="button"
                  onClick={() => setSelectedAmount("custom")}
                  className={`col-span-2 h-16 border text-lg font-bold transition ${
                    selectedAmount === "custom"
                      ? "border-red-700 bg-red-700 text-white"
                      : "border-zinc-300 bg-white text-zinc-700 hover:border-red-700"
                  }`}>
                  Other Amount
                </button> */}
                <div
                  className={`col-span-2  border p-6 transition ${
                    selectedAmount === "custom"
                      ? "border-zinc-300 "
                      : "border-zinc-300 bg-white"
                  }`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                        Custom Donation
                      </p>

                      <h3 className="mt-1 text-4xl font-black text-red-700">
                        ${customAmount.toLocaleString()}
                      </h3>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedAmount("custom")}
                      className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                        selectedAmount === "custom"
                          ? "bg-red-700 text-white"
                          : "border border-zinc-300 bg-red-700 text-white"
                      }`}>
                      {selectedAmount === "custom" ? "Selected" : "Use Custom"}
                    </button>
                  </div>

                  <div className="mt-4 flex justify-between text-xs font-semibold text-zinc-500">
                    <span>$10</span>
                    <span>$10,000</span>
                  </div>

                  <input
                    type="range"
                    min={10}
                    max={10000}
                    step={10}
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(Number(e.target.value));
                      setSelectedAmount("custom");
                    }}
                    className="
      mt-4 w-full appearance-none bg-transparent
      [&::-webkit-slider-runnable-track]:h-2
      [&::-webkit-slider-runnable-track]:rounded-full
      [&::-webkit-slider-runnable-track]:bg-zinc-200
      [&::-webkit-slider-thumb]:-mt-2
      [&::-webkit-slider-thumb]:h-6
      [&::-webkit-slider-thumb]:w-6
      [&::-webkit-slider-thumb]:appearance-none
      [&::-webkit-slider-thumb]:rounded-full
      [&::-webkit-slider-thumb]:bg-red-700
      [&::-webkit-slider-thumb]:shadow-lg
    "
                  />
                </div>
              </div>

              <a
                href={finalDonateUrl}
                target={selectedAmount === "custom" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent("donation_click", {
                    location: "donation_panel",
                    frequency,
                    amount:
                      selectedAmount === "custom"
                        ? customAmount
                        : selectedAmount,
                  })
                }
                className="mt-10 flex h-16 w-full items-center justify-center bg-red-700 text-lg font-black uppercase tracking-[0.18em] text-white transition hover:bg-red-800">
                Donate{" "}
                {selectedAmount === "custom"
                  ? `$${customAmount.toLocaleString()}`
                  : selectedLabel}
                <ArrowRight className="ml-3 h-5 w-5" />
              </a>

              <p className="mt-6 text-center text-sm text-zinc-500">
                Secure payment processing powered by Stripe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
