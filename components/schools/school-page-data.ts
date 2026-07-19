import { Cctv, ClipboardCheck, GraduationCap, RefreshCw } from "lucide-react";

export const schoolPillars = [
  {
    number: "01",
    title: "Physical Assessments",
    shortTitle: "Assess",
    description:
      "Identify vulnerabilities, operational gaps, and readiness priorities through real-world campus evaluations.",
    href: "/schools/physical-assessments",
    badge: "/images/assesmentpillar.png",
  },
  {
    number: "02",
    title: "Education",
    shortTitle: "Educate",
    description:
      "Prepare staff, educators, and students with practical training, drills, and role-based emergency procedures.",
    href: "/schools/education",
    badge: "/images/educationpillar.png",
  },
  {
    number: "03",
    title: "Equipment",
    shortTitle: "Equip",
    description:
      "Coordinate vetted technology, implementation partners, and equipment into one reliable security ecosystem.",
    href: "/schools/equipment",
    badge: "/images/equipmentpillar.png",
  },
  {
    number: "04",
    title: "Reassessment",
    shortTitle: "Reassess",
    description:
      "Maintain long-term readiness through follow-up evaluations, accountability, and continuous improvement.",
    href: "/schools/reassessment",
    badge: "/images/reassesspillar.png",
  },
] as const;

export const schoolSafetyGaps = [
  "Security systems and emergency procedures managed in silos",
  "Plans written once but never routinely tested or revisited",
  "Competing vendors offering disconnected recommendations",
  "Assessments completed without funding or implementation support",
] as const;

export const schoolProcess = [
  {
    number: "01",
    title: "Align",
    description: "Confirm campuses, priorities, and district contacts.",
  },
  {
    number: "02",
    title: "Assess",
    description: "Evaluate current physical security and readiness.",
  },
  {
    number: "03",
    title: "Prioritize",
    description: "Deliver findings, gap analysis, and clear recommendations.",
  },
  {
    number: "04",
    title: "Implement",
    description: "Coordinate training, equipment, and partner execution.",
  },
  {
    number: "05",
    title: "Sustain",
    description: "Provide follow-up support and annual reassessment.",
  },
] as const;
