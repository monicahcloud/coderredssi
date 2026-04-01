import type { SchoolSafetyIntakeValues } from "./schemas";

export const defaultIntakeValues: SchoolSafetyIntakeValues = {
  consent: {
    authorized: false,
    privacyAccepted: false,
  },

  schoolContact: {
    schoolName: "",
    schoolDistrict: "",
    city: "",
    state: "AL",
    zipCode: "",
    schoolType: "",
    schoolTypeOther: "",
    schoolSetting: "Urban",
    enrollment: 0,
    contactName: "",
    contactRole: "",
    email: "",
    phone: "",
  },

  safetyStatus: {
    campusSafety: 3,
    emergencyConfidence: 3,
    policyConsistency: 3,
    emergencyPlanning: 3,
    accessControl: 3,
    threatAssessmentProtocols: 3,
  },

  incidents: {
    incidentTypes: [],
    incidentOther: "",
    incidentFrequency: undefined,
    topConcerns: "",
  },

  systemsResources: {
    emergencyPlanStatus: "Not sure",
    threatAssessmentTeam: "Not sure",
    drillFrequency: "At minimum required by state",
    mentalHealthSupport: "Minimal or no mental health support",
    firstResponderRelationship: "Minimal contact",
    staffTrainingLevel: 3,
    physicalSecurity: {
      entryProcedure: "Single main entry monitored during school hours",
      securityFeatures: [],
      hasVulnerabilities: false,
    },
    vulnerabilitiesDescription: "",
  },

  capacityBarriers: {
    implementationCapacity: 3,
    barriers: [],
    barriersOther: "",
    urgency: 3,
  },

  services: {
    supportTypes: [],
    supportTypesOther: "",
    preferredTimeframe: "Flexible/exploring options",
    additionalInformation: "",
  },

  finalConfirmation: {
    agreeToSubmit: false,
  },
};
