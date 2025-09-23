// components/sections/TestimonialsDentist.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role?: string;
  avatarSrc?: string;
  brandSrc?: string; // small logo near top of quote
};

type Props = {
  eyebrow?: string;
  heading?: string;
  items?: Testimonial[];
  imageSrc?: string; // left-side hero image (tooth + tools)
  autoRotateMs?: number; // set 0 to disable auto-rotate
};

export default function Testimonials({
  eyebrow = "Our Testimonials",
  heading = "What Patients Say About Caring",
  items = DEMO_ITEMS,
  imageSrc = "/images/testimonials/tooth-hero.png",
  autoRotateMs = 5000,
}: Props) {
  const [idx, setIdx] = useState(0);

  // auto-rotate
  useEffect(() => {
    if (!autoRotateMs) return;
    const t = setInterval(
      () => setIdx((i) => (i + 1) % items.length),
      autoRotateMs
    );
    return () => clearInterval(t);
  }, [items.length, autoRotateMs]);

  // simple keyboard support
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setIdx((i) => (i + 1) % items.length);
      if (e.key === "ArrowLeft")
        setIdx((i) => (i - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [items.length]);

  const curr = items[idx];

  return (
    <section className="relative overflow-hidden bg-[#0c1b24] text-white">
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-20%] top-10 h-[120vmin] w-[120vmin] rounded-full bg-gradient-to-br from-white/5 to-transparent blur-2xl" />
        <DottedHalo className="absolute left-0 bottom-10 opacity-20" />
        <GhostWord>Feedback</GhostWord>
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-12 md:py-24">
        {/* LEFT visual */}
        <div className="md:col-span-6">
          <div className="relative mx-auto aspect-[5/4] w-full max-w-[720px]">
            <Image
              src={imageSrc}
              alt="Dental tools and tooth"
              fill
              priority
              sizes="(min-width:1024px) 50vw, 100vw"
              className="object-contain drop-shadow-[0_30px_90px_rgba(0,0,0,0.45)]"
            />
          </div>
        </div>

        {/* RIGHT content */}
        <div className="relative md:col-span-6">
          <div className="text-sm font-semibold text-emerald-300">
            {eyebrow}
          </div>
          <h2 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl">
            {heading}
          </h2>
          <div className="mt-3 h-1 w-24 rounded bg-emerald-400" />

          {/* card */}
          <article className="mt-8 max-w-xl rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
            {/* top row: brand + quote glyph */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 opacity-90">
                {curr.brandSrc ? (
                  <Image
                    src={curr.brandSrc}
                    alt={`${curr.author} brand`}
                    width={110}
                    height={28}
                    className="h-7 w-auto object-contain"
                  />
                ) : (
                  <span className="text-sm font-semibold text-white/80">
                    Happy Patient
                  </span>
                )}
              </div>
              <QuoteIcon className="h-6 w-6 text-rose-400" />
            </div>

            <p className="mt-4 text-[15px] leading-7 text-white/85">
              {curr.quote}
            </p>

            {/* author */}
            <div className="mt-6 flex items-center gap-3">
              {curr.avatarSrc ? (
                <Image
                  src={curr.avatarSrc}
                  alt={curr.author}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-white/20"
                />
              ) : (
                <div className="grid h-10 w-10 place-items-center rounded-full bg-white/10 ring-2 ring-white/20">
                  <span className="text-xs">{curr.author[0]}</span>
                </div>
              )}
              <div>
                <div className="font-semibold">{curr.author}</div>
                {curr.role && (
                  <div className="text-xs text-white/70">{curr.role}</div>
                )}
              </div>
            </div>

            {/* dots */}
            <div className="mt-6 flex items-center gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIdx(i)}
                  className={[
                    "h-2.5 w-2.5 rounded-full transition",
                    i === idx
                      ? "bg-emerald-400"
                      : "bg-white/25 hover:bg-white/40",
                  ].join(" ")}
                />
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ----------------- accents ----------------- */
function GhostWord({ children }: { children: string }) {
  return (
    <div
      aria-hidden
      className="absolute right-0 top-6 -z-10 select-none text-[16vw] font-extrabold leading-none tracking-tighter text-white/5"
    >
      {children}
    </div>
  );
}

function DottedHalo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="420"
      height="420"
      viewBox="0 0 420 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {[80, 130, 180, 230, 280].map((r, i) => (
        <circle
          key={r}
          cx="210"
          cy="210"
          r={r}
          stroke="url(#g2)"
          strokeWidth="2"
          strokeDasharray="2 10"
          opacity={0.5 - i * 0.08}
        />
      ))}
      <defs>
        <radialGradient id="g2">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

/* ----------------- icons ----------------- */
function QuoteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M10 7h3v10h-6V9a2 2 0 012-2h1zm8 0h3v10h-6V9a2 2 0 012-2h1z" />
    </svg>
  );
}

/* ----------------- demo ----------------- */
const DEMO_ITEMS: Testimonial[] = [
  {
    id: "1",
    quote:
      "Exceptional care! Booking was easy and the hygienist explained everything clearly. My teeth have never felt better.",
    author: "James U. Robinson",
    role: "Web Designer",
    avatarSrc: "/images/testimonials/james.jpg",
    brandSrc: "/images/brands/duragas.svg",
  },
  {
    id: "2",
    quote:
      "I was nervous about implants, but the team walked me through each step. Zero pain and great follow-up.",
    author: "Amelia K.",
    role: "Project Manager",
    avatarSrc: "/images/testimonials/amelia.jpg",
    brandSrc: "/images/brands/shine.svg",
  },
  {
    id: "3",
    quote:
      "Fast whitening session during lunch—super convenient. The results were instant and dramatic.",
    author: "Marcus T.",
    role: "Sales Lead",
    avatarSrc: "/images/testimonials/marcus.jpg",
    brandSrc: "/images/brands/brilliant.svg",
  },
];
