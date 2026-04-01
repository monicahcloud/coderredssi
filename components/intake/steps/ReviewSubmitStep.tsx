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
import { SchoolSafetyIntakeValues } from "@/lib/intake/schemas";

type ReviewSubmitStepProps = {
  onEditSection: (step: number) => void;
};

type ReviewCardProps = {
  title: string;
  step: number;
  children: React.ReactNode;
  onEditSection: (step: number) => void;
};

function ReviewCard({ title, step, children, onEditSection }: ReviewCardProps) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/3 p-5 md:p-6">
      <div className="mb-4 flex items-start justify-between gap-4">
        <h4 className="text-lg font-black tracking-tight text-white">
          {title}
        </h4>

        <Button
          type="button"
          variant="outline"
          onClick={() => onEditSection(step)}
          className="h-10 rounded-full border-white/10 bg-white/5 px-4 text-white hover:bg-white/10 hover:text-white">
          <Edit3 className="mr-2 h-4 w-4" />
          Edit
        </Button>
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
              className="rounded-full border border-white/10 bg-white/4 px-3 py-1 text-xs text-white/80">
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
  const form = useFormContext<SchoolSafetyIntakeValues>();
  const values = form.getValues();

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-black tracking-tight text-white">
          Review & Submit
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-white/65">
          Review the intake carefully before final submission. You can jump back
          to any section to make changes.
        </p>
      </div>

      <ReviewCard
        title="School & Contact Information"
        step={2}
        onEditSection={onEditSection}>
        <Row label="School Name" value={values.schoolContact.schoolName} />
        <Row label="District" value={values.schoolContact.schoolDistrict} />
        <Row label="City" value={values.schoolContact.city} />
        <Row label="State" value={values.schoolContact.state} />
        <Row label="ZIP Code" value={values.schoolContact.zipCode} />
        <Row label="School Type" value={values.schoolContact.schoolType} />
        <Row
          label="School Type Other"
          value={values.schoolContact.schoolTypeOther}
        />
        <Row
          label="School Setting"
          value={values.schoolContact.schoolSetting}
        />
        <Row label="Enrollment" value={values.schoolContact.enrollment} />
        <Row label="Contact Name" value={values.schoolContact.contactName} />
        <Row label="Role / Title" value={values.schoolContact.contactRole} />
        <Row label="Email" value={values.schoolContact.email} />
        <Row label="Phone" value={values.schoolContact.phone} />
      </ReviewCard>

      {/* <ReviewCard
        title="Current Safety Status"
        step={3}
        onEditSection={onEditSection}>
        <Row
          label="Overall Campus Safety"
          value={values.safetyStatus.campusSafety}
        />
        <Row
          label="Emergency Confidence"
          value={values.safetyStatus.emergencyConfidence}
        />
        <Row
          label="Policy Consistency"
          value={values.safetyStatus.policyConsistency}
        />
        <Row
          label="Emergency Planning"
          value={values.safetyStatus.emergencyPlanning}
        />
        <Row label="Access Control" value={values.safetyStatus.accessControl} />
        <Row
          label="Threat Assessment Protocols"
          value={values.safetyStatus.threatAssessmentProtocols}
        />
      </ReviewCard> */}

      {/* <ReviewCard
        title="Recent Incidents & Concerns"
        step={4}
        onEditSection={onEditSection}>
        <ArrayRow
          label="Incident Types"
          values={values.incidents.incidentTypes}
        />
        <Row label="Other Incident" value={values.incidents.incidentOther} />
        <Row
          label="Incident Frequency"
          value={values.incidents.incidentFrequency}
        />
        <Row label="Top Concerns" value={values.incidents.topConcerns} />
      </ReviewCard> */}

      {/* <ReviewCard
        title="Systems, Structures & Resources"
        step={5}
        onEditSection={onEditSection}>
        <Row
          label="Emergency Plan Status"
          value={values.systemsResources.emergencyPlanStatus}
        />
        <Row
          label="Threat Assessment Team"
          value={values.systemsResources.threatAssessmentTeam}
        />
        <Row
          label="Drill Frequency"
          value={values.systemsResources.drillFrequency}
        />
        <Row
          label="Mental Health Support"
          value={values.systemsResources.mentalHealthSupport}
        />
        <Row
          label="First Responder Relationship"
          value={values.systemsResources.firstResponderRelationship}
        />
        <Row
          label="Staff Training Level"
          value={values.systemsResources.staffTrainingLevel}
        />
      </ReviewCard> */}

      {/* <ReviewCard
        title="Physical Security Snapshot"
        step={6}
        onEditSection={onEditSection}>
        <Row
          label="Entry Procedure"
          value={values.systemsResources.physicalSecurity.entryProcedure}
        />
        <ArrayRow
          label="Security Features"
          values={values.systemsResources.physicalSecurity.securityFeatures}
        />
        <Row
          label="Known Vulnerabilities"
          value={values.systemsResources.physicalSecurity.hasVulnerabilities}
        />
        <Row
          label="Vulnerability Details"
          value={values.systemsResources.vulnerabilitiesDescription}
        />
      </ReviewCard> */}

      {/* <ReviewCard
        title="Capacity, Barriers & Readiness"
        step={7}
        onEditSection={onEditSection}>
        <Row
          label="Implementation Capacity"
          value={values.capacityBarriers.implementationCapacity}
        />
        <ArrayRow label="Barriers" values={values.capacityBarriers.barriers} />
        <Row
          label="Other Barrier"
          value={values.capacityBarriers.barriersOther}
        />
        <Row label="Urgency" value={values.capacityBarriers.urgency} />
      </ReviewCard> */}
      {/* 
      <ReviewCard
        title="Services Requested & Next Steps"
        step={8}
        onEditSection={onEditSection}>
        <ArrayRow
          label="Requested Services"
          values={values.services.supportTypes}
        />
        <Row
          label="Other Requested Service"
          value={values.services.supportTypesOther}
        />
        <Row
          label="Preferred Timeframe"
          value={values.services.preferredTimeframe}
        />
        <Row
          label="Additional Information"
          value={values.services.additionalInformation}
        />
      </ReviewCard> */}

      <div className="rounded-[1.5rem] border border-white/10 bg-white/3 p-5 md:p-6">
        <div className="mb-4">
          <h4 className="text-lg font-black tracking-tight text-white">
            Final Confirmation
          </h4>
          <p className="mt-2 text-sm leading-6 text-white/65">
            Confirm that the information provided is accurate to the best of
            your knowledge and that you are authorized to submit it.
          </p>
        </div>

        <FormField
          control={form.control}
          name="finalConfirmation.agreeToSubmit"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/3 p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={(checked) =>
                      field.onChange(Boolean(checked))
                    }
                    className="mt-0.5 border-white/25 data-[state=checked]:border-primary data-[state=checked]:bg-primary"
                  />
                </FormControl>

                <div className="space-y-1">
                  <p className="text-sm font-medium text-white">
                    I confirm that this intake is complete and ready to submit.
                  </p>
                  <p className="text-sm leading-6 text-white/60">
                    I understand this information will be used to review our
                    school’s current safety needs and determine appropriate next
                    steps.
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
