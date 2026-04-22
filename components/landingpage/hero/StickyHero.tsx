"use client";

import HeroCarousel from "@/components/landingpage/hero/HeroCarousel";

// export function StickyHero() {
//   const { scrollY } = useScroll();

//   const opacity = useTransform(scrollY, [0, 500], [1, 0.25]);
//   const blur = useTransform(scrollY, [0, 500], [0, 8]);
//   const filter = useMotionTemplate`blur(${blur}px)`;

//   return (
//     <motion.div style={{ opacity, filter }} className="sticky top-0 h-screen">
//       <HeroCarousel />
//     </motion.div>
//   );
// }
export function StickyHero() {
  return (
    <div className="sticky top-0 h-screen">
      <HeroCarousel />
    </div>
  );
}
