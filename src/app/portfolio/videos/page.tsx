"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { ArrowUpRight, Play, X } from "lucide-react";

type Film = {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  image: string;
  video?: string;
};

const films: Film[] = [
  {
    id: "wedding-01",
    number: "01",
    category: "WEDDING FILM",
    title: "The Beginning",
    description:
      "A celebration of two people, two families and the little moments that made the day theirs.",
    image: "/portfolio/1.webp",
    video: "/videos/wedding-01.mp4",
  },
  {
    id: "pre-wedding-01",
    number: "02",
    category: "PRE WEDDING",
    title: "Before Forever",
    description:
      "A cinematic chapter of laughter, connection and everything that happens before the big day.",
    image: "/portfolio/2.webp",
    video: "/videos/pre-wedding-01.mp4",
  },
  {
    id: "wedding-02",
    number: "03",
    category: "WEDDING FILM",
    title: "Two Families",
    description:
      "The emotions, traditions and unscripted moments that turn a wedding into a memory.",
    image: "/portfolio/4.webp",
    video: "/videos/wedding-02.mp4",
  },
  {
    id: "couple-01",
    number: "04",
    category: "COUPLE FILM",
    title: "In Between Moments",
    description:
      "The quiet glances, spontaneous laughter and little details that belong only to you.",
    image: "/portfolio/8.webp",
    video: "/videos/couple-01.mp4",
  },
  {
    id: "maternity-01",
    number: "05",
    category: "MATERNITY",
    title: "A New Chapter",
    description:
      "A gentle story about anticipation, connection and the beginning of something beautiful.",
    image: "/portfolio/5.webp",
    video: "/videos/maternity-01.mp4",
  },
  {
    id: "baby-01",
    number: "06",
    category: "BABY STORIES",
    title: "Little Moments",
    description:
      "Tiny hands, little smiles and memories that become more precious with time.",
    image: "/portfolio/6.webp",
    video: "/videos/baby-01.mp4",
  },
];

const reveal = {
  initial: {
    opacity: 0,
    y: 35,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.15,
  },
  transition: {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
  },
};

