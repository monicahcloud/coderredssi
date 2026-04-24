/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  partnerIntakeLiteSchema,
  type PartnerIntakeLiteInput,
  type PartnerIntakeLiteValues,
  type PartnerIntakeValues,
} from "@/lib/partner/schemas";

import PartnerProgress from "./PartnerProgress";
import PartnerNavigation from "./PartnerNavigation";
import ContactInfoStep from "./steps/ContactInfoStep";
import OrganizationProfileStep from "./steps/OrganizationProfileStep";
import ReviewSubmitStep from "./steps/ReviewSubmitStep";
import { sendPartnerIntakeEmail } from "@/lib/email/emailjs";

const TOTAL_STEPS = 3;

export default function PartnerIntake() {
  const [step, setStep] = useState(1);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const methods = useForm<
    PartnerIntakeLiteInput,
    unknown,
    PartnerIntakeLiteValues
  >({
    resolver: zodResolver(partnerIntakeLiteSchema),
    mode: "onBlur",
    defaultValues: {
      contact: {
        name: "",
        title: "",
        email: "",
        phone: "",
        organization: "",
        website: "",
        location: "",
      },
      organizationProfile: {
        type: "",
        industry: "",
        size: "",
        reach: "",
      },
      finalConfirmation: {
        agree: false,
      },
    },
  });
  const { trigger, reset, formState } = methods;

  const fieldsByStep = useMemo<Record<number, string[]>>(
    () => ({
      1: [
        "contact.organization",
        "contact.name",
        "contact.title",
        "contact.email",
        "contact.phone",
        "contact.website",
        "contact.location",
      ],
      2: [
        "organizationProfile.type",
        "organizationProfile.industry",
        "organizationProfile.size",
        "organizationProfile.reach",
      ],
      // 3: [
      //   "interest.partnershipType",
      //   "interest.givingLevel",
      //   "interest.timeframe",
      //   "interest.existingRelationship",
      // ],
      // 4: [
      //   "alignment.why",
      //   "alignment.outcomes",
      //   "alignment.priorExperience",
      //   "alignment.impactType",
      //   "alignment.inKindSupport",
      // ],
      // 5: [
      //   "decision.approvers",
      //   "decision.timeline",
      //   "decision.budgetApproved",
      //   "decision.nextStep",
      // ],
      3: ["finalConfirmation.agree"],
    }),
    [],
  );

  const nextStep = async () => {
    setSubmitStatus(null);

    const valid = await trigger(fieldsByStep[step] as any, {
      shouldFocus: true,
    });

    if (!valid) {
      console.log(
        "Partner step validation failed:",
        step,
        methods.formState.errors,
      );
      return;
    }

    setStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
  };

  const prevStep = () => {
    setSubmitStatus(null);
    setStep((prev) => Math.max(prev - 1, 1));
  };

  if (submitStatus?.type === "success") {
    return (
      <div className="flex min-h-[400px] items-center justify-center px-6">
        <div className="max-w-md rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center text-white">
          <h2 className="text-2xl font-bold">Submission Complete</h2>
          <p className="mt-3 text-white/70">
            Your partner interest has been received. We’ll be in touch shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(
          async (values) => {
            setSubmitStatus(null);

            try {
              await sendPartnerIntakeEmail({
                ...values,
                interest: {
                  partnershipType: [],
                  givingLevel: "N/A",
                  timeframe: "N/A",
                  existingRelationship: "N/A",
                },
                alignment: {
                  why: "N/A",
                  outcomes: "N/A",
                  priorExperience: "N/A",
                  impactType: "N/A",
                  inKindSupport: "N/A",
                },
                decision: {
                  approvers: "N/A",
                  timeline: "N/A",
                  budgetApproved: "N/A",
                  nextStep: "N/A",
                },
              } as PartnerIntakeValues);

              reset();
              setStep(1);

              setSubmitStatus({
                type: "success",
                message: "Partner interest submitted successfully.",
              });
            } catch (error) {
              console.error("Partner intake email failed:", error);
              setSubmitStatus({
                type: "error",
                message:
                  "We couldn't submit the partner intake. Please try again.",
              });
            }
          },
          (errors) => {
            console.log("Partner submit blocked by validation:", errors);
          },
        )}
        className="space-y-8">
        <PartnerProgress step={step} total={TOTAL_STEPS} />

        {submitStatus && (
          <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">
            {submitStatus.message}
          </div>
        )}

        {step === 1 && <ContactInfoStep />}
        {step === 2 && <OrganizationProfileStep />}
        {step === 3 && (
          <ReviewSubmitStep
            onEditSection={(targetStep) => setStep(targetStep)}
          />
        )}

        <PartnerNavigation
          step={step}
          totalSteps={TOTAL_STEPS}
          isSubmitting={formState.isSubmitting}
          onNext={nextStep}
          onBack={prevStep}
        />
      </form>
    </FormProvider>
  );
}
