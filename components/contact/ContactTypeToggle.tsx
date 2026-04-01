"use client";

import { Handshake, School } from "lucide-react";

type ContactType = "school" | "partner";

type ContactTypeToggleProps = {
  value: ContactType;
  onChange: (type: ContactType) => void;
};

export default function ContactTypeToggle({
  value,
  onChange,
}: ContactTypeToggleProps) {
  return (
    <div
      className="inline-flex rounded-full border border-border bg-muted/30 p-1.5"
      role="tablist"
      aria-label="Contact type">
      <button
        type="button"
        role="tab"
        aria-selected={value === "school"}
        onClick={() => onChange("school")}
        className={`flex items-center gap-2 rounded-full px-5 py-3 text-xs font-black uppercase tracking-[0.18em] transition-all ${
          value === "school"
            ? "bg-primary text-primary-foreground shadow-[0_10px_30px_-12px_rgba(220,38,38,0.45)]"
            : "text-muted-foreground hover:text-foreground"
        }`}>
        <School className="h-4 w-4" />
        School
      </button>

      <button
        type="button"
        role="tab"
        aria-selected={value === "partner"}
        onClick={() => onChange("partner")}
        className={`flex items-center gap-2 rounded-full px-5 py-3 text-xs font-black uppercase tracking-[0.18em] transition-all ${
          value === "partner"
            ? "bg-primary text-primary-foreground shadow-[0_10px_30px_-12px_rgba(220,38,38,0.45)]"
            : "text-muted-foreground hover:text-foreground"
        }`}>
        <Handshake className="h-4 w-4" />
        Partner
      </button>
    </div>
  );
}
