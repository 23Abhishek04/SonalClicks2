"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";


type Card = {
  quote: string;
  name: string;
  category: string;
  photo: string;
};

const PAGES: Card[][] = [
  [
    {
      quote:
        "You didn't just photograph our wedding. You captured how it felt. Every photo takes us back to those exact emotions. Thank you for being a part of our journey!",
      name: "Mayur & Sneha",
      category: "Wedding",
      photo: "https://picsum.photos/seed/fb-wedding-1/300/300",
    },
    {
      quote:
        "Our pre-wedding shoot with Sonal Clicks was a dream! So natural, so beautiful, and so us. The entire experience was smooth and enjoyable.",
      name: "Akshay & Prerna",
      category: "Pre-Wedding",
      photo: "https://picsum.photos/seed/fb-prewed-1/300/300",
    },
    {
      quote:
        "The maternity shoot was such a special experience. Sonal made me feel so comfortable and the photos are simply magical. We will treasure them forever.",
      name: "Rutuja",
      category: "Maternity",
      photo: "https://picsum.photos/seed/fb-maternity-1/300/300",
    },
    {
      quote:
        "The baby shoot was handled with so much patience and care. The pictures are adorable and full of life. Highly recommend Sonal Clicks!",
      name: "Aarav's Parents",
      category: "Baby Shoot",
      photo: "https://picsum.photos/seed/fb-baby-1/300/300",
    },
    {
      quote:
        "Professional, creative and extremely talented! The portraits turned out better than I imagined. Sonal has a unique ability to bring out the best in you.",
      name: "Neha",
      category: "Portraits",
      photo: "https://picsum.photos/seed/fb-portrait-1/300/300",
    },
  ],
  [
    {
      quote:
        "Every single frame felt personal. It never once felt like a shoot, it felt like someone quietly capturing our day as it happened.",
      name: "Karthik & Divya",
      category: "Wedding",
      photo: "https://picsum.photos/seed/fb-wedding-2/300/300",
    },
    {
      quote:
        "We were nervous in front of the camera, but the whole shoot felt like hanging out with a friend. The photos look effortless.",
      name: "Yash & Simran",
      category: "Pre-Wedding",
      photo: "https://picsum.photos/seed/fb-prewed-2/300/300",
    },
    {
      quote:
        "I've never felt more at ease in front of a camera. The maternity photos are soft, warm, and exactly how that time in my life felt.",
      name: "Pooja",
      category: "Maternity",
      photo: "https://picsum.photos/seed/fb-maternity-2/300/300",
    },
    {
      quote:
        "So much patience with a very wiggly one-year-old! Every single photo came out full of personality and joy.",
      name: "Kabir's Parents",
      category: "Baby Shoot",
      photo: "https://picsum.photos/seed/fb-baby-2/300/300",
    },
    {
      quote:
        "I wanted portraits that actually looked like me on a good day, not a stranger. That's exactly what I got.",
      name: "Farah",
      category: "Portraits",
      photo: "https://picsum.photos/seed/fb-portrait-2/300/300",
    },
  ],
  [
    {
      quote:
        "Even my in-laws, who are impossible to please, couldn't stop talking about how beautiful the wedding album turned out.",
      name: "Rahul & Ishaani",
      category: "Wedding",
      photo: "https://picsum.photos/seed/fb-wedding-3/300/300",
    },
    {
      quote:
        "We booked the pre-wedding shoot on a whim and it ended up being one of our favorite days together. The photos still make us smile.",
      name: "Varun & Anjali",
      category: "Pre-Wedding",
      photo: "https://picsum.photos/seed/fb-prewed-3/300/300",
    },
    {
      quote:
        "Being 8 months pregnant and still feeling beautiful in photos felt impossible, until this shoot. I'm so grateful.",
      name: "Nikita",
      category: "Maternity",
      photo: "https://picsum.photos/seed/fb-maternity-3/300/300",
    },
    {
      quote:
        "Our daughter wouldn't stop laughing the whole shoot, and somehow every single photo caught that exact joy.",
      name: "Meher's Parents",
      category: "Baby Shoot",
      photo: "https://picsum.photos/seed/fb-baby-3/300/300",
    },
    {
      quote:
        "Ten minutes in and I forgot the camera was even there. That's when the best photos happened.",
      name: "Ojas",
      category: "Portraits",
      photo: "https://picsum.photos/seed/fb-portrait-3/300/300",
    },
  ],
];

