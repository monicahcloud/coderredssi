"use client";

import { useFormContext } from "react-hook-form";

import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import type { SchoolSafetyIntakeInput } from "@/lib/intake/schemas";

export default function IntroConsentStep() {
  const { control } = useFormContext<SchoolSafetyIntakeInput>();

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <h4 className="mb-3 text-xl font-bold text-white">
          School Safety Intake
        </h4>

        <p className="mb-4 text-sm leading-7 text-white/70">
          Help us understand your school&apos;s current safety needs so we can
          provide targeted support. This form takes approximately 10–15 minutes.
        </p>

        <p className="text-sm leading-7 text-white/70">
          This form collects information about your school&apos;s safety systems
          and needs. We do not collect student education records or personally
          identifiable student information. Your data will be handled consistent
          with FERPA and applicable privacy laws.
        </p>
      </div>

      <div className="space-y-4">
        <FormField
          control={control}
          name="consent.authorized"
          render={({ field }) => (
            <FormItem className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-start gap-3">
                <FormControl>
                  <Checkbox
                    checked={Boolean(field.value)}
                    onCheckedChange={(checked) =>
                      field.onChange(Boolean(checked))
                    }
                    className="mt-0.5 border-white/25 data-[state=checked]:border-primary data-[state=checked]:bg-primary"
                  />
                </FormControl>

                <div className="space-y-1">
                  <FormLabel className="text-sm font-medium leading-6 text-white">
                    I am authorized to submit this information on behalf of my
                    school.
                  </FormLabel>
                  <FormMessage className="text-red-400" />
                </div>
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="consent.privacyAccepted"
          render={({ field }) => (
            <FormItem className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-start gap-3">
                <FormControl>
                  <Checkbox
                    checked={Boolean(field.value)}
                    onCheckedChange={(checked) =>
                      field.onChange(Boolean(checked))
                    }
                    className="mt-0.5 border-white/25 data-[state=checked]:border-primary data-[state=checked]:bg-primary"
                  />
                </FormControl>

                <div className="space-y-1">
                  <FormLabel className="text-sm font-medium leading-6 text-white">
                    I have read and agree to the Privacy Notice.
                  </FormLabel>
                  <FormMessage className="text-red-400" />
                </div>
              </div>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
