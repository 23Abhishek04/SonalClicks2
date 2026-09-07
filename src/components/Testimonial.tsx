"use client";


import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
  Camera,
  ArrowRight,
} from "lucide-react";


type Testimonial = {
  quote: string;
  author: string;
  category: string;
  rating: number;
  avatar: string;
  username: string;
  location: string;
  postImage: string;
  caption: string;
  comments: number;
  postedAgo: string;
  strip: string[]; // three "more photos" behind the main card
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Your story, beautifully told through our lens. The photos were beyond our expectations! Every moment felt so natural and magical. Thank you for capturing our special day so perfectly!",
    author: "Priya & Karan",
    category: "Wedding",
    rating: 5,
    avatar: "https://picsum.photos/seed/couple1/100/100",
    username: "sonalclicks_111",
    location: "Pune, India",
    postImage: "https://picsum.photos/seed/wedding1/900/1100",
    caption: "A frame full of love",
    comments: 120,
    postedAgo: "2 days ago",
    strip: [
      "https://picsum.photos/seed/strip1a/700/1000",
      "https://picsum.photos/seed/strip1b/700/1000",
      "https://picsum.photos/seed/strip1c/700/1000",
    ],
  },
  {
    quote:
      "We didn't just get photographs, we got memories frozen in time. The team made us feel so comfortable that every shot looks effortless and real.",
    author: "Ishita & Rohan",
    category: "Pre-Wedding",
    rating: 5,
    avatar: "https://picsum.photos/seed/couple2/100/100",
    username: "framesbyishu",
    location: "Udaipur, India",
    postImage: "https://picsum.photos/seed/wedding2/900/1100",
    caption: "Golden hour, golden hearts",
    comments: 86,
    postedAgo: "5 days ago",
    strip: [
      "https://picsum.photos/seed/strip2a/700/1000",
      "https://picsum.photos/seed/strip2b/700/1000",
      "https://picsum.photos/seed/strip2c/700/1000",
    ],
  },
  {
    quote:
      "From the mehendi to the last dance, every emotion was captured with so much care. Looking back at the album still gives us goosebumps.",
    author: "Ananya & Dev",
    category: "Wedding",
    rating: 5,
    avatar: "https://picsum.photos/seed/couple3/100/100",
    username: "devs.diaries",
    location: "Jaipur, India",
    postImage: "https://picsum.photos/seed/wedding3/900/1100",
    caption: "Forever started here",
    comments: 154,
    postedAgo: "1 week ago",
    strip: [
      "https://picsum.photos/seed/strip3a/700/1000",
      "https://picsum.photos/seed/strip3b/700/1000",
      "https://picsum.photos/seed/strip3c/700/1000",
    ],
  },
  {
    quote:
      "Professional, patient, and incredibly talented. They understood exactly what we wanted before we could even explain it. Highly recommend!",
    author: "Meera & Aditya",
    category: "Engagement",
    rating: 5,
    avatar: "https://picsum.photos/seed/couple4/100/100",
    username: "meera.and.adi",
    location: "Goa, India",
    postImage: "https://picsum.photos/seed/wedding4/900/1100",
    caption: "Said yes to forever",
    comments: 63,
    postedAgo: "2 weeks ago",
    strip: [
      "https://picsum.photos/seed/strip4a/700/1000",
      "https://picsum.photos/seed/strip4b/700/1000",
      "https://picsum.photos/seed/strip4c/700/1000",
    ],
  },
  {
    quote:
      "Every single picture tells a story. Our families still go through the album every few months and relive the whole wedding all over again.",
    author: "Sneha & Arjun",
    category: "Wedding",
    rating: 5,
    avatar: "https://picsum.photos/seed/couple5/100/100",
    username: "arjun.clicks",
    location: "Jodhpur, India",
    postImage: "https://picsum.photos/seed/wedding5/900/1100",
    caption: "A love written in light",
    comments: 98,
    postedAgo: "3 weeks ago",
    strip: [
      "https://picsum.photos/seed/strip5a/700/1000",
      "https://picsum.photos/seed/strip5b/700/1000",
      "https://picsum.photos/seed/strip5c/700/1000",
    ],
  },
];

