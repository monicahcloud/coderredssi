"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Handshake, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
type CTAProps = {
  className?: string;
};

export function PartnerCTA({ className }: CTAProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlePartnerClick = () => {
    const currentType = searchParams.get("type");
    const isAlreadyOnPartnerContact =
      pathname === "/" &&
      currentType === "partner" &&
      window.location.hash === "#contact";

    if (isAlreadyOnPartnerContact) {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    router.push(`${pathname}?type=partner#contact`);
  };

  return (
    <Button
      type="button"
      variant="outline"
      size="lg"
      onClick={handlePartnerClick}
      className={cn(
        "flex h-14 w-full items-center justify-center rounded-full px-5 text-center text-sm font-bold uppercase tracking-[0.04em]",
        "border border-border bg-background text-foreground transition hover:border-primary hover:text-primary-foreground",
        className,
      )}>
      <span className="flex items-center gap-2">
        <Handshake className="h-5 w-5" />
        Become a Partner
        <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
      </span>
    </Button>
  );
}
