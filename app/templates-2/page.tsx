// app/templates/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, useEffect, type ReactNode } from "react";

type Template = {
  id: string;
  title: string;
  category: string;
  img: string;
  imgLarge?: string;
  blurb: string;
  tags: string[];
  demoHref: string;
  detailsHref: string;
};

const ALL_TEMPLATES: Template[] = [
  {
    id: "salon",
    title: "Salon & Spa",
    category: "Salon",
    img: "/images/templates/salon.jpg",
    imgLarge: "/images/templates/salon-large.jpg",
    blurb: "Modern bookings, services, stylist profiles.",
    tags: ["Next.js", "Stripe", "Bookings"],
    demoHref: "/demos/salon",
    detailsHref: "/templates/salon",
  },
  {
    id: "lawyer",
    title: "Law Firm",
    category: "Lawyer",
    img: "/images/templates/lawyer.jpg",
    imgLarge: "/images/templates/lawyer-large.jpg",
    blurb: "Practice areas, attorney bios, consultations.",
    tags: ["Next.js", "SEO", "Intake Forms"],
    demoHref: "/demos/lawyer",
    detailsHref: "/templates/lawyer",
  },
  {
    id: "dentist",
    title: "Dental Clinic",
    category: "Dentist",
    img: "/images/templates/dentist.jpg",
    imgLarge: "/images/templates/dentist-large.jpg",
    blurb: "Appointments, insurance info, reviews.",
    tags: ["Next.js", "Calendars", "CMS"],
    demoHref: "/demos/dentist",
    detailsHref: "/templates/dentist",
  },
  {
    id: "ac",
    title: "AC Repair",
    category: "AC Repair",
    img: "/images/templates/ac.jpg",
    imgLarge: "/images/templates/ac-large.jpg",
    blurb: "Service areas, emergency calls, quotes.",
    tags: ["Next.js", "Lead Forms", "Maps"],
    demoHref: "/demos/ac",
    detailsHref: "/templates/ac",
  },
];

const CATEGORIES = ["All", "Salon", "Lawyer", "Dentist", "AC Repair"];

export default function TemplatesPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");
  const [active, setActive] = useState<Template | null>(null);

  const filtered = useMemo(() => {
    let items = [...ALL_TEMPLATES];
    if (cat !== "All") items = items.filter((t) => t.category === cat);
    if (query.trim()) {
      const q = query.toLowerCase();
      items = items.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.blurb.toLowerCase().includes(q) ||
          t.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    }
    return items;
  }, [cat, query]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white">
      {/* Hero (matches pricing) */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.25),transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Template Gallery
            </h1>
            <p className="mt-4 text-slate-300">
              Scan the visuals quickly, then jump into a live demo.
            </p>
          </div>

          {/* Controls */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            {/* Category pills */}
            <div className="inline-flex flex-wrap gap-2 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={[
                    "rounded-full px-4 py-1.5 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                    cat === c
                      ? "bg-blue-600 text-white shadow hover:bg-blue-500"
                      : "text-white/80 hover:text-white",
                  ].join(" ")}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="sm:ml-auto">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search templates…"
                className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-slate-400 outline-none backdrop-blur focus:border-blue-400 focus:ring-2 focus:ring-blue-400 sm:w-72"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grid of image cards */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((t) => (
            <TemplateCard key={t.id} t={t} onOpen={() => setActive(t)} />
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {active && (
        <Modal onClose={() => setActive(null)}>
          <div className="relative w-[min(92vw,1100px)]">
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-white/10 bg-white/5">
              <Image
                src={active.imgLarge || active.img}
                alt={active.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold">{active.title}</h3>
                <p className="text-sm text-slate-300">{active.blurb}</p>
              </div>
              <div className="flex gap-2">
                <Link
                  href={active.demoHref}
                  className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  View Live Demo
                </Link>
                <Link
                  href={active.detailsHref}
                  className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </main>
  );
}

/* ---------- Card (image + hover overlay) ---------- */
function TemplateCard({ t, onOpen }: { t: Template; onOpen: () => void }) {
  return (
    <div className="group rounded-lg border border-white/10 bg-white/5 backdrop-blur transition hover:border-white/20">
      {/* Image area */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-t-lg">
        <Image
          src={t.img}
          alt={t.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
        {/* Hover overlay */}
        <div className="pointer-events-none absolute inset-0 bg-black/0 transition group-hover:bg-black/30" />
        <div className="absolute inset-x-0 bottom-0 translate-y-3 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
          <div className="m-3 flex gap-2">
            <button
              onClick={onOpen}
              className="rounded-full bg-blue-600 px-3.5 py-2 text-sm font-semibold text-white shadow transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Preview image
            </button>
            <Link
              href={t.demoHref}
              className="rounded-full border border-white/30 px-3.5 py-2 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              Live demo
            </Link>
          </div>
        </div>
      </div>

      {/* Meta */}
      <div className="p-5">
        <h3 className="text-lg font-semibold">{t.title}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-slate-300">{t.blurb}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {t.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2">
          <Link
            href={t.detailsHref}
            className="rounded-full bg-white/10 px-3.5 py-2 text-sm font-semibold text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            Details
          </Link>
          <Link
            href={t.demoHref}
            className="rounded-full bg-blue-600 px-3.5 py-2 text-sm font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            View demo
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ---------- Modal (lightbox) ---------- */
function Modal({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: () => void;
}) {
  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="rounded-lg border border-white/10 bg-slate-900 p-4 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-full border border-white/30 px-4 py-2 text-sm text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
