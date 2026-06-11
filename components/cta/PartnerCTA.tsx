"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Handshake, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

type CTAProps = {
  className?: string;
  location?: string;
};

export function PartnerCTA({ className, location = "unknown" }: CTAProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlePartnerClick = () => {
    trackEvent("partnership_interest", {
      location,
      button: "become_partner",
    });

    const contactSection = document.getElementById("contact");

    if (contactSection) {
      const currentType = searchParams.get("type");

      if (currentType !== "partner") {
        router.push(`${pathname}?type=partner#contact`);
        return;
      }

      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      return;
    }

    router.push("/contact?type=partner");
  };

  return (
    <Button
      type="button"
      variant="outline"
      size="lg"
      onClick={handlePartnerClick}
      className={cn(
        "group flex h-14 w-full items-center justify-center rounded-full px-5 text-center text-sm font-bold uppercase tracking-[0.04em]",
        "border border-border bg-background text-foreground transition hover:border-primary hover:text-primary-foreground",
        className,
      )}>
      <span className="flex items-center gap-2">
        <Handshake className="h-5 w-5" />
        Become a Partner
        <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Button>
  );
}
