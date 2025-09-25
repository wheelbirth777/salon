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

/** TREATMENTS (formerly "Solutions") */
const SOLUTIONS: LinkItem[] = [
  {
    title: "All Treatments",
    href: "/treatments",
    description: "Browse the full salon & spa menu.",
  },
  { title: "Haircut & Styling", href: "/treatments/haircut-styling" },
  { title: "Color & Highlights", href: "/treatments/color-highlights" },
  { title: "Keratin & Smoothing", href: "/treatments/keratin-smoothing" },
  { title: "Manicure & Pedicure", href: "/treatments/nails" },
  { title: "Facials & Skin Care", href: "/treatments/facials" },
  { title: "Massage Therapy", href: "/treatments/massage" },
  { title: "Waxing & Threading", href: "/treatments/waxing-threading" },
  { title: "Lashes & Brows", href: "/treatments/lashes-brows" },
  { title: "Makeup & Bridal", href: "/treatments/makeup-bridal" },
  { title: "Men’s Grooming", href: "/treatments/mens" },
  { title: "Spa Packages", href: "/treatments/packages" },
];

/** OPERATIONS & ADD-ONS (formerly generic services) */
const SERVICES: LinkGroup[] = [
  {
    heading: "Booking & Operations",
    items: [
      { title: "Online Booking", href: "/services/booking" },
      { title: "Staff Scheduling", href: "/services/scheduling" },
      { title: "Client Profiles", href: "/services/clients" },
      { title: "Memberships & Packages", href: "/services/memberships" },
      { title: "Gift Cards & Vouchers", href: "/services/gift-cards" },
      { title: "Reminders & Waitlist", href: "/services/reminders" },
    ],
  },
  {
    heading: "Retail & POS",
    items: [
      { title: "Product Catalog", href: "/services/retail" },
      { title: "Point of Sale", href: "/services/pos" },
      { title: "Inventory Tracking", href: "/services/inventory" },
      { title: "Coupons & Promotions", href: "/services/promotions" },
    ],
  },
  {
    heading: "Marketing & Growth",
    items: [
      { title: "Email & SMS", href: "/services/marketing" },
      { title: "Loyalty & Rewards", href: "/services/loyalty" },
      { title: "Reviews & Referrals", href: "/services/reviews" },
      { title: "Social & Instagram", href: "/services/social" },
    ],
  },
  {
    heading: "Website & Branding",
    items: [
      { title: "Theme Customization", href: "/services/theme" },
      { title: "Gallery & Before/After", href: "/services/gallery" },
      { title: "Menu & Pricing Pages", href: "/services/menu-pricing" },
      { title: "SEO Basics", href: "/services/seo" },
    ],
  },
];

/** SHOWCASE (formerly Work) */
const WORK: LinkItem[] = [
  { title: "Gallery", href: "/gallery" },
  { title: "Makeovers (Before & After)", href: "/gallery/before-after" },
  { title: "Client Stories", href: "/stories" },
  { title: "Reviews & Testimonials", href: "/reviews" },
];

/** HELP & INFO (formerly Resources) */
const RESOURCES: LinkItem[] = [
  { title: "Style & Skin Blog", href: "/blog" },
  { title: "Care Guides (Aftercare)", href: "/guides" },
  { title: "Policies & FAQs", href: "/policies" },
  { title: "Gift Card Balance", href: "/gift-cards/balance" },
];

/** ABOUT (Company) */
const COMPANY: LinkItem[] = [
  { title: "About the Spa", href: "/about" },
  { title: "Our Team", href: "/team" },
  { title: "Careers", href: "/careers" },
  { title: "Contact & Location", href: "/contact" },
  { title: "Hours & Policies", href: "/hours" },
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

        {/* Treatments (renamed from Solutions) */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className={triggerNoBgWhiteText}>
            Treatments
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
              <div className="flex flex-col justify-between rounded-md border border-white/10 bg-gradient-to-br from-pink-600 to-rose-500 p-4">
                <div>
                  <div className="text-xs text-pink-100">New Guests</div>
                  <div className="mt-1 text-base font-semibold text-white">
                    Explore Our Service Menu
                  </div>
                  <p className="mt-1 text-xs text-pink-50/90">
                    View packages, add-ons, and signature spa experiences.
                  </p>
                </div>
                <Link
                  href="/treatments"
                  className="mt-3 inline-flex items-center justify-center rounded-md bg-orange-500 px-3 py-2 text-xs font-semibold text-white hover:bg-orange-400"
                >
                  See Menu →
                </Link>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Services (ops, marketing, website, etc.) */}
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
                  href="/contact?type=quote"
                  className="mt-3 inline-flex items-center justify-center rounded-md bg-orange-500 px-3 py-2 text-xs font-semibold text-white hover:bg-orange-400"
                >
                  Get a Quote →
                </Link>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Showcase (was Work) */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className={triggerNoBgWhiteText}>
            Showcase
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
              href="/pricing"
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
