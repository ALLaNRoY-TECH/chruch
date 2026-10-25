import React from 'react';
import { Component as KineticNavigation } from '@/components/ui/sterling-gate-kinetic-navigation';
import { HeroSection } from '@/components/HeroSection';
import { MassTimingsSection } from '@/components/MassTimingsSection';
import { ChurchGlyphPortal } from '@/components/GlyphPortalIntegration';
import { AboutSection } from '@/components/AboutSection';
import { ChurchStoryScroll } from '@/components/StoryScrollIntegration';
import { SacramentsSection } from '@/components/SacramentsSection';
import { MinistriesSection } from '@/components/MinistriesSection';
import { GalleryLightbox } from '@/components/GalleryLightbox';
import { EventsSection } from '@/components/EventsSection';
import { PrayerRequestsSection } from '@/components/PrayerRequestsSection';
import { DonationSection } from '@/components/DonationSection';
import { ContactVisitSection } from '@/components/ContactVisitSection';
import { FooterSection } from '@/components/FooterSection';

export function App() {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F3] text-[#35251F] font-sans antialiased selection:bg-[#642D3A] selection:text-[#FAF8F3]">
      {/* 1. Kinetic Header & Navigation */}
      <KineticNavigation
        onNavigate={scrollToSection}
        churchName="Sancta Maria"
      />

      {/* 2. Hero Section with authentic altar background */}
      <HeroSection
        onExploreMass={() => scrollToSection('mass-timings')}
        onPlanVisit={() => scrollToSection('contact')}
      />

      {/* 3. Mass Timings Section */}
      <MassTimingsSection />

      {/* 4. Glyph Portal Experience (Scroll camera through "SANCTA" into Sanctuary) */}
      <ChurchGlyphPortal />

      {/* 5. About the Parish & Syro-Malabar Heritage */}
      <AboutSection />

      {/* 6. Story Scroll (FlowArt faith journey with pinned rotational scrub) */}
      <ChurchStoryScroll />

      {/* 7. Sacraments */}
      <SacramentsSection />

      {/* 8. Parish Ministries & Life */}
      <MinistriesSection />

      {/* 9. Authentic Sanctuary Photo Gallery with Lightbox */}
      <GalleryLightbox />

      {/* 10. Liturgical Events & Announcements */}
      <EventsSection />

      {/* 11. Confidential Prayer Requests */}
      <PrayerRequestsSection />

      {/* 12. Parish Offerings & Online Donations (GPay / UPI) */}
      <DonationSection />

      {/* 13. Contact & Visit Our Church */}
      <ContactVisitSection />

      {/* 14. Substantial Editorial Footer */}
      <FooterSection />
    </div>
  );
}

export default App;
