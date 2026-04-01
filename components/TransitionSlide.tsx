"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ToneName =
  | "red"
  | "dark"
  | "light"
  | "crisis"
  | "steel"
  | "midnight"
  | "blueprint"
  | "glass"
  | "neutral";

type TransitionSlideProps = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string | string[];
  align?: "left" | "center";
  tone?: ToneName;
  className?: string;
};

const toneStyles: Record<
  ToneName,
  {
    section: string;
    line: string;
    highlight: string;
    panel: string;
    desc: string;
    eyebrow: string;
    bullet: string;
    glow: string;
  }
> = {
  red: {
    section:
      "bg-gradient-to-r from-[#3b0000] via-[#6e0000] to-[#a30000] text-white",
    line: "bg-white/30",
    highlight: "text-white",
    panel: "bg-white/8 border-white/15",
    desc: "text-white/80",
    eyebrow: "text-white/65",
    bullet: "bg-white text-[#7a0000]",
    glow: "bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_28%)]",
  },

  dark: {
    section:
      "bg-gradient-to-r from-black via-[#111111] to-[#1c1c1c] text-white",
    line: "bg-primary/40",
    highlight: "text-primary",
    panel: "bg-white/5 border-white/10",
    desc: "text-white/70",
    eyebrow: "text-white/50",
    bullet: "bg-primary text-white",
    glow: "bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_28%)]",
  },

  light: {
    section:
      "bg-gradient-to-r from-[#f5f5f5] via-white to-[#efefef] text-black",
    line: "bg-primary/30",
    highlight: "text-primary",
    panel: "bg-black/[0.03] border-black/10",
    desc: "text-black/65",
    eyebrow: "text-black/45",
    bullet: "bg-primary text-white",
    glow: "bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.08),transparent_28%)]",
  },

  crisis: {
    section:
      "bg-gradient-to-r from-[#120000] via-[#280000] to-[#460000] text-white",
    line: "bg-red-500/40",
    highlight: "text-red-500",
    panel: "bg-black/25 border-red-500/20",
    desc: "text-white/80",
    eyebrow: "text-red-200/70",
    bullet: "bg-red-600 text-white",
    glow: "bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.22),transparent_28%)]",
  },

  steel: {
    section:
      "bg-gradient-to-r from-[#1f2328] via-[#2d333b] to-[#3b424c] text-white",
    line: "bg-slate-300/25",
    highlight: "text-slate-100",
    panel: "bg-white/6 border-white/12",
    desc: "text-white/72",
    eyebrow: "text-slate-300/60",
    bullet: "bg-slate-200 text-slate-900",
    glow: "bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_28%)]",
  },

  midnight: {
    section:
      "bg-gradient-to-r from-[#050816] via-[#0b1022] to-[#161b33] text-white",
    line: "bg-cyan-400/25",
    highlight: "text-cyan-300",
    panel: "bg-white/[0.04] border-cyan-300/10",
    desc: "text-white/72",
    eyebrow: "text-cyan-200/55",
    bullet: "bg-cyan-400 text-slate-950",
    glow: "bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_28%)]",
  },

  blueprint: {
    section:
      "bg-gradient-to-r from-[#0b3b66] via-[#145a96] to-[#1e73be] text-white",
    line: "bg-white/30",
    highlight: "text-white",
    panel: "bg-black/15 border-white/15",
    desc: "text-white/82",
    eyebrow: "text-white/65",
    bullet: "bg-white text-[#145a96]",
    glow: "bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_28%)]",
  },

  glass: {
    section:
      "bg-gradient-to-r from-[#171717]/95 via-[#232323]/95 to-[#111111]/95 text-white",
    line: "bg-white/20",
    highlight: "text-primary",
    panel: "bg-white/8 border-white/12 backdrop-blur-xl",
    desc: "text-white/78",
    eyebrow: "text-white/52",
    bullet: "bg-primary text-white",
    glow: "bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_28%)]",
  },

  neutral: {
    section:
      "bg-gradient-to-r from-[#e7e2db] via-[#f2eee8] to-[#ddd6cd] text-black",
    line: "bg-black/15",
    highlight: "text-primary",
    panel: "bg-white/60 border-black/10 backdrop-blur-sm",
    desc: "text-black/70",
    eyebrow: "text-black/45",
    bullet: "bg-primary text-white",
    glow: "bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.08),transparent_28%)]",
  },
};

const splitTitle = (title: string, highlight?: string) => {
  if (!highlight || !title.includes(highlight)) {
    return <>{title}</>;
  }

  const [before, after] = title.split(highlight);

  return (
    <>
      {before}
      <span className="italic">{highlight}</span>
      {after}
    </>
  );
};

const TransitionSlide = ({
  eyebrow = "Code Red SSI",
  title,
  highlight,
  description,
  align = "center",
  tone = "red",
  className,
}: TransitionSlideProps) => {
  const styles = toneStyles[tone];
  const isCenter = align === "center";

  return (
    <section
      className={cn(
        "relative overflow-hidden px-4 py-8 sm:px-6 md:py-10 lg:px-8",
        styles.section,
        className,
      )}>
      <div className="absolute inset-0 opacity-20">
        <div className={cn("absolute inset-0", styles.glow)} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.04),transparent)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "relative mx-auto flex w-full max-w-6xl flex-col gap-6",
          isCenter ? "items-center text-center" : "items-start text-left",
        )}>
        <p
          className={cn(
            "text-[14px] sm:text-[18px] md:text-[22px] font-black uppercase tracking-[0.24em]",
            styles.eyebrow,
          )}>
          {eyebrow}
        </p>

        <div
          className={cn(
            "h-px w-full max-w-xs",
            styles.line,
            isCenter ? "mx-auto" : "",
          )}
        />

        <h2 className="max-w-6xl text-4xl font-black uppercase tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className={styles.highlight}>
            {splitTitle(title, highlight)}
          </span>
        </h2>

        {description ? (
          <div
            className={cn(
              "max-w-3xl border px-5 py-4 backdrop-blur-sm",
              styles.panel,
            )}>
            {Array.isArray(description) ? (
              <ul className="space-y-3">
                {description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span
                      className={cn(
                        "mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold",
                        styles.bullet,
                      )}>
                      ✓
                    </span>
                    <span
                      className={cn(
                        "text-base leading-7 md:text-lg",
                        styles.desc,
                      )}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className={cn("text-base leading-7 md:text-lg", styles.desc)}>
                {description}
              </p>
            )}
          </div>
        ) : null}
      </motion.div>
    </section>
  );
};

export default TransitionSlide;
