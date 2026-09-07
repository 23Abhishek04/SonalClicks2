"use client";

import Image from "next/image";
import {
  m,
  useReducedMotion,
  type Variants,
} from "framer-motion";

const workLinks = [
  { label: "Weddings", href: "#services" },
  { label: "Pre-Weddings", href: "#services" },
  { label: "Maternity", href: "#services" },
  { label: "Baby Stories", href: "#services" },
  { label: "Portraits & Fashion", href: "#services" },
  { label: "Films", href: "#portfolio" },
];

const studioLinks = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "The Experience", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog / Journal", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const reduceMotion = useReducedMotion();

  /*
   * Explicitly typing the variants is important.
   * Without `Variants`, TypeScript can infer `ease`
   * as a generic string and Framer Motion rejects it.
   */
  const reveal: Variants = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 25,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#1c1a17] text-[#f2efe8]"
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}

      <div className="absolute inset-0">
        <Image
          src="/images/footer.webp"
          alt=""
          fill
          priority={false}
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#141310]/80" />

        <div className="absolute inset-0 bg-linear-to-b from-[#141310]/40 via-[#141310]/70 to-[#141310]/95" />
      </div>

      {/* =====================================================
          TOP STATEMENT STRIP
      ====================================================== */}

      <div className="relative border-b border-white/15 bg-[#f2efe8] text-[#1c1a17]">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-3 px-6 py-7 sm:px-8 md:flex-row md:items-center md:justify-between md:px-12 lg:px-16">
          <m.span
            initial={{ opacity: 0, x: reduceMotion ? 0 : -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              ease: "easeOut",
            }}
            className="font-sans text-[10px] font-medium uppercase tracking-[0.28em] sm:text-xs"
          >
            Your story deserves to be remembered
          </m.span>

          <m.span
            initial={{ opacity: 0, x: reduceMotion ? 0 : 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              delay: reduceMotion ? 0 : 0.1,
              ease: "easeOut",
            }}
            className="font-serif text-xl italic sm:text-2xl"
          >
            Let's create something timeless.
          </m.span>
        </div>
      </div>

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div className="relative mx-auto max-w-[1600px] px-6 pb-10 pt-20 sm:px-8 md:px-12 md:pb-12 md:pt-28 lg:px-16 lg:pt-32">
        {/* =================================================
            BRAND
        ================================================== */}

        <m.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 max-w-xl md:mb-24"
        >
          <div className="relative mb-8 h-14 w-52.5 sm:h-16 sm:w-60">
            <Image
              src="/images/logo.png"
              alt="Sonal Clicks"
              fill
              sizes="240px"
              className="object-contain object-left brightness-0 invert"
            />
          </div>

          <p className="max-w-md font-serif text-2xl leading-tight text-[#f2efe8]/90 sm:text-3xl md:text-4xl">
            Photographs that hold onto the feeling, long after the moment has
            passed.
          </p>
        </m.div>

        {/* =================================================
            LINK GRID
        ================================================== */}

        <div className="grid grid-cols-1 gap-12 border-t border-white/15 pt-12 sm:grid-cols-2 md:grid-cols-4 md:gap-10 lg:gap-16">
          {/* WORK */}

          <m.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <FooterHeading>Work</FooterHeading>

            <div className="space-y-3">
              {workLinks.map((link) => (
                <FooterLink
                  key={link.label}
                  href={link.href}
                >
                  {link.label}
                </FooterLink>
              ))}
            </div>
          </m.div>

          {/* STUDIO */}

          <m.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              delay: reduceMotion ? 0 : 0.08,
              ease: "easeOut",
            }}
          >
            <FooterHeading>Studio</FooterHeading>

            <div className="space-y-3">
              {studioLinks.map((link) => (
                <FooterLink
                  key={link.label}
                  href={link.href}
                >
                  {link.label}
                </FooterLink>
              ))}
            </div>
          </m.div>

          {/* CONNECT */}

          <m.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              delay: reduceMotion ? 0 : 0.16,
              ease: "easeOut",
            }}
          >
            <FooterHeading>Connect</FooterHeading>

            <div className="space-y-4">
              <ContactLink
                href="https://instagram.com"
                icon={<InstagramIcon />}
              >
                Instagram
              </ContactLink>

              <ContactLink
                href="https://wa.me/919999999999"
                icon={<WhatsAppIcon />}
              >
                WhatsApp
              </ContactLink>

              <ContactLink
                href="mailto:hello@sonalclicks.com"
                icon={<MailIcon />}
              >
                hello@sonalclicks.com
              </ContactLink>

              <div className="flex items-start gap-3 text-sm leading-relaxed text-[#f2efe8]/60">
                <LocationIcon />

                <span>
                  Pune, Maharashtra
                  <br />
                  India
                </span>
              </div>
            </div>
          </m.div>

          {/* NEWSLETTER */}

          <m.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              delay: reduceMotion ? 0 : 0.24,
              ease: "easeOut",
            }}
          >
            <FooterHeading>Stay in the Loop</FooterHeading>

            <p className="mb-6 max-w-xs text-sm leading-relaxed text-[#f2efe8]/60">
              Occasional stories, recent work and little pieces of inspiration
              from the studio.
            </p>

            <form
              onSubmit={(event) => event.preventDefault()}
              className="group relative max-w-sm"
            >
              <input
                type="email"
                placeholder="Your email address"
                aria-label="Your email address"
                className="w-full border-b border-white/25 bg-transparent py-3 pr-12 text-sm text-[#f2efe8] outline-none placeholder:text-[#f2efe8]/40 transition-colors focus:border-[#f2efe8]"
              />

              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-0 top-1/2 -translate-y-1/2 text-[#f2efe8]/60 transition-all duration-300 hover:translate-x-1 hover:text-[#f2efe8]"
              >
                →
              </button>
            </form>
          </m.div>
        </div>

        {/* =================================================
            LARGE THANK YOU MESSAGE
        ================================================== */}

        <m.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: reduceMotion ? 0 : 1,
            delay: reduceMotion ? 0 : 0.1,
            ease: "easeOut",
          }}
          className="relative mt-24 overflow-hidden border-y border-white/15 py-16 sm:mt-28 sm:py-20 md:mt-36 md:py-28"
        >
          <p className="mb-5 text-center font-sans text-[9px] uppercase tracking-[0.4em] text-[#f2efe8]/45 sm:text-[10px]">
            Thank you for being here
          </p>

          <h2 className="text-center font-serif text-[15vw] leading-[0.8] tracking-[-0.06em] text-[#f2efe8]/90 sm:text-[13vw] md:text-[11vw]">
            <span className="block">KEEP</span>
            <span className="block italic">THE</span>
            <span className="block">MOMENT</span>
          </h2>

          {/*
            Fixed: this used to be a Framer Motion `animate` loop with
            repeat: Infinity, starting the instant Footer mounted —
            which is on every page load, whether the footer is anywhere
            near the viewport or not. That's a JS-driven animation loop
            running forever in the background for no visible benefit.

            Replaced with a plain CSS animation. Same infinite loop
            exists, but CSS animations are handed off to the compositor
            thread (GPU), not the main JS thread, so they're far cheaper
            to run — and `prefers-reduced-motion` disables it below.
          */}
          <div
            className="heart-pulse absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#f2efe8]/20"
          >
            <HeartIcon />
          </div>
        </m.div>

        {/* =================================================
            BOTTOM BAR
        ================================================== */}

        <m.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            ease: "easeOut",
          }}
          className="flex flex-col gap-6 pt-10 text-[9px] uppercase tracking-[0.25em] text-[#f2efe8]/40 sm:flex-row sm:items-center sm:justify-between sm:text-[10px]"
        >
          <span>
            © {new Date().getFullYear()} Sonal Clicks. All rights reserved.
          </span>

          <span className="font-serif text-sm normal-case tracking-normal text-[#f2efe8]/50">
            Made with love & photographs
          </span>

          <a
            href="#home"
            className="group flex items-center gap-3 transition-colors hover:text-[#f2efe8]"
          >
            Back to top

            <span className="transition-transform duration-300 group-hover:-translate-y-1">
              ↑
            </span>
          </a>
        </m.div>
      </div>

      <style jsx global>{`
        .heart-pulse {
          animation: heartPulse 3s ease-in-out infinite;
        }

        @keyframes heartPulse {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.08);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .heart-pulse {
            animation: none;
          }
        }
      `}</style>
    </footer>
  );
}

