"use client";
import { MdEmail, MdOutlineShareLocation } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const AboutUs = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contactmessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setResponseMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponseMessage(data.error || "Something went wrong.");
      }
    } catch {
      setResponseMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="w-full bg-white">
      <div
        className="container max-w-7xl px-4 mx-auto py-16"
        data-aos="fade-up"
      >
        <div className="bg-white shadow-xl px-7 md:px-10 lg:px-14 2xl:px-20 py-10 md:py-14 lg:py-18 xl:py-20 2xl:py-[100px]">
          <div className="flex items-start flex-col md:flex-row gap-10">
            {/* Left: About content */}
            <div className="flex-1">
              <h2 className="text-[22px] sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-[38px] leading-tight text-blue-950 font-semibold my-3 md:my-5">
                About Us
              </h2>
              <p className="text-base leading-7 text-gray-700 mb-5">
                Welcome to JATLink Labs – your trusted partner in creating
                impactful, user-friendly, and innovative websites. We specialize
                in crafting custom web solutions that help businesses thrive in
                the digital age.
              </p>

              <h2 className="text-[22px] sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-[38px] leading-tight text-blue-950 font-semibold my-3 md:my-5">
                Who We Are
              </h2>
              <p className="text-base leading-7 text-gray-700 mb-5">
                At JATLink Labs, we’re a passionate team of web developers,
                designers, and strategists committed to delivering exceptional
                digital experiences. With a focus on both functionality and
                aesthetics, we create websites that not only look great but also
                drive results. Our expertise spans frontend and backend
                development, ensuring your website is robust, responsive, and
                tailored to your unique needs.
              </p>

              <h2 className="text-[22px] sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-[38px] leading-tight text-blue-950 font-semibold my-3 md:my-5">
                Our Mission
              </h2>
              <p className="text-base leading-7 text-gray-700 mb-5">
                Our mission is simple: to empower businesses of all sizes with
                websites that are more than just online spaces—they’re tools for
                growth. We believe that a well-designed website is the
                foundation of a strong digital presence, and we’re here to make
                that foundation solid for you.
              </p>

              <h2 className="text-[22px] sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-[38px] leading-tight text-blue-950 font-semibold my-3 md:my-5">
                Why Choose Us?
              </h2>
              <ul className="list-disc list-outside pl-5 text-gray-700 space-y-2">
                <li>
                  <span className="font-semibold text-orange-500">
                    Tailored Solutions:
                  </span>{" "}
                  We don’t believe in one-size-fits-all. Every project is
                  customized to meet your specific needs.
                </li>
                <li>
                  <span className="font-semibold text-orange-500">
                    Technical Expertise:
                  </span>{" "}
                  With a strong grasp of the latest technologies and trends, we
                  bring cutting-edge solutions to every project.
                </li>
                <li>
                  <span className="font-semibold text-orange-500">
                    Collaborative Approach:
                  </span>{" "}
                  Your input matters to us. We work closely with you to bring
                  your vision to life.
                </li>
                <li>
                  <span className="font-semibold text-orange-500">
                    Customer-Focused:
                  </span>{" "}
                  Your satisfaction is our priority. We’re dedicated to
                  delivering not just websites, but results.
                </li>
              </ul>

              {/* Contact items */}
              <div className="mt-8 space-y-6">
                {/* call */}
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-blue-950 group-hover:bg-orange-500 grid place-items-center rounded-full transition">
                    <IoIosCall size={22} className="text-white" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">Call Us Now</p>
                    <p className="text-lg font-semibold text-blue-950">
                      725-287-7980
                    </p>
                  </div>
                </div>

                <hr className="border-t border-gray-200" />

                {/* email */}
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-blue-950 group-hover:bg-orange-500 grid place-items-center rounded-full transition">
                    <MdEmail size={22} className="text-white" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">Send Email</p>
                    <p className="text-lg font-semibold text-blue-950">
                      support@jatlink.com
                    </p>
                  </div>
                </div>

                <hr className="border-t border-gray-200" />

                {/* location */}
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-blue-950 group-hover:bg-orange-500 grid place-items-center rounded-full transition">
                    <MdOutlineShareLocation size={22} className="text-white" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">Our Location</p>
                    <p className="text-lg font-semibold text-blue-950">
                      9621 Monarch Grove St. Las Vegas, Nevada 89139
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: contact form + balancing content */}
            <div className="flex-1">
              {/* Form card */}
              <div className="bg-blue-950 p-[30px] lg:p-[45px] 2xl:p-[61px] rounded-lg shadow-lg text-white">
                <h2 className="text-[22px] sm:text-2xl md:text-[28px] leading-tight font-semibold text-center">
                  GET IN TOUCH
                </h2>
                <div className="grid grid-cols-1 gap-3 mt-8">
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full h-12 px-4 border border-gray-300 text-gray-900 rounded bg-white focus:border-orange-500 focus:ring-orange-500"
                    />
                    <input
                      type="email"
                      className="w-full h-12 px-4 border border-gray-300 text-gray-900 rounded bg-white mt-4 focus:border-orange-500 focus:ring-orange-500"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter E-mail"
                    />
                    <textarea
                      className="w-full min-h-40 px-4 py-2 border border-gray-300 text-gray-900 rounded bg-white mt-4 focus:border-orange-500 focus:ring-orange-500"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Enter Message"
                    />
                    <button
                      type="submit"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white text-center h-12 mt-5 rounded font-semibold transition"
                    >
                      SEND MESSAGE
                    </button>
                  </form>
                  {responseMessage && (
                    <p className="text-orange-400 text-right pt-5">
                      {responseMessage}
                    </p>
                  )}
                </div>
              </div>

              {/* NEW: balancing content under the form */}
              <div className="mt-6 rounded-lg border border-blue-100 bg-white p-6 shadow-sm">
                <h3 className="text-blue-950 text-xl font-semibold">
                  Quick Facts
                </h3>
                <p className="mt-2 text-gray-700">
                  We build performant, scalable SPAs with a focus on real
                  business outcomes.
                </p>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  <Stat k="100+" v="Projects Delivered" />
                  <Stat k="4.9★" v="Client Rating" />
                  <Stat k="< 24h" v="Avg. First Response" />
                  <Stat k="99.9%" v="Hosted Uptime" />
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {["Next.js", "React", "TypeScript", "Node.js", "Stripe"].map(
                    (t) => (
                      <span
                        key={t}
                        className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                      >
                        {t}
                      </span>
                    )
                  )}
                </div>

                <p className="mt-5 text-sm text-gray-600">
                  Need a custom engagement or NDA?{" "}
                  <span className="font-semibold text-orange-500">
                    We’re happy to accommodate.
                  </span>
                </p>
              </div>
            </div>
            {/* /Right */}
          </div>
        </div>
      </div>
    </div>
  );
};

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-md border border-gray-200 p-4">
      <div className="text-2xl font-bold text-blue-950">{k}</div>
      <div className="mt-1 text-sm text-gray-600">{v}</div>
    </div>
  );
}

export default AboutUs;
