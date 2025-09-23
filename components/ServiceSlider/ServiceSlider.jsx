// Import Swiper React components
"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

export default function ServiceSlider({ slidesPerView }) {
  return (
    <>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="serviceSlider"
      >
        <SwiperSlide>
          <Link href="/services/ux-ui">
            <div className="relative">
              <Image
                src="/images/services/ux3.webp"
                alt="image"
                width={700}
                height={0}
                className="w-full  shadow-xl object-cover"
              />
              <div
                className="absolute top-10 left-0"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <p className="  text-white text-4xl font-bold bg-black border border-orange-200  p-5">
                  UX/UI
                </p>
                <div className="absolute top-0 left-0  bg-black opacity-0 w-full h-full hover:opacity-25  "></div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/services/custom-website">
            <div className="relative">
              <Image
                src="/images/services/customweb.webp"
                alt="image"
                width={700}
                height={0}
                className="w-full h-full object-cover shadow-xl"
              />
              <div
                className="absolute top-10 left-0"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <p className="  text-white text-4xl font-bold bg-black border border-orange-200  p-5">
                  Custom Website
                </p>
                <div className="absolute top-0 left-0  bg-black opacity-0 w-full h-full hover:opacity-25  "></div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/services/ai">
            <div className="relative">
              <Image
                src="/images/ai.webp"
                alt="image"
                width={700}
                height={0}
                className="w-full h-full object-cover shadow-xl"
              />
              <div
                className="absolute top-10 left-0"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <p className="  text-white text-4xl font-bold bg-black border border-orange-200  p-5">
                  AI
                </p>
                <div className="absolute top-0 left-0  bg-black opacity-0 w-full h-full hover:opacity-25  "></div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/services/mobile-app">
            <div className="relative">
              <Image
                src="/images/mobileApp2.webp"
                alt="image"
                width={700}
                height={0}
                className="w-full h-full object-cover shadow-xl"
              />
              <div
                className="absolute top-10 left-0"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <p className="  text-white text-4xl font-bold bg-black border border-orange-200  p-5">
                  Mobile App
                </p>
                <div className="absolute top-0 left-0  bg-black opacity-0 w-full h-full hover:opacity-25  "></div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/services/ecommerce">
            <div className="relative">
              <Image
                src="/images/services/ecommerce.webp"
                alt="image"
                width={700}
                height={0}
                className="w-full h-full object-cover shadow-xl"
              />
              <div
                className="absolute top-10 left-0"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <p className="  text-white text-4xl font-bold bg-black border border-orange-200  p-5">
                  Ecommerce
                </p>
                <div className="absolute top-0 left-0  bg-black opacity-0 w-full h-full hover:opacity-25  "></div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/services/support">
            <div className="relative">
              <Image
                src="/images/services/maintenance.webp"
                alt="image"
                width={700}
                height={0}
                className="w-full h-full object-cover shadow-xl"
              />
              <div
                className="absolute top-10 left-0"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <p className="  text-white text-4xl font-bold bg-black border border-orange-200  p-5">
                  Maintenance
                </p>
                <div className="absolute top-0 left-0  bg-black opacity-0 w-full h-full hover:opacity-25  "></div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
