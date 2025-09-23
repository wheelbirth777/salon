// components/ProjectsShowcase/ProjectsShowcase.tsx
"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

type Project = {
  id: string | number;
  title: string;
  tag: string; // must match one of the categories
  year: string;
  image: string;
  href?: string;
};

interface Props {
  heading?: string;
  subheading?: string;
  categories?: string[]; // your six categories; we'll inject "All" automatically
  projects?: Project[];
  viewAllHref?: string;
}

const DEFAULT_CATEGORIES = [
  "Salon & Spa",
  "Dental",
  "Lawyer",
  "Real Estate",
  "Architecture",
  "Fitness",
] as const;

const DEFAULT_PROJECTS: Project[] = [
  {
    id: 1,
    title: "Bella Glow — Online Booking",
    tag: "Salon & Spa",
    year: "2025",
    image: "/images/projects/p1.webp",
  },
  {
    id: 2,
    title: "SmileCare — Patient Portal",
    tag: "Dental",
    year: "2025",
    image: "/images/projects/p2.webp",
  },
  {
    id: 3,
    title: "Rivera Law — Intake & Docs",
    tag: "Lawyer",
    year: "2025",
    image: "/images/projects/p3.webp",
  },
  {
    id: 4,
    title: "Oakview Realty — Listings",
    tag: "Real Estate",
    year: "2025",
    image: "/images/projects/p4.webp",
  },
  {
    id: 5,
    title: "Linea Studio — Portfolio",
    tag: "Architecture",
    year: "2025",
    image: "/images/projects/p5.webp",
  },
  {
    id: 6,
    title: "FitPulse — Class Schedules",
    tag: "Fitness",
    year: "2025",
    image: "/images/projects/p6.webp",
  },
];

export default function ProjectsShowcase({
  heading = "Our Work in Action",
  subheading = "Our Projects feature WaaS (Website-as-a-Service) examples that solve real business problems across industries — fast, secure, mobile-friendly, and easy to maintain.",
  categories = [...DEFAULT_CATEGORIES],
  projects = DEFAULT_PROJECTS,
  viewAllHref = "#",
}: Props) {
  // Inject "All" as the first tab
  const tabs = useMemo(() => ["All", ...categories], [categories]);

  // Default active = "All"
  const [active, setActive] = useState<string>(tabs[0]);
  const listRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);

  // Keep active valid if categories prop changes
  useEffect(() => {
    if (!tabs.includes(active)) setActive(tabs[0]);
  }, [tabs, active]);

  // Filter projects (All shows everything)
  const filtered = useMemo(
    () =>
      active === "All" ? projects : projects.filter((p) => p.tag === active),
    [projects, active]
  );

  // Recompute paging & current page on size/scroll
  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const update = () => {
      const count = Math.max(1, Math.ceil(el.scrollWidth / el.clientWidth));
      setPageCount(count);
      setPage(Math.round(el.scrollLeft / el.clientWidth));
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, [filtered]);

  // Snap back to start when tab changes
  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    el.scrollTo({ left: 0, behavior: "instant" as ScrollBehavior });
    setPage(0);
  }, [active]);

  const goToPage = (i: number) => {
    const el = listRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section className="bg-[#f7f6f5] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Eyebrow + View All */}
        <div className="flex items-start justify-between gap-6">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="inline-block h-[2px] w-10 rounded bg-orange-500" />
              <span className="text-sm tracking-wide text-orange-500">
                OUR PROJECTS
              </span>
            </div>
            <h2 className="max-w-[48rem] font-semibold leading-[1.1] text-3xl sm:text-4xl md:text-5xl text-[#1b1513]">
              {heading}
            </h2>
            <p className="mt-4 max-w-3xl text-[15px] leading-7 text-black/60">
              {subheading}
            </p>
          </div>

          <Link
            href={viewAllHref}
            className="group hidden shrink-0 items-center gap-3 md:flex"
          >
            <span className="relative grid h-16 w-16 place-items-center rounded-full bg-orange-400 ring-2 ring-black/30">
              <Arrow45 className="h-6 w-6 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
            <span className="text-lg text-black/80">View All</span>
          </Link>
        </div>

        {/* Tabs (with All) */}
        <div className="mt-8 flex flex-wrap gap-6 text-[15px]">
          {tabs.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-5 py-2 transition ${
                active === c
                  ? "bg-[#f06a17] text-white font-bold"
                  : "text-black/70 hover:text-black font-semibold"
              }`}
              aria-pressed={active === c}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Scroll-snap cards */}
        <div
          ref={listRef}
          className="mt-6 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label={`${active} projects`}
        >
          {filtered.length > 0 ? (
            filtered.map((p) => <ProjectCard key={p.id} p={p} />)
          ) : (
            <EmptyCard category={active} />
          )}
        </div>

        {/* Dots */}
        <div className="mt-2 flex items-center justify-center gap-3">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === page ? "bg-black" : "bg-black/25 hover:bg-black/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Card ---------- */
function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="snap-start w-[86%] sm:w-[70%] md:w-[55%] lg:w-[38%] xl:w-[32%] shrink-0">
      <div className="relative overflow-hidden rounded-lg bg-[#0f0f10]">
        <div className="relative h-64 w-full">
          <Image
            src={p.image}
            alt={p.title}
            fill
            className="object-cover opacity-100"
            sizes="(min-width:1280px) 32vw, (min-width:1024px) 38vw, (min-width:768px) 55vw, (min-width:640px) 70vw, 86vw"
            priority={false}
          />
        </div>

        <div className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs text-white/90 backdrop-blur">
          {p.tag} / {p.year}
        </div>

        <div className="absolute inset-x-0 bottom-0 p-5">
          <div className="text-white">
            <div className="text-[15px] font-semibold">{p.title}</div>
            <p className="mt-1 text-[12.5px] text-white/70">
              Built for speed, mobile, and SEO.
            </p>
          </div>

          <Link
            href={p.href ?? "#"}
            className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-[#ff6a1a] text-white shadow-md"
            aria-label={`Open project ${p.title}`}
          >
            <Arrow45 className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}

/* ---------- Empty state ---------- */
function EmptyCard({ category }: { category: string }) {
  return (
    <div className="snap-start w-[86%] sm:w-[70%] md:w-[55%] lg:w-[38%] xl:w-[32%] shrink-0">
      <div className="grid h-64 place-items-center rounded-lg border border-dashed border-black/20 bg-white text-black/60">
        {category === "All" ? (
          "No projects yet."
        ) : (
          <>
            No projects yet for{" "}
            <span className="font-semibold text-black/80">{category}</span>.
          </>
        )}
      </div>
    </div>
  );
}

/* ---------- Inline icon ---------- */
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
