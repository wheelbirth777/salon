"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import OurServices from "@/components/OurServices/OurServices";

import AppointmentSection from "@/components/ui/AppointmentSection";
import BlogSection from "@/components/ui/BlogSection";
import GetToKnowUs from "@/components/ui/GetToKnowUs";
import ProjectsGallery from "@/components/ui/ProjectsGallery";
import ServicesSection2 from "@/components/ui/ServicesSection2";
import TestimonialsSection from "@/components/ui/TestimonialsSection";
import HeroSpa from "@/components/HeroSpa";
import MySwiper from "@/components/Services/Slider/Slider";
import SpaPricingSection from "@/components/ui/SpaPricingSection";
import TeamCarousel from "@/components/ui/TeamCarousel";
import TreatmentPricingSection from "@/components/ui/TreatmentPricingSection";
import InstagramStrip from "@/components/ui/InstagramStrip";
import QuoteSection from "@/components/ui/QuoteSection";

const Page = () => {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  return (
    <div className="wrap pt-16 bg-white dark:bg-gray-800">
      <MySwiper />
      <main className="max-w-[1440px] mx-auto w-full px-4 md:px-8 lg:px-2 ">
        <GetToKnowUs />
        <AppointmentSection />
        <SpaPricingSection />
        <TeamCarousel />
        <BlogSection />
        <TreatmentPricingSection />
        <OurServices />
        <QuoteSection />
        <InstagramStrip
          title="Follow On Instagram"
          items={[
            { src: "/images/insta1.webp", href: "https://instagram.com/..." },
            { src: "/images/insta2.webp" },
            { src: "/images/insta3.webp" },
            { src: "/images/insta4.webp" },
            { src: "/images/insta5.webp" },
            { src: "/images/insta6.webp" },
          ]}
          leftDecorSrc="/images/insta-decor.webp"
          rightDecorSrc="/images/insta-decor.webp"
        />
        <HeroSpa
          bgImage="/images/spa-hero.webp"
          onCtaClick={() => console.log("Open booking modal")}
          onWatchClick={() => console.log("Open video modal")}
        />

        <TestimonialsSection
          items={[
            {
              name: "Angelina Margret",
              role: "Customer",
              text: "Our beauty salon offers a wide range of services to cater your beauty needs from head to toe. Treat your tresses to a stylish haircut, color, or highlights that perfectly complement your features. Rejuvenate your skin with our customized facials.",
              avatar: "/images/clients/angelina.webp",
              rating: 3,
            },
            {
              name: "Esther Howard",
              role: "Customer",
              text: "Our beauty salon offers a wide range of services to cater your beauty needs from head to toe. Rejuvenate your skin with our customized facials.",
              avatar: "/images/clients/esther.webp",
              rating: 5,
            },
          ]}
          // optional: swap in your own assets
          bgTextureSrc="/images/bg-texture.jpg"
          leftDecorSrc="/images/serum-left.png"
          rightDecorSrc="/images/flower-right.png"
          cardLeafSrc="/images/card-leaf.png"
        />
        <ServicesSection2 />
        <ProjectsGallery
          items={[
            { id: 1, src: "/images/gallery/insta1.webp", tags: ["Spa"] },
            {
              id: 2,
              src: "/images/gallery/insta2.webp",
              tags: ["Hairdressing"],
            }, // optional: custom tags for filtering2.jpg", tags: ["Cosmetology"] },
            { id: 3, src: "/images/gallery/insta3.webp", tags: ["Spa"] },
            {
              id: 4,
              src: "/images/gallery/insta4.webp",
              tags: ["Hairdressing"],
            },
            { id: 5, src: "/images/gallery/insta5.webp", tags: ["Nails"] },
            {
              id: 6,
              src: "/images/gallery/insta6.webp",
              tags: ["Cosmetology"],
            },
            { id: 7, src: "/images/gallery/insta1.webp", tags: ["Spa"] },
            { id: 8, src: "/images/gallery/insta2.webp", tags: ["Spa"] },
            {
              id: 9,
              src: "/images/gallery/insta3.webp",
              tags: ["Hairdressing"],
            },
          ]}
          // optional: custom tab order/labels:
          categories={[
            "All Projects",
            "Cosmetology",
            "Spa",
            "Hairdressing",
            "Nails",
          ]}
        />
      </main>
    </div>
  );
};

export default Page;