/* =========================================================
   FOOTER HEADING
========================================================= */

function FooterHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h3 className="mb-6 font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-[#f2efe8]/45">
      {children}
    </h3>
  );
}

/* =========================================================
   FOOTER LINK
========================================================= */

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="group block w-fit text-sm text-[#f2efe8]/75 transition-colors duration-300 hover:text-[#f2efe8]"
    >
      <span className="relative">
        {children}

        <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#f2efe8] transition-all duration-300 group-hover:w-full" />
      </span>
    </a>
  );
}

/* =========================================================
   CONTACT LINK
========================================================= */

function ContactLink({
  href,
  icon,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="group flex items-center gap-3 text-sm text-[#f2efe8]/70 transition-colors duration-300 hover:text-[#f2efe8]"
    >
      <span className="flex h-5 w-5 items-center justify-center text-[#f2efe8]/50 transition-colors group-hover:text-[#f2efe8]">
        {icon}
      </span>

      <span>{children}</span>
    </a>
  );
}

/* =========================================================
   INSTAGRAM ICON
========================================================= */

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
      />

      <circle
        cx="17.5"
        cy="6.5"
        r="0.75"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

/* =========================================================
   WHATSAPP ICON
========================================================= */

function WhatsAppIcon() {
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
        d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M8.5 9.2c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.5c.1.2.1.4-.1.6l-.5.6c.5 1 1.2 1.7 2.2 2.2l.6-.5c.2-.2.4-.2.6-.1l1.5.7c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.4.2-1.4.3-2.9-.3-1.2-.5-2.3-1.3-3.2-2.3-.9-1-1.5-2.1-1.7-3-.2-.7-.1-1.3.1-1.6Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   MAIL ICON
========================================================= */

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
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
      />

      <path
        d="m4 7 8 6 8-6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   LOCATION ICON
========================================================= */

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="mt-0.5 h-4 w-4 shrink-0"
      aria-hidden="true"
    >
      <path
        d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle
        cx="12"
        cy="10"
        r="2.5"
      />
    </svg>
  );
}

/* =========================================================
   HEART ICON
========================================================= */

function HeartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
      className="h-20 w-20 sm:h-28 sm:w-28 md:h-36 md:w-36"
      aria-hidden="true"
    >
      <path
        d="M20.8 8.9c0 5.5-8.8 11-8.8 11S3.2 14.4 3.2 8.9A4.9 4.9 0 0 1 8.1 4c1.9 0 3.6 1.1 4.5 2.7C13.5 5.1 15.2 4 17.1 4a4.9 4.9 0 0 1 3.7 1.7 4.9 4.9 0 0 1 0 3.2Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}