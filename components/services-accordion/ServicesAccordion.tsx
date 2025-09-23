// components/ServicesAccordionDark.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

type Service = {
  id: number;
  title: string;
  summary: string;
  image?: string; // used when open
  tag?: string; // small orange subheading
  category: string; // matches one of the pills
};

interface Props {
  categories?: string[];
  items?: Service[];
  initialCategory?: string;
}

export default function ServicesAccordionDark({
  categories = [
    "All Service",
    "Coding",
    "Digital Marketing",
    "Design",
    "Development",
  ],
  items = DEMO_ITEMS,
  initialCategory = "All Service",
}: Props) {
  const [activeCat, setActiveCat] = useState(initialCategory);
  const [open, setOpen] = useState<number>(items[0].id);

  const filtered =
    activeCat === "All Service"
      ? items
      : items.filter((i) => i.category === activeCat);

  return (
    <section className="relative overflow-hidden bg-[#121214] py-10 text-white sm:py-14">
      {/* soft glow decor (optional) */}
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="mx-auto max-w-4xl px-5">
        {/* Category pills */}
        <div className="flex flex-wrap gap-3">
          {categories.map((c) => {
            const active = activeCat === c;
            return (
              <button
                key={c}
                onClick={() => setActiveCat(c)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  active
                    ? "bg-gradient-to-r from-amber-400 to-pink-400 text-black font-semibold"
                    : "bg-white/10 text-white/80 ring-1 ring-white/10 hover:bg-white/15"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* List */}
        <ul className="mt-8 divide-y divide-white/10">
          {filtered.map((s, idx) => {
            const isOpen = open === s.id;
            return (
              <li key={s.id} className="py-6">
                {/* Header row */}
                <button
                  onClick={() => setOpen((p) => (p === s.id ? -1 : s.id))}
                  className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 text-left"
                >
                  <span className="w-10 text-sm tracking-widest text-white/60">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xl font-semibold">{s.title}</span>
                  <span className="grid h-10 w-10 place-items-center rounded-full border-2 border-amber-400/70 bg-white/0 text-white transition md:h-12 md:w-12">
                    <Arrow45
                      className={`${
                        isOpen ? "rotate-45" : ""
                      } h-4 w-4 text-amber-300`}
                    />
                  </span>
                </button>

                {/* Expanded content */}
                <div
                  className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="mt-5 grid min-h-0 grid-cols-1 items-center gap-6 overflow-hidden rounded-[28px] border border-amber-400/40 bg-white/5 p-4 md:grid-cols-[min(380px,100%)_1fr_auto]">
                    {/* image */}
                    <div className="overflow-hidden rounded-[28px] ring-1 ring-amber-400/40">
                      <div className="relative h-40 w-full md:h-44">
                        <Image
                          src={s.image ?? "/images/services/preview.jpg"}
                          alt={s.title}
                          fill
                          className="object-cover"
                          sizes="(min-width:768px) 380px, 100vw"
                          priority={false}
                        />
                      </div>
                    </div>

                    {/* copy */}
                    <div>
                      {s.tag && (
                        <div className="text-[12px] font-semibold tracking-widest text-amber-300">
                          {s.tag}
                        </div>
                      )}
                      <p className="mt-2 text-sm leading-6 text-white/80">
                        {s.summary}
                      </p>
                    </div>

                    {/* CTA icon circle */}
                    <a
                      href="#"
                      className="mx-auto grid h-12 w-12 place-items-center rounded-full border-2 border-amber-400/70"
                    >
                      <Arrow45 className="h-4 w-4 text-amber-300" />
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        {/* bottom hairline like mock */}
        <div className="mt-6 h-px w-full bg-white/10" />
      </div>
    </section>
  );
}

/* ---------------- icons ---------------- */
function Arrow45(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}

/* ---------------- demo data ---------------- */
const DEMO_ITEMS: Service[] = [
  {
    id: 1,
    title: "Ui/UX Design",
    tag: "SHARING SOME UNIQUE CREATIONS",
    summary:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.",
    image: "/images/services/uiux.jpg",
    category: "Design",
  },
  {
    id: 2,
    title: "Graphic Design",
    summary:
      "Concise graphic systems for brand & marketing needs across digital and print.",
    category: "Design",
  },
  {
    id: 3,
    title: "Animation Design",
    summary:
      "Motion graphics, micro-interactions, and product explainers for web & app.",
    category: "Design",
  },
  {
    id: 4,
    title: "Front-End Dev",
    summary:
      "Modern React/Next builds with performance budgets and a11y baked in.",
    category: "Development",
  },
  {
    id: 5,
    title: "Advertisement",
    summary:
      "Campaign assets optimized for paid social and display ecosystems.",
    category: "Digital Marketing",
  },
  {
    id: 6,
    title: "Marketing Strategy",
    summary: "Positioning, ICP mapping, and multi-channel GTM roadmaps.",
    category: "Digital Marketing",
  },
  {
    id: 7,
    title: "Email Marketing",
    summary: "Lifecycle flows, deliverability tuning, and modular templates.",
    category: "Digital Marketing",
  },
];
