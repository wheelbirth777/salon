// components/MegaMenu/MegaMenu.tsx
"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

/* ---------------- Data ---------------- */
type LinkItem = { title: string; href: string; description?: string };
type LinkGroup = { heading: string; items: LinkItem[] };

const SOLUTIONS: LinkItem[] = [
  {
    title: "All Launch-Ready Websites",
    href: "/launch-ready",
    description: "Browse every industry starter we offer.",
  },
  { title: "Salon", href: "/solutions/salon" },
  { title: "Law Firm", href: "/solutions/law-firm" },
  { title: "Dentist", href: "/solutions/dentist" },
  { title: "HVAC / AC Repair", href: "/solutions/hvac" },
  { title: "Restaurant", href: "/solutions/restaurant" },
  { title: "Real Estate", href: "/solutions/real-estate" },
  { title: "Fitness / Gym", href: "/solutions/fitness" },
  { title: "E-commerce", href: "/solutions/ecommerce" },
  { title: "Nonprofit", href: "/solutions/nonprofit" },
  { title: "Portfolio / Creator", href: "/solutions/portfolio" },
];

const SERVICES: LinkGroup[] = [
  {
    heading: "Design",
    items: [
      { title: "UI/UX Design", href: "/services/ui-ux" },
      { title: "Brand & Visual Systems", href: "/services/brand" },
    ],
  },
  {
    heading: "Development",
    items: [
      { title: "SPA / Next.js Apps", href: "/services/spa-nextjs" },
      { title: "API Integrations", href: "/services/api-integrations" },
      {
        title: "CMS Migrations (WordPress → SPA)",
        href: "/services/migrations",
      },
    ],
  },
  {
    heading: "Optimization & Care",
    items: [
      { title: "Performance & CWV", href: "/services/performance" },
      { title: "Technical SEO", href: "/services/seo" },
      { title: "Accessibility (WCAG)", href: "/services/a11y" },
      { title: "Maintenance & Support", href: "/services/maintenance" },
      { title: "Hosting & DevOps", href: "/services/hosting" },
    ],
  },
];

const WORK: LinkItem[] = [
  { title: "Case Studies", href: "/work" },
  { title: "Projects", href: "/projects" },
  { title: "Before & After (WP → SPA)", href: "/work/before-after" },
  { title: "Testimonials", href: "/work/testimonials" },
];

const RESOURCES: LinkItem[] = [
  { title: "Blog", href: "/blog" },
  { title: "Guides & Playbooks", href: "/guides" },
  { title: "FAQs", href: "/faq" },
  { title: "Changelog", href: "/changelog" },
];

const COMPANY: LinkItem[] = [
  { title: "About Us", href: "/aboutus" },
  { title: "Contact", href: "/contactus" },
];

