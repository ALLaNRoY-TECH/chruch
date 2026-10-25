import React, { useState } from 'react';
import { UPCOMING_EVENTS } from '@/data/churchData';
import { Calendar, MapPin, Clock, Bell, Sparkles, Share2 } from 'lucide-react';

export const EventsSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleShare = (id: string, title: string) => {
    if (navigator.share) {
      navigator.share({
        title: `${title} | Sancta Maria Church`,
        text: `Join us at Sancta Maria Syro Malabar Catholic Church, Kelambakkam for ${title}.`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  return (
    <section id="events" className="py-24 px-6 md:px-12 bg-[#FAF8F3] relative border-t border-[#B69556]/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#35251F] font-bold tracking-tight">
            Events & Announcements
          </h2>
          <p className="mt-3 text-base md:text-lg text-[#594438]/85 font-normal leading-relaxed">
            Stay informed on upcoming patronal feasts, seasonal retreats, Sunday School programs, and parish assemblies.
          </p>
        </div>

        {/* Announcement Banner */}
        <div className="mb-12 p-6 rounded-2xl bg-[#263B50] text-[#FAF8F3] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-[#B69556]/40">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FAF8F3]/10 border border-[#B69556]/40 flex items-center justify-center shrink-0">
              <Bell className="w-6 h-6 text-[#B69556]" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#B69556] font-bold">
                Liturgical Season Notice
              </span>
              <h3 className="font-serif text-xl md:text-2xl font-bold text-[#FAF8F3] mt-0.5">
                Feast of Sancta Maria & Parish Thirunal Preparations
              </h3>
              <p className="text-xs md:text-sm text-[#FAF8F3]/80 mt-1 max-w-2xl">
                Parish council announces upcoming feast day novena and liturgical schedules. Confirmed timings will be posted on the church notice board and via WhatsApp pastoral broadcast.
              </p>
            </div>
          </div>

          <a
            href="tel:+917397221142"
            className="shrink-0 px-6 py-3 rounded-full bg-[#B69556] text-[#35251F] font-semibold text-xs uppercase tracking-wider hover:bg-[#FAF8F3] transition-colors"
          >
            Enquire With Office
          </a>
        </div>

        {/* Events Cards */}
        {UPCOMING_EVENTS.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {UPCOMING_EVENTS.map((event) => (
              <div
                key={event.id}
                className="editorial-card flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#642D3A] bg-[#642D3A]/10 px-3 py-1 rounded-full border border-[#642D3A]/20">
                      {event.badge}
                    </span>
                    <button
                      onClick={() => handleShare(event.id, event.title)}
                      className="p-1.5 rounded-full hover:bg-[#E8DDCC]/60 text-[#594438] transition-colors"
                      title="Share event link"
                      aria-label="Share event"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#35251F] group-hover:text-[#642D3A] transition-colors mb-3 leading-snug">
                    {event.title}
                  </h3>

                  <div className="space-y-2 text-xs text-[#594438] mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#B69556]" />
                      <span className="font-semibold text-[#35251F]">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#B69556]" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#642D3A]" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <p className="text-sm text-[#594438]/90 leading-relaxed font-normal">
                    {event.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#B69556]/20 flex items-center justify-between text-xs text-[#594438]">
                  <span className="font-medium text-[#642D3A]">Hosur Diocese Calendar</span>
                  {copiedId === event.id && (
                    <span className="text-[11px] text-emerald-700 font-semibold">Link copied!</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Useful Empty State per brief */
          <div className="text-center py-16 px-6 bg-[#E8DDCC]/30 rounded-3xl border border-[#B69556]/30 max-w-xl mx-auto">
            <Calendar className="w-12 h-12 text-[#B69556] mx-auto mb-4" />
            <h4 className="font-serif text-2xl font-bold text-[#35251F] mb-2">No Scheduled Events At This Time</h4>
            <p className="text-sm text-[#594438]">
              Weekly Mass and sacraments proceed according to standard schedules. Please check back soon for feast day announcements.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
