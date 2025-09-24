// components/ProjectsGallery.tsx
"use client";
import Image from "next/image";
import { useMemo, useState } from "react";

type Item = {
  id: string | number;
  src: string;
  alt?: string;
  tags: string[]; // e.g. ["Spa", "Facial"]
};

interface Props {
  items: Item[];
  categories?: string[]; // order of tabs
  title?: string;
}

const DEFAULT_CATEGORIES = [
  "All Projects",
  "Cosmetology",
  "Spa",
  "Hairdressing",
  "Nails",
];

export default function ProjectsGallery({
  items,
  categories = DEFAULT_CATEGORIES,
  title = "",
}: Props) {
  const [active, setActive] = useState(categories[0]);

  // Store per-image aspect ratios so the masonry columns can size correctly.
  const [ratios, setRatios] = useState<Record<string | number, number>>({});

  const filtered = useMemo(() => {
    if (active === categories[0]) return items;
    const key = active.toLowerCase();
    return items.filter((i) => i.tags.some((t) => t.toLowerCase() === key));
  }, [items, active, categories]);

  return (
    <section className="py-10 sm:py-14">
      <div className="max-w-6xl mx-auto px-4">
        {title && (
          <h2 className="mb-6 text-center font-serif text-3xl sm:text-4xl text-gray-900">
            {title}
          </h2>
        )}

        {/* Tabs */}
        <div className="mb-6 sm:mb-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs tracking-wide uppercase">
          {categories.map((cat) => {
            const isActive = cat === active;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={[
                  "transition-colors",
                  isActive
                    ? "text-amber-600"
                    : "text-gray-500 hover:text-gray-800",
                ].join(" ")}
                aria-current={isActive ? "page" : undefined}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Masonry grid (CSS columns) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
          {filtered.map((item) => {
            const ratio = ratios[item.id] ?? 4 / 3; // sensible default until image loads
            return (
              <figure
                key={item.id}
                className="mb-6 break-inside-avoid overflow-hidden rounded-md bg-white shadow-sm ring-1 ring-black/5"
              >
                {/* Aspect-ratio wrapper so Next/Image with fill works in CSS columns */}
                <div
                  className="relative w-full"
                  style={{ aspectRatio: String(ratio) }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt ?? "Gallery image"}
                    fill
                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    className="object-cover"
                    loading="lazy"
                    draggable={false}
                    onLoad={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      if (img.naturalWidth && img.naturalHeight) {
                        setRatios((prev) => ({
                          ...prev,
                          [item.id]: img.naturalWidth / img.naturalHeight,
                        }));
                      }
                    }}
                  />
                </div>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
