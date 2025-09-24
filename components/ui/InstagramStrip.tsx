"use client";

import React from "react";
import Image from "next/image";

type InstaItem = {
  /** Image URL */
  src: string;
  /** Link to open when tapped/clicked (Instagram post/profile) */
  href?: string;
  /** Accessible alt text */
  alt?: string;
};

interface InstagramStripProps {
  title?: string;
  items: InstaItem[]; // supply 6 items for best layout
  /** Optional decorative images shown left & right of the strip */
  leftDecorSrc?: string;
  rightDecorSrc?: string;
  /** Tailwind max-width container (defaults to 1280px) */
  maxWidthClass?: string;
}

/**
 * InstagramStrip – a responsive component that matches the provided design:
 *  • Centered title with hairlines on both sides
 *  • Six rounded-square thumbnails with subtle hover overlay + Instagram glyph
 *  • Optional floral decorations on the left and right
 */
export default function InstagramStrip({
  title = "Follow On Instagram",
  items,
  leftDecorSrc,
  rightDecorSrc,
  maxWidthClass = "max-w-[1280px]",
}: InstagramStripProps) {
  // Ensure we only render up to 6 items to preserve layout symmetry
  const pics = items.slice(0, 6);

  return (
    <section className="relative w-full py-10 sm:py-14">
      {/* Decorative side images */}
      {leftDecorSrc && (
        <Image
          src={leftDecorSrc}
          alt="Decoration"
          width={160} // intrinsic; rendered size still controlled by Tailwind classes
          height={160}
          className="pointer-events-none hidden md:block absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 w-32 lg:w-40 select-none"
        />
      )}
      {rightDecorSrc && (
        <Image
          src={rightDecorSrc}
          alt="Decoration"
          width={160}
          height={160}
          className="pointer-events-none hidden md:block absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 w-32 lg:w-40 select-none"
        />
      )}

      <div className={`${maxWidthClass} mx-auto px-4`}>
        {/* Title with hairlines */}
        <div className="flex items-center gap-4 md:gap-8">
          <div className="h-px bg-gray-300 flex-1" />
          <h2 className="font-serif text-xl sm:text-2xl tracking-wide text-gray-900 dark:text-gray-100 whitespace-nowrap">
            {title}
          </h2>
          <div className="h-px bg-gray-300 flex-1" />
        </div>

        {/* Grid of thumbnails */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-5 md:gap-6 place-items-center">
          {pics.map((item, idx) => {
            const Tile = (
              <div className="group relative aspect-square w-32 sm:w-36 md:w-40 lg:w-44 rounded-xl overflow-hidden shadow-sm ring-1 ring-black/5 hover:shadow-md transition-shadow">
                <Image
                  src={item.src}
                  alt={item.alt ?? "Instagram image"}
                  fill
                  sizes="(min-width:1024px) 11rem, (min-width:768px) 10rem, (min-width:640px) 9rem, 8rem"
                  className="object-cover"
                  draggable={false}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-200" />
                {/* Instagram glyph (visible on hover, subtle otherwise) */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <InstagramGlyph className="h-9 w-9 drop-shadow" />
                </div>
              </div>
            );

            return item.href ? (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {Tile}
              </a>
            ) : (
              <div key={idx}>{Tile}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function InstagramGlyph({ className = "" }: { className?: string }) {
  // Minimal Instagram logo (rounded square + circle + lens)
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2.5"
        y="2.5"
        width="19"
        height="19"
        rx="5"
        stroke="white"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="4.2" stroke="white" strokeWidth="1.8" />
      <circle cx="17.3" cy="6.7" r="1.4" fill="white" />
    </svg>
  );
}
