"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Feedback", href: "#feedback" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /* --------------------------------
     Scroll detection
  -------------------------------- */
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setScrolled(scrollY > 40);

      let currentSection = "home";

      links.forEach((link) => {
        const section = document.querySelector(link.href);

        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 150) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* --------------------------------
     Prevent background scrolling
     when mobile menu is open
  -------------------------------- */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* --------------------------------
     Close mobile menu
  -------------------------------- */
  const handleNavigation = () => {
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-22 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 shadow-[0_2px_20px_rgba(0,0,0,0.06)] backdrop-blur-md"
          : "bg-linear-to-b from-black/40 to-transparent"
      }`}
    >
      {/* =================================
          NAVBAR CONTAINER
      ================================= */}

      <div className="mx-auto flex h-full max-w-[1600px] items-center justify-between px-6 sm:px-8 md:px-10 lg:px-14">

        {/* =================================
            LOGO
        ================================= */}

        <Link
          href="#home"
          onClick={handleNavigation}
          aria-label="Sonal Clicks - Home"
          className="relative flex h-13 w-36.25 items-center sm:w-41.25"
        >
          <Image
            src={scrolled ? "/images/logo2.png" : "/images/logo.png"}
            alt="Sonal Clicks"
            fill
            priority
            sizes="(max-width: 640px) 145px, 165px"
            className="object-contain"
          />
        </Link>

        {/* =================================
            DESKTOP NAVIGATION
        ================================= */}

        <nav
          className="hidden lg:block"
          aria-label="Main navigation"
        >
          <ul className="flex items-center gap-8 xl:gap-9">
            {links.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`group relative block pb-1.5 text-[13px] font-medium uppercase tracking-[0.15em] transition-colors duration-300 ${
                      scrolled
                        ? "text-neutral-700 hover:text-neutral-950"
                        : "text-white/85 hover:text-white"
                    }`}
                  >
                    {link.label}

                    {/* Underline */}
                    <span
                      className={`absolute bottom-0 left-0 h-px transition-all duration-300 ${
                        isActive
                          ? scrolled
                            ? "w-full bg-neutral-900"
                            : "w-full bg-white"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* =================================
            DESKTOP CTA
        ================================= */}

        <a
          href="#contact"
          className={`group hidden items-center gap-2.5 rounded-full border px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300 lg:inline-flex ${
            scrolled
              ? "border-neutral-900 bg-neutral-900 text-white hover:bg-neutral-700"
              : "border-white/70 bg-transparent text-white hover:bg-white hover:text-neutral-900"
          }`}
        >
          LET&apos;S TALK

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>

        {/* =================================
            MOBILE MENU BUTTON
        ================================= */}

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative z-60 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-px w-6 transition-all duration-300 ${
              open
                ? "translate-y-[3.5px] rotate-45 bg-white"
                : scrolled
                  ? "bg-neutral-900"
                  : "bg-white"
            }`}
          />

          <span
            className={`h-px w-6 transition-all duration-300 ${
              open
                ? "translate-y-[3.5px] -rotate-45 bg-white"
                : scrolled
                  ? "bg-neutral-900"
                  : "bg-white"
            }`}
          />
        </button>
      </div>

      {/* =================================
          MOBILE / TABLET MENU
      ================================= */}

      <div
        className={`fixed inset-0 z-50 flex flex-col justify-center bg-neutral-950 px-8 transition-all duration-500 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <nav aria-label="Mobile navigation">
          <ul className="flex flex-col gap-6">
            {links.map((link, index) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <li
                  key={link.href}
                  className={`transition-all duration-500 ${
                    open
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: open
                      ? `${index * 60 + 100}ms`
                      : "0ms",
                  }}
                >
                  <a
                    href={link.href}
                    onClick={handleNavigation}
                    className={`block text-3xl font-medium tracking-wide transition-colors sm:text-4xl ${
                      isActive
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                    }`}
                    style={{
                      fontFamily: "var(--font-playfair)",
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile CTA */}

        <a
          href="#contact"
          onClick={handleNavigation}
          className={`mt-10 inline-flex w-fit items-center gap-2.5 rounded-full border border-white/70 px-6 py-3 text-xs font-semibold tracking-[0.15em] text-white transition-all duration-500 hover:bg-white hover:text-neutral-900 ${
            open
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
          style={{
            transitionDelay: open ? "500ms" : "0ms",
          }}
        >
          LET&apos;S TALK
          <span>→</span>
        </a>

        {/* Mobile brand detail */}

        <div
          className={`absolute bottom-8 left-8 text-[9px] tracking-[0.3em] text-white/40 transition-opacity duration-700 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        >
          SONAL CLICKS · STORIES IN MOTION
        </div>
      </div>
    </header>
  );
}