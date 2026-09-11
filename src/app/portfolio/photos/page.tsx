"use client";

import Image from "next/image";
import { m } from "framer-motion";

/* ============================================================
   TYPES
============================================================ */

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  position: string;
}

interface CategoryData {
  slug: string;
  label: string;
  heading: string;
  headingItalic: string;
  blurb: string;
  count: string;
  items: GalleryItem[];
}

/* ============================================================
   DATA
   NOTE: image paths assume files live under
   /public/portfolio/{slug}/{n}.webp — update the paths below
   to match wherever the real assets end up.
============================================================ */

const categories: CategoryData[] = [
  {
    slug: "wedding",
    label: "WEDDINGS",
    heading: "Two Lives,",
    headingItalic: "One Story.",
    blurb:
      "Full wedding-day coverage — the nerves, the vows, the dance floor chaos — told the way it actually happened.",
    count: "01 — 06",
    items: [
      { id: 1, image: "/portfolio/wedding/1.webp", title: "The Beginning", position: "center" },
      { id: 2, image: "/portfolio/wedding/2.webp", title: "Pure Emotion", position: "30% center" },
      { id: 3, image: "/portfolio/wedding/3.webp", title: "Always", position: "70% center" },
      { id: 4, image: "/portfolio/wedding/4.webp", title: "Forever Begins", position: "35% center" },
      { id: 5, image: "/portfolio/wedding/5.webp", title: "Witness To It", position: "50% 25%" },
      { id: 6, image: "/portfolio/wedding/6.webp", title: "The First Look", position: "60% center" },
    ],
  },
  {
    slug: "pre-wedding",
    label: "PRE-WEDDINGS",
    heading: "Before",
    headingItalic: "Forever.",
    blurb:
      "Relaxed, cinematic shoots for couples who want their story told before the big day even starts.",
    count: "01 — 06",
    items: [
      { id: 1, image: "/portfolio/pre-wedding/1.webp", title: "Before Forever", position: "40% center" },
      { id: 2, image: "/portfolio/pre-wedding/2.webp", title: "Just Us", position: "45% center" },
      { id: 3, image: "/portfolio/pre-wedding/3.webp", title: "Quiet Moments", position: "center" },
      { id: 4, image: "/portfolio/pre-wedding/4.webp", title: "Golden Hour", position: "55% center" },
      { id: 5, image: "/portfolio/pre-wedding/5.webp", title: "Say Yes", position: "40% 30%" },
      { id: 6, image: "/portfolio/pre-wedding/6.webp", title: "Two Of Us", position: "65% center" },
    ],
  },
  {
    slug: "baby-shoot",
    label: "BABY STORIES",
    heading: "Little",
    headingItalic: "Things.",
    blurb:
      "Soft, unhurried sessions that capture the tiny details of a newborn's first days and months.",
    count: "01 — 06",
    items: [
      { id: 1, image: "/portfolio/baby-shoot/1.webp", title: "Little Things", position: "50% 25%" },
      { id: 2, image: "/portfolio/baby-shoot/2.webp", title: "First Smile", position: "center" },
      { id: 3, image: "/portfolio/baby-shoot/3.webp", title: "Tiny Fingers", position: "45% center" },
      { id: 4, image: "/portfolio/baby-shoot/4.webp", title: "In Focus", position: "50% center" },
      { id: 5, image: "/portfolio/baby-shoot/5.webp", title: "Soft Light", position: "35% center" },
      { id: 6, image: "/portfolio/baby-shoot/6.webp", title: "New Beginnings", position: "60% 20%" },
    ],
  },
  {
    slug: "maternity",
    label: "MATERNITY",
    heading: "Becoming",
    headingItalic: "A Mother.",
    blurb:
      "Gentle portraits that honour the last few weeks of waiting — glow, anticipation and all.",
    count: "01 — 06",
    items: [
      { id: 1, image: "/portfolio/maternity/1.webp", title: "Becoming", position: "75% center" },
      { id: 2, image: "/portfolio/maternity/2.webp", title: "Almost There", position: "50% center" },
      { id: 3, image: "/portfolio/maternity/3.webp", title: "The Glow", position: "40% center" },
      { id: 4, image: "/portfolio/maternity/4.webp", title: "Waiting", position: "center" },
      { id: 5, image: "/portfolio/maternity/5.webp", title: "Nine Months", position: "55% 30%" },
      { id: 6, image: "/portfolio/maternity/6.webp", title: "Two Heartbeats", position: "45% center" },
    ],
  },
  {
    slug: "model-shoot",
    label: "MODEL SHOOTS",
    heading: "Your",
    headingItalic: "Story.",
    blurb:
      "Editorial portraits built around personality and light — for portfolios, brands and fashion work.",
    count: "01 — 06",
    items: [
      { id: 1, image: "/portfolio/model-shoot/1.webp", title: "Your Story", position: "60% center" },
      { id: 2, image: "/portfolio/model-shoot/2.webp", title: "Unscripted", position: "25% center" },
      { id: 3, image: "/portfolio/model-shoot/3.webp", title: "In The Moment", position: "65% center" },
      { id: 4, image: "/portfolio/model-shoot/4.webp", title: "Frame By Frame", position: "50% center" },
      { id: 5, image: "/portfolio/model-shoot/5.webp", title: "Studio Light", position: "40% 20%" },
      { id: 6, image: "/portfolio/model-shoot/6.webp", title: "All Angles", position: "55% center" },
    ],
  },
];

/* ============================================================
   LAYOUT PATTERNS
   Six recurring editorial spans, rotated with a per-section
   offset so consecutive sections don't feel identical.
============================================================ */

