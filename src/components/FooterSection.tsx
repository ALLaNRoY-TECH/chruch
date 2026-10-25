import React, { useState } from 'react';
import { CHURCH_INFO } from '@/data/churchData';
import { MapPin, Phone, Heart, Shield, X } from 'lucide-react';

export const FooterSection: React.FC = () => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#35251F] text-[#FAF8F3] pt-20 pb-12 px-6 md:px-12 border-t-2 border-[#B69556] relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#FAF8F3]/15">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-white p-1 border border-[#B69556] shadow-sm shrink-0 flex items-center justify-center">
                <img
                  src="/images/church/church_emblem.png"
                  alt="Sancta Maria Church Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold tracking-wider text-[#FAF8F3]">
                  {CHURCH_INFO.shortName}
                </h3>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#B69556] block">
                  Syro Malabar Catholic Church · Kelambakkam
                </span>
              </div>
            </div>

            <p className="text-xs md:text-sm text-[#FAF8F3]/80 leading-relaxed max-w-md font-light">
              A vibrant Malayalam-speaking and multilingual Catholic community belonging to the Hosur Diocese. We gather to worship, grow in Christian holiness, and serve our neighbors in truth and love.
            </p>

            <div className="pt-2 text-xs text-[#B69556] font-serif italic">
              &ldquo;Rooted in Faith. United in Christ.&rdquo;
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B69556]">
              Parish Directory
            </p>
            <ul className="space-y-2 text-xs text-[#FAF8F3]/80">
              <li><a href="#home" className="hover:text-[#B69556] transition-colors">Sancta Maria Home</a></li>
              <li><a href="#about" className="hover:text-[#B69556] transition-colors">About Our Parish & Heritage</a></li>
              <li><a href="#mass-timings" className="hover:text-[#B69556] transition-colors">Mass & Confession Timings</a></li>
              <li><a href="#sacraments" className="hover:text-[#B69556] transition-colors">The Seven Sacraments</a></li>
              <li><a href="#ministries" className="hover:text-[#B69556] transition-colors">Parish Ministries & Youth</a></li>
              <li><a href="#events" className="hover:text-[#B69556] transition-colors">Events & Feasts</a></li>
              <li><a href="#gallery" className="hover:text-[#B69556] transition-colors">Sanctuary Photo Gallery</a></li>
              <li><a href="#prayer-requests" className="hover:text-[#B69556] transition-colors">Prayer Petitions</a></li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B69556]">
              Visit & Contact
            </p>
            <div className="text-xs text-[#FAF8F3]/80 space-y-2.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#B69556] shrink-0 mt-0.5" />
                <span>{CHURCH_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#B69556] shrink-0" />
                <a href={`tel:${CHURCH_INFO.phone}`} className="hover:text-[#B69556] transition-colors font-semibold">
                  {CHURCH_INFO.phoneDisplay}
                </a>
              </div>
              <p className="text-[11px] text-[#FAF8F3]/60 pt-1">
                Diocese: {CHURCH_INFO.diocese}
              </p>
              <div className="pt-3 w-full">
                <a
                  href="https://maps.app.goo.gl/Ja3jjRSjApNCqVgt8"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#642D3A] border border-[#B69556]/60 text-xs font-semibold text-[#FAF8F3] hover:bg-[#263B50] shadow-md transition-all text-center"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#B69556]" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF8F3]/60 gap-4">
          <p>© {currentYear} Sancta Maria Syro Malabar Catholic Church, Kelambakkam. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={() => setShowPrivacyModal(true)}
              className="hover:text-[#B69556] transition-colors underline"
            >
              Privacy Policy & Consent
            </button>
            <span>·</span>
            <span className="text-[#B69556]">Hosur Diocese</span>
          </div>
        </div>
      </div>

      {/* Privacy Modal */}
      {showPrivacyModal && (
        <div 
          className="fixed inset-0 z-50 bg-[#263B50]/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowPrivacyModal(false)}
        >
          <div 
            className="bg-[#FAF8F3] text-[#35251F] max-w-lg w-full rounded-2xl p-6 md:p-8 shadow-2xl border border-[#B69556]/40 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowPrivacyModal(false)}
              className="absolute top-4 right-4 text-[#594438] hover:text-[#642D3A]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <h4 className="font-serif text-2xl font-bold text-[#642D3A] mb-3">
              Parish Privacy & Data Protection
            </h4>
            <div className="text-xs text-[#594438] space-y-3 leading-relaxed">
              <p>
                Sancta Maria Syro Malabar Catholic Church respects the privacy of all parishioners and visitors. Any personal information submitted via our prayer requests or contact forms is maintained in strict pastoral confidentiality.
              </p>
              <p>
                We do not sell, distribute, or publicly display prayer intentions or private contact data. Sacramental records (Baptism, Marriage) are maintained under Catholic Canon Law and diocesan regulations of the Hosur Diocese.
              </p>
              <p>
                For questions regarding parish records or communications, contact the Parish Office at Thaiyur Market Road, Kelambakkam or call +91 73972 21142.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#B69556]/20 text-right">
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="px-5 py-2 rounded-full bg-[#642D3A] text-[#FAF8F3] text-xs uppercase tracking-wider font-semibold hover:bg-[#263B50] transition-colors"
              >
                Close Notice
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