export default function Feedback() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const total = PAGES.length;
  const cards = PAGES[page];

  const goTo = (next: number, dir: number) => {
    setDirection(dir);
    setPage((next + total) % total);
  };

  return (
    <section className="relative overflow-hidden bg-[#F1ECE3] py-16 sm:py-20 md:py-24">
      {/* decorative bottom-right bloom */}
      <svg
        aria-hidden
        className="pointer-events-none absolute -bottom-10 -right-10 hidden h-72 w-72 text-[#C9A98C]/25 lg:block"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle cx="140" cy="150" r="6" stroke="currentColor" strokeWidth="1.2" />
        <path
          d="M140 150C120 130 100 120 70 118M140 150C130 125 128 100 140 78M140 150C160 135 175 112 178 88"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </svg>

      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* ---------------- header ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 flex flex-col justify-between gap-8 md:mb-16 lg:flex-row lg:items-start"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="text-xs font-medium tracking-[0.25em] text-[#8A8177]">
                CLIENT FEEDBACK
              </span>
              <span className="h-px w-10 bg-[#8A8177]/50" />
            </div>
            <h2
              className="text-[2.5rem] leading-[1.05] text-[#221E1A] sm:text-5xl lg:text-[3.25rem]"
              style={{ fontFamily: "var(--font-display, serif)" }}
            >
              Words From People
              <br />
              <span className="italic text-[#3A342E]">
                We&rsquo;ve Photographed.
              </span>
            </h2>
          </div>

          <div className="flex items-start justify-between gap-10 lg:gap-16">
            <div className="max-w-[15rem]">
              <p className="text-[#4A443C] sm:text-lg">
                Every story we capture is special, but what means the most is
                the love we receive in return.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <span className="h-px w-6 bg-[#3A342E]/40" />
                <span className="text-[11px] tracking-[0.2em] text-[#6B6459]">
                  REAL PEOPLE. REAL STORIES.
                </span>
              </div>
            </div>

            <p
              className="hidden shrink-0 text-2xl leading-6 text-[#8A8177]/70 sm:block"
              style={{ fontFamily: "var(--font-script, cursive)" }}
            >
              Grateful
              <br />
              Always
            </p>
          </div>
        </motion.div>

        {/* ---------------- card strip ---------------- */}
        <div className="flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] lg:gap-0 lg:overflow-visible [&::-webkit-scrollbar]:hidden">
          {/* left bookend photo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="group relative h-[26rem] w-40 shrink-0 snap-start overflow-hidden rounded-2xl sm:h-[28rem] sm:w-48 lg:h-auto lg:w-[13%] lg:rounded-none lg:rounded-l-2xl"
          >
            <img
              src="https://picsum.photos/seed/fb-bloom-left/500/900"
              alt=""
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-5 left-4 right-4 text-white">
              <p className="text-[11px] uppercase leading-snug tracking-[0.15em]">
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
          </motion.div>

          {/* quote cards */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              initial={{ opacity: 0, x: direction >= 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction >= 0 ? -40 : 40 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="contents"
            >
              {cards.map((card, i) => (
                <motion.div
                  key={card.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  whileHover={{ y: -6 }}
                  className={`group relative flex w-64 shrink-0 snap-start flex-col justify-between rounded-2xl px-6 py-8 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:w-72 lg:w-auto lg:flex-1 lg:rounded-none lg:shadow-none lg:hover:shadow-none ${
                    i % 2 === 0 ? "bg-[#FAF8F4]" : "bg-[#F1ECE3] lg:bg-transparent"
                  }`}
                >
                  <div>
                    <span
                      className="text-4xl leading-none text-[#C9A98C]"
                      style={{ fontFamily: "var(--font-display, serif)" }}
                      aria-hidden
                    >
                      &ldquo;
                    </span>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-[#2E2A25]">
                      {card.quote}
                    </p>
                  </div>

                  <div className="mt-8">
                    <div className="mx-auto h-24 w-24 overflow-hidden rounded-full ring-1 ring-black/5">
                      <img
                        src={card.photo}
                        alt={card.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <p className="text-xs font-medium tracking-[0.15em] text-[#221E1A]">
                        {card.name.toUpperCase()}
                      </p>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#9A9186]">
                        {card.category}
                      </p>
                      <span className="mx-auto mt-3 block h-px w-6 bg-[#3A342E]/25 transition-all duration-300 group-hover:w-10" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* right bookend photo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="group relative h-[26rem] w-40 shrink-0 snap-start overflow-hidden rounded-2xl sm:h-[28rem] sm:w-48 lg:h-auto lg:w-[13%] lg:rounded-none lg:rounded-r-2xl"
          >
            <img
              src="https://picsum.photos/seed/fb-note-right/500/900"
              alt=""
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-transparent" />
            <p
              className="absolute right-4 top-8 text-right text-lg italic leading-snug text-white/90"
              style={{ fontFamily: "var(--font-script, cursive)" }}
            >
              Thank you
              <br />
              for being
              <br />
              a part of
              <br />
              our story
            </p>
            <div className="absolute bottom-5 left-4 right-4 text-white">
              <p className="text-[11px] uppercase leading-snug tracking-[0.15em]">
                It Means
                <br />
                The World
              </p>
              <span className="mt-3 block h-px w-6 bg-white/60" />
            </div>
          </motion.div>
        </div>

        {/* ---------------- footer controls ---------------- */}
        <div className="mt-10 flex items-center justify-between md:mt-14">
          <div className="flex items-center gap-4">
            <button
              onClick={() => goTo(page - 1, -1)}
              aria-label="Previous set"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3A342E]/25 text-[#3A342E] transition-transform duration-200 hover:-translate-x-0.5 hover:border-[#3A342E] active:scale-95"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <span className="text-xs tracking-[0.2em] text-[#6B6459]">
              {String(page + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <button
              onClick={() => goTo(page + 1, 1)}
              aria-label="Next set"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3A342E]/25 text-[#3A342E] transition-transform duration-200 hover:translate-x-0.5 hover:border-[#3A342E] active:scale-95"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <a
            href="#"
            className="group hidden items-center gap-4 sm:flex"
          >
            <span className="h-px w-16 bg-[#3A342E]/25 transition-all duration-300 group-hover:w-24" />
            <span className="text-xs tracking-[0.2em] text-[#3A342E]">
              MORE STORIES
            </span>
            <ArrowRight className="h-4 w-4 text-[#3A342E] transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* ---------------- decorative footer row ---------------- */}
      
      </div>
    </section>
  );
}

