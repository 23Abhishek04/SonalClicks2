"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface GalleryItem {
  id: number;
  image: string;
  category: string;
  title: string;
  position: string;
  size: string;
}

const gallery: GalleryItem[] = [
  {
    id: 1,
    image: "/portfolio/1.jpg",
    category: "WEDDINGS",
    title: "The Beginning",
    position: "center",
    size: "featured",
  },
  {
    id: 2,
    image: "/portfolio/2.jpg",
    category: "PRE-WEDDINGS",
    title: "Before Forever",
    position: "40% center",
    size: "tall",
  },
  {
    id: 3,
    image: "/portfolio/3.jpg",
    category: "PORTRAITS",
    title: "In The Moment",
    position: "65% center",
    size: "medium",
  },
  {
    id: 4,
    image: "/portfolio/4.jpg",
    category: "WEDDINGS",
    title: "Pure Emotion",
    position: "30% center",
    size: "small",
  },
  {
    id: 5,
    image: "/portfolio/5.jpg",
    category: "MATERNITY",
    title: "Becoming",
    position: "75% center",
    size: "wide",
  },
  {
    id: 6,
    image: "/portfolio/6.jpg",
    category: "BABY STORIES",
    title: "Little Things",
    position: "50% 25%",
    size: "medium",
  },
  {
    id: 7,
    image: "/portfolio/7.jpg",
    category: "PORTRAITS",
    title: "Unscripted",
    position: "25% center",
    size: "tall",
  },
  {
    id: 8,
    image: "/portfolio/8.jpg",
    category: "WEDDINGS",
    title: "Always",
    position: "70% center",
    size: "small",
  },
  {
    id: 9,
    image: "/portfolio/9.jpg",
    category: "PRE-WEDDINGS",
    title: "Just Us",
    position: "45% center",
    size: "wide",
  },
  {
    id: 10,
    image: "/portfolio/10.jpg",
    category: "FASHION",
    title: "Your Story",
    position: "60% center",
    size: "medium",
  },
  {
    id: 11,
    image: "/portfolio/11.jpg",
    category: "WEDDINGS",
    title: "Forever Begins",
    position: "35% center",
    size: "tall",
  },
  {
    id: 12,
    image: "/portfolio/12.jpg",
    category: "MOMENTS",
    title: "In Focus",
    position: "50% center",
    size: "small",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 70,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#f2efe8] text-[#1c1a17]"
    >
      <div className="mx-auto max-w-[1600px] px-6 py-24 sm:px-10 md:px-12 lg:px-16 lg:py-32">

        {/* ==================================================
            INTRO
        ================================================== */}

        <div className="relative mb-16 lg:mb-24">

          {/* Small top label */}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="mb-8 flex items-center gap-3"
          >
            <span className="text-[10px] font-medium tracking-[0.35em] text-[#6b6459]">
              PORTFOLIO
            </span>

            <span className="h-px w-12 bg-[#6b6459]/50" />
          </motion.div>

          {/* Main heading */}

          <div className="grid gap-8 lg:grid-cols-[1fr_300px] lg:items-end">

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-4xl font-serif text-[14vw] leading-[0.82] tracking-[-0.04em] sm:text-7xl md:text-8xl lg:text-[100px]"
            >
              Moments
              <br />
              <span className="italic">
                Worth Keeping.
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.25,
              }}
              className="max-w-xs lg:pb-2"
            >
              <p className="text-sm leading-relaxed text-[#6b6459]">
                A collection of honest moments, beautiful people and stories
                that deserve to be remembered exactly as they felt.
              </p>

              <div className="mt-6 flex items-center gap-3 text-[10px] tracking-[0.25em] text-[#1c1a17]">
                <span className="h-8 w-8 rounded-full border border-[#1c1a17] text-center leading-8">
                  ↓
                </span>

                SCROLL TO EXPLORE
              </div>
            </motion.div>
          </div>

          {/* Decorative script */}

          <motion.div
            initial={{ opacity: 0, rotate: -8, x: 30 }}
            whileInView={{ opacity: 1, rotate: -4, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.4,
            }}
            className="pointer-events-none absolute right-0 top-0 hidden xl:block"
          >
            <span className="font-script text-5xl text-[#c9c2b3]">
              beautifully
              <br />
              imperfect
            </span>
          </motion.div>
        </div>

        {/* ==================================================
            FEATURED INTRO LINE
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-8 origin-left border-t border-[#d8d2c4]"
        />

        <div className="mb-10 flex items-center justify-between">
          <span className="text-[10px] tracking-[0.3em] text-[#8b8477]">
            01 — 12
          </span>

          <span className="hidden text-[10px] tracking-[0.3em] text-[#8b8477] sm:block">
            PEOPLE · EMOTIONS · STORIES
          </span>
        </div>

        {/* ==================================================
            EDITORIAL GALLERY
        ================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className="
            grid
            grid-cols-1
            gap-4

            sm:grid-cols-2

            lg:grid-cols-12
            lg:auto-rows-18.75
            lg:gap-5
          "
        >
          {gallery.map((item, index) => {
            let layout = "";

            /*
             * Desktop editorial positioning.
             * Each image gets a different visual weight.
             */

            switch (index) {
              case 0:
                layout =
                  "lg:col-span-7 lg:row-span-8";
                break;

              case 1:
                layout =
                  "lg:col-span-5 lg:row-span-5";
                break;

              case 2:
                layout =
                  "lg:col-span-5 lg:row-span-6";
                break;

              case 3:
                layout =
                  "lg:col-span-3 lg:row-span-4";
                break;

              case 4:
                layout =
                  "lg:col-span-4 lg:row-span-4";
                break;

              case 5:
                layout =
                  "lg:col-span-5 lg:row-span-5";
                break;

              case 6:
                layout =
                  "lg:col-span-5 lg:row-span-6";
                break;

              case 7:
                layout =
                  "lg:col-span-3 lg:row-span-4";
                break;

              case 8:
                layout =
                  "lg:col-span-4 lg:row-span-5";
                break;

              case 9:
                layout =
                  "lg:col-span-5 lg:row-span-6";
                break;

              case 10:
                layout =
                  "lg:col-span-4 lg:row-span-5";
                break;

              default:
                layout =
                  "lg:col-span-3 lg:row-span-4";
            }

            return (
              <motion.article
                key={item.id}
                variants={itemVariants}
                className={`group relative min-h-107.5 overflow-hidden bg-[#ddd8ce] sm:min-h-125 lg:min-h-0 ${layout}`}
              >
                {/* Image */}

                <motion.div
                  className="absolute inset-0"
                  whileHover={{
                    scale: 1.045,
                  }}
                  transition={{
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="
                      (max-width: 639px) 100vw,
                      (max-width: 1023px) 50vw,
                      60vw
                    "
                    className="object-cover"
                    style={{
                      objectPosition: item.position,
                    }}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </motion.div>

                {/* Dark hover gradient */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-linear-to-t
                    from-black/70
                    via-black/5
                    to-transparent
                    opacity-70
                    transition-opacity
                    duration-700
                    group-hover:opacity-100
                  "
                />

                {/* Number */}

                <div className="absolute left-5 top-5 flex items-center gap-2 text-white">
                  <span className="text-[11px] tracking-[0.2em]">
                    {String(item.id).padStart(2, "0")}
                  </span>

                  <span className="h-px w-6 bg-white/60" />
                </div>

                {/* Category */}

                <div
                  className="
                    absolute
                    right-5
                    top-5
                    text-[9px]
                    font-medium
                    tracking-[0.25em]
                    text-white/80
                  "
                >
                  {item.category}
                </div>

                {/* Bottom information */}

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">

                  <motion.div
                    initial={{ y: 15, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.15 + index * 0.04,
                    }}
                    className="translate-y-2 transition-transform duration-500 group-hover:translate-y-0"
                  >
                    <h3 className="font-serif text-2xl text-white sm:text-3xl">
                      {item.title}
                    </h3>

                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-[9px] tracking-[0.25em] text-white/70">
                        SONAL CLICKS
                      </span>

                      <span
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/40
                          text-white
                          opacity-0
                          transition-all
                          duration-500
                          group-hover:opacity-100
                        "
                      >
                        ↗
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Border */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-3
                    border
                    border-white/0
                    transition-all
                    duration-700
                    group-hover:border-white/30
                  "
                />
              </motion.article>
            );
          })}
        </motion.div>

      
      </div>
    </section>
  );
}