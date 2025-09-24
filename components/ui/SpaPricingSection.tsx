"use client";

import Image from "next/image";
import PricingItem from "./PricingItem";

const leftItems = [
  {
    image: "/images/spa-pricing-section/manicure.webp",
    title: "Manicure",
    subtitle: "20mins revitalize facial",
    price: "$30",
  },
  {
    image: "/images/spa-pricing-section/face-facial.webp",
    title: "Face facial",
    subtitle: "20mins revitalize facial",
    price: "$40",
  },
  {
    image: "/images/spa-pricing-section/makeup-massage.webp",
    title: "Makeup & Massage",
    subtitle: "20mins revitalize facial",
    price: "$50",
  },
];

const rightItems = [
  {
    image: "/images/spa-pricing-section/manicure.webp",
    title: "Manicure",
    subtitle: "20mins revitalize facial",
    price: "$30",
  },
  {
    image: "/images/spa-pricing-section/body-massage.webp",
    title: "Body Massage",
    subtitle: "20mins revitalize facial",
    price: "$40",
  },
  {
    image: "/images/spa-pricing-section/body-massage.webp",
    title: "Backbone therapy",
    subtitle: "20mins revitalize facial",
    price: "$50",
  },
];

export default function SpaPricingSection() {
  return (
    <section className="relative bg-white py-20">
      {/* Decorative Leaves can go here as absolutely positioned images if needed */}

      <div className="text-center mb-16">
        <div className="flex flex-col items-center mb-2">
          <Image
            src="/images/logo4.webp"
            alt="Logo 2"
            width={80}
            height={80}
            className="w-20 h-20 mb-1"
            priority
          />
          <p className="uppercase text-yellow-700 text-sm tracking-widest font-light">
            Price
          </p>
        </div>

        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Spa Treatments With Pricing!
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Left List */}
        <div className="w-full lg:w-1/3 space-y-6">
          {leftItems.map((item, index) => (
            <PricingItem key={index} {...item} />
          ))}

          <div className="absolute top-0 left-0 z-20">
            <Image
              src="/images/leaf-corner.webp"
              alt="Leaf decor"
              width={300}
              height={300}
              className="pointer-events-none select-none"
            />
          </div>
        </div>

        {/* Center Oval Image */}
        <div className="relative w-[220px] h-[300px] rounded-full overflow-hidden border-[6px] border-white shadow-lg">
          <Image
            src="/images/spa-woman.webp"
            alt="Relaxed woman"
            fill
            sizes="220px"
            className="object-cover"
            priority
          />
        </div>

        <div className="absolute top-0 right-0 z-20">
          <Image
            src="/images/leaf-corner.webp"
            alt="Leaf decor"
            width={300}
            height={300}
            className="pointer-events-none select-none"
          />
        </div>

        {/* Right List */}
        <div className="w-full lg:w-1/3 space-y-6">
          {rightItems.map((item, index) => (
            <PricingItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
