import React from 'react';
import { CHURCH_INFO } from '@/data/churchData';
import { MapPin, Phone, Clock, Mail, ExternalLink, Navigation, CheckCircle2 } from 'lucide-react';

export const ContactVisitSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-[#FAF8F3] relative overflow-hidden border-t border-[#B69556]/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#35251F] font-bold tracking-tight">
            Plan Your Visit to Sancta Maria
          </h2>
          <p className="mt-3 text-base md:text-lg text-[#594438]/85 leading-relaxed font-normal">
            Located conveniently off Thaiyur Market Road near Kelambakkam junction along the southern Chennai OMR corridor. We welcome all parishioners, families, and first-time guests.
          </p>
        </div>

        {/* Contact & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FFFFFF] rounded-3xl p-8 shadow-xl border border-[#B69556]/30 space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#642D3A] block mb-1">
                  Parish Sanctuary
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#35251F]">
                  {CHURCH_INFO.name}
                </h3>
                <p className="text-xs text-[#B69556] font-semibold mt-1">
                  {CHURCH_INFO.diocese}
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-[#B69556]/20 text-sm text-[#594438]">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF8F3] border border-[#B69556]/30 flex items-center justify-center shrink-0 text-[#642D3A]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#35251F]">Physical Address</p>
                    <p className="text-xs leading-relaxed mt-0.5">{CHURCH_INFO.address}</p>
                    <p className="text-[11px] text-[#594438]/70 mt-0.5">Landmark: {CHURCH_INFO.landmark}</p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF8F3] border border-[#B69556]/30 flex items-center justify-center shrink-0 text-[#642D3A]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#35251F]">Parish Telephone</p>
                    <a href={`tel:${CHURCH_INFO.phone}`} className="text-sm font-bold text-[#642D3A] hover:underline block mt-0.5">
                      {CHURCH_INFO.phoneDisplay}
                    </a>
                    <span className="text-[11px] text-[#594438]/70">Available during standard office hours</span>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF8F3] border border-[#B69556]/30 flex items-center justify-center shrink-0 text-[#642D3A]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#35251F]">Parish Office Hours</p>
                    <p className="text-xs leading-relaxed mt-0.5">
                      Tuesday – Sunday: 09:30 AM – 12:30 PM & 04:30 PM – 07:00 PM
                    </p>
                    <span className="text-[10px] text-[#642D3A] italic font-medium">
                      (Subject to confirmation by parish administration)
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${CHURCH_INFO.phone}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#642D3A] text-[#FAF8F3] font-semibold text-xs uppercase tracking-wider hover:bg-[#263B50] transition-colors shadow-md"
                >
                  <Phone className="w-4 h-4 text-[#B69556]" />
                  <span>Call Church</span>
                </a>

                <a
                  href="https://maps.app.goo.gl/Ja3jjRSjApNCqVgt8"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-[#B69556] text-[#35251F] font-semibold text-xs uppercase tracking-wider hover:bg-[#E8DDCC] transition-colors shadow-sm"
                >
                  <Navigation className="w-4 h-4 text-[#642D3A]" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* First-Time Visitor Guide */}
            <div className="bg-[#E8DDCC]/50 rounded-2xl p-6 border border-[#B69556]/30 text-xs text-[#594438] space-y-3">
              <h4 className="font-serif text-lg font-bold text-[#35251F] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#642D3A]" />
                Visiting for the First Time?
              </h4>
              <ul className="space-y-2 list-disc list-inside text-[#594438]/90 leading-relaxed">
                <li>Ample two-wheeler and four-wheeler parking is available on parish grounds.</li>
                <li>Modest church attire is encouraged for liturgical reverent participation.</li>
                <li>Malayalam hymnals & Sunday missals are available at the entrance foyer.</li>
                <li>Parish volunteers are on hand to welcome and assist you.</li>
              </ul>
            </div>
          </div>

          {/* Map Preview & Visual Container */}
          <div className="lg:col-span-7 bg-[#FFFFFF] rounded-3xl overflow-hidden shadow-xl border border-[#B69556]/30 flex flex-col">
            <div className="p-6 border-b border-[#B69556]/20 flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-[#642D3A]">Map Location</span>
                <p className="text-sm font-semibold text-[#35251F]">Kelambakkam, Thaiyur, Tamil Nadu 603103</p>
              </div>
              <a
                href="https://maps.app.goo.gl/Ja3jjRSjApNCqVgt8"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#642D3A] font-semibold hover:underline"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Map Frame */}
            <div className="aspect-[16/10] w-full bg-[#E8DDCC]/30 relative">
              <iframe
                title="Sancta Maria Church Kelambakkam Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.041!2d80.2106426!3d12.7863539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525118b19ba863%3A0x473a53aa621a389c!2sSancta%20Maria%20Syro%20Malabar%20Catholic%20Church!5e0!3m2!1sen!2sin!4v1700000000000"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="p-6 bg-[#FAF8F3] border-t border-[#B69556]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#594438]">
              <span>Accessible location near Kelambakkam Bus Station and OMR junction.</span>
              <span className="text-[#642D3A] font-semibold">Official Parish Sanctuary · Hosur Diocese</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
