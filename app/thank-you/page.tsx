export const metadata = {
  title: "Thank You — Next Steps",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  const INTAKE_LINK = "https://forms.gle/your-google-form"; // or your Drive/Dropbox link
  const SUPPORT_EMAIL = "support@yourdomain.com";

  return (
    <main className="min-h-screen px-6 py-16 grid place-items-center bg-gray-50">
      <div className="max-w-2xl w-full bg-white shadow-sm rounded-2xl p-8">
        <h1 className="text-3xl font-bold">
          🎉 Payment received — let’s launch your site
        </h1>

        <p className="mt-4 text-gray-700">
          Thanks for your order! To set up your website, I just need your{" "}
          <strong>images</strong> and <strong>text</strong>. This takes 15–30
          minutes on our side once we have your content.
        </p>

        <ol className="mt-6 space-y-3 list-decimal list-inside text-gray-800">
          <li>
            <strong>Send your content</strong>:
            <ul className="mt-2 ml-5 list-disc space-y-1">
              <li>Logo (SVG or 1000px PNG)</li>
              <li>Hero image (2000×1200px+), 3–8 gallery/service photos</li>
              <li>
                Text for Home, About, Services, Contact (bullets are fine)
              </li>
              <li>
                Your domain (e.g., <code>yourbrand.com</code>)
              </li>
            </ul>
          </li>
          <li>
            <strong>Upload everything here</strong>:{" "}
            <a
              href={INTAKE_LINK}
              target="_blank"
              rel="noreferrer"
              className="underline text-indigo-600"
            >
              Open Upload/Intake
            </a>
          </li>
          <li>
            <strong>Preview</strong>: We’ll put your content into the template
            and send a preview link. One round of edits is included.
          </li>
          <li>
            <strong>Go live</strong>: We’ll give you simple DNS steps to connect
            your domain when you approve the preview.
          </li>
        </ol>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <a
            href={INTAKE_LINK}
            target="_blank"
            rel="noreferrer"
            className="text-center px-4 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700"
          >
            Open Upload/Intake
          </a>
          <a
            href={`mailto:${SUPPORT_EMAIL}?subject=Content%20Questions`}
            className="text-center px-4 py-3 rounded-xl border border-gray-300 font-medium hover:bg-gray-50"
          >
            Email us questions
          </a>
        </div>

        <div className="mt-10 border-t pt-6 text-sm text-gray-600 space-y-2">
          <p>
            <strong>Tips</strong>: JPG/PNG/WebP, under 4MB each. You own the
            rights to content you submit.
          </p>
          <p>
            <strong>Turnaround</strong>: usually within 1–2 business days after
            we receive your content.
          </p>
        </div>
      </div>
    </main>
  );
}
