"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Crown, Medal, Shield, Star } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PartnerCTA } from "./cta/PartnerCTA";
import React from "react";

const PARTNERSHIP_TIERS = [
  {
    label: "Bronze",
    tier: "Community Partner",
    star: "bronze",
    value: "$25K - $100K",
    impact: "7.5K+ students and staff protected",
    schools: "3–5 schools",
    level: "Community level impact",
    badgeSrc: "/images/bronzebadge.png",
    icon: Award,
    accent: "text-[#d97706]",
    height: "min-h-[320px] lg:min-h-[360px]",
    offsetClass: "mt-0",
  },
  {
    label: "Silver",
    tier: "District Partner",
    star: "silver",
    value: "$100K - $500K",
    impact: "20K+ students and staff protected",
    schools: "10–25 schools",
    level: "District level impact",
    badgeSrc: "/images/silverbadge.png",
    icon: Shield,
    accent: "text-gray-400",
    height: "min-h-[360px] lg:min-h-[420px]",
    offsetClass: "mt-6",
  },
  {
    label: "Gold",
    tier: "Regional Partner",
    star: "gold",
    value: "$500K - $2M",
    impact: "50K+ students and staff protected",
    schools: "25–50 schools",
    level: "Regional level impact",
    badgeSrc: "/images/goldbadge.png",
    icon: Medal,
    accent: "text-yellow-400",
    height: "min-h-[400px] lg:min-h-[470px]",
    offsetClass: "mt-12",
  },
  {
    label: "Diamond",
    tier: "National Partner",
    star: "diamond",
    value: "$2M+",
    impact: "150K+ students and staff protected",
    schools: "100+ schools",
    level: "State level impact",
    badgeSrc: "/images/diamondbadge.png",
    icon: Crown,
    accent: "text-sky-300",
    height: "min-h-[440px] lg:min-h-[520px]",
    offsetClass: "mt-24",
  },
];
const tierStyles = {
  bronze:
    "text-amber-700 fill-amber-700 drop-shadow-[0_0_6px_rgba(217,119,6,0.5)]",
  silver:
    "text-slate-300 fill-slate-300 drop-shadow-[0_0_6px_rgba(203,213,225,0.5)]",
  gold: "text-yellow-400 fill-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.7)]",
  diamond:
    "text-cyan-300 fill-cyan-300 drop-shadow-[0_0_10px_rgba(103,232,249,0.8)]",
};

type Tier = keyof typeof tierStyles;

export default function FoundingAlliance() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const tiersToRender = isMobile
    ? [...PARTNERSHIP_TIERS].reverse()
    : PARTNERSHIP_TIERS;

  const handlePartnerClick = () => {
    const currentType = searchParams.get("type");
    const isAlreadyOnPartnerContact =
      pathname === "/" &&
      currentType === "partner" &&
      window.location.hash === "#contact";

    if (isAlreadyOnPartnerContact) {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    router.push(`${pathname}?type=partner#contact`);
  };

  return (
    <section
      id="partnership"
      className="relative overflow-hidden bg-[#240404] px-4 py-16 text-white sm:px-6 lg:px-8">
      {/* background image / overlay */}
      <div className="absolute inset-0 bg-[url('/images/pitchdeckcover.png')] bg-cover bg-center opacity-35" />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.25),transparent_30%)]" />

      <div className="relative mx-auto w-full max-w-[1800px]">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className=" flex flex-col text-left gap-6">
            <h2 className="text-4xl font-bold uppercase tracking-tight italic sm:text-5xl md:text-6xl lg:text-7xl">
              YEARLY <span className="text-primary">IMPACT</span> BY <br />
              <span className="text-primary">INVESTMENT </span>TIER
            </h2>
          </div>

          <div className="max-w-md lg:mt-10">
            <p className="border-l border-white pl-6 text-xl font-medium leading-relaxed text-white">
              Funding translates directly into measurable school protection
              outcomes.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 xl:items-end">
          {tiersToRender.map((tier, idx) => {
            const Icon = tier.icon;
            const offsetClass =
              tier.label === "Bronze"
                ? "xl:mt-24"
                : tier.label === "Silver"
                  ? "xl:mt-16"
                  : tier.label === "Gold"
                    ? "xl:mt-8"
                    : "xl:mt-0";
            return (
              <motion.button
                key={tier.label}
                type="button"
                onClick={handlePartnerClick}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.08 }}
                className={`group relative w-full text-left ${offsetClass}`}>
                <div
                  className={`relative h-full min-h-[360px] sm:min-h-[420px] transition-transform duration-700 [transform-style:preserve-3d]  md:${tier.height}`}>
                  {/* FRONT */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.10),transparent_34%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.35),transparent_45%)]" />
                  {/* badge pinned top right */}
                  <div className="absolute right-4 top-4 z-20 [perspective:1200px]">
                    <motion.div
                      animate={{ rotateY: 360 }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{ transformStyle: "preserve-3d" }}>
                      <Image
                        src={tier.badgeSrc}
                        alt={`${tier.label} partnership badge`}
                        width={120}
                        height={120}
                        className="h-auto w-[88px] sm:w-[100px] object-contain drop-shadow-[0_14px_20px_rgba(0,0,0,0.35)]"
                      />
                    </motion.div>
                  </div>
                  {/* content */}
                  <div className="relative z-10 flex h-full flex-col justify-end p-5">
                    <div className="max-w-[78%]">
                      <p className="text-sm font-medium text-white/80 sm:text-base">
                        {tier.tier}
                      </p>

                      <div className="mt-2 flex items-center gap-2">
                        <Icon className={`h-5 w-5 ${tier.accent}`} />
                        <h4
                          className={`text-3xl font-black uppercase italic leading-none tracking-tight sm:text-4xl ${tier.accent}`}>
                          {tier.label}
                        </h4>
                      </div>

                      {/* stars */}
                      <div className="flex gap-1 pt-1">
                        {Array.from({ length: 3 }).map((_, index) => (
                          <Star
                            key={index}
                            className={`h-4 w-4 ${tierStyles[tier.star as Tier]}`}
                          />
                        ))}
                      </div>
                      <p className="mt-4 text-3xl font-black leading-none text-white sm:text-3xl">
                        {tier.value}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-white/15 pt-4">
                      <p className="text-base font-bold leading-snug text-white sm:text-lg">
                        {tier.impact}
                      </p>

                      <p className="mt-3 text-base font-bold leading-snug text-white sm:text-lg">
                        {tier.schools}
                      </p>

                      <p
                        className={`mt-3 text-xl font-black italic ${tier.accent}`}>
                        {tier.level}
                      </p>

                      {/* <div className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/70">
                        Explore Tier
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div> */}
                    </div>
                  </div>
                  {/* sweep */}
                  <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute -left-[40%] top-0 h-full w-[24%] -skew-x-12 bg-gradient-to-r from-transparent via-white/16 to-transparent opacity-0 blur-sm transition-all duration-700 ease-out group-hover:left-[120%] group-hover:opacity-100" />
                  </div>
                  {/* BACK */}
                </div>
              </motion.button>
            );
          })}
        </div>

        <div className="mx-auto mt-20 max-w-7xl ">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl">
              <p className="mb-4 text-md font-bold uppercase tracking-[0.2em] text-primary-foreground">
                Become a Partner
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                Every partnership tier helps fund expert assessments, staff
                training, and critical safety upgrades for under-resourced
                schools. If you are interested in sponsorship, funding,
                technology, or strategic collaboration, start the conversation
                with our partnership team.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <PartnerCTA />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
