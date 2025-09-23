"use client";

import ArtificialIntelligence from "@/components/Services/ArtificialIntelligence";
import React from "react";

import ServiceSlider from "@/components/ServiceSlider/ServiceSlider";

const Page = () => {
  return (
    <div>
      <div className="w-screen bg-lightBlack">
        {/* <BreadCrumb url={"Artificial Intelligence"} /> */}
      </div>
      <ArtificialIntelligence />
      <ServiceSlider slidesPerView={4} />
      {/* <Pricing /> */}
    </div>
  );
};

export default Page;