export default function PortfolioVideosPage() {
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);

  const featured = films[0];
  const otherFilms = films.slice(1);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f2efe8] text-[#1c1a17]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="px-6 pb-24 pt-32 sm:px-10 sm:pb-32 md:px-12 md:pt-40 lg:px-16 lg:pb-40">
        <div className="mx-auto max-w-[1600px]">

          <m.div
            {...reveal}
            className="flex items-center gap-3"
          >
            <span className="text-[9px] font-medium tracking-[0.4em] text-[#6b6459] sm:text-[10px]">
              SONAL CLICKS
            </span>

            <span className="h-px w-10 bg-[#6b6459]/50 sm:w-14" />

            <span className="text-[9px] tracking-[0.28em] text-[#8b8477] sm:text-[10px]">
              PORTFOLIO / VIDEOS
            </span>
          </m.div>

          <div className="relative mt-14 md:mt-20">

            <m.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-serif text-[20vw] leading-[0.76] tracking-[-0.07em] sm:text-[120px] md:text-[150px] lg:text-[185px] xl:text-[210px]"
            >
              Stories
              <br />

              <span className="ml-[8vw] italic sm:ml-20 md:ml-28 lg:ml-40">
                In Motion.
              </span>
            </m.h1>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.45,
              }}
              className="mt-12 max-w-md sm:ml-auto sm:mr-[5%] lg:mr-[8%]"
            >
              <p className="text-sm leading-7 text-[#6b6459] sm:text-base">
                Some memories deserve more than a photograph. We capture the
                movement, emotion and atmosphere of your day and turn them
                into films you can return to.
              </p>

              <div className="mt-7 flex items-center gap-4">
                <span className="h-px w-12 bg-[#1c1a17]" />

                <span className="text-[9px] tracking-[0.32em] text-[#6b6459]">
                  FILMS · STORIES · MEMORIES
                </span>
              </div>
            </m.div>

          </div>

          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-20 flex items-center gap-4"
          >
            <span className="h-12 w-px bg-[#1c1a17]/30" />

            <span className="text-[9px] tracking-[0.3em] text-[#8b8477]">
              SCROLL TO EXPLORE
            </span>
          </m.div>

        </div>
      </section>

      {/* =====================================================
          FEATURED FILM
      ===================================================== */}

      <section className="px-6 pb-28 sm:px-10 md:px-12 lg:px-16 lg:pb-40">
        <div className="mx-auto max-w-[1600px]">

          <m.div
            {...reveal}
            className="mb-8 flex items-end justify-between"
          >
            <div>
              <span className="text-[9px] tracking-[0.35em] text-[#8b8477]">
                FEATURED STORY
              </span>

              <h2 className="mt-3 font-serif text-4xl tracking-[-0.04em] sm:text-5xl md:text-6xl">
                {featured.title}.
              </h2>
            </div>

            <span className="hidden text-[9px] tracking-[0.3em] text-[#8b8477] sm:block">
              {featured.number} / 06
            </span>
          </m.div>

          <m.button
            {...reveal}
            type="button"
            onClick={() => setSelectedFilm(featured)}
            className="group relative block w-full text-left"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-[#d8d2c4]">

              <Image
                src={featured.image}
                alt={featured.title}
                fill
                priority
                sizes="100vw"
                className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.035]"
              />

              <div className="absolute inset-0 bg-black/20 transition-all duration-700 group-hover:bg-black/35" />

              {/* Play */}

              <div className="absolute inset-0 flex items-center justify-center">

                <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full border border-white/70 bg-white/10 text-white backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:bg-white group-hover:text-[#1c1a17] sm:h-20 sm:w-20">
                  <Play
                    size={20}
                    fill="currentColor"
                    strokeWidth={1.3}
                    className="ml-1"
                  />
                </div>

              </div>

              {/* Bottom content */}

              <div className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-8 md:p-10 lg:p-12">

                <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

                  <div>
                    <span className="text-[8px] tracking-[0.32em] text-white/65">
                      {featured.category}
                    </span>

                    <h3 className="mt-2 font-serif text-4xl tracking-[-0.04em] sm:text-5xl md:text-6xl">
                      {featured.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 text-[9px] tracking-[0.28em] text-white/70">
                    WATCH FILM

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40">
                      <ArrowUpRight size={14} />
                    </span>
                  </div>

                </div>

              </div>

            </div>
          </m.button>

        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="border-y border-[#d8d2c4] px-6 py-24 sm:px-10 md:px-12 lg:px-16 lg:py-36">
        <div className="mx-auto grid max-w-[1600px] gap-12 md:grid-cols-12 md:items-end">

          <m.div
            {...reveal}
            className="md:col-span-8"
          >
            <span className="text-[9px] tracking-[0.35em] text-[#8b8477]">
              OUR APPROACH
            </span>

            <h2 className="mt-6 font-serif text-5xl leading-[0.98] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[90px]">
              We don&apos;t just film
              <br />
              <span className="italic">what happened.</span>
            </h2>
          </m.div>

          <m.div
            {...reveal}
            className="md:col-span-4"
          >
            <p className="text-sm leading-7 text-[#6b6459]">
              We look for the moments between the moments — the glance before
              the smile, the hand that reaches without thinking, the laughter
              that fills the room.
            </p>

            <p className="mt-5 text-sm leading-7 text-[#6b6459]">
              Because years later, it is not just the event you want to
              remember. It is how it felt.
            </p>
          </m.div>

        </div>
      </section>

      {/* =====================================================
          FILM COLLECTION
      ===================================================== */}

      <section className="px-6 py-24 sm:px-10 md:px-12 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-[1600px]">

          <m.div
            {...reveal}
            className="mb-16 flex items-end justify-between sm:mb-24"
          >
            <div>
              <span className="text-[9px] tracking-[0.35em] text-[#8b8477]">
                SELECTED FILMS
              </span>

              <h2 className="mt-3 font-serif text-4xl tracking-[-0.04em] sm:text-5xl md:text-6xl">
                Recent Stories.
              </h2>
            </div>

            <span className="hidden text-[9px] tracking-[0.3em] text-[#8b8477] sm:block">
              05 FILMS
            </span>
          </m.div>

          <div className="grid grid-cols-1 gap-y-20 sm:grid-cols-2 sm:gap-x-7 sm:gap-y-24 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-32">

            {otherFilms.map((film, index) => {

              const layout = [
                "lg:col-span-5",
                "lg:col-span-7 lg:mt-28",
                "lg:col-span-7",
                "lg:col-span-5 lg:mt-28",
                "lg:col-span-6 lg:ml-auto",
              ];

              return (
                <m.article
                  key={film.id}
                  {...reveal}
                  className={`group ${layout[index]}`}
                >

                  <button
                    type="button"
                    onClick={() => setSelectedFilm(film)}
                    className="block w-full text-left"
                  >

                    <div className="relative aspect-[4/5] overflow-hidden bg-[#d8d2c4]">

                      <Image
                        src={film.image}
                        alt={film.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 45vw"
                        className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.045]"
                      />

                      <div className="absolute inset-0 bg-black/10 transition-all duration-500 group-hover:bg-black/30" />

                      {/* Number */}

                      <span className="absolute left-5 top-5 text-[9px] tracking-[0.25em] text-white/80">
                        {film.number}
                      </span>

                      {/* Category */}

                      <span className="absolute right-5 top-5 text-[8px] tracking-[0.25em] text-white/80">
                        {film.category}
                      </span>

                      {/* Play */}

                      <div className="absolute inset-0 flex items-center justify-center">

                        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/70 bg-white/10 text-white backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:bg-white group-hover:text-[#1c1a17] sm:h-16 sm:w-16">

                          <Play
                            size={17}
                            fill="currentColor"
                            strokeWidth={1.3}
                            className="ml-1"
                          />

                        </div>

                      </div>

                    </div>

                    {/* Text */}

                    <div className="mt-5 flex items-start justify-between gap-5">

                      <div>

                        <h3 className="font-serif text-3xl tracking-[-0.03em] sm:text-4xl">
                          {film.title}
                        </h3>

                        <p className="mt-3 max-w-md text-xs leading-6 text-[#6b6459] sm:text-sm">
                          {film.description}
                        </p>

                      </div>

                      <span className="mt-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#c9c2b3] transition-all duration-300 group-hover:border-[#1c1a17] group-hover:bg-[#1c1a17] group-hover:text-[#f2efe8]">
                        <ArrowUpRight size={14} />
                      </span>

                    </div>

                  </button>

                </m.article>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          FILM TYPES
      ===================================================== */}

      <section className="border-t border-[#d8d2c4] px-6 py-24 sm:px-10 md:px-12 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1600px]">

          <div className="grid gap-14 md:grid-cols-12">

            <m.div
              {...reveal}
              className="md:col-span-5"
            >
              <span className="text-[9px] tracking-[0.35em] text-[#8b8477]">
                WHAT WE CREATE
              </span>

              <h2 className="mt-6 font-serif text-5xl leading-[0.98] tracking-[-0.045em] sm:text-6xl">
                Every story
                <br />
                <span className="italic">has its rhythm.</span>
              </h2>
            </m.div>

            <div className="md:col-span-7">

              {[
                ["01", "Wedding Films", "The celebration, as it felt."],
                ["02", "Pre Wedding", "Your story before the beginning."],
                ["03", "Couple Films", "The little things that make you, you."],
                ["04", "Maternity Films", "A new chapter waiting to begin."],
                ["05", "Baby Stories", "Small moments. Forever memories."],
              ].map(([number, title, description], index) => (

                <m.div
                  key={number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.06,
                  }}
                  className="group border-t border-[#d8d2c4] py-6 sm:py-8"
                >

                  <div className="grid grid-cols-[42px_1fr_auto] items-center gap-4 sm:grid-cols-[55px_1fr_1fr_auto]">

                    <span className="text-[9px] tracking-[0.2em] text-[#8b8477]">
                      {number}
                    </span>

                    <h3 className="font-serif text-xl tracking-[-0.025em] sm:text-2xl">
                      {title}
                    </h3>

                    <p className="hidden text-xs leading-5 text-[#6b6459] sm:block">
                      {description}
                    </p>

                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.3}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />

                  </div>

                </m.div>

              ))}

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="border-t border-[#d8d2c4] px-6 py-28 sm:px-10 sm:py-36 md:px-12 lg:px-16 lg:py-44">

        <div className="mx-auto max-w-[1600px]">

          <m.div
            {...reveal}
            className="grid gap-12 md:grid-cols-12 md:items-end"
          >

            <div className="md:col-span-9">

              <span className="text-[9px] tracking-[0.35em] text-[#8b8477]">
                YOUR STORY COULD BE NEXT
              </span>

              <h2 className="mt-6 font-serif text-[17vw] leading-[0.78] tracking-[-0.07em] sm:text-8xl md:text-[110px] lg:text-[145px]">
                Let&apos;s make
                <br />

                <span className="ml-[6vw] italic sm:ml-12 md:ml-20">
                  something real.
                </span>
              </h2>

            </div>

            <div className="md:col-span-3">

              <a
                href="/book-us"
                className="group inline-flex items-center gap-4 border-b border-[#1c1a17] pb-3 text-[10px] tracking-[0.28em] transition-opacity hover:opacity-60"
              >
                BOOK YOUR STORY

                <span className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                  <ArrowUpRight size={15} strokeWidth={1.4} />
                </span>
              </a>

            </div>

          </m.div>

        </div>

      </section>

      {/* =====================================================
          VIDEO MODAL
      ===================================================== */}

      <AnimatePresence>
        {selectedFilm && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#11100e]/95 p-4 sm:p-8"
            onClick={() => setSelectedFilm(null)}
          >

            <m.div
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                y: 20,
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >

              <button
                type="button"
                aria-label="Close video"
                onClick={() => setSelectedFilm(null)}
                className="absolute -right-1 -top-12 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition-all hover:bg-white hover:text-[#1c1a17] sm:-right-12 sm:top-0"
              >
                <X size={17} strokeWidth={1.4} />
              </button>

              <div className="overflow-hidden bg-black">

                {selectedFilm.video ? (
                  <video
                    key={selectedFilm.video}
                    controls
                    autoPlay
                    playsInline
                    poster={selectedFilm.image}
                    className="aspect-video w-full"
                  >
                    <source
                      src={selectedFilm.video}
                      type="video/mp4"
                    />
                    Your browser does not support video playback.
                  </video>
                ) : (
                  <div className="relative aspect-video">

                    <Image
                      src={selectedFilm.image}
                      alt={selectedFilm.title}
                      fill
                      className="object-cover"
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">

                      <span className="border border-white/40 px-5 py-3 text-[9px] tracking-[0.3em] text-white">
                        FILM COMING SOON
                      </span>

                    </div>

                  </div>
                )}

              </div>

              <div className="mt-5 flex items-start justify-between text-white">

                <div>

                  <span className="text-[8px] tracking-[0.3em] text-white/50">
                    {selectedFilm.category}
                  </span>

                  <h3 className="mt-2 font-serif text-3xl tracking-[-0.03em] sm:text-4xl">
                    {selectedFilm.title}
                  </h3>

                </div>

                <span className="hidden text-[9px] tracking-[0.3em] text-white/40 sm:block">
                  SONAL CLICKS
                </span>

              </div>

            </m.div>

          </m.div>
        )}
      </AnimatePresence>

    </main>
  );
}