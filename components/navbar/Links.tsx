"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

export const links = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
    hasSubMenu: true,
    subMenu: [
      {
        name: "Physical Assessments",
        href: "/services/assessments",
      },
      {
        name: "Education",
        href: "/services/education",
      },
      {
        name: "Equipment",
        href: "/services/equipment",
      },
      {
        name: "Reassessment",
        href: "/services/reassessment",
      },
    ],
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
    name: "Donate",
    href: "/donate",
  },
];

function Links() {
  return (
    <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
      {links.map((link) =>
        link.hasSubMenu ? (
          <div key={link.name} className="group relative">
            <button className="flex items-center gap-1 text-xs font-bold uppercase tracking-[0.18em] text-zinc-300 transition-colors hover:text-white">
              {link.name}
              <ChevronDown className="h-4 w-4" />
            </button>

            <div className="invisible absolute left-0 top-full z-50 mt-4 w-72 translate-y-2 rounded-2xl border border-white/10 bg-black/95 p-3 opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {link.subMenu?.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-zinc-300 transition hover:bg-red-600 hover:text-white">
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

export default Links;
