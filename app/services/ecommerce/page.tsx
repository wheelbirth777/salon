"use client";

import Ecommerce from "@/components/Services/Ecommerce";
import React from "react";
import ServiceSlider from "@/components/ServiceSlider/ServiceSlider";

import { useIsMobile } from "@/hooks/CheckMobile/useIsMobile";

const Page = () => {
  const isMobile = useIsMobile();
  return (
    <div>
      <div className="w-screen bg-lightBlack">
        {/* <BreadCrumb url={"Ecommerce"} /> */}
      </div>

      <div className="bg-orange-300 pb-20  pt-20">
        <Ecommerce />
      </div>

      <div className="bg-orange-300 pb-40 overflow-hidden">
        <div className="p-5 lg:max-w-screen-2xl mx-auto">
          <p
            className="font-semibold text-white"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            SERVICES
          </p>
          <h1
            className="text-5xl font-bold pt-2"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Other Services
          </h1>
          <p
            className="font-semibold text-xl pt-3 pb-10 text-gray"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Expert Services to Elevate Your Business
          </p>
        </div>
        {isMobile ? (
          <ServiceSlider slidesPerView={1} />
        ) : (
          <ServiceSlider slidesPerView={4} />
        )}
      </div>

      {/* <Pricing /> */}
    </div>
  );
};

export default Page;
