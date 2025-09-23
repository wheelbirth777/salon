// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./ProjectsSwiper.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

export default function App({ slidesPerView }) {
  return (
    <div className="projectsSwiper overflow-hidden">
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="projectsSwiper"
      >
        <SwiperSlide>
          <Link href="/projects/2">
            <Image
              src={"/images/bq/bq.webp"}
              alt="image"
              width={400}
              height={0}
              className="w-full h-full object-cover shadow-xl border-[10px] border-white hover:cursor-pointer hover:scale-95 hover:opacity-70   transition duration-700 ease-in-out"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/projects/3">
            <Image
              src={"/images/hotel/hotel.webp"}
              alt="image"
              width={400}
              height={0}
              className="w-full h-full object-cover shadow-xl border-[10px] border-white hover:cursor-pointer hover:scale-95 hover:opacity-70   transition duration-700 ease-in-out"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/projects/4">
            <Image
              src={"/images/icecream/icecream.webp"}
              alt="image"
              width={400}
              height={0}
              className="w-full h-full object-cover shadow-xl border-[10px] border-white hover:cursor-pointer hover:scale-95 hover:opacity-70   transition duration-700 ease-in-out"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/projects/1">
            <Image
              src={"/images/jatcommtools/jatcommtools.webp"}
              alt="image"
              width={400}
              height={0}
              className="w-full h-full object-cover shadow-xl border-[10px] border-white hover:cursor-pointer hover:scale-95 hover:opacity-70   transition duration-700 ease-in-out"
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
