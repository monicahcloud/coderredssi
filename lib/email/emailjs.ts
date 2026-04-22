import emailjs from "@emailjs/browser";
import type { PartnerIntakeValues } from "@/lib/partner/schemas";
import { SchoolSafetyIntakeValues } from "../intake/schemas";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const PARTNER_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_PARTNER_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
const SCHOOL_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_SCHOOL_TEMPLATE_ID!;

export async function sendPartnerIntakeEmail(values: PartnerIntakeValues) {
  return emailjs.send(
    SERVICE_ID,
    PARTNER_TEMPLATE_ID,
    {
      // CONTACT
      contact_name: values.contact.name,
      contact_title: values.contact.title,
      contact_email: values.contact.email,
      contact_phone: values.contact.phone || "N/A",
      organization: values.contact.organization,
      website: values.contact.website || "N/A",
      location: values.contact.location || "N/A",

      // ORGANIZATION PROFILE
      org_type: values.organizationProfile.type,
      industry: values.organizationProfile.industry,
      org_size: values.organizationProfile.size,
      reach: values.organizationProfile.reach,

      // INTEREST
      partnership_type: values.interest.partnershipType.join(", "),
      giving_level: values.interest.givingLevel,
      timeframe: values.interest.timeframe,
      existing_relationship: values.interest.existingRelationship || "None",

      // ALIGNMENT
      why: values.alignment.why,
      outcomes: values.alignment.outcomes,
      prior_experience: values.alignment.priorExperience || "None",
      impact_type: values.alignment.impactType,
      in_kind_support: values.alignment.inKindSupport || "None",

      // DECISION
      approvers: values.decision.approvers || "N/A",
      decision_timeline: values.decision.timeline,
      budget_approved: values.decision.budgetApproved,
      next_step: values.decision.nextStep,
    },
    {
      publicKey: PUBLIC_KEY,
    },
  );
}

export async function sendSchoolSafetyIntakeEmail(
  values: SchoolSafetyIntakeValues,
) {
  return emailjs.send(
    SERVICE_ID,
    SCHOOL_TEMPLATE_ID,
    {
      // CONSENT
      authorized: values.consent.authorized ? "Yes" : "No",
      privacy_accepted: values.consent.privacyAccepted ? "Yes" : "No",

      // SCHOOL INFO
      school_name: values.schoolContact.schoolName,
      district: values.schoolContact.schoolDistrict,
      city: values.schoolContact.city,
      state: values.schoolContact.state,
      zip: values.schoolContact.zipCode,
      school_type: values.schoolContact.schoolType,
      school_type_other: values.schoolContact.schoolTypeOther || "N/A",
      school_setting: values.schoolContact.schoolSetting,
      enrollment: values.schoolContact.enrollment,

      // CONTACT
      contact_name: values.schoolContact.contactName,
      contact_role: values.schoolContact.contactRole,
      contact_email: values.schoolContact.email,
      contact_phone: values.schoolContact.phone,

      // SAFETY STATUS
      campus_safety: values.safetyStatus.campusSafety,
      emergency_confidence: values.safetyStatus.emergencyConfidence,
      policy_consistency: values.safetyStatus.policyConsistency,
      emergency_planning: values.safetyStatus.emergencyPlanning,
      access_control: values.safetyStatus.accessControl,
      threat_assessment: values.safetyStatus.threatAssessmentProtocols,

      // INCIDENTS
      incidents: values.incidents.incidentTypes.join(", "),
      incident_other: values.incidents.incidentOther || "None",
      incident_frequency: values.incidents.incidentFrequency || "N/A",
      top_concerns: values.incidents.topConcerns || "N/A",

      // SYSTEMS
      emergency_plan: values.systemsResources.emergencyPlanStatus,
      threat_team: values.systemsResources.threatAssessmentTeam,
      staff_training: values.systemsResources.staffTrainingLevel,
      drill_frequency: values.systemsResources.drillFrequency,
      mental_health: values.systemsResources.mentalHealthSupport,
      first_responder: values.systemsResources.firstResponderRelationship,

      // SECURITY
      entry_procedure: values.systemsResources.physicalSecurity.entryProcedure,
      security_features:
        values.systemsResources.physicalSecurity.securityFeatures.join(", "),
      vulnerabilities: values.systemsResources.physicalSecurity
        .hasVulnerabilities
        ? "Yes"
        : "No",
      vulnerabilities_description:
        values.systemsResources.vulnerabilitiesDescription || "None",

      // BARRIERS
      implementation_capacity: values.capacityBarriers.implementationCapacity,
      barriers: values.capacityBarriers.barriers.join(", "),
      barriers_other: values.capacityBarriers.barriersOther || "None",
      urgency: values.capacityBarriers.urgency,

      // SERVICES
      support_types: values.services.supportTypes.join(", "),
      support_types_other: values.services.supportTypesOther || "None",
      timeframe_preferred: values.services.preferredTimeframe,
      additional_info: values.services.additionalInformation || "None",
    },
    {
      publicKey: PUBLIC_KEY,
    },
  );
}
