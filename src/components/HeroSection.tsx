import React from 'react';

interface HeroSectionProps {
  onExploreMass: () => void;
  onPlanVisit: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreMass, onPlanVisit }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-end overflow-hidden bg-[#FAF8F3]">
      {/* Full-bleed Authentic Altar Photograph */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/church/hero_altar_user.jpg"
          alt="Sancta Maria Catholic Church Sanctuary Altar"
          className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.02]"
        />

        {/* Subtle top vignette for crystal clear navigation visibility */}
        <div className="absolute top-0 inset-x-0 h-36 bg-gradient-to-b from-[#FAF8F3]/90 via-[#FAF8F3]/40 to-transparent pointer-events-none"></div>

        {/* Cinematic dark bottom gradient inspired by the reference site for perfect text legibility */}
        <div className="absolute bottom-0 inset-x-0 h-96 bg-gradient-to-t from-black/85 via-black/45 to-transparent pointer-events-none"></div>
      </div>

      {/* Content anchored at the bottom-left corner like the inspiration image */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-12 md:px-16 pb-12 sm:pb-16">
        <div className="max-w-2xl flex flex-col items-start text-left">
          {/* 2-line poetic editorial statement */}
          <p className="text-white text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-6 drop-shadow-md">
            A place of prayer, sacred liturgy, and deep spiritual communion in Kelambakkam.
            <br className="hidden sm:inline" />
            Rooted in faith, a sanctuary and home for every heart.
          </p>

          {/* Minimalist button row inspired by the reference: solid white button + transparent outline ghost button */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <button
              onClick={onExploreMass}
              className="flex-1 sm:flex-none px-7 py-3.5 bg-white text-[#1C1917] text-xs uppercase tracking-[0.2em] font-bold shadow-lg hover:bg-[#FAF8F3] hover:text-[#642D3A] transition-all duration-200 cursor-pointer"
            >
              Explore Mass Timings
            </button>

            <button
              onClick={onPlanVisit}
              className="flex-1 sm:flex-none px-7 py-3.5 bg-transparent border border-white/80 text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-white/10 hover:border-white transition-all duration-200 cursor-pointer"
            >
              Visit Our Church
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
