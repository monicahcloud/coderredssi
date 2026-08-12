"use client";

import { useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CircleDollarSign,
  GraduationCap,
  HeartHandshake,
  Info,
  ShieldCheck,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";

type Frequency = "one-time" | "monthly";
type DonationAmount = 25 | 50 | 100 | 250 | "custom";

const COST_PER_CHILD = 40;
const MIN_DONATION = 10;
const MAX_DONATION = 10_000;

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

type ImpactCardProps = {
  label: string;
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
  activeCount: number;
  totalIcons?: number;
  footLeft: string;
  progress?: number;
  visual?: "icons" | "gift-summary" | "next-child";
  completedChildren?: number;
  amountRemaining?: number;
  frequency?: Frequency;
  donationAmount?: number;
  annualCommitment?: number;
};

function ImpactCard({
  label,
  title,
  value,
  description,
  icon: Icon,
  activeCount,
  totalIcons = 40,
  footLeft,
  progress,
  visual = "icons",
  completedChildren = 0,
  amountRemaining = 0,
  frequency,
  donationAmount = 0,
  annualCommitment = 0,
}: ImpactCardProps) {
  const safeActiveCount = Math.min(
    totalIcons,
    Math.max(0, Math.round(activeCount)),
  );

  return (
    <article className="relative isolate flex min-h-[540px] flex-col overflow-hidden rounded-[1.75rem] bg-[#111219] p-6 text-white shadow-xl sm:p-7">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-20 -z-10 h-64 w-64 rounded-full bg-red-700/30 blur-3xl"
      />

      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-red-300">
            {label}
          </p>
          <h3 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
            {title}
          </h3>
        </div>

        <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-red-700">
          <Icon className="h-6 w-6" strokeWidth={2} />
        </div>
      </div>

      <p className="mt-5 text-4xl font-black leading-none tracking-tight sm:text-5xl">
        {value}
      </p>

      <p className="mt-5 text-sm leading-6 text-white/75">{description}</p>

      <div className="mt-auto pt-7">
        {visual === "gift-summary" && frequency ? (
          <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.06] p-5">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-white/55">
              Gift details
            </p>

            <div className="mt-5 space-y-4">
              <div className="flex items-end justify-between gap-4 border-b border-white/10 pb-4">
                <p className="text-sm font-bold text-white/55">Frequency</p>
                <p className="text-xl font-black">
                  {frequency === "monthly" ? "Monthly" : "One time"}
                </p>
              </div>

              <div className="flex items-end justify-between gap-4 border-b border-white/10 pb-4">
                <p className="text-sm font-bold text-white/55">
                  {frequency === "monthly" ? "Monthly amount" : "Gift amount"}
                </p>
                <p className="text-xl font-black">
                  ${donationAmount.toLocaleString()}
                </p>
              </div>

              {frequency === "monthly" && (
                <div className="flex items-end justify-between gap-4 border-b border-white/10 pb-4">
                  <p className="text-sm font-bold text-white/55">
                    Annual commitment
                  </p>
                  <p className="text-xl font-black text-red-400">
                    ${annualCommitment.toLocaleString()}
                  </p>
                </div>
              )}

              <div className="flex items-end justify-between gap-4">
                <p className="text-sm font-bold text-white/55">
                  Estimated children impacted
                </p>
                <p className="text-xl font-black">
                  {completedChildren.toLocaleString()}
                </p>
              </div>
            </div>

            <div className="mt-5 border-l-4 border-red-600 bg-black/20 p-4">
              <p className="text-sm leading-6 text-white/65">
                {frequency === "monthly"
                  ? "Impact is calculated using the full 12-month commitment."
                  : "This contribution will be processed as a single gift."}
              </p>
            </div>
          </div>
        ) : visual === "next-child" && typeof progress === "number" ? (
          <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.06] p-5">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-white/55">
              Progress toward the next child
            </p>

            <div className="mt-5 grid items-center gap-6 sm:grid-cols-[140px_1fr]">
              <div
                className="relative mx-auto flex h-32 w-32 items-center justify-center rounded-full"
                style={{
                  background: `conic-gradient(#dc2626 ${progress * 3.6}deg, rgba(255,255,255,0.1) 0deg)`,
                }}>
                <div className="flex h-[104px] w-[104px] flex-col items-center justify-center rounded-full bg-[#1b1c23]">
                  <span className="text-3xl font-black">{progress}%</span>
                  <span className="mt-1 text-[10px] font-bold uppercase tracking-wider text-white/50">
                    of $40
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="border-b border-white/10 pb-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-white/45">
                    Already impacted
                  </p>
                  <p className="mt-1 text-2xl font-black">
                    {completedChildren.toLocaleString()}{" "}
                    {completedChildren === 1 ? "child" : "children"}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white/45">
                    Still needed
                  </p>
                  <p className="mt-1 text-2xl font-black text-red-400">
                    ${amountRemaining.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-red-600 transition-[width] duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p className="mt-3 text-xs font-bold text-white/55">
              ${amountRemaining.toLocaleString()} more to complete the next
              estimated child-impact unit.
            </p>
          </div>
        ) : (
          <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.06] p-4">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.14em] text-white/55">
              Children impacted
            </p>

            <div className="grid grid-cols-8 gap-2">
              {Array.from({ length: totalIcons }, (_, index) => (
                <div
                  key={index}
                  className={`flex aspect-square items-center justify-center rounded-lg border transition-colors duration-300 ${
                    index < safeActiveCount
                      ? "border-red-500 bg-red-600 text-white shadow-[0_0_16px_rgba(220,38,38,0.25)]"
                      : "border-white/15 text-white/25"
                  }`}>
                  <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between gap-4 text-xs font-bold text-white/60">
              <span>{footLeft}</span>
              <span className="shrink-0">
                {safeActiveCount} of {totalIcons}
              </span>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

export default function DonationPanel() {
  const [frequency, setFrequency] = useState<Frequency>("one-time");
  const [selectedAmount, setSelectedAmount] = useState<DonationAmount>(100);
  const [customAmount, setCustomAmount] = useState(300);

  const amounts = frequency === "monthly" ? monthlyAmounts : oneTimeAmounts;

  const donationValue =
    selectedAmount === "custom" ? customAmount : selectedAmount;

  const annualDonationValue =
    frequency === "monthly" ? donationValue * 12 : donationValue;

  // Monthly selections show their full 12-month impact.
  const impactDonationValue =
    frequency === "monthly" ? annualDonationValue : donationValue;

  const childrenImpacted = Math.floor(impactDonationValue / COST_PER_CHILD);

  const amountAppliedToNextStudent = impactDonationValue % COST_PER_CHILD;

  const nextStudentProgress = Math.round(
    (amountAppliedToNextStudent / COST_PER_CHILD) * 100,
  );

  const amountNeededForNextStudent =
    amountAppliedToNextStudent === 0
      ? COST_PER_CHILD
      : COST_PER_CHILD - amountAppliedToNextStudent;

  const impactMetrics: Array<ImpactCardProps & { id: string }> = [
    {
      id: "children",
      label: frequency === "monthly" ? "Annual Reach" : "Direct Reach",
      title: "Children Impacted",
      value: childrenImpacted.toLocaleString(),
      description:
        frequency === "monthly"
          ? `Estimated annual impact created by 12 monthly gifts of $${donationValue.toLocaleString()}.`
          : "Estimated child impact created by the selected one-time donation.",
      icon: Users,
      activeCount: childrenImpacted,
      footLeft: "1 icon represents 1 child impacted",
    },
    {
      id: "gift-summary",
      label: "Your Contribution",
      title: "Gift Summary",
      value:
        frequency === "monthly"
          ? `$${donationValue.toLocaleString()}/mo`
          : `$${donationValue.toLocaleString()}`,
      description:
        frequency === "monthly"
          ? `A $${donationValue.toLocaleString()} monthly gift creates a $${annualDonationValue.toLocaleString()} annual commitment.`
          : "A clear summary of your selected one-time contribution and its estimated impact.",
      icon: CircleDollarSign,
      activeCount: 0,
      footLeft: "",
      visual: "gift-summary" as const,
      frequency,
      donationAmount: donationValue,
      annualCommitment: annualDonationValue,
      completedChildren: childrenImpacted,
    },
    {
      id: "next-child",
      label: "Next Impact Unit",
      title: "Next Child Progress",
      value: `${nextStudentProgress}%`,
      description: `${childrenImpacted.toLocaleString()} ${childrenImpacted === 1 ? "child has" : "children have"} already been impacted. The remaining amount is progress toward the next child.`,
      icon: GraduationCap,
      activeCount: Math.round((nextStudentProgress / 100) * 40),
      footLeft: `${childrenImpacted.toLocaleString()} already impacted`,
      progress: nextStudentProgress,
      visual: "next-child" as const,
      completedChildren: childrenImpacted,
      amountRemaining: amountNeededForNextStudent,
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
    const safeAmount = Math.min(MAX_DONATION, Math.max(MIN_DONATION, amount));

    setCustomAmount(safeAmount);
    setSelectedAmount("custom");
  };

  return (
    <section className="bg-white py-2 lg:py-5">
      <div className="mx-auto w-full max-w-full px-5 lg:px-5">
        <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-2xl">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            {/* Dynamic impact dashboard */}
            <div className="order-2 bg-zinc-50 p-6 sm:p-8 lg:order-1 lg:p-12">
              <div className="max-w-5xl">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-red-600">
                  Your Gift. Real Change.
                </p>
                <h2 className="mt-4 flex flex-wrap gap-x-2 text-4xl font-black leading-tight text-slate-950 lg:text-5xl">
                  <span>See the Impact of</span>
                  <span className="text-red-700">Your Support</span>
                </h2>
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Your generous contribution helps Code Red Safer Schools
                  Initiative, Inc. provide professional school security
                  assessments, emergency preparedness training, and
                  risk-mitigation guidance at no cost to K–12 schools across the
                  country.
                </p>{" "}
                <p className="mt-2 text-base leading-7 text-zinc-600 lg:text-lg">
                  The impact dashboard updates automatically as you select a
                  donation amount.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-end gap-2">
                <p className="text-2xl font-black text-slate-950 lg:text-3xl">
                  {frequency === "monthly"
                    ? "Your Annual Impact at "
                    : "Your Impact at "}
                  <span className="text-red-700">
                    ${donationValue.toLocaleString()}
                    {frequency === "monthly" && (
                      <span className="text-lg">/mo</span>
                    )}
                  </span>
                </p>
              </div>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                {impactMetrics.map((metric) => (
                  <div
                    key={metric.id}
                    className={
                      metric.id === "next-child" ? "sm:col-span-2" : undefined
                    }>
                    <ImpactCard
                      label={metric.label}
                      title={metric.title}
                      value={metric.value}
                      description={metric.description}
                      icon={metric.icon}
                      activeCount={metric.activeCount}
                      footLeft={metric.footLeft}
                      progress={metric.progress}
                      visual={metric.visual}
                      completedChildren={metric.completedChildren}
                      amountRemaining={metric.amountRemaining}
                      frequency={metric.frequency}
                      donationAmount={metric.donationAmount}
                      annualCommitment={metric.annualCommitment}
                    />
                  </div>
                ))}
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

              <div className="mx-auto max-w-5xl">
                <p className="mt-8 text-xl font-bold leading-8 text-slate-950">
                  Thank you for helping us create safer learning environments
                  for students and educators.
                </p>
              </div>
            </div>

            {/* Donation controls */}
            <div className="order-1 bg-white p-6 sm:p-8 lg:order-2 lg:p-12">
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

                <div className="col-span-2 border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
                  <div className="border border-red-200 bg-white p-6">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                        Selected donation amount
                      </p>

                      <h3 className="mt-2 text-5xl font-black tracking-tight text-red-700">
                        ${donationValue.toLocaleString()}
                        {frequency === "monthly" && (
                          <span className="ml-1 text-lg text-zinc-500">
                            /month
                          </span>
                        )}
                      </h3>
                    </div>

                    <div className="mt-4 flex justify-between text-xs font-bold text-zinc-500">
                      <span>$10 minimum</span>
                      <span>$10,000 maximum</span>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => updateCustomAmount(donationValue - 10)}
                      aria-label="Decrease custom donation"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-red-700 text-2xl font-bold text-white transition hover:bg-red-800">
                      −
                    </button>

                    <p className="text-sm font-bold text-zinc-600">
                      Choose your amount
                    </p>

                    <button
                      type="button"
                      onClick={() => updateCustomAmount(donationValue + 10)}
                      aria-label="Increase custom donation"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-red-700 text-2xl font-bold text-white transition hover:bg-red-800">
                      +
                    </button>
                  </div>

                  <input
                    type="range"
                    min={MIN_DONATION}
                    max={MAX_DONATION}
                    step={10}
                    value={donationValue}
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

                  <p className="mt-4 text-center text-xs font-semibold leading-5 text-zinc-500">
                    Move the slider to choose a custom donation amount.
                  </p>
                </div>
              </div>

              <div className="mt-7 space-y-4">
                <div className="border border-red-200 bg-red-50 p-5">
                  <p className="font-black text-slate-950">
                    Donating to a specific community?
                  </p>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    Please contact our team before donating if you would like
                    your contribution allocated to a specific community. We will
                    help coordinate the designation and allocation.
                  </p>
                  <a
                    href="/contact"
                    className="mt-3 inline-flex font-black text-red-700 underline decoration-2 underline-offset-4 hover:text-red-800">
                    Contact our team
                  </a>
                </div>

                <div className="border border-zinc-300 bg-zinc-50 p-5">
                  <p className="font-black text-slate-950">
                    Planning to donate more than $10,000?
                  </p>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    Please contact us directly so we can assist with payment
                    processing, contribution allocation, and receipt
                    requirements for your major gift.
                  </p>
                  <a
                    href="/contact"
                    className="mt-3 inline-flex font-black text-red-700 underline decoration-2 underline-offset-4 hover:text-red-800">
                    Contact us about a major gift
                  </a>
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
                    estimatedChildren: childrenImpacted,
                    impactPeriod:
                      frequency === "monthly" ? "annual" : "one-time",
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
              {/* Important tax disclosure */}
              <div className="mt-10 border-l-4 border-red-700 bg-slate-100 px-6 py-7 sm:px-8">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-red-700">
                  Important Tax Information
                </p>

                <p className="mt-4 leading-7 text-slate-700">
                  Code Red Safer Schools Initiative, Inc. is a Florida nonprofit
                  corporation. Its application for recognition of exemption
                  under Section 501(c)(3) of the Internal Revenue Code is
                  currently pending with the Internal Revenue Service.
                </p>

                <p className="mt-4 leading-7 text-slate-700">
                  Donors do not have advance assurance that this contribution is
                  tax-deductible while the application is pending. If the IRS
                  approves our application, your donation may be tax-deductible
                  retroactively to our date of formation, to the extent allowed
                  by law.
                </p>

                <p className="mt-4 leading-7 text-slate-700">
                  We recommend that you retain this acknowledgment and your
                  payment receipt for your records and consult your tax adviser
                  regarding your individual tax situation.
                </p>

                <p className="mt-5 font-bold text-slate-950">
                  No goods or services are provided in exchange for your
                  contribution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
