// components/sections/AboutDentist.tsx
"use client";

import Image from "next/image";

type Props = {
  eyebrow?: string;
  title?: string;
  copy?: string;
  bullets?: string[];
  ctaHref?: string;
  ctaText?: string;
  phoneHref?: string; // e.g., "tel:+10123456789"
  phoneLabel?: string;
  photoSrc?: string; // left main photo
  toolsSrc?: string; // small overlay tools image (optional)
  stampText?: string; // circular text
};

export default function AboutDentist({
  eyebrow = "About MediFix",
  title = "Something About MediFix Dental Care",
  copy = `Sed ut perspiciatis unde omnis natus error voluptate accusantium doloremque laudantium totam aperiam eaque inventore veritatis quasi, nemo voluptatem quia voluptas sit aspernatur.`,
  bullets = [
    "Modern Dental Treatment",
    "Professional Doctors",
    "Affordable Pricing",
  ],
  ctaHref = "#contact",
  ctaText = "Learn More",
  phoneHref = "tel:+10123456789",
  phoneLabel = "+012 (345) 6789",
  photoSrc = "/images/about/dentist-kid.jpg",
  toolsSrc = "/images/about/tools.png",
  stampText = "Medical and dental care provider company • Since 2022 • ",
}: Props) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        {/* top services row (optional) could be inserted here */}

        <div className="grid items-center gap-10 md:grid-cols-12">
          {/* LEFT: photo with circular stamp + tools overlay */}
          <div className="relative md:col-span-6">
            <div className="relative overflow-hidden rounded-[28px]">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={photoSrc}
                  alt="Dental care in action"
                  fill
                  className="object-cover"
                  priority
                  sizes="(min-width:1024px) 48vw, 100vw"
                />
              </div>
            </div>

            {/* circular stamp */}
            <CircularStamp
              className="absolute -left-10 -top-10 hidden h-44 w-44 rotate-[-18deg] md:block"
              text={stampText}
            />

            {/* tools overlay (optional) */}
            {toolsSrc && (
              <div className="pointer-events-none absolute -bottom-8 -left-8 hidden w-40 md:block lg:w-48">
                <Image
                  src={toolsSrc}
                  alt=""
                  width={300}
                  height={300}
                  className="h-auto w-full object-contain"
                />
              </div>
            )}
          </div>

          {/* RIGHT: content */}
          <div className="relative md:col-span-6">
            {/* faint 'About' word in background */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-10 -z-10 select-none text-7xl font-extrabold tracking-tighter text-slate-900/5 sm:text-8xl"
            >
              About
            </div>

            <div className="mb-3 text-sm font-semibold text-rose-500">
              {eyebrow}
            </div>

            <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              {title}
            </h2>

            <p className="mt-4 max-w-prose text-[15px] leading-7 text-slate-600">
              {copy}
            </p>

            <ul className="mt-6 space-y-3">
              {bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[15px] font-medium text-slate-800"
                >
                  <span className="mt-1 inline-grid h-5 w-5 place-items-center rounded-full bg-rose-500 text-white">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {/* actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={ctaHref}
                className="inline-flex items-center gap-2 rounded-full bg-lime-600 px-6 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-lime-500/40 transition hover:bg-lime-500"
              >
                {ctaText}
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20">
                  +
                </span>
              </a>

              <a
                href={phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-700 ring-1 ring-rose-200 hover:bg-rose-100"
              >
                <PhoneIcon className="h-4 w-4" />
                {phoneLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------ circular stamp ------------------ */
function CircularStamp({
  className = "",
  text = "Dental • Since 2022 • ",
}: {
  className?: string;
  text?: string;
}) {
  const repeated = (text + " ").repeat(3);
  return (
    <svg viewBox="0 0 200 200" className={className}>
      <defs>
        <path
          id="circlePath"
          d="M 100,100 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
        />
      </defs>
      <circle cx="100" cy="100" r="86" fill="white" opacity="0.0" />
      <circle
        cx="100"
        cy="100"
        r="76"
        fill="none"
        stroke="#ef4444"
        strokeWidth="10"
      />
      <text fill="#ef4444" fontSize="12" fontWeight={700} letterSpacing="1">
        <textPath href="#circlePath" startOffset="0">
          {repeated}
        </textPath>
      </text>
      {/* arrow in the gap */}
      <g transform="translate(100,100)">
        <path
          d="M0 -34 L10 -24 L0 -14"
          fill="none"
          stroke="#ef4444"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

/* ------------------ icons ------------------ */
function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      {...props}
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.11 5.18 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.72c.09.66.25 1.3.49 1.9a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.6.24 1.24.4 1.9.49A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
