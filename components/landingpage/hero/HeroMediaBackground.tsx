"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type HeroMediaBackgroundProps = {
  src: string;
  poster?: string;
  alt?: string;
  mediaType: "video" | "image";
  className?: string;
  overlay?: "light" | "dark" | "heavy" | "none";
  isActive?: boolean;
};

export function HeroMediaBackground({
  src,
  poster,
  alt = "",
  mediaType,
  className = "",
  overlay = "dark",
  isActive = true,
}: HeroMediaBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [canAutoplay, setCanAutoplay] = useState(true);

  useEffect(() => {
    if (mediaType !== "video") return;

    const video = videoRef.current;
    if (!video) return;

    if (!isActive) {
      video.pause();
      return;
    }

    const tryPlay = async () => {
      try {
        video.muted = true;
        video.defaultMuted = true;
        video.playsInline = true;
        await video.play();
        setCanAutoplay(true);
      } catch {
        setCanAutoplay(false);
      }
    };

    tryPlay();
  }, [src, mediaType, isActive]);

  const onTapPlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      video.muted = true;
      await video.play();
      setCanAutoplay(true);
    } catch {
      setCanAutoplay(false);
    }
  };

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {mediaType === "video" ? (
        <>
          <video
            ref={videoRef}
            muted
            autoPlay
            loop
            playsInline
            preload="metadata"
            poster={poster}
            className="h-full w-full object-cover">
            <source src={src} type="video/mp4" />
          </video>

          {!canAutoplay && (
            <button
              onClick={onTapPlay}
              className="absolute inset-0 z-20 flex items-center justify-center text-white">
              Tap to play
            </button>
          )}
        </>
      ) : (
        <Image src={src} alt={alt} fill priority className="object-cover" />
      )}

      <div
        className="absolute inset-0 bg-gradient-to-r 
  from-[#030113]/80 
  via-[#030113]/40 
  to-transparent"
      />
    </div>
  );
}
