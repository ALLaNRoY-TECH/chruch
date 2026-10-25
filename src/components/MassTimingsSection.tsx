import React from 'react';
import { MASS_TIMINGS } from '@/data/churchData';
import { Clock, Bell, Info, Calendar, Sparkles, AlertCircle } from 'lucide-react';

export const MassTimingsSection: React.FC = () => {
  return (
    <section id="mass-timings" className="py-20 px-6 md:px-12 bg-[#FAF8F3] relative border-t border-[#B69556]/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#35251F] font-bold tracking-tight">
            Mass & Prayer Timings
          </h2>
          <p className="mt-3 text-base md:text-lg text-[#594438]/85 font-normal leading-relaxed">
            Come and experience the serenity of the Holy Qurbana in the Syro-Malabar tradition. Join our parish family for communal adoration, sacrament of reconciliation, and daily prayer.
          </p>
        </div>

        {/* Liturgical Season Announcement Banner */}
        <div className="mb-12 p-5 rounded-2xl bg-[#E8DDCC]/70 border border-[#B69556]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#642D3A] text-[#FAF8F3] flex items-center justify-center shrink-0">
              <Bell className="w-5 h-5 text-[#B69556]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-widest font-bold text-[#642D3A]">Parish Liturgical Notice</span>
                <span className="text-[10px] uppercase px-2 py-0.5 rounded bg-[#642D3A]/10 text-[#642D3A] font-semibold">Official Notice</span>
              </div>
              <p className="text-sm text-[#35251F] font-medium mt-0.5">
                Special schedule adjustments apply during Lent, Holy Week, Advent, and Feast of Sancta Maria.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 text-xs text-[#594438]">
            <Info className="w-4 h-4 text-[#B69556]" />
            <span>Updates announced prior to Holy Days</span>
          </div>
        </div>

        {/* Schedule Grid / Minimal Separator Layout */}
        <div className="bg-[#FFFFFF] rounded-3xl p-6 md:p-10 shadow-xl border border-[#B69556]/30 divide-y divide-[#B69556]/20">
          {MASS_TIMINGS.map((item, index) => (
            <div 
              key={index} 
              className="py-6 first:pt-0 last:pb-0 flex flex-col md:flex-row md:items-center justify-between gap-4 group transition-colors duration-200 hover:bg-[#FAF8F3]/50 rounded-xl px-4 -mx-4"
            >
              {/* Day & Category */}
              <div className="md:w-1/3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#642D3A]">
                    {item.day}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B69556]"></span>
                  <span className="text-[11px] text-[#594438]/70 font-medium">{item.language}</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#35251F] group-hover:text-[#642D3A] transition-colors">
                  {item.category}
                </h3>
              </div>

              {/* Time */}
              <div className="md:w-1/4">
                <span className="font-serif text-2xl font-semibold text-[#642D3A] tracking-wide block">
                  {item.time}
                </span>
                <span className="text-xs text-[#594438]/80 font-sans block mt-0.5">
                  {item.description}
                </span>
              </div>

              {/* Parish Confirmation Disclaimer Tag */}
              <div className="md:w-1/3 flex items-center md:justify-end">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF8F3] border border-[#B69556]/30 text-[11px] text-[#594438] font-medium">
                  <AlertCircle className="w-3.5 h-3.5 text-[#B69556]" />
                  <span>{item.status}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Admin and Confirmation Notice per brief */}
        <div className="mt-8 text-center text-xs text-[#594438]/80 flex flex-col sm:flex-row items-center justify-center gap-2 font-light">
          <span>Official schedules are maintained by the Vicar & Parish Council.</span>
          <span className="hidden sm:inline">·</span>
          <span>To verify timings or request house visits, call: <a href="tel:+917397221142" className="text-[#642D3A] font-semibold underline">+91 73972 21142</a></span>
        </div>
      </div>
    </section>
  );
};
