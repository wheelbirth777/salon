// components/Navbar/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import { MegaMenu } from "../MegaMenu/MegaMenu";
import { useAuth } from "@/contexts/AuthContext"; // 👉 NEW

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const { isAuthenticated, user, logout } = useAuth(); // 👉 NEW

  const toggleMenu = () => setIsMenuOpen((v) => !v);
  const toggleSection = (id: string) => setOpen((p) => (p === id ? null : id));

  // 👉 helper: initials for the circle avatar
  const initials =
    (user?.username || user?.email || "")
      .split(/[\s.@_]+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((s) => s[0]?.toUpperCase())
      .join("") || "U";

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
        {/* ROW: Logo | Nav | Icons / Hamburger */}
        <div className="flex h-16 items-center gap-6">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo.png"
              alt="JATLink Labs"
              width={75}
              height={75}
              className="h-10 w-auto border border-orange-400"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:block flex-1">
            <MegaMenu />
          </div>

          {/* Desktop Right: Auth + Social */}
          <div className="hidden lg:flex items-center ml-auto gap-4">
            {/* 👉 AUTH AREA (desktop) */}
            {!isAuthenticated ? (
              <div className="flex items-center gap-2">
                <Link
                  href="/login"
                  className="rounded-full border border-white/20 px-3 py-1.5 text-sm font-medium hover:bg-white/10"
                >
                  Sign in
                </Link>
                <Link
                  href="/register"
                  className="rounded-full bg-orange-600 px-3 py-1.5 text-sm font-semibold hover:bg-orange-500"
                >
                  Sign up
                </Link>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  href="/dashboard"
                  className="rounded-full border border-white/20 px-3 py-1.5 text-sm font-medium hover:bg-white/10"
                >
                  Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="rounded-full bg-orange-600 px-3 py-1.5 text-sm font-semibold hover:bg-orange-500"
                >
                  Logout
                </button>
                <div
                  title={user?.email || ""}
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-xs font-bold"
                >
                  {initials}
                </div>
              </div>
            )}

            {/* Social */}
            <ul className="flex items-center gap-3 pl-2">
              <li className="group grid h-[37px] w-[37px] place-items-center rounded-full border border-white/20 hover:border-orange-600 transition">
                <Link href="#">
                  <FaFacebookF className="w-4 h-4 text-white/70 group-hover:text-white" />
                </Link>
              </li>
              <li className="group grid h-[37px] w-[37px] place-items-center rounded-full border border-white/20 hover:border-orange-600 transition">
                <Link href="#">
                  <FaTwitter className="w-4 h-4 text-white/70 group-hover:text-white" />
                </Link>
              </li>
              <li className="group grid h-[37px] w-[37px] place-items-center rounded-full border border-white/20 hover:border-orange-600 transition">
                <Link href="#">
                  <BiLogoLinkedin className="w-4 h-4 text-white/70 group-hover:text-white" />
                </Link>
              </li>
              <li className="group grid h-[37px] w-[37px] place-items-center rounded-full border border-white/20 hover:border-orange-600 transition">
                <Link href="#">
                  <FaPinterestP className="w-4 h-4 text-white/70 group-hover:text-white" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Hamburger */}
          <div className="ml-auto md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden w-[100vw] bg-slate-950/98 backdrop-blur border-t border-white/10`}
        >
          <div className="px-3 py-2">
            {/* Top-level quick links */}
            <MobileLink href="/" onClick={toggleMenu}>
              Home
            </MobileLink>
            <MobileLink href="/pricing" onClick={toggleMenu}>
              Pricing
            </MobileLink>
            <MobileLink href="/projects" onClick={toggleMenu}>
              Projects
            </MobileLink>
            <MobileLink href="/launch-ready" onClick={toggleMenu}>
              Launch-Ready Websites
            </MobileLink>

            {/* Services */}
            <MobileSection
              id="services"
              label="Services"
              open={open}
              onToggle={toggleSection}
            >
              <MobileSublink
                href="/services/web-development"
                onClick={toggleMenu}
              >
                Web Development
              </MobileSublink>
              <MobileSublink href="/services/ui-ux" onClick={toggleMenu}>
                UI / UX Design
              </MobileSublink>
              <MobileSublink
                href="/services/seo-performance"
                onClick={toggleMenu}
              >
                SEO & Performance
              </MobileSublink>
              <MobileSublink href="/services/ecommerce" onClick={toggleMenu}>
                E-commerce
              </MobileSublink>
              <MobileSublink href="/services/maintenance" onClick={toggleMenu}>
                Maintenance & Support
              </MobileSublink>
              <MobileSublink href="/services/integrations" onClick={toggleMenu}>
                Custom Integrations
              </MobileSublink>
              <MobileSublink href="/services/mobile-apps" onClick={toggleMenu}>
                Mobile Apps
              </MobileSublink>
            </MobileSection>

            {/* Solutions / Industries */}
            <MobileSection
              id="solutions"
              label="Solutions"
              open={open}
              onToggle={toggleSection}
            >
              <MobileSublink href="/solutions/smb" onClick={toggleMenu}>
                Small Businesses
              </MobileSublink>
              <MobileSublink href="/solutions/startups" onClick={toggleMenu}>
                Startups
              </MobileSublink>
              <MobileSublink href="/solutions/creators" onClick={toggleMenu}>
                Creators
              </MobileSublink>
              <MobileSublink href="/solutions/nonprofits" onClick={toggleMenu}>
                Nonprofits
              </MobileSublink>
              <MobileSublink
                href="/solutions/local-services"
                onClick={toggleMenu}
              >
                Local Services
              </MobileSublink>
              <MobileSublink href="/demos" onClick={toggleMenu}>
                Live Demos
              </MobileSublink>
            </MobileSection>

            {/* Work */}
            <MobileSection
              id="work"
              label="Work"
              open={open}
              onToggle={toggleSection}
            >
              <MobileSublink href="/work/case-studies" onClick={toggleMenu}>
                Case Studies
              </MobileSublink>
              <MobileSublink href="/projects" onClick={toggleMenu}>
                All Projects
              </MobileSublink>
              <MobileSublink href="/work/results" onClick={toggleMenu}>
                Client Results
              </MobileSublink>
            </MobileSection>

            {/* Resources */}
            <MobileSection
              id="resources"
              label="Resources"
              open={open}
              onToggle={toggleSection}
            >
              <MobileSublink href="/blog" onClick={toggleMenu}>
                Blog
              </MobileSublink>
              <MobileSublink href="/guides" onClick={toggleMenu}>
                Guides
              </MobileSublink>
              <MobileSublink href="/faq" onClick={toggleMenu}>
                FAQs
              </MobileSublink>
              <MobileSublink href="/changelog" onClick={toggleMenu}>
                Changelog
              </MobileSublink>
              <MobileSublink href="/newsletter" onClick={toggleMenu}>
                Newsletter
              </MobileSublink>
            </MobileSection>

            {/* Company */}
            <MobileSection
              id="company"
              label="Company"
              open={open}
              onToggle={toggleSection}
            >
              <MobileSublink href="/aboutus" onClick={toggleMenu}>
                About Us
              </MobileSublink>
              <MobileSublink href="/team" onClick={toggleMenu}>
                Team
              </MobileSublink>
              <MobileSublink href="/careers" onClick={toggleMenu}>
                Careers
              </MobileSublink>
              <MobileSublink href="/contactus" onClick={toggleMenu}>
                Contact
              </MobileSublink>
            </MobileSection>

            {/* CTAs */}
            <div className="mt-3 flex flex-wrap gap-3 px-1 pb-4">
              <Link
                href="/contactus"
                onClick={toggleMenu}
                className="flex-1 rounded-full bg-orange-600 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
              >
                Contact Us
              </Link>
              <Link
                href="/pricing"
                onClick={toggleMenu}
                className="flex-1 rounded-full border border-white/20 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                View Pricing
              </Link>

              {/* 👉 AUTH AREA (mobile) */}
              {!isAuthenticated ? (
                <>
                  <Link
                    href="/login"
                    onClick={toggleMenu}
                    className="flex-1 rounded-full border border-white/20 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-white/10"
                  >
                    Sign in
                  </Link>
                  <Link
                    href="/register"
                    onClick={toggleMenu}
                    className="flex-1 rounded-full bg-orange-600 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-orange-500"
                  >
                    Sign up
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/dashboard"
                    onClick={toggleMenu}
                    className="flex-1 rounded-full border border-white/20 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-white/10"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      toggleMenu();
                    }}
                    className="flex-1 rounded-full bg-orange-600 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-orange-500"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

