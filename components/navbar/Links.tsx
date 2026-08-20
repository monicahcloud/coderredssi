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

const navigationLinkStyles =
  "flex items-center gap-1 text-sm font-semibold uppercase tracking-wider text-white/90 transition-colors hover:text-red-600 xl:text-base";

export default function Links() {
  return (
    <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
      {links.map((link) =>
        link.hasSubMenu && link.subMenu ? (
          <div key={link.name} className="group relative">
            <Link href={link.href} className={navigationLinkStyles}>
              {link.name}

              <ChevronDown className="size-4 transition-transform duration-300 group-hover:rotate-180" />
            </Link>

            {/* Keeps the dropdown open while moving the cursor into it */}
            <div className="absolute left-0 top-full h-5 w-full" />

            <div className="invisible absolute left-0 top-full z-50 mt-4 w-72 translate-y-2 rounded-2xl border border-white/10 bg-black/95 p-3 opacity-0 shadow-2xl backdrop-blur transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              {link.subMenu.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-wider text-white/90 transition-colors hover:bg-red-700 hover:text-white">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <Link
            key={link.name}
            href={link.href}
            className={navigationLinkStyles}>
            {link.name}
          </Link>
        ),
      )}
    </nav>
  );
}
