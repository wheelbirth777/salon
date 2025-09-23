import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, EffectCreative, Pagination } from "swiper/modules";
import EffectCarousel from "./effect-carousel.esm.js";
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "./effect-carousel.css";
import "./MySwiper.css";
import Image from "next/image.js";
import Link from "next/link.js";

export default function MySwiper() {
  const swiperParameters = {
    modules: [A11y, EffectCreative, Pagination, EffectCarousel],
    slidesPerView: "auto",
    centeredSlides: true,
    autoPlay: true,
    loop: true,
    effect: "carousel",
    creativeEffect: {
      limitProgress: 1,
      prev: { shadow: true },
      next: { shadow: true },
    },
    pagination: { enabled: true, clickable: true },
  };
  return (
    <div className="sliderV1">
      <Swiper {...swiperParameters} className="sliderV1">
        <SwiperSlide>
          <Link href={"/services/custom-website"}>
            <Image
              className="w-full h-full object-cover swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-carousel-animate-opacity"
              src="/images/services/customweb.webp"
              width={700}
              height={0}
              alt="Slide Image"
            />

            <div className="swiper-slide-content swiper-carousel-animate-opacity swiper-slide-content-7bb6">
              <div className="relative">
                <p className="font-bold text-white text-shadow text-2xl absolute top-[-100px] left-0  p-5 bg-black border border-orange-200">
                  Custom SPA Website
                </p>
              </div>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-aedc">
          <Link href={"/services/ai"}>
            <Image
              className="w-full h-full swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-carousel-animate-opacity"
              src="/images/ai.webp"
              width={700}
              height={0}
              alt="Slide Image"
            />

            <div className="swiper-slide-content swiper-carousel-animate-opacity swiper-slide-content-7bb6">
              <div className="relative">
                <p className="font-bold text-white text-shadow text-2xl absolute top-[-100px] left-0  p-5 bg-black border border-orange-200">
                  AI
                </p>
              </div>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-aedc">
          <Link href={"/services/ecommerce"}>
            <Image
              className="w-full h-full swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-carousel-animate-opacity"
              src="/images/services/ecommerce.webp"
              width={700}
              height={0}
              alt="Slide Image"
            />

            <div className="swiper-slide-content swiper-carousel-animate-opacity swiper-slide-content-7bb6">
              <div className="relative">
                <p className="font-bold text-white text-shadow text-2xl absolute top-[-100px] left-0  p-5 bg-black border border-orange-200">
                  Ecommerce
                </p>
              </div>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-aedc">
          <Link href={"/services/mobile-app"}>
            <Image
              className="w-full h-full swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-carousel-animate-opacity"
              src="/images/mobileApp2.webp"
              width={700}
              height={0}
              alt="Slide Image"
            />

            <div className="swiper-slide-content swiper-carousel-animate-opacity swiper-slide-content-7bb6">
              <div className="relative">
                <p className="font-bold text-white text-shadow text-2xl absolute top-[-100px] left-0  p-5 bg-black border border-orange-200">
                  Mobile App
                </p>
              </div>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-aedc">
          <Link href={"/services/support"}>
            <Image
              className="w-full h-full swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-carousel-animate-opacity"
              src="/images/services/support4.webp"
              width={700}
              height={0}
              alt="Slide Image"
            />

            <div className="swiper-slide-content swiper-carousel-animate-opacity swiper-slide-content-7bb6">
              <div className="relative">
                <p className="font-bold text-white text-shadow text-2xl absolute top-[-100px] left-0  p-5 bg-black border border-orange-200">
                  Support
                </p>
              </div>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-aedc">
          <Link href={"/services/ux-ui"}>
            <Image
              className="w-full h-full swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-carousel-animate-opacity"
              src="/images/services/ux3.webp"
              width={700}
              height={0}
              alt="Slide Image"
            />

            <div className="swiper-slide-content swiper-carousel-animate-opacity swiper-slide-content-7bb6">
              <div className="relative">
                <p className="font-bold text-white text-shadow text-2xl absolute top-[-100px] left-0  p-5 bg-black border border-orange-200">
                  UX/UI Design
                </p>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
