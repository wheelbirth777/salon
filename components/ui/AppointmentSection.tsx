// components/AppointmentSection.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

export default function AppointmentSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking logic here
    console.log("Booking submitted:", formData);
  };

  return (
    <section className="relative bg-black overflow-hidden">
      <div className="flex flex-col lg:flex-row items-stretch max-w-[1440px] mx-auto min-h-screen">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 h-full">
          <Image
            src="/images/appointment-image1.webp"
            alt="Spa Bowl"
            width={1600}
            height={1200}
            sizes="(min-width:1024px) 50vw, 100vw"
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Right Form */}
        <div className="w-full lg:w-1/2 bg-gray-700 text-white px-6 py-12 lg:py-20 lg:px-16 flex flex-col justify-center">
          <h4 className="text-yellow-200 font-light uppercase tracking-wider mb-2">
            Appointment
          </h4>
          <h2 className="text-3xl font-bold mb-4">Book Now</h2>
          <p className="text-gray-400 mb-8 font-extralight">
            1Proin efficitur, mauris vel condimentum pulvinar, velit orci
            consectetur ligula.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name *"
                value={formData.name}
                onChange={handleChange}
                className="bg-transparent border border-gray-600 px-4 py-2 text-white placeholder-gray-400"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleChange}
                className="bg-transparent border border-gray-600 px-4 py-2 text-white placeholder-gray-400"
                required
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="bg-transparent border border-gray-600 px-4 py-2 text-white"
                required
              >
                <option value="" disabled>
                  Select Service *
                </option>
                <option value="massage">Massage</option>
                <option value="facial">Facial</option>
                <option value="haircut">Haircut</option>
              </select>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="bg-transparent border border-gray-600 px-4 py-2 text-white"
                required
              />
            </div>

            <textarea
              name="message"
              placeholder="Write a Message"
              value={formData.message}
              onChange={handleChange}
              className="bg-transparent border border-gray-600 px-4 py-2 w-full text-white placeholder-gray-400"
              rows={4}
            ></textarea>

            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3 transition-colors"
            >
              BOOK NOW
            </button>
          </form>
        </div>
      </div>

      {/* Optional Wave Divider */}
      <div className="absolute -top-32 w-full fill-white dark:fill-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fillOpacity="1"
            d="M0,96L48,106.7C96,117,192,139,288,154.7C384,171,480,181,576,176C672,171,768,149,864,144C960,139,1056,149,1152,165.3C1248,181,1344,203,1392,213.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
