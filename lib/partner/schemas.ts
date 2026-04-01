import { z } from "zod";

export const partnerIntakeSchema = z.object({
  contact: z.object({
    name: z.string().min(1),
    title: z.string().min(1),
    email: z.string().email(),
    phone: z.string().optional(),
    organization: z.string().min(1),
    website: z.string().optional(),
    location: z.string().optional(),
  }),

  organizationProfile: z.object({
    type: z.string().min(1, "Required"),
    industry: z.string().min(1, "Required"),
    size: z.string().min(1, "Required"),
    reach: z.string().min(1, "Required"),
  }),

  interest: z.object({
    partnershipType: z.array(z.string()),
    givingLevel: z.string().min(1),
    timeframe: z.string().min(1),
    existingRelationship: z.string().optional(),
  }),

  alignment: z.object({
    why: z.string().min(1),
    outcomes: z.string().min(1),
    priorExperience: z.string().optional(),
    impactType: z.string(),
    inKindSupport: z.string().optional(),
  }),

  decision: z.object({
    approvers: z.string().optional(),
    timeline: z.string().min(1),
    budgetApproved: z.string().min(1),
    nextStep: z.string().min(1),
  }),

  finalConfirmation: z.object({
    agree: z.boolean().refine((value) => value === true, {
      message: "You must confirm before submitting.",
    }),
  }),
});
export type PartnerIntakeValues = z.infer<typeof partnerIntakeSchema>;
