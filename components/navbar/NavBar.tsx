"use client";

import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { SchoolCTA } from "../cta/SchoolCTA";
import { PartnerCTA } from "../cta/PartnerCTA";
import Link from "next/link";
import { Heart } from "lucide-react";

function DonateCTA() {
  return (
    <Link
      href="/donate"
      className="
        inline-flex h-11 items-center justify-center gap-2 rounded-full
        bg-red-600 px-5 text-xs font-black uppercase tracking-widest text-white
        shadow-lg transition-all duration-300
        hover:scale-105 hover:bg-red-700
      ">
      <Heart className="h-4 w-4 fill-white" />
      Donate
    </Link>
  );
}

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/partnerships", label: "Partnerships" },
  // { href: "/schools", label: "Schools/Districts" },
  // { href: "/about/board", label: "Meet The Board" },
];

function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur">
      <div className="mx-auto flex max-w-8xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Logo />

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="
                text-lg font-semibold uppercase tracking-wider text-white/90
                transition hover:text-red-700 hover:underline hover:underline-offset-4
              ">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden sm:flex gap-3">
          {/* Only on very wide screens */}
          <div className="hidden 2xl:block">
            <SchoolCTA location="navbar" />
          </div>

          <div className="hidden 2xl:block">
            <PartnerCTA location="navbar" />
          </div>

          <DonateCTA />
        </div>

        {/* Mobile */}
        <div className="flex lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
