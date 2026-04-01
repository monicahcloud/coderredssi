/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  partnerIntakeSchema,
  type PartnerIntakeValues,
} from "@/lib/partner/schemas";

import PartnerProgress from "./PartnerProgress";
import PartnerNavigation from "./PartnerNavigation";

import ContactInfoStep from "./steps/ContactInfoStep";
import OrganizationProfileStep from "./steps/OrganizationProfileStep";
import InterestStep from "./steps/InterestStep";
import AlignmentStep from "./steps/AlignmentStep";
import DecisionStep from "./steps/DecisionStep";
import ReviewSubmitStep from "./steps/ReviewSubmitStep";

const TOTAL_STEPS = 6;

export default function PartnerIntake() {
  const [step, setStep] = useState(1);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const methods = useForm<PartnerIntakeValues>({
    resolver: zodResolver(partnerIntakeSchema),
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
      interest: {
        partnershipType: [],
        givingLevel: "",
        timeframe: "",
        existingRelationship: "",
      },
      alignment: {
        why: "",
        outcomes: "",
        priorExperience: "",
        impactType: "",
        inKindSupport: "",
      },
      decision: {
        approvers: "",
        timeline: "",
        budgetApproved: "",
        nextStep: "",
      },
      finalConfirmation: {
        agree: false,
      },
    },
  });

  const { trigger, handleSubmit, formState } = methods;

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
      3: [
        "interest.partnershipType",
        "interest.givingLevel",
        "interest.timeframe",
        "interest.existingRelationship",
      ],
      4: [
        "alignment.why",
        "alignment.outcomes",
        "alignment.priorExperience",
        "alignment.impactType",
        "alignment.inKindSupport",
      ],
      5: [
        "decision.approvers",
        "decision.timeline",
        "decision.budgetApproved",
        "decision.nextStep",
      ],
      6: ["finalConfirmation.agree"],
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

  const onSubmit = async (values: PartnerIntakeValues) => {
    setSubmitStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "partner",
          ...values,
        }),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.message || "Submission failed.");
      }

      setSubmitStatus({
        type: "success",
        message: "Partner interest submitted successfully.",
      });
    } catch (error) {
      console.error(error);
      setSubmitStatus({
        type: "error",
        message: "We couldn't submit the partner intake. Please try again.",
      });
    }
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
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <PartnerProgress step={step} total={TOTAL_STEPS} />

        {submitStatus && (
          <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">
            {submitStatus.message}
          </div>
        )}

        {step === 1 && <ContactInfoStep />}
        {step === 2 && <OrganizationProfileStep />}
        {step === 3 && <InterestStep />}
        {step === 4 && <AlignmentStep />}
        {step === 5 && <DecisionStep />}
        {step === 6 && (
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
