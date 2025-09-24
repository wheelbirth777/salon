"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import EffectSuperFlow from "@/components/swiper/effect-super-flow.esm";
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "./effect-super-flow.css";
import "./MySwiper.css";

import TextComponent from "../ui/TextComponent";

export default function MySwiper() {
  const swiperParameters = {
    modules: [A11y, Autoplay, Pagination, EffectSuperFlow],
    grabCursor: true,
    effect: "super-flow",
    speed: 1000,
    pagination: { clickable: true },
    autoplay: { enabled: true },
    lazy: { enabled: true },
    watchSlidesProgress: true,
    slidesPerGroupAuto: false,
  };
  return (
    <>
      <Swiper {...swiperParameters}>
        <SwiperSlide className="swiper-slide-4ffe">
          <div className="super-flow-image">
            <Image
              className="swiper-slide-bg-image swiper-slide-bg-image-bdb6"
              src="/images/slide1.webp"
              alt=""
              loading="lazy"
              fill
              sizes="100vw"
            />
            <div className="swiper-lazy-preloader"></div>
          </div>

          <div className="swiper-slide-content super-flow-content swiper-slide-content-2f5e">
            <div className="swiper-slide-text swiper-slide-text-66a3">
              <TextComponent />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-4ffe">
          <div className="super-flow-image">
            <Image
              className="swiper-slide-bg-image swiper-slide-bg-image-bdb6"
              src="/images/slide2.webp"
              alt=""
              loading="lazy"
              fill
              sizes="100vw"
            />
            <div className="swiper-lazy-preloader"></div>
          </div>

          <div className="swiper-slide-content super-flow-content swiper-slide-content-2f5e">
            <div className="swiper-slide-text swiper-slide-text-66a3">
              <TextComponent />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-4ffe">
          <div className="super-flow-image">
            <Image
              className="swiper-slide-bg-image swiper-slide-bg-image-bdb6"
              src="/images/slide3.webp"
              alt=""
              loading="lazy"
              fill
              sizes="100vw"
            />
            <div className="swiper-lazy-preloader"></div>
          </div>

          <div className="swiper-slide-content super-flow-content swiper-slide-content-2f5e">
            <div className="swiper-slide-text swiper-slide-text-66a3">
              <TextComponent />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
