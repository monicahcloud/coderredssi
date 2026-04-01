"use client";

import { useFormContext } from "react-hook-form";
import type { PartnerIntakeValues } from "@/lib/partner/schemas";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const IMPACT_OPTIONS = [
  "National visibility",
  "Regional impact",
  "Specific project",
  "Exploratory",
];

export default function AlignmentStep() {
  const form = useFormContext<PartnerIntakeValues>();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h3 className="text-2xl font-black tracking-tight text-white">
          Alignment & Intent
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-white/65">
          Help us understand why you’re interested and how this partnership
          aligns with your organization’s goals.
        </p>
      </div>

      {/* WHY */}
      <FormField
        control={form.control}
        name="alignment.why"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
              Why are you interested in supporting school safety?
            </FormLabel>
            <FormControl>
              <Textarea
                placeholder="Share your motivation, mission alignment, or strategic interest..."
                className="min-h-[120px] rounded-2xl border-white/10 bg-white/[0.03] text-white placeholder:text-white/25"
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

      {/* OUTCOMES */}
      <FormField
        control={form.control}
        name="alignment.outcomes"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
              What outcomes matter most to you?
            </FormLabel>
            <FormControl>
              <Textarea
                placeholder="Examples: measurable impact, visibility, implementation, community outcomes..."
                className="min-h-[120px] rounded-2xl border-white/10 bg-white/[0.03] text-white placeholder:text-white/25"
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

      {/* PRIOR EXPERIENCE */}
      <FormField
        control={form.control}
        name="alignment.priorExperience"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
              Previous involvement (optional)
            </FormLabel>
            <FormControl>
              <Textarea
                placeholder="Have you supported education, safety, or similar initiatives before?"
                className="min-h-[100px] rounded-2xl border-white/10 bg-white/[0.03] text-white placeholder:text-white/25"
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

      {/* IMPACT TYPE */}
      <FormField
        control={form.control}
        name="alignment.impactType"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
              Desired Impact Scope
            </FormLabel>

            <div className="grid gap-3 sm:grid-cols-2">
              {IMPACT_OPTIONS.map((option) => {
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

      {/* IN-KIND SUPPORT */}
      <FormField
        control={form.control}
        name="alignment.inKindSupport"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
              In-kind products or services (optional)
            </FormLabel>
            <FormControl>
              <Input
                placeholder="Technology, equipment, services, etc."
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
