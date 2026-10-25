import React from 'react';
import GlyphPortal from '@/components/ui/glyph-portal';
import { Sparkles, MapPin, ArrowDown } from 'lucide-react';

export const ChurchGlyphPortal: React.FC = () => {
  return (
    <div id="portal-experience" className="relative w-full bg-[#FAF8F3]">
      <GlyphPortal
        word="SANCTA"
        fontFamily='"Plus Jakarta Sans", "Arial Black", sans-serif'
        fontWeight={900}
        scrollLength={2.0}
        interactive={true}
        enterLabel="Step Inside Sanctuary"
        background={
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="/images/church/sanctuary_wide.jpg"
              alt="Sancta Maria Church Sanctuary"
              className="w-full h-full object-cover object-center filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#35251F]/90 via-[#642D3A]/40 to-transparent"></div>
          </div>
        }
        front={
          <div className="absolute inset-0 pointer-events-none flex flex-col justify-end p-6 sm:p-8 md:p-12">
            {/* Bottom: Caption placed clearly BELOW the SANCTA word */}
            <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center space-y-3 pb-2 sm:pb-4">
              <div className="px-6 py-3.5 rounded-2xl bg-[#FAF8F3]/95 backdrop-blur-md border border-[#B69556]/50 shadow-xl max-w-xl mx-auto pointer-events-auto">
                <p className="font-serif text-base sm:text-lg md:text-xl text-[#35251F] font-semibold italic leading-relaxed">
                  &ldquo;Where two or three gather in My name, there am I with them.&rdquo;
                </p>
                <span className="block text-[11px] uppercase tracking-widest text-[#642D3A] font-bold mt-1">
                  — Matthew 18:20 · Sancta Maria Church
                </span>
              </div>

              <div className="w-full flex items-center justify-between text-xs text-[#594438] font-medium pt-1 px-4">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#642D3A]" />
                  Kelambakkam, Tamil Nadu
                </span>
                <span className="flex items-center gap-1.5 text-[#642D3A] font-semibold animate-bounce">
                  <ArrowDown className="w-3.5 h-3.5 text-[#B69556]" />
                  Scroll down to step into Sanctuary
                </span>
              </div>
            </div>
          </div>
        }
      >
        {/* Content revealed after zoom */}
        <div className="max-w-4xl mx-auto text-center px-6 py-20 text-[#FAF8F3] relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF8F3]/10 backdrop-blur-md border border-[#B69556]/40 text-[#B69556] text-xs uppercase tracking-widest font-semibold mb-6">
            <Sparkles className="w-4 h-4 text-[#B69556]" />
            <span>You Have Arrived in Sacred Sanctuary</span>
          </div>

          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#FAF8F3] mb-6 leading-tight">
            A Place of Faith.<br />
            <span className="text-[#B69556]">A Home for Every Heart.</span>
          </h2>

          <p className="text-base md:text-xl font-light text-[#FAF8F3]/90 max-w-2xl mx-auto leading-relaxed mb-10">
            Sancta Maria Syro Malabar Catholic Church welcomes you to encounter Christ through liturgical peace, prayerful contemplation, and genuine parish brotherhood.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#mass-timings"
              className="px-8 py-3.5 rounded-full bg-[#642D3A] text-[#FAF8F3] font-semibold text-sm uppercase tracking-wider hover:bg-[#263B50] transition-all shadow-xl hover:scale-105"
            >
              Explore Mass Timings
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full bg-[#FAF8F3] text-[#35251F] font-semibold text-sm uppercase tracking-wider hover:bg-[#E8DDCC] transition-all shadow-xl hover:scale-105"
            >
              Plan Your Visit
            </a>
          </div>
        </div>
      </GlyphPortal>
    </div>
  );
};
