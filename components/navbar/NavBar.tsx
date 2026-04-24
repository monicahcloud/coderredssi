"use client";

import Logo from "./Logo";
import { SchoolCTA } from "../cta/SchoolCTA";
import { PartnerCTA } from "../cta/PartnerCTA";

function NavBar() {
  return (
    <header className="sticky top-0 z-[50] w-full bg-black/95 shadow-lg backdrop-blur">
      <div className="mx-auto flex w-full max-w-8xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8 xl:px-10">
        <div className="min-w-0 shrink">
          <Logo />
        </div>

        <div className="hidden shrink-0 items-center gap-2 lg:flex xl:gap-4">
          <SchoolCTA
            className="
              !h-11 !w-auto !px-4 !text-[10px]
              xl:!h-12 xl:!px-5 xl:!text-xs
              2xl:!h-14 2xl:!px-6 2xl:!text-sm
              [&_svg]:!h-4 [&_svg]:!w-4
              2xl:[&_svg]:!h-5 2xl:[&_svg]:!w-5
            "
          />

          <PartnerCTA
            className="
              !h-11 !w-auto !px-4 !text-[10px]
              xl:!h-12 xl:!px-5 xl:!text-xs
              2xl:!h-14 2xl:!px-6 2xl:!text-sm
              [&_svg]:!h-4 [&_svg]:!w-4
              2xl:[&_svg]:!h-5 2xl:[&_svg]:!w-5
            "
          />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
