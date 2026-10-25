import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

interface HeroSectionProps {
  onExploreMass: () => void;
  onPlanVisit: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreMass, onPlanVisit }) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-28 md:pt-32 pb-16 px-6 md:px-12 overflow-hidden bg-[#FAF8F3]">
      {/* Background with Real Sanctuary Photograph and Highly Transparent Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/church/sanctuary_wide.jpg"
          alt="Sancta Maria Catholic Church Sanctuary Altar"
          className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.02]"
        />
        {/* Soft, Transparent Multi-Tone Overlay - transparent to reveal the sanctuary clearly */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F3]/80 via-[#FAF8F3]/35 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F3] via-[#FAF8F3]/15 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Left Column: Editorial Headline & Actions */}
        <div className="max-w-2xl flex flex-col items-start text-left">

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#35251F] leading-[1.08] mb-6 drop-shadow-xs">
            A Place of Faith.
            <br />
            <span className="italic font-normal text-[#642D3A]">A Home for Every Heart.</span>
          </h1>

          {/* Welcoming Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#35251F] max-w-xl font-medium leading-relaxed mb-8 drop-shadow-xs">
            Welcome to Sancta Maria, a parish home of prayer, sacred liturgy, and deep spiritual communion in Kelambakkam, Tamil Nadu. Rooted in faith, united in Christ.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            <button
              onClick={onExploreMass}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#642D3A] text-[#FAF8F3] text-sm uppercase tracking-wider font-semibold shadow-lg shadow-[#642D3A]/25 hover:bg-[#263B50] hover:shadow-xl transition-all duration-300"
            >
              <Clock className="w-4 h-4 text-[#B69556]" />
              <span>Explore Mass Timings</span>
            </button>

            <button
              onClick={onPlanVisit}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#FAF8F3]/95 text-[#35251F] border border-[#B69556] text-sm uppercase tracking-wider font-semibold shadow-md hover:bg-[#E8DDCC] transition-all duration-300"
            >
              <MapPin className="w-4 h-4 text-[#642D3A]" />
              <span>Visit Our Church</span>
            </button>
          </div>

          {/* Fast-Facts Badge Bar */}
          <div className="pt-6 border-t border-[#B69556]/30 flex flex-wrap items-center gap-4 text-xs text-[#35251F] font-semibold">
            <div className="flex items-center gap-1.5 bg-[#FAF8F3]/85 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-[#B69556]/30 shadow-xs">
              <MapPin className="w-4 h-4 text-[#642D3A]" />
              <span>Thaiyur Market Rd, Kelambakkam</span>
            </div>

            <a href="tel:+917397221142" className="flex items-center gap-1.5 text-[#642D3A] hover:underline font-bold bg-[#FAF8F3]/85 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-[#B69556]/30 shadow-xs">
              <Phone className="w-4 h-4" />
              <span>+91 73972 21142</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
