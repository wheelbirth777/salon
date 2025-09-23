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
    effect: "fade",
    navigation: true,
    pagination: { clickable: true },
    autoplay: { enabled: true, delay: 5000 },
    hashNavigation: { enabled: true, watchState: true },
    watchSlidesProgress: true,
    slidesPerGroupAuto: false,
  };
  return (
    <>
      <Swiper {...swiperParameters}>
        <SwiperSlide className=" " data-hash="slide-1">
          <Image
            src="/images/1.jpeg"
            alt="image"
            width={2200}
            height={0}
            className="w-full h-[60vh] object-cover  "
          />
        </SwiperSlide>

        <SwiperSlide className=" " data-hash="slide-2">
          <Image
            src="/images/2.jpeg"
            alt="image"
            width={2200}
            height={0}
            className="w-full h-[60vh] object-cover  "
          />
        </SwiperSlide>

        <SwiperSlide className=" " data-hash="slide-3">
          <Image
            src="/images/3.jpeg"
            alt="image"
            width={2200}
            height={0}
            className="w-full h-[60vh] object-cover "
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
