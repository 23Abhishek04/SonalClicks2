"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, m } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

/* =========================================================
   ABOUT DATA
========================================================= */

const stats = [
  {
    value: "10+",
    label: "YEARS",
  },
  {
    value: "500+",
    label: "STORIES",
  },
  {
    value: "25+",
    label: "DESTINATIONS",
  },
  {
    value: "4.9",
    label: "CLIENT LOVE",
  },
];

const aboutImages = [
  {
    src: "/about/1.jpg",
    alt: "Sonal Clicks photography",
    position: "center",
  },
  {
    src: "/about/2.png",
    alt: "Wedding photography",
    position: "35% center",
  },
  {
    src: "/about/sonal.webp",
    alt: "Sonal Clicks photography detail",
    position: "70% center",
  },
];

/* =========================================================
   FEEDBACK DATA
========================================================= */

type FeedbackCard = {
  quote: string;
  name: string;
  category: string;
  photo: string;
};

const feedbackPages: FeedbackCard[][] = [
  [
    {
      quote:
        "You didn't just photograph our wedding. You captured how it felt. Every photo takes us back to those exact emotions. Thank you for being a part of our journey!",
      name: "Mayur & Sneha",
      category: "Wedding",
      photo: "/feedback/mayur-sneha.webp",
    },
    {
      quote:
        "Our pre-wedding shoot with Sonal Clicks was a dream! So natural, so beautiful, and so us. The entire experience was smooth and enjoyable.",
      name: "Akshay & Prerna",
      category: "Pre-Wedding",
      photo: "/feedback/akshay-prerna.webp",
    },
    {
      quote:
        "The maternity shoot was such a special experience. Sonal made me feel so comfortable and the photos are simply magical. We will treasure them forever.",
      name: "Rutuja",
      category: "Maternity",
      photo: "/feedback/rutuja.webp",
    },
    {
      quote:
        "The baby shoot was handled with so much patience and care. The pictures are adorable and full of life. Highly recommend Sonal Clicks!",
      name: "Aarav's Parents",
      category: "Baby Shoot",
      photo: "/feedback/aarav.webp",
    },
    {
      quote:
        "Professional, creative and extremely talented! The portraits turned out better than I imagined. Sonal has a unique ability to bring out the best in you.",
      name: "Neha",
      category: "Model Shoot",
      photo: "/feedback/neha.webp",
    },
  ],

  [
    {
      quote:
        "Every single frame felt personal. It never once felt like a shoot, it felt like someone quietly capturing our day as it happened.",
      name: "Karthik & Divya",
      category: "Wedding",
      photo: "/feedback/karthik-divya.webp",
    },
    {
      quote:
        "We were nervous in front of the camera, but the whole shoot felt like hanging out with a friend. The photos look effortless.",
      name: "Yash & Simran",
      category: "Pre-Wedding",
      photo: "/feedback/yash-simran.webp",
    },
    {
      quote:
        "I've never felt more at ease in front of a camera. The maternity photos are soft, warm, and exactly how that time in my life felt.",
      name: "Pooja",
      category: "Maternity",
      photo: "/feedback/pooja.webp",
    },
    {
      quote:
        "So much patience with a very wiggly one-year-old! Every single photo came out full of personality and joy.",
      name: "Kabir's Parents",
      category: "Baby Shoot",
      photo: "/feedback/kabir.webp",
    },
    {
      quote:
        "I wanted portraits that actually looked like me on a good day, not a stranger. That's exactly what I got.",
      name: "Farah",
      category: "Model Shoot",
      photo: "/feedback/farah.webp",
    },
  ],

  [
    {
      quote:
        "Even my in-laws, who are impossible to please, couldn't stop talking about how beautiful the wedding album turned out.",
      name: "Rahul & Ishaani",
      category: "Wedding",
      photo: "/feedback/rahul-ishaani.webp",
    },
    {
      quote:
        "We booked the pre-wedding shoot on a whim and it ended up being one of our favorite days together. The photos still make us smile.",
      name: "Varun & Anjali",
      category: "Pre-Wedding",
      photo: "/feedback/varun-anjali.webp",
    },
    {
      quote:
        "Being 8 months pregnant and still feeling beautiful in photos felt impossible, until this shoot. I'm so grateful.",
      name: "Nikita",
      category: "Maternity",
      photo: "/feedback/nikita.webp",
    },
    {
      quote:
        "Our daughter wouldn't stop laughing the whole shoot, and somehow every single photo caught that exact joy.",
      name: "Meher's Parents",
      category: "Baby Shoot",
      photo: "/feedback/meher.webp",
    },
    {
      quote:
        "Ten minutes in and I forgot the camera was even there. That's when the best photos happened.",
      name: "Ojas",
      category: "Model Shoot",
      photo: "/feedback/ojas.webp",
    },
  ],
];