/* ---------- Mobile helpers ---------- */
function Caret({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.19l3.71-2.96a.75.75 0 1 1 .94 1.17l-4.24 3.39a.75.75 0 0 1-.94 0L5.21 8.4a.75.75 0 0 1 .02-1.2z" />
    </svg>
  );
}

function MobileLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block rounded-lg px-4 py-3 text-slate-200 hover:bg-slate-800/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
    >
      {children}
    </Link>
  );
}

function MobileSection({
  id,
  label,
  open,
  onToggle,
  children,
}: {
  id: string;
  label: string;
  open: string | null;
  onToggle: (id: string) => void;
  children: React.ReactNode;
}) {
  const isOpen = open === id;
  return (
    <div className="mt-2 rounded-lg bg-slate-900/60 ring-1 ring-white/10">
      <button
        onClick={() => onToggle(id)}
        className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-100 hover:bg-slate-800/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
        aria-expanded={isOpen}
        aria-controls={`${id}-panel`}
      >
        <span className="font-medium">{label}</span>
        <Caret open={isOpen} />
      </button>
      <div
        id={`${id}-panel`}
        className={`grid overflow-hidden transition-[grid-template-rows] duration-200 ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <div className="px-2 pb-2 pt-0">
            <ul className="space-y-1">{children}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileSublink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className="block rounded-md px-4 py-2 text-sm text-slate-300 hover:bg-slate-800/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
      >
        {children}
      </Link>
    </li>
  );
}
