"use client";

import { useFormContext } from "react-hook-form";
import type { PartnerIntakeValues } from "@/lib/partner/schemas";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const PARTNERSHIP_TYPE_OPTIONS = [
  "Financial sponsorship",
  "Grant",
  "In-kind donation",
  "Equipment",
  "Services",
  "Event support",
  "Thought leadership",
  "Media support",
  "Other",
] as const;

const GIVING_LEVEL_OPTIONS = ["Diamond", "Gold", "Silver", "Bronze"] as const;

const TIMEFRAME_OPTIONS = [
  "Immediate",
  "This quarter",
  "This year",
  "Exploratory",
] as const;

export default function InterestStep() {
  const form = useFormContext<PartnerIntakeValues>();

  const partnershipTypes = form.watch("interest.partnershipType") ?? [];
  const givingLevel = form.watch("interest.givingLevel");
  const timeframe = form.watch("interest.timeframe");

  const togglePartnershipType = (
    option: (typeof PARTNERSHIP_TYPE_OPTIONS)[number],
  ) => {
    const current = form.getValues("interest.partnershipType") ?? [];
    const isSelected = current.includes(option);

    const next = isSelected
      ? current.filter((item) => item !== option)
      : [...current, option];

    form.setValue("interest.partnershipType", next, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-black tracking-tight text-white">
          Partnership Interest
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-white/65">
          Tell us what kind of partnership you are exploring, your likely level
          of support, and the timing you have in mind.
        </p>
      </div>

      <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 md:p-6">
        <div className="mb-4">
          <Label className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
            Partnership Type
          </Label>
          <p className="mt-2 text-sm leading-6 text-white/65">
            Select all that apply.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {PARTNERSHIP_TYPE_OPTIONS.map((option) => {
            const checked = partnershipTypes.includes(option);

            return (
              <label
                key={option}
                className={`flex cursor-pointer items-start gap-3 rounded-2xl border p-4 text-left transition ${
                  checked
                    ? "border-primary bg-primary/10 text-white"
                    : "border-white/10 bg-white/[0.03] text-white/75 hover:bg-white/[0.05]"
                }`}>
                <Checkbox
                  checked={checked}
                  onCheckedChange={() => togglePartnershipType(option)}
                  className="mt-0.5 border-white/25 data-[state=checked]:border-primary data-[state=checked]:bg-primary"
                />
                <span className="text-sm leading-6">{option}</span>
              </label>
            );
          })}
        </div>

        <div className="mt-3">
          <FormMessage className="text-red-400">
            {form.formState.errors.interest?.partnershipType?.message}
          </FormMessage>
        </div>
      </div>

      <FormField
        control={form.control}
        name="interest.givingLevel"
        render={({ field }) => (
          <FormItem className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 md:p-6">
            <div className="mb-4">
              <Label className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                Preferred Giving Level
              </Label>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Select the level that best matches your current interest.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {GIVING_LEVEL_OPTIONS.map((option) => {
                const selected = givingLevel === option;

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => field.onChange(option)}
                    className={`rounded-2xl border px-4 py-4 text-center text-sm font-semibold transition ${
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

      <FormField
        control={form.control}
        name="interest.timeframe"
        render={({ field }) => (
          <FormItem className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 md:p-6">
            <div className="mb-4">
              <Label className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                Timeframe
              </Label>
              <p className="mt-2 text-sm leading-6 text-white/65">
                When are you most likely to move forward?
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {TIMEFRAME_OPTIONS.map((option) => {
                const selected = timeframe === option;

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

      <FormField
        control={form.control}
        name="interest.existingRelationship"
        render={({ field }) => (
          <FormItem>
            <Label className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
              Existing Relationship with Code Red
            </Label>
            <FormControl>
              <Input
                placeholder="Optional: Share any prior connection, conversation, referral, or relationship."
                className="h-12 rounded-xl border-white/10 bg-white/[0.03] text-white placeholder:text-white/25"
                value={typeof field.value === "string" ? field.value : ""}
                onChange={field.onChange}
                onBlur={field.onBlur}
                name={field.name}
                ref={field.ref}
              />
            </FormControl>
            <FormMessage className="text-red-400" />
          </FormItem>
        )}
      />
    </div>
  );
}
