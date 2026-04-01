"use client";

import { Progress } from "@/components/ui/progress";

const PARTNER_STEP_TITLES = [
  "Contact Info",
  "Organization Profile",
  "Partnership Interest",
  "Alignment & Intent",
  "Decision & Next Steps",
  "Review & Submit",
] as const;

type PartnerProgressProps = {
  step: number;
  total: number;
};

export default function PartnerProgress({ step, total }: PartnerProgressProps) {
  const progressValue = (step / total) * 100;
  const currentTitle = PARTNER_STEP_TITLES[step - 1] ?? "Partner Intake Step";

  return (
    <div className="space-y-4 rounded-[1.5rem] border border-white/10 bg-white/3 p-5 md:p-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.22em] text-white/45">
            Partner Interest Intake
          </p>
          <h3 className="mt-1 text-lg font-black tracking-tight text-white md:text-xl">
            {currentTitle}
          </h3>
        </div>

        <p className="text-sm font-medium text-white/65">
          Step {step} of {total}
        </p>
      </div>

      <Progress value={progressValue} className="h-2 bg-white/10" />

      <div className="grid grid-cols-3 gap-2 md:grid-cols-6">
        {PARTNER_STEP_TITLES.map((title, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === step;
          const isComplete = stepNumber < step;

          return (
            <div
              key={title}
              className={`rounded-full px-3 py-2 text-center text-[10px] font-bold uppercase tracking-[0.14em] transition ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : isComplete
                    ? "bg-white/15 text-white"
                    : "bg-white/4 text-white/35"
              }`}>
              {stepNumber}
            </div>
          );
        })}
      </div>
    </div>
  );
}
