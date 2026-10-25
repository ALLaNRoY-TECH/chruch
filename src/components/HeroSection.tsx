import React from 'react';
import { MapPin, Phone, Star, Clock, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { CHURCH_INFO } from '@/data/churchData';

interface HeroSectionProps {
  onExploreMass: () => void;
  onPlanVisit: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreMass, onPlanVisit }) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 md:pt-32 pb-16 px-6 md:px-12 overflow-hidden bg-[#FAF8F3]">
      {/* Background with Real Sanctuary Photograph and Editorial Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/church/sanctuary_wide.jpg"
          alt="Sancta Maria Catholic Church Sanctuary Altar"
          className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.04]"
        />
        {/* Editorial Multi-Tone Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F3]/95 via-[#FAF8F3]/85 to-[#FAF8F3]/70 md:from-[#FAF8F3]/95 md:via-[#FAF8F3]/80 md:to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F3] via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Editorial Headline & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#35251F] leading-[1.08] mb-6">
            A Place of Faith.
            <br />
            <span className="italic font-normal text-[#642D3A]">A Home for Every Heart.</span>
          </h1>

          {/* Welcoming Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#594438] max-w-xl font-normal leading-relaxed mb-8">
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
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#FAF8F3]/90 text-[#35251F] border border-[#B69556] text-sm uppercase tracking-wider font-semibold shadow-md hover:bg-[#E8DDCC] transition-all duration-300"
            >
              <MapPin className="w-4 h-4 text-[#642D3A]" />
              <span>Visit Our Church</span>
            </button>
          </div>

          {/* Fast-Facts Badge Bar */}
          <div className="pt-6 border-t border-[#B69556]/20 flex flex-wrap items-center gap-6 text-xs text-[#594438] font-medium">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#642D3A]" />
              <span>Thaiyur Market Rd, Kelambakkam</span>
            </div>

            <a href="tel:+917397221142" className="flex items-center gap-1.5 text-[#642D3A] hover:underline font-semibold">
              <Phone className="w-4 h-4" />
              <span>+91 73972 21142</span>
            </a>
          </div>
        </div>

        {/* Right Column: Featured Sanctuary Card showcasing authentic altar detail */}
        <div className="lg:col-span-5 hidden lg:block">
          <div className="relative group">
            {/* Background Decorative Frame */}
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-[#B69556]/30 via-[#642D3A]/10 to-transparent blur-lg opacity-70 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative bg-[#FAF8F3] rounded-2xl p-4 shadow-2xl border border-[#B69556]/30 overflow-hidden">
              <div className="aspect-[4/3] rounded-xl overflow-hidden relative">
                <img
                  src="/images/church/altar_flowers.jpg"
                  alt="Sancta Maria Altar and Tabernacle"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#35251F]/80 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 right-4 text-[#FAF8F3]">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#B69556] block mb-1">
                    Authentic Church Altar
                  </span>
                  <h4 className="font-serif text-lg font-bold text-[#FAF8F3] leading-snug">
                    Consecrated Tabernacle & Altar of Sacrifice
                  </h4>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
