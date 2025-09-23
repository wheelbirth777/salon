// components/sections/ServicesDentist.tsx
"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Service = {
  id: string;
  title: string;
  blurb: string;
  imageSrc: string;
  href?: string;
  icon?: React.ReactNode; // optional line icon for the floating card
  category: string; // used by bottom chips
};

type Props = {
  eyebrow?: string;
  heading?: string;
  services?: Service[]; // top big tiles
  chips?: string[]; // bottom chip list (categories)
  activeChip?: string; // initial active filter
};

export default function OurServices({
  eyebrow = "Services We Provide",
  heading = "Popular Dental Services",
  services = DEMO_SERVICES,
  chips = DEMO_CHIPS,
  activeChip,
}: Props) {
  const [chip, setChip] = useState<string>(activeChip ?? chips[0]);

  const filtered = useMemo(
    () => services.filter((s) => (chip === "All" ? true : s.category === chip)),
    [services, chip]
  );

  return (
    <section className="relative overflow-hidden bg-[#F4F9FC]">
      {/* giant ghost heading in the back like the reference */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-6 -z-10 -translate-x-1/2 select-none text-[12vw] font-extrabold leading-none tracking-tighter text-slate-900/5"
      >
        Services
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14 sm:py-18">
        {/* header */}
        <div className="text-center">
          <div className="text-sm font-semibold text-rose-500">{eyebrow}</div>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {heading}
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded bg-emerald-400" />
        </div>

        {/* big image tiles */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {filtered.slice(0, 3).map((s) => (
            <article
              key={s.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5"
            >
              {/* image */}
              <div className="relative h-72 w-full">
                <Image
                  src={s.imageSrc}
                  alt={s.title}
                  fill
                  sizes="(min-width:1024px) 33vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  priority={false}
                />
              </div>

              {/* floating card */}
              <div className="absolute right-5 top-5 w-[78%] max-w-sm rounded-xl bg-white p-5 shadow-lg ring-1 ring-black/5">
                <div className="flex items-start gap-3">
                  {/* icon or fallback */}
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-rose-50 text-rose-500 ring-1 ring-rose-100">
                    {s.icon ?? <ToothIcon className="h-5 w-5" />}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-[13px] leading-5 text-slate-600">
                      {s.blurb}
                    </p>
                    <a
                      href={s.href ?? "#"}
                      className="mt-3 inline-flex items-center text-[13px] font-semibold text-emerald-600 hover:text-emerald-700"
                    >
                      Read More
                      <span className="ml-1">»</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* chips row */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {chips.map((c) => {
            const active = c === chip;
            return (
              <button
                key={c}
                onClick={() => setChip(c)}
                className={[
                  "flex items-center gap-3 rounded-2xl p-5 text-left transition shadow-sm ring-1",
                  active
                    ? "bg-emerald-500 text-white ring-emerald-400 shadow-emerald-500/20"
                    : "bg-white text-slate-800 ring-black/5 hover:bg-slate-50",
                ].join(" ")}
                aria-pressed={active}
              >
                <span
                  className={[
                    "grid h-9 w-9 place-items-center rounded-lg ring-1",
                    active
                      ? "bg-white/10 text-white ring-white/30"
                      : "bg-emerald-50 text-emerald-600 ring-emerald-200",
                  ].join(" ")}
                  aria-hidden
                >
                  <ToothIcon className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold">{c}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------- icons -------------- */
function ToothIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M7.5 3.5C5.6 3.5 4 5 4 6.9c0 1.6.7 3.1 1.8 4.2.7.7 1.1 1.7 1.1 2.7 0 2.5.8 6 2.1 6.3 1.2.3 1.7-1.8 2.6-3.8.3-.6 1.2-.6 1.4 0 .9 2 1.4 4.1 2.6 3.8 1.3-.3 2.1-3.8 2.1-6.3 0-1 .4-2 1.1-2.7C19.3 10 20 8.5 20 6.9 20 5 18.4 3.5 16.5 3.5c-1.5 0-3 .7-4.5 2-1.5-1.3-3-2-4.5-2z" />
    </svg>
  );
}

/* -------------- demo data -------------- */
const DEMO_CHIPS = [
  "Pediatric Dentistry",
  "Oral Surgery",
  "Root Canals",
  "Dental Floss",
  "Dental Implants",
  "Cosmetic Dentistry",
  "All",
];

const DEMO_SERVICES: Service[] = [
  {
    id: "general",
    title: "General Dentistry",
    blurb: "Sit consectetur adipiscin elit sed do eiusmod tempor",
    imageSrc: "/images/services/general.jpg",
    href: "/services/general-dentistry",
    category: "Pediatric Dentistry",
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    blurb: "Sit consectetur adipiscin elit sed do eiusmod tempor",
    imageSrc: "/images/services/cosmetic.jpg",
    href: "/services/cosmetic-dentistry",
    category: "Cosmetic Dentistry",
  },
  {
    id: "implants",
    title: "Dental Implants",
    blurb: "Sit consectetur adipiscin elit sed do eiusmod tempor",
    imageSrc: "/images/services/implants.jpg",
    href: "/services/dental-implants",
    category: "Dental Implants",
  },
  // Add more items; chips filter will show top 3 of the active category
];
