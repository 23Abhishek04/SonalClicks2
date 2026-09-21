"use client";

import { useState } from "react";

const categories = [
  { value: "baby-shoot", label: "Baby Shoot" },
  { value: "maternity", label: "Maternity" },
  { value: "wedding", label: "Wedding" },
  { value: "pre-wedding", label: "Pre Wedding" },
  { value: "model-shoot", label: "Model Shoot" },
  { value: "engagement", label: "Engagement" },
];

export default function BookUsForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // TODO: wire this up to a real backend — e.g. a Next.js API route
    // that sends an email (Resend, SendGrid) or writes to a database.
    // Currently this only simulates a submission client-side.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex h-full min-h-75 flex-col items-center justify-center rounded-sm border border-[#d8d2c4] p-10 text-center">
        <span className="font-serif text-3xl">Thank you.</span>
        <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#6b6459]">
          Your request has been received. We&apos;ll get back to you within
          24 hours to plan your session.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      <div>
        <label
          htmlFor="name"
          className="block text-[10px] tracking-[0.25em] text-[#6b6459]"
        >
          NAME
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your full name"
          className="mt-2 w-full border-b border-[#1c1a17]/20 bg-transparent py-2.5 text-sm text-[#1c1a17] outline-none placeholder:text-[#6b6459]/50 transition-colors focus:border-[#1c1a17]"
        />
      </div>

      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="block text-[10px] tracking-[0.25em] text-[#6b6459]"
          >
            EMAIL
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@email.com"
            className="mt-2 w-full border-b border-[#1c1a17]/20 bg-transparent py-2.5 text-sm text-[#1c1a17] outline-none placeholder:text-[#6b6459]/50 transition-colors focus:border-[#1c1a17]"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-[10px] tracking-[0.25em] text-[#6b6459]"
          >
            PHONE NUMBER
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+91 00000 00000"
            className="mt-2 w-full border-b border-[#1c1a17]/20 bg-transparent py-2.5 text-sm text-[#1c1a17] outline-none placeholder:text-[#6b6459]/50 transition-colors focus:border-[#1c1a17]"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="location"
          className="block text-[10px] tracking-[0.25em] text-[#6b6459]"
        >
          LOCATION
        </label>
        <input
          id="location"
          name="location"
          type="text"
          required
          placeholder="City where the shoot will take place"
          className="mt-2 w-full border-b border-[#1c1a17]/20 bg-transparent py-2.5 text-sm text-[#1c1a17] outline-none placeholder:text-[#6b6459]/50 transition-colors focus:border-[#1c1a17]"
        />
      </div>

      <div>
        <label
          htmlFor="category"
          className="block text-[10px] tracking-[0.25em] text-[#6b6459]"
        >
          SELECT CATEGORY
        </label>
        <select
          id="category"
          name="category"
          required
          defaultValue=""
          className="mt-2 w-full border-b border-[#1c1a17]/20 bg-transparent py-2.5 text-sm text-[#1c1a17] outline-none transition-colors focus:border-[#1c1a17]"
        >
          <option value="" disabled>
            Choose a shoot type
          </option>
          {categories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="group mt-4 inline-flex items-center gap-4 rounded-full border border-[#1c1a17] px-7 py-3.5 text-[11px] font-semibold tracking-[0.22em] text-[#1c1a17] transition-colors duration-300 hover:bg-[#1c1a17] hover:text-[#f2efe8]"
      >
        SEND REQUEST
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </button>
    </form>
  );
}