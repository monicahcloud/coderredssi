/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo, useState } from "react";

import {
  schoolSafetyIntakeSchema,
  type SchoolSafetyIntakeInput,
  type SchoolSafetyIntakeValues,
} from "@/lib/intake/schemas";

import {
  saveIntakeDraft,
  loadIntakeDraft,
  clearIntakeDraft,
} from "@/lib/intake/storage";

import IntakeProgress from "./IntakeProgress";
import IntakeNavigation from "./IntakeNavigation";
import SchoolContactStep from "./steps/SchoolContactStep";
import SafetyStatusStep from "./steps/SafetyStatusStep";
import SystemsResourcesStep from "./steps/SystemsResourcesStep";
import PhysicalSecurityStep from "./steps/PhysicalSecurityStep";
import CapacityBarriersStep from "./steps/CapacityBarriersStep";
import ServicesNextStepsStep from "./steps/ServicesNextStepsStep";
import ReviewSubmitStep from "./steps/ReviewSubmitStep";
import IntroConsentStep from "./steps/IntroConsentStep";
import IncidentsConcernsStep from "./steps/IncidentsConcernsStep";
import { defaultIntakeValues } from "@/lib/intake/defaultValues";

const TOTAL_STEPS = 3; // Update this as you add/remove steps

export default function SchoolSafetyIntake() {
  const [step, setStep] = useState(1);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const methods = useForm<
    SchoolSafetyIntakeInput,
    any,
    SchoolSafetyIntakeValues
  >({
    resolver: zodResolver(schoolSafetyIntakeSchema),
    defaultValues: (loadIntakeDraft() ??
      defaultIntakeValues) as SchoolSafetyIntakeInput,
    mode: "onBlur",
  });

  const { watch, trigger, handleSubmit, reset, formState } = methods;

  useEffect(() => {
    const subscription = watch((values) => {
      saveIntakeDraft(values as SchoolSafetyIntakeValues);
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  const fieldsByStep = useMemo<Record<number, string[]>>(
    () => ({
      1: ["consent.authorized", "consent.privacyAccepted"],
      2: [
        "schoolContact.schoolName",
        "schoolContact.schoolDistrict",
        "schoolContact.city",
        "schoolContact.state",
        "schoolContact.zipCode",
        "schoolContact.schoolType",
        "schoolContact.schoolTypeOther",
        "schoolContact.schoolSetting",
        "schoolContact.enrollment",
        "schoolContact.contactName",
        "schoolContact.contactRole",
        "schoolContact.email",
        "schoolContact.phone",
      ],
      3: [
        "safetyStatus.campusSafety",
        "safetyStatus.emergencyConfidence",
        "safetyStatus.policyConsistency",
        "safetyStatus.emergencyPlanning",
        "safetyStatus.accessControl",
        "safetyStatus.threatAssessmentProtocols",
      ],
      // 4: [
      //   "incidents.incidentTypes",
      //   "incidents.incidentOther",
      //   "incidents.incidentFrequency",
      //   "incidents.topConcerns",
      // ],
      // 5: [
      //   "systemsResources.emergencyPlanStatus",
      //   "systemsResources.threatAssessmentTeam",
      //   "systemsResources.drillFrequency",
      //   "systemsResources.mentalHealthSupport",
      //   "systemsResources.firstResponderRelationship",
      //   "systemsResources.staffTrainingLevel",
      // ],
      // 6: [
      //   "systemsResources.physicalSecurity.entryProcedure",
      //   "systemsResources.physicalSecurity.securityFeatures",
      //   "systemsResources.physicalSecurity.hasVulnerabilities",
      //   "systemsResources.physicalSecurity.vulnerabilitiesDescription",
      // ],
      // 7: [
      //   "capacityBarriers.implementationCapacity",
      //   "capacityBarriers.barriers",
      //   "capacityBarriers.barriersOther",
      //   "capacityBarriers.urgency",
      // ],
      // 8: [
      //   "services.supportTypes",
      //   "services.supportTypesOther",
      //   "services.preferredTimeframe",
      //   "services.additionalInformation",
      // ],
      9: ["finalConfirmation.agreeToSubmit"],
    }),
    [],
  );

  const nextStep = async () => {
    setSubmitStatus(null);

    const valid = await trigger(fieldsByStep[step] as any, {
      shouldFocus: true,
    });

    if (!valid) {
      console.log("Step validation failed:", step, methods.formState.errors);
      return;
    }

    setStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
  };

  const prevStep = () => {
    setSubmitStatus(null);
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const onSubmit = async (values: SchoolSafetyIntakeValues) => {
    setSubmitStatus(null);

    try {
      const res = await fetch("/api/intake/school-safety", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.message || "Submission failed.");
      }

      clearIntakeDraft();
      reset(defaultIntakeValues as SchoolSafetyIntakeInput);
      setStep(1);

      setSubmitStatus({
        type: "success",
        message: `Intake submitted successfully. Intake ID: ${result.intakeId}`,
      });
    } catch (error) {
      console.error(error);
      setSubmitStatus({
        type: "error",
        message: "We couldn't submit the intake. Please try again.",
      });
    }
  };

  if (submitStatus?.type === "success") {
    return (
      <div className="flex min-h-100 items-center justify-center px-6">
        <div className="max-w-md rounded-2xl border border-white/10 bg-white/3 p-10 text-center text-white">
          <h2 className="text-2xl font-bold">Submission Complete</h2>
          <p className="mt-3 text-white/70">
            Your intake has been received. We’ll be in touch shortly.
          </p>
        </div>
      </div>
    );
  }
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <IntakeProgress currentStep={step} totalSteps={TOTAL_STEPS} />

        {submitStatus && (
          <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">
            {submitStatus.message}
          </div>
        )}

        {step === 1 && <IntroConsentStep />}
        {step === 2 && <SchoolContactStep />}
        {step === 3 && (
          <ReviewSubmitStep
            onEditSection={(targetStep) => setStep(targetStep)}
          />
        )}
        {/* {step === 3 && <SafetyStatusStep />}
        {step === 4 && <IncidentsConcernsStep />}
        {step === 5 && <SystemsResourcesStep />}
        {step === 6 && <PhysicalSecurityStep />}
        {step === 7 && <CapacityBarriersStep />}
        {step === 8 && <ServicesNextStepsStep />}
        {step === 9 && (
          <ReviewSubmitStep
            onEditSection={(targetStep) => setStep(targetStep)}
          />
        )} */}

        <IntakeNavigation
          step={step}
          totalSteps={TOTAL_STEPS}
          isSubmitting={formState.isSubmitting}
          onBack={prevStep}
          onNext={nextStep}
        />
      </form>
    </FormProvider>
  );
}
