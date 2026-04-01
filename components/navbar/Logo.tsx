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
        className="h-auto w-[110px] sm:w-[130px] md:w-[150px] lg:w-[170px] object-contain"
      />
    </Link>
  );
}

export default Logo;
