"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, HashNavigation, Mousewheel, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/hash-navigation";
import "swiper/css/mousewheel";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "./MySwiper.css";

import HeroSection1 from "@/components/HeroSections/HeroSection1";
import OurBenefits from "@/components/OurBenefits/OurBenefits";
import FeaturedProjects from "@/components/FeaturedProjects/FeaturedProjects";
import Pricing from "@/components/Pricing/Pricing";

export default function MySwiper() {
  const swiperParameters = {
    modules: [A11y, HashNavigation, Mousewheel, Pagination],
    direction: "vertical",
    loop: false,

    speed: 600,
    pagination: { clickable: true },
    mousewheel: { enabled: true },
    hashNavigation: { enabled: true, watchState: true },
    watchSlidesProgress: true,
    slidesPerGroupAuto: false,
    className: "mySwiper",
  };
  return (
    <>
      <Swiper {...swiperParameters}>
        <SwiperSlide className="swiper-slide-a38d h-screen" data-hash="slide-1">
          <HeroSection1 />

          <div className="swiper-slide-content swiper-slide-content-2f5e"></div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-a38d h-screen" data-hash="slide-2">
          <FeaturedProjects />
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-a38d h-screen" data-hash="slide-3">
          <OurBenefits />
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-a38d h-screen" data-hash="slide-3">
          <Pricing />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
