/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo, useState } from "react";

import {
  schoolSafetyIntakeLiteSchema,
  type SchoolSafetyIntakeLiteInput,
  type SchoolSafetyIntakeLiteValues,
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
import ReviewSubmitStep from "./steps/ReviewSubmitStep";
import IntroConsentStep from "./steps/IntroConsentStep";
import { defaultIntakeValues } from "@/lib/intake/defaultValues";
import { sendSchoolSafetyIntakeEmail } from "@/lib/email/emailjs";

const TOTAL_STEPS = 3;

export default function SchoolSafetyIntake() {
  const [step, setStep] = useState(1);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [isDraftLoaded, setIsDraftLoaded] = useState(false);

  const methods = useForm<
    SchoolSafetyIntakeLiteInput,
    unknown,
    SchoolSafetyIntakeLiteValues
  >({
    resolver: zodResolver(schoolSafetyIntakeLiteSchema),
    defaultValues: {
      consent: defaultIntakeValues.consent,
      schoolContact: defaultIntakeValues.schoolContact,
      finalConfirmation: defaultIntakeValues.finalConfirmation,
    },
    mode: "onBlur",
  });

  const { watch, trigger, reset, formState } = methods;

  useEffect(() => {
    const savedDraft = loadIntakeDraft();

    if (savedDraft) {
      reset({
        consent: savedDraft.consent ?? defaultIntakeValues.consent,
        schoolContact:
          savedDraft.schoolContact ?? defaultIntakeValues.schoolContact,
        finalConfirmation:
          savedDraft.finalConfirmation ?? defaultIntakeValues.finalConfirmation,
      });
    }

    setIsDraftLoaded(true);
  }, [reset]);

  useEffect(() => {
    if (!isDraftLoaded) return;

    const subscription = watch((values) => {
      saveIntakeDraft({
        ...defaultIntakeValues,
        consent: values.consent,
        schoolContact: values.schoolContact,
        finalConfirmation: values.finalConfirmation,
      } as SchoolSafetyIntakeValues);
    });

    return () => subscription.unsubscribe();
  }, [watch, isDraftLoaded]);

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
      3: ["finalConfirmation.agreeToSubmit"],
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

  if (!isDraftLoaded) return null;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(
          async (values) => {
            setSubmitStatus(null);

            try {
              await sendSchoolSafetyIntakeEmail({
                ...defaultIntakeValues,
                consent: values.consent,
                schoolContact: values.schoolContact,
                finalConfirmation: values.finalConfirmation,
              } as SchoolSafetyIntakeValues);

              clearIntakeDraft();
              reset({
                consent: defaultIntakeValues.consent,
                schoolContact: defaultIntakeValues.schoolContact,
                finalConfirmation: defaultIntakeValues.finalConfirmation,
              });
              setStep(1);

              setSubmitStatus({
                type: "success",
                message:
                  "Intake submitted successfully. We’ll be in touch shortly.",
              });
            } catch (error) {
              console.error("School intake email failed:", error);
              setSubmitStatus({
                type: "error",
                message: "We couldn't submit the intake. Please try again.",
              });
            }
          },
          (errors) => {
            console.log("Submit blocked by validation:", errors);
          },
        )}
        className="space-y-8">
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
