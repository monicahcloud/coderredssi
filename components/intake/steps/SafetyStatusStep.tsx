"use client";

import { useFormContext } from "react-hook-form";

import type { SchoolSafetyIntakeInput } from "@/lib/intake/schemas";
import { SCALE_1_TO_5 } from "@/lib/intake/constants";
import { Label } from "@/components/ui/label";

type RatingFieldName =
  | "safetyStatus.campusSafety"
  | "safetyStatus.emergencyConfidence"
  | "safetyStatus.policyConsistency"
  | "safetyStatus.emergencyPlanning"
  | "safetyStatus.accessControl"
  | "safetyStatus.threatAssessmentProtocols";

type RatingCardProps = {
  name: RatingFieldName;
  title: string;
  description: string;
};

function RatingCard({ name, title, description }: RatingCardProps) {
  const form = useFormContext<SchoolSafetyIntakeInput>();
  const selectedValue = form.watch(name);

  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/3 p-5 md:p-6">
      <div className="mb-4">
        <h4 className="text-base font-black tracking-tight text-white">
          {title}
        </h4>
        <p className="mt-2 text-sm leading-6 text-white/65">{description}</p>
      </div>

      <div className="space-y-3">
        <Label className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
          Rating
        </Label>

        <div className="grid grid-cols-5 gap-2">
          {SCALE_1_TO_5.map((value) => {
            const selected = Number(selectedValue) === value;

            return (
              <button
                key={value}
                type="button"
                onClick={() =>
                  form.setValue(name, value, {
                    shouldDirty: true,
                    shouldTouch: true,
                    shouldValidate: true,
                  })
                }
                className={`flex h-12 items-center justify-center rounded-xl border text-sm font-bold transition ${
                  selected
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-white/10 bg-white/3 text-white/75 hover:bg-white/6"
                }`}
                aria-pressed={selected}>
                {value}
              </button>
            );
          })}
        </div>

        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.14em] text-white/35">
          <span>Low</span>
          <span>Strong</span>
        </div>

        {form.formState.errors.safetyStatus?.[
          name.split(".")[1] as keyof SchoolSafetyIntakeInput["safetyStatus"]
        ]?.message && (
          <p className="text-sm text-red-400">
            {
              form.formState.errors.safetyStatus?.[
                name.split(
                  ".",
                )[1] as keyof SchoolSafetyIntakeInput["safetyStatus"]
              ]?.message
            }
          </p>
        )}
      </div>
    </div>
  );
}

export default function SafetyStatusStep() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-black tracking-tight text-white">
          Current Safety Status
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-white/65">
          Rate the current condition of your school&apos;s safety readiness
          across the areas below. Use 1 for weak or limited readiness and 5 for
          strong or well-established readiness.
        </p>
      </div>

      <div className="grid gap-5">
        <RatingCard
          name="safetyStatus.campusSafety"
          title="Overall Campus Safety"
          description="How safe does your campus currently feel on a day-to-day basis for students, staff, and visitors?"
        />

        <RatingCard
          name="safetyStatus.emergencyConfidence"
          title="Emergency Response Confidence"
          description="How confident is your team in responding effectively during an emergency or crisis?"
        />

        <RatingCard
          name="safetyStatus.policyConsistency"
          title="Policy Consistency"
          description="How consistently are safety procedures and expectations understood and followed across campus?"
        />

        <RatingCard
          name="safetyStatus.emergencyPlanning"
          title="Emergency Planning"
          description="How prepared is your school in terms of written plans, response workflows, and coordinated procedures?"
        />

        <RatingCard
          name="safetyStatus.accessControl"
          title="Access Control"
          description="How strong are your current building access controls, visitor procedures, and campus entry protections?"
        />

        <RatingCard
          name="safetyStatus.threatAssessmentProtocols"
          title="Threat Assessment Protocols"
          description="How well established are your processes for identifying, documenting, and responding to behavioral or safety threats?"
        />
      </div>
    </div>
  );
}
