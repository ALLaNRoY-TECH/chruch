import React from 'react';
import { Shield, BookOpen, Heart, Users, MapPin, Sparkles, Feather } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-[#FAF8F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Eyebrow */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#35251F] font-bold tracking-tight">
            An Apostolic Heritage.<br />
            <span className="text-[#642D3A] italic font-normal">A Welcoming Parish Family.</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#594438]/85 leading-relaxed">
            Sancta Maria Syro Malabar Catholic Church serves the faithful residing across Kelambakkam, Thaiyur, and the southern Chennai IT belt. Under the pastoral guidance of the Hosur Diocese (Eparchy of Hosur), we are united in the Catholic faith, liturgical worship, and community service.
          </p>
        </div>

        {/* Editorial Story Layout with Authentic Photos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#B69556]/30">
              <img
                src="/images/church/liturgical_celebration.jpg"
                alt="Solemn Liturgical Celebration at Sancta Maria Church"
                className="w-full h-auto object-cover max-h-[560px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#35251F]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-[#FAF8F3]">
                <span className="text-xs uppercase tracking-widest text-[#B69556] font-semibold block mb-1">
                  Holy Qurbana Liturgy
                </span>
                <p className="font-serif text-xl font-bold">
                  Solemn celebration with bishop and priests wearing traditional vestments.
                </p>
              </div>
            </div>
            {/* Accent Badge */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 bg-[#642D3A] text-[#FAF8F3] p-5 rounded-2xl shadow-xl border border-[#B69556]/40 max-w-xs">
              <p className="text-xs uppercase tracking-widest text-[#B69556] font-bold mb-1">Syro-Malabar Rite</p>
              <p className="text-xs leading-relaxed text-[#FAF8F3]/90">
                One of the 23 Eastern Catholic sui iuris Churches in full communion with the Pope in Rome.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#B69556]/20 shadow-sm">
              <div className="flex items-center gap-3 mb-2 text-[#642D3A]">
                <BookOpen className="w-5 h-5 text-[#B69556]" />
                <h3 className="font-serif text-2xl font-bold text-[#35251F]">The Syro-Malabar Tradition</h3>
              </div>
              <p className="text-sm text-[#594438] leading-relaxed">
                Tracing its apostolic origins to Saint Thomas the Apostle who landed in Kodungallur, Kerala in AD 52. The liturgical tradition is characterized by solemn chanting, the Anaphora of Mar Addai and Mari, deep reverence before the altar, and active communal response.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#B69556]/20 shadow-sm">
              <div className="flex items-center gap-3 mb-2 text-[#642D3A]">
                <Users className="w-5 h-5 text-[#B69556]" />
                <h3 className="font-serif text-2xl font-bold text-[#35251F]">The Hosur Diocese</h3>
              </div>
              <p className="text-sm text-[#594438] leading-relaxed">
                Erected by Pope Francis in 2017 to shepherd the Syro-Malabar faithful across northern Tamil Nadu. Sancta Maria is a vibrant parish hub providing pastoral care to Malayalam-speaking families, students, and professionals in the greater Chennai coastal region.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#B69556]/20 shadow-sm">
              <div className="flex items-center gap-3 mb-2 text-[#642D3A]">
                <Sparkles className="w-5 h-5 text-[#B69556]" />
                <h3 className="font-serif text-2xl font-bold text-[#35251F]">Mission & Vision</h3>
              </div>
              <p className="text-sm text-[#594438] leading-relaxed">
                To be a radiant lighthouse of faith, nurturing young generations in Catholic truth, fostering compassionate outreach to neighboring villages, and keeping the sacred traditions of our forefathers alive.
              </p>
            </div>
          </div>
        </div>

        {/* Welcome From the Parish Priest (Editorial Placeholder per brief) */}
        <div className="rounded-3xl bg-[#E8DDCC]/40 border border-[#B69556]/30 p-8 md:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Priest Icon / Placeholder Portrait Area */}
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#FFFFFF] border-2 border-[#B69556] p-2 flex items-center justify-center shadow-md relative overflow-hidden">
                <img
                  src="/images/church/church_emblem.png"
                  alt="Sancta Maria Catholic Church Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="mt-4 text-xs uppercase tracking-widest font-semibold text-[#642D3A]">
                Parish Priest / Vicar
              </span>
              <p className="text-xs text-[#594438]/70 italic mt-0.5">
                (Official biographical details to be confirmed by the Parish Office)
              </p>
            </div>

            {/* Welcome Message Text */}
            <div className="md:col-span-8">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B69556] font-bold mb-2">
                <Feather className="w-3.5 h-3.5" />
                <span>A Pastoral Welcome</span>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#35251F] mb-4">
                &ldquo;A Place to Belong. A Community to Grow With.&rdquo;
              </h3>
              <p className="text-sm md:text-base text-[#594438] leading-relaxed mb-4 font-normal">
                Dear brothers and sisters, whether you are a lifelong parishioner, a newcomer relocating to Kelambakkam, or a guest seeking quiet prayer before the Blessed Sacrament, our church welcomes you with open arms.
              </p>
              <p className="text-sm md:text-base text-[#594438] leading-relaxed font-normal">
                Here at Sancta Maria, our prayer is that every family finds peace, every young person discovers their God-given vocation, and every weary heart finds consolation at the feet of Christ our Lord.
              </p>

              <div className="mt-6 pt-4 border-t border-[#B69556]/20 flex items-center justify-between text-xs text-[#594438]">
                <span className="font-serif text-lg font-semibold italic text-[#642D3A]">
                  In the Love of Christ & Our Lady,
                </span>
                <span className="font-mono text-[11px] text-[#B69556]">Office of the Vicar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
