// components/BenefitsWithAccordion.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

type Stat = { value: number; labelTop: string; labelBottom: string };
type FAQ = { title: string; body: string };

interface Props {
  eyebrow?: string;
  heading?: string;
  stats?: Stat[]; // 2 items
  faqs?: FAQ[]; // 3 items
  image?: string; // right image
  overlayTitle?: string; // "25k Projects"
  overlaySub?: string; // "Are Completed"
  overlayCta?: string; // "READ MORE"
}

export default function BenefitsWithAccordion({
  eyebrow = "Our Services",
  heading = "Comprehensive Solutions",
  stats = [
    {
      value: 95,
      labelTop: "Optimized for 95+",
      labelBottom: "performance scores",
    },
    { value: 100, labelTop: "Mobile", labelBottom: "Friendly" },
    { value: 99, labelTop: "Enterprise Grade", labelBottom: "Uptime" },
  ],
  faqs = [
    {
      title: "Custom Website Development",
      body: "We specialize in crafting visually stunning, user friendly websites tailored to your business needs. Our team combines creativity with cutting-edge technology to deliver fully responsive, fast, and scalable websites that not only look great but also perform exceptionally across all devices.",
    },
    {
      title: "Artificial Intelligence(AI) services",
      body: "Leverage the power of Artificial Intelligence to enhance your website and digital platforms. Our AI services provide cutting-edge solutions that optimize user experience, automate processes, and deliver personalized experiences. Whether you’re looking to integrate chatbots, boost search functionality, or implement advanced security systems, we offer a wide range of AI powered services tailored to your business needs.",
    },
    {
      title: "Ecommerce Development",
      body: "Elevate your online business with our expert e-commerce development services. We create powerful, secure, and scalable e-commerce platforms tailored to your specific business needs. From seamless product management and intuitive shopping experiences to secure payment gateways and efficient order tracking, we build feature-rich online stores that drive sales and customer satisfaction.",
    },
    {
      title: "Website Maintenance and Support",
      body: "Our maintenance and support services ensure that your website stays up-to-date, secure, and running smoothly. We provide ongoing updates, performance optimizations, and security monitoring to prevent issues before they impact your business.",
    },
    {
      title: "Mobile Development & Optimization",
      body: "In today’s mobile first world, we ensure your website delivers an exceptional experience across all devices. Our mobile optimization services focus on making your website fast, responsive, and easy to navigate on smartphones and tablets, enhancing user experience and boosting engagement.",
    },
    {
      title: "Web Hosting & Domain Services",
      body: "We take care of everything your website needs to be live and accessible — from securing your domain name to providing reliable hosting with fast load times and high uptime.",
    },
    {
      title: "SEO Optimization",
      body: "We optimize your website to rank higher on search engines, making it easier for customers to find your business online. From keyword research and content structure to performance tuning and mobile readiness, we ensure your site is built to attract traffic and improve visibility.",
    },
  ],
  image = "/images/office/person-tablet.jpg",
  overlayTitle = "Flexible Monthly",
  overlaySub = "Plans (WaaS)",
  overlayCta = "READ MORE",
}: Props) {
  const [open, setOpen] = useState(-1);

  return (
    <section className="bg-stone-50 dark:bg-slate-900">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
        {/* LEFT */}
        <div>
          <div className="mb-3 flex items-center gap-3">
            <span className="text-[15px] font-semibold text-orange-500">
              {eyebrow}
            </span>
            <span className="h-[2px] w-9 bg-[#ff5a1f]" />
          </div>

          <h2 className="text-3xl font-semibold leading-tight text-[#1a1a1a] sm:text-4xl md:text-5xl">
            {heading}
          </h2>

          {/* stats + accordion grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-[170px_1fr]">
            {/* donuts column */}
            <div className="space-y-10">
              {stats.map((s, i) => (
                <div key={i} className="flex flex-col items-center">
                  <Donut value={s.value} />
                  <div className="mt-3 text-center text-[13px] font-semibold text-[#1b1b1b]">
                    <div>{s.labelTop}</div>
                    <div>{s.labelBottom}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* accordion */}
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded border border-black/10 bg-orange-100"
                >
                  <button
                    onClick={() => setOpen((p) => (p === i ? -1 : i))}
                    className="flex w-full items-center justify-between px-5 py-4 text-left font-semibold text-[#191919]"
                  >
                    {f.title}
                    <span
                      className={`ml-4 grid h-6 w-6 place-items-center rounded-full border border-black/20 text-[11px] transition ${
                        open === i ? "rotate-180" : ""
                      }`}
                    >
                      ▾
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] ${
                      open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t bg-orange-50 border-black/10 px-5 py-4 text-[15px] leading-7 text-black/70">
                        {f.body}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: optimized Image + orange overlay card */}
        <div className="relative aspect-[4/5] md:aspect-[4/3]">
          <Image
            src={image}
            alt={overlayTitle || "Benefits image"}
            // fill
            // sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
            height={800}
            width={600}
            className="rounded object-cover"
            priority={false}
          />

          <div className="absolute left-1/2 top-1/2 w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-[28px] bg-orange-500 p-8 text-white shadow-2xl md:left-auto md:right-8 md:top-1/2 md:w-[60%] md:-translate-x-0">
            <div className="flex items-start gap-4">
              <TargetIcon className="mt-1 h-7 w-7" />
              <div>
                <div className="text-2xl font-bold leading-tight">
                  {overlayTitle}
                </div>
                <div className="text-2xl font-bold leading-tight">
                  {overlaySub}
                </div>
                <a
                  href="#"
                  className="mt-4 inline-block text-[13px] font-semibold tracking-wider underline underline-offset-4"
                >
                  {overlayCta}
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* /RIGHT */}
      </div>
    </section>
  );
}

/* ---------- Donut (SVG) ---------- */
function Donut({ value }: { value: number }) {
  const R = 38;
  const C = 2 * Math.PI * R;
  const v = Math.max(0, Math.min(100, value));
  const off = C - (v / 100) * C;

  return (
    <div className="relative h-[110px] w-[110px]">
      <svg width="110" height="110" viewBox="0 0 110 110">
        <circle
          cx="55"
          cy="55"
          r={R}
          stroke="#ffe0d4"
          strokeWidth="8"
          fill="none"
        />
        <circle
          cx="55"
          cy="55"
          r={R}
          stroke="#ff5a1f"
          strokeWidth="8"
          fill="none"
          strokeDasharray={C}
          strokeDashoffset={off}
          strokeLinecap="round"
          transform="rotate(-90 55 55)"
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <span className="text-[18px] font-semibold text-[#ff5a1f]">{v}%</span>
      </div>
    </div>
  );
}

/* ---------- Icon ---------- */
function TargetIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}
