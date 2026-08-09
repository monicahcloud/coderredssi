"use client";

import { useState } from "react";
import Link from "next/link";
import { AlignRight, ArrowRight, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Mail } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const mobileLinks = [
  { name: "About", href: "/about" },
  { name: "For Schools", href: "/schools" },
  { name: "Partnerships", href: "/partnerships" },
  { name: "Meet Board", href: "/about/board" },
  { name: "Insights", href: "/insights" },
  { name: "Contact Us", href: "/contact" },
  { name: "Donate", href: "/donate" },
];

const serviceLinks = [
  {
    name: "Physical Assessments",
    href: "/schools/physical-assessments",
  },
  {
    name: "Education",
    href: "/schools/education",
  },
  {
    name: "Equipment",
    href: "/schools/equipment",
  },
  {
    name: "Reassessment",
    href: "/schools/reassessment",
  },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Open navigation menu"
          className="hover:bg-transparent">
          <AlignRight className="size-9 text-white" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="flex h-full w-full flex-col overflow-hidden border-none bg-[#080808] p-6 text-white sm:max-w-md sm:p-8">
        <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>

        {/* CTA buttons */}
        <div className="z-20 mb-8 mt-10 flex flex-col gap-3">
          <Link
            href="/contact"
            onClick={() => {
              trackEvent("contact_click", {
                location: "mobile_menu",
              });

              handleClose();
            }}
            className="mt-10 inline-flex h-12 w-full items-center justify-center gap-2 bg-red-700 px-5 text-xs font-black uppercase tracking-[0.18em] text-white transition hover:bg-red-800">
            <Mail className="h-4 w-4" />
            Contact Us
          </Link>
        </div>

        <nav className="z-20 flex flex-grow flex-col space-y-6 overflow-y-auto pr-2">
          {/* Services dropdown */}
          <div className="border-b border-white/10 pb-5">
            <button
              type="button"
              onClick={() => setServicesOpen((current) => !current)}
              aria-expanded={servicesOpen}
              className="flex w-full items-center justify-between text-left text-3xl font-black uppercase transition-colors hover:text-red-500">
              Framework
              <ChevronDown
                className={`size-7 transition-transform ${
                  servicesOpen ? "rotate-180 text-red-500" : ""
                }`}
              />
            </button>

            {servicesOpen ? (
              <div className="mt-5 grid gap-3">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    onClick={handleClose}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold uppercase tracking-widest text-zinc-200 transition hover:bg-red-600 hover:text-white">
                    {service.name}
                    <ArrowRight className="size-4" />
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          {/* Main links */}
          {mobileLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={handleClose}
              className="border-b border-white/10 pb-5 text-3xl font-black uppercase transition-colors hover:text-red-500">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Decorative vertical text */}
        <div
          className="pointer-events-none absolute right-5 top-0 z-10 flex h-full w-[100px] select-none items-center justify-center"
          aria-hidden="true">
          <span
            className="text-[120px] font-black leading-none tracking-tighter text-white opacity-[0.03]"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              transform: "rotate(180deg)",
            }}>
            CODE RED
          </span>
        </div>
      </SheetContent>
    </Sheet>
  );
}
