import React from 'react';
import { MINISTRIES } from '@/data/churchData';
import { Users, Music, Heart, BookOpen, Shield, Sparkles, ArrowRight } from 'lucide-react';

const MINISTRY_ICONS: Record<number, React.ReactNode> = {
  0: <Sparkles className="w-5 h-5 text-[#642D3A]" />,
  1: <BookOpen className="w-5 h-5 text-[#B69556]" />,
  2: <Music className="w-5 h-5 text-[#263B50]" />,
  3: <Shield className="w-5 h-5 text-[#642D3A]" />,
  4: <Heart className="w-5 h-5 text-[#B69556]" />,
  5: <Users className="w-5 h-5 text-[#263B50]" />
};

export const MinistriesSection: React.FC = () => {
  return (
    <section id="ministries" className="py-24 px-6 md:px-12 bg-[#FAF8F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#35251F] font-bold tracking-tight">
            Parish Ministries & Life
          </h2>
          <p className="mt-3 text-base md:text-lg text-[#594438]/85 font-normal leading-relaxed">
            Every member has a unique calling in the body of Christ. Discover our active parish associations, youth groups, choir, and charitable initiatives in Kelambakkam.
          </p>
        </div>

        {/* Ministries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MINISTRIES.map((m, index) => (
            <div
              key={index}
              className="editorial-card flex flex-col justify-between group hover:border-[#642D3A]/40"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#FAF8F3] border border-[#B69556]/30 flex items-center justify-center shadow-sm">
                    {MINISTRY_ICONS[index] || <Sparkles className="w-5 h-5 text-[#642D3A]" />}
                  </div>
                  <span className="text-[11px] uppercase font-bold tracking-[0.18em] text-[#642D3A]">
                    {m.tag}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#35251F] group-hover:text-[#642D3A] transition-colors mb-2">
                  {m.name}
                </h3>

                <p className="text-xs text-[#B69556] font-semibold uppercase tracking-wider mb-3">
                  Lead: {m.lead}
                </p>

                <p className="text-sm text-[#594438] leading-relaxed font-normal">
                  {m.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#B69556]/20 flex items-center justify-between text-xs text-[#594438]/80">
                <span className="font-medium">📅 {m.schedule}</span>
                <a href="#contact" className="text-[#642D3A] font-semibold hover:underline flex items-center gap-1">
                  Enquire <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
