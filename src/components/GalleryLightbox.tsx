import React, { useState, useEffect, useRef } from 'react';
import { CHURCH_PHOTOS } from '@/data/churchData';
import { X, ChevronLeft, ChevronRight, ZoomIn, MapPin, Sparkles, ArrowDown } from 'lucide-react';

export const GalleryLightbox: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll-driven slideshow tracking
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollableHeight = rect.height - window.innerHeight;
      if (scrollableHeight <= 0) return;

      // Calculate progress through the gallery track (0 to 1)
      const progress = Math.min(1, Math.max(0, -rect.top / scrollableHeight));
      const newIndex = Math.min(
        CHURCH_PHOTOS.length - 1,
        Math.floor(progress * CHURCH_PHOTOS.length)
      );
      setActiveIndex(newIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Jump to specific slide on thumbnail or button click
  const scrollToSlide = (index: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY + rect.top;
    const scrollableHeight = rect.height - window.innerHeight;
    const targetScroll = scrollTop + (index / (CHURCH_PHOTOS.length - 1)) * scrollableHeight;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextPhoto = () => {
    setActiveIndex((prev) => (prev + 1) % CHURCH_PHOTOS.length);
  };

  const prevPhoto = () => {
    setActiveIndex((prev) => (prev - 1 + CHURCH_PHOTOS.length) % CHURCH_PHOTOS.length);
  };

  const currentPhoto = CHURCH_PHOTOS[activeIndex] || CHURCH_PHOTOS[0];

  return (
    <div
      id="gallery"
      ref={containerRef}
      className="relative bg-[#FAF8F3] border-t border-[#B69556]/20"
      style={{ height: `${CHURCH_PHOTOS.length * 100}vh` }}
    >
      {/* Sticky Fullscreen Stage */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-6 md:py-8 px-6 md:px-12 overflow-hidden z-10 bg-[#FAF8F3]">
        {/* Gallery Header & Live Counter */}
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-[#B69556]/20 shrink-0">
          <div>
            <span className="text-[11px] uppercase tracking-[0.22em] font-bold text-[#642D3A] block mb-1">
              Interactive Sanctuary Tour
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#35251F] font-bold tracking-tight">
              The Sanctuary & Sacred Altar
            </h2>
          </div>

          {/* Slide Progress Counter */}
          <div className="flex items-center gap-4">
            <div className="text-right">
              <span className="text-[11px] uppercase tracking-wider text-[#594438]/70 block font-sans">
                Photo Tour
              </span>
              <span className="font-mono text-xl sm:text-2xl font-bold text-[#642D3A]">
                0{activeIndex + 1} <span className="text-sm font-normal text-[#B69556]">/ 0{CHURCH_PHOTOS.length}</span>
              </span>
            </div>

            {/* Progress Bar Indicator */}
            <div className="w-24 sm:w-32 h-2 rounded-full bg-[#E8DDCC] overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#642D3A] to-[#B69556] transition-all duration-300 ease-out"
                style={{ width: `${((activeIndex + 1) / CHURCH_PHOTOS.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Main Showcase Stage (Photo + Side Details) */}
        <div className="max-w-7xl mx-auto w-full my-auto py-4 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center flex-1 min-h-0">
          {/* Left: Cinematic Slideshow Frame */}
          <div className="lg:col-span-7 h-full flex flex-col justify-center">
            <div
              onClick={() => openLightbox(activeIndex)}
              className="group cursor-pointer relative w-full aspect-[16/10] max-h-[58vh] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#B69556]/40 bg-[#1f1614]"
            >
              {/* Stacked Images for Smooth Cross-Fade */}
              {CHURCH_PHOTOS.map((photo, idx) => (
                <div
                  key={photo.id}
                  className="absolute inset-0 transition-all duration-700 ease-out"
                  style={{
                    opacity: idx === activeIndex ? 1 : 0,
                    transform: idx === activeIndex ? 'scale(1)' : 'scale(1.04)',
                    pointerEvents: idx === activeIndex ? 'auto' : 'none',
                  }}
                >
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#35251F]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                </div>
              ))}

              {/* Click to Expand Overlay */}
              <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#FAF8F3]/90 text-[#35251F] text-xs font-semibold shadow-lg backdrop-blur-md opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all">
                <ZoomIn className="w-4 h-4 text-[#642D3A]" />
                <span>Fullscreen</span>
              </div>
            </div>
          </div>

          {/* Right: Editorial Information & Controls */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              {/* Category */}
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#B69556]"></span>
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#642D3A]">
                  {currentPhoto.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#35251F] leading-tight mb-3 transition-all duration-300">
                {currentPhoto.title}
              </h3>

              {/* Caption */}
              <p className="text-sm sm:text-base text-[#594438] leading-relaxed font-normal mb-6 transition-all duration-300">
                {currentPhoto.caption}
              </p>

              {/* Parish Badge */}
              <div className="p-4 rounded-2xl bg-[#E8DDCC]/50 border border-[#B69556]/30 text-xs text-[#594438] space-y-1">
                <p className="font-bold text-[#35251F]">Sancta Maria Catholic Church</p>
                <p>Thaiyur Market Road, Kelambakkam, Tamil Nadu 603103</p>
                <p className="text-[#642D3A] font-semibold">Syro-Malabar Rite · Hosur Diocese</p>
              </div>
            </div>

            {/* Thumbnail Navigation Strip */}
            <div className="space-y-3 pt-2">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#594438]/70 block">
                Select Photo or Scroll
              </span>
              <div className="flex items-center gap-2.5 overflow-x-auto pb-1">
                {CHURCH_PHOTOS.map((photo, idx) => (
                  <button
                    key={photo.id}
                    onClick={() => scrollToSlide(idx)}
                    className={`relative w-14 h-11 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                      idx === activeIndex
                        ? 'border-[#642D3A] shadow-md scale-105'
                        : 'border-[#B69556]/30 opacity-60 hover:opacity-100'
                    }`}
                    aria-label={`Go to photo ${idx + 1}`}
                  >
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Prev / Next Manual Step Buttons */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => scrollToSlide(Math.max(0, activeIndex - 1))}
                  disabled={activeIndex === 0}
                  className="px-4 py-2 rounded-full border border-[#B69556]/50 bg-[#FAF8F3] text-xs font-semibold text-[#35251F] hover:bg-[#642D3A] hover:text-[#FAF8F3] disabled:opacity-40 disabled:pointer-events-none transition-all flex items-center gap-1.5"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <button
                  onClick={() => scrollToSlide(Math.min(CHURCH_PHOTOS.length - 1, activeIndex + 1))}
                  disabled={activeIndex === CHURCH_PHOTOS.length - 1}
                  className="px-4 py-2 rounded-full border border-[#B69556]/50 bg-[#FAF8F3] text-xs font-semibold text-[#35251F] hover:bg-[#642D3A] hover:text-[#FAF8F3] disabled:opacity-40 disabled:pointer-events-none transition-all flex items-center gap-1.5"
                >
                  <span>Next Photo</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tour Help Notice */}
        <div className="max-w-7xl mx-auto w-full pt-3 border-t border-[#B69556]/20 flex items-center justify-between text-xs text-[#594438]/80 shrink-0">
          <span className="flex items-center gap-1.5 font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#642D3A]" />
            Sancta Maria Altar & Sanctuary
          </span>

          <span className="flex items-center gap-1.5 text-[#642D3A] font-semibold animate-pulse">
            <ArrowDown className="w-3.5 h-3.5 text-[#B69556]" />
            Scroll down to advance photos one by one
          </span>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#263B50]/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-5xl w-full bg-[#FAF8F3] rounded-3xl overflow-hidden shadow-2xl border border-[#B69556]/40 flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#35251F]/80 text-[#FAF8F3] hover:bg-[#642D3A] flex items-center justify-center transition-colors shadow-lg"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image Stage */}
            <div className="md:w-2/3 bg-[#131313] flex items-center justify-center relative overflow-hidden min-h-[300px] md:min-h-[500px]">
              <img
                src={CHURCH_PHOTOS[activeIndex].url}
                alt={CHURCH_PHOTOS[activeIndex].title}
                className="max-h-[80vh] w-auto max-w-full object-contain"
              />

              {/* Prev / Next controls */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevPhoto();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#FAF8F3]/80 hover:bg-[#FAF8F3] text-[#35251F] flex items-center justify-center shadow-lg transition-transform hover:scale-110"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextPhoto();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#FAF8F3]/80 hover:bg-[#FAF8F3] text-[#35251F] flex items-center justify-center shadow-lg transition-transform hover:scale-110"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Editorial Caption Panel */}
            <div className="md:w-1/3 p-6 md:p-8 flex flex-col justify-between bg-[#FAF8F3] text-[#35251F] overflow-y-auto">
              <div>
                <div className="flex items-center justify-between text-xs text-[#B69556] font-semibold uppercase tracking-widest mb-3">
                  <span>Authentic Photograph</span>
                  <span>
                    {activeIndex + 1} / {CHURCH_PHOTOS.length}
                  </span>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#642D3A] mb-3">
                  {CHURCH_PHOTOS[activeIndex].title}
                </h3>

                <p className="text-sm text-[#594438] leading-relaxed mb-6 font-normal">
                  {CHURCH_PHOTOS[activeIndex].caption}
                </p>

                <div className="p-4 rounded-xl bg-[#E8DDCC]/50 border border-[#B69556]/30 text-xs text-[#594438] space-y-1.5">
                  <p className="font-semibold text-[#35251F]">Sancta Maria Catholic Church</p>
                  <p>Thaiyur Market Road, Kelambakkam, Tamil Nadu 603103</p>
                  <p className="text-[#642D3A] font-medium">Syro-Malabar Rite · Hosur Diocese</p>
                </div>
              </div>

              <div className="pt-6 border-t border-[#B69556]/20 mt-6 flex justify-between items-center text-xs text-[#594438]/70">
                <span>Use arrows to browse</span>
                <button
                  onClick={closeLightbox}
                  className="px-4 py-1.5 rounded-full bg-[#642D3A] text-white font-medium hover:bg-[#263B50] transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
