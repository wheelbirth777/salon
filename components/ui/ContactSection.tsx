"use client";

import { FormEvent } from "react";

type ContactItem = {
  icon?: React.ReactNode;
  title: string;
  text: string;
};

interface Props {
  headingLeft?: string;
  blurb?: string;
  items?: ContactItem[];
  headingRight?: string;
  /** Where to POST the form */
  apiEndpoint?: string;
  /** Google Maps embed src */
  mapSrc?: string;
}

export default function ContactSection({
  headingLeft = "Get in touch with us",
  blurb = "Lorem Ipsum is simply free text available dolor sit amet consectetur noted adipiscing elit sed do eiusmod tempor incididunt simply dolore magna.",
  items = [
    { title: "Have any questions?", text: "(000) 123 567 889" },
    { title: "Write email", text: "info@demomail.com" },
    { title: "Visit anytime", text: "255 Sheet, New City, NY" },
  ],
  headingRight = "Feel free to write",
  apiEndpoint = "/api/contact",
  mapSrc = "https://www.google.com/maps/embed?pb=...replace_me...",
}: Props) {
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());

    const res = await fetch(apiEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      e.currentTarget.reset();
      alert("Message sent! We’ll get back to you soon.");
    } else {
      const { error } = await res
        .json()
        .catch(() => ({ error: "Unknown error" }));
      alert(`Something went wrong: ${error}`);
    }
  }

  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: info */}
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 uppercase tracking-wide">
              {headingLeft}
            </h2>
            <p className="mt-4 text-slate-600 leading-7">{blurb}</p>

            <ul className="mt-8 space-y-6">
              {items.map((it, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded bg-amber-600/90 grid place-items-center text-white shrink-0">
                    {it.icon ?? <span className="text-lg">✦</span>}
                  </div>
                  <div>
                    <div className="uppercase tracking-wide text-[13px] text-slate-800">
                      {it.title}
                    </div>
                    <div className="text-slate-600">{it.text}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form */}
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 uppercase tracking-wide">
              {headingRight}
            </h2>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  name="name"
                  placeholder="Your Name"
                  required
                  className="h-12 w-full rounded border border-slate-200 px-4 outline-none focus:border-amber-600"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  required
                  className="h-12 w-full rounded border border-slate-200 px-4 outline-none focus:border-amber-600"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  name="phone"
                  placeholder="Phone"
                  className="h-12 w-full rounded border border-slate-200 px-4 outline-none focus:border-amber-600"
                />
                <input
                  name="subject"
                  placeholder="Subject"
                  className="h-12 w-full rounded border border-slate-200 px-4 outline-none focus:border-amber-600"
                />
              </div>

              <textarea
                name="message"
                placeholder="Write your Message"
                rows={5}
                required
                className="w-full rounded border border-slate-200 p-4 outline-none focus:border-amber-600"
              />

              <button
                type="submit"
                className="inline-flex items-center rounded bg-amber-700 px-6 py-3 text-sm font-semibold tracking-wide text-white hover:bg-amber-800"
              >
                Send a Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="w-full">
        <iframe
          src={mapSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[420px] w-full border-0"
          aria-label="Map"
        />
      </div>
    </section>
  );
}
