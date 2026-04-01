"use client";

import { useFormContext } from "react-hook-form";
import type { PartnerIntakeValues } from "@/lib/partner/schemas";

import { Label } from "@/components/ui/label";
import { FormField, FormItem, FormMessage } from "@/components/ui/form";

const ORGANIZATION_TYPE_OPTIONS = [
  "Corporation",
  "Foundation",
  "Nonprofit",
  "Public agency",
  "School district",
  "Individual donor",
  "Other",
] as const;

const INDUSTRY_OPTIONS = [
  "Technology",
  "Security",
  "Education",
  "Finance",
  "Healthcare",
  "Construction",
  "Insurance",
  "Logistics",
  "Retail",
  "Other",
] as const;

const COMPANY_SIZE_OPTIONS = [
  "1–10",
  "11–50",
  "51–200",
  "201–500",
  "500+",
] as const;

const GEOGRAPHIC_REACH_OPTIONS = [
  "Local",
  "Regional",
  "National",
  "International",
] as const;

export default function OrganizationProfileStep() {
  const form = useFormContext<PartnerIntakeValues>();

  const organizationType = form.watch("organizationProfile.type");
  const industry = form.watch("organizationProfile.industry");
  const size = form.watch("organizationProfile.size");
  const reach = form.watch("organizationProfile.reach");

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-black tracking-tight text-white">
          Organization Profile
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-white/65">
          Help us understand the kind of organization you represent, the sector
          you operate in, and the scale of your footprint.
        </p>
      </div>

      <FormField
        control={form.control}
        name="organizationProfile.type"
        render={() => (
          <FormItem className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 md:p-6">
            <div className="mb-4">
              <Label className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                Organization Type
              </Label>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Select the option that best describes your organization.
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {ORGANIZATION_TYPE_OPTIONS.map((option) => {
                const selected = organizationType === option;

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() =>
                      form.setValue("organizationProfile.type", option, {
                        shouldDirty: true,
                        shouldTouch: true,
                        shouldValidate: true,
                      })
                    }
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

            <FormMessage className="mt-3 text-red-400">
              {form.formState.errors.organizationProfile?.type?.message}
            </FormMessage>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="organizationProfile.industry"
        render={() => (
          <FormItem className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 md:p-6">
            <div className="mb-4">
              <Label className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                Industry
              </Label>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Select the industry most closely aligned with your work.
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {INDUSTRY_OPTIONS.map((option) => {
                const selected = industry === option;

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() =>
                      form.setValue("organizationProfile.industry", option, {
                        shouldDirty: true,
                        shouldTouch: true,
                        shouldValidate: true,
                      })
                    }
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

            <FormMessage className="mt-3 text-red-400">
              {form.formState.errors.organizationProfile?.industry?.message}
            </FormMessage>
          </FormItem>
        )}
      />

      <div className="grid gap-5 md:grid-cols-2">
        <FormField
          control={form.control}
          name="organizationProfile.size"
          render={() => (
            <FormItem className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 md:p-6">
              <div className="mb-4">
                <Label className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                  Company Size
                </Label>
              </div>

              <div className="grid gap-3">
                {COMPANY_SIZE_OPTIONS.map((option) => {
                  const selected = size === option;

                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() =>
                        form.setValue("organizationProfile.size", option, {
                          shouldDirty: true,
                          shouldTouch: true,
                          shouldValidate: true,
                        })
                      }
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

              <FormMessage className="mt-3 text-red-400">
                {form.formState.errors.organizationProfile?.size?.message}
              </FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="organizationProfile.reach"
          render={() => (
            <FormItem className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 md:p-6">
              <div className="mb-4">
                <Label className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                  Geographic Reach
                </Label>
              </div>

              <div className="grid gap-3">
                {GEOGRAPHIC_REACH_OPTIONS.map((option) => {
                  const selected = reach === option;

                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() =>
                        form.setValue("organizationProfile.reach", option, {
                          shouldDirty: true,
                          shouldTouch: true,
                          shouldValidate: true,
                        })
                      }
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

              <FormMessage className="mt-3 text-red-400">
                {form.formState.errors.organizationProfile?.reach?.message}
              </FormMessage>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
