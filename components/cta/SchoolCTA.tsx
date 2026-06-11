"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { School, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

type CTAProps = {
  className?: string;
  location?: string;
};

export function SchoolCTA({ className, location = "unknown" }: CTAProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSchoolClick = () => {
    trackEvent("school_interest", {
      location,
      button: "request_school_assessment",
    });

    const contactSection = document.getElementById("contact");

    if (contactSection) {
      const currentType = searchParams.get("type");

      if (currentType !== "school") {
        router.push(`${pathname}?type=school#contact`);
        return;
      }

      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      return;
    }

    router.push("/contact?type=school");
  };

  return (
    <Button
      type="button"
      size="lg"
      onClick={handleSchoolClick}
      className={cn(
        "group flex h-14 w-full items-center justify-center rounded-full px-5 text-center text-sm font-bold uppercase tracking-[0.04em]",
        "bg-primary text-primary-foreground transition hover:opacity-95",
        className,
      )}>
      <span className="flex items-center gap-2">
        <School className="h-5 w-5" />
        Request School Assessment
        <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Button>
  );
}
