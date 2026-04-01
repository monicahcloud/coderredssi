import type { SchoolSafetyIntakeValues } from "./schemas";

export type IntakeTriageTier =
  | "Tier 1"
  | "Tier 2"
  | "Tier 3"
  | "Tier 4"
  | "Tier 5";

export type IntakeScoreResult = {
  score: number;
  tier: IntakeTriageTier;
};

function clampScore(score: number): number {
  return Math.max(1, Math.min(5, Number(score.toFixed(1))));
}

export function calculateIntakeRiskScore(
  values: SchoolSafetyIntakeValues,
): number {
  let score = 2.5;

  if (values.safetyStatus.campusSafety <= 2) score += 0.5;
  if (values.safetyStatus.emergencyConfidence <= 2) score += 0.4;
  if (values.safetyStatus.policyConsistency <= 2) score += 0.4;
  if (values.safetyStatus.emergencyPlanning <= 2) score += 0.4;
  if (values.safetyStatus.accessControl <= 2) score += 0.5;
  if (values.safetyStatus.threatAssessmentProtocols <= 2) score += 0.5;

  if (
    values.systemsResources.emergencyPlanStatus ===
    "No, we do not have a formal plan"
  ) {
    score += 0.5;
  }

  if (
    values.systemsResources.threatAssessmentTeam ===
    "No, we do not have a formal team"
  ) {
    score += 0.5;
  }

  if (values.systemsResources.drillFrequency === "We do not conduct drills") {
    score += 0.4;
  }

  if (
    values.systemsResources.mentalHealthSupport ===
    "Minimal or no mental health support"
  ) {
    score += 0.3;
  }

  if (
    values.systemsResources.firstResponderRelationship ===
    "No established relationship"
  ) {
    score += 0.3;
  }

  if (values.systemsResources.staffTrainingLevel <= 2) {
    score += 0.5;
  }

  const highRiskIncidents = [
    "Weapons on campus (including threats to bring weapons)",
    "Self-harm or suicidal ideation concerns",
    "Threats against staff",
    "Threats against students",
    "Sexual assault or harassment",
    "Gang-related incidents",
  ];

  const highRiskIncidentCount = values.incidents.incidentTypes.filter((item) =>
    highRiskIncidents.includes(item),
  ).length;

  score += Math.min(0.8, highRiskIncidentCount * 0.2);

  if (values.incidents.incidentFrequency === "Frequent (monthly)") {
    score += 0.3;
  }

  if (values.incidents.incidentFrequency === "Very frequent (weekly or more)") {
    score += 0.6;
  }

  if (values.systemsResources.physicalSecurity.hasVulnerabilities) {
    score += 0.5;
  }

  if (values.capacityBarriers.implementationCapacity <= 2) {
    score += 0.3;
  }

  if (values.capacityBarriers.urgency >= 4) {
    score += 0.4;
  }

  return clampScore(score);
}

export function getTriageTier(score: number): IntakeTriageTier {
  if (score >= 4.5) return "Tier 1";
  if (score >= 4.0) return "Tier 2";
  if (score >= 3.0) return "Tier 3";
  if (score >= 2.0) return "Tier 4";
  return "Tier 5";
}

export function scoreIntake(
  values: SchoolSafetyIntakeValues,
): IntakeScoreResult {
  const score = calculateIntakeRiskScore(values);
  const tier = getTriageTier(score);

  return { score, tier };
}
