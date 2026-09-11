"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const services = [
  { label: "Wedding", href: "/services/wedding" },
  { label: "Pre Wedding", href: "/services/pre-wedding" },
  { label: "Baby Shoot", href: "/services/baby-shoot" },
  { label: "Maternity", href: "/services/maternity" },
  { label: "Model Shoot", href: "/services/model-shoot" },
];

const portfolio = [
  { label: "Photos", href: "/portfolio/photos" },
  { label: "Videos", href: "/portfolio/videos" },
];

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobilePortfolioOpen, setMobilePortfolioOpen] = useState(false);

  /* =====================================================
     SCROLL STATE
  ====================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =====================================================
     BODY SCROLL LOCK
  ====================================================== */

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

  /* =====================================================
     CLOSE MENUS ON ROUTE CHANGE
  ====================================================== */

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setPortfolioOpen(false);
    setMobileServicesOpen(false);
    setMobilePortfolioOpen(false);
  }, [pathname]);

  /* =====================================================
     NAVIGATION
  ====================================================== */

  const handleNavigation = () => {
    setOpen(false);
    setServicesOpen(false);
    setPortfolioOpen(false);
    setMobileServicesOpen(false);
    setMobilePortfolioOpen(false);
  };

  const isHome = pathname === "/";
  const isAbout = pathname === "/about";
  const isService = pathname.startsWith("/services/");
  const isPortfolio = pathname.startsWith("/portfolio/");
  const isBookUs = pathname === "/book-us";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-[88px] transition-all duration-500 ${
        scrolled
          ? "bg-white/95 shadow-[0_2px_20px_rgba(0,0,0,0.06)] backdrop-blur-md"
          : "bg-gradient-to-b from-black/40 to-transparent"
      }`}
    >
      {/* =================================================
          NAVBAR CONTAINER
      ================================================== */}

      <div className="mx-auto flex h-full max-w-[1600px] items-center justify-between px-6 sm:px-8 md:px-10 lg:px-14">
        {/* =================================================
            LOGO
        ================================================== */}

        <Link
          href="/"
          onClick={handleNavigation}
          aria-label="Sonal Clicks - Home"
          className="relative flex h-[52px] w-[145px] items-center sm:w-[165px]"
        >
          <Image
            src={scrolled ? "/images/logo2.png" : "/images/logo.png"}
            alt="Sonal Clicks"
            fill
            priority
            sizes="(max-width: 640px) 145px, 165px"
            className="object-contain object-left"
          />
        </Link>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================== */}

        <nav
          className="hidden lg:block"
          aria-label="Main navigation"
        >
          <ul className="flex items-center gap-8 xl:gap-10">

            {/* HOME */}
            <li>
              <Link
                href="/"
                onClick={handleNavigation}
                className={`group relative block pb-1.5 text-[13px] font-medium uppercase tracking-[0.15em] transition-colors duration-300 ${
                  isHome
                    ? scrolled
                      ? "text-neutral-950"
                      : "text-white"
                    : scrolled
                      ? "text-neutral-700 hover:text-neutral-950"
                      : "text-white/85 hover:text-white"
                }`}
              >
                Home

                <span
                  className={`absolute bottom-0 left-0 h-px transition-all duration-300 ${
                    isHome ? "w-full" : "w-0 group-hover:w-full"
                  } ${
                    scrolled ? "bg-neutral-900" : "bg-white"
                  }`}
                />
              </Link>
            </li>

            {/* ABOUT */}
            <li>
              <Link
                href="/about"
                onClick={handleNavigation}
                className={`group relative block pb-1.5 text-[13px] font-medium uppercase tracking-[0.15em] transition-colors duration-300 ${
                  isAbout
                    ? scrolled
                      ? "text-neutral-950"
                      : "text-white"
                    : scrolled
                      ? "text-neutral-700 hover:text-neutral-950"
                      : "text-white/85 hover:text-white"
                }`}
              >
                About

                <span
                  className={`absolute bottom-0 left-0 h-px transition-all duration-300 ${
                    isAbout ? "w-full" : "w-0 group-hover:w-full"
                  } ${
                    scrolled ? "bg-neutral-900" : "bg-white"
                  }`}
                />
              </Link>
            </li>

            {/* =================================================
                SERVICES DROPDOWN
            ================================================== */}

            <li
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesOpen((value) => !value)}
                className={`group relative flex items-center gap-2 pb-1.5 text-[13px] font-medium uppercase tracking-[0.15em] transition-colors duration-300 ${
                  isService
                    ? scrolled
                      ? "text-neutral-950"
                      : "text-white"
                    : scrolled
                      ? "text-neutral-700 hover:text-neutral-950"
                      : "text-white/85 hover:text-white"
                }`}
                aria-expanded={servicesOpen}
              >
                Services

                <span
                  className={`text-[10px] transition-transform duration-300 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                >
                  ↓
                </span>

                <span
                  className={`absolute bottom-0 left-0 h-px transition-all duration-300 ${
                    isService
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  } ${
                    scrolled ? "bg-neutral-900" : "bg-white"
                  }`}
                />
              </button>

              {/* DROPDOWN */}
              <div
                className={`absolute left-1/2 top-full w-[245px] -translate-x-1/2 pt-5 transition-all duration-300 ${
                  servicesOpen
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-2 opacity-0"
                }`}
              >
                <div className="overflow-hidden border border-[#d8d2c4] bg-[#f2efe8] shadow-[0_15px_45px_rgba(0,0,0,0.10)]">
                  <div className="px-5 pb-3 pt-5">
                    <span className="text-[9px] uppercase tracking-[0.25em] text-[#8a8275]">
                      Our Services
                    </span>
                  </div>

                  <div className="pb-3">
                    {services.map((service, index) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={handleNavigation}
                        className={`group flex items-center justify-between px-5 py-3.5 transition-colors hover:bg-white ${
                          pathname === service.href
                            ? "bg-white"
                            : ""
                        }`}
                      >
                        <span className="font-serif text-[15px] text-[#1c1a17]">
                          {service.label}
                        </span>

                        <span className="translate-x-[-4px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                          →
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </li>

            {/* =================================================
                PORTFOLIO DROPDOWN
            ================================================== */}

            <li
              className="relative"
              onMouseEnter={() => setPortfolioOpen(true)}
              onMouseLeave={() => setPortfolioOpen(false)}
            >
              <button
                type="button"
                onClick={() => setPortfolioOpen((value) => !value)}
                className={`group relative flex items-center gap-2 pb-1.5 text-[13px] font-medium uppercase tracking-[0.15em] transition-colors duration-300 ${
                  isPortfolio
                    ? scrolled
                      ? "text-neutral-950"
                      : "text-white"
                    : scrolled
                      ? "text-neutral-700 hover:text-neutral-950"
                      : "text-white/85 hover:text-white"
                }`}
                aria-expanded={portfolioOpen}
              >
                Portfolio

                <span
                  className={`text-[10px] transition-transform duration-300 ${
                    portfolioOpen ? "rotate-180" : ""
                  }`}
                >
                  ↓
                </span>

                <span
                  className={`absolute bottom-0 left-0 h-px transition-all duration-300 ${
                    isPortfolio
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  } ${
                    scrolled ? "bg-neutral-900" : "bg-white"
                  }`}
                />
              </button>

              {/* DROPDOWN */}
              <div
                className={`absolute left-1/2 top-full w-[210px] -translate-x-1/2 pt-5 transition-all duration-300 ${
                  portfolioOpen
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-2 opacity-0"
                }`}
              >
                <div className="overflow-hidden border border-[#d8d2c4] bg-[#f2efe8] shadow-[0_15px_45px_rgba(0,0,0,0.10)]">
                  <div className="px-5 pb-3 pt-5">
                    <span className="text-[9px] uppercase tracking-[0.25em] text-[#8a8275]">
                      Our Work
                    </span>
                  </div>

                  <div className="pb-3">
                    {portfolio.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={handleNavigation}
                        className={`group flex items-center justify-between px-5 py-4 transition-colors hover:bg-white ${
                          pathname === item.href
                            ? "bg-white"
                            : ""
                        }`}
                      >
                        <span className="font-serif text-[15px] text-[#1c1a17]">
                          {item.label}
                        </span>

                        <span className="translate-x-[-4px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                          →
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </nav>

        {/* =================================================
            BOOK US
        ================================================== */}

        <Link
          href="/book-us"
          onClick={handleNavigation}
          className={`hidden items-center gap-2.5 rounded-full border px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300 lg:inline-flex ${
            isBookUs
              ? "border-neutral-900 bg-neutral-900 text-white"
              : scrolled
                ? "border-neutral-900 bg-neutral-900 text-white hover:bg-neutral-700"
                : "border-white/70 bg-transparent text-white hover:bg-white hover:text-neutral-900"
          }`}
        >
          Book Us

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>

        {/* =================================================
            MOBILE MENU BUTTON
        ================================================== */}

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
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
                ? "translate-y-[-3.5px] -rotate-45 bg-white"
                : scrolled
                  ? "bg-neutral-900"
                  : "bg-white"
            }`}
          />
        </button>
      </div>

      {/* =================================================
          MOBILE / TABLET MENU
      ================================================== */}

      <div
        className={`fixed inset-0 z-50 overflow-y-auto bg-neutral-950 px-8 transition-all duration-500 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex min-h-full flex-col justify-center py-28">
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col">

              {/* HOME */}
              <li className="border-b border-white/10">
                <Link
                  href="/"
                  onClick={handleNavigation}
                  className={`flex items-center justify-between py-5 text-3xl font-medium tracking-wide transition-colors sm:text-4xl ${
                    isHome
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                  style={{
                    fontFamily: "var(--font-playfair)",
                  }}
                >
                  <span>
                    <span className="mr-4 text-[9px] font-normal uppercase tracking-[0.25em] text-white/30">
                      01
                    </span>
                    Home
                  </span>
                </Link>
              </li>

              {/* ABOUT */}
              <li className="border-b border-white/10">
                <Link
                  href="/about"
                  onClick={handleNavigation}
                  className={`flex items-center justify-between py-5 text-3xl font-medium tracking-wide transition-colors sm:text-4xl ${
                    isAbout
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                  style={{
                    fontFamily: "var(--font-playfair)",
                  }}
                >
                  <span>
                    <span className="mr-4 text-[9px] font-normal uppercase tracking-[0.25em] text-white/30">
                      02
                    </span>
                    About
                  </span>
                </Link>
              </li>

              {/* SERVICES */}
              <li className="border-b border-white/10">
                <button
                  type="button"
                  onClick={() =>
                    setMobileServicesOpen((value) => !value)
                  }
                  className={`flex w-full items-center justify-between py-5 text-left text-3xl font-medium tracking-wide transition-colors sm:text-4xl ${
                    isService
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                  style={{
                    fontFamily: "var(--font-playfair)",
                  }}
                  aria-expanded={mobileServicesOpen}
                >
                  <span>
                    <span className="mr-4 text-[9px] font-normal uppercase tracking-[0.25em] text-white/30">
                      03
                    </span>
                    Services
                  </span>

                  <span
                    className={`text-xl font-light transition-transform duration-300 ${
                      mobileServicesOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    mobileServicesOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="space-y-1 pb-5 pl-9">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={handleNavigation}
                          className={`flex items-center justify-between py-2.5 text-sm uppercase tracking-[0.12em] ${
                            pathname === service.href
                              ? "text-white"
                              : "text-white/45 hover:text-white"
                          }`}
                        >
                          {service.label}
                          <span>→</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </li>

              {/* PORTFOLIO */}
              <li className="border-b border-white/10">
                <button
                  type="button"
                  onClick={() =>
                    setMobilePortfolioOpen((value) => !value)
                  }
                  className={`flex w-full items-center justify-between py-5 text-left text-3xl font-medium tracking-wide transition-colors sm:text-4xl ${
                    isPortfolio
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                  style={{
                    fontFamily: "var(--font-playfair)",
                  }}
                  aria-expanded={mobilePortfolioOpen}
                >
                  <span>
                    <span className="mr-4 text-[9px] font-normal uppercase tracking-[0.25em] text-white/30">
                      04
                    </span>
                    Portfolio
                  </span>

                  <span
                    className={`text-xl font-light transition-transform duration-300 ${
                      mobilePortfolioOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    mobilePortfolioOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="space-y-1 pb-5 pl-9">
                      {portfolio.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={handleNavigation}
                          className={`flex items-center justify-between py-2.5 text-sm uppercase tracking-[0.12em] ${
                            pathname === item.href
                              ? "text-white"
                              : "text-white/45 hover:text-white"
                          }`}
                        >
                          {item.label}
                          <span>→</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </li>

              {/* BOOK US */}
              <li>
                <Link
                  href="/book-us"
                  onClick={handleNavigation}
                  className={`mt-8 inline-flex items-center gap-3 rounded-full border px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] transition-all ${
                    isBookUs
                      ? "border-white bg-white text-neutral-900"
                      : "border-white/60 text-white hover:bg-white hover:text-neutral-900"
                  }`}
                >
                  Book Us
                  <span>→</span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* =================================================
              MOBILE BRAND DETAIL
          ================================================== */}

          <div className="mt-auto pt-16 text-[9px] tracking-[0.3em] text-white/30">
            SONAL CLICKS · STORIES IN MOTION
          </div>
        </div>
      </div>
    </header>
  );
}