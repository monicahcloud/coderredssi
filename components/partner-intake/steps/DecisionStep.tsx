"use client";

import { useFormContext } from "react-hook-form";
import type { PartnerIntakeValues } from "@/lib/partner/schemas";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const DECISION_TIMELINE_OPTIONS = [
  "Within 2 weeks",
  "Within 30 days",
  "This quarter",
  "This year",
  "Exploratory / no fixed timeline",
] as const;

const BUDGET_APPROVED_OPTIONS = ["Yes", "No", "Partially", "Not sure"] as const;

const NEXT_STEP_OPTIONS = [
  "Intro call",
  "Proposal",
  "Partnership deck",
  "Grant conversation",
  "Follow-up email",
] as const;

export default function DecisionStep() {
  const form = useFormContext<PartnerIntakeValues>();

  const timeline = form.watch("decision.timeline");
  const budgetApproved = form.watch("decision.budgetApproved");
  const nextStep = form.watch("decision.nextStep");

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-black tracking-tight text-white">
          Decision & Next Steps
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-white/65">
          Help us understand the approval path, timing, and the best immediate
          next step for moving the conversation forward.
        </p>
      </div>

      <FormField
        control={form.control}
        name="decision.approvers"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
              Internal Approvers
            </FormLabel>
            <FormControl>
              <Textarea
                placeholder="Optional: Who else needs to review or approve this internally?"
                className="min-h-[110px] rounded-2xl border-white/10 bg-white/[0.03] text-white placeholder:text-white/25"
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

      <FormField
        control={form.control}
        name="decision.timeline"
        render={() => (
          <FormItem className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 md:p-6">
            <div className="mb-4">
              <Label className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                Typical Decision Timeline
              </Label>
              <p className="mt-2 text-sm leading-6 text-white/65">
                How long does a decision like this typically take on your side?
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {DECISION_TIMELINE_OPTIONS.map((option) => {
                const selected = timeline === option;

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() =>
                      form.setValue("decision.timeline", option, {
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
              {form.formState.errors.decision?.timeline?.message}
            </FormMessage>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="decision.budgetApproved"
        render={() => (
          <FormItem className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 md:p-6">
            <div className="mb-4">
              <Label className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                Budget Status
              </Label>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Is there already budget approved for this type of support?
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {BUDGET_APPROVED_OPTIONS.map((option) => {
                const selected = budgetApproved === option;

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() =>
                      form.setValue("decision.budgetApproved", option, {
                        shouldDirty: true,
                        shouldTouch: true,
                        shouldValidate: true,
                      })
                    }
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

            <FormMessage className="mt-3 text-red-400">
              {form.formState.errors.decision?.budgetApproved?.message}
            </FormMessage>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="decision.nextStep"
        render={() => (
          <FormItem className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 md:p-6">
            <div className="mb-4">
              <Label className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                Best Next Step
              </Label>
              <p className="mt-2 text-sm leading-6 text-white/65">
                What would be the most helpful next move from our side?
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {NEXT_STEP_OPTIONS.map((option) => {
                const selected = nextStep === option;

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() =>
                      form.setValue("decision.nextStep", option, {
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
              {form.formState.errors.decision?.nextStep?.message}
            </FormMessage>
          </FormItem>
        )}
      />
    </div>
  );
}
