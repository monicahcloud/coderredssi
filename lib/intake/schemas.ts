import { z } from "zod";
import {
  CHARACTER_LIMITS,
  DRILL_FREQUENCY_OPTIONS,
  EMERGENCY_PLAN_OPTIONS,
  ENTRY_PROCEDURE_OPTIONS,
  FIRST_RESPONDER_RELATIONSHIP_OPTIONS,
  INCIDENT_FREQUENCY_OPTIONS,
  MENTAL_HEALTH_SUPPORT_OPTIONS,
  PHYSICAL_SECURITY_FEATURE_OPTIONS,
  PREFERRED_TIMEFRAME_OPTIONS,
  SAFETY_INCIDENT_OPTIONS,
  SCHOOL_SETTING_OPTIONS,
  SCHOOL_TYPE_OPTIONS,
  SERVICE_REQUEST_OPTIONS,
  THREAT_ASSESSMENT_TEAM_OPTIONS,
  US_STATES,
  BARRIER_OPTIONS,
} from "./constants";

const phoneRegex = /^(?:\+1\s?)?(?:\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;

const zipRegex = /^\d{5}$/;

const stateValues = US_STATES.map((state) => state.value) as [
  string,
  ...string[],
];

const schoolTypeValues = [...SCHOOL_TYPE_OPTIONS] as [string, ...string[]];
const schoolSettingValues = [...SCHOOL_SETTING_OPTIONS] as [
  string,
  ...string[],
];
const incidentFrequencyValues = [...INCIDENT_FREQUENCY_OPTIONS] as [
  string,
  ...string[],
];
const emergencyPlanValues = [...EMERGENCY_PLAN_OPTIONS] as [
  string,
  ...string[],
];
const threatAssessmentTeamValues = [...THREAT_ASSESSMENT_TEAM_OPTIONS] as [
  string,
  ...string[],
];
const drillFrequencyValues = [...DRILL_FREQUENCY_OPTIONS] as [
  string,
  ...string[],
];
const mentalHealthSupportValues = [...MENTAL_HEALTH_SUPPORT_OPTIONS] as [
  string,
  ...string[],
];
const firstResponderValues = [...FIRST_RESPONDER_RELATIONSHIP_OPTIONS] as [
  string,
  ...string[],
];
const entryProcedureValues = [...ENTRY_PROCEDURE_OPTIONS] as [
  string,
  ...string[],
];
const preferredTimeframeValues = [...PREFERRED_TIMEFRAME_OPTIONS] as [
  string,
  ...string[],
];

const optionalTrimmedString = z.string().trim().optional().or(z.literal(""));

export const schoolSafetyIntakeSchema = z
  .object({
    consent: z.object({
      authorized: z.boolean().refine((value) => value === true, {
        message:
          "You must confirm you are authorized to submit this information.",
      }),
      privacyAccepted: z.boolean().refine((value) => value === true, {
        message: "You must agree to the Privacy Notice.",
      }),
    }),

    schoolContact: z.object({
      schoolName: z.string().trim().min(1, "School name is required.").max(150),
      schoolDistrict: z
        .string()
        .trim()
        .min(1, "School district is required.")
        .max(150),
      city: z.string().trim().min(1, "City is required.").max(100),
      state: z.enum(stateValues, {
        message: "State is required.",
      }),
      zipCode: z
        .string()
        .trim()
        .regex(zipRegex, "Enter a valid 5-digit ZIP code."),
      schoolType: z.string().trim().min(1, "School type is required."),
      schoolTypeOther: optionalTrimmedString,
      schoolSetting: z.enum(schoolSettingValues, {
        message: "School setting is required.",
      }),
      enrollment: z.preprocess(
        (val) =>
          val === "" || val === null || val === undefined
            ? undefined
            : Number(val),
        z
          .number({ message: "Enrollment is required." })
          .min(0, "Enrollment must be at least 0.")
          .max(10000, "Enrollment must be 10,000 or less."),
      ),
      contactName: z
        .string()
        .trim()
        .min(1, "Primary contact name is required.")
        .max(100),
      contactRole: z
        .string()
        .trim()
        .min(1, "Contact role/title is required.")
        .max(100),
      email: z.string().trim().email("Enter a valid email address."),
      phone: z.string().trim().regex(phoneRegex, "Enter a valid phone number."),
    }),

    safetyStatus: z.object({
      campusSafety: z.coerce.number().min(1).max(5),
      emergencyConfidence: z.coerce.number().min(1).max(5),
      policyConsistency: z.coerce.number().min(1).max(5),
      emergencyPlanning: z.coerce.number().min(1).max(5),
      accessControl: z.coerce.number().min(1).max(5),
      threatAssessmentProtocols: z.coerce.number().min(1).max(5),
    }),

    incidents: z.object({
      incidentTypes: z
        .array(z.enum(SAFETY_INCIDENT_OPTIONS))
        .min(1, "Select at least one incident option."),
      incidentOther: z
        .string()
        .trim()
        .max(
          CHARACTER_LIMITS.incidentOther,
          `Must be ${CHARACTER_LIMITS.incidentOther} characters or less.`,
        )
        .optional()
        .or(z.literal("")),
      incidentFrequency: z.enum(incidentFrequencyValues).optional(),
      topConcerns: z
        .string()
        .trim()
        .max(
          CHARACTER_LIMITS.topConcerns,
          `Must be ${CHARACTER_LIMITS.topConcerns} characters or less.`,
        )
        .optional()
        .or(z.literal("")),
    }),

    systemsResources: z.object({
      emergencyPlanStatus: z.enum(emergencyPlanValues, {
        message: "This field is required.",
      }),
      threatAssessmentTeam: z.enum(threatAssessmentTeamValues, {
        message: "This field is required.",
      }),
      staffTrainingLevel: z.coerce.number().min(1).max(5),
      drillFrequency: z.enum(drillFrequencyValues, {
        message: "This field is required.",
      }),
      mentalHealthSupport: z.enum(mentalHealthSupportValues, {
        message: "This field is required.",
      }),
      firstResponderRelationship: z.enum(firstResponderValues, {
        message: "This field is required.",
      }),

      physicalSecurity: z.object({
        entryProcedure: z.enum(entryProcedureValues, {
          message: "This field is required.",
        }),

        securityFeatures: z.array(z.enum(PHYSICAL_SECURITY_FEATURE_OPTIONS)),

        hasVulnerabilities: z.union([z.literal(true), z.literal(false)], {
          message: "Please indicate whether vulnerabilities exist.",
        }),
      }),
      vulnerabilitiesDescription: z
        .string()
        .trim()
        .max(
          CHARACTER_LIMITS.vulnerabilitiesDescription,
          `Must be ${CHARACTER_LIMITS.vulnerabilitiesDescription} characters or less.`,
        )
        .optional()
        .or(z.literal("")),
    }),

    capacityBarriers: z.object({
      implementationCapacity: z.coerce.number().min(1).max(5),
      barriers: z
        .array(z.enum(BARRIER_OPTIONS))
        .min(1, "Select at least one barrier."),
      barriersOther: z
        .string()
        .trim()
        .max(
          CHARACTER_LIMITS.barriersOther,
          `Must be ${CHARACTER_LIMITS.barriersOther} characters or less.`,
        )
        .optional()
        .or(z.literal("")),
      urgency: z.coerce.number().min(1).max(5),
    }),

    services: z.object({
      supportTypes: z
        .array(z.enum(SERVICE_REQUEST_OPTIONS))
        .min(1, "Select at least one service."),
      supportTypesOther: z
        .string()
        .trim()
        .max(
          CHARACTER_LIMITS.supportTypesOther,
          `Must be ${CHARACTER_LIMITS.supportTypesOther} characters or less.`,
        )
        .optional()
        .or(z.literal("")),
      preferredTimeframe: z.enum(preferredTimeframeValues, {
        message: "Preferred timeframe is required.",
      }),
      additionalInformation: z
        .string()
        .trim()
        .max(
          CHARACTER_LIMITS.additionalInformation,
          `Must be ${CHARACTER_LIMITS.additionalInformation} characters or less.`,
        )
        .optional()
        .or(z.literal("")),
    }),

    finalConfirmation: z.object({
      agreeToSubmit: z.boolean().refine((value) => value === true, {
        message: "You must confirm before submitting.",
      }),
    }),
  })
  .superRefine((values, ctx) => {
    if (
      values.schoolContact.schoolType === "Other" &&
      !values.schoolContact.schoolTypeOther?.trim()
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["schoolContact", "schoolTypeOther"],
        message: "Please specify the school type.",
      });
    }

    const selectedIncidents = values.incidents.incidentTypes;
    const hasRealIncident =
      selectedIncidents.length > 0 &&
      !(
        selectedIncidents.length === 1 &&
        selectedIncidents[0] === "None of the above"
      );

    if (
      selectedIncidents.includes("Other") &&
      !values.incidents.incidentOther?.trim()
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["incidents", "incidentOther"],
        message: "Please describe the other incident.",
      });
    }

    if (
      selectedIncidents.includes("None of the above") &&
      selectedIncidents.length > 1
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["incidents", "incidentTypes"],
        message:
          '"None of the above" cannot be selected with other incident options.',
      });
    }

    if (hasRealIncident && !values.incidents.incidentFrequency) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["incidents", "incidentFrequency"],
        message: "Incident frequency is required when incidents are selected.",
      });
    }

    if (
      values.systemsResources.physicalSecurity.hasVulnerabilities === true &&
      (!values.systemsResources.vulnerabilitiesDescription ||
        values.systemsResources.vulnerabilitiesDescription.trim().length === 0)
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["systemsResources", "vulnerabilitiesDescription"],
        message: "Please describe the main vulnerabilities.",
      });
    }

    if (
      values.capacityBarriers.barriers.includes("Other") &&
      !values.capacityBarriers.barriersOther?.trim()
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["capacityBarriers", "barriersOther"],
        message: "Please describe the other barrier.",
      });
    }

    if (
      values.services.supportTypes.includes("Other") &&
      !values.services.supportTypesOther?.trim()
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["services", "supportTypesOther"],
        message: "Please describe the other requested service.",
      });
    }
  });

export type SchoolSafetyIntakeInput = z.input<typeof schoolSafetyIntakeSchema>;
export type SchoolSafetyIntakeValues = z.output<
  typeof schoolSafetyIntakeSchema
>;
export type IntakeStepKey =
  | "consent"
  | "schoolContact"
  | "safetyStatus"
  | "incidents"
  | "systemsResources"
  | "physicalSecurity"
  | "capacityBarriers"
  | "services"
  | "finalConfirmation";
