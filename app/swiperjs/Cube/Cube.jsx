import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Keyboard, EffectCube } from "swiper/modules";

import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/autoplay";
import "swiper/css/keyboard";
import "swiper/css/effect-cube";
import "./Cube.css";
import Link from "next/link";
import Image from "next/image";

export default function Cube() {
  const swiperParameters = {
    modules: [A11y, Autoplay, Keyboard, EffectCube],
    grabCursor: true,
    loop: true,
    effect: "cube",
    speed: 800,
    autoplay: { enabled: true, disableOnInteraction: false },
    keyboard: { enabled: true },
    watchSlidesProgress: true,
    observer: true,
    observeParents: true,
    slidesPerGroupAuto: false,
  };

  return (
    <Swiper {...swiperParameters} className="cubeWrapper">
      <div className="wrapper">
        <SwiperSlide className="swiper-slide-9183">
          <Link href="/projects/2">
            <Image
              src="/images/bq/bq.webp"
              alt="image"
              width={700}
              height={0}
              className="w-full h-full"
            />
          </Link>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-9183">
          <Link href="/projects/4">
            <Image
              src="/images/icecream/icecream.webp"
              alt="image"
              width={700}
              height={0}
              className="w-full h-full"
            />
          </Link>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-9183">
          <Link href="/projects/1">
            <Image
              src="/images/jatcommtools/jatcommtools.webp"
              alt="image"
              width={700}
              height={0}
              className="w-full h-full"
            />
          </Link>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-9183">
          <Link href="/projects/3">
            <Image
              src="/images/hotel/hotel.webp"
              alt="image"
              width={700}
              height={0}
              className="w-full h-full"
            />
          </Link>
        </SwiperSlide>
      </div>
    </Swiper>
  );
}
