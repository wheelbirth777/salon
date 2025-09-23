// app/templates/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type Template = {
  id: string;
  title: string;
  category: string;
  img: string;
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
    blurb: "Modern spa bookings, services menu, stylist profiles.",
    tags: ["Next.js", "Stripe", "Bookings"],
    demoHref: "/demos/salon",
    detailsHref: "/templates/salon",
  },
  {
    id: "lawyer",
    title: "Law Firm",
    category: "Lawyer",
    img: "/images/templates/lawyer.jpg",
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
    blurb: "Appointment scheduling, insurance info, reviews.",
    tags: ["Next.js", "Calendars", "CMS"],
    demoHref: "/demos/dentist",
    detailsHref: "/templates/dentist",
  },
  {
    id: "ac",
    title: "AC Repair",
    category: "AC Repair",
    img: "/images/templates/ac.jpg",
    blurb: "Service areas, emergency calls, quote requests.",
    tags: ["Next.js", "Lead Forms", "Maps"],
    demoHref: "/demos/ac",
    detailsHref: "/templates/ac",
  },
  // add more…
];

const CATEGORIES = ["All", "Salon", "Lawyer", "Dentist", "AC Repair"];

export default function TemplatesPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");

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
        <div className="mx-auto max-w-6xl px-6 pt-24 pb-16 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Ready-made templates for any niche
            </h1>
            <p className="mt-4 text-slate-300">
              Launch faster with polished, scalable starters built on Next.js.
            </p>
          </div>

          {/* Controls (styled like pricing toggle) */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="inline-flex flex-wrap gap-2 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur">
              {CATEGORIES.map((c) => {
                const active = cat === c;
                return (
                  <button
                    key={c}
                    onClick={() => setCat(c)}
                    className={[
                      "rounded-full px-4 py-1.5 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                      active
                        ? "bg-blue-600 text-white shadow hover:bg-blue-500"
                        : "text-white/80 hover:text-white",
                    ].join(" ")}
                  >
                    {c}
                  </button>
                );
              })}
            </div>

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

      {/* Grid */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        {filtered.length === 0 ? (
          <p className="text-slate-300">No templates found.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((t) => (
              <TemplateCard key={t.id} t={t} />
            ))}
          </div>
        )}
      </section>

      {/* CTA (styled like pricing CTA footer card) */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 pb-24">
          <div className="flex flex-col items-center justify-between gap-6 rounded-lg border border-white/10 bg-gradient-to-r from-blue-600 to-blue-500 p-6 shadow-lg md:flex-row">
            <div>
              <h3 className="text-2xl font-semibold">Want a custom build?</h3>
              <p className="text-blue-100">
                We can tailor any template to your brand.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/contactus"
                className="rounded-full border border-white/70 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/60"
              >
                Talk to us
              </Link>
              <Link
                href="/projects"
                className="rounded-full bg-white px-5 py-2.5 font-semibold text-blue-700 transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white"
              >
                See more work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- Card (medium roundness) ---------- */
function TemplateCard({ t }: { t: Template }) {
  return (
    <div className="group rounded-lg border border-white/10 bg-white/5 p-0 backdrop-blur transition hover:border-white/20">
      {/* Screenshot */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-t-lg">
        <Image
          src={t.img}
          alt={t.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold">{t.title}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-slate-300">{t.blurb}</p>

        {/* Tags */}
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

        {/* Actions */}
        <div className="mt-4 flex items-center gap-2">
          <Link
            href={t.demoHref}
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-3.5 py-2 text-sm font-semibold text-white shadow transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            View Demo
          </Link>
          <Link
            href={t.detailsHref}
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-3.5 py-2 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
