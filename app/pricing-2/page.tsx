// app/pricing/page.tsx
"use client";

import Link from "next/link";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.25),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 pt-24 pb-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Simple, transparent pricing
            </h1>
            <p className="mt-4 text-slate-300">
              Choose a plan that fits your stage. Upgrade or downgrade anytime.
            </p>
          </div>

          {/* Toggle (monthly/annual) – non-functional placeholder, wire up later */}
          <div className="mt-8 inline-flex items-center rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur">
            <button className="rounded-full px-4 py-1.5 text-sm font-medium text-white/80 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">
              Monthly
            </button>
            <span className="mx-1 h-6 w-px bg-white/10" />
            <button className="rounded-full bg-blue-600 px-4 py-1.5 text-sm font-semibold shadow hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">
              Annual <span className="ml-1 text-white/80">(save 20%)</span>
            </button>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Starter */}
          <PlanCard
            name="Starter"
            price="$29"
            period="/mo"
            blurb="Perfect for personal sites and MVPs."
            ctaLabel="Start Free"
            ctaHref="/signup?plan=starter"
            features={[
              "1 website",
              "5 pages",
              "Basic hosting",
              "Email support",
              "Analytics lite",
            ]}
          />

          {/* Growth (featured) */}
          <PlanCard
            featured
            name="Growth"
            price="$79"
            period="/mo"
            blurb="For small businesses ready to scale."
            ctaLabel="Choose Growth"
            ctaHref="/signup?plan=growth"
            features={[
              "3 websites",
              "Unlimited pages",
              "Priority hosting",
              "Stripe integration",
              "Email & chat support",
              "Advanced analytics",
            ]}
          />

          {/* Pro */}
          <PlanCard
            name="Pro"
            price="$149"
            period="/mo"
            blurb="Agencies & serious operators."
            ctaLabel="Go Pro"
            ctaHref="/signup?plan=pro"
            features={[
              "10 websites",
              "Unlimited pages",
              "Edge/CDN hosting",
              "Stripe + webhooks",
              "SLA & premium support",
              "Custom components",
            ]}
          />
        </div>
      </section>

      {/* Plan Pricing Details */}
      {/* <Pricing /> */}

      {/* Comparison */}
      {/* <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-2xl font-semibold">Compare plans</h2>
        <div className="mt-6 overflow-x-auto rounded-xl border border-white/10 bg-white/5">
          <table className="min-w-[800px] w-full text-left">
            <thead className="bg-white/5 text-sm text-slate-300">
              <tr>
                <th className="px-4 py-3 font-medium">Feature</th>
                <th className="px-4 py-3 font-medium">Starter</th>
                <th className="px-4 py-3 font-medium">Growth</th>
                <th className="px-4 py-3 font-medium">Pro</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-sm">
              {[
                ["Websites included", "1", "3", "10"],
                ["Pages", "5", "Unlimited", "Unlimited"],
                ["Hosting", "Basic", "Priority", "Edge/CDN"],
                ["Payments (Stripe)", "—", "Yes", "Yes + Webhooks"],
                ["Support", "Email", "Email & chat", "Premium + SLA"],
                ["Analytics", "Lite", "Advanced", "Advanced + export"],
              ].map((row, i) => (
                <tr key={i} className="hover:bg-white/5">
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-3">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-slate-400">
          Need something custom?{" "}
          <Link
            href="/contactus"
            className="text-blue-400 hover:text-blue-300 underline underline-offset-4"
          >
            Contact us
          </Link>
          .
        </p>
      </section> */}

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-4 pb-20 pt-10">
        <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <FAQ
            q="Can I change plans later?"
            a="Yep. Upgrade or downgrade anytime from your dashboard; prorations apply automatically."
          />
          <FAQ
            q="Is there a setup fee?"
            a="No setup fees. You can start on Starter and move up when you’re ready."
          />
          <FAQ
            q="Do you support Stripe?"
            a="Yes — Growth and Pro include Stripe integration; Pro adds webhook support."
          />
          <FAQ
            q="Do you offer refunds?"
            a="If something’s not right, reach out within 14 days and we’ll make it right."
          />
        </div>
      </section>

      {/* CTA footer */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 pb-24">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/10 bg-gradient-to-r from-blue-600 to-blue-500 p-6 shadow-lg md:flex-row">
            <div>
              <h3 className="text-2xl font-semibold">Ready to get started?</h3>
              <p className="text-blue-100">
                Launch in days, not weeks. Cancel anytime.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/signup?plan=growth"
                className="rounded-full bg-white px-5 py-2.5 font-semibold text-blue-700 transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white"
              >
                Start with Growth
              </Link>
              <Link
                href="/contactus"
                className="rounded-full border border-white/70 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/60"
              >
                Talk to us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- Components ---------- */

function PlanCard({
  name,
  price,
  period,
  blurb,
  features,
  ctaLabel,
  ctaHref,
  featured = false,
}: {
  name: string;
  price: string;
  period: string;
  blurb: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
}) {
  return (
    <div
      className={[
        "relative rounded-2xl border bg-white/5 p-6 backdrop-blur transition",
        featured
          ? "border-blue-500/60 ring-1 ring-blue-500/50 shadow-[0_10px_40px_-10px_rgba(59,130,246,0.5)]"
          : "border-white/10 hover:border-white/20",
      ].join(" ")}
    >
      {featured && (
        <span className="absolute -top-3 right-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold">
          Most Popular
        </span>
      )}

      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="mt-1 text-sm text-slate-300">{blurb}</p>

      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-slate-400">{period}</span>
      </div>

      <ul className="mt-6 space-y-2 text-sm text-slate-200">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            {f}
          </li>
        ))}
      </ul>

      <Link
        href={ctaHref}
        className={[
          "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold focus:outline-none focus:ring-2",
          featured
            ? "bg-blue-600 text-white hover:bg-blue-500 focus:ring-blue-300"
            : "border border-white/30 text-white hover:bg-white/10 focus:ring-white/40",
        ].join(" ")}
      >
        {ctaLabel} <span className="text-lg leading-none">→</span>
      </Link>
    </div>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
      <h3 className="font-medium">{q}</h3>
      <p className="mt-2 text-sm text-slate-300">{a}</p>
    </div>
  );
}
