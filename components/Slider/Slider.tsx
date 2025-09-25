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
  scrollItems?: string[];
  priority?: boolean;
};

const SLIDES: Slide[] = [
  {
    hash: "slide-1",
    img: "/images/slide1.webp",
    title: "Spa & Salon Websites, Ready to Launch",
    scrollItems: [
      "Online booking with deposits & no-show protection",
      "Service menus, packages, and add-ons that upsell",
      "eGift cards, memberships, and promo codes",
    ],
    priority: true,
  },
  {
    hash: "slide-2",
    img: "/images/slide2.webp",
    title: "Built for Busy Teams",
    scrollItems: [
      "Stylist calendars, room scheduling, and shift planning",
      "POS-friendly receipts, tips pooling, inventory tracking",
      "SMS/email reminders, reviews, and before/after galleries",
    ],
  },
  {
    hash: "slide-3",
    img: "/images/slide3.webp",
    title: "Grow Bookings. Reduce No-Shows.",
    subtext:
      "Local SEO, fast load times, and automated reminders help you rank higher, get more appointments, and keep chairs filled.",
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

  const wrapAlign = (hash: string) => {
    if (hash === "slide-2") return "ml-auto text-right";
    if (hash === "slide-3") return "mx-auto text-center";
    return "";
  };

  const flexJustify = (hash: string) => {
    if (hash === "slide-3") return "justify-center";
    return "";
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
            <div
              className={`absolute inset-0 flex items-center ${flexJustify(
                s.hash
              )}`}
            >
              <div className="px-6 sm:px-10 lg:px-16 w-full">
                <div className={`max-w-4xl ${wrapAlign(s.hash)}`}>
                  <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight drop-shadow">
                    {s.title}
                  </h1>

                  {s.scrollItems ? (
                    <div className="mt-4 relative h-14 sm:h-16 lg:h-20 overflow-hidden">
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
                    <p className="mt-4 text-white/90 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl drop-shadow mx-auto md:mx-0">
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
