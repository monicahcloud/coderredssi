"use client";

import Link from "next/link";
import { Heart, Mail } from "lucide-react";

import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { trackEvent } from "@/lib/analytics";
import Links from "./Links";

function ContactCTA() {
  return (
    <Link
      href="/contact"
      onClick={() =>
        trackEvent("contact_click", {
          location: "navbar",
        })
      }
      className="inline-flex h-11 items-center justify-center gap-2 bg-red-700 px-5 text-xs font-black uppercase tracking-widest text-white transition hover:bg-red-800">
      <Mail className="h-4 w-4" />
      Contact Us
    </Link>
  );
}

function DonateCTA() {
  return (
    <Link
      href="/donate"
      onClick={() =>
        trackEvent("donate_click", {
          location: "navbar",
        })
      }
      className="inline-flex h-11 items-center justify-center gap-2 bg-white px-5 text-xs font-black uppercase tracking-widest text-slate-950 transition hover:bg-slate-200">
      <Heart className="h-4 w-4 fill-red-700 text-red-700" />
      Donate
    </Link>
  );
}

// const links = [
//   { href: "/", label: "Home" },
//   { href: "/about", label: "About" },
//   { href: "/partnerships", label: "Partnerships" },
//   { href: "/schools", label: "Schools/Districts" },
//   { href: "/about/board", label: "Meet The Board" },
//   // { href: "/insights", label: "Insights" },
// ];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
          <Links />
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <ContactCTA />
          <DonateCTA />
        </div>

        <div className="flex lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
