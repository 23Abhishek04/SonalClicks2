"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";

const gallery = [
  {
    src: "/portfolio/images/pre-wedding 1.jpg",
    alt: "Wedding couple",
    size: "large",
  },
  {
    src: "/portfolio/images/pre-wedding 2.jpg",
    alt: "Wedding celebration",
    size: "small",
  },
  {
    src: "/portfolio/images/pre-wedding 2.jpg",
    alt: "Wedding portrait",
    size: "small",
  },
  {
    src: "/portfolio/images/pre-wedding 2.jpg",
    alt: "Wedding ceremony",
    size: "wide",
  },
];

const services = [
  ["01", "Wedding Day"],
  ["02", "Candid Moments"],
  ["03", "Wedding Portraits"],
  ["04", "Wedding Films"],
];

const faqs = [
  {
    question: "How early should we book?",
    answer:
      "We recommend getting in touch as early as possible, especially for popular wedding dates.",
  },
  {
    question: "Do you travel for weddings?",
    answer:
      "Yes. Share your wedding location with us and we can discuss the details.",
  },
  {
    question: "Can photography and films be booked together?",
    answer:
      "Yes. We can create both photography and cinematic films for your wedding.",
  },
];

const reveal = {
  initial: {
    opacity: 0,
    y: 25,
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
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1] as const,
  },
};

export default function WeddingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f2efe8] text-[#1c1a17]">

      {/* HERO */}

      <section className="px-6 pb-16 pt-32 sm:px-10 md:px-12 md:pt-40 lg:px-16 lg:pb-24">
        <div className="mx-auto max-w-[1600px]">

          <m.div
            {...reveal}
            className="flex items-center gap-3"
          >
            <span className="text-[9px] tracking-[0.38em] text-[#6b6459]">
              SONAL CLICKS
            </span>

            <span className="h-px w-10 bg-[#6b6459]/50" />

            <span className="text-[9px] tracking-[0.28em] text-[#8b8477]">
              WEDDING
            </span>
          </m.div>

          <div className="mt-14 md:mt-20">

            <m.h1
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="font-serif text-[20vw] leading-[0.78] tracking-[-0.07em] sm:text-[120px] md:text-[150px] lg:text-[185px]"
            >
              Your day.
              <br />

              <span className="ml-[9vw] italic sm:ml-20 md:ml-28 lg:ml-40">
                Your story.
              </span>
            </m.h1>

            <m.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-10 max-w-sm text-sm leading-7 text-[#6b6459] sm:ml-auto sm:mr-[8%]"
            >
              Wedding photography that captures the moments you planned,
              the moments you didn&apos;t, and everything in between.
            </m.p>

          </div>

        </div>
      </section>

      {/* HERO IMAGE */}

      <section className="px-6 sm:px-10 md:px-12 lg:px-16">
        <m.div
          initial={{ opacity: 0, scale: 0.99 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative mx-auto aspect-[4/3] max-w-[1600px] overflow-hidden sm:aspect-[16/8]"
        >
          <Image
            src="/portfolio/images/pre-wedding 1.jpg"
            alt="Wedding photography by Sonal Clicks"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </m.div>
      </section>

      {/* SHORT INTRO */}

      <section className="px-6 py-24 sm:px-10 md:px-12 lg:px-16 lg:py-32">
        <m.div
          {...reveal}
          className="mx-auto grid max-w-[1600px] gap-10 md:grid-cols-12"
        >

          <div className="md:col-span-8">
            <span className="text-[9px] tracking-[0.35em] text-[#8b8477]">
              THE IDEA
            </span>

            <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-[1] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
              We photograph
              <br />
              <span className="italic">how it felt.</span>
            </h2>
          </div>

          <div className="md:col-span-4 md:pt-10">
            <p className="text-sm leading-7 text-[#6b6459]">
              Your wedding is about more than beautiful photographs. It&apos;s
              about the people, emotions and little moments you&apos;ll want
              to remember years from now.
            </p>
          </div>

        </m.div>
      </section>



      {/* GALLERY */}

      <section className="px-6 py-24 sm:px-10 md:px-12 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-[1600px]">

          <m.div
            {...reveal}
            className="mb-12 flex items-end justify-between"
          >
            <div>
              <span className="text-[9px] tracking-[0.35em] text-[#8b8477]">
                SELECTED WORK
              </span>

              <h2 className="mt-3 font-serif text-4xl tracking-[-0.04em] sm:text-5xl">
                Wedding stories.
              </h2>
            </div>

            <span className="hidden text-[9px] tracking-[0.25em] text-[#8b8477] sm:block">
              04 FRAMES
            </span>
          </m.div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12">

            {gallery.map((image, index) => (
              <m.div
                key={image.src}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                className={`
                  group relative overflow-hidden bg-[#d8d2c4]
                  ${
                    image.size === "large"
                      ? "aspect-[4/5] sm:col-span-2 lg:col-span-7 lg:row-span-2"
                      : image.size === "wide"
                        ? "aspect-[4/3] sm:col-span-2 lg:col-span-7"
                        : "aspect-[4/5] lg:col-span-5"
                  }
                `}
              >

                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 60vw"
                  className="object-cover transition-transform duration-[1s] ease-out group-hover:scale-[1.035]"
                />

              </m.div>
            ))}

          </div>

          <div className="mt-10 flex justify-end">
            <Link
              href="/portfolio/photos"
              className="group inline-flex items-center gap-3 border-b border-[#1c1a17] pb-2 text-[9px] tracking-[0.3em]"
            >
              VIEW FULL PORTFOLIO

              <ArrowUpRight
                size={14}
                strokeWidth={1.3}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>

        </div>
      </section>



      {/* CTA */}

      <section className="border-t border-[#d8d2c4] px-6 py-28 sm:px-10 sm:py-36 md:px-12 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-[1600px]">

          <m.div {...reveal}>

            <span className="text-[9px] tracking-[0.35em] text-[#8b8477]">
              YOUR WEDDING
            </span>

            <h2 className="mt-6 max-w-[1300px] font-serif text-[17vw] leading-[0.78] tracking-[-0.07em] sm:text-8xl md:text-[110px] lg:text-[145px]">
              Let&apos;s make it
              <br />
              <span className="ml-[6vw] italic sm:ml-12 md:ml-20">
                unforgettable.
              </span>
            </h2>

            <div className="mt-12">

              <Link
                href="/book-us"
                className="group inline-flex items-center gap-4 border-b border-[#1c1a17] pb-3 text-[10px] tracking-[0.28em]"
              >
                BOOK YOUR WEDDING

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.3}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>

            </div>

          </m.div>

        </div>
      </section>

    </main>
  );
}