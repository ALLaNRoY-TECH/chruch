import React from 'react';
import FlowArt, { FlowSection } from '@/components/ui/story-scroll';

export const ChurchStoryScroll: React.FC = () => {
  return (
    <section id="faith-journey" className="relative w-full overflow-hidden">
      <FlowArt aria-label="Sancta Maria Faith & Liturgical Journey">
        {/* Section 1: Sacred Heritage */}
        <FlowSection 
          aria-label="Sacred Roots" 
          style={{ backgroundColor: '#642D3A', color: '#FAF8F3' }}
        >
          <div className="my-auto py-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[#FAF8F3]/80 font-medium mb-3">
              Sancta Maria Catholic Church · Kelambakkam
            </p>
            <h1 className="font-serif text-[clamp(2.8rem,9vw,8.5rem)] font-bold leading-[0.92] uppercase tracking-tight text-[#FAF8F3]">
              Rooted
              <br />
              In Sacred
              <br />
              <span className="text-[#B69556]">Tradition</span>
            </h1>
          </div>

          <div className="pt-6 border-t border-[#FAF8F3]/20 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <p className="max-w-[48ch] text-[clamp(1rem,1.8vw,1.45rem)] font-light leading-relaxed text-[#FAF8F3]/90">
              Tracing our spiritual ancestry to Saint Thomas the Apostle in India, Sancta Maria preserves the timeless sanctity of the Syro-Malabar Eastern Catholic rite.
            </p>
            <span className="text-xs uppercase tracking-widest text-[#B69556] font-semibold">
              Hosur Diocese · Thaiyur Road ↓
            </span>
          </div>
        </FlowSection>

        {/* Section 2: Liturgy & Holy Qurbana */}
        <FlowSection 
          aria-label="The Holy Qurbana" 
          style={{ backgroundColor: '#263B50', color: '#FAF8F3' }}
        >
          <div className="my-auto py-8">
            <h2 className="font-serif text-[clamp(2.8rem,9vw,8.5rem)] font-bold leading-[0.92] uppercase tracking-tight text-[#FAF8F3]">
              The Holy
              <br />
              <span className="text-[#A9C2D0]">Qurbana</span>
              <br />
              Celebration
            </h2>
          </div>

          <div className="pt-6 border-t border-[#FAF8F3]/20 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-[#FAF8F3]/80">
            <div>
              <p className="font-semibold uppercase tracking-wider text-[#FAF8F3] mb-1">Ancient Syriac Chant</p>
              <p className="text-xs leading-relaxed text-[#FAF8F3]/70">Melodies that echo the apostolic era, elevating the soul into contemplation of the Triune God.</p>
            </div>
            <div>
              <p className="font-semibold uppercase tracking-wider text-[#FAF8F3] mb-1">Eucharistic Center</p>
              <p className="text-xs leading-relaxed text-[#FAF8F3]/70">The Holy Sacrifice where bread and wine become the Real Presence of Christ through the Holy Spirit.</p>
            </div>
            <div>
              <p className="font-semibold uppercase tracking-wider text-[#FAF8F3] mb-1">Reverent Ritual</p>
              <p className="text-xs leading-relaxed text-[#FAF8F3]/70">Incense, sacred vestments, and liturgical hymns honoring the eternal mystery of redemption.</p>
            </div>
          </div>
        </FlowSection>

        {/* Section 3: The Sanctuary & Altar */}
        <FlowSection 
          aria-label="The Consecrated Sanctuary" 
          style={{ backgroundColor: '#E8DDCC', color: '#35251F' }}
        >
          <div className="my-auto py-8">
            <h2 className="font-serif text-[clamp(2.8rem,9vw,8.5rem)] font-bold leading-[0.92] uppercase tracking-tight text-[#35251F]">
              Sacred
              <br />
              <span className="text-[#642D3A]">Architecture</span>
              <br />
              Of Grace
            </h2>
          </div>

          <div className="pt-6 border-t border-[#35251F]/20 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-[#594438]">
            <div className="border-l-2 border-[#B69556] pl-4">
              <p className="font-bold uppercase tracking-wider text-[#35251F] mb-1">The Dove Tabernacle</p>
              <p className="text-xs leading-relaxed">Carved wooden altar table representing the descent of the Paraclete upon the chalice of life.</p>
            </div>
            <div className="border-l-2 border-[#B69556] pl-4">
              <p className="font-bold uppercase tracking-wider text-[#35251F] mb-1">Mar Thoma Cross</p>
              <p className="text-xs leading-relaxed">The central flowering cross rising above the altar, symbolizing the resurrection and fruitful victory of Christ.</p>
            </div>
            <div className="border-l-2 border-[#B69556] pl-4">
              <p className="font-bold uppercase tracking-wider text-[#35251F] mb-1">Devotional Shrines</p>
              <p className="text-xs leading-relaxed">Side niches dedicated to the Blessed Mother Mary, Saint Joseph, and Saint Alphonsa of India.</p>
            </div>
          </div>
        </FlowSection>

        {/* Section 4: Parish Community */}
        <FlowSection 
          aria-label="One Family in Christ" 
          style={{ backgroundColor: '#35251F', color: '#FAF8F3' }}
        >
          <div className="my-auto py-8">
            <h2 className="font-serif text-[clamp(2.8rem,9vw,8.5rem)] font-bold leading-[0.92] uppercase tracking-tight text-[#FAF8F3]">
              One Heart.
              <br />
              <span className="text-[#B69556]">One Faith.</span>
              <br />
              One Home.
            </h2>
          </div>

          <div className="pt-6 border-t border-[#FAF8F3]/20 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <p className="max-w-[50ch] text-[clamp(1rem,1.8vw,1.4rem)] font-light leading-relaxed text-[#FAF8F3]/90">
              Welcoming IT professionals, families, students, and seniors. From the youth of SMYM to our children&apos;s catechism, you belong here.
            </p>
          </div>
        </FlowSection>

        {/* Section 5: Invitation */}
        <FlowSection 
          aria-label="Come and See" 
          style={{ backgroundColor: '#FAF8F3', color: '#35251F' }}
        >
          <div className="my-auto py-8">
            <h2 className="font-serif text-[clamp(2.8rem,9vw,8.5rem)] font-bold leading-[0.92] uppercase tracking-tight text-[#35251F]">
              Come
              <br />
              <span className="text-[#642D3A]">And See.</span>
              <br />
              Pray With Us.
            </h2>
          </div>

          <div className="pt-6 border-t border-[#35251F]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <p className="max-w-[45ch] text-base md:text-lg text-[#594438]">
              Doors are open for prayer, confession, Sunday Holy Qurbana, and quiet adoration of the Blessed Sacrament.
            </p>
            <div className="flex gap-3">
              <a 
                href="#mass-timings" 
                className="px-6 py-3 rounded-full bg-[#642D3A] text-[#FAF8F3] font-medium text-xs md:text-sm uppercase tracking-wider hover:bg-[#263B50] transition-colors shadow-lg shadow-[#642D3A]/25"
              >
                View Mass Timings
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-full border border-[#B69556] text-[#35251F] font-medium text-xs md:text-sm uppercase tracking-wider hover:bg-[#E8DDCC] transition-colors"
              >
                Plan Your Visit
              </a>
            </div>
          </div>
        </FlowSection>
      </FlowArt>
    </section>
  );
};
