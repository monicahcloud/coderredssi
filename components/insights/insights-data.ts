import {
  FileCheck2,
  GraduationCap,
  RadioTower,
  ShieldCheck,
} from "lucide-react";

export const insightAreas = [
  {
    number: "01",
    icon: FileCheck2,
    eyebrow: "Physical assessments",
    title: "See the whole campus—not just the hardware",
    summary:
      "A meaningful assessment connects the physical environment with daily routines, human behavior, communication, and emergency response.",
    points: [
      "Observe arrival, dismissal, visitor management, and movement throughout the school day.",
      "Review how written procedures are understood and practiced by the people expected to carry them out.",
      "Prioritize findings by risk, urgency, feasibility, and potential impact—not by product category.",
    ],
  },
  {
    number: "02",
    icon: ShieldCheck,
    eyebrow: "Preparedness",
    title: "Turn the written plan into practiced readiness",
    summary:
      "A plan becomes useful when responsibilities are clear, communication works, and teams can make sound decisions under pressure.",
    points: [
      "Assign decision-making roles and identify backups before an emergency occurs.",
      "Practice realistic scenarios that test communication, accountability, reunification, and recovery.",
      "Use every drill and incident to identify gaps, document lessons, and improve the plan.",
    ],
  },
  {
    number: "03",
    icon: GraduationCap,
    eyebrow: "Safety education",
    title: "Build awareness without building fear",
    summary:
      "Age-appropriate education can improve reporting, confidence, and shared responsibility while protecting student well-being.",
    points: [
      "Teach students and staff what to notice, how to report concerns, and what happens after a report is made.",
      "Use clear, consistent language that supports preparedness without sensationalizing threats.",
      "Make psychological safety, trust, and belonging part of the school’s broader safety strategy.",
    ],
  },
  {
    number: "04",
    icon: RadioTower,
    eyebrow: "Technology and equipment",
    title: "Choose tools that support the mission",
    summary:
      "Technology should strengthen a defined safety strategy, integrate with existing operations, and remain usable during a real incident.",
    points: [
      "Define the operational problem before evaluating products or vendors.",
      "Consider interoperability, training, maintenance, accessibility, privacy, and total cost of ownership.",
      "Test whether the system helps the right people receive and act on information quickly.",
    ],
  },
] as const;

export const readinessCycle = [
  {
    label: "Assess",
    text: "Understand current conditions and vulnerabilities.",
  },
  {
    label: "Prioritize",
    text: "Focus resources on the most consequential gaps.",
  },
  {
    label: "Implement",
    text: "Align people, processes, and equipment.",
  },
  {
    label: "Reassess",
    text: "Measure progress and adapt as conditions change.",
  },
] as const;
