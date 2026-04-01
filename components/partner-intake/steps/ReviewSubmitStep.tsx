"use client";

import { Edit3 } from "lucide-react";
import { useFormContext } from "react-hook-form";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import type { PartnerIntakeValues } from "@/lib/partner/schemas";

type ReviewSubmitStepProps = {
  onEditSection?: (step: number) => void;
};

type ReviewCardProps = {
  title: string;
  step: number;
  children: React.ReactNode;
  onEditSection?: (step: number) => void;
};

function ReviewCard({ title, step, children, onEditSection }: ReviewCardProps) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 md:p-6">
      <div className="mb-4 flex items-start justify-between gap-4">
        <h4 className="text-lg font-black tracking-tight text-white">
          {title}
        </h4>

        {onEditSection && (
          <Button
            type="button"
            variant="outline"
            onClick={() => onEditSection(step)}
            className="h-10 rounded-full border-white/10 bg-white/5 px-4 text-white hover:bg-white/10 hover:text-white">
            <Edit3 className="mr-2 h-4 w-4" />
            Edit
          </Button>
        )}
      </div>

      <div className="space-y-3 text-sm text-white/75">{children}</div>
    </div>
  );
}

function Row({
  label,
  value,
}: {
  label: string;
  value?: string | number | boolean | null;
}) {
  let displayValue: React.ReactNode = "—";

  if (typeof value === "boolean") {
    displayValue = value ? "Yes" : "No";
  } else if (value !== null && value !== undefined && value !== "") {
    displayValue = value;
  }

  return (
    <div className="grid gap-1 border-b border-white/5 pb-3 md:grid-cols-[220px_1fr] md:gap-4">
      <p className="text-[11px] font-black uppercase tracking-[0.18em] text-white/40">
        {label}
      </p>
      <p className="leading-6 text-white/80">{displayValue}</p>
    </div>
  );
}

function ArrayRow({ label, values }: { label: string; values?: string[] }) {
  return (
    <div className="grid gap-1 border-b border-white/5 pb-3 md:grid-cols-[220px_1fr] md:gap-4">
      <p className="text-[11px] font-black uppercase tracking-[0.18em] text-white/40">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {values && values.length > 0 ? (
          values.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/80">
              {item}
            </span>
          ))
        ) : (
          <p className="leading-6 text-white/60">—</p>
        )}
      </div>
    </div>
  );
}

export default function ReviewSubmitStep({
  onEditSection,
}: ReviewSubmitStepProps) {
  const form = useFormContext<PartnerIntakeValues>();
  const values = form.getValues();

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-black tracking-tight text-white">
          Review & Submit
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-white/65">
          Review the partner intake before submitting. You can jump back to any
          section to update details.
        </p>
      </div>

      <ReviewCard
        title="Contact Information"
        step={1}
        onEditSection={onEditSection}>
        <Row label="Organization" value={values.contact.organization} />
        <Row label="Primary Contact" value={values.contact.name} />
        <Row label="Title" value={values.contact.title} />
        <Row label="Email" value={values.contact.email} />
        <Row label="Phone" value={values.contact.phone} />
        <Row label="Website" value={values.contact.website} />
        <Row label="Headquarters Location" value={values.contact.location} />
      </ReviewCard>

      <ReviewCard
        title="Organization Profile"
        step={2}
        onEditSection={onEditSection}>
        <Row
          label="Organization Type"
          value={values.organizationProfile.type}
        />
        <Row label="Industry" value={values.organizationProfile.industry} />
        <Row label="Company Size" value={values.organizationProfile.size} />
        <Row
          label="Geographic Reach"
          value={values.organizationProfile.reach}
        />
      </ReviewCard>

      <ReviewCard
        title="Partnership Interest"
        step={3}
        onEditSection={onEditSection}>
        <ArrayRow
          label="Partnership Type"
          values={values.interest.partnershipType}
        />
        <Row
          label="Preferred Giving Level"
          value={values.interest.givingLevel}
        />
        <Row label="Timeframe" value={values.interest.timeframe} />
        <Row
          label="Existing Relationship"
          value={values.interest.existingRelationship}
        />
      </ReviewCard>

      <ReviewCard
        title="Alignment & Intent"
        step={4}
        onEditSection={onEditSection}>
        <Row label="Why Interested" value={values.alignment.why} />
        <Row label="Desired Outcomes" value={values.alignment.outcomes} />
        <Row
          label="Prior Experience"
          value={values.alignment.priorExperience}
        />
        <Row label="Impact Scope" value={values.alignment.impactType} />
        <Row
          label="In-kind Products / Services"
          value={values.alignment.inKindSupport}
        />
      </ReviewCard>

      <ReviewCard
        title="Decision & Next Steps"
        step={5}
        onEditSection={onEditSection}>
        <Row label="Internal Approvers" value={values.decision.approvers} />
        <Row label="Decision Timeline" value={values.decision.timeline} />
        <Row label="Budget Approved" value={values.decision.budgetApproved} />
        <Row label="Best Next Step" value={values.decision.nextStep} />
      </ReviewCard>

      <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 md:p-6">
        <div className="mb-4">
          <h4 className="text-lg font-black tracking-tight text-white">
            Final Confirmation
          </h4>
          <p className="mt-2 text-sm leading-6 text-white/65">
            Confirm that the information provided is accurate and ready to send
            to the partnership team.
          </p>
        </div>

        <FormField
          control={form.control}
          name="finalConfirmation.agree"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
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
                  <p className="text-sm font-medium text-white">
                    I confirm that this partner intake is complete and ready to
                    submit.
                  </p>
                  <p className="text-sm leading-6 text-white/60">
                    I understand this information will be used to review fit,
                    partnership interest, and the best next step for follow-up.
                  </p>
                </div>
              </div>

              <FormMessage className="mt-3 text-red-400" />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
