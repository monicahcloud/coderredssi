"use client";

import Link from "next/link";
// import MegaMenu from "@/components/MegaMenu";
import design from "../../../app/assets/images/design2.png";
import develop from "../../../app/assets/images/develop2.png";
import marketing from "../../../app/assets/images/develop2.png";

export const links = [
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    hasSubMenu: true,
    subMenu: [
      {
        name: "Design",
        href: "/services/design",
        description: [
          "AI System Integration & Automation",
          "UI/UX Architecture",
          "Web & Mobile Design",
          "Landing Page Design",
          "Brand Identity",
        ],
        icon: design,
      },
      {
        name: "Development",
        href: "/services/development",
        description: [
          "Custom Web Applications",
          "Software Engineering",
          "CMS Architecture",
          "MVP Rapid Prototyping",
          "Webflow Solutions",
        ],
        icon: develop,
      },
      {
        name: "Marketing/UX",
        href: "/services/marketing",
        description: [
          "Growth Marketing Strategy",
          "SEO & Conversion (CRO)",
          "Authority Pitch Decks",
          "Content Architecture",
        ],
        icon: marketing,
      },
    ],
  },
  { name: "Contact", href: "/contact" },
];

function Links() {
  return (
    <nav className="hidden lg:flex items-center gap-10">
      {links.map((link) =>
        link.hasSubMenu ? (
          <div key={link.name} className="relative group">
            {/* <MegaMenu title={link.name} subMenu={link.subMenu} /> */}
            {/* Underline decorative element for active/hover state */}
            <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-600 to-cyan-500 transition-all duration-300 group-hover:w-full" />
          </div>
        ) : (
          <Link
            key={link.name}
            href={link.href}
            className="relative group text-sm font-bold uppercase tracking-[0.2em] text-slate-600 hover:text-slate-900 transition-colors">
            {link.name}
            {/* Animated Underline */}
            <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-600 to-cyan-500 transition-all duration-300 group-hover:w-full" />
          </Link>
        ),
      )}
    </nav>
  );
}

export default Links;
