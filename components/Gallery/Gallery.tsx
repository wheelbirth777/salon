// components/sections/GalleryDentist.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Photo = { src: string; alt?: string; aspect?: number }; // aspect (w/h) helps pre-size

type Props = {
  eyebrow?: string;
  heading?: string;
  photos?: Photo[]; // expect at least 5; 1 big + 4 small
};

export default function Gallery({
  eyebrow = "Photo Gallery",
  heading = "View Our Gallery Inside",
  photos = DEMO_PHOTOS,
}: Props) {
  // lightbox state
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const openAt = (i: number) => {
    setIdx(i);
    setOpen(true);
  };

  // keyboard controls
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") setIdx((i) => (i + 1) % photos.length);
      if (e.key === "ArrowLeft")
        setIdx((i) => (i - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, photos.length]);

  const lead = photos[0];
  const smalls = photos.slice(1, 5);

  return (
    <section className="relative overflow-hidden bg-white">
      {/* ghost word */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-6 -z-10 -translate-x-1/2 select-none text-[14vw] font-extrabold leading-none tracking-tighter text-slate-900/5"
      >
        Gallery
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        {/* header */}
        <div className="text-center">
          <div className="text-sm font-semibold text-rose-500">{eyebrow}</div>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {heading}
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded bg-emerald-400" />
        </div>

        {/* mosaic */}
        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-3">
          {/* big left image spans 2 rows */}
          <button
            onClick={() => openAt(0)}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-black/10 md:col-span-2 md:row-span-2"
            aria-label={`Open image: ${lead.alt ?? "gallery"}`}
          >
            <BlurImage photo={lead} />
            <HoverOverlay />
          </button>

          {/* four small squares */}
          {smalls.map((p, i) => (
            <button
              key={p.src}
              onClick={() => openAt(i + 1)}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-black/10"
              aria-label={`Open image: ${p.alt ?? "gallery"}`}
            >
              <BlurImage photo={p} />
              <HoverOverlay />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {open && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/80"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <figure className="absolute inset-0 grid place-items-center p-4">
            <div className="relative w-full max-w-5xl">
              <Image
                src={photos[idx].src}
                alt={photos[idx].alt ?? "Gallery image"}
                width={1600}
                height={900}
                className="h-auto w-full rounded-2xl object-contain shadow-2xl ring-1 ring-white/10"
                priority
              />
              {/* controls */}
              <div className="pointer-events-none absolute inset-x-0 top-2 flex items-center justify-between px-2">
                <button
                  onClick={() => setOpen(false)}
                  className="pointer-events-auto rounded-full bg-white/10 px-3 py-1.5 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/20"
                >
                  Close
                </button>
                <figcaption className="rounded-full bg-white/10 px-3 py-1 text-xs text-white ring-1 ring-white/20 backdrop-blur">
                  {photos[idx].alt ?? "Photo"}
                </figcaption>
              </div>

              <button
                onClick={() =>
                  setIdx((i) => (i - 1 + photos.length) % photos.length)
                }
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/20"
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                onClick={() => setIdx((i) => (i + 1) % photos.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/20"
                aria-label="Next image"
              >
                ›
              </button>
            </div>
          </figure>
        </div>
      )}
    </section>
  );
}

/* ---------- helpers ---------- */
function BlurImage({ photo }: { photo: Photo }) {
  // aspect not required; Image will handle it
  return (
    <Image
      src={photo.src}
      alt={photo.alt ?? ""}
      fill
      className="object-cover transition duration-500 group-hover:scale-[1.03]"
      sizes="(min-width:1024px) 33vw, 100vw"
      priority={false}
    />
  );
}

function HoverOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 grid place-items-center bg-black/0 transition group-hover:bg-black/20">
      <span className="grid h-12 w-12 place-items-center rounded-full bg-white/20 text-white ring-1 ring-white/30 backdrop-blur transition group-hover:scale-105">
        +
      </span>
    </div>
  );
}

/* ---------- demo data ---------- */
const DEMO_PHOTOS: Photo[] = [
  { src: "/images/gallery/1.jpg", alt: "Patient receiving cleaning" },
  { src: "/images/gallery/2.jpg", alt: "Technician crafting aligner" },
  { src: "/images/gallery/3.jpg", alt: "Child check-up" },
  { src: "/images/gallery/4.jpg", alt: "Child smiling during exam" },
  { src: "/images/gallery/5.jpg", alt: "Shade selection for veneers" },
];
