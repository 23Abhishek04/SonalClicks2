"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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

const images = [
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
    alt: "Photography detail",
    position: "70% center",
  },
  
];

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

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f2efe8] text-[#1c1a17]"
    >
      <div className="mx-auto max-w-[1600px] px-6 py-24 sm:px-10 md:px-12 lg:px-16 lg:py-32">

        {/* ==================================================
            TOP LABEL
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
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
        </motion.div>

        {/* ==================================================
            HUGE INTRO TYPOGRAPHY
        ================================================== */}

        <div className="relative mt-10 lg:mt-14">

          <motion.h2
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 max-w-5xl font-serif text-[17vw] leading-[0.78] tracking-tighter sm:text-[120px] lg:text-[150px] xl:text-[175px]"
          >
            More Than
            <br />

            <span className="ml-[8vw] italic">
              A Camera.
            </span>
          </motion.h2>

          {/* Floating script */}

          <motion.div
            initial={{
              opacity: 0,
              rotate: -12,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              rotate: -5,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.4,
            }}
            className="absolute right-0 top-1/2 hidden -translate-y-1/2 lg:block"
          >
            <p className="font-script text-5xl leading-none text-[#c9c2b3] xl:text-6xl">
              behind
              <br />
              every frame
            </p>
          </motion.div>
        </div>

        {/* ==================================================
            EDITORIAL IMAGE COMPOSITION
        ================================================== */}

        <div className="relative mt-16 lg:mt-24">

          {/* Main image */}

          <motion.div
            initial={{
              opacity: 0,
              y: 80,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative h-130 w-full overflow-hidden sm:h-162.5 lg:h-180 lg:w-[62%]"
          >
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.04 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                priority={false}
                sizes="(max-width: 1024px) 100vw, 62vw"
                className="object-cover"
                style={{
                  objectPosition: images[0].position,
                }}
              />
            </motion.div>

            {/* Image gradient */}

            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-black/10" />

            {/* Image label */}

            <div className="absolute left-6 top-6 text-white sm:left-8 sm:top-8">
              <span className="text-[10px] tracking-[0.3em]">
                01 — THE BEGINNING
              </span>
            </div>

            {/* Bottom caption */}

            <div className="absolute bottom-6 left-6 text-white sm:bottom-8 sm:left-8">
              <p className="font-serif text-3xl sm:text-4xl">
                Seeing differently.
              </p>

              <div className="mt-3 h-px w-12 bg-white/70" />
            </div>

            {/* Inner border */}

            <div className="pointer-events-none absolute inset-4 border border-white/20 transition-all duration-700 group-hover:inset-6 group-hover:border-white/40" />
          </motion.div>

          {/* Floating secondary image */}

          <motion.div
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
            className="group relative mt-6 ml-aut h-75 w-[72%] overflow-hidden sm:h-95 lg:absolute lg:right-[4%] lg:top-[13%] lg:mt-0 lg:h-97.5 lg:w-[31%]"
          >
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.06 }}
              transition={{
                duration: 0.8,
              }}
            >
              <Image
                src={images[1].src}
                alt={images[1].alt}
                fill
                sizes="(max-width: 1024px) 72vw, 31vw"
                className="object-cover"
                style={{
                  objectPosition: images[1].position,
                }}
              />
            </motion.div>

            <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/0" />

            <div className="absolute bottom-5 left-5 text-[9px] tracking-[0.25em] text-white">
              02 — THE MOMENTS
            </div>
          </motion.div>

          {/* Small floating image */}

          <motion.div
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
            className="group relative mt-8 h-57.5 w-[52%] overflow-hidden sm:h-70 lg:absolute lg:bottom-12.5 lg:right-[28%] lg:mt-0 lg:h-67.5 lg:w-[21%]"
          >
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.08 }}
              transition={{
                duration: 0.7,
              }}
            >
              <Image
                src={images[2].src}
                alt={images[2].alt}
                fill
                sizes="(max-width: 1024px) 52vw, 21vw"
                className="object-cover"
                style={{
                  objectPosition: images[2].position,
                }}
              />
            </motion.div>

            <div className="absolute bottom-4 left-4 text-[8px] tracking-[0.25em] text-white">
              03 — DETAILS
            </div>
          </motion.div>
        </div>

        {/* ==================================================
            STORY + IMAGE
        ================================================== */}

        <div className="mt-24 grid gap-14 lg:mt-40 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

          {/* Left statement */}

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <span className="text-[10px] tracking-[0.3em] text-[#8b8477]">
              THE STORY
            </span>

            <h3 className="mt-5 font-serif text-4xl leading-[0.95] sm:text-5xl lg:text-6xl">
              I photograph
              <br />
              <span className="italic">how it felt.</span>
            </h3>

            <p className="mt-8 max-w-sm text-sm leading-7 text-[#6b6459]">
              Because the best photographs aren't always the perfectly posed
              ones. They are the photographs that bring you back to a feeling,
              a person, a place or a moment you never want to forget.
            </p>

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-4 text-[10px] tracking-[0.25em]"
            >
              LET&apos;S CREATE SOMETHING
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1c1a17] transition-all duration-300 group-hover:bg-[#1c1a17] group-hover:text-[#f2efe8]">
                →
              </span>
            </a>
          </motion.div>

          {/* Right story */}

          <div>

            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <p className="font-serif text-2xl leading-relaxed text-[#3b3731] sm:text-3xl">
                Sonal Clicks began with a simple belief — photographs should
                feel as beautiful as the memories they preserve.
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              className="mt-7 max-w-2xl text-[15px] leading-7 text-[#6b6459]"
            >
              From weddings and pre-weddings to maternity, baby stories and
              portraits, every session is approached with patience,
              observation and an eye for the little details. The goal isn't
              simply to create beautiful images — it's to create photographs
              that still mean something years from now.
            </motion.p>

            {/* Signature */}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
              className="mt-10 flex items-center gap-4"
            >
              <span className="font-script text-4xl">
                Sonal
              </span>

              <span className="h-px w-12 bg-[#6b6459]/50" />

              <span className="text-[9px] tracking-[0.25em] text-[#6b6459]">
                FOUNDER & PHOTOGRAPHER
              </span>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}