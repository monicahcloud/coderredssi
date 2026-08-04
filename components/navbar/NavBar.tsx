"use client";

import { Heart } from "lucide-react";
import Link from "next/link";

import { PartnerCTA } from "../cta/PartnerCTA";
import { SchoolCTA } from "../cta/SchoolCTA";
import Links from "./Links";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

function DonateCTA() {
  return (
    <Link
      href="/donate"
      className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-red-600 px-5 text-xs font-black uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-red-700">
      <Heart className="size-4 fill-white" />
      Donate
    </Link>
  );
}

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur">
      <div className="mx-auto flex max-w-full items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop navigation */}
        <Links />

        {/* Desktop CTA buttons */}
        <div className="hidden items-center gap-3 sm:flex">
          <div className="hidden 2xl:block">
            <SchoolCTA location="navbar" />
          </div>

          <div className="hidden 2xl:block">
            <PartnerCTA location="navbar" />
          </div>

          <DonateCTA />
        </div>

        {/* Mobile menu */}
        <div className="flex lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