/* =========================================================
   ANIMATION
========================================================= */

const reveal = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

/* =========================================================
   ABOUT PAGE
========================================================= */

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#f2efe8] text-[#1c1a17]">

      {/* =====================================================
          ABOUT HERO
      ====================================================== */}

      <section className="relative">
        <div className="mx-auto max-w-[1600px] px-6 pb-20 pt-32 sm:px-10 sm:pb-24 sm:pt-36 md:px-12 lg:px-16 lg:pb-32 lg:pt-40">

          {/* TOP LABEL */}

          <m.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-medium tracking-[0.35em] text-[#6b6459]">
                ABOUT SONAL CLICKS
              </span>

              <span className="h-px w-12 bg-[#6b6459]/50" />
            </div>

            <span className="hidden text-[10px] tracking-[0.3em] text-[#8b8477] md:block">
              THE PERSON · THE PROCESS · THE STORY
            </span>
          </m.div>

          {/* =================================================
              INTRO TYPOGRAPHY
          ================================================== */}

          <div className="relative mt-10 lg:mt-14">
            <m.h1
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative z-10 max-w-6xl font-serif text-[17vw] leading-[0.78] tracking-[-0.06em] sm:text-[100px] md:text-[125px] lg:text-[150px] xl:text-[175px]"
            >
              More Than
              <br />

              <span className="ml-[7vw] italic">
                A Camera.
              </span>
            </m.h1>

            {/* SCRIPT */}

            <m.div
              initial={{
                opacity: 0,
                rotate: -12,
                y: 30,
              }}
              animate={{
                opacity: 1,
                rotate: -5,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.4,
              }}
              className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 lg:block"
            >
              <p className="font-script text-5xl leading-none text-[#c9c2b3] xl:text-6xl">
                behind
                <br />
                every frame
              </p>
            </m.div>
          </div>

          {/* =================================================
              IMAGE COMPOSITION
          ================================================== */}

          <div className="relative mt-16 lg:mt-24">

            {/* MAIN IMAGE */}

            <m.div
              initial={{
                opacity: 0,
                y: 80,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 1.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative h-[430px] w-full overflow-hidden sm:h-[560px] md:h-[620px] lg:h-[720px] lg:w-[62%]"
            >
              <m.div
                className="absolute inset-0"
                whileHover={{ scale: 1.04 }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Image
                  src={aboutImages[0].src}
                  alt={aboutImages[0].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 62vw"
                  className="object-cover"
                  style={{
                    objectPosition: aboutImages[0].position,
                  }}
                />
              </m.div>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

              <div className="absolute left-5 top-5 text-white sm:left-8 sm:top-8">
                <span className="text-[9px] tracking-[0.3em] sm:text-[10px]">
                  01 — THE BEGINNING
                </span>
              </div>

              <div className="absolute bottom-6 left-6 text-white sm:bottom-8 sm:left-8">
                <p className="font-serif text-3xl sm:text-4xl">
                  Seeing differently.
                </p>

                <div className="mt-3 h-px w-12 bg-white/70" />
              </div>

              <div className="pointer-events-none absolute inset-4 border border-white/20 transition-all duration-700 group-hover:inset-6 group-hover:border-white/40" />
            </m.div>

            {/* SECONDARY IMAGE */}

            <m.div
              initial={{
                opacity: 0,
                x: 80,
                y: 60,
                rotate: 4,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                rotate: 4,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 1,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative mt-7 ml-auto h-[330px] w-[78%] overflow-hidden sm:h-[400px] sm:w-[70%] md:h-[460px] lg:absolute lg:right-[4%] lg:top-[13%] lg:mt-0 lg:h-[390px] lg:w-[31%]"
            >
              <m.div
                className="absolute inset-0"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src={aboutImages[1].src}
                  alt={aboutImages[1].alt}
                  fill
                  sizes="(max-width: 1024px) 78vw, 31vw"
                  className="object-cover"
                  style={{
                    objectPosition: aboutImages[1].position,
                  }}
                />
              </m.div>

              <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/0" />

              <div className="absolute bottom-5 left-5 text-[8px] tracking-[0.25em] text-white sm:text-[9px]">
                02 — THE MOMENTS
              </div>
            </m.div>

            {/* SMALL IMAGE */}

            <m.div
              initial={{
                opacity: 0,
                x: -40,
                y: 40,
                rotate: -5,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                rotate: -5,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.9,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative mt-10 h-[250px] w-[58%] overflow-hidden sm:h-[310px] sm:w-[50%] md:h-[350px] lg:absolute lg:bottom-12 lg:right-[28%] lg:mt-0 lg:h-[270px] lg:w-[21%]"
            >
              <m.div
                className="absolute inset-0"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.7 }}
              >
                <Image
                  src={aboutImages[2].src}
                  alt={aboutImages[2].alt}
                  fill
                  sizes="(max-width: 1024px) 58vw, 21vw"
                  className="object-cover"
                  style={{
                    objectPosition: aboutImages[2].position,
                  }}
                />
              </m.div>

              <div className="absolute bottom-4 left-4 text-[8px] tracking-[0.25em] text-white">
                03 — DETAILS
              </div>
            </m.div>
          </div>

          {/* =================================================
              STATS
          ================================================== */}

          <div className="mt-20 grid grid-cols-2 border-y border-[#d8d2c4] sm:grid-cols-4 lg:mt-28">
            {stats.map((stat, index) => (
              <m.div
                key={stat.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                className={`px-4 py-8 text-center sm:py-10 ${
                  index < 3
                    ? "border-r border-[#d8d2c4]"
                    : ""
                } ${
                  index === 0 || index === 1
                    ? "border-b border-[#d8d2c4] sm:border-b-0"
                    : ""
                }`}
              >
                <p className="font-serif text-4xl tracking-tight sm:text-5xl lg:text-6xl">
                  {stat.value}
                </p>

                <p className="mt-2 text-[8px] tracking-[0.3em] text-[#8b8477] sm:text-[9px]">
                  {stat.label}
                </p>
              </m.div>
            ))}
          </div>

          {/* =================================================
              STORY
          ================================================== */}

          <div className="mt-24 grid gap-14 lg:mt-40 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

            {/* LEFT */}

            <m.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.25,
              }}
              className="lg:sticky lg:top-32 lg:self-start"
            >
              <span className="text-[10px] tracking-[0.3em] text-[#8b8477]">
                THE STORY
              </span>

              <h2 className="mt-5 font-serif text-4xl leading-[0.95] sm:text-5xl lg:text-6xl">
                I photograph
                <br />
                <span className="italic">
                  how it felt.
                </span>
              </h2>

              <p className="mt-8 max-w-sm text-sm leading-7 text-[#6b6459]">
                Because the best photographs aren't always the perfectly
                posed ones. They are the photographs that bring you back
                to a feeling, a person, a place or a moment you never want
                to forget.
              </p>

              <Link
                href="/book-us"
                className="group mt-8 inline-flex items-center gap-4 text-[9px] tracking-[0.25em] sm:text-[10px]"
              >
                LET&apos;S CREATE SOMETHING

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1c1a17] transition-all duration-300 group-hover:bg-[#1c1a17] group-hover:text-[#f2efe8]">
                  →
                </span>
              </Link>
            </m.div>

            {/* RIGHT */}

            <div>
              <m.p
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                className="font-serif text-2xl leading-relaxed text-[#3b3731] sm:text-3xl"
              >
                Sonal Clicks began with a simple belief — photographs
                should feel as beautiful as the memories they preserve.
              </m.p>

              <m.p
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                }}
                className="mt-7 max-w-2xl text-[15px] leading-7 text-[#6b6459]"
              >
                From weddings and pre-weddings to maternity, baby stories
                and portraits, every session is approached with patience,
                observation and an eye for the little details. The goal
                isn't simply to create beautiful images — it's to create
                photographs that still mean something years from now.
              </m.p>

              {/* SIGNATURE */}

              <m.div
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                }}
                className="mt-10 flex flex-wrap items-center gap-4"
              >
                <span className="font-script text-4xl">
                  Sonal
                </span>

                <span className="h-px w-12 bg-[#6b6459]/50" />

                <span className="text-[9px] tracking-[0.25em] text-[#6b6459]">
                  FOUNDER & PHOTOGRAPHER
                </span>
              </m.div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEEDBACK SECTION
      ====================================================== */}

      <FeedbackSection />

      {/* =====================================================
          BOOK CTA
      ====================================================== */}

      <section className="bg-[#1c1a17] px-6 py-24 text-[#f2efe8] sm:px-10 md:px-12 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1200px] text-center">

          <span className="mb-7 block text-[9px] tracking-[0.35em] text-white/40">
            YOUR STORY DESERVES TO BE REMEMBERED
          </span>

          <h2 className="font-serif text-5xl leading-[0.9] tracking-[-0.04em] sm:text-7xl md:text-8xl">
            Let&apos;s create
            <br />
            <span className="italic">
              something timeless.
            </span>
          </h2>

          <Link
            href="/book-us"
            className="group mt-10 inline-flex items-center gap-4 rounded-full border border-white/40 px-7 py-3.5 text-[9px] font-medium uppercase tracking-[0.25em] transition-all duration-300 hover:bg-white hover:text-[#1c1a17] sm:text-[10px]"
          >
            Book Your Story

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   FEEDBACK COMPONENT
========================================================= */

function FeedbackSection() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const total = feedbackPages.length;
  const cards = feedbackPages[page];

  const goTo = (next: number, dir: number) => {
    setDirection(dir);
    setPage((next + total) % total);
  };

  return (
    <section className="relative overflow-hidden bg-[#F1ECE3] py-20 sm:py-24 md:py-28 lg:py-32">

      {/* =================================================
          DECORATIVE ELEMENT
      ================================================== */}

      <svg
        aria-hidden
        className="pointer-events-none absolute -bottom-10 -right-10 hidden h-72 w-72 text-[#C9A98C]/25 lg:block"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle
          cx="140"
          cy="150"
          r="6"
          stroke="currentColor"
          strokeWidth="1.2"
        />

        <path
          d="M140 150C120 130 100 120 70 118M140 150C130 125 128 100 140 78M140 150C160 135 175 112 178 88"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </svg>

      <div className="mx-auto max-w-[1500px] px-6 sm:px-10 md:px-12 lg:px-16">

        {/* =================================================
            HEADER
        ================================================== */}

        <m.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mb-12 flex flex-col justify-between gap-8 md:mb-16 lg:flex-row lg:items-start"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="text-[10px] font-medium tracking-[0.3em] text-[#8A8177]">
                CLIENT FEEDBACK
              </span>

              <span className="h-px w-10 bg-[#8A8177]/50" />
            </div>

            <h2 className="font-serif text-[2.5rem] leading-[1.05] text-[#221E1A] sm:text-5xl lg:text-[3.5rem]">
              Words From People
              <br />
              <span className="italic text-[#3A342E]">
                We&apos;ve Photographed.
              </span>
            </h2>
          </div>

          <div className="flex items-start justify-between gap-10 lg:gap-16">
            <div className="max-w-sm">
              <p className="text-sm leading-7 text-[#4A443C] sm:text-base">
                Every story we capture is special, but what means the
                most is the love we receive in return.
              </p>

              <div className="mt-4 flex items-center gap-3">
                <span className="h-px w-6 bg-[#3A342E]/40" />

                <span className="text-[9px] tracking-[0.2em] text-[#6B6459]">
                  REAL PEOPLE. REAL STORIES.
                </span>
              </div>
            </div>

            <p className="hidden font-script text-3xl leading-6 text-[#8A8177]/70 sm:block">
              Grateful
              <br />
              Always
            </p>
          </div>
        </m.div>

        {/* =================================================
            MOBILE / TABLET FEEDBACK STRIP
        ================================================== */}

        <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-none [-ms-overflow-style:none] lg:gap-0 lg:overflow-visible [&::-webkit-scrollbar]:hidden">

          {/* LEFT BOOKEND */}

          <div className="group relative hidden h-auto w-[13%] shrink-0 overflow-hidden lg:block lg:rounded-l-2xl">
            <Image
              src="/feedback/feedback-left.webp"
              alt=""
              fill
              sizes="13vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-6 left-5 text-white">
              <p className="text-[10px] uppercase leading-snug tracking-[0.15em]">
                Beautiful
                <br />
                People
                <br />
                Beautiful
                <br />
                Stories
              </p>

              <span className="mt-3 block h-px w-6 bg-white/60" />
            </div>
          </div>

          {/* FEEDBACK CARDS */}

          <AnimatePresence mode="wait" custom={direction}>
            <m.div
              key={page}
              custom={direction}
              initial={{
                opacity: 0,
                x: direction >= 0 ? 40 : -40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: direction >= 0 ? -40 : 40,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
              className="contents"
            >
              {cards.map((card, index) => (
                <m.article
                  key={card.name}
                  initial={{
                    opacity: 0,
                    y: 16,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className={`group relative flex min-h-[420px] w-[280px] shrink-0 snap-start flex-col justify-between rounded-2xl px-6 py-8 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:w-[310px] lg:min-h-[450px] lg:w-auto lg:flex-1 lg:rounded-none lg:shadow-none lg:hover:shadow-none ${
                    index % 2 === 0
                      ? "bg-[#FAF8F4]"
                      : "bg-[#F1ECE3] lg:bg-transparent"
                  }`}
                >
                  <div>
                    <span
                      className="font-serif text-5xl leading-none text-[#C9A98C]"
                      aria-hidden
                    >
                      &ldquo;
                    </span>

                    <p className="mt-3 text-[0.9rem] leading-relaxed text-[#2E2A25]">
                      {card.quote}
                    </p>
                  </div>

                  <div className="mt-8">
                    <div className="mx-auto h-24 w-24 overflow-hidden rounded-full ring-1 ring-black/5">
                      <Image
                        src={card.photo}
                        alt={card.name}
                        width={96}
                        height={96}
                        sizes="96px"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    <div className="mt-4 text-center">
                      <p className="text-[10px] font-medium tracking-[0.15em] text-[#221E1A]">
                        {card.name.toUpperCase()}
                      </p>

                      <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#9A9186]">
                        {card.category}
                      </p>

                      <span className="mx-auto mt-3 block h-px w-6 bg-[#3A342E]/25 transition-all duration-300 group-hover:w-10" />
                    </div>
                  </div>
                </m.article>
              ))}
            </m.div>
          </AnimatePresence>

          {/* RIGHT BOOKEND */}

          <div className="group relative hidden h-auto w-[13%] shrink-0 overflow-hidden lg:block lg:rounded-r-2xl">
            <Image
              src="/feedback/feedback-right.webp"
              alt=""
              fill
              sizes="13vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-transparent" />

            <p className="absolute right-5 top-8 text-right font-script text-2xl italic leading-snug text-white/90">
              Thank you
              <br />
              for being
              <br />
              a part of
              <br />
              our story
            </p>

            <div className="absolute bottom-6 left-5 text-white">
              <p className="text-[10px] uppercase leading-snug tracking-[0.15em]">
                It Means
                <br />
                The World
              </p>

              <span className="mt-3 block h-px w-6 bg-white/60" />
            </div>
          </div>
        </div>

        {/* =================================================
            CONTROLS
        ================================================== */}

        <div className="mt-8 flex items-center justify-between md:mt-12">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => goTo(page - 1, -1)}
              aria-label="Previous feedback"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3A342E]/25 text-[#3A342E] transition-all duration-200 hover:-translate-x-0.5 hover:border-[#3A342E] active:scale-95"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <span className="text-[10px] tracking-[0.2em] text-[#6B6459]">
              {String(page + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>

            <button
              type="button"
              onClick={() => goTo(page + 1, 1)}
              aria-label="Next feedback"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3A342E]/25 text-[#3A342E] transition-all duration-200 hover:translate-x-0.5 hover:border-[#3A342E] active:scale-95"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <Link
            href="/portfolio/photos"
            className="group hidden items-center gap-4 sm:flex"
          >
            <span className="h-px w-16 bg-[#3A342E]/25 transition-all duration-300 group-hover:w-24" />

            <span className="text-[10px] tracking-[0.2em] text-[#3A342E]">
              VIEW OUR WORK
            </span>

            <ArrowRight className="h-4 w-4 text-[#3A342E] transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}