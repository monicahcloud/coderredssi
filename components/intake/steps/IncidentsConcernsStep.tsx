"use client";

import { useFormContext } from "react-hook-form";

import type { SchoolSafetyIntakeInput } from "@/lib/intake/schemas";
import {
  CHARACTER_LIMITS,
  INCIDENT_FREQUENCY_OPTIONS,
  SAFETY_INCIDENT_OPTIONS,
} from "@/lib/intake/constants";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

export default function IncidentsConcernsStep() {
  const form = useFormContext<SchoolSafetyIntakeInput>();

  const incidentTypes = form.watch("incidents.incidentTypes") ?? [];
  const incidentOther = form.watch("incidents.incidentOther") ?? "";
  const topConcerns = form.watch("incidents.topConcerns") ?? "";

  const hasOnlyNone =
    incidentTypes.length === 1 && incidentTypes[0] === "None of the above";

  const hasRealIncident =
    incidentTypes.length > 0 &&
    !(incidentTypes.length === 1 && incidentTypes[0] === "None of the above");

  const toggleIncident = (option: (typeof SAFETY_INCIDENT_OPTIONS)[number]) => {
    const current = form.getValues("incidents.incidentTypes") ?? [];
    const isSelected = current.includes(option);

    let next: string[] = current;

    if (option === "None of the above") {
      next = isSelected ? [] : ["None of the above"];
    } else {
      const withoutNone = current.filter(
        (item) => item !== "None of the above",
      );

      next = isSelected
        ? withoutNone.filter((item) => item !== option)
        : [...withoutNone, option];
    }

    form.setValue(
      "incidents.incidentTypes",
      next as SchoolSafetyIntakeInput["incidents"]["incidentTypes"],
      {
        shouldDirty: true,
        shouldTouch: true,
        shouldValidate: true,
      },
    );

    const updatedHasRealIncident =
      next.length > 0 &&
      !(next.length === 1 && next[0] === "None of the above");

    if (!updatedHasRealIncident) {
      form.setValue("incidents.incidentFrequency", undefined, {
        shouldDirty: true,
        shouldTouch: true,
        shouldValidate: true,
      });
    }

    if (!next.includes("Other")) {
      form.setValue("incidents.incidentOther", "", {
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
          Recent Incidents & Concerns
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-white/65">
          Tell us what types of safety concerns your school has experienced or
          is actively worried about. This helps us understand both current risk
          and support priorities.
        </p>
      </div>

      <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 md:p-6">
        <div className="mb-4">
          <Label className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
            Which concerns or incidents apply?
          </Label>
          <p className="mt-2 text-sm leading-6 text-white/65">
            Select all that apply. Choose “None of the above” only if none of
            these have been relevant.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {SAFETY_INCIDENT_OPTIONS.map((option) => {
            const checked = incidentTypes.includes(option);
            const disabled = hasOnlyNone && option !== "None of the above";

            return (
              <label
                key={option}
                className={`flex items-start gap-3 rounded-2xl border p-4 text-left transition ${
                  checked
                    ? "border-primary bg-primary/10 text-white"
                    : "border-white/10 bg-white/[0.03] text-white/75 hover:bg-white/[0.05]"
                } ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}>
                <Checkbox
                  checked={checked}
                  disabled={disabled}
                  onCheckedChange={() => {
                    if (!disabled) toggleIncident(option);
                  }}
                  className="mt-0.5 border-white/25 data-[state=checked]:border-primary data-[state=checked]:bg-primary"
                />
                <span className="text-sm leading-6">{option}</span>
              </label>
            );
          })}
        </div>

        <div className="mt-3">
          <FormMessage className="text-red-400">
            {form.formState.errors.incidents?.incidentTypes?.message}
          </FormMessage>
        </div>
      </div>

      {incidentTypes.includes("Other") && (
        <FormField
          control={form.control}
          name="incidents.incidentOther"
          render={({ field }) => (
            <FormItem className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 md:p-6">
              <div className="mb-4 flex items-center justify-between gap-4">
                <Label className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                  Other Incident Type
                </Label>
                <span className="text-xs text-white/40">
                  {incidentOther.length}/{CHARACTER_LIMITS.incidentOther}
                </span>
              </div>

              <FormControl>
                <Textarea
                  placeholder="Briefly describe the other incident or concern."
                  maxLength={CHARACTER_LIMITS.incidentOther}
                  className="min-h-[120px] resize-none rounded-2xl border-white/10 bg-white/[0.03] text-white placeholder:text-white/25"
                  {...field}
                />
              </FormControl>
              <FormMessage className="mt-3 text-red-400" />
            </FormItem>
          )}
        />
      )}

      {hasRealIncident && (
        <FormField
          control={form.control}
          name="incidents.incidentFrequency"
          render={({ field }) => (
            <FormItem className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 md:p-6">
              <div className="mb-4">
                <Label className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                  Incident Frequency
                </Label>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  How often have these incidents or concerns been occurring?
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                {INCIDENT_FREQUENCY_OPTIONS.map((option) => {
                  const selected = field.value === option;

                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => field.onChange(option)}
                      className={`rounded-2xl border px-4 py-4 text-left text-sm transition ${
                        selected
                          ? "border-primary bg-primary/10 text-white"
                          : "border-white/10 bg-white/[0.03] text-white/75 hover:bg-white/[0.05]"
                      }`}>
                      {option}
                    </button>
                  );
                })}
              </div>

              <FormMessage className="mt-3 text-red-400" />
            </FormItem>
          )}
        />
      )}

      <FormField
        control={form.control}
        name="incidents.topConcerns"
        render={({ field }) => (
          <FormItem className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 md:p-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <Label className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                  Top Concerns
                </Label>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  What is worrying your team the most right now?
                </p>
              </div>

              <span className="text-xs text-white/40">
                {topConcerns.length}/{CHARACTER_LIMITS.topConcerns}
              </span>
            </div>

            <FormControl>
              <Textarea
                placeholder="Example: We are most concerned about visitor access, staff response consistency, and escalation pathways."
                maxLength={CHARACTER_LIMITS.topConcerns}
                className="min-h-[140px] resize-none rounded-2xl border-white/10 bg-white/[0.03] text-white placeholder:text-white/25"
                {...field}
              />
            </FormControl>
            <FormMessage className="mt-3 text-red-400" />
          </FormItem>
        )}
      />
    </div>
  );
}
