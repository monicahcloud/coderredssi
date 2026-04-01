/* eslint-disable @typescript-eslint/no-explicit-any */
type SchoolIntakePayload = Record<string, unknown>;
type PartnerPayload = Record<string, unknown>;

function pretty(value: unknown): string {
  if (value === null || value === undefined || value === "") return "—";
  if (Array.isArray(value)) return value.length ? value.join(", ") : "—";
  if (typeof value === "object") return JSON.stringify(value, null, 2);
  return String(value);
}

export function buildPartnerEmail(payload: PartnerPayload) {
  return `
New Partner Interest Submission

Contact
- Organization: ${pretty(payload.contact && (payload.contact as any).organization)}
- Name: ${pretty(payload.contact && (payload.contact as any).name)}
- Title: ${pretty(payload.contact && (payload.contact as any).title)}
- Email: ${pretty(payload.contact && (payload.contact as any).email)}
- Phone: ${pretty(payload.contact && (payload.contact as any).phone)}
- Website: ${pretty(payload.contact && (payload.contact as any).website)}
- Location: ${pretty(payload.contact && (payload.contact as any).location)}

Organization Profile
- Type: ${pretty(payload.organizationProfile && (payload.organizationProfile as any).type)}
- Industry: ${pretty(payload.organizationProfile && (payload.organizationProfile as any).industry)}
- Size: ${pretty(payload.organizationProfile && (payload.organizationProfile as any).size)}
- Reach: ${pretty(payload.organizationProfile && (payload.organizationProfile as any).reach)}

Interest
- Partnership Type: ${pretty(payload.interest && (payload.interest as any).partnershipType)}
- Giving Level: ${pretty(payload.interest && (payload.interest as any).givingLevel)}
- Timeframe: ${pretty(payload.interest && (payload.interest as any).timeframe)}
- Existing Relationship: ${pretty(payload.interest && (payload.interest as any).existingRelationship)}

Alignment
- Why: ${pretty(payload.alignment && (payload.alignment as any).why)}
- Outcomes: ${pretty(payload.alignment && (payload.alignment as any).outcomes)}
- Prior Experience: ${pretty(payload.alignment && (payload.alignment as any).priorExperience)}
- Impact Type: ${pretty(payload.alignment && (payload.alignment as any).impactType)}
- In-Kind Support: ${pretty(payload.alignment && (payload.alignment as any).inKindSupport)}

Decision
- Approvers: ${pretty(payload.decision && (payload.decision as any).approvers)}
- Timeline: ${pretty(payload.decision && (payload.decision as any).timeline)}
- Budget Approved: ${pretty(payload.decision && (payload.decision as any).budgetApproved)}
- Next Step: ${pretty(payload.decision && (payload.decision as any).nextStep)}
`;
}

export function buildSchoolEmail(payload: SchoolIntakePayload) {
  return `
New School Safety Intake Submission

Consent
- Authorized: ${pretty(payload.consent && (payload.consent as any).authorized)}
- Privacy Accepted: ${pretty(payload.consent && (payload.consent as any).privacyAccepted)}

School Contact
- School Name: ${pretty(payload.schoolContact && (payload.schoolContact as any).schoolName)}
- District: ${pretty(payload.schoolContact && (payload.schoolContact as any).schoolDistrict)}
- City: ${pretty(payload.schoolContact && (payload.schoolContact as any).city)}
- State: ${pretty(payload.schoolContact && (payload.schoolContact as any).state)}
- ZIP: ${pretty(payload.schoolContact && (payload.schoolContact as any).zipCode)}
- School Type: ${pretty(payload.schoolContact && (payload.schoolContact as any).schoolType)}
- Setting: ${pretty(payload.schoolContact && (payload.schoolContact as any).schoolSetting)}
- Enrollment: ${pretty(payload.schoolContact && (payload.schoolContact as any).enrollment)}
- Contact Name: ${pretty(payload.schoolContact && (payload.schoolContact as any).contactName)}
- Contact Role: ${pretty(payload.schoolContact && (payload.schoolContact as any).contactRole)}
- Email: ${pretty(payload.schoolContact && (payload.schoolContact as any).email)}
- Phone: ${pretty(payload.schoolContact && (payload.schoolContact as any).phone)}

Safety Status
- Campus Safety: ${pretty(payload.safetyStatus && (payload.safetyStatus as any).campusSafety)}
- Emergency Confidence: ${pretty(payload.safetyStatus && (payload.safetyStatus as any).emergencyConfidence)}
- Policy Consistency: ${pretty(payload.safetyStatus && (payload.safetyStatus as any).policyConsistency)}
- Emergency Planning: ${pretty(payload.safetyStatus && (payload.safetyStatus as any).emergencyPlanning)}
- Access Control: ${pretty(payload.safetyStatus && (payload.safetyStatus as any).accessControl)}
- Threat Assessment Protocols: ${pretty(payload.safetyStatus && (payload.safetyStatus as any).threatAssessmentProtocols)}

Incidents
- Incident Types: ${pretty(payload.incidents && (payload.incidents as any).incidentTypes)}
- Incident Other: ${pretty(payload.incidents && (payload.incidents as any).incidentOther)}
- Incident Frequency: ${pretty(payload.incidents && (payload.incidents as any).incidentFrequency)}
- Top Concerns: ${pretty(payload.incidents && (payload.incidents as any).topConcerns)}

Systems Resources
- Emergency Plan Status: ${pretty(payload.systemsResources && (payload.systemsResources as any).emergencyPlanStatus)}
- Threat Assessment Team: ${pretty(payload.systemsResources && (payload.systemsResources as any).threatAssessmentTeam)}
- Drill Frequency: ${pretty(payload.systemsResources && (payload.systemsResources as any).drillFrequency)}
- Mental Health Support: ${pretty(payload.systemsResources && (payload.systemsResources as any).mentalHealthSupport)}
- First Responder Relationship: ${pretty(payload.systemsResources && (payload.systemsResources as any).firstResponderRelationship)}

Physical Security
- Entry Procedure: ${pretty(payload.systemsResources && (payload.systemsResources as any).physicalSecurity?.entryProcedure)}
- Security Features: ${pretty(payload.systemsResources && (payload.systemsResources as any).physicalSecurity?.securityFeatures)}
- Has Vulnerabilities: ${pretty(payload.systemsResources && (payload.systemsResources as any).physicalSecurity?.hasVulnerabilities)}
- Vulnerability Details: ${pretty(payload.systemsResources && (payload.systemsResources as any).vulnerabilitiesDescription)}

Capacity / Barriers
- Implementation Capacity: ${pretty(payload.capacityBarriers && (payload.capacityBarriers as any).implementationCapacity)}
- Barriers: ${pretty(payload.capacityBarriers && (payload.capacityBarriers as any).barriers)}
- Other Barrier: ${pretty(payload.capacityBarriers && (payload.capacityBarriers as any).barriersOther)}
- Urgency: ${pretty(payload.capacityBarriers && (payload.capacityBarriers as any).urgency)}

Services
- Support Types: ${pretty(payload.services && (payload.services as any).supportTypes)}
- Other Support: ${pretty(payload.services && (payload.services as any).supportTypesOther)}
- Preferred Timeframe: ${pretty(payload.services && (payload.services as any).preferredTimeframe)}
- Additional Information: ${pretty(payload.services && (payload.services as any).additionalInformation)}
`;
}
