import React, { useState } from 'react';
import { Heart, Send, CheckCircle2, Shield, Lock, Phone } from 'lucide-react';

export const PrayerRequestsSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    intention: '',
    wantsResponse: false,
    consent: true
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.intention.trim()) return;
    setSubmitted(true);
  };

  return (
    <section id="prayer-requests" className="py-24 px-6 md:px-12 bg-[#FAF8F3] relative overflow-hidden border-t border-[#B69556]/20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#35251F] font-bold tracking-tight">
            You Are Not Alone in Prayer.
          </h2>
          <p className="mt-3 text-base md:text-lg text-[#594438]/85 max-w-2xl mx-auto font-normal leading-relaxed">
            Whatever trial, thanksgiving, or burden you carry, our priests and parish community lift your intentions before the Blessed Sacrament during Holy Qurbana.
          </p>
        </div>

        {/* Card Form */}
        <div className="bg-[#FFFFFF] rounded-3xl p-8 md:p-12 shadow-xl border border-[#B69556]/30 relative">
          {submitted ? (
            <div className="text-center py-12 px-4 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-700 mx-auto flex items-center justify-center border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-[#35251F]">
                Your Prayer Intention is Noted
              </h3>
              <p className="text-sm md:text-base text-[#594438] max-w-lg mx-auto leading-relaxed">
                Thank you. Your prayer petition will be placed before the sacred altar during Friday adoration and Sunday Holy Qurbana at Sancta Maria.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', contact: '', intention: '', wantsResponse: false, consent: true });
                  }}
                  className="px-6 py-2.5 rounded-full border border-[#B69556] text-xs uppercase tracking-wider font-semibold text-[#35251F] hover:bg-[#E8DDCC] transition-colors"
                >
                  Submit Another Intention
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#35251F] mb-2">
                    Your Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter name or leave anonymous"
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F3] border border-[#B69556]/30 text-sm text-[#35251F] focus:outline-none focus:border-[#642D3A] focus:ring-1 focus:ring-[#642D3A] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#35251F] mb-2">
                    Email or Phone (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    placeholder="Only if you wish a pastoral response"
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F3] border border-[#B69556]/30 text-sm text-[#35251F] focus:outline-none focus:border-[#642D3A] focus:ring-1 focus:ring-[#642D3A] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#35251F] mb-2">
                  Your Prayer Intention *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.intention}
                  onChange={(e) => setFormData({ ...formData, intention: e.target.value })}
                  placeholder="Share your prayers for healing, family, exams, thanksgiving, or departed souls..."
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF8F3] border border-[#B69556]/30 text-sm text-[#35251F] focus:outline-none focus:border-[#642D3A] focus:ring-1 focus:ring-[#642D3A] transition-all resize-y"
                ></textarea>
              </div>

              <div className="space-y-3 pt-2">
                <label className="flex items-start gap-3 cursor-pointer text-xs text-[#594438]">
                  <input
                    type="checkbox"
                    checked={formData.wantsResponse}
                    onChange={(e) => setFormData({ ...formData, wantsResponse: e.target.checked })}
                    className="mt-0.5 rounded border-[#B69556] text-[#642D3A] focus:ring-[#642D3A]"
                  />
                  <span>I would like a priest or pastoral team member to acknowledge or contact me.</span>
                </label>

                <div className="flex items-center gap-2 text-[11px] text-[#594438]/80">
                  <Lock className="w-3.5 h-3.5 text-[#B69556]" />
                  <span>Your privacy is sacred. Intentions are never published or shared publicly.</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#642D3A] text-[#FAF8F3] font-semibold text-xs uppercase tracking-wider hover:bg-[#263B50] transition-colors shadow-lg shadow-[#642D3A]/20"
                >
                  <Send className="w-4 h-4 text-[#B69556]" />
                  <span>Submit Prayer Request</span>
                </button>

                <div className="text-xs text-[#594438] text-center sm:text-right">
                  Prefer direct contact?{' '}
                  <a href="tel:+917397221142" className="text-[#642D3A] font-semibold hover:underline">
                    Call: +91 73972 21142
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
