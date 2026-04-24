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
                <div className="relative z-10 mx-auto flex h-screen w-full max-w-8xl items-start px-5 pt-24 sm:px-8 sm:pt-28 md:px-12 md:pt-32 lg:px-20 lg:pt-36 xl:px-25">
                  <div className="grid w-full gap-10 lg:grid-cols-2 lg:items-center">
                    <div className="max-w-2xl pt-2 sm:pt-4 lg:pt-0">
                      <div className="max-w-[92%] text-[2rem] font-bold leading-[1.05] sm:text-5xl md:max-w-[80%] md:text-6xl lg:max-w-2xl lg:text-7xl">
                        {slide.title}
                      </div>
                      <p className="mt-4 max-w-[92%] text-sm leading-6 text-white/85 sm:max-w-[80%] sm:text-base md:text-lg md:leading-7 lg:max-w-2xl lg:text-2xl">
                        {slide.description}
                      </p>

                      <div className="mt-6 flex flex-col gap-4 sm:mt-8 sm:flex-row sm:items-center">
                        <Button
                          size="lg"
                          onClick={() => scrollToSection(slide.cta.target)}
                          className="h-11 w-full rounded-full px-5 text-xs font-bold uppercase tracking-[0.04em] sm:w-auto sm:px-6 sm:text-sm">
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
        <CarouselPrevious
          className="
    left-8 top-[66%] z-50 -translate-y-1/2
    h-14 w-14 border-none bg-transparent shadow-none
    text-white hover:bg-transparent hover:text-white
    transition-all duration-300 hover:scale-110

    sm:left-8 sm:top-[62%] sm:h-16 sm:w-16
    md:left-10 md:top-1/2 md:h-18 md:w-18
    lg:left-6 lg:h-20 lg:w-20

    [&_svg]:!h-10 [&_svg]:!w-10
    sm:[&_svg]:!h-12 sm:[&_svg]:!w-12
    md:[&_svg]:!h-14 md:[&_svg]:!w-14
    lg:[&_svg]:!h-16 lg:[&_svg]:!w-16
  "
        />

        <CarouselNext
          className="
    right-8 top-[66%] z-50 -translate-y-1/2
    h-14 w-14 border-none bg-transparent shadow-none
    text-white hover:bg-transparent hover:text-white
    transition-all duration-300 hover:scale-110

    sm:right-8 sm:top-[62%] sm:h-16 sm:w-16
    md:right-10 md:top-1/2 md:h-18 md:w-18
    lg:right-8 lg:h-20 lg:w-20

    [&_svg]:!h-10 [&_svg]:!w-10
    sm:[&_svg]:!h-12 sm:[&_svg]:!w-12
    md:[&_svg]:!h-14 md:[&_svg]:!w-14
    lg:[&_svg]:!h-16 lg:[&_svg]:!w-16
  "
        />
      </Carousel>
      {/* <div className="absolute bottom-32 left-1/2 z-50 -translate-x-1/2 rounded-full bg-black/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-md sm:bottom-36">
        Slide {activeIndex + 1} of {slides.length}
      </div> */}
      <div className="pointer-events-none absolute bottom-34 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/20 bg-black/50 px-5 py-3 backdrop-blur-md sm:bottom-40">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => api?.scrollTo(index)}
            className="pointer-events-auto group relative flex items-center justify-center">
            <span
              className={`block h-3 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-12 bg-primary shadow-[0_0_18px_rgba(220,0,0,0.9)]"
                  : "w-3 bg-white/80 hover:bg-white"
              }`}
            />
            {activeIndex === index && (
              <span className="absolute h-4 w-14 rounded-full bg-primary blur-[10px] opacity-70" />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