/* ---------------- Component ---------------- */
export function MegaMenu() {
  // No bg + lock text color to white for hover/open/focus/active
  const triggerNoBgWhiteText =
    "bg-transparent px-3 py-2 rounded-md text-white " +
    "hover:text-white focus:text-white active:text-white " +
    "data-[state=open]:text-white data-[active]:text-white " +
    "hover:!bg-transparent focus:!bg-transparent active:!bg-transparent " +
    "data-[state=open]:!bg-transparent data-[active]:!bg-transparent " +
    "[&[data-state=open]]:!bg-transparent " +
    "focus-visible:ring-2 focus-visible:ring-blue-400";

  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="bg-transparent text-white px-4 py-2 rounded-lg">
        {/* Home (link, not trigger) */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/"
              className="px-3 py-2 rounded-md text-white hover:text-white hover:!bg-transparent focus:!bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              Home
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Solutions */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className={triggerNoBgWhiteText}>
            Solutions
          </NavigationMenuTrigger>
          <NavigationMenuContent className="rounded-md border border-white/10 bg-gradient-to-b from-slate-950 to-slate-900 text-slate-100 shadow-2xl backdrop-blur">
            <div className="grid gap-3 p-4 md:w-[640px] lg:w-[760px] md:grid-cols-3">
              <ul className="space-y-1">
                {SOLUTIONS.slice(0, 6).map((it) => (
                  <MenuItem key={it.title} item={it} />
                ))}
              </ul>
              <ul className="space-y-1">
                {SOLUTIONS.slice(6, 12).map((it) => (
                  <MenuItem key={it.title} item={it} />
                ))}
              </ul>
              <div className="flex flex-col justify-between rounded-md border border-white/10 bg-gradient-to-br from-blue-700 to-blue-600 p-4">
                <div>
                  <div className="text-xs text-blue-100">Live</div>
                  <div className="mt-1 text-base font-semibold text-white">
                    See Live Demos
                  </div>
                  <p className="mt-1 text-xs text-blue-100/90">
                    Explore interactive previews of our launch-ready websites.
                  </p>
                </div>
                <Link
                  href="/demos"
                  className="mt-3 inline-flex items-center justify-center rounded-md bg-orange-500 px-3 py-2 text-xs font-semibold text-white hover:bg-orange-400"
                >
                  View Demos →
                </Link>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Services */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className={triggerNoBgWhiteText}>
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent className="rounded-md border border-white/10 bg-gradient-to-b from-slate-950 to-slate-900 text-slate-100 shadow-2xl backdrop-blur">
            <div className="grid gap-5 p-4 md:w-[760px] md:grid-cols-4">
              {SERVICES.map((group) => (
                <div key={group.heading}>
                  <h4 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-blue-200">
                    {group.heading}
                  </h4>
                  <ul className="space-y-1">
                    {group.items.map((it) => (
                      <MenuItem key={it.title} item={it} />
                    ))}
                  </ul>
                </div>
              ))}
              <div className="flex flex-col justify-between rounded-md border border-white/10 bg-white/[.06] p-4">
                <div>
                  <div className="text-xs text-blue-200">Need a quote?</div>
                  <div className="mt-1 text-base font-semibold text-slate-100">
                    Request a Proposal
                  </div>
                  <p className="mt-1 text-xs text-slate-300">
                    Tell us your goals and we’ll recommend the right plan.
                  </p>
                </div>
                <Link
                  href="/contactus?type=quote"
                  className="mt-3 inline-flex items-center justify-center rounded-md bg-orange-500 px-3 py-2 text-xs font-semibold text-white hover:bg-orange-400"
                >
                  Get a Quote →
                </Link>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Work */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className={triggerNoBgWhiteText}>
            Work
          </NavigationMenuTrigger>
          <NavigationMenuContent className="rounded-md border border-white/10 bg-gradient-to-b from-slate-950 to-slate-900 text-slate-100 shadow-2xl backdrop-blur">
            <ul className="grid w-[320px] gap-1.5 p-4">
              {WORK.map((it) => (
                <MenuItem key={it.title} item={it} />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Pricing (link) */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/pricing-2"
              className="px-3 py-2 rounded-md text-white hover:text-white hover:!bg-transparent focus:!bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              Pricing
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Resources */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className={triggerNoBgWhiteText}>
            Resources
          </NavigationMenuTrigger>
          <NavigationMenuContent className="rounded-md border border-white/10 bg-gradient-to-b from-slate-950 to-slate-900 text-slate-100 shadow-2xl backdrop-blur">
            <ul className="grid w-[360px] gap-2 p-4">
              {RESOURCES.map((it) => (
                <MenuItem key={it.title} item={it} />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Company */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className={triggerNoBgWhiteText}>
            Company
          </NavigationMenuTrigger>
          <NavigationMenuContent className="rounded-md border border-white/10 bg-gradient-to-b from-slate-950 to-slate-900 text-slate-100 shadow-2xl backdrop-blur">
            <ul className="grid w-[300px] gap-2 p-4">
              {COMPANY.map((it) => (
                <MenuItem key={it.title} item={it} />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

/* ---------------- Building blocks ---------------- */

function MenuItem({ item }: { item: LinkItem }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={item.href}
          className="block rounded-md p-3 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
        >
          <div className="text-sm font-medium text-slate-100 hover:text-orange-300">
            {item.title}
          </div>
          {item.description && (
            <p className="mt-1 text-xs leading-5 text-slate-300">
              {item.description}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default MegaMenu;
