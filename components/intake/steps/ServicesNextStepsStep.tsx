"use client";

import { useFormContext } from "react-hook-form";

import type { SchoolSafetyIntakeInput } from "@/lib/intake/schemas";
import {
  CHARACTER_LIMITS,
  PREFERRED_TIMEFRAME_OPTIONS,
  SERVICE_REQUEST_OPTIONS,
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

export default function ServicesNextStepsStep() {
  const form = useFormContext<SchoolSafetyIntakeInput>();

  const supportTypes = form.watch("services.supportTypes") ?? [];
  const supportTypesOther = form.watch("services.supportTypesOther") ?? "";
  const additionalInformation =
    form.watch("services.additionalInformation") ?? "";
  const preferredTimeframe = form.watch("services.preferredTimeframe");

  const toggleSupportType = (
    option: (typeof SERVICE_REQUEST_OPTIONS)[number],
  ) => {
    const current = form.getValues("services.supportTypes") ?? [];
    const isSelected = current.includes(option);

    const next = isSelected
      ? current.filter((item) => item !== option)
      : [...current, option];

    form.setValue(
      "services.supportTypes",
      next as SchoolSafetyIntakeInput["services"]["supportTypes"],
      {
        shouldDirty: true,
        shouldTouch: true,
        shouldValidate: true,
      },
    );

    if (!next.includes("Other")) {
      form.setValue("services.supportTypesOther", "", {
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
          Services Requested & Next Steps
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-white/65">
          Tell us what kind of support your school is looking for and the
          general timeframe for moving forward.
        </p>
      </div>

      <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 md:p-6">
        <div className="mb-4">
          <Label className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
            Requested Services
          </Label>
          <p className="mt-2 text-sm leading-6 text-white/65">
            Select all services that would be most helpful for your school right
            now.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {SERVICE_REQUEST_OPTIONS.map((option) => {
            const checked = supportTypes.includes(option);

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
                  onCheckedChange={() => toggleSupportType(option)}
                  className="mt-0.5 border-white/25 data-[state=checked]:border-primary data-[state=checked]:bg-primary"
                />
                <span className="text-sm leading-6">{option}</span>
              </label>
            );
          })}
        </div>

        <div className="mt-3">
          <FormMessage className="text-red-400">
            {form.formState.errors.services?.supportTypes?.message}
          </FormMessage>
        </div>
      </div>

      {supportTypes.includes("Other") && (
        <FormField
          control={form.control}
          name="services.supportTypesOther"
          render={({ field }) => (
            <FormItem className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 md:p-6">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <Label className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                    Other Requested Service
                  </Label>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    Briefly describe the other type of support you are seeking.
                  </p>
                </div>

                <span className="text-xs text-white/40">
                  {supportTypesOther.length}/
                  {CHARACTER_LIMITS.supportTypesOther}
                </span>
              </div>

              <FormControl>
                <Textarea
                  placeholder="Describe the other requested service..."
                  maxLength={CHARACTER_LIMITS.supportTypesOther}
                  className="min-h-[120px] resize-none rounded-2xl border-white/10 bg-white/[0.03] text-white placeholder:text-white/25"
                  {...field}
                />
              </FormControl>
              <FormMessage className="mt-3 text-red-400" />
            </FormItem>
          )}
        />
      )}

      <FormField
        control={form.control}
        name="services.preferredTimeframe"
        render={({ field }) => (
          <FormItem className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 md:p-6">
            <div className="mb-4">
              <Label className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                Preferred Timeframe
              </Label>
              <p className="mt-2 text-sm leading-6 text-white/65">
                When would your school ideally like to begin or explore support?
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {PREFERRED_TIMEFRAME_OPTIONS.map((option) => {
                const selected = preferredTimeframe === option;

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => field.onChange(option)}
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

            <FormMessage className="mt-3 text-red-400" />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="services.additionalInformation"
        render={({ field }) => (
          <FormItem className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 md:p-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <Label className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                  Additional Information
                </Label>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  Share anything else that would help us understand your
                  school’s situation or goals.
                </p>
              </div>

              <span className="text-xs text-white/40">
                {additionalInformation.length}/
                {CHARACTER_LIMITS.additionalInformation}
              </span>
            </div>

            <FormControl>
              <Textarea
                placeholder="Add any context, timing needs, stakeholder notes, or special considerations here..."
                maxLength={CHARACTER_LIMITS.additionalInformation}
                className="min-h-[160px] resize-none rounded-2xl border-white/10 bg-white/[0.03] text-white placeholder:text-white/25"
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
