// components/HeroSpa.tsx
"use client";
import { MouseEventHandler } from "react";

interface HeroSpaProps {
  title?: string;
  ctaLabel?: string;
  onCtaClick?: MouseEventHandler<HTMLButtonElement>;
  watchLabel?: string;
  onWatchClick?: MouseEventHandler<HTMLButtonElement>;
  bgImage?: string; // e.g. "/images/hero-spa.jpg"
}

export default function HeroSpa({
  title = "Book & feel our Incredible Spa Experience",
  ctaLabel = "Make Appointment",
  onCtaClick,
  watchLabel = "Watch Now",
  onWatchClick,
  bgImage = "/images/hero-spa.jpg",
}: HeroSpaProps) {
  return (
    <section
      className="relative isolate overflow-hidden"
      aria-label="Hero"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* soft background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      {/* subtle wash to keep text readable */}
      <div className="absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8">
          {/* Left: headline + CTA */}
          <div className="md:col-span-7">
            <h1 className="font-serif text-4xl leading-tight text-gray-900 sm:text-5xl md:text-6xl">
              {title}
            </h1>

            <button
              onClick={onCtaClick}
              className="mt-8 inline-flex items-center rounded-md bg-amber-600 px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-sm hover:bg-amber-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2"
            >
              {ctaLabel.toUpperCase()}
            </button>
          </div>

          {/* Right: Watch Now + play button */}
          <div className="md:col-span-5 flex md:justify-end">
            <div className="flex items-center gap-4 md:gap-6">
              <div className="text-gray-800">
                <div className="text-xl md:text-2xl font-serif">
                  {watchLabel}
                </div>
                {/* little squiggle/arrow */}
                <svg
                  viewBox="0 0 120 40"
                  className="mt-2 h-6 w-24 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden
                >
                  <path d="M3 22c24-8 40-8 64 0 11 4 22 9 50 7M94 25l7 5-6 5" />
                </svg>
              </div>

              <button
                onClick={onWatchClick}
                aria-label="Play video"
                className="relative inline-grid place-items-center h-16 w-16 rounded-full bg-amber-600 text-white shadow-sm hover:bg-amber-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600"
              >
                {/* dashed ring */}
                <span
                  className="absolute inset-0 rounded-full border-2 border-dashed border-amber-700/60"
                  aria-hidden
                />
                {/* play icon */}
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 fill-current"
                  aria-hidden
                >
                  <path d="M8 5v14l11-7-11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* bottom decorative strip suggestion (optional):
            Place a subtle gradient to mimic the towel edge in your mock */}
        <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-16 bg-gradient-to-t from-white/70 to-transparent" />
      </div>
    </section>
  );
}
