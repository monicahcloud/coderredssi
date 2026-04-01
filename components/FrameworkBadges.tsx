"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const badges = [
  {
    id: 1,
    src: "/images/assesmentpillar.png",
    label: "Assessment",
  },
  {
    id: 2,
    src: "/images/2.png",
    label: "Education",
  },
  {
    id: 3,
    src: "/images/3.png",
    label: "Response",
  },
  {
    id: 4,
    src: "/images/4.png",
    label: "Equipment",
  },
];

export default function FrameworkBadges() {
  return (
    <div className="flex w-full justify-center">
      <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-2 xl:grid-cols-2">
        {badges.map((badge, i) => (
          <motion.div
            key={badge.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center justify-center">
            <div className="relative w-28 sm:w-32 lg:w-36 xl:w-40">
              <Image
                src={badge.src}
                alt={badge.label}
                width={200}
                height={200}
                className="h-auto w-full object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
                priority={i === 0}
              />
            </div>

            <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-white/70">
              {badge.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
