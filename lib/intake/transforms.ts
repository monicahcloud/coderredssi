import type { SchoolSafetyIntakeValues } from "./schemas";
import { scoreIntake } from "./scoring";

export type IntakeSubmissionPayload = {
  intakeId: string;
  submittedAt: string;
  responses: SchoolSafetyIntakeValues;
  scoring: {
    score: number;
    tier: string;
  };
};

export function createIntakeId(prefix = "CRSSI"): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).slice(2, 8).toUpperCase();

  return `${prefix}-${timestamp}-${random}`;
}

export function normalizePhoneNumber(phone: string): string {
  const digits = phone.replace(/\D/g, "");

  if (digits.length === 11 && digits.startsWith("1")) {
    return digits.slice(1);
  }

  return digits;
}

export function sanitizeIntakeValues(
  values: SchoolSafetyIntakeValues,
): SchoolSafetyIntakeValues {
  return {
    ...values,
    schoolContact: {
      ...values.schoolContact,
      phone: normalizePhoneNumber(values.schoolContact.phone),
      schoolName: values.schoolContact.schoolName.trim(),
      schoolDistrict: values.schoolContact.schoolDistrict.trim(),
      city: values.schoolContact.city.trim(),
      zipCode: values.schoolContact.zipCode.trim(),
      contactName: values.schoolContact.contactName.trim(),
      contactRole: values.schoolContact.contactRole.trim(),
      email: values.schoolContact.email.trim().toLowerCase(),
      schoolTypeOther: values.schoolContact.schoolTypeOther?.trim() ?? "",
    },
    incidents: {
      ...values.incidents,
      incidentOther: values.incidents.incidentOther?.trim() ?? "",
      topConcerns: values.incidents.topConcerns?.trim() ?? "",
    },
    systemsResources: {
      ...values.systemsResources,
      vulnerabilitiesDescription:
        values.systemsResources.vulnerabilitiesDescription?.trim() ?? "",
    },

    capacityBarriers: {
      ...values.capacityBarriers,
      barriersOther: values.capacityBarriers.barriersOther?.trim() ?? "",
    },
    services: {
      ...values.services,
      supportTypesOther: values.services.supportTypesOther?.trim() ?? "",
      additionalInformation:
        values.services.additionalInformation?.trim() ?? "",
    },
  };
}

export function buildIntakeSubmissionPayload(
  values: SchoolSafetyIntakeValues,
): IntakeSubmissionPayload {
  const sanitized = sanitizeIntakeValues(values);
  const { score, tier } = scoreIntake(sanitized);

  return {
    intakeId: createIntakeId(),
    submittedAt: new Date().toISOString(),
    responses: sanitized,
    scoring: {
      score,
      tier,
    },
  };
}
