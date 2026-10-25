import React from 'react';
import { MapPin, Clock } from 'lucide-react';

interface HeroSectionProps {
  onExploreMass: () => void;
  onPlanVisit: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreMass, onPlanVisit }) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-end sm:items-center pt-28 pb-12 sm:pb-16 px-6 md:px-12 overflow-hidden bg-[#FAF8F3]">
      {/* Background with Real Pristine Sanctuary Photograph without heavy wash */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/church/altar_pristine.jpg"
          alt="Sancta Maria Catholic Church Sanctuary Altar"
          className="w-full h-full object-cover object-center filter brightness-[1.0] contrast-[1.03]"
        />
        {/* Minimal top vignette only for nav bar legibility */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#FAF8F3]/75 via-[#FAF8F3]/25 to-transparent pointer-events-none"></div>

        {/* Minimal subtle bottom blend for seamless transition into next section */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#FAF8F3] via-[#FAF8F3]/30 to-transparent pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Minimal, elegant floating glassmorphic card leaving the church altar fully visible */}
        <div className="max-w-lg p-6 sm:p-8 rounded-3xl bg-[#FAF8F3]/85 backdrop-blur-md border border-[#B69556]/40 shadow-2xl">
          {/* Subtle parish badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F3]/90 border border-[#B69556]/40 text-[#642D3A] text-xs font-semibold tracking-wider uppercase mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B69556]"></span>
            <span>Syro Malabar Catholic Parish · Kelambakkam</span>
          </div>

          {/* Minimal Main Headline */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#35251F] leading-tight mb-4">
            A Place of Faith.
            <br />
            <span className="italic font-normal text-[#642D3A]">A Home for Every Heart.</span>
          </h1>

          {/* Essential Quick Actions */}
          <div className="flex flex-wrap items-center gap-3 w-full pt-2">
            <button
              onClick={onExploreMass}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#642D3A] text-[#FAF8F3] text-xs uppercase tracking-wider font-semibold shadow-md shadow-[#642D3A]/25 hover:bg-[#263B50] hover:shadow-lg transition-all duration-300"
            >
              <Clock className="w-3.5 h-3.5 text-[#B69556]" />
              <span>Mass Timings</span>
            </button>

            <button
              onClick={onPlanVisit}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FAF8F3] text-[#35251F] border border-[#B69556] text-xs uppercase tracking-wider font-semibold shadow-xs hover:bg-[#E8DDCC] transition-all duration-300"
            >
              <MapPin className="w-3.5 h-3.5 text-[#642D3A]" />
              <span>Visit Church</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
