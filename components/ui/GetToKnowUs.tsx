"use client";

import Image from "next/image";
import Link from "next/link";

export default function GetToKnowUs() {
  return (
    <section className="relative py-20 bg-white dark:bg-gray-800 text-black dark:text-white overflow-hidden ">
      {/* Top-right leaf decoration */}
      <div className="absolute top-0 right-0 z-20">
        <Image
          src="/images/leaf-corner.webp"
          alt="Leaf decor"
          width={300}
          height={300}
          className="pointer-events-none select-none"
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-16 grid md:grid-cols-3 gap-10 items-center">
        {/* Left: Image Block */}
        <div className="relative flex justify-center items-center">
          {/* Wrapper for image + badge */}

          {/* White circular shadow behind image */}
          <div className="absolute inset-0 scale-110 rounded-full bg-white z-0"></div>

          <div className="relative w-full max-w-sm h-[420px]">
            {/* Experience Badge */}
            <div className="absolute -left-10 top-10 z-20 w-[100px] h-[100px] bg-[#bfa14b] text-white text-xs font-semibold rounded-full flex flex-col justify-center items-center text-center leading-tight shadow-lg">
              <span className="text-lg font-bold">20+</span>
              Experience
            </div>

            {/* Circular Image */}
            <div className="relative w-[420px] h-[420px] rounded-full overflow-hidden z-10">
              <Image
                src="/images/spa-face-mask.webp"
                alt="Spa facial"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Stone + Flower image */}
          <div className="absolute -bottom-10 -left-12 z-20 max-w-[320px]">
            <Image
              src="/images/stone-flower.webp"
              alt="Decorative stones"
              width={520}
              height={520}
            />
          </div>
        </div>

        {/* Center: Text Content */}
        <div>
          <p className="text-[#bfa14b] italic text-sm mb-2">Get to know us</p>
          <h2 className="text-4xl font-bold mb-4 leading-tight">
            Beauty and Spa Center
          </h2>
          <p className="text-gray-600 italic mb-4 font-medium">
            Proin efficitur, mauris vel condimentum pulvinar, velit orci
            consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec
            odio orci.
          </p>
          <ul className="text-gray-700 space-y-2 mb-6">
            <li className="flex items-start gap-2">
              <span className="text-[#bfa14b] font-bold text-lg">✔</span>
              Velit orci consectetur ligula, eget egestas magn
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#bfa14b] font-bold text-lg">✔</span>
              Pelit orci consectetur ligula
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#bfa14b] font-bold text-lg">✔</span>
              Eget egestas magn
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="bg-[#bfa14b] text-white px-6 py-3 rounded-sm text-sm font-semibold hover:bg-[#a98f3d] transition"
            >
              Learn More
            </Link>
            <div className="flex items-center gap-2">
              <Image
                src="/images/michale-founder.webp"
                alt="Michale"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p className="font-bold text-sm">Michale</p>
                <p className="text-xs text-gray-500">Michale - Co Founder</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Opening Hours */}
        <div className="relative bg-[#aa945a] text-white pt-8  rounded-sm shadow-md overflow-hidden z-10">
          <h3 className="text-xl font-semibold mb-6 text-center">
            Opening Hours
          </h3>
          <div className="text-center text-sm space-y-2 py-8 bg-[#bfa14b]">
            <div>
              <p>Monday to Friday :</p>
              <p className="text-lg font-bold">09:00 am – 06:00 pm</p>
            </div>
            <div className="mt-4">
              <p>Saturday :</p>
              <p className="text-lg font-bold">11:00 am to 3:00 pm</p>
            </div>
            <div className="mt-4">
              <p>Saturday :</p>
              <p className="text-lg font-bold">11:00 am to 3:00 pm</p>
            </div>
          </div>

          {/* Decorative leaf doodle */}
          <div className="absolute bottom-0 right-0 opacity-20">
            <Image
              src="/assets/images/leaves-doodle.svg"
              alt="Leaf doodle"
              width={150}
              height={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
