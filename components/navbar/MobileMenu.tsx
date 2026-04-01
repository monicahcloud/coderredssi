"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { AlignRight, ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Top level dropdown (Simplified for Mobile)
const TopLevelDropdown = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10 pb-6">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-4xl font-black uppercase hover:text-cyan-400 transition-colors">
        {title}
        <ChevronDown
          className={`size-8 transition-transform duration-300 ${
            open ? "rotate-180 text-cyan-400" : "rotate-0"
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden">
            <div className="pt-8 space-y-10">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const servicesData = [
    {
      href: "/services/design",
      title: "Digital Products",
      color: "text-cyan-400",
      items: [
        "AI-Powered Automations",
        "Web & Mobile Apps",
        "High-Conversion Websites",
        "User-Friendly Experience Design",
        "Instant-Launch Landing Pages",
      ],
    },
    {
      href: "/services/marketing",
      title: "Brand & Marketing",
      color: "text-purple-400",
      items: [
        "Search Engine Mastery (SEO)",
        "Customer Growth Strategy",
        "Brand Messaging & Story",
        "Authority Content Marketing",
        "Premium Visual Presentations",
      ],
    },
    {
      href: "/services/business",
      title: "Business Strategy",
      color: "text-blue-400",
      items: [
        "Real-Time Profit Dashboards",
        "AI Business Intelligence",
        "Growth & Scale Consulting",
        "Operational Workflows",
      ],
    },
  ];
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
        className="w-full sm:max-w-md bg-[#0F172A] border-none text-white p-8 flex flex-col h-full overflow-hidden">
        {/* Top Header */}
        <div className="flex justify-between items-center mb-12 z-20">
          <Link
            href="/contact"
            onClick={handleClose}
            className="bg-gradient-to-r from-purple-600 to-cyan-500 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-purple-500/20">
            Request Quote
          </Link>
        </div>

        {/* Main Links - scrollable area */}
        <nav className="flex flex-col space-y-8 flex-grow overflow-y-auto pr-4 z-20 custom-scrollbar">
          <TopLevelDropdown title="Services">
            <div className="flex flex-col gap-8">
              {servicesData.map((service) => (
                <div key={service.title} className="space-y-4">
                  <Link
                    href={service.href}
                    onClick={handleClose}
                    className={`text-xl font-bold flex items-center gap-2 ${service.color}`}>
                    {service.title} <ArrowRight className="size-4" />
                  </Link>
                  <ul className="grid grid-cols-1 gap-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="text-slate-400 text-sm font-medium border-l border-white/10 pl-4">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </TopLevelDropdown>

          <Link
            href="/about"
            onClick={handleClose}
            className="text-4xl font-black uppercase hover:text-cyan-400 transition-colors border-b border-white/10 pb-6">
            ABOUT
          </Link>

          <Link
            href="/contact"
            onClick={handleClose}
            className="text-4xl font-black uppercase hover:text-cyan-400 transition-colors border-b border-white/10 pb-6">
            Contact
          </Link>
        </nav>

        {/* 📐 THE FIX: Vertical Branding Detail */}
        {/* 📐 THE FIX: Enhanced Vertical Branding Detail */}
        <div
          className="absolute right-5 top-0 h-full flex items-center justify-center select-none pointer-events-none z-10"
          style={{ width: "100px" }}>
          <span
            className="text-[140px] font-black opacity-[0.03] leading-none whitespace-nowrap tracking-tighter"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              transform: "rotate(180deg)", // Flips it to read upward
            }}>
            VITANOVA
          </span>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
