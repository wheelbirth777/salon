"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const teamMembers = [
  {
    name: "Kristin Watson",
    image: "/images/team-carousel/therapist-3.webp",
    featured: false,
  },
  {
    name: "Jenny Wilson",
    title: "Trainer",
    image: "/images/team-carousel/therapist-1.webp",
    featured: false,
  },
  {
    name: "Robert Fox",
    title: "Massage Expert",
    image: "/images/team-carousel/therapist-2.webp",
    featured: false,
  },
  {
    name: "Robert Fox",
    title: "Massage Expert",
    image: "/images/team-carousel/therapist-2.webp",
    featured: false,
  },
  {
    name: "Kristin Watson",
    image: "/images/team-carousel/therapist-3.webp",
    featured: false,
  },
  {
    name: "Kristin Watson",
    image: "/images/team-carousel/therapist-3.webp",
    featured: false,
  },
  {
    name: "Jenny Wilson",
    title: "Trainer",
    image: "/images/team-carousel/therapist-1.webp",
    featured: false,
  },
];

export default function TeamCarousel() {
  return (
    <section className="bg-white py-20 text-center">
      <p className="uppercase text-yellow-700 text-sm tracking-widest font-light">
        Our team
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-12">
        Meet Certified Therapist
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1.2}
        centeredSlides
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto px-4"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex flex-col items-center justify-center">
              {/* Aspect ratio wrapper for Next/Image fill */}
              <div className="relative w-full aspect-[3/4] overflow-hidden border-[6px] border-white shadow-xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(min-width:1024px) 320px, (min-width:768px) 33vw, 80vw"
                  className={`object-cover transition-opacity duration-300 ${
                    member.featured ? "opacity-50" : "opacity-100"
                  }`}
                  priority={index < 3}
                />
                {member.featured && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-yellow-600 bg-opacity-70">
                    <h4 className="text-xl font-semibold">{member.name}</h4>
                    <p className="text-sm mt-1">{member.title}</p>
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
