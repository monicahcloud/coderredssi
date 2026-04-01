"use client";

import { useFormContext } from "react-hook-form";

import type { SchoolSafetyIntakeInput } from "@/lib/intake/schemas";
import {
  CHARACTER_LIMITS,
  ENTRY_PROCEDURE_OPTIONS,
  PHYSICAL_SECURITY_FEATURE_OPTIONS,
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

export default function PhysicalSecurityStep() {
  const form = useFormContext<SchoolSafetyIntakeInput>();

  const selectedEntryProcedure = form.watch(
    "systemsResources.physicalSecurity.entryProcedure",
  );

  const securityFeatures =
    form.watch("systemsResources.physicalSecurity.securityFeatures") ?? [];

  const hasVulnerabilities = form.watch(
    "systemsResources.physicalSecurity.hasVulnerabilities",
  );

  const vulnerabilitiesDescription =
    form.watch("systemsResources.vulnerabilitiesDescription") ?? "";

  const toggleSecurityFeature = (
    option: (typeof PHYSICAL_SECURITY_FEATURE_OPTIONS)[number],
  ) => {
    const current =
      form.getValues("systemsResources.physicalSecurity.securityFeatures") ??
      [];

    const isSelected = current.includes(option);

    let next: (typeof PHYSICAL_SECURITY_FEATURE_OPTIONS)[number][];

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

    form.setValue("systemsResources.physicalSecurity.securityFeatures", next, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const hasOnlyNone =
    securityFeatures.length === 1 &&
    securityFeatures[0] === "None of the above";

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-black tracking-tight text-white">
          Physical Security Snapshot
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-white/65">
          Help us understand your campus entry procedures, security features,
          and any known physical vulnerabilities that may need attention.
        </p>
      </div>

      <FormField
        control={form.control}
        name="systemsResources.physicalSecurity.entryProcedure"
        render={() => (
          <FormItem className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 md:p-6">
            <div className="mb-4">
              <Label className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                Campus Entry Procedure
              </Label>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Select the option that best describes how visitors and building
                access are currently managed.
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {ENTRY_PROCEDURE_OPTIONS.map((option) => {
                const selected = selectedEntryProcedure === option;

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() =>
                      form.setValue(
                        "systemsResources.physicalSecurity.entryProcedure",
                        option,
                        {
                          shouldDirty: true,
                          shouldTouch: true,
                          shouldValidate: true,
                        },
                      )
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

            <FormMessage className="mt-3 text-red-400">
              {
                form.formState.errors.systemsResources?.physicalSecurity
                  ?.entryProcedure?.message
              }
            </FormMessage>
          </FormItem>
        )}
      />

      <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 md:p-6">
        <div className="mb-4">
          <Label className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
            Existing Security Features
          </Label>
          <p className="mt-2 text-sm leading-6 text-white/65">
            Select all security features currently in place on your campus.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {PHYSICAL_SECURITY_FEATURE_OPTIONS.map((option) => {
            const checked = securityFeatures.includes(option);
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
                    if (!disabled) toggleSecurityFeature(option);
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
            {
              form.formState.errors.systemsResources?.physicalSecurity
                ?.securityFeatures?.message
            }
          </FormMessage>
        </div>
      </div>

      <FormField
        control={form.control}
        name="systemsResources.physicalSecurity.hasVulnerabilities"
        render={({ field }) => (
          <FormItem className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 md:p-6">
            <div className="mb-4">
              <Label className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                Known Vulnerabilities
              </Label>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Are there any known physical security gaps or vulnerabilities
                that concern your team right now?
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { label: "Yes", value: true },
                { label: "No", value: false },
              ].map((option) => {
                const selected = field.value === option.value;

                return (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => field.onChange(option.value)}
                    className={`rounded-2xl border px-4 py-4 text-left text-sm transition ${
                      selected
                        ? "border-primary bg-primary/10 text-white"
                        : "border-white/10 bg-white/[0.03] text-white/75 hover:bg-white/[0.05]"
                    }`}
                    aria-pressed={selected}>
                    {option.label}
                  </button>
                );
              })}
            </div>

            <FormMessage className="mt-3 text-red-400" />
          </FormItem>
        )}
      />

      {hasVulnerabilities && (
        <FormField
          control={form.control}
          name="systemsResources.vulnerabilitiesDescription"
          render={({ field }) => (
            <FormItem className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 md:p-6">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <Label className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                    Vulnerability Details
                  </Label>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    Briefly describe the main vulnerabilities or weak points
                    your team is concerned about.
                  </p>
                </div>

                <span className="text-xs text-white/40">
                  {vulnerabilitiesDescription.length}/
                  {CHARACTER_LIMITS.vulnerabilitiesDescription}
                </span>
              </div>

              <FormControl>
                <Textarea
                  placeholder="Example: The main office entry is monitored, but side entrances are difficult to oversee during arrival and dismissal."
                  maxLength={CHARACTER_LIMITS.vulnerabilitiesDescription}
                  className="min-h-[140px] resize-none rounded-2xl border-white/10 bg-white/[0.03] text-white placeholder:text-white/25"
                  value={typeof field.value === "string" ? field.value : ""}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  name={field.name}
                  ref={field.ref}
                />
              </FormControl>
              <FormMessage className="mt-3 text-red-400" />
            </FormItem>
          )}
        />
      )}
    </div>
  );
}
