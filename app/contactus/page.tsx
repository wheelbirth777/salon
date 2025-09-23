"use client";
import { MdEmail, MdOutlineShareLocation } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactUs = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  // const [responseMessage, setResponseMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full bg-white">
      <div
        className="container max-w-7xl px-4 mx-auto py-16"
        data-aos="fade-up"
      >
        <div className="bg-white shadow-xl px-6 md:px-10 lg:px-14 py-10 md:py-16">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Contact Info */}
            <div className="flex-1">
              <p className="text-sm font-medium text-orange-400 uppercase">
                Contact Us
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-950 my-4">
                Get in Touch with Us
              </h2>
              <p className="text-gray-700 mb-4">
                Have questions or need help kickstarting your next web
                development project? Whether you’re looking to create a stunning
                website, optimize an existing one, or discuss innovative
                solutions, we’re just a message away.
              </p>
              <p className="text-gray-700 mb-6">
                Connect with us today and let’s explore how we can collaborate
                to achieve your digital goals. Your journey to a powerful online
                presence starts here!
              </p>

              {/* Call */}
              <div className="flex items-center mb-6 group">
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

              {/* Email */}
              <div className="flex items-center mb-6 group">
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

              {/* Location */}
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

            {/* Contact Form */}
            <div className="flex-1">
              <div className="bg-blue-950 text-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-center">
                  Get in Touch
                </h2>
                <form className="mt-6 space-y-4">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full h-12 px-4 border border-gray-300 text-gray-900 rounded focus:border-orange-500 focus:ring-orange-500"
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full h-12 px-4 border border-gray-300 text-gray-900 rounded focus:border-orange-500 focus:ring-orange-500"
                  />
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Enter Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-[120px] px-4 py-2 border border-gray-300 text-gray-900 rounded focus:border-orange-500 focus:ring-orange-500"
                  />
                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold h-12 rounded transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
