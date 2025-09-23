// components/sections/BlogDentist.tsx
"use client";

import Image from "next/image";

type Post = {
  id: string;
  title: string;
  date: string; // preformatted, e.g. "25 Nov 2022"
  author: string;
  imageSrc: string;
  href?: string;
};

type Props = {
  eyebrow?: string;
  heading?: string;
  posts?: Post[];
  viewAllHref?: string;
};

export default function Blog({
  eyebrow = "Articles & Tips",
  heading = "Latest News & Blog",
  posts = DEMO_POSTS,
  viewAllHref = "/blog",
}: Props) {
  return (
    <section className="relative overflow-hidden bg-[#F7FBFF]">
      {/* ghost word */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-4 -z-10 -translate-x-1/2 select-none text-[14vw] font-extrabold leading-none tracking-tighter text-slate-900/[0.05]"
      >
        News • Blog
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        {/* header */}
        <div className="text-center">
          <div className="text-sm font-semibold text-rose-500">{eyebrow}</div>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {heading}
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded bg-emerald-400" />
        </div>

        {/* cards */}
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {posts.slice(0, 3).map((p) => (
            <article
              key={p.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-[0_30px_80px_-30px_rgba(2,6,23,0.15)] ring-1 ring-slate-200"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={p.imageSrc}
                  alt={p.title}
                  fill
                  sizes="(min-width:1024px) 33vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  priority={false}
                />
              </div>

              <div className="p-5 sm:p-6">
                {/* meta row */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600">
                  <span className="inline-flex items-center gap-1">
                    <CalendarIcon className="h-4 w-4 text-slate-500" />
                    {p.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <UserIcon className="h-4 w-4 text-slate-500" />
                    {p.author}
                  </span>
                </div>

                {/* title */}
                <h3 className="mt-3 text-lg font-extrabold leading-snug text-slate-900">
                  <a href={p.href ?? "#"} className="hover:underline">
                    {p.title}
                  </a>
                </h3>

                {/* read more */}
                <a
                  href={p.href ?? "#"}
                  className="mt-4 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1.5 text-[12px] font-semibold text-emerald-700 ring-1 ring-emerald-200 hover:bg-emerald-100"
                >
                  Read More
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* optional view-all */}
        <div className="mt-10 text-center">
          <a
            href={viewAllHref}
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 ring-1 ring-slate-200 hover:bg-slate-50"
          >
            View All Posts
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ----------------- icons ----------------- */
function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M7 2h2v2h6V2h2v2h2a2 2 0 012 2v2H3V6a2 2 0 012-2h2V2zM3 10h18v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10zm3 3h3v3H6v-3z" />
    </svg>
  );
}
function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.4 0-8 2.2-8 5v1h16v-1c0-2.8-3.6-5-8-5z" />
    </svg>
  );
}
function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13 5l7 7-7 7v-4H4v-6h9V5z" />
    </svg>
  );
}

/* ----------------- demo data ----------------- */
const DEMO_POSTS: Post[] = [
  {
    id: "1",
    title: "Everything You Should Know Before Your First Cleaning",
    date: "25 Nov 2022",
    author: "Nicolas",
    imageSrc: "/images/blog/1.jpg",
    href: "/blog/first-cleaning",
  },
  {
    id: "2",
    title: "Web Frameworks to Power Patient Portals",
    date: "25 Nov 2022",
    author: "Nicolas",
    imageSrc: "/images/blog/2.jpg",
    href: "/blog/patient-portals",
  },
  {
    id: "3",
    title: "Designing Better Links for Appointment Emails",
    date: "25 Nov 2022",
    author: "Nicolas",
    imageSrc: "/images/blog/3.jpg",
    href: "/blog/appointment-email-ux",
  },
];
