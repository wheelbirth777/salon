// components/layout/FooterDentist.tsx
"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

type News = {
  id: string;
  title: string;
  author?: string;
  href?: string;
  thumb: string;
};
type LinkItem = { label: string; href: string };
type GalleryItem = { src: string; alt?: string; href?: string };

type Props = {
  brand?: { logoSrc: string; name: string; href?: string };
  statText?: string; // e.g., "5M+ Satisfied Clients"
  about?: { text: string; socials?: { icon: React.ReactNode; href: string }[] };
  news?: News[];
  links?: LinkItem[];
  gallery?: GalleryItem[];
  year?: number;
  bottomLinks?: LinkItem[];
};

export default function FooterDentist({
  brand = { logoSrc: "/images/logo-doctio.svg", name: "Doctio", href: "/" },
  statText = "5M+ Satisfied Clients",
  about = {
    text: "Sit amet consectetur adipisicing elit sed do eiusmod tempor indun labore dolore magna aliqua. Quis suspendisse ultrices gravid aisus commodo viverra maecenas.",
    socials: [
      { icon: <IconFacebook />, href: "#" },
      { icon: <IconBehance />, href: "#" },
      { icon: <IconInstagram />, href: "#" },
      { icon: <IconTwitter />, href: "#" },
    ],
  },
  news = DEMO_NEWS,
  links = DEMO_LINKS,
  gallery = DEMO_GALLERY,
  year = new Date().getFullYear(),
  bottomLinks = [
    { label: "Settings & Privacy", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Doctors", href: "#" },
  ],
}: Props) {
  const [email, setEmail] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: wire to your newsletter (e.g., API route /api/subscribe)
    alert(`Subscribed: ${email}`);
    setEmail("");
  };

  return (
    <footer className="relative overflow-hidden bg-[#0d2430] text-white">
      {/* top: brand + subscribe + stat */}
      <div className="mx-auto max-w-7xl px-4 pt-8 pb-6">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* brand */}
          <a
            href={brand.href ?? "#"}
            className="inline-flex items-center gap-3"
          >
            <Image
              src={brand.logoSrc}
              alt={brand.name}
              width={160}
              height={40}
              className="h-10 w-auto"
              priority={false}
            />
          </a>

          {/* subscribe */}
          <form
            onSubmit={onSubmit}
            className="flex w-full max-w-xl items-center gap-3"
          >
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="w-full rounded-lg bg-white/5 px-4 py-3 text-sm text-white placeholder-white/60 ring-1 ring-white/15 outline-none focus:ring-white/30"
            />
            <button
              type="submit"
              className="grid h-11 w-11 place-items-center rounded-lg bg-emerald-500 text-white ring-1 ring-emerald-400/60 transition hover:bg-emerald-400"
              aria-label="Subscribe"
              title="Subscribe"
            >
              <IconSend className="h-5 w-5" />
            </button>
          </form>

          {/* stat */}
          <div className="text-emerald-300/90 font-semibold">{statText}</div>
        </div>

        <div className="mt-6 h-px w-full bg-white/10" />
      </div>

      {/* middle: 4 columns */}
      <div className="mx-auto max-w-7xl px-4 pb-14">
        <div className="grid gap-10 md:grid-cols-12">
          {/* About */}
          <div className="md:col-span-4">
            <h4 className="text-lg font-semibold">About Us</h4>
            <p className="mt-3 text-sm leading-6 text-white/80">{about.text}</p>
            {about.socials && (
              <div className="mt-5 flex items-center gap-3">
                {about.socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    className="grid h-10 w-10 place-items-center rounded-full bg-rose-500 text-white ring-1 ring-rose-400/60 transition hover:bg-rose-400"
                    aria-label="Social link"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* News */}
          <div className="md:col-span-4">
            <h4 className="text-lg font-semibold">Recent News</h4>
            <ul className="mt-4 space-y-4">
              {news.slice(0, 2).map((n) => (
                <li key={n.id} className="flex items-start gap-3">
                  <div className="relative h-14 w-14 overflow-hidden rounded-md ring-1 ring-white/10">
                    <Image
                      src={n.thumb}
                      alt={n.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <a
                      href={n.href ?? "#"}
                      className="text-sm font-semibold text-white hover:underline"
                    >
                      {n.title}
                    </a>
                    <div className="text-xs text-white/70">
                      By {n.author ?? "Staff"}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="inline-flex items-center gap-2 text-white/85 hover:text-white"
                  >
                    <span className="text-emerald-400">»</span> {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Gallery */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold">Gallery</h4>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {gallery.slice(0, 6).map((g, i) => (
                <a
                  key={i}
                  href={g.href ?? g.src}
                  className="group relative block overflow-hidden rounded-md ring-1 ring-white/10"
                  aria-label={g.alt ?? "Gallery image"}
                >
                  <Image
                    src={g.src}
                    alt={g.alt ?? ""}
                    width={120}
                    height={90}
                    className="h-full w-full object-cover"
                  />
                  <span className="pointer-events-none absolute inset-0 grid place-items-center bg-black/0 text-white transition group-hover:bg-black/30">
                    <span className="hidden h-8 w-8 place-items-center rounded-full bg-white/20 ring-1 ring-white/40 group-hover:grid">
                      <PlusIcon className="h-4 w-4" />
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-5 text-sm text-white/80">
          <div>
            ©{" "}
            <a
              href={brand.href ?? "#"}
              className="font-semibold hover:underline"
            >
              {brand.name}
            </a>{" "}
            {year}, All Rights Reserved
          </div>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {bottomLinks.map((b) => (
              <a key={b.href} href={b.href} className="hover:text-white">
                {b.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Back to top */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="group fixed bottom-6 right-6 grid h-12 w-12 place-items-center rounded-full bg-emerald-500 text-white ring-1 ring-emerald-400/60 shadow-lg shadow-emerald-500/25 hover:bg-emerald-400"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
      </a>
    </footer>
  );
}

/* ---------------- demo content ---------------- */
const DEMO_NEWS: News[] = [
  {
    id: "1",
    title: "Useful VS Contensions Front End Develop",
    author: "Somalia",
    href: "#",
    thumb: "/images/news/1.jpg",
  },
  {
    id: "2",
    title: "Useful VS Contensions Front End Develop",
    author: "Somalia",
    href: "#",
    thumb: "/images/news/2.jpg",
  },
];

const DEMO_LINKS: LinkItem[] = [
  { label: "Neurology Surgery", href: "#" },
  { label: "Dental Care", href: "#" },
  { label: "Plastic Surgery", href: "#" },
  { label: "Eye Care", href: "#" },
  { label: "Body Treatments", href: "#" },
  { label: "Dental Care", href: "#" },
];

const DEMO_GALLERY: GalleryItem[] = [
  { src: "/images/gallery/1.jpg" },
  { src: "/images/gallery/2.jpg" },
  { src: "/images/gallery/3.jpg" },
  { src: "/images/gallery/4.jpg" },
  { src: "/images/gallery/5.jpg" },
  { src: "/images/gallery/6.jpg" },
];

/* ---------------- icons ---------------- */
function IconSend(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M3.4 20.6l17.7-8.1c.7-.3.7-1.3 0-1.6L3.4 2.6A1 1 0 002.1 4l6.7 4.3a1 1 0 01-.1 1.7L2 12l6.7 2a1 1 0 01.1 1.7L2.1 20a1 1 0 001.3.6z" />
    </svg>
  );
}
function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M11 4h2v16h-2zM4 11h16v2H4z" />
    </svg>
  );
}
function ArrowUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 4l-7 7h4v9h6v-9h4z" />
    </svg>
  );
}
function IconFacebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13 22v-8h3l1-4h-4V7.5c0-1.1.3-1.8 1.9-1.8H17V2.2C16.6 2.1 15.4 2 14 2c-3 0-5 1.8-5 5.1V10H6v4h3v8h4z" />
    </svg>
  );
}
function IconBehance(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M3 7h6a3 3 0 110 6H3V7zm6 8H3v2h6a3 3 0 100-6H7.5A2.5 2.5 0 117 9H3a5 5 0 005 6zm6.8-8H22v2h-6.2V7zM15 11.7c0-2 1.5-3.7 3.7-3.7 2 0 3.6 1.6 3.6 3.7v.6h-5.5c.2.9.9 1.5 2 1.5.8 0 1.5-.3 1.8-1h1.6c-.5 1.7-2 2.8-3.5 2.8-2.2 0-3.7-1.7-3.7-3.6zm3.7-2c-1 0-1.6.6-1.8 1.5h3.6c-.2-.9-.8-1.5-1.8-1.5z" />
    </svg>
  );
}
function IconInstagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0-5c2.7 0 3 .01 4.1.06 1.1.05 1.9.22 2.6.47a5.4 5.4 0 012 1.3 5.4 5.4 0 011.3 2c.25.7.42 1.5.47 2.6.05 1.1.06 1.4.06 4.1s-.01 3-.06 4.1c-.05 1.1-.22 1.9-.47 2.6a5.4 5.4 0 01-1.3 2 5.4 5.4 0 01-2 1.3c-.7.25-1.5.42-2.6.47-1.1.05-1.4.06-4.1.06s-3-.01-4.1-.06c-1.1-.05-1.9-.22-2.6-.47a5.4 5.4 0 01-2-1.3 5.4 5.4 0 01-1.3-2c-.25-.7-.42-1.5-.47-2.6C2.01 15 2 14.7 2 12s.01-3 .06-4.1c.05-1.1.22-1.9.47-2.6a5.4 5.4 0 011.3-2 5.4 5.4 0 012-1.3c.7-.25 1.5-.42 2.6-.47C9 2.01 9.3 2 12 2z" />
    </svg>
  );
}
function IconTwitter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 5.8c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.2 1.7-2.2-.8.5-1.7.9-2.6 1.1A3.7 3.7 0 0015.3 4c-2 0-3.7 1.7-3.7 3.7 0 .3 0 .6.1.9-3-.1-5.7-1.6-7.5-3.8-.3.6-.5 1.2-.5 2 0 1.3.7 2.5 1.7 3.1-.6 0-1.2-.2-1.7-.5 0 0 0 .1 0 .1 0 1.8 1.3 3.3 3 3.6-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.5 1.9 2.6 3.5 2.6A7.5 7.5 0 012 18.3c1.6 1 3.5 1.6 5.5 1.6 6.6 0 10.3-5.7 10.3-10.6v-.5c.7-.5 1.4-1.2 1.9-1.9z" />
    </svg>
  );
}
