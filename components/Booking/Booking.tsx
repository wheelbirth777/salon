// components/sections/BookingDentist.tsx
"use client";

import Image from "next/image";
import { useId, useState } from "react";

type Option = { value: string; label: string };

type Props = {
  heading?: string;
  subline?: string;
  imageSrc?: string;
  services?: Option[];
  doctors?: Option[];
  locations?: Option[];
  onSubmit?: (payload: {
    service: string;
    doctor: string;
    location: string;
    datetime: string; // ISO from <input type="datetime-local">
    phone: string;
  }) => Promise<void> | void;
};

export default function Booking({
  heading = "Make An Appointment to Book your Seat",
  subline = "",
  imageSrc = "/images/booking/doctors.png",
  services = DEMO_SERVICES,
  doctors = DEMO_DOCTORS,
  locations = DEMO_LOCATIONS,
  onSubmit,
}: Props) {
  const formId = useId();
  const [service, setService] = useState(services[0]?.value ?? "");
  const [doctor, setDoctor] = useState(doctors[0]?.value ?? "");
  const [location, setLocation] = useState(locations[0]?.value ?? "");
  const [datetime, setDatetime] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      await (onSubmit?.({ service, doctor, location, datetime, phone }) ??
        new Promise((r) => setTimeout(r, 600))); // demo
      alert("Appointment requested! We’ll contact you shortly.");
      setDatetime("");
      setPhone("");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="overflow-hidden rounded-3xl bg-white shadow-[0_40px_120px_-40px_rgba(2,6,23,0.25)] ring-1 ring-black/5">
          <div className="grid items-stretch gap-0 md:grid-cols-12">
            {/* LEFT image */}
            <div className="relative hidden md:col-span-5 md:block">
              <Image
                src={imageSrc}
                alt="Our doctors"
                fill
                className="object-cover"
                sizes="(min-width:1024px) 40vw, 100vw"
                priority={false}
              />
            </div>

            {/* RIGHT form */}
            <div className="md:col-span-7">
              <form onSubmit={submit} className="p-6 sm:p-10">
                <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                  {heading}
                </h2>
                {subline && (
                  <p className="mt-2 text-sm text-slate-600">{subline}</p>
                )}
                <div className="mt-3 h-1 w-28 rounded bg-emerald-400" />

                {/* Fields */}
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  {/* service */}
                  <Field label="Choose Services" withChevron>
                    <select
                      id={`${formId}-service`}
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className={selectClass}
                    >
                      {services.map((s) => (
                        <option key={s.value} value={s.value}>
                          {s.label}
                        </option>
                      ))}
                    </select>
                  </Field>

                  {/* doctor */}
                  <Field label="Select Doctors" withChevron>
                    <select
                      id={`${formId}-doctor`}
                      value={doctor}
                      onChange={(e) => setDoctor(e.target.value)}
                      className={selectClass}
                    >
                      {doctors.map((d) => (
                        <option key={d.value} value={d.value}>
                          {d.label}
                        </option>
                      ))}
                    </select>
                  </Field>

                  {/* date & time */}
                  <Field
                    label="Date & Time"
                    icon={<CalendarIcon className="h-4 w-4" />}
                  >
                    <input
                      id={`${formId}-datetime`}
                      type="datetime-local"
                      value={datetime}
                      onChange={(e) => setDatetime(e.target.value)}
                      required
                      className={inputClass}
                    />
                  </Field>

                  {/* location */}
                  <Field label="Locations" withChevron>
                    <select
                      id={`${formId}-location`}
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className={selectClass}
                    >
                      {locations.map((l) => (
                        <option key={l.value} value={l.value}>
                          {l.label}
                        </option>
                      ))}
                    </select>
                  </Field>

                  {/* phone (full width on md via col-span-2) */}
                  <Field
                    label="Phone Number"
                    withChevron
                    className="md:col-span-2"
                  >
                    <input
                      id={`${formId}-phone`}
                      type="tel"
                      inputMode="tel"
                      placeholder="+1 (555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className={inputClass}
                    />
                  </Field>
                </div>

                {/* Submit */}
                <div className="mt-8">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-3 rounded-full bg-lime-600 px-6 py-3 text-sm font-semibold text-white ring-1 ring-lime-500/50 transition hover:bg-lime-500 disabled:opacity-60"
                  >
                    Appointment
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20">
                      {submitting ? (
                        <Spinner className="h-4 w-4" />
                      ) : (
                        <PlusIcon className="h-4 w-4" />
                      )}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* soft drop shadow like reference */}
          <div className="pointer-events-none mx-6 mb-6 h-24 rounded-3xl bg-slate-900/5 blur-3xl" />
        </div>
      </div>
    </section>
  );
}

/* --------------- field wrapper --------------- */
function Field({
  label,
  children,
  className = "",
  withChevron,
  icon,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
  withChevron?: boolean;
  icon?: React.ReactNode;
}) {
  return (
    <label className={`block ${className}`}>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-base font-semibold text-slate-800">{label}</span>
        {withChevron ? (
          <ChevronDown className="h-4 w-4 text-slate-700" />
        ) : (
          icon ?? null
        )}
      </div>
      {children}
      <div className="mt-2 h-[3px] w-full rounded bg-emerald-400/80" />
    </label>
  );
}

/* --------------- styles --------------- */
const baseInput =
  "w-full rounded-md border-0 bg-transparent px-0 py-2 text-[15px] text-slate-900 placeholder-slate-400 outline-none ring-0 focus:outline-none";
const inputClass =
  baseInput + " border-b border-slate-200 focus:border-slate-300";
const selectClass =
  baseInput + " border-b border-slate-200 focus:border-slate-300";

/* --------------- icons --------------- */
function ChevronDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M7 2h2v2h6V2h2v2h2a2 2 0 012 2v2H3V6a2 2 0 012-2h2V2zM3 10h18v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10zm4 3h3v3H7v-3z" />
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
function Spinner(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      {...props}
      className={`${props.className ?? ""} animate-spin`}
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="white"
        strokeOpacity="0.25"
        strokeWidth="4"
        fill="none"
      />
      <path
        d="M22 12a10 10 0 00-10-10"
        stroke="white"
        strokeWidth="4"
        fill="none"
      />
    </svg>
  );
}

/* --------------- demo options --------------- */
const DEMO_SERVICES: Option[] = [
  { value: "general", label: "General Dentistry" },
  { value: "cosmetic", label: "Cosmetic Dentistry" },
  { value: "whitening", label: "Teeth Whitening" },
  { value: "implants", label: "Dental Implants" },
];

const DEMO_DOCTORS: Option[] = [
  { value: "dr-smith", label: "Dr. Smith" },
  { value: "dr-lee", label: "Dr. Lee" },
  { value: "dr-garcia", label: "Dr. Garcia" },
];

const DEMO_LOCATIONS: Option[] = [
  { value: "downtown", label: "Downtown Clinic" },
  { value: "westside", label: "Westside Clinic" },
  { value: "uptown", label: "Uptown Clinic" },
];