/* -------------------------------------------------------------------- */
/*  Component                                                            */
/* -------------------------------------------------------------------- */

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const [liked, setLiked] = useState(false);
  const [direction, setDirection] = useState(0);

  const total = TESTIMONIALS.length;
  const current = TESTIMONIALS[index];

  const goTo = (next: number, dir: number) => {
    setDirection(dir);
    setLiked(false);
    setIndex((next + total) % total);
  };

  const handlePrev = () => goTo(index - 1, -1);
  const handleNext = () => goTo(index + 1, 1);

  return (
    <section className="relative overflow-hidden bg-[#F1ECE3] px-6 py-16 sm:px-10 md:py-20 lg:px-16 lg:py-24">
      {/* decorative botanical corner — desktop only */}
      <svg
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 hidden h-64 w-64 text-[#C9A98C]/40 lg:block"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M180 200C180 150 170 100 150 60M150 60C140 40 120 30 100 35M150 60C160 40 165 20 160 0M120 200C122 160 118 120 105 90M105 90C98 72 82 65 65 70M105 90C112 72 112 52 105 35"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>

      <div className="relative mx-auto max-w-7xl">
        {/* top row: eyebrow (mobile+desktop) & script/nav (desktop only) */}
        <div className="mb-10 flex items-start justify-between md:mb-14">
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium tracking-[0.25em] text-[#8A8177]">
              TESTIMONIALS
            </span>
            <span className="h-px w-10 bg-[#8A8177]/50" />
          </div>

          <div className="hidden items-start gap-8 lg:flex">
            <div className="relative">
              <p
                className="text-2xl leading-6 text-[#8A8177]"
                style={{ fontFamily: "var(--font-script, cursive)" }}
              >
                Captured
                <br />
                With Love
              </p>
              <Heart className="absolute -right-7 top-1 h-4 w-4 text-[#8A8177]" />
            </div>
            <ul className="space-y-1 border-l border-[#8A8177]/30 pl-6 text-xs tracking-[0.2em] text-[#3A342E]">
              {["PEOPLE", "PLACES", "EMOTIONS", "FOREVER"].map((label) => (
                <li key={label}>{label}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* main grid */}
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-10">
          {/* ---------------- left: copy + quote ---------------- */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2
              className="font-serif text-[2.75rem] leading-[1.05] text-[#221E1A] sm:text-5xl lg:text-[3.4rem]"
              style={{ fontFamily: "var(--font-display, serif)" }}
            >
              Real Stories.
              <br />
              <span className="italic text-[#3A342E]">Real Emotions.</span>
            </h2>

            <p className="mt-5 max-w-sm text-[#6B6459] sm:text-lg">
              Hear it from the people who trusted us with their most special
              moments.
            </p>

            <div className="relative mt-10 max-w-md">
              <span
                className="absolute -left-2 -top-6 text-7xl leading-none text-[#C9A98C]/70"
                style={{ fontFamily: "var(--font-display, serif)" }}
                aria-hidden
              >
                &ldquo;
              </span>

              <AnimatePresence mode="wait" custom={direction}>
                <motion.blockquote
                  key={index}
                  custom={direction}
                  initial={{ opacity: 0, x: direction >= 0 ? 24 : -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction >= 0 ? -24 : 24 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative z-10 text-lg leading-relaxed text-[#2E2A25] sm:text-xl"
                  style={{ fontFamily: "var(--font-display, serif)" }}
                >
                  {current.quote}
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* author row */}
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-8 flex items-center gap-4"
              >
                <img
                  src={current.avatar}
                  alt={current.author}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-white"
                />
                <div>
                  <div className="flex text-[#D97757]">
                    {Array.from({ length: current.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="mt-0.5 text-sm text-[#3A342E]">
                    {current.author}
                  </p>
                  <p className="text-xs uppercase tracking-[0.15em] text-[#9A9186]">
                    {current.category}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* carousel controls */}
            <div className="mt-10 flex items-center gap-4">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3A342E]/25 text-[#3A342E] transition-transform duration-200 hover:-translate-x-0.5 hover:border-[#3A342E] active:scale-95"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="text-xs tracking-[0.2em] text-[#6B6459]">
                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3A342E]/25 text-[#3A342E] transition-transform duration-200 hover:translate-x-0.5 hover:border-[#3A342E] active:scale-95"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>

          {/* ---------------- right: instagram-style showcase ---------------- */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* peeking photo strip — hidden on small mobile */}
              <div className="pointer-events-none absolute inset-y-6 -right-4 hidden w-[130%] sm:flex md:-right-10 md:w-[150%]">
                {current.strip.map((src, i) => (
                  <div
                    key={src}
                    className="group pointer-events-auto relative -ml-6 h-full flex-1 overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 first:ml-24 hover:z-20 hover:-translate-y-2 sm:first:ml-32 md:first:ml-40"
                    style={{
                      transform: `rotate(${(i - 1) * 1.5}deg)`,
                      zIndex: 5 - i,
                    }}
                  >
                    <img
                      src={src}
                      alt=""
                      className="h-full w-full scale-105 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <span className="absolute left-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm">
                      <Camera className="h-3 w-3" />
                    </span>
                  </div>
                ))}
              </div>

              {/* main instagram card */}
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="relative z-10 overflow-hidden rounded-2xl bg-white shadow-xl"
              >
                {/* header */}
                <div className="flex items-center justify-between px-4 py-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={current.avatar}
                      alt={current.username}
                      className="h-9 w-9 rounded-full object-cover"
                    />
                    <div className="leading-tight">
                      <p className="text-sm font-semibold text-[#221E1A]">
                        {current.username}
                      </p>
                      <p className="text-xs text-[#9A9186]">
                        {current.location}
                      </p>
                    </div>
                  </div>
                  <MoreHorizontal className="h-5 w-5 text-[#9A9186]" />
                </div>

                {/* image */}
                <div className="relative aspect-4/5 w-full overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={current.postImage}
                      src={current.postImage}
                      alt={current.caption}
                      initial={{ opacity: 0, scale: 1.03 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="h-full w-full object-cover"
                    />
                  </AnimatePresence>
                </div>

                {/* actions */}
                <div className="flex items-center justify-between px-4 pt-3">
                  <div className="flex items-center gap-4">
                    <motion.button
                      whileTap={{ scale: 1.3 }}
                      onClick={() => setLiked((v) => !v)}
                      aria-label="Like"
                    >
                      <Heart
                        className={`h-6 w-6 transition-colors ${
                          liked
                            ? "fill-[#E0563B] text-[#E0563B]"
                            : "text-[#221E1A]"
                        }`}
                      />
                    </motion.button>
                    <MessageCircle className="h-6 w-6 text-[#221E1A]" />
                    <Send className="h-6 w-6 text-[#221E1A]" />
                  </div>
                  <Bookmark className="h-6 w-6 text-[#221E1A]" />
                </div>

                {/* caption */}
                <div className="px-4 pb-4 pt-2">
                  <p className="text-sm text-[#221E1A]">
                    <span className="font-semibold">{current.username}</span>{" "}
                    {current.caption}
                  </p>
                  <p className="mt-1 text-xs text-[#9A9186]">
                    View all {current.comments} comments
                  </p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-wide text-[#B4ACA0]">
                    {current.postedAgo}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* bottom bar */}
        <div className="mt-16 flex flex-col items-center gap-6 border-t border-[#3A342E]/10 pt-8 sm:flex-row sm:justify-between md:mt-20">
          <p className="hidden text-xs tracking-[0.2em] text-[#6B6459] sm:block">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </p>
          <span className="hidden h-px flex-1 bg-[#3A342E]/15 sm:mx-8 sm:block" />
          <div className="flex items-center gap-4">
            <span className="text-xs tracking-[0.2em] text-[#3A342E]">
              FOLLOW OUR JOURNEY ON INSTAGRAM
            </span>
            <motion.a
              href="#"
              whileHover={{ rotate: -45, scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E0563B] text-white shadow-md"
              aria-label="Follow us on Instagram"
            >
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------- */
/*  next/font setup — paste into app/layout.tsx                         */
/* -------------------------------------------------------------------- */
//
// import { Playfair_Display, Dancing_Script, Inter } from "next/font/google";
//
// const display = Playfair_Display({
//   subsets: ["latin"],
//   variable: "--font-display",
// });
// const script = Dancing_Script({
//   subsets: ["latin"],
//   variable: "--font-script",
// });
// const inter = Inter({ subsets: ["latin"] });
//
// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en" className={`${display.variable} ${script.variable}`}>
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }