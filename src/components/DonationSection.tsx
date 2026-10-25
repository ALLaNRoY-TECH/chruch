import React, { useState } from 'react';
import { Church, BookOpen, HeartHandshake, Flame, Building2, Copy, Check, ShieldCheck, Download } from 'lucide-react';

export const DonationSection: React.FC = () => {
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [copiedBank, setCopiedBank] = useState(false);

  // Default parish UPI ID (editable placeholder)
  const upiId = 'sanctamaria.church@okaxis';
  const bankDetails = {
    accountName: 'Sancta Maria Catholic Church',
    accountNumber: '9240100XXXXXXXX',
    ifsc: 'UTIB000XXXX',
    bank: 'Axis Bank / HDFC Bank',
    branch: 'Kelambakkam Branch, Tamil Nadu'
  };

  const copyToClipboard = (text: string, type: 'upi' | 'bank') => {
    navigator.clipboard.writeText(text);
    if (type === 'upi') {
      setCopiedUpi(true);
      setTimeout(() => setCopiedUpi(false), 2000);
    } else {
      setCopiedBank(true);
      setTimeout(() => setCopiedBank(false), 2000);
    }
  };

  return (
    <section id="donate" className="py-24 px-6 md:px-12 bg-[#FAF8F3] relative overflow-hidden border-t border-[#B69556]/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#35251F] font-bold tracking-tight">
            Support Sancta Maria Church
          </h2>
          <p className="mt-3 text-base md:text-lg text-[#594438]/85 font-normal leading-relaxed">
            &ldquo;Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.&rdquo; — 2 Corinthians 9:7
          </p>
        </div>

        {/* Donation Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: GPay / UPI QR Code Box */}
          <div className="lg:col-span-6 bg-[#FFFFFF] rounded-3xl p-8 md:p-10 shadow-xl border-2 border-[#B69556]/30 flex flex-col justify-between relative group hover:border-[#642D3A]/40 transition-colors">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#B69556]/20">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-[#642D3A]"></span>
                  <span className="font-serif text-xl font-bold text-[#35251F]">
                    Scan & Donate via GPay / UPI
                  </span>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#642D3A] bg-[#642D3A]/10 px-2.5 py-1 rounded-full">
                  All UPI Apps
                </span>
              </div>

              {/* QR Code Frame */}
              <div className="max-w-xs mx-auto text-center p-6 bg-[#FAF8F3] rounded-3xl border border-[#B69556]/40 shadow-inner my-4 relative">
                {/* Genuine Church GPay QR Display */}
                <div className="w-60 max-w-full mx-auto bg-[#FFFFFF] p-2 sm:p-3 rounded-2xl shadow-lg border border-[#B69556]/30 flex flex-col items-center justify-center relative overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                  <img
                    src="/images/church/gpay_qr_hd.png"
                    alt="Sancta Maria Church Google Pay & UPI QR Code"
                    className="w-full h-auto object-contain rounded-xl"
                  />
                </div>

                <div className="mt-4 flex items-center justify-center gap-2">
                  <a
                    href="/images/church/gpay_qr_hd.png"
                    download="Sancta_Maria_Church_GPay_QR.png"
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[#B69556]/60 bg-[#FFFFFF] hover:bg-[#642D3A] hover:text-[#FAF8F3] text-xs font-semibold text-[#594438] transition-all shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download QR Code</span>
                  </a>
                </div>

                <div className="mt-4 flex items-center justify-center gap-3 text-xs font-semibold text-[#594438] pt-3 border-t border-[#B69556]/20">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#34A853]"></span> GPay
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#5f259f]"></span> PhonePe
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#002e6e]"></span> Paytm
                  </span>
                </div>
              </div>

              {/* Copy UPI Box */}
              <div className="mt-4 p-3 bg-[#FAF8F3] rounded-xl border border-[#B69556]/30 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[10px] text-[#594438]/70 block font-medium">Parish UPI ID</span>
                  <span className="font-mono font-semibold text-[#35251F] text-xs md:text-sm">{upiId}</span>
                </div>
                <button
                  onClick={() => copyToClipboard(upiId, 'upi')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#642D3A] text-[#FAF8F3] font-medium text-xs hover:bg-[#263B50] transition-colors"
                >
                  {copiedUpi ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy UPI</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <p className="mt-6 text-[11px] text-[#594438]/70 text-center">
              Please enter your name or intention in the remarks field when making an online transfer.
            </p>
          </div>

          {/* Right Column: Bank Details & Offering Causes */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            {/* Sacred Stewardship & Fruits of Generosity */}
            <div className="bg-[#FFFFFF] rounded-3xl p-8 md:p-9 shadow-xl border-2 border-[#B69556]/30 relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 mb-6 border-b border-[#B69556]/20">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#642D3A] block mb-0.5">
                    Sacred Stewardship
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#35251F]">
                    Fruits of Your Generosity
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#FAF8F3] border border-[#B69556]/40 flex items-center justify-center text-[#642D3A] shrink-0 shadow-xs">
                  <Church className="w-5 h-5 text-[#642D3A]" />
                </div>
              </div>

              <div className="space-y-4">
                {/* Item 1 */}
                <div className="p-4 rounded-2xl bg-[#FAF8F3]/80 border border-[#B69556]/25 transition-all duration-300 hover:border-[#642D3A]/40 hover:bg-[#FAF8F3] group">
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-full bg-[#642D3A]/10 text-[#642D3A] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#642D3A] group-hover:text-[#FAF8F3] transition-colors">
                      <Church className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-bold text-[#35251F] group-hover:text-[#642D3A] transition-colors">
                        Sanctuary Upkeep & Liturgy
                      </h4>
                      <p className="text-xs text-[#594438]/85 font-normal leading-relaxed mt-0.5">
                        Maintaining the altar of sacrifice, floral offerings, Eucharistic vestments, and liturgical celebration of the Holy Qurbana.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="p-4 rounded-2xl bg-[#FAF8F3]/80 border border-[#B69556]/25 transition-all duration-300 hover:border-[#642D3A]/40 hover:bg-[#FAF8F3] group">
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-full bg-[#B69556]/15 text-[#B69556] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#B69556] group-hover:text-[#FAF8F3] transition-colors">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-bold text-[#35251F] group-hover:text-[#642D3A] transition-colors">
                        Catechesis & Faith Formation
                      </h4>
                      <p className="text-xs text-[#594438]/85 font-normal leading-relaxed mt-0.5">
                        Supplying liturgical texts, Sunday Catechism resources, and youth retreats for the children and young adults of our parish.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="p-4 rounded-2xl bg-[#FAF8F3]/80 border border-[#B69556]/25 transition-all duration-300 hover:border-[#642D3A]/40 hover:bg-[#FAF8F3] group">
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-full bg-[#263B50]/10 text-[#263B50] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#263B50] group-hover:text-[#FAF8F3] transition-colors">
                      <HeartHandshake className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-bold text-[#35251F] group-hover:text-[#642D3A] transition-colors">
                        Charitable Outreach & Mercy
                      </h4>
                      <p className="text-xs text-[#594438]/85 font-normal leading-relaxed mt-0.5">
                        Extending quiet medical assistance, food parcels, and educational sponsorship to vulnerable families in and around Kelambakkam.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="p-4 rounded-2xl bg-[#FAF8F3]/80 border border-[#B69556]/25 transition-all duration-300 hover:border-[#642D3A]/40 hover:bg-[#FAF8F3] group">
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-full bg-[#642D3A]/10 text-[#642D3A] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#642D3A] group-hover:text-[#FAF8F3] transition-colors">
                      <Flame className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-bold text-[#35251F] group-hover:text-[#642D3A] transition-colors">
                        Holy Qurbana Intentions
                      </h4>
                      <p className="text-xs text-[#594438]/85 font-normal leading-relaxed mt-0.5">
                        Offering special Eucharistic sacrifices in heartfelt thanksgiving, for family blessings, healing, or the repose of departed loved ones.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Bank Transfer Details */}
            <div className="bg-[#FFFFFF] rounded-3xl p-8 shadow-xl border border-[#B69556]/30">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif text-2xl font-bold text-[#35251F] flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#642D3A]" />
                  Bank Transfer (NEFT / IMPS)
                </h3>
                <button
                  onClick={() => copyToClipboard(`Account Name: ${bankDetails.accountName}\nAccount Number: ${bankDetails.accountNumber}\nIFSC: ${bankDetails.ifsc}\nBank: ${bankDetails.bank}`, 'bank')}
                  className="text-xs font-semibold text-[#642D3A] hover:underline flex items-center gap-1"
                >
                  {copiedBank ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedBank ? 'Copied' : 'Copy Bank Details'}</span>
                </button>
              </div>

              <div className="space-y-2.5 text-xs text-[#594438] bg-[#FAF8F3] p-4 rounded-xl border border-[#B69556]/20 font-mono">
                <div className="flex justify-between">
                  <span className="text-[#594438]/70 font-sans">Account Name:</span>
                  <span className="font-bold text-[#35251F] text-right">{bankDetails.accountName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#594438]/70 font-sans">Account Number:</span>
                  <span className="font-bold text-[#35251F]">{bankDetails.accountNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#594438]/70 font-sans">IFSC Code:</span>
                  <span className="font-bold text-[#642D3A]">{bankDetails.ifsc}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#594438]/70 font-sans">Branch:</span>
                  <span className="text-right text-[#35251F]">{bankDetails.branch}</span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-[#594438]/80">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Official Church Account · Hosur Diocese
                </span>
                <a href="tel:+917397221142" className="text-[#642D3A] font-semibold hover:underline">
                  Confirm with Office
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
