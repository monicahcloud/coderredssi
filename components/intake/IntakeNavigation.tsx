"use client";

import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";

type IntakeNavigationProps = {
  step: number;
  totalSteps: number;
  isSubmitting?: boolean;
  onBack: () => void;
  onNext: () => void;
};

export default function IntakeNavigation({
  step,
  totalSteps,
  isSubmitting = false,
  onBack,
  onNext,
}: IntakeNavigationProps) {
  const isFirstStep = step === 1;
  const isFinalStep = step === totalSteps;

  return (
    <div className="flex flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
      <Button
        type="button"
        variant="outline"
        onClick={onBack}
        disabled={isFirstStep || isSubmitting}
        className="h-12 rounded-full border-white/10 bg-white/5 px-6 text-white hover:bg-white/10 hover:text-white disabled:opacity-40">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>

      {isFinalStep ? (
        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-12 rounded-full bg-primary px-6 font-semibold text-primary-foreground hover:opacity-95">
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              Submit Intake
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      ) : (
        <Button
          type="button"
          onClick={onNext}
          disabled={isSubmitting}
          className="h-12 rounded-full bg-primary px-6 font-semibold text-primary-foreground hover:opacity-95">
          Continue
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      )}
    </div>
  );
}
