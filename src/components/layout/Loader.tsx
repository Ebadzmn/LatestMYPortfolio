"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function Loader({ onComplete }: { onComplete: () => void }) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 15) + 5;
      if (currentProgress > 100) currentProgress = 100;
      setProgress(currentProgress);

      if (currentProgress === 100) {
        clearInterval(interval);
        
        // GSAP Animation to exit loader
        const tl = gsap.timeline({
          onComplete: onComplete
        });

        tl.to(textRef.current, {
          y: -20,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in"
        })
        .to(loaderRef.current, {
          yPercent: -100,
          duration: 0.8,
          ease: "power4.inOut"
        });
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div 
      ref={loaderRef} 
      className="fixed inset-0 z-[100] bg-zinc-900 flex flex-col items-center justify-center text-white"
    >
      <div ref={textRef} className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 bg-white text-zinc-900 flex items-center justify-center font-bold text-2xl rounded-sm">
          H
        </div>
        <div className="font-mono text-xs tracking-[0.3em] uppercase text-zinc-400">
          Loading Environment
        </div>
        <div className="font-bold text-4xl font-mono mt-4">
          {progress}%
        </div>
        
        {/* Progress bar line */}
        <div className="w-48 h-1 bg-zinc-800 rounded-full mt-4 overflow-hidden">
          <div 
            className="h-full bg-white transition-all duration-200 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
