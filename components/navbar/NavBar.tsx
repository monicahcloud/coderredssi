"use client";

// import MobileMenu from "./MobileMenu";
import Logo from "./Logo";
import { SchoolCTA } from "../cta/SchoolCTA";
import { PartnerCTA } from "../cta/PartnerCTA";

function NavBar() {
  return (
    <header className="sticky top-0 z-[50] w-full bg-black/95 shadow-lg backdrop-blur">
      <div className="mx-auto flex w-full max-w-8xl items-center justify-between px-4 py-3 sm:px-6 lg:px-4">
        <Logo />

        <div className="flex items-center gap-2 md:gap-4">
          <SchoolCTA className="hidden md:inline-flex w-auto" />
          <PartnerCTA className="hidden md:inline-flex w-auto" />
          {/* <MobileMenu /> */}
        </div>
      </div>
    </header>
  );
}

export default NavBar;
