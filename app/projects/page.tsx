"use client";
import React from "react";

import ProjectsSwiper from "@/app/swiperjs/ProjectsSwiper/ProjectsSwiper";

import { useIsMobile } from "@/hooks/CheckMobile/useIsMobile";
const Page = () => {
  const isMobile = useIsMobile();
  return (
    <div className="w-screen bg-orange-300 pb-36 ">
      <div className="max-w-screen-2xl mx-auto pb-32  bg-offWhite relative top-[-75px] shadow-xl">
        <div className="pt-10 lg:pt-20">
          <div className="m-5">
            <p className="font-semibold text-orange-300   text-lg">
              Showcasing Innovation and Impact
            </p>
            <h1 className="text-5xl font-semibold pt-3">Featured Projects</h1>
            <p className="lg:w-1/2 pt-5 leading-relaxed indent-10  ">
              Our featured projects highlight the creativity, expertise, and
              passion we bring to every project. Take a look at some of our best
              work, where we’ve built websites and apps that help businesses
              stand out and succeed online.
            </p>
          </div>
        </div>

        <div className="w-full pt-20 lg:mb-10">
          {isMobile ? (
            <ProjectsSwiper slidesPerView={1} />
          ) : (
            <ProjectsSwiper slidesPerView={3} />
          )}
        </div>
      </div>
      {/* <Pricing /> */}
    </div>
  );
};

export default Page;
