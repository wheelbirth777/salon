// components/TestimonialsSection.tsx
import Image from "next/image";

type Testimonial = {
  name: string;
  role?: string;
  text: string;
  avatar: string;
  rating?: 1 | 2 | 3 | 4 | 5;
};

interface Props {
  eyebrow?: string; // "Testimonial"
  title?: string; // "What they say?"
  items: [Testimonial, Testimonial]; // exactly two for this layout
  bgTextureSrc?: string; // /images/texture.jpg
  leftDecorSrc?: string; // /images/decor-left.png
  rightDecorSrc?: string; // /images/decor-right.png
  cardLeafSrc?: string; // /images/card-leaf.png (small)
}

export default function TestimonialsSection({
  eyebrow = "Testimonial",
  title = "What they say?",
  items,
  bgTextureSrc = "/images/bg-texture.jpg",
  leftDecorSrc = "/images/essence-left.png",
  rightDecorSrc = "/images/flower-right.png",
  cardLeafSrc = "/images/card-leaf.png",
}: Props) {
  return (
    <section className="relative isolate py-16 sm:py-24">
      {/* subtle paper/texture bg */}
      <div
        className="absolute inset-0 -z-10 bg-repeat"
        style={{ backgroundImage: `url(${bgTextureSrc})` }}
        aria-hidden
      />

      {/* side decorations */}
      {leftDecorSrc && (
        <Image
          src={leftDecorSrc}
          alt="" // decorative
          width={320} // ← replace with actual px width
          height={320} // ← replace with actual px height
          className="pointer-events-none select-none absolute left-0 top-12 w-40 sm:w-52 -translate-x-1/4 h-auto"
          priority
        />
      )}
      {rightDecorSrc && (
        <Image
          src={rightDecorSrc}
          alt="" // decorative
          width={384} // ← replace with actual px width
          height={384} // ← replace with actual px height
          className="pointer-events-none select-none absolute right-0 bottom-0 w-48 sm:w-64 translate-x-1/4 h-auto"
          priority
        />
      )}

      <div className="max-w-6xl mx-auto px-4">
        {/* header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="block text-[13px] tracking-wide italic text-amber-700/70">
            {eyebrow}
          </span>
          <h2 className="mt-2 font-serif text-4xl sm:text-5xl text-gray-900">
            {title}
          </h2>
        </div>

        {/* two-card layout */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
          {items.map((t, i) => (
            <article
              key={i}
              className="relative overflow-hidden rounded-md border border-black/5 bg-white shadow-sm"
            >
              {/* faint quote watermark */}
              <svg
                aria-hidden
                className="absolute -left-3 bottom-8 h-28 w-28 text-black/5"
                viewBox="0 0 64 64"
                fill="currentColor"
              >
                <path d="M22 46c0-8 6-14 14-14v-6c-11 0-20 9-20 20v10h6V46zm24 0c0-8 6-14 14-14v-6c-11 0-20 9-20 20v10h6V46z" />
              </svg>

              {/* decorative leaf in bottom-right corner */}
              {cardLeafSrc && (
                <Image
                  src={cardLeafSrc}
                  alt="" // decorative
                  width={160} // ← replace with actual px width
                  height={160} // ← replace with actual px height
                  className="pointer-events-none select-none absolute right-0 bottom-0 w-20 h-auto opacity-80"
                />
              )}

              <div className="p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <Image
                    src={t.avatar}
                    alt={`${t.name} avatar`}
                    width={64}
                    height={64}
                    className="h-14 w-14 rounded-md object-cover"
                  />
                  <div className="flex-1">
                    {/* stars */}
                    <div
                      className="flex gap-1 text-amber-500"
                      aria-label={`${t.rating ?? 5} out of 5 stars`}
                    >
                      {Array.from({ length: t.rating ?? 5 }).map((_, s) => (
                        <Star key={s} />
                      ))}
                    </div>
                    <p className="mt-3 text-[15px] leading-7 text-gray-700">
                      {t.text}
                    </p>

                    <div className="mt-5">
                      <div className="font-serif text-lg text-gray-900">
                        {t.name}
                      </div>
                      {t.role && (
                        <div className="text-sm text-amber-700/80">
                          {t.role}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Star() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current" aria-hidden>
      <path d="m10 1.5 2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.9 5.06 16.7l.94-5.5-4-3.9 5.53-.8L10 1.5Z" />
    </svg>
  );
}
