import { ArrowDown, CheckCircle2, Smartphone, Monitor, Layers } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <main className="flex-1 flex flex-col lg:flex-row items-center gap-16 py-12">
      
      {/* Left Column */}
      <div className="flex-1 flex flex-col items-start w-full lg:max-w-2xl">
        <Badge className="gsap-badge mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-900"></span>
          Cross-Platform Engineering // UI & UX Driven
        </Badge>

        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
          <div className="gsap-heading-line overflow-hidden">
            Developing specialized
          </div>
          <div className="gsap-heading-line overflow-hidden text-zinc-400">
            Flutter & Dart
          </div>
          <div className="gsap-heading-line overflow-hidden">
            applications at scale.
          </div>
        </h2>

        <p className="gsap-paragraph text-zinc-500 text-lg leading-relaxed mb-8 max-w-xl">
          I develop high-impact mobile and web applications, specializing in Flutter 
          and Dart. I build robust cross-platform products, fluid UI/UX animations, 
          and scalable state architectures, leveraging modern native integrations to 
          deliver seamless user experiences.
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          <Tag className="gsap-tag">
            <Smartphone className="w-3 h-3" /> Cross-Platform Mobile
          </Tag>
          <Tag className="gsap-tag">
            <Layers className="w-3 h-3" /> State Management
          </Tag>
          <Tag className="gsap-tag">
            <Monitor className="w-3 h-3" /> Pixel-Perfect UI
          </Tag>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary" className="gsap-button">
            Explore Projects
            <ArrowDown className="w-3 h-3" />
          </Button>
          <Button variant="secondary" className="gsap-button">
            View Journey
          </Button>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-1 w-full flex justify-center lg:justify-end relative gsap-image">
        <div className="relative w-full max-w-[400px] aspect-[4/5] bg-zinc-200 rounded-[40px] overflow-hidden shadow-2xl z-10">
          {/* Profile Image */}
          <img 
            src="/image.png" 
            alt="Ebaduzzaman Ebad - Profile" 
            className="w-full h-full object-cover object-center"
          />
          
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-zinc-900/80 to-transparent"></div>
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-white/95 backdrop-blur shadow-lg rounded-2xl p-4 flex items-center gap-4">
             <div className="w-2 h-2 rounded-full bg-zinc-900 shrink-0"></div>
             <div>
                <h3 className="font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                  Mobile Application R&D <span className="text-zinc-300">|</span> ID Indonesia
                </h3>
                <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider mt-0.5">
                  4+ Years Professional + Independent
                </p>
             </div>
          </div>
        </div>

        {/* Anime Character Peeking */}
        <img 
          src="/anime_peeking.png" 
          alt="Anime character peeking" 
          className="hidden md:block absolute -top-16 -right-8 w-40 h-40 object-contain z-20 pointer-events-none drop-shadow-xl animate-bounce"
          style={{ mixBlendMode: 'multiply' }}
        />
      </div>

    </main>
  );
}
