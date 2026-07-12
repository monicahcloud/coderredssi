"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Check,
  CircleDollarSign,
  GraduationCap,
  HeartHandshake,
  Info,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { trackEvent } from "@/lib/analytics";

type Frequency = "one-time" | "monthly";
type DonationAmount = 25 | 50 | 100 | 250 | "custom";

type ImpactMetricId = "students" | "annual" | "investment" | "next-student";

const COST_PER_CHILD = 40;

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

const oneTimeAmounts = [
  { amount: 25, label: "$25", name: "Supporter" },
  { amount: 50, label: "$50", name: "Advocate" },
  { amount: 100, label: "$100", name: "Champion" },
  { amount: 250, label: "$250", name: "Guardian" },
] as const;

const monthlyAmounts = [
  { amount: 25, label: "$25/mo", name: "Supporter" },
  { amount: 50, label: "$50/mo", name: "Advocate" },
  { amount: 100, label: "$100/mo", name: "Champion" },
  { amount: 250, label: "$250/mo", name: "Guardian" },
] as const;

const metricDescriptions: Record<ImpactMetricId, string> = {
  students:
    "The estimated number of children directly supported by the selected donation.",
  annual:
    "The estimated number of children supported over 12 months. Monthly donations are multiplied by 12.",
  investment:
    "The amount currently selected for this donation. Monthly donations show the annual commitment.",
  "next-student":
    "The progress your donation has made toward supporting one additional child.",
};

