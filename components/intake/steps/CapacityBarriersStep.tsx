"use client";

import { useFormContext } from "react-hook-form";

import type { SchoolSafetyIntakeInput } from "@/lib/intake/schemas";
import {
  BARRIER_OPTIONS,
  CHARACTER_LIMITS,
  SCALE_1_TO_5,
} from "@/lib/intake/constants";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

type RatingFieldName =
  | "capacityBarriers.implementationCapacity"
  | "capacityBarriers.urgency";

type RatingCardProps = {
  name: RatingFieldName;
  title: string;
  description: string;
  lowLabel: string;
  highLabel: string;
};

function RatingCard({
  name,
  title,
  description,
  lowLabel,
  highLabel,
}: RatingCardProps) {
  const form = useFormContext<SchoolSafetyIntakeInput>();
  const selectedValue = form.watch(name);
  const key = name.split(
    ".",
  )[1] as keyof SchoolSafetyIntakeInput["capacityBarriers"];
  const error = form.formState.errors.capacityBarriers?.[key]?.message;

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
          <span>{lowLabel}</span>
          <span>{highLabel}</span>
        </div>

        {error && <p className="text-sm text-red-400">{error}</p>}
      </div>
    </div>
  );
}

export default function CapacityBarriersStep() {
  const form = useFormContext<SchoolSafetyIntakeInput>();

  const barriers = form.watch("capacityBarriers.barriers") ?? [];
  const barriersOther = form.watch("capacityBarriers.barriersOther") ?? "";

  const toggleBarrier = (option: (typeof BARRIER_OPTIONS)[number]) => {
    const current = form.getValues("capacityBarriers.barriers") ?? [];
    const isSelected = current.includes(option);

    const next = isSelected
      ? current.filter((item) => item !== option)
      : [...current, option];

    form.setValue(
      "capacityBarriers.barriers",
      next as SchoolSafetyIntakeInput["capacityBarriers"]["barriers"],
      {
        shouldDirty: true,
        shouldTouch: true,
        shouldValidate: true,
      },
    );

    if (!next.includes("Other")) {
      form.setValue("capacityBarriers.barriersOther", "", {
        shouldDirty: true,
        shouldTouch: true,
        shouldValidate: true,
      });
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-black tracking-tight text-white">
          Capacity, Barriers & Readiness
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-white/65">
          Help us understand how ready your school is to implement safety
          improvements and what practical barriers may be standing in the way.
        </p>
      </div>

      <div className="grid gap-5">
        <RatingCard
          name="capacityBarriers.implementationCapacity"
          title="Implementation Capacity"
          description="How prepared is your school right now to implement safety recommendations, training, or system improvements?"
          lowLabel="Limited"
          highLabel="Strong"
        />

        <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 md:p-6">
          <div className="mb-4">
            <Label className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
              Current Barriers
            </Label>
            <p className="mt-2 text-sm leading-6 text-white/65">
              Select all barriers that are currently making safety progress more
              difficult for your team.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {BARRIER_OPTIONS.map((option) => {
              const checked = barriers.includes(option);

              return (
                <label
                  key={option}
                  className={`flex items-start gap-3 rounded-2xl border p-4 text-left transition ${
                    checked
                      ? "border-primary bg-primary/10 text-white"
                      : "border-white/10 bg-white/[0.03] text-white/75 hover:bg-white/[0.05]"
                  } cursor-pointer`}>
                  <Checkbox
                    checked={checked}
                    onCheckedChange={() => toggleBarrier(option)}
                    className="mt-0.5 border-white/25 data-[state=checked]:border-primary data-[state=checked]:bg-primary"
                  />
                  <span className="text-sm leading-6">{option}</span>
                </label>
              );
            })}
          </div>

          <div className="mt-3">
            <FormMessage className="text-red-400">
              {form.formState.errors.capacityBarriers?.barriers?.message}
            </FormMessage>
          </div>
        </div>

        {barriers.includes("Other") && (
          <FormField
            control={form.control}
            name="capacityBarriers.barriersOther"
            render={({ field }) => (
              <FormItem className="rounded-[1.5rem] border border-white/10 bg-white/3 p-5 md:p-6">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div>
                    <Label className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                      Other Barrier
                    </Label>
                    <p className="mt-2 text-sm leading-6 text-white/65">
                      Briefly describe the other barrier affecting progress.
                    </p>
                  </div>

                  <span className="text-xs text-white/40">
                    {barriersOther.length}/{CHARACTER_LIMITS.barriersOther}
                  </span>
                </div>

                <FormControl>
                  <Textarea
                    placeholder="Describe the other barrier..."
                    maxLength={CHARACTER_LIMITS.barriersOther}
                    className="min-h-[120px] resize-none rounded-2xl border-white/10 bg-white/[0.03] text-white placeholder:text-white/25"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="mt-3 text-red-400" />
              </FormItem>
            )}
          />
        )}

        <RatingCard
          name="capacityBarriers.urgency"
          title="Urgency"
          description="How urgent is it for your school to address these safety concerns and move toward action?"
          lowLabel="Low"
          highLabel="Urgent"
        />
      </div>
    </div>
  );
}