const layoutPatterns = [
  "lg:col-span-7 lg:row-span-7",
  "lg:col-span-5 lg:row-span-5",
  "lg:col-span-5 lg:row-span-6",
  "lg:col-span-3 lg:row-span-4",
  "lg:col-span-4 lg:row-span-4",
  "lg:col-span-5 lg:row-span-5",
];

function getLayout(itemIndex: number, sectionOffset: number) {
  return layoutPatterns[(itemIndex + sectionOffset) % layoutPatterns.length];
}

/* ============================================================
   MOTION VARIANTS
============================================================ */

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

/* ============================================================
   CATEGORY SECTION
============================================================ */

function CategorySection({
  data,
  sectionOffset,
}: {
  data: CategoryData;
  sectionOffset: number;
}) {
  return (
    <section
      id={data.slug}
      className="relative overflow-hidden bg-[#f2efe8] text-[#1c1a17] scroll-mt-20"
    >
      <div className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10 md:px-12 lg:px-16 lg:py-28">
        {/* ---------- INTRO ---------- */}

        <div className="relative mb-12 lg:mb-20">
          <m.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="text-[10px] font-medium tracking-[0.35em] text-[#6b6459]">
              {data.label}
            </span>
            <span className="h-px w-12 bg-[#6b6459]/50" />
          </m.div>

          <div className="grid gap-6 lg:grid-cols-[1fr_300px] lg:items-end">
            <m.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl font-serif text-[12vw] leading-[0.85] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[76px]"
            >
              {data.heading}
              <br />
              <span className="italic">{data.headingItalic}</span>
            </m.h2>

            <m.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="max-w-xs lg:pb-2"
            >
              <p className="text-sm leading-relaxed text-[#6b6459]">
                {data.blurb}
              </p>
            </m.div>
          </div>
        </div>

        {/* ---------- DIVIDER / COUNT ---------- */}

        <m.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 origin-left border-t border-[#d8d2c4]"
        />

        <div className="mb-8 flex items-center justify-between">
          <span className="text-[10px] tracking-[0.3em] text-[#8b8477]">
            {data.count}
          </span>
        </div>

        {/* ---------- GALLERY GRID ---------- */}

        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
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
          {data.items.map((item, index) => (
            <m.article
              key={item.id}
              variants={itemVariants}
              className={`group relative min-h-90 overflow-hidden bg-[#ddd8ce] sm:min-h-110 lg:min-h-0 ${getLayout(
                index,
                sectionOffset
              )}`}
            >
              {/* Image */}

              <m.div
                className="absolute inset-0"
                whileHover={{ scale: 1.045 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
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
                  style={{ objectPosition: item.position }}
                />
              </m.div>

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

              <div className="absolute right-5 top-5 text-[9px] font-medium tracking-[0.25em] text-white/80">
                {data.label}
              </div>

              {/* Bottom info */}

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <m.div
                  initial={{ y: 15, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 + index * 0.04 }}
                  className="translate-y-2 transition-transform duration-500 group-hover:translate-y-0"
                >
                  <h3 className="font-serif text-xl text-white sm:text-2xl md:text-3xl">
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
                </m.div>
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
            </m.article>
          ))}
        </m.div>
      </div>
    </section>
  );
}

/* ============================================================
   STICKY CATEGORY NAV
============================================================ */

function CategoryNav() {
  return (
    <nav className="sticky top-0 z-30 border-b border-[#d8d2c4] bg-[#f2efe8]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1600px] items-center gap-1 overflow-x-auto px-6 py-4 sm:px-10 md:px-12 lg:px-16">
        {categories.map((cat) => (
          <a
            key={cat.slug}
            href={`#${cat.slug}`}
            className="
              shrink-0
              whitespace-nowrap
              rounded-full
              border
              border-[#1c1a17]/15
              px-4
              py-2
              text-[10px]
              font-medium
              tracking-[0.2em]
              text-[#6b6459]
              transition-colors
              duration-300
              hover:border-[#1c1a17]/40
              hover:text-[#1c1a17]
            "
          >
            {cat.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

/* ============================================================
   PAGE
============================================================ */

export default function PortfolioPhotosPage() {
  return (
    <main className="bg-[#f2efe8]">
      {/* ---------- PAGE HERO ---------- */}

      <section className="relative overflow-hidden bg-[#f2efe8] text-[#1c1a17]">
        <div className="mx-auto max-w-[1600px] px-6 pb-14 pt-24 sm:px-10 md:px-12 lg:px-16 lg:pb-20 lg:pt-32">
          <m.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="mb-8 flex items-center gap-3"
          >
            <span className="text-[10px] font-medium tracking-[0.35em] text-[#6b6459]">
              FULL PORTFOLIO
            </span>
            <span className="h-px w-12 bg-[#6b6459]/50" />
          </m.div>

          <m.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl font-serif text-[13vw] leading-[0.85] tracking-[-0.04em] sm:text-7xl md:text-8xl lg:text-[100px]"
          >
            Every Story,
            <br />
            <span className="italic">Every Season.</span>
          </m.h1>

          <m.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 max-w-md text-sm leading-relaxed text-[#6b6459]"
          >
            Weddings, pre-weddings, babies, bumps and portraits — browse the
            full body of work by category.
          </m.p>
        </div>
      </section>

      <CategoryNav />

      {/* ---------- CATEGORY SECTIONS ---------- */}

      {categories.map((cat, i) => (
        <div key={cat.slug} className={i % 2 === 1 ? "bg-[#ece7dc]" : ""}>
          <CategorySection data={cat} sectionOffset={i * 2} />
        </div>
      ))}
    </main>
  );
}