export default function DonationPanel() {
  const [frequency, setFrequency] = useState<Frequency>("one-time");
  const [selectedAmount, setSelectedAmount] = useState<DonationAmount>(100);
  const [customAmount, setCustomAmount] = useState(300);
  const [activeMetric, setActiveMetric] = useState<ImpactMetricId>("students");

  const amounts = frequency === "monthly" ? monthlyAmounts : oneTimeAmounts;

  const donationValue =
    selectedAmount === "custom" ? customAmount : selectedAmount;

  const annualDonationValue =
    frequency === "monthly" ? donationValue * 12 : donationValue;

  const studentsSupported = Math.floor(donationValue / COST_PER_CHILD);

  const annualStudentsSupported = Math.floor(
    annualDonationValue / COST_PER_CHILD,
  );

  const amountAppliedToNextStudent = donationValue % COST_PER_CHILD;

  const nextStudentProgress =
    amountAppliedToNextStudent === 0 && donationValue >= COST_PER_CHILD
      ? 100
      : Math.round((amountAppliedToNextStudent / COST_PER_CHILD) * 100);

  const amountNeededForNextStudent =
    amountAppliedToNextStudent === 0
      ? 0
      : COST_PER_CHILD - amountAppliedToNextStudent;

  const impactMetrics = [
    {
      id: "students" as const,
      title: "Children Supported",
      value: studentsSupported.toLocaleString(),
      subtitle:
        studentsSupported === 1
          ? "1 child reached"
          : `${studentsSupported.toLocaleString()} children reached`,
      icon: Users,
    },
    {
      id: "annual" as const,
      title:
        frequency === "monthly"
          ? "Annual Child Impact"
          : "Projected Child Impact",
      value: annualStudentsSupported.toLocaleString(),
      subtitle:
        frequency === "monthly"
          ? "Based on 12 monthly donations"
          : "Based on this donation",
      icon: CalendarDays,
    },
    {
      id: "investment" as const,
      title:
        frequency === "monthly" ? "Annual Commitment" : "Selected Investment",
      value: `$${annualDonationValue.toLocaleString()}`,
      subtitle:
        frequency === "monthly"
          ? `$${donationValue.toLocaleString()} per month`
          : "One-time contribution",
      icon: CircleDollarSign,
    },
    {
      id: "next-student" as const,
      title: "Next Child Progress",
      value: `${nextStudentProgress}%`,
      subtitle:
        amountNeededForNextStudent === 0
          ? "A complete $40 impact unit"
          : `$${amountNeededForNextStudent} needed for the next child`,
      icon: GraduationCap,
    },
  ];

  const donateUrl = useMemo(() => {
    const links = donationLinks[frequency];

    if (selectedAmount === "custom") {
      return links.custom || "#";
    }

    return links[selectedAmount] || links.custom || "#";
  }, [frequency, selectedAmount]);

  const selectedLabel =
    selectedAmount === "custom"
      ? "Custom Amount"
      : amounts.find((item) => item.amount === selectedAmount)?.label ||
        `$${selectedAmount}`;

  const finalDonateUrl =
    selectedAmount === "custom"
      ? `/api/checkout/custom?amount=${customAmount}&frequency=${frequency}`
      : donateUrl;

  const handleFrequencyChange = (nextFrequency: Frequency) => {
    setFrequency(nextFrequency);
    setSelectedAmount(nextFrequency === "monthly" ? 25 : 100);
  };

  const updateCustomAmount = (amount: number) => {
    const safeAmount = Math.min(10000, Math.max(10, amount));

    setCustomAmount(safeAmount);
    setSelectedAmount("custom");
  };

  return (
    <section className="bg-white py-2 lg:py-5">
      <div className="mx-auto w-full max-w-full px-5 lg:px-5">
        <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-2xl">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            {/* Dynamic impact dashboard */}
            <div className="bg-zinc-50 p-6 sm:p-8 lg:p-12">
              <div className="max-w-5xl">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-red-600">
                  Your Gift. Real Change.
                </p>

                <h2 className="mt-4 text-4xl font-black leading-tight text-slate-950 lg:text-5xl">
                  See the Impact of
                  <span className="block text-red-700">Your Support</span>
                </h2>

                <p className="mt-5 text-base leading-7 text-zinc-600 lg:text-lg">
                  The impact dashboard updates automatically as you select a
                  donation amount.
                </p>
              </div>

              <div className="mt-9 flex flex-wrap items-end gap-2">
                <p className="text-2xl font-black text-slate-950 lg:text-3xl">
                  Your Impact at{" "}
                  <span className="text-red-700">
                    ${donationValue.toLocaleString()}
                    {frequency === "monthly" && (
                      <span className="text-lg">/mo</span>
                    )}
                  </span>
                </p>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {impactMetrics.map((metric) => {
                  const Icon = metric.icon;
                  const isActive = activeMetric === metric.id;

                  return (
                    <button
                      key={metric.id}
                      type="button"
                      onClick={() => setActiveMetric(metric.id)}
                      aria-pressed={isActive}
                      className="group text-left">
                      <Card
                        className={`h-full rounded-none border transition duration-300 ${
                          isActive
                            ? "border-red-600 bg-white shadow-xl ring-2 ring-red-600/10"
                            : "border-zinc-200 bg-white shadow-sm hover:-translate-y-1 hover:border-red-300 hover:shadow-lg"
                        }`}>
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between gap-4">
                            <div
                              className={`flex h-14 w-14 shrink-0 items-center justify-center  transition ${
                                isActive
                                  ? "bg-red-700 text-white"
                                  : "bg-red-50 text-red-700 group-hover:bg-red-700 group-hover:text-white"
                              }`}>
                              <Icon className="h-7 w-7" />
                            </div>

                            {isActive && (
                              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-red-700 text-white">
                                <Check className="h-4 w-4" />
                              </div>
                            )}
                          </div>

                          <p className="mt-5 text-sm font-bold text-zinc-600">
                            {metric.title}
                          </p>

                          <p className="mt-1 text-4xl font-black tracking-tight text-slate-950">
                            {metric.value}
                          </p>

                          <p className="mt-3 text-sm leading-6 text-zinc-500">
                            {metric.subtitle}
                          </p>

                          {metric.id === "next-student" && (
                            <Progress
                              value={nextStudentProgress}
                              className="mt-5 h-2.5 bg-zinc-200 [&>div]:bg-red-700"
                            />
                          )}
                        </CardContent>
                      </Card>
                    </button>
                  );
                })}
              </div>

              <div className="mt-5 border border-red-100 bg-red-50/70 p-5">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-700 text-white">
                    <Sparkles className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="font-black text-slate-950">
                      {
                        impactMetrics.find(
                          (metric) => metric.id === activeMetric,
                        )?.title
                      }
                    </p>

                    <p className="mt-1 text-sm leading-6 text-zinc-600">
                      {metricDescriptions[activeMetric]}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5  border border-zinc-200 bg-white p-5">
                <div className="flex items-start gap-4">
                  <Info className="mt-0.5 h-5 w-5 shrink-0 text-red-700" />

                  <div>
                    <p className="font-bold text-slate-950">
                      Temporary impact calculation
                    </p>

                    <p className="mt-1 text-sm leading-6 text-zinc-600">
                      The donation impact calculation currently uses{" "}
                      <strong>$40 per child</strong> as a temporary placeholder
                      until accurate program cost data is obtained.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-4  bg-slate-950 p-5 text-white">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-700">
                  <ShieldCheck className="h-6 w-6" />
                </div>

                <p className="text-sm leading-6 text-white/80">
                  Every contribution helps Code Red provide safer learning
                  environments for students, educators, and school communities.
                </p>
              </div>
            </div>

            {/* Donation controls */}
            <div className="bg-white p-6 sm:p-8 lg:p-12">
              <p className="mb-8 text-sm font-black uppercase tracking-[0.25em] text-red-600">
                Make A Donation
              </p>

              <div className="mb-8 grid grid-cols-2 gap-3">
                <Button
                  type="button"
                  onClick={() => handleFrequencyChange("one-time")}
                  className={`h-14 rounded-none font-bold uppercase ${
                    frequency === "one-time"
                      ? "bg-red-700 text-white hover:bg-red-800"
                      : "border border-zinc-300 bg-white text-zinc-600 hover:border-red-700 hover:bg-red-50 hover:text-red-700"
                  }`}>
                  One Time
                </Button>

                <Button
                  type="button"
                  onClick={() => handleFrequencyChange("monthly")}
                  className={`h-14 rounded-none font-bold uppercase ${
                    frequency === "monthly"
                      ? "bg-red-700 text-white hover:bg-red-800"
                      : "border border-zinc-300 bg-white text-zinc-600 hover:border-red-700 hover:bg-red-50 hover:text-red-700"
                  }`}>
                  Monthly
                </Button>
              </div>

              <p className="mb-4 text-sm font-bold uppercase tracking-wider text-zinc-500">
                Select Donation Amount
              </p>

              <div className="grid grid-cols-2 gap-4">
                {amounts.map((item) => {
                  const isSelected = selectedAmount === item.amount;

                  return (
                    <button
                      key={item.amount}
                      type="button"
                      onClick={() => setSelectedAmount(item.amount)}
                      className={`min-h-20 border p-3 text-left transition ${
                        isSelected
                          ? "border-red-700 bg-red-700 text-white shadow-lg"
                          : "border-zinc-300 bg-white text-zinc-800 hover:border-red-700"
                      }`}>
                      <span className="block text-center text-2xl font-black">
                        {item.label}
                      </span>

                      <span className="mt-1 block text-center text-xs font-bold uppercase tracking-widest opacity-80">
                        {item.name}
                      </span>
                    </button>
                  );
                })}

                <div
                  className={`col-span-2 border p-6 transition ${
                    selectedAmount === "custom"
                      ? "border-red-700 bg-red-50/40"
                      : "border-zinc-300 bg-white"
                  }`}>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                        Custom Donation
                      </p>

                      <h3 className="mt-1 text-4xl font-black text-red-700">
                        ${customAmount.toLocaleString()}
                      </h3>
                    </div>

                    <Button
                      type="button"
                      onClick={() => setSelectedAmount("custom")}
                      className="rounded-full bg-red-700 px-5 font-bold text-white hover:bg-red-800">
                      {selectedAmount === "custom" ? "Selected" : "Use Custom"}
                    </Button>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => updateCustomAmount(customAmount - 10)}
                      aria-label="Decrease custom donation"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-red-700 text-2xl font-bold text-white transition hover:bg-red-800">
                      −
                    </button>

                    <p className="text-sm font-bold text-zinc-600">
                      Choose your amount
                    </p>

                    <button
                      type="button"
                      onClick={() => updateCustomAmount(customAmount + 10)}
                      aria-label="Increase custom donation"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-red-700 text-2xl font-bold text-white transition hover:bg-red-800">
                      +
                    </button>
                  </div>

                  <div className="mt-5 flex justify-between text-xs font-semibold text-zinc-500">
                    <span>$10</span>
                    <span>$10,000</span>
                  </div>

                  <input
                    type="range"
                    min={10}
                    max={10000}
                    step={10}
                    value={customAmount}
                    aria-label="Custom donation amount"
                    onChange={(event) =>
                      updateCustomAmount(Number(event.target.value))
                    }
                    className="
                      mt-4 w-full cursor-pointer appearance-none bg-transparent
                      [&::-webkit-slider-runnable-track]:h-2
                      [&::-webkit-slider-runnable-track]:rounded-full
                      [&::-webkit-slider-runnable-track]:bg-zinc-200
                      [&::-webkit-slider-thumb]:-mt-2
                      [&::-webkit-slider-thumb]:h-6
                      [&::-webkit-slider-thumb]:w-6
                      [&::-webkit-slider-thumb]:appearance-none
                      [&::-webkit-slider-thumb]:rounded-full
                      [&::-webkit-slider-thumb]:border-4
                      [&::-webkit-slider-thumb]:border-white
                      [&::-webkit-slider-thumb]:bg-red-700
                      [&::-webkit-slider-thumb]:shadow-lg
                      [&::-moz-range-progress]:h-2
                      [&::-moz-range-progress]:rounded-full
                      [&::-moz-range-progress]:bg-red-700
                      [&::-moz-range-track]:h-2
                      [&::-moz-range-track]:rounded-full
                      [&::-moz-range-track]:bg-zinc-200
                      [&::-moz-range-thumb]:h-6
                      [&::-moz-range-thumb]:w-6
                      [&::-moz-range-thumb]:rounded-full
                      [&::-moz-range-thumb]:border-4
                      [&::-moz-range-thumb]:border-white
                      [&::-moz-range-thumb]:bg-red-700
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
                    amount: donationValue,
                    estimatedChildren: studentsSupported,
                    costPerChild: COST_PER_CHILD,
                  })
                }
                className="mt-10 flex min-h-16 w-full items-center justify-center bg-red-700 px-5 text-center text-base font-black uppercase tracking-[0.14em] text-white transition hover:bg-red-800 sm:text-lg sm:tracking-[0.18em]">
                <HeartHandshake className="mr-3 h-5 w-5" />
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
