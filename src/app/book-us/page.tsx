import type { Metadata } from "next";
import BookUsForm from "@/components/BookUsForm";

export const metadata: Metadata = {
  title: "Book Us | Sonal Clicks",
  description:
    "Get in touch to book your wedding, maternity, baby, or portrait photography session.",
};

const address = "GANDHARV EXCELLENCE, MIDC, Moshi, Pimpri-Chinchwad, MH-412105";

export default function BookUsPage() {
  return (
    <main className="bg-[#f2efe8] text-[#1c1a17]">
      <div className="mx-auto max-w-[1600px] px-6 pb-24 pt-32 sm:px-10 sm:pt-36 md:px-12 lg:px-16 lg:pt-44">
        {/* ==================================================
            HEADER
        ================================================== */}

        <div className="mb-6 flex items-center gap-3">
          <span className="text-[10px] font-medium tracking-[0.35em] text-[#6b6459]">
            BOOK US
          </span>
          <span className="h-px w-12 bg-[#6b6459]/50" />
        </div>

        <h1 className="max-w-3xl font-serif text-[13vw] leading-[0.85] tracking-[-0.03em] sm:text-6xl md:text-7xl lg:text-[90px]">
          Let&apos;s Create
          <br />
          <span className="italic">Something Timeless.</span>
        </h1>

        {/* ==================================================
            CONTACT INFO + FORM
        ================================================== */}

        <div className="mt-16 grid grid-cols-1 gap-14 border-t border-[#d8d2c4] pt-12 lg:mt-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:pt-16">
          {/* ---------------- contact info ---------------- */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <h2 className="font-serif text-2xl sm:text-3xl">Get in Touch</h2>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#6b6459]">
              Tell us a little about your session and we&apos;ll follow up to
              lock in the date, location, and details.
            </p>

            <div className="mt-10 space-y-7">
              {/* Address */}
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#1c1a17]/25">
                  <LocationIcon />
                </span>
                <div>
                  <p className="text-[10px] tracking-[0.25em] text-[#6b6459]">
                    ADDRESS
                  </p>
                  <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-[#1c1a17]">
                    {address}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#1c1a17]/25">
                  <MailIcon />
                </span>
                <div>
                  <p className="text-[10px] tracking-[0.25em] text-[#6b6459]">
                    E-MAIL
                  </p>
                  <a
                    href="mailto:info@sonalclicks.com"
                    className="mt-1.5 block text-sm text-[#1c1a17] transition-colors hover:text-[#6b6459]"
                  >
                    info@sonalclicks.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#1c1a17]/25">
                  <PhoneIcon />
                </span>
                <div>
                  <p className="text-[10px] tracking-[0.25em] text-[#6b6459]">
                    CALL ME
                  </p>
                  <a
                    href="tel:+919158442978"
                    className="mt-1.5 block text-sm text-[#1c1a17] transition-colors hover:text-[#6b6459]"
                  >
                    +91 91584 42978
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------- form ---------------- */}
          <div>
            <BookUsForm />
          </div>
        </div>

        {/* ==================================================
            MAP
        ================================================== */}

        <div className="mt-20 border-t border-[#d8d2c4] pt-12 lg:mt-24 lg:pt-16">
          <h2 className="font-serif text-2xl sm:text-3xl">Find Us</h2>

          <div className="mt-8 aspect-[16/9] w-full overflow-hidden rounded-sm border border-[#d8d2c4] sm:aspect-[21/9]">
            <iframe
              title="Sonal Clicks studio location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

/* =========================================================
   ICONS — same stroke-based line style as Footer.tsx
========================================================= */

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.5 21 3 13.5 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}