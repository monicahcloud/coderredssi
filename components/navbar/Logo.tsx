"use client";

import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center shrink-0">
      <Image
        src="/images/Code_Red_Approved_Logo_Designs.png"
        alt="Code Red Safe Schools Initiative"
        width={1840}
        height={860}
        priority
        className="h-auto w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px] xl:w-[300px] object-contain"
      />
    </Link>
  );
}

export default Logo;
