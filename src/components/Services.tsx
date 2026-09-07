"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ServiceItem {
  number: string;
  title: string;
  description: string;
  image: string;
}

const services: ServiceItem[] = [
  {
    number: "01",
    title: "Weddings",
    description:
      "The big emotions, the little details, and everything in between.",
    image: "/services/11.webp",
  },
  {
    number: "02",
    title: "Pre-Weddings",
    description: "Your story before the beginning.",
    image: "/services/9.webp",
  },
  {
    number: "03",
    title: "Maternity",
    description: "The beauty of becoming, captured with love.",
    image: "/services/1.webp",
  },
  {
    number: "04",
    title: "Baby Stories",
    description: "Little moments. Forever memories.",
    image: "/services/4.webp",
  },
  {
    number: "05",
    title: "Model Shoot",
    description: "Your image. Your identity.",
    image: "/services/2.webp",
  },
];

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="relative w-full overflow-hidden bg-[#f2efe8] text-[#1c1a17]"
    >
      <div className="mx-auto max-w-375 px-6 py-20 sm:px-10 md:px-12 lg:px-16 lg:py-24">

        {/* =========================================
            TOP HEADER
        ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex items-center justify-between"
        >
          {/* Left label */}

          <div className="flex items-center gap-3 text-[11px] tracking-[0.25em] text-[#6b6459]">
            <span>OUR SERVICES</span>

            <span className="h-px w-10 bg-[#6b6459]/50" />
          </div>

          {/* Right words */}

          <div className="hidden items-center gap-3 text-[11px] tracking-[0.2em] text-[#6b6459] md:flex">
            <span>PEOPLE</span>
            <span className="text-[#c9c2b3]">|</span>
            <span>EMOTIONS</span>
            <span className="text-[#c9c2b3]">|</span>
            <span>STORIES</span>
            <span className="text-[#c9c2b3]">|</span>
            <span>FOREVER</span>
          </div>
        </motion.div>

        {/* =========================================
            HEADLINE
        ========================================= */}

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_220px]">

          {/* Main heading */}

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-serif text-[12vw] leading-[0.9] sm:text-6xl md:text-7xl lg:text-[64px] xl:text-[76px]"
            >
              Every Chapter
              <br />

              <span className="italic">
                Deserves to be Captured.
              </span>
            </motion.h2>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 max-w-md text-[15px] leading-relaxed text-[#5c574d]"
            >
              From grand celebrations to the quiet in-betweens, we capture
              the moments that make your story timeless.
            </motion.p>

            {/* Explore button */}

            <motion.a
              href="#portfolio"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group mt-8 inline-flex items-center gap-4 text-[11px] tracking-[0.2em] text-[#1c1a17]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#1c1a17] transition-all duration-300 group-hover:bg-[#1c1a17] group-hover:text-[#f2efe8]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              EXPLORE OUR SERVICES
            </motion.a>
          </div>

          {/* Script accent */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="hidden pt-3 lg:block"
          >
            <p className="-rotate-6 text-right font-script text-4xl leading-tight text-[#c9c2b3]">
              More
              <br />
              Than Just
              <br />
              Photos
            </p>
          </motion.div>
        </div>

        {/* =========================================
            UNIQUE EDITORIAL SERVICE LAYOUT
        ========================================= */}

        <div className="mt-16 lg:mt-20">

          {/* =====================================
              DESKTOP / TABLET GRID
          ===================================== */}

          <div
            className="
              hidden
              lg:grid
              lg:grid-cols-12
              lg:grid-rows-[280px_280px]
              lg:gap-4
            "
          >

            {/* =====================================
                PRE-WEDDINGS
            ===================================== */}

            <motion.article
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                delay: 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              onMouseEnter={() => setHovered(1)}
              onMouseLeave={() => setHovered(null)}
              className="
                group
                relative
                col-span-3
                row-span-1
                overflow-hidden
                rounded-sm
              "
            >
              <motion.div
                className="absolute inset-0"
                animate={{
                  scale: hovered === 1 ? 1.06 : 1,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Image
                  src={services[1].image}
                  alt={services[1].title}
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </motion.div>

              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent" />

              <span className="absolute left-5 top-5 font-serif text-3xl text-white/90">
                02
              </span>

              <div className="absolute bottom-0 left-0 right-0 p-6">

                <h3 className="font-serif text-2xl text-white">
                  Pre-Weddings
                </h3>

                <p className="mt-2 max-w-55 text-[12px] leading-relaxed text-white/75">
                  Your story before the beginning.
                </p>

                <div className="mt-5 flex items-center gap-3 text-[10px] tracking-[0.2em] text-white">
                  VIEW DETAILS

                  <span className="h-px w-7 bg-white/70 transition-all duration-300 group-hover:w-12" />
                </div>

              </div>

              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/0 transition-all duration-500 group-hover:ring-white/40" />
            </motion.article>


            {/* =====================================
                WEDDINGS — LARGE FEATURE
            ===================================== */}

            <motion.article
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              onMouseEnter={() => setHovered(0)}
              onMouseLeave={() => setHovered(null)}
              className="
                group
                relative
                col-span-6
                row-span-2
                overflow-hidden
                rounded-sm
              "
            >
              <motion.div
                className="absolute inset-0"
                animate={{
                  scale: hovered === 0 ? 1.045 : 1,
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Image
                  src={services[0].image}
                  alt={services[0].title}
                  fill
                  priority
                  sizes="50vw"
                  className="object-cover"
                />
              </motion.div>

              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-black/5" />

              {/* Featured label */}

              <div className="absolute left-7 top-7 flex items-center gap-3">
                <span className="h-px w-8 bg-white/60" />

                <span className="text-[10px] tracking-[0.3em] text-white/80">
                  FEATURED STORY
                </span>
              </div>

              {/* Number */}

              <span className="absolute right-7 top-6 font-serif text-4xl text-white/80">
                01
              </span>

              {/* Content */}

              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">

                <p className="mb-3 text-[10px] tracking-[0.3em] text-white/60">
                  THE BIG MOMENTS
                </p>

                <h3 className="font-serif text-5xl leading-none text-white xl:text-6xl">
                  Weddings
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75">
                  The big emotions, the little details, and everything in
                  between.
                </p>

                <div className="mt-7 flex items-center justify-between">

                  <span className="text-[10px] tracking-[0.25em] text-white">
                    VIEW WEDDING STORIES
                  </span>

                  <span
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/60
                      text-white
                      transition-all
                      duration-300
                      group-hover:bg-white
                      group-hover:text-[#1c1a17]
                    "
                  >
                    →
                  </span>

                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/0 transition-all duration-500 group-hover:ring-white/40" />
            </motion.article>


            {/* =====================================
                MATERNITY
            ===================================== */}

            <motion.article
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              onMouseEnter={() => setHovered(2)}
              onMouseLeave={() => setHovered(null)}
              className="
                group
                relative
                col-span-3
                row-span-1
                overflow-hidden
                rounded-sm
              "
            >
              <motion.div
                className="absolute inset-0"
                animate={{
                  scale: hovered === 2 ? 1.06 : 1,
                }}
                transition={{ duration: 0.7 }}
              >
                <Image
                  src={services[2].image}
                  alt={services[2].title}
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </motion.div>

              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent" />

              <span className="absolute right-5 top-5 font-serif text-3xl text-white/80">
                03
              </span>

              <div className="absolute bottom-0 left-0 right-0 p-6">

                <h3 className="font-serif text-2xl text-white">
                  Maternity
                </h3>

                <p className="mt-2 max-w-55 text-[12px] leading-relaxed text-white/75">
                  The beauty of becoming, captured with love.
                </p>

                <div className="mt-5 flex items-center gap-3 text-[10px] tracking-[0.2em] text-white">
                  VIEW DETAILS

                  <span className="h-px w-7 bg-white/70 transition-all duration-300 group-hover:w-12" />
                </div>

              </div>

              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/0 transition-all duration-500 group-hover:ring-white/40" />
            </motion.article>


            {/* =====================================
                BABY STORIES
            ===================================== */}

            <motion.article
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              onMouseEnter={() => setHovered(3)}
              onMouseLeave={() => setHovered(null)}
              className="
                group
                relative
                col-span-3
                row-span-1
                overflow-hidden
                rounded-sm
              "
            >
              <motion.div
                className="absolute inset-0"
                animate={{
                  scale: hovered === 3 ? 1.06 : 1,
                }}
                transition={{ duration: 0.7 }}
              >
                <Image
                  src={services[3].image}
                  alt={services[3].title}
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </motion.div>

              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent" />

              <span className="absolute left-5 top-5 font-serif text-3xl text-white/80">
                04
              </span>

              <div className="absolute bottom-0 left-0 right-0 p-6">

                <h3 className="font-serif text-2xl text-white">
                  Baby Stories
                </h3>

                <p className="mt-2 max-w-55 text-[12px] leading-relaxed text-white/75">
                  Little moments. Forever memories.
                </p>

                <div className="mt-5 flex items-center gap-3 text-[10px] tracking-[0.2em] text-white">
                  VIEW DETAILS

                  <span className="h-px w-7 bg-white/70 transition-all duration-300 group-hover:w-12" />
                </div>

              </div>

              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/0 transition-all duration-500 group-hover:ring-white/40" />
            </motion.article>


            {/* =====================================
                PORTRAITS & FASHION
            ===================================== */}

            <motion.article
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              onMouseEnter={() => setHovered(4)}
              onMouseLeave={() => setHovered(null)}
              className="
                group
                relative
                col-span-3
                row-span-1
                overflow-hidden
                rounded-sm
              "
            >
              <motion.div
                className="absolute inset-0"
                animate={{
                  scale: hovered === 4 ? 1.06 : 1,
                }}
                transition={{ duration: 0.7 }}
              >
                <Image
                  src={services[4].image}
                  alt={services[4].title}
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </motion.div>

              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/25 to-transparent" />

              <span className="absolute right-5 top-5 font-serif text-3xl text-white/80">
                05
              </span>

              <div className="absolute bottom-0 left-0 right-0 p-6">

                <h3 className="font-serif text-2xl text-white">
                  Portraits & Fashion
                </h3>

                <p className="mt-2 max-w-55 text-[12px] leading-relaxed text-white/75">
                  Your image. Your identity.
                </p>

                <div className="mt-5 flex items-center gap-3 text-[10px] tracking-[0.2em] text-white">
                  VIEW DETAILS

                  <span className="h-px w-7 bg-white/70 transition-all duration-300 group-hover:w-12" />
                </div>

              </div>

              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/0 transition-all duration-500 group-hover:ring-white/40" />
            </motion.article>

          </div>


          {/* =====================================
              TABLET GRID
          ===================================== */}

          <div className="hidden md:grid lg:hidden grid-cols-2 gap-4">

            {/* Weddings */}

            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative min-h-130 overflow-hidden rounded-sm md:col-span-2"
              onMouseEnter={() => setHovered(0)}
              onMouseLeave={() => setHovered(null)}
            >
              <motion.div
                className="absolute inset-0"
                animate={{
                  scale: hovered === 0 ? 1.04 : 1,
                }}
                transition={{ duration: 0.7 }}
              >
                <Image
                  src={services[0].image}
                  alt={services[0].title}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover"
                />
              </motion.div>

              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

              <div className="absolute left-6 top-6 text-[10px] tracking-[0.3em] text-white/80">
                FEATURED STORY
              </div>

              <div className="absolute bottom-0 p-8">
                <span className="font-serif text-3xl text-white/80">
                  01
                </span>

                <h3 className="mt-3 font-serif text-5xl text-white">
                  Weddings
                </h3>

                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/75">
                  {services[0].description}
                </p>

                <div className="mt-6 text-[10px] tracking-[0.25em] text-white">
                  VIEW WEDDING STORIES →
                </div>
              </div>
            </motion.article>


            {/* Other Services */}

            {services.slice(1).map((service, index) => {
              const realIndex = index + 1;

              return (
                <motion.article
                  key={service.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                  }}
                  onMouseEnter={() => setHovered(realIndex)}
                  onMouseLeave={() => setHovered(null)}
                  className="group relative min-h-90 overflow-hidden rounded-sm"
                >
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      scale: hovered === realIndex ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.7 }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="50vw"
                      className="object-cover"
                    />
                  </motion.div>

                  <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent" />

                  <span className="absolute left-5 top-5 font-serif text-3xl text-white/80">
                    {service.number}
                  </span>

                  <div className="absolute bottom-0 p-6">
                    <h3 className="font-serif text-2xl text-white">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-sm text-white/75">
                      {service.description}
                    </p>

                    <div className="mt-5 text-[10px] tracking-[0.2em] text-white">
                      VIEW DETAILS →
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>


          {/* =====================================
              MOBILE STACK
          ===================================== */}

          <div className="flex flex-col gap-3 md:hidden">

            {services.map((service, index) => (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className="
                  group
                  relative
                  h-107.5
                  overflow-hidden
                  rounded-sm
                "
              >

                {/* Image */}

                <motion.div
                  className="absolute inset-0"
                  animate={{
                    scale: hovered === index ? 1.04 : 1,
                  }}
                  transition={{ duration: 0.7 }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </motion.div>

                {/* Overlay */}

                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

                {/* Number */}

                <span className="absolute left-5 top-5 font-serif text-3xl text-white/80">
                  {service.number}
                </span>

                {/* Content */}

                <div className="absolute bottom-0 left-0 right-0 p-6">

                  <h3 className="font-serif text-3xl text-white">
                    {service.title}
                  </h3>

                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/75">
                    {service.description}
                  </p>

                  <div className="mt-5 flex items-center gap-3 text-[10px] tracking-[0.2em] text-white">
                    VIEW DETAILS

                    <span className="h-px w-7 bg-white/70 transition-all duration-300 group-hover:w-12" />
                  </div>

                </div>

                {/* Border */}

                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/0 transition-all duration-500 group-hover:ring-white/40" />

              </motion.article>
            ))}

          </div>

        </div>


        {/* =========================================
            BOTTOM EDITORIAL STRIP
        ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 flex flex-wrap items-center justify-between gap-5 border-t border-[#d8d2c4] pt-6 lg:mt-16"
        >

          {/* Left */}

          <div className="flex items-center gap-4">

            <span className="text-[10px] tracking-[0.3em] text-[#9a9284]">
              DIFFERENT MOMENTS
            </span>

            <span className="hidden h-px w-10 bg-[#c9c2b3] sm:block" />

            <span className="hidden text-[10px] tracking-[0.3em] text-[#9a9284] sm:block">
              SAME EMOTIONS
            </span>

          </div>


          {/* Right CTA */}

          <a
            href="#contact"
            className="group flex items-center gap-4"
          >

            <span className="text-[10px] tracking-[0.25em] text-[#6b6459]">
              LET&apos;S CREATE YOURS
            </span>

            <span
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-[#1c1a17]
                text-[#f2efe8]
                transition-all
                duration-300
                group-hover:scale-110
              "
            >
              →
            </span>

          </a>

        </motion.div>

      </div>
    </section>
  );
}