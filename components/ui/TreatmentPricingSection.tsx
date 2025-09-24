import Image from "next/image";
import TreatmentCard from "./TreatmentCard";

const leftTreatments = [
  {
    image: "/images/spa-face-mask.webp",
    title: "Face Relax Massage",
    session: "10 – 100 minute session",
    price: "$85.00",
    badge: "1",
  },
  {
    image: "/images/spa-face-mask.webp",
    title: "Personalized Massage",
    session: "10 – 100 minute session",
    price: "$95.00",
    badge: "2",
  },
  {
    image: "/images/spa-face-mask.webp",
    title: "Lomi Loma Massage",
    session: "10 – 100 minute session",
    price: "$100.00",
    badge: "3",
  },
];

const rightTreatments = [
  {
    image: "/images/spa-face-mask.webp",
    title: "Swedish Massage",
    session: "10 – 100 minute session",
    price: "$85.00",
  },
  {
    image: "/images/spa-face-mask.webp",
    title: "Prenatal Massage",
    session: "10 – 100 minute session",
    price: "$85.00",
  },
  {
    image: "/images/spa-face-mask.webp",
    title: "Mineral Baths",
    session: "10 – 100 minute session",
    price: "$85.00",
  },
];

export default function TreatmentPricingSection() {
  return (
    <section className="relative bg-white">
      {/* ---------- Top hero image that overlaps the section ---------- */}
      <div className="relative -mb-24 z-10">
        <Image
          src="/images/spa-hero.webp"
          alt="Spa Treatment"
          width={1920}
          height={960}
          priority
          className="w-full h-[32vh] md:h-[55vh] object-cover"
        />
      </div>

      {/* ---------- Main paper/card with rounded top & optional wave ---------- */}
      <div className="relative z-20 bg-[#fcf8f5] max-w-7xl mx-auto shadow-[0_-6px_30px_rgba(0,0,0,0.05)]">
        {/* Optional Wave Divider */}
        <div className="absolute w-full fill-bg-wave -top-20 dark:fill-gray-800">
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="w-full h-[80px]"
            style={{ filter: "drop-shadow(0px -4px 8px rgba(0,0,0,0.15))" }}
          >
            <path
              d="M0,40 C480,140 960,-60 1440,40 L1440,120 L0,120 Z"
              className="fill-yellow-600"
            />
          </svg>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex flex-col items-center mb-3">
            <Image
              src="/images/logo4.webp"
              width={40}
              height={40}
              alt="Logo"
              className="w-20 h-20 mb-1"
            />
            <p className="uppercase text-yellow-700 text-xs tracking-[0.2em]">
              Price
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Spa Treatments With Pricing
          </h2>
        </div>

        {/* Grid */}
        <div className="max-w-6xl mx-auto px-2 md:px-4 flex flex-col md:flex-row justify-center items-start gap-8">
          <div className="w-full md:w-1/2 space-y-4">
            {leftTreatments.map((item, idx) => (
              <TreatmentCard key={idx} {...item} />
            ))}
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            {rightTreatments.map((item, idx) => (
              <TreatmentCard key={idx} {...item} />
            ))}
          </div>
        </div>

        {/* Decorative borders */}
        <Image
          src="/images/spa-pricing-section/spa-pricing-bg.webp"
          alt="decor left"
          width={480} // ← set to your image’s real width
          height={240} // ← set to your image’s real height
          className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-60 w-auto"
        />
        {/* Add right-side decor if you have it */}
        {/* <Image src="/images/your-right-decor.webp" alt="decor right" width={480} height={240} className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-60 w-auto" /> */}
      </div>
    </section>
  );
}
