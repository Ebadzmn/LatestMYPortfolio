"use client";

import { ArrowUp, Copyright } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full py-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4 mt-12 gsap-footer bg-white z-10 relative">
      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
        <Copyright className="w-3 h-3" />
        2026 EBADUZZAMAN EBAD
      </div>

      <div className="flex items-center gap-6 relative">
        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 hidden sm:inline-block">
          BUILT WITH CLEAN MINIMALISM DESIGN
        </span>
        <button 
          onClick={scrollToTop}
          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-900 hover:text-zinc-500 transition-colors group z-10"
        >
          BACK TO TOP
          <ArrowUp className="w-3 h-3 transform group-hover:-translate-y-1 transition-transform" />
        </button>

        {/* Anime Character Waving */}
        <img 
          src="/anime_waving.png" 
          alt="Anime character waving goodbye" 
          className="hidden md:block absolute bottom-6 -right-4 w-24 h-24 object-contain pointer-events-none drop-shadow-sm origin-bottom hover:scale-105 transition-transform"
          style={{ mixBlendMode: 'multiply' }}
        />
      </div>
    </footer>
  );
}
