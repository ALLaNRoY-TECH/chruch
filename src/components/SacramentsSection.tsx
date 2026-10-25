import React, { useState } from 'react';
import { SACRAMENTS } from '@/data/churchData';
import { Droplets, Sun, Flame, HeartHandshake, Sparkles, Cross, ChevronRight, Phone } from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  Droplets: <Droplets className="w-6 h-6 text-[#642D3A]" />,
  Sun: <Sun className="w-6 h-6 text-[#B69556]" />,
  Flame: <Flame className="w-6 h-6 text-[#642D3A]" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6 text-[#263B50]" />,
  Sparkles: <Sparkles className="w-6 h-6 text-[#B69556]" />,
  Cross: <Cross className="w-6 h-6 text-[#642D3A]" />,
};

export const SacramentsSection: React.FC = () => {
  const [activeSacrament, setActiveSacrament] = useState<string>(SACRAMENTS[0].id);

  const selected = SACRAMENTS.find(s => s.id === activeSacrament) || SACRAMENTS[0];

  return (
    <section id="sacraments" className="py-24 px-6 md:px-12 bg-[#FAF8F3] relative border-t border-[#B69556]/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#35251F] font-bold tracking-tight">
            Sacraments of Divine Grace
          </h2>
          <p className="mt-3 text-base md:text-lg text-[#594438]/85 font-normal leading-relaxed">
            The visible signs of invisible divine grace instituted by Jesus Christ and entrusted to the Church to heal, sanctify, and lead us into eternal communion.
          </p>
        </div>

        {/* Interactive Master-Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sacraments Navigation List */}
          <div className="lg:col-span-5 space-y-3">
            {SACRAMENTS.map((sacrament) => {
              const isActive = activeSacrament === sacrament.id;
              return (
                <button
                  key={sacrament.id}
                  onClick={() => setActiveSacrament(sacrament.id)}
                  className={`w-full text-left p-4 md:p-5 rounded-2xl transition-all duration-300 flex items-center justify-between border ${
                    isActive
                      ? 'bg-[#FFFFFF] border-[#B69556] shadow-lg shadow-[#B69556]/10 translate-x-2'
                      : 'bg-[#E8DDCC]/30 border-transparent hover:bg-[#E8DDCC]/60 text-[#35251F]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                      isActive ? 'bg-[#FAF8F3] shadow-sm' : 'bg-[#E8DDCC]/70'
                    }`}>
                      {ICON_MAP[sacrament.icon] || <Sparkles className="w-5 h-5 text-[#642D3A]" />}
                    </div>
                    <div>
                      <h4 className="font-serif text-lg md:text-xl font-bold text-[#35251F]">
                        {sacrament.title}
                      </h4>
                      <p className="text-xs text-[#594438]/70 font-sans">
                        {sacrament.subtitle}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${
                    isActive ? 'text-[#642D3A] translate-x-1' : 'text-[#B69556]/40'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Sacrament Details Card */}
          <div className="lg:col-span-7 bg-[#FFFFFF] rounded-3xl p-8 md:p-10 shadow-xl border border-[#B69556]/30 flex flex-col justify-between min-h-[460px]">
            <div>
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-[#B69556]/20">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#642D3A]">
                  Sacramental Life · Syro-Malabar Church
                </span>
                <span className="text-xs text-[#B69556] font-mono">Kelambakkam Parish</span>
              </div>

              <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#35251F] mb-2">
                {selected.title}
              </h3>
              <p className="text-sm font-serif italic text-[#B69556] mb-6">
                &ldquo;{selected.subtitle}&rdquo;
              </p>

              <div className="space-y-6 text-[#594438] text-sm md:text-base leading-relaxed">
                <div>
                  <h5 className="font-bold text-xs uppercase tracking-wider text-[#35251F] mb-1">
                    Spiritual Meaning
                  </h5>
                  <p>{selected.description}</p>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF8F3] border border-[#B69556]/20">
                  <h5 className="font-bold text-xs uppercase tracking-wider text-[#642D3A] mb-1">
                    How to Enquire & Prepare
                  </h5>
                  <p className="text-xs md:text-sm text-[#35251F]">{selected.guidance}</p>
                </div>

                <div>
                  <h5 className="font-bold text-xs uppercase tracking-wider text-[#35251F] mb-1">
                    Required Documents & Prerequisites
                  </h5>
                  <p className="text-xs md:text-sm text-[#594438]">{selected.requirements}</p>
                </div>
              </div>
            </div>

            {/* Parish Action Footnote */}
            <div className="mt-8 pt-6 border-t border-[#B69556]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs text-[#594438]/70">
                Contact the parish office for arrangements & scheduling.
              </span>
              <a
                href="tel:+917397221142"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#642D3A] text-[#FAF8F3] text-xs uppercase tracking-wider font-semibold hover:bg-[#263B50] transition-colors self-start sm:self-auto"
              >
                <Phone className="w-3.5 h-3.5 text-[#B69556]" />
                <span>Call Parish Office</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
