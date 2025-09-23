// components/hero/DentistHero.tsx
"use client";

import Image from "next/image";

type Props = {
  eyebrow?: string;
  title?: string;
  tagline?: string;
  primaryHref?: string;
  secondaryHref?: string;
  imageSrc?: string; // e.g. "/images/hero/dentist-hero.png"
};

export default function DentistHero({
  eyebrow = "Welcome to Health Care",
  title = "Dental Care",
  tagline = "We’ve 25 Years Of Experience In Dental Care Services",
  primaryHref = "#contact",
  secondaryHref = "#how-it-works",
  imageSrc = "/images/hero/dentist-hero.png",
}: Props) {
  return (
    <section className="relative overflow-hidden bg-[#0c1b24] text-white">
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0">
        {/* large soft circle on right */}
        <div className="absolute -right-20 top-1/2 h-[120vmin] w-[120vmin] -translate-y-1/2 rounded-full bg-gradient-to-tr from-white/5 via-white/0 to-white/0 blur-2xl" />
        {/* dotted halo on left */}
        <DottedHalo className="absolute left-0 top-1/2 -translate-y-1/2 opacity-[0.15]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20 lg:gap-16">
        {/* LEFT */}
        <div className="relative z-10">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 ring-1 ring-white/15">
            <span className="inline-block h-1.5 w-6 rounded-full bg-emerald-400" />
            {eyebrow}
          </div>

          <h1 className="text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            {title}
          </h1>

          <p className="mt-4 max-w-xl text-[15px] leading-7 text-white/80">
            {tagline}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={primaryHref}
              className="inline-flex items-center gap-2 rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-500/20 ring-1 ring-rose-300/30 transition hover:bg-rose-400"
            >
              Learn More
              <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20 text-white">
                +
              </span>
            </a>

            <a
              href={secondaryHref}
              className="group inline-flex items-center gap-3 text-sm font-semibold text-white/90"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-lime-500/90 text-[#0c1b24] ring-1 ring-black/10">
                <PlayIcon className="h-4 w-4" />
              </span>
              <span className="underline decoration-white/30 underline-offset-4 group-hover:decoration-white">
                How It Works
              </span>
            </a>
          </div>
        </div>

        {/* RIGHT image */}
        <div className="relative z-10">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-[560px]">
            <Image
              src={imageSrc}
              alt="Dentist hero"
              fill
              priority
              className="object-contain drop-shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
              sizes="(min-width:1024px) 560px, 90vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------- dotted halo SVG ------- */
function DottedHalo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="520"
      height="520"
      viewBox="0 0 520 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* concentric dotted circles */}
      {[85, 140, 200, 260, 320, 380, 440].map((r, i) => (
        <circle
          key={r}
          cx="260"
          cy="260"
          r={r}
          stroke="url(#g)"
          strokeWidth="2"
          strokeDasharray="2 10"
          opacity={0.5 - i * 0.06}
        />
      ))}
      <defs>
        <radialGradient id="g">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

/* ------- icons ------- */
function PlayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M8 5.14v13.72c0 .58.63.94 1.12.63l9.06-6.86a.75.75 0 0 0 0-1.2L9.12 4.5A.75.75 0 0 0 8 5.14z" />
    </svg>
  );
}
