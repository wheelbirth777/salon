"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaPinterestP, FaVimeoV } from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer className="bg-[#1e1c1d] text-white pt-20 pb-10 relative">
      <div className="max-w-[1440px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Open Hours */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Open Hours</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              Monday to Friday:{" "}
              <span className="ml-2 text-white">09:00–20:00</span>
            </li>
            <li>
              Saturday: <span className="ml-2 text-white">09:00–18:00</span>
            </li>
            <li>
              Sunday: <span className="ml-2 text-white">09:00–18:00</span>
            </li>
          </ul>
        </div>

        {/* Logo & Social */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-yellow-600 text-3xl">&#9733;</span> Purerelax
          </h1>
          <p className="text-sm text-gray-400 my-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="flex gap-4 mt-2">
            <FaTwitter className="hover:text-yellow-500 cursor-pointer" />
            <FaFacebookF className="hover:text-yellow-500 cursor-pointer" />
            <FaPinterestP className="hover:text-yellow-500 cursor-pointer" />
            <FaVimeoV className="hover:text-yellow-500 cursor-pointer" />
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>2972 Westheimer Rd. Santa Ana,</li>
            <li>Illinois 85486</li>
            <li>(907) 555–0101</li>
            <li>curtis.weaver@example.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        <p>
          © 2024 Purerelax. All Rights Reserved |{" "}
          <Link href="#" className="text-white hover:underline">
            Terms & Conditions
          </Link>
        </p>
      </div>
    </footer>
  );
}
