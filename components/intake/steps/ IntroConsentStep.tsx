"use client";

import { useFormContext } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function IntroConsentStep() {
  const { control } = useFormContext<IntakeFormValues>();

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-background/10 bg-background/[0.03] p-6">
        <h4 className="mb-3 text-xl font-bold text-background">
          School Safety Intake
        </h4>
        <p className="mb-4 text-sm leading-7 text-background/70">
          Help us understand your school&apos;s current safety needs so we can
          provide targeted support. This form takes approximately 10–15 minutes.
        </p>
        <p className="text-sm leading-7 text-background/70">
          This form collects information about your school&apos;s safety systems
          and needs. We do not collect student education records or personally
          identifiable student information. Your data will be handled consistent
          with FERPA and applicable privacy laws.
        </p>
      </div>

      <FormField
        control={control}
        name="authorizedConsent"
        render={({ field }) => (
          <FormItem className="rounded-2xl border border-background/10 bg-background/[0.03] p-5">
            <div className="flex items-start gap-3">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={(checked) =>
                    field.onChange(Boolean(checked))
                  }
                />
              </FormControl>

              <div className="space-y-1">
                <FormLabel className="text-sm font-medium leading-6 text-background">
                  I am authorized to submit this information on behalf of my
                  school and agree to the Privacy Notice.
                </FormLabel>
                <FormMessage className="text-red-400" />
              </div>
            </div>
          </FormItem>
        )}
      />
    </div>
  );
}
