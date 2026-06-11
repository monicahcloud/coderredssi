"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { AlignRight, ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { SchoolCTA } from "../cta/SchoolCTA";
import { PartnerCTA } from "../cta/PartnerCTA";

const mobileLinks = [
  { name: "About", href: "/about" },
  { name: "For Schools", href: "/schools" },
  { name: "Partnerships", href: "/partnerships" },
  { name: "Donate", href: "/donate" },
];

const serviceLinks = [
  { name: "Physical Assessments", href: "/services/assessments" },
  { name: "Education", href: "/services/education" },
  { name: "Equipment", href: "/services/equipment" },
  { name: "Reassessment", href: "/services/reassessment" },
];

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(true);

  const handleClose = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>

      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="hover:bg-transparent">
          <AlignRight className="size-9 text-white" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="flex h-full w-full flex-col overflow-hidden border-none bg-[#080808] p-6 text-white sm:max-w-md sm:p-8">
        <div className="z-20 mb-8 flex flex-col gap-3">
          <div onClick={handleClose}>
            <SchoolCTA location="mobile_menu" className="w-full" />
          </div>

          <div onClick={handleClose}>
            <PartnerCTA location="mobile" className="w-full" />
          </div>
        </div>

        <nav className="z-20 flex flex-grow flex-col space-y-6 overflow-y-auto pr-2">
          <div className="border-b border-white/10 pb-5">
            <button
              type="button"
              onClick={() => setServicesOpen((prev) => !prev)}
              className="flex w-full items-center justify-between text-3xl font-black uppercase transition-colors hover:text-red-500">
              Services
              <ChevronDown
                className={`size-7 transition-transform ${
                  servicesOpen ? "rotate-180 text-red-500" : ""
                }`}
              />
            </button>

            {servicesOpen && (
              <div className="mt-5 grid gap-3">
                <Link
                  href="/services"
                  onClick={handleClose}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold uppercase tracking-widest text-zinc-200 hover:bg-red-600 hover:text-white">
                  Services Overview
                  <ArrowRight className="size-4" />
                </Link>

                {serviceLinks.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    onClick={handleClose}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold uppercase tracking-widest text-zinc-200 hover:bg-red-600 hover:text-white">
                    {service.name}
                    <ArrowRight className="size-4" />
                  </Link>
                ))}
              </div>
            )}
          </div>

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

        <div
          className="pointer-events-none absolute right-5 top-0 z-10 flex h-full select-none items-center justify-center"
          style={{ width: "100px" }}>
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
};

export default MobileMenu;
