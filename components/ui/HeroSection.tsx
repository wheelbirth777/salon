"use client";

import React from "react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative h-[90vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/essence-of-beauty-bg.jpg')",
      }}
    >
      {/* Overlay for darkening if needed */}
      <div className="absolute inset-0 bg-white/40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-xl">
          <p className="italic text-sm text-gray-700 mb-2">
            Professional Styling Since 1990
          </p>
          <h1 className="text-5xl md:text-6xl font-serif font-semibold text-black leading-tight">
            THE ESSENCE <br /> OF BEAUTY
          </h1>
          <Link
            href="#"
            className="inline-block mt-6 bg-[#c5a55a] text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-[#b8984f] transition"
          >
            BOOK NOW
          </Link>
        </div>
      </div>

      {/* Wavy Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          viewBox="0 0 500 50"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[80px]"
        >
          <path
            d="M0,0 C150,50 350,0 500,50 L500,00 L0,0 Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
}
