"use client";

export function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center rounded-xl bg-zinc-950 border border-zinc-800 shadow-md group-hover:border-zinc-600 transition-all duration-300 ${className}`}>
      {/* Subtle Glow */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-cyan-500/20 via-emerald-500/20 to-transparent opacity-60"></div>
      
      {/* Stylized Modern Monogram "E" with Flutter Wing accents */}
      <svg
        className="w-5 h-5 relative z-10 text-white fill-none stroke-current stroke-[2.2] stroke-linecap-round stroke-linejoin-round"
        viewBox="0 0 24 24"
      >
        {/* Modern geometric E with dynamic cuts */}
        <path d="M5 4h14M5 12h10M5 20h14" />
        <path d="M5 4v16" />
        {/* Accent dot / spark in cyan */}
        <circle cx="19" cy="12" r="1.5" className="fill-cyan-400 stroke-none" />
      </svg>
    </div>
  );
}
