"use client";

import * as React from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { HeroMediaBackground } from "./HeroMediaBackground";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

const slides = [
  {
    id: 1,
    eyebrow: "For Schools",
    title: (
      <>
        A Coordinated,{" "}
        <span className="whitespace-nowrap italic text-primary">
          Partner-Driven{" "}
          <span className="text-primary-foreground">Approach</span>
        </span>
        {"  "}
        To
        <span className="italic text-primary whitespace-nowrap">
          {" "}
          School Protection
        </span>
      </>
    ),
    description:
      "Helping schools prevent, prepare for, respond to, and recover from security incidents through a partner-aligned framework.",
    src: "/videos/heroVideo.mp4",
    poster: "/images/kidswalkingtoschool.png",
    mediaType: "video" as const,
    type: "school" as const,
    cta: {
      label: "Learn Our Approach",
      target: "audiences",
    },
  },
  {
    id: 2,
    eyebrow: "For Partners",
    title: (
      <>
        <span className="whitespace-nowrap">Support Safer Schools</span>
        <br />
        <span className="whitespace-nowrap italic text-primary">
          With Measurable Impact
        </span>
      </>
    ),
    description:
      "Code Red standardizes assessments, training, and implementation support so each partnership and deployment can protect multiple campuses, not just one.",
    src: "/videos/schooloffice.mp4",
    poster: "/images/kidswalkingtoschool.png",
    mediaType: "video" as const,
    type: "partner" as const,
    cta: {
      label: "Learn How to Help",
      target: "partnership",
    },
  },
  {
    id: 3,
    eyebrow: "WHY CURRENT SOLUTIONS FAIL",
    title: (
      <>
        Why Current <br />
        <span className="italic text-primary">Solutions Fail</span>
      </>
    ),
    description:
      "Most districts receive at most one formal safety assessment every 1-3 years, if any, and critical recommendations often go unfunded. Current security hardware, monitoring, and access-control upgrades are priced far beyond what under-resourced schools can sustain.",
    src: "/videos/assessmentmeeting.mp4",
    poster: "/images/kidswalkingtoschool.png",
    mediaType: "video" as const,
    type: "framework" as const,
    cta: {
      label: "Explore the Framework",
      target: "crisis",
    },
  },
];

export default function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({
      delay: 7000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    }),
  );

  const { scrollY } = useScroll();

  const mediaOpacity = useTransform(scrollY, [0, 500], [1, 0.35]);
  const mediaBlur = useTransform(scrollY, [0, 500], [0, 8]);
  const mediaFilter = useMotionTemplate`blur(${mediaBlur}px)`;

  const [api, setApi] = React.useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = React.useState(0);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    onSelect();
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black z-10">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        opts={{ loop: true }}
        className="h-full w-full">
        <CarouselContent className="h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id} className="h-full">
              <div className="relative h-screen w-full">
                <motion.div
                  style={{ opacity: mediaOpacity, filter: mediaFilter }}
                  className="absolute inset-0">
                  <HeroMediaBackground
                    src={slide.src}
                    poster={slide.poster}
                    alt={slide.eyebrow}
                    mediaType={slide.mediaType}
                    overlay="dark"
                    isActive={index === activeIndex}
                  />
                </motion.div>
                <div className="relative z-10 mx-auto flex h-screen w-full max-w-8xl items-start px-4 pt-20 sm:px-6 sm:pt-28 lg:items-center lg:px-25 lg:pt-0">
                  <div className="grid w-full gap-10 lg:grid-cols-2 lg:items-center">
                    <div className="max-w-2xl pt-2 sm:pt-4 lg:pt-0">
                      <div className="text-3xl font-bold leading-[1.05] sm:text-5xl lg:text-7xl">
                        {slide.title}
                      </div>

                      <p className="mt-4 text-base leading-7 text-white/80 sm:mt-6 sm:text-2xl">
                        {slide.description}
                      </p>

                      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                        <Button
                          size="lg"
                          onClick={() => scrollToSection(slide.cta.target)}
                          className="rounded-full px-6 text-sm font-bold uppercase tracking-[0.04em]">
                          {slide.cta.label}
                        </Button>
                      </div>
                    </div>

                    {/* <div className="flex w-full justify-center lg:justify-end"> */}
                    {/* right side slot */}
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-1 sm:left-6 top-1/2 z-40 -translate-y-1/2 h-10 w-10 sm:h-14 sm:w-14 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-white hover:bg-black/70 [&>svg]:h-5 [&>svg]:w-5 sm:[&>svg]:h-7 sm:[&>svg]:w-7" />

        <CarouselNext className="right-2 sm:right-6 top-1/2 z-40 -translate-y-1/2 h-10 w-10 sm:h-14 sm:w-14 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-white hover:bg-black/70 [&>svg]:h-5 [&>svg]:w-5 sm:[&>svg]:h-7 sm:[&>svg]:w-7" />
      </Carousel>

      <div className="pointer-events-none absolute bottom-8 left-1/2 z-50 flex -translate-x-1/2 gap-2 sm:bottom-10 sm:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => api?.scrollTo(index)}
            className="pointer-events-auto group relative flex items-center justify-center">
            <span
              className={`block h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-6 sm:w-10 bg-primary"
                  : "w-2 bg-white/70"
              }`}
            />
            {activeIndex === index && (
              <span className="absolute h-2.5 w-10 rounded-full bg-primary blur-[6px] opacity-60" />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
