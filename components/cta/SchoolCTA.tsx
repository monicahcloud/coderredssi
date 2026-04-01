"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { School, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
type CTAProps = {
  className?: string;
};

export function SchoolCTA({ className }: CTAProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSchoolClick = () => {
    const currentType = searchParams.get("type");
    const isAlreadyOnSchoolContact =
      pathname === "/" &&
      currentType === "school" &&
      window.location.hash === "#contact";

    if (isAlreadyOnSchoolContact) {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    router.push(`${pathname}?type=school#contact`);
  };

  return (
    <Button
      type="button"
      size="lg"
      onClick={handleSchoolClick}
      className={cn(
        "flex h-14 w-full items-center justify-center rounded-full px-5 text-center text-sm font-bold uppercase tracking-[0.04em]",
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
