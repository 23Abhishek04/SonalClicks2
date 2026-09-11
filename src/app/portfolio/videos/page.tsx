"use client";

export default function PortfolioVideosPage() {
  return (
    <main className="min-h-screen bg-[#f2efe8] px-6 pb-24 pt-32 text-[#1c1a17] sm:px-10 md:px-12 lg:px-16">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-medium tracking-[0.35em] text-[#6b6459]">
            SONAL CLICKS
          </span>

          <span className="h-px w-12 bg-[#6b6459]/50" />
        </div>

        <h1 className="mt-10 max-w-5xl font-serif text-[17vw] leading-[0.8] tracking-[-0.06em] sm:text-8xl md:text-[110px] lg:text-[140px]">
          Stories
          <br />
          <span className="italic">In Motion.</span>
        </h1>

        <p className="mt-10 max-w-xl text-sm leading-7 text-[#6b6459] sm:text-base">
          Wedding films, pre-wedding stories and cinematic moments
          captured by Sonal Clicks.
        </p>

        <div className="mt-16 border-t border-[#d8d2c4] pt-6">
          <span className="text-[9px] tracking-[0.3em] text-[#8b8477]">
            VIDEOGRAPHY · COMING SOON
          </span>
        </div>
      </div>
    </main>
  );
}