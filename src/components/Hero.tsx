"use client";

import Image from "next/image";
import {
  m,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  Playfair_Display,
  Inter,
  Alex_Brush,
} from "next/font/google";

/* =========================================================
   FONTS
   Trimmed to the weights actually used in this component.
   (Check other components before removing further — if e.g.
   Inter 600 is used elsewhere, keep it.)
========================================================= */

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"], // removed 600 — verify unused elsewhere first
  variable: "--font-inter",
  display: "swap",
});

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

/* =========================================================
   CONTENT
========================================================= */

const categories = [
  "Weddings",
  "Maternity",
  "Baby",
  "Portraits",
];

const avatars = [
  {
    src: "/images/4.webp",
    alt: "Wedding couple portrait",
  },
  {
    src: "/images/7.webp",
    alt: "Maternity portrait",
  },
  {
    src: "/images/6.webp",
    alt: "Baby portrait",
  },
];

const titleWords = [
  "Cherish",
  "the",
  "Journey",
];

/* =========================================================
   HERO
========================================================= */

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const easeOut = [0.22, 1, 0.36, 1] as const;

  const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.9,
        ease: easeOut,
      },
    },
  };

  const contentVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.11,
        delayChildren: 0.65,
      },
    },
  };

  return (
      <section
        id="home"
        className={`${playfair.variable} ${inter.variable} ${alexBrush.variable} relative flex min-h-170 h-svh w-full items-end overflow-hidden bg-black font-sans sm:items-center`}
      >
        {/* =====================================================
            NAVBAR now renders globally from layout.tsx — removed
            from here to avoid rendering it twice on every page.
        ===================================================== */}

        {/* =====================================================
            CINEMATIC BACKGROUND IMAGE
            Fix: no opacity/scale animation gating this — it renders
            fully visible immediately, since it's the LCP element.
            The subtle "ken burns" zoom is done in pure CSS below,
            which the browser can start painting without waiting
            on JS hydration.
        ===================================================== */}

        <div className="absolute inset-0">
          <Image
            src="/images/hero.webp"
            alt="Bride and groom foreheads touching at golden hour"
            fill
            priority
            sizes="100vw"
            className="hero-kenburns object-cover object-[75%_35%] sm:object-[68%_center]"
          />
        </div>

        {/* =====================================================
            CINEMATIC OVERLAY
            These are fine to animate — they're not the LCP element
            and sit on top of an already-visible image, not blocking it.
        ===================================================== */}

        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.6,
            delay: 0.4,
            ease: easeOut,
          }}
          className="absolute inset-0 bg-linear-to-r from-black/85 via-black/35 to-black/5"
        />

        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.6,
            ease: easeOut,
          }}
          className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-black/25"
        />

        {/* =====================================================
            TOP NAVBAR READABILITY
        ===================================================== */}

        <div className="absolute inset-x-0 top-0 h-44 bg-linear-to-b from-black/60 via-black/15 to-transparent" />

        {/* =====================================================
            SUBTLE FILM GRAIN
        ===================================================== */}

        <div className="pointer-events-none absolute inset-0 opacity-[0.045] mix-blend-overlay">
          <div className="hero-noise h-full w-full" />
        </div>

        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <div className="relative z-10 w-full px-6 pb-10 pt-36 sm:px-10 sm:pb-14 sm:pt-0 md:px-12 lg:px-16">
          <m.div
            initial="hidden"
            animate="visible"
            variants={contentVariants}
            className="max-w-2xl"
          >
            {/* =================================================
                HERO TITLE
            ================================================= */}

            <h1
              className="font-serif text-[3.5rem] font-normal leading-[0.92] tracking-[-0.035em] text-white sm:text-6xl md:text-7xl lg:text-[6.4rem]"
              style={{
                fontFamily: "var(--font-playfair)",
              }}
            >
              {titleWords.map((word, index) => (
                <m.span
                  key={`${word}-${index}`}
                  variants={fadeUp}
                  className="block overflow-hidden"
                >
                  <m.span
                    className="block"
                    initial={{
                      y: shouldReduceMotion ? 0 : "100%",
                    }}
                    animate={{
                      y: 0,
                    }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 1,
                      delay: 0.75 + index * 0.12,
                      ease: easeOut,
                    }}
                  >
                    {word}
                  </m.span>
                </m.span>
              ))}
            </h1>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <m.p
              variants={fadeUp}
              className="mt-7 max-w-md text-[14px] leading-[1.8] text-white/80 sm:text-base"
            >
              From first looks to first steps, We capture your journey,
              one frame at a time.
            </m.p>

            {/* =================================================
                CTA
            ================================================= */}

            <m.div
              variants={fadeUp}
              className="mt-8"
            >
              <m.a
                href="#portfolio"
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        x: 4,
                      }
                }
                transition={{
                  duration: 0.35,
                  ease: easeOut,
                }}
                className="group relative inline-flex items-center gap-4 overflow-hidden border border-white/60 px-6 py-3.5 text-[10px] font-semibold tracking-[0.22em] text-white transition-colors duration-500 hover:border-white hover:text-black sm:text-xs"
              >
                {/* Hover fill */}

                <span className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-500 ease-out group-hover:scale-x-100" />

                {/* CTA text */}

                <span className="relative z-10">
                  EXPLORE THE STORIES
                </span>

                {/* Arrow */}

                <span className="relative z-10 text-base transition-transform duration-500 group-hover:translate-x-1.5">
                  →
                </span>
              </m.a>
            </m.div>
          </m.div>

          {/* =================================================
              BOTTOM INFORMATION
          ================================================= */}

          <m.div
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.9,
              delay: 1.55,
              ease: easeOut,
            }}
            className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-7"
          >
            {/* =================================================
                AVATARS
            ================================================= */}

            <div className="flex -space-x-3">
              {avatars.map((avatar, index) => (
                <m.div
                  key={avatar.alt}
                  initial={{
                    opacity: 0,
                    scale: shouldReduceMotion ? 1 : 0.7,
                    x: shouldReduceMotion ? 0 : -8,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.5,
                    delay: shouldReduceMotion
                      ? 0
                      : 1.65 + index * 0.12,
                    ease: easeOut,
                  }}
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : {
                          y: -5,
                          scale: 1.12,
                          zIndex: 10,
                        }
                  }
                  className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white/90 shadow-xl sm:h-11 sm:w-11"
                >
                  <Image
                    src={avatar.src}
                    alt={avatar.alt}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </m.div>
              ))}
            </div>

            {/* =================================================
                DIVIDER
            ================================================= */}

            <div className="hidden h-8 w-px bg-white/30 sm:block" />

            {/* =================================================
                CATEGORIES
            ================================================= */}

            <p className="text-[10px] font-medium tracking-[0.22em] text-white/70 sm:text-xs">
              {categories.join("  ·  ")}
            </p>
          </m.div>
        </div>

        {/* =====================================================
            SCRIPT TAGLINE
        ===================================================== */}

        <m.div
          initial={{
            opacity: 0,
            x: shouldReduceMotion ? 0 : 30,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1,
            delay: shouldReduceMotion ? 0 : 1.5,
            ease: easeOut,
          }}
          className="pointer-events-none absolute bottom-10 right-8 z-10 hidden text-right text-3xl leading-[0.9] text-white/90 sm:block md:right-12 md:text-4xl lg:right-16 lg:text-[2.9rem]"
          style={{
            fontFamily: "var(--font-script)",
          }}
        >
          Memories
          <br />
          in Focus
        </m.div>

        {/* =====================================================
            BOTTOM LINE
        ===================================================== */}

        <m.div
          initial={{
            scaleX: 0,
          }}
          animate={{
            scaleX: 1,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1.2,
            delay: shouldReduceMotion ? 0 : 1.8,
            ease: easeOut,
          }}
          className="absolute bottom-0 left-0 h-px w-full origin-left bg-white/20"
        />

        {/* =====================================================
            CSS
        ===================================================== */}

        <style jsx global>{`
          .hero-noise {
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.7'/%3E%3C/svg%3E");
          }

          /* Pure CSS ken-burns zoom: starts painting immediately,
             doesn't wait for JS hydration like the old Framer Motion
             version did. */
          .hero-kenburns {
            animation: heroZoom 8s ease-out forwards;
          }

          @keyframes heroZoom {
            from {
              transform: scale(1.12);
            }
            to {
              transform: scale(1);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .hero-kenburns {
              animation: none;
            }

            *,
            *::before,
            *::after {
              scroll-behavior: auto !important;
            }
          }
        `}</style>
      </section>
  );
}