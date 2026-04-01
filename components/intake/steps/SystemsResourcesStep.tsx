"use client";

import { useFormContext } from "react-hook-form";

import type { SchoolSafetyIntakeInput } from "@/lib/intake/schemas";
import {
  DRILL_FREQUENCY_OPTIONS,
  EMERGENCY_PLAN_OPTIONS,
  FIRST_RESPONDER_RELATIONSHIP_OPTIONS,
  MENTAL_HEALTH_SUPPORT_OPTIONS,
  SCALE_1_TO_5,
  THREAT_ASSESSMENT_TEAM_OPTIONS,
} from "@/lib/intake/constants";
import { Label } from "@/components/ui/label";

type OptionFieldName =
  | "systemsResources.emergencyPlanStatus"
  | "systemsResources.threatAssessmentTeam"
  | "systemsResources.drillFrequency"
  | "systemsResources.mentalHealthSupport"
  | "systemsResources.firstResponderRelationship";

type RatingFieldName = "systemsResources.staffTrainingLevel";

type OptionCardProps = {
  name: OptionFieldName;
  title: string;
  description: string;
  options: readonly string[];
};

type RatingCardProps = {
  name: RatingFieldName;
  title: string;
  description: string;
};

function getSystemsResourcesError(
  form: ReturnType<typeof useFormContext<SchoolSafetyIntakeInput>>,
  name: OptionFieldName | RatingFieldName,
) {
  const key = name.split(
    ".",
  )[1] as keyof SchoolSafetyIntakeInput["systemsResources"];
  return form.formState.errors.systemsResources?.[key]?.message;
}

function OptionCard({ name, title, description, options }: OptionCardProps) {
  const form = useFormContext<SchoolSafetyIntakeInput>();
  const selectedValue = form.watch(name);
  const error = getSystemsResourcesError(form, name);

  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 md:p-6">
      <div className="mb-4">
        <h4 className="text-base font-black tracking-tight text-white">
          {title}
        </h4>
        <p className="mt-2 text-sm leading-6 text-white/65">{description}</p>
      </div>

      <div className="space-y-3">
        <Label className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
          Select One
        </Label>

        <div className="grid gap-3 md:grid-cols-2">
          {options.map((option) => {
            const selected = selectedValue === option;

            return (
              <button
                key={option}
                type="button"
                onClick={() =>
                  form.setValue(name, option, {
                    shouldDirty: true,
                    shouldTouch: true,
                    shouldValidate: true,
                  })
                }
                className={`rounded-2xl border px-4 py-4 text-left text-sm leading-6 transition ${
                  selected
                    ? "border-primary bg-primary/10 text-white"
                    : "border-white/10 bg-white/[0.03] text-white/75 hover:bg-white/[0.05]"
                }`}
                aria-pressed={selected}>
                {option}
              </button>
            );
          })}
        </div>

        {error && <p className="text-sm text-red-400">{error}</p>}
      </div>
    </div>
  );
}

function RatingCard({ name, title, description }: RatingCardProps) {
  const form = useFormContext<SchoolSafetyIntakeInput>();
  const selectedValue = form.watch(name);
  const error = getSystemsResourcesError(form, name);

  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 md:p-6">
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
                    : "border-white/10 bg-white/[0.03] text-white/75 hover:bg-white/[0.06]"
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

        {error && <p className="text-sm text-red-400">{error}</p>}
      </div>
    </div>
  );
}

export default function SystemsResourcesStep() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-black tracking-tight text-white">
          Systems, Structures & Resources
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-white/65">
          Help us understand what safety systems, planning structures, and
          support resources are already in place at your school.
        </p>
      </div>

      <div className="grid gap-5">
        <OptionCard
          name="systemsResources.emergencyPlanStatus"
          title="Emergency Operations Plan"
          description="What best describes your school’s current emergency operations or crisis response plan?"
          options={EMERGENCY_PLAN_OPTIONS}
        />

        <OptionCard
          name="systemsResources.threatAssessmentTeam"
          title="Threat Assessment Team"
          description="What best describes your current threat assessment team structure and activity level?"
          options={THREAT_ASSESSMENT_TEAM_OPTIONS}
        />

        <OptionCard
          name="systemsResources.drillFrequency"
          title="Drill Frequency"
          description="How often does your school conduct safety or emergency drills?"
          options={DRILL_FREQUENCY_OPTIONS}
        />

        <OptionCard
          name="systemsResources.mentalHealthSupport"
          title="Mental Health Support"
          description="What level of mental health support is available to students on campus?"
          options={MENTAL_HEALTH_SUPPORT_OPTIONS}
        />

        <OptionCard
          name="systemsResources.firstResponderRelationship"
          title="First Responder Relationship"
          description="How would you describe your collaboration with local law enforcement, fire, EMS, or school resource officers?"
          options={FIRST_RESPONDER_RELATIONSHIP_OPTIONS}
        />

        <RatingCard
          name="systemsResources.staffTrainingLevel"
          title="Staff Safety Training Level"
          description="How prepared is your staff overall in terms of safety training, drills, and response awareness?"
        />
      </div>
    </div>
  );
}
