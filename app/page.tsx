"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection1 from "@/components/HeroSections/HeroSection1";

import AboutDentist from "@/components/AboutSection/AboutDentist";
import OurServices from "@/components/OurServices/OurServices";
import Gallery from "@/components/Gallery/Gallery";
import Testimonials from "@/components/Testimonials/Testimonials";
import Booking from "@/components/Booking/Booking";
import Blog from "@/components/Blog/Blog";

const Page = () => {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  return (
    <div>
      <HeroSection1 />
      <Booking />
      <AboutDentist
        photoSrc="/images/about/dentist-kid.jpg"
        toolsSrc="/images/about/tools.png"
        ctaHref="/contact"
        phoneHref="tel:+10123456789"
        phoneLabel="+012 (345) 6789"
      />
      <OurServices />

      <Gallery />
      <Testimonials
        imageSrc="/images/testimonials/tooth-hero.png"
        // autoRotateMs={0} // uncomment to disable auto-rotate
      />
      <Blog />
    </div>
  );
};

export default Page;
