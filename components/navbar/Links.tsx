"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";

export const links = [
  {
    name: "About",
    href: "/about",
  },

  {
    name: "For Schools",
    href: "/schools",
  },
  {
    name: "Partnerships",
    href: "/partnerships",
  },
  {
    name: "Framework",
    href: "/schools",
    hasSubMenu: true,
    subMenu: [
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
    ],
  },
  {
    name: "Meet The Board",
    href: "/about/board",
  },
];

export default function Links() {
  return (
    <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
      {links.map((link) =>
        link.hasSubMenu ? (
          <div key={link.name} className="group relative">
            <Link
              href={link.href}
              className="flex items-center gap-1 text-xs font-bold uppercase tracking-[0.18em] text-zinc-300 transition-colors hover:text-white">
              {link.name}

              <ChevronDown className="size-4 transition-transform duration-300 group-hover:rotate-180" />
            </Link>

            {/* Invisible bridge prevents menu from closing */}
            <div className="absolute left-0 top-full h-5 w-full" />

            <div className="invisible absolute left-0 top-full z-50 mt-4 w-72 translate-y-2 rounded-2xl border border-white/10 bg-black/95 p-3 opacity-0 shadow-2xl backdrop-blur transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              {link.subMenu.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-zinc-300 transition hover:bg-red-600 hover:text-white focus:bg-red-600 focus:text-white focus:outline-none">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <Link
            key={link.name}
            href={link.href}
            className="group relative text-xs font-bold uppercase tracking-[0.18em] text-zinc-300 transition-colors hover:text-white">
            {link.name}

            <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full" />
          </Link>
        ),
      )}
    </nav>
  );
}
