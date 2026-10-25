import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";

// Register GSAP Plugins safely
if (typeof window !== "undefined") {
  try {
    gsap.registerPlugin(CustomEase);
  } catch (e) {
    console.warn("CustomEase registration warning:", e);
  }
}

export interface NavigationProps {
  onNavigate?: (pageId: string) => void;
  activePage?: string;
  churchName?: string;
}

export function Component({ onNavigate, activePage = "home", churchName = "Sancta Maria" }: NavigationProps = {}) {
  // We need a ref for the parent container to scope GSAP
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (isMenuOpen) {
        setIsHeaderVisible(true);
        return;
      }

      // At the top of the page, always show header
      if (currentScrollY <= 25) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 40) {
        // Scrolling DOWN -> it goes away!
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY.current - 5) {
        // Scrolling UP -> reveal for convenient navigation
        setIsHeaderVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  // Initial Setup & Hover Effects
  useEffect(() => {
    if (!containerRef.current) return;

    // Create custom easing
    try {
      if (!gsap.parseEase("main")) {
        CustomEase.create("main", "0.65, 0.01, 0.05, 0.99");
        gsap.defaults({ ease: "main", duration: 0.7 });
      }
    } catch (e) {
      console.warn("CustomEase failed to load, falling back to default.", e);
      gsap.defaults({ ease: "power2.out", duration: 0.7 });
    }

    const ctx = gsap.context(() => {
      // 1. Arrow Animation
      const arrowLine = document.querySelector(".arrow-line");
      if (arrowLine) {
        const pathLength = (arrowLine as SVGPathElement).getTotalLength();
        gsap.set(arrowLine, { strokeDasharray: pathLength, strokeDashoffset: pathLength });
        const arrowTl = gsap.timeline({ repeat: -1, repeatDelay: 0.8 });
        arrowTl
          .to(arrowLine, { strokeDashoffset: 0, duration: 1, ease: "power2.out" })
          .to({}, { duration: 1.2 })
          .to(arrowLine, { strokeDashoffset: -pathLength, duration: 0.6, ease: "power2.in" })
          .set(arrowLine, { strokeDashoffset: pathLength });
      }

      // 2. Shape Hover
      const menuItems = containerRef.current!.querySelectorAll(".menu-list-item[data-shape]");
      const shapesContainer = containerRef.current!.querySelector(".ambient-background-shapes");
      
      menuItems.forEach((item) => {
        const shapeIndex = item.getAttribute("data-shape");
        const shape = shapesContainer ? shapesContainer.querySelector(`.bg-shape-${shapeIndex}`) : null;
        
        if (!shape) return;

        const shapeEls = shape.querySelectorAll(".shape-element");

        const onEnter = () => {
          if (shapesContainer) {
            shapesContainer.querySelectorAll(".bg-shape").forEach((s) => s.classList.remove("active"));
          }
          shape.classList.add("active");
          
          gsap.fromTo(shapeEls, 
            { scale: 0.5, opacity: 0, rotation: -10 },
            { scale: 1, opacity: 1, rotation: 0, duration: 0.6, stagger: 0.08, ease: "back.out(1.7)", overwrite: "auto" }
          );
        };
        
        const onLeave = () => {
          gsap.to(shapeEls, {
            scale: 0.8, opacity: 0, duration: 0.3, ease: "power2.in",
            onComplete: () => shape.classList.remove("active"),
            overwrite: "auto"
          });
        };

        item.addEventListener("mouseenter", onEnter);
        item.addEventListener("mouseleave", onLeave);
        
        (item as any)._cleanup = () => {
          item.removeEventListener("mouseenter", onEnter);
          item.removeEventListener("mouseleave", onLeave);
        };
      });
      
    }, containerRef);

    return () => {
      ctx.revert();
      if (containerRef.current) {
        const items = containerRef.current.querySelectorAll(".menu-list-item[data-shape]");
        items.forEach((item: any) => item._cleanup && item._cleanup());
      }
    };
  }, []);

  // Menu Open/Close Animation Effect
  useEffect(() => {
    if (!containerRef.current) return;
    
    const ctx = gsap.context(() => {
      const navWrap = containerRef.current!.querySelector(".nav-overlay-wrapper");
      const menu = containerRef.current!.querySelector(".menu-content");
      const overlay = containerRef.current!.querySelector(".overlay");
      const bgPanels = containerRef.current!.querySelectorAll(".backdrop-layer");
      const menuLinks = containerRef.current!.querySelectorAll(".nav-link");
      const fadeTargets = containerRef.current!.querySelectorAll("[data-menu-fade]");
      
      const menuButton = containerRef.current!.querySelector(".nav-close-btn");
      const menuButtonTexts = menuButton?.querySelectorAll("p");
      const menuButtonIcon = menuButton?.querySelector(".menu-button-icon");

      const tl = gsap.timeline();
      
      if (isMenuOpen) {
        // OPEN
        if (navWrap) navWrap.setAttribute("data-nav", "open");
        
        tl.set(navWrap, { display: "block" })
          .fromTo(menu, { xPercent: 100 }, { xPercent: 0, duration: 0.55, ease: "power3.out" }, "<")
          // Animate Button Text Swapping if it exists
          .fromTo(menuButtonTexts, { yPercent: 0 }, { yPercent: -100, stagger: 0.15 })
          .fromTo(menuButtonIcon, { rotate: 0 }, { rotate: 315 }, "<")
          
          .fromTo(overlay, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.3 }, "<")
          .fromTo(bgPanels, { xPercent: 101 }, { xPercent: 0, stagger: 0.1, duration: 0.5 }, "<")
          .fromTo(menuLinks, { yPercent: 100, rotate: 6 }, { yPercent: 0, rotate: 0, stagger: 0.04, duration: 0.4 }, "<+=0.25");
          
        if (fadeTargets.length) {
          tl.fromTo(fadeTargets, { autoAlpha: 0, yPercent: 30 }, { autoAlpha: 1, yPercent: 0, stagger: 0.04, clearProps: "all" }, "<+=0.2");
        }

      } else {
        // CLOSE
        if (navWrap) navWrap.setAttribute("data-nav", "closed");

        tl.to(overlay, { autoAlpha: 0, duration: 0.25 })
          .to(menu, { xPercent: 100, duration: 0.35, ease: "power2.in" }, "<")
          // Animate Button Text and Icon Back
          .to(menuButtonTexts, { yPercent: 0, duration: 0.2 }, "<")
          .to(menuButtonIcon, { rotate: 0, duration: 0.2 }, "<")

          .set(navWrap, { display: "none" });
      }

    }, containerRef);
    
    return () => ctx.revert();
  }, [isMenuOpen]);

  // keydown Escape handling
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLinkClick = (e: React.MouseEvent, pageId: string) => {
    e.preventDefault();
    closeMenu();
    if (onNavigate) {
      onNavigate(pageId);
    } else {
      const el = document.getElementById(pageId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { id: "home", label: "Sancta Maria", sub: "Parish Home & Altar", shape: "1" },
    { id: "about", label: "About Our Parish", sub: "Syro-Malabar Heritage & Hosur Diocese", shape: "2" },
    { id: "mass-timings", label: "Mass & Confession", sub: "Holy Qurbana & Liturgy Timings", shape: "3" },
    { id: "donate", label: "Parish Offerings & GPay", sub: "Scan QR & Support Sancta Maria Church", shape: "4" },
    { id: "sacraments", label: "Sacred Sacraments", sub: "Baptism, Matrimony & Grace", shape: "5" },
    { id: "events", label: "Events & Feasts", sub: "Parish Calendar & Liturgical Seasons", shape: "1" },
    { id: "gallery", label: "Sanctuary Gallery", sub: "Authentic Altar & Celebration Photos", shape: "3" },
    { id: "prayer-requests", label: "Prayer Intentions", sub: "You Are Not Alone in Prayer", shape: "4" },
    { id: "contact", label: "Visit & Contact", sub: "Kelambakkam, Tamil Nadu", shape: "5" },
  ];

  return (
    <div ref={containerRef} className="relative z-50">
      <div className={`site-header-wrapper ${!isHeaderVisible ? "is--scrolled-hidden" : ""}`}>
        <header className="header">
          <div className="container is--full">
            <nav className="nav-row">
              <a 
                href="#home" 
                onClick={(e) => handleLinkClick(e, "home")} 
                aria-label="Sancta Maria Catholic Church Home" 
                className="nav-logo-row w-inline-block flex items-center gap-3 sm:gap-4 group text-decoration-none py-1"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-[72px] md:h-[72px] shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <img
                    src="/images/church/church_emblem.png"
                    alt="Sancta Maria Catholic Church Logo"
                    className="w-full h-full object-contain filter drop-shadow-sm"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-serif text-lg sm:text-xl md:text-2xl tracking-wider font-bold text-[#35251F] uppercase leading-tight group-hover:text-[#642D3A] transition-colors">
                    {churchName}
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#594438]/85 font-sans mt-0.5 font-medium">
                    Syro Malabar Catholic Church · Kelambakkam
                  </span>
                </div>
              </a>

              <div className="nav-row__right flex items-center gap-2.5 sm:gap-3.5">
                {/* Donate Button Beside Menu Button */}
                <a
                  href="#donate"
                  onClick={(e) => handleLinkClick(e, "donate")}
                  className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full bg-[#642D3A] text-[#FAF8F3] text-xs uppercase tracking-wider font-semibold shadow-md hover:bg-[#263B50] hover:scale-105 active:scale-95 transition-all cursor-pointer select-none"
                  style={{ pointerEvents: 'auto' }}
                  aria-label="Donate to Sancta Maria Catholic Church"
                >
                  <span className="w-2 h-2 rounded-full bg-[#B69556] animate-pulse"></span>
                  <span>Donate</span>
                </a>
                
                {/* Menu Button */}
                <button 
                  type="button"
                  role="button" 
                  aria-expanded={isMenuOpen}
                  aria-label="Toggle navigation menu"
                  className="nav-close-btn flex items-center gap-2 cursor-pointer focus:outline-none" 
                  onClick={toggleMenu} 
                  style={{ pointerEvents: 'auto' }}
                >
                  <div className="menu-button-text overflow-hidden h-5 relative">
                    <p className="p-large text-xs uppercase tracking-wider font-semibold text-[#35251F]">Menu</p>
                    <p className="p-large text-xs uppercase tracking-wider font-semibold text-[#642D3A]">Close</p>
                  </div>
                  <div className="icon-wrap w-6 h-6 flex items-center justify-center text-[#642D3A]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="menu-button-icon transition-transform duration-300"
                    >
                      <path
                        d="M7.33333 16L7.33333 -3.2055e-07L8.66667 -3.78832e-07L8.66667 16L7.33333 16Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M16 8.66667L-2.62269e-07 8.66667L-3.78832e-07 7.33333L16 7.33333L16 8.66667Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M6 7.33333L7.33333 7.33333L7.33333 6C7.33333 6.73637 6.73638 7.33333 6 7.33333Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M10 7.33333L8.66667 7.33333L8.66667 6C8.66667 6.73638 9.26362 7.33333 10 7.33333Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M6 8.66667L7.33333 8.66667L7.33333 10C7.33333 9.26362 6.73638 8.66667 6 8.66667Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M10 8.66667L8.66667 8.66667L8.66667 10C8.66667 9.26362 9.26362 8.66667 10 8.66667Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </nav>
          </div>
        </header>
      </div>

      <section className="fullscreen-menu-container">
        <div data-nav={isMenuOpen ? "open" : "closed"} className="nav-overlay-wrapper fixed inset-0 z-50">
          {/* Overlay */}
          <div className="overlay fixed inset-0 bg-[#263B50]/60 backdrop-blur-sm cursor-pointer" onClick={closeMenu}></div>
          <nav className="menu-content fixed top-0 right-0 h-full w-full md:w-[620px] max-w-full bg-[#FAF8F3] text-[#35251F] shadow-2xl flex flex-col justify-between overflow-y-auto z-10 border-l border-[#B69556]/30">
            <div className="menu-bg absolute inset-0 pointer-events-none overflow-hidden">
              <div className="backdrop-layer first absolute inset-0 bg-[#E8DDCC]/30"></div>
              <div className="backdrop-layer second absolute inset-0 bg-[#A9C2D0]/20"></div>
              <div className="backdrop-layer absolute inset-0 bg-[#FAF8F3]"></div>

              {/* Ambient shapes container */}
              <div className="ambient-background-shapes absolute inset-0 pointer-events-none opacity-40">
                {/* Shape 1: Floating circles */}
                <svg className="bg-shape bg-shape-1 absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
                  <circle className="shape-element" cx="80" cy="120" r="40" fill="rgba(182,149,86,0.18)" />
                  <circle className="shape-element" cx="300" cy="80" r="60" fill="rgba(100,45,58,0.12)" />
                  <circle className="shape-element" cx="200" cy="300" r="80" fill="rgba(38,59,80,0.1)" />
                  <circle className="shape-element" cx="350" cy="280" r="30" fill="rgba(182,149,86,0.15)" />
                </svg>

                {/* Shape 2: Wave pattern */}
                <svg className="bg-shape bg-shape-2 absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
                  <path
                    className="shape-element"
                    d="M0 200 Q100 100, 200 200 T 400 200"
                    stroke="rgba(182,149,86,0.2)"
                    strokeWidth="60"
                    fill="none"
                  />
                  <path
                    className="shape-element"
                    d="M0 280 Q100 180, 200 280 T 400 280"
                    stroke="rgba(100,45,58,0.15)"
                    strokeWidth="40"
                    fill="none"
                  />
                </svg>

                {/* Shape 3: Grid dots */}
                <svg className="bg-shape bg-shape-3 absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
                  <circle className="shape-element" cx="50" cy="50" r="8" fill="rgba(182,149,86,0.25)" />
                  <circle className="shape-element" cx="150" cy="50" r="8" fill="rgba(100,45,58,0.25)" />
                  <circle className="shape-element" cx="250" cy="50" r="8" fill="rgba(38,59,80,0.25)" />
                  <circle className="shape-element" cx="350" cy="50" r="8" fill="rgba(182,149,86,0.25)" />
                  <circle className="shape-element" cx="100" cy="150" r="12" fill="rgba(100,45,58,0.2)" />
                  <circle className="shape-element" cx="200" cy="150" r="12" fill="rgba(38,59,80,0.2)" />
                  <circle className="shape-element" cx="300" cy="150" r="12" fill="rgba(182,149,86,0.2)" />
                </svg>

                {/* Shape 4: Organic blobs */}
                <svg className="bg-shape bg-shape-4 absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
                  <path
                    className="shape-element"
                    d="M100 100 Q150 50, 200 100 Q250 150, 200 200 Q150 250, 100 200 Q50 150, 100 100"
                    fill="rgba(182,149,86,0.15)"
                  />
                  <path
                    className="shape-element"
                    d="M250 200 Q300 150, 350 200 Q400 250, 350 300 Q400 250, 350 300 Q300 350, 250 300 Q200 250, 250 200"
                    fill="rgba(100,45,58,0.12)"
                  />
                </svg>

                {/* Shape 5: Diagonal lines */}
                <svg className="bg-shape bg-shape-5 absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
                  <line className="shape-element" x1="0" y1="100" x2="300" y2="400" stroke="rgba(182,149,86,0.15)" strokeWidth="30" />
                  <line className="shape-element" x1="100" y1="0" x2="400" y2="300" stroke="rgba(100,45,58,0.12)" strokeWidth="25" />
                  <line className="shape-element" x1="200" y1="0" x2="400" y2="200" stroke="rgba(38,59,80,0.1)" strokeWidth="20" />
                </svg>
              </div>
            </div>

            {/* Menu Header / Close */}
            <div className="relative z-10 px-8 pt-8 pb-4 flex items-center justify-between border-b border-[#B69556]/20">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#642D3A]">Parish Directory</p>
                <h3 className="font-serif text-xl font-bold text-[#35251F]">Sancta Maria Kelambakkam</h3>
              </div>
              <button 
                onClick={closeMenu} 
                className="w-10 h-10 rounded-full border border-[#B69556]/40 flex items-center justify-center text-[#594438] hover:bg-[#642D3A] hover:text-[#FAF8F3] hover:border-transparent transition-all"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            {/* Links List */}
            <div className="menu-content-wrapper relative z-10 px-8 py-6 flex-1">
              <ul className="menu-list space-y-3">
                {navItems.map((item) => (
                  <li 
                    key={item.id} 
                    className={`menu-list-item group ${activePage === item.id ? 'active-item' : ''}`} 
                    data-shape={item.shape}
                  >
                    <a 
                      href={`#${item.id}`} 
                      onClick={(e) => handleLinkClick(e, item.id)} 
                      className="nav-link w-inline-block block py-2 px-3 rounded-lg transition-all duration-200 hover:bg-[#E8DDCC]/50 relative overflow-hidden"
                    >
                      <div className="flex items-baseline justify-between">
                        <span className="nav-link-text font-serif text-2xl md:text-3xl font-medium text-[#35251F] group-hover:text-[#642D3A] transition-colors">
                          {item.label}
                        </span>
                        <span className="text-xs tracking-widest text-[#B69556] font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                          0{item.shape} →
                        </span>
                      </div>
                      <p className="text-xs text-[#594438]/70 font-sans tracking-wide mt-0.5" data-menu-fade>
                        {item.sub}
                      </p>
                      <div className="nav-link-hover-bg"></div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Donation Highlight inside Menu Drawer */}
            <div className="relative z-10 px-8 py-3">
              <a
                href="#donate"
                onClick={(e) => handleLinkClick(e, "donate")}
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-[#642D3A] to-[#451B25] text-[#FAF8F3] shadow-md border border-[#B69556]/40 hover:shadow-xl hover:scale-[1.01] transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-0.5 border border-[#B69556]/60 shadow-sm shrink-0 flex items-center justify-center">
                    <img
                      src="/images/church/church_emblem.png"
                      alt="Sancta Maria Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#FAF8F3]">Parish Offerings & GPay</p>
                    <p className="text-[11px] text-[#FAF8F3]/80">Instant UPI QR code & bank transfer</p>
                  </div>
                </div>
                <span className="px-3.5 py-1.5 rounded-full bg-[#FAF8F3] text-[#642D3A] text-xs font-bold uppercase tracking-wider group-hover:bg-[#B69556] group-hover:text-[#FAF8F3] transition-colors shadow-sm">
                  Donate
                </span>
              </a>
            </div>

            {/* Menu Footer Contact Info */}
            <div className="relative z-10 px-8 py-6 bg-[#E8DDCC]/40 border-t border-[#B69556]/20 text-xs text-[#594438] space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[#35251F]">Hosur Diocese · Syro Malabar</span>
              </div>
              <p>Thaiyur Market Road, Kelambakkam, Thaiyur, Tamil Nadu 603103</p>
              <div className="pt-2 flex gap-4">
                <a href="tel:+917397221142" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#642D3A] text-[#FAF8F3] font-medium text-xs hover:bg-[#263B50] transition-colors">
                  📞 Call: +91 73972 21142
                </a>
                <a 
                  href="https://maps.app.goo.gl/Ja3jjRSjApNCqVgt8" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#B69556] text-[#35251F] font-medium text-xs hover:bg-[#FAF8F3] transition-colors"
                >
                  📍 Get Directions
                </a>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
}

export default Component;
