export const INTAKE_STORAGE_KEY = "code-red-school-safety-intake-draft";

export const TOTAL_INTAKE_STEPS = 9;

export const US_STATES = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PA", label: "Pennsylvania" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" },
  { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" },
  { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" },
  { value: "WY", label: "Wyoming" },
  { value: "DC", label: "District of Columbia" },
] as const;

export const SCHOOL_TYPE_OPTIONS = [
  "Elementary School (K–5)",
  "Middle School (6–8)",
  "High School (9–12)",
  "K–8 School",
  "K–12 School",
  "Alternative/Special Program School",
  "Other",
] as const;

export const SCHOOL_SETTING_OPTIONS = ["Urban", "Suburban", "Rural"] as const;

export const SAFETY_INCIDENT_OPTIONS = [
  "Physical fights or assaults among students",
  "Weapons on campus (including threats to bring weapons)",
  "Bullying or harassment (in-person)",
  "Cyberbullying or online threats",
  "Vandalism or property damage",
  "Drug or alcohol incidents",
  "Self-harm or suicidal ideation concerns",
  "Threats against staff",
  "Threats against students",
  "Sexual assault or harassment",
  "Gang-related incidents",
  "None of the above",
  "Other",
] as const;

export const INCIDENT_FREQUENCY_OPTIONS = [
  "Rare (1–2 per year)",
  "Occasional (every few months)",
  "Frequent (monthly)",
  "Very frequent (weekly or more)",
] as const;

export const EMERGENCY_PLAN_OPTIONS = [
  "Yes, plan exists and is current (updated in last 2 years)",
  "Yes, plan exists but is outdated",
  "No, we do not have a formal plan",
  "Not sure",
] as const;

export const THREAT_ASSESSMENT_TEAM_OPTIONS = [
  "Yes, established and actively trained",
  "Yes, exists but not currently active",
  "No, we do not have a formal team",
  "Not sure",
] as const;

export const DRILL_FREQUENCY_OPTIONS = [
  "Less than required by state",
  "At minimum required by state",
  "More than required (above and beyond)",
  "We do not conduct drills",
] as const;

export const MENTAL_HEALTH_SUPPORT_OPTIONS = [
  "Full-time counselor(s) or social worker(s)",
  "Part-time or shared counselor(s)",
  "Outside providers only (contracted)",
  "Minimal or no mental health support",
] as const;

export const FIRST_RESPONDER_RELATIONSHIP_OPTIONS = [
  "Strong and regular collaboration (SRO Onsite)",
  "Some collaboration (occasional meetings)",
  "Minimal contact",
  "No established relationship",
] as const;

export const ENTRY_PROCEDURE_OPTIONS = [
  "Open campus; doors generally unlocked during school hours",
  "Single main entry monitored during school hours",
  "Controlled access with buzzer/intercom system",
  "Controlled access with ID badges or keycard system",
  "Multiple secured entries with staff stationed",
] as const;

export const PHYSICAL_SECURITY_FEATURE_OPTIONS = [
  "Visitor sign-in and badge system",
  "Controlled access/keycard system for staff/students",
  "Video surveillance (CCTV) system",
  "Staff or student ID badges",
  "On-site School Resource Officer (SRO) or security officer",
  "Secure perimeter fencing",
  "Window coverings/safety film",
  "Locked classroom doors (required in many states)",
  "Panic buttons or emergency notification system",
  "Metal detectors or screening",
  "None of the above",
] as const;

export const BARRIER_OPTIONS = [
  "Budget/funding constraints",
  "Limited staff capacity",
  "Lack of internal expertise",
  "Competing district/school priorities",
  "Unclear regulations or compliance requirements",
  "Stakeholder alignment challenges",
  "Technology/infrastructure limitations",
  "Not sure where to begin",
  "Other",
] as const;

export const SERVICE_REQUEST_OPTIONS = [
  "Emergency operations plan review/update",
  "Threat assessment team development or training",
  "Staff safety training and drills",
  "Student programs (bullying prevention, climate-building)",
  "Mental health and crisis response support",
  "Physical security assessment and recommendations",
  "Technology/communication systems review",
  "Policy review and compliance assessment",
  "Other",
] as const;

export const PREFERRED_TIMEFRAME_OPTIONS = [
  "Within 1 month (urgent)",
  "1–3 months",
  "3–6 months",
  "Flexible/exploring options",
  "Not sure yet",
] as const;

export const SCALE_1_TO_5 = [1, 2, 3, 4, 5] as const;

export const CHARACTER_LIMITS = {
  topConcerns: 200,
  vulnerabilitiesDescription: 200,
  barriersOther: 200,
  supportTypesOther: 200,
  additionalInformation: 500,
  incidentOther: 200,
} as const;

export const STEP_TITLES = [
  "Introduction & Consent",
  "School & Contact Information",
  // "Current Safety Status",
  // "Recent Incidents & Concerns",
  // "Systems, Structures & Resources",
  // "Physical Security Snapshot",
  // "Capacity, Barriers & Readiness",
  // "Services Requested & Next Steps",
  "Review & Submit",
] as const;
