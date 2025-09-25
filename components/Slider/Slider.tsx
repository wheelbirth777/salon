"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  HashNavigation,
  Navigation,
  Pagination,
  EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/autoplay";
import "swiper/css/hash-navigation";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "./slider.css";
import Image from "next/image";

type Slide = {
  hash: string;
  img: string;
  title: string;
  subtext?: string;
  scrollItems?: string[]; // if present, we'll marquee these
  priority?: boolean;
};

const SLIDES: Slide[] = [
  {
    hash: "slide-1",
    img: "/images/slide1.webp",
    title: "Launch-Ready Websites",
    scrollItems: [
      "Beautiful, fast, and built to convert.",
      "Live in days, not months.",
      "Hosting, analytics, and SEO included.",
    ],
    priority: true,
  },
  {
    hash: "slide-2",
    img: "/images/slide2.webp",
    title: "Modern Stacks",
    scrollItems: [
      "Next.js • Tailwind • Prisma",
      "Optimized images & lighthouse scores",
      "Clean, maintainable codebases",
    ],
  },
  {
    hash: "slide-3",
    img: "/images/slide3.webp",
    title: "Scale with Confidence",
    subtext: "SEO, analytics, and best practices baked in from day one.",
  },
];

export default function MySwiper() {
  const swiperParameters = {
    modules: [
      A11y,
      Autoplay,
      HashNavigation,
      Navigation,
      Pagination,
      EffectFade,
    ],
    loop: true,
    effect: "fade" as const,
    navigation: true,
    pagination: { clickable: true },
    autoplay: { enabled: true, delay: 5000 },
    hashNavigation: { enabled: true, watchState: true },
    watchSlidesProgress: true,
    slidesPerGroupAuto: false,
  };

  return (
    <Swiper {...swiperParameters}>
      {SLIDES.map((s) => (
        <SwiperSlide
          key={s.hash}
          className="swiper-slide-9183"
          data-hash={s.hash}
        >
          <div className="relative w-full h-screen">
            <Image
              src={s.img}
              alt={s.title}
              fill
              sizes="100vw"
              className="object-cover p-0"
              priority={s.priority}
            />

            {/* gradient for text readability */}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"
              aria-hidden="true"
            />

            {/* overlay content */}
            <div className="absolute inset-0 flex items-center">
              <div className="px-6 sm:px-10 lg:px-16 w-full">
                <div className="max-w-4xl">
                  <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight drop-shadow">
                    {s.title}
                  </h1>

                  {/* If scrollItems provided, render marquee-style vertical scroll; else render subtext normally */}
                  {s.scrollItems ? (
                    <div className="mt-4 relative h-14 sm:h-16 lg:h-20 overflow-hidden">
                      {/* duplicate list for seamless loop */}
                      <ul className="scroll-vert text-white/90 text-base sm:text-lg lg:text-xl leading-relaxed drop-shadow">
                        {s.scrollItems.map((item, idx) => (
                          <li key={`a-${idx}`} className="py-1">
                            {item}
                          </li>
                        ))}
                        {s.scrollItems.map((item, idx) => (
                          <li key={`b-${idx}`} className="py-1">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : s.subtext ? (
                    <p className="mt-4 text-white/90 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl drop-shadow">
                      {s.subtext}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
