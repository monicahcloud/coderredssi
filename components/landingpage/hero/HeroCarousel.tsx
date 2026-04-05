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

const slides = [
  {
    id: 1,
    eyebrow: "For Schools",
    title: (
      <>
        A Coordinated,{" "}
        <span className="italic text-primary whitespace-nowrap">
          Partner-Driven{" "}
          <span className="text-primary-foreground">Approach</span>
        </span>
        <br />
        <span className="italic text-primary-foreground">
          To <span className="italic text-primary">School Protection</span>
        </span>
      </>
    ),
    description:
      "Helping schools prevent, prepare for, respond to, and recover from security incidents through a partner-aligned framework.",
    src: "/videos/heroVideo.mp4",
    poster: "/images/school-poster.jpg",
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
        <h1 className=" whitespace-nowrap">Support Safer Schools</h1>

        <span className="italic text-primary whitespace-nowrap">
          With Measurable Impact
        </span>
        <br />
      </>
    ),
    description:
      "Code Red standardizes assessments, training, and implementation support so each partnership and deployment can protect multiple campuses, not just one.",
    src: "/videos/heroVideo.mp4",
    poster: "/images/partner-poster.jpg",
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
        <span className="text-primary italic">Solutions Fail</span>
      </>
    ),
    description:
      "Most districts receive at most one formal safety assessment every 1-3 years, if any, and critical recommendations often go unfunded. Current security hardware, monitoring, and access-control upgrades are priced far beyond what under-resourced schools can sustain.",
    src: "/videos/heroVideo.mp4",
    poster: "/images/framework-poster.jpg",
    mediaType: "video" as const,
    type: "framework" as const,
    cta: {
      label: "Explore the Framework",
      target: "crisis",
    },
  },
  // {
  //   id: 4,
  //   eyebrow: "Why Code Red",
  //   title: (
  //     <>
  //       The CRISIS <br />
  //       <span className="text-primary italic">Schools Under Threat </span>
  //     </>
  //   ),
  //   description:
  //     "School security threats have reached unprecedented levels, demanding immediate, coordinated action.",
  //   src: "/videos/heroVideo.mp4",
  //   poster: "/images/authority-poster.jpg",
  //   mediaType: "video" as const,
  //   type: "authority" as const,
  //   cta: {
  //     label: "Learn More",
  //     target: "crisis",
  //   },
  // },
];

export default function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({
      delay: 7000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    }),
  );

  const [api, setApi] = React.useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = React.useState(0);
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -80; // adjust for navbar height
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
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-black">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        opts={{ loop: true }}
        className="w-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id}>
              <div className="relative min-h-[88vh] w-full">
                <HeroMediaBackground
                  src={slide.src}
                  poster={slide.poster}
                  alt={slide.eyebrow}
                  mediaType={slide.mediaType}
                  overlay="dark"
                  isActive={index === activeIndex}
                />

                <div className="relative z-10 mx-auto flex min-h-[88vh] w-full max-w-8xl items-center px-4 sm:px-6 lg:px-20">
                  <div className="grid w-full gap-10 lg:grid-cols-2 lg:items-center">
                    {/* LEFT COLUMN (TEXT) */}
                    <div className="max-w-2xl">
                      <div className="text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                        {slide.title}
                      </div>

                      <p className="  mt-6 text-base leading-7 text-white/80 sm:text-2xl">
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

                    {/* RIGHT COLUMN (COMPONENT SLOT) */}
                    <div className="flex w-full justify-center lg:justify-end">
                      {/* {slide.type === "school" && <SchoolCTA />}
                      {slide.type === "partner" && <PartnerCTA />} 
                      {slide.type === "framework" && (
                        <div className="text-white">
                          <FrameworkBadges />
                        </div>
                      )}
                      {slide.type === "authority" && (
                        <div className="text-white">
                          <StatusCircle />
                        </div>
                      )}*/}
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-4 top-1/2 z-20 -translate-y-1/2 border-white/20 bg-black/50 text-white hover:bg-black/70" />
        <CarouselNext className="right-4 top-1/2 z-20 -translate-y-1/2 border-white/20 bg-black/50 text-white hover:bg-black/70" />
      </Carousel>
    </section>
  );
}
