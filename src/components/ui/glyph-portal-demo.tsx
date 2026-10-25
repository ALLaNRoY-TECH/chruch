"use client";

import { useEffect, useState } from "react";
import GlyphPortal from "@/components/ui/glyph-portal";

const settings = { word: "SANCTA", scrollLength: 2.4, interactive: true, annotations: false };
const family = '"Playfair Display", Georgia, serif';

export default function Demo(props: Partial<typeof settings>) {
  const s = { ...settings, ...props };
  const [face, setFace] = useState<string | null>(null);

  useEffect(() => {
    setFace(family);
  }, []);

  return (
    <div 
      data-demo-scroll 
      data-slipstream-demo 
      tabIndex={0} 
      role="region" 
      aria-label="Sancta Maria. Scroll to step inside."
      style={{ width: "100%", height: "min(720px, 100svh)", overflowY: "auto", background: "#FAF8F3", containerType: "inline-size", fontFamily: face ?? "serif" }}
    >
      <GlyphPortal 
        word={s.word} 
        fontFamily={face ?? "serif"} 
        fontWeight={700} 
        style={{ fontFamily: face ?? "serif" }} 
        scrollLength={s.scrollLength} 
        interactive={s.interactive} 
        annotations={s.annotations} 
        enterLabel="Step inside Sancta Maria" 
        front={
          <>
            <div className="absolute inset-x-8 top-12 flex items-center justify-between">
              <span className="font-serif text-xl font-bold tracking-wider text-[#35251F]">Sancta Maria</span>
              <span className="text-xs uppercase tracking-widest text-[#642D3A]">Syro Malabar · Kelambakkam</span>
            </div>
            <p className="absolute inset-x-6 top-[28%] text-center text-sm uppercase tracking-widest text-[#594438]/70">
              A Place of Faith. A Home for Every Heart.
            </p>
            <span className="absolute inset-x-6 bottom-10 text-center text-xs tracking-wider text-[#594438]/80 animate-bounce">
              Scroll down for a closer look ↓
            </span>
          </>
        }
      >
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto px-6 py-16 text-[#FAF8F3]">
          <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide mb-6">
            Welcome to the House of God
          </h2>
          <p className="text-lg md:text-xl font-normal leading-relaxed opacity-90 max-w-2xl mb-8">
            Rooted in Faith. United in Christ. Serving the Syro-Malabar Catholic community of Kelambakkam and Hosur Diocese.
          </p>
        </div>
      </GlyphPortal>
    </div>
  );
}
