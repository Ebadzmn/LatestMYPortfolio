import { ArrowDown, ArrowUpRight, Smartphone, Monitor, Layers } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";

function GitHubIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z" />
    </svg>
  );
}

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

        <div className="flex flex-wrap gap-2 mb-8">
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

        {/* Action Buttons with CV and Socials */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <a href="#projects">
            <Button variant="primary" className="gsap-button">
              Explore Projects
              <ArrowDown className="w-3 h-3" />
            </Button>
          </a>
          <a 
            href="https://drive.google.com/file/d/1rNErwdeqlBfOWh6ihjsrxsRHPFvJ1aYU/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary" className="gsap-button border-zinc-900">
              View CV / Resume
              <ArrowUpRight className="w-3 h-3 ml-1" />
            </Button>
          </a>
          <a 
            href="https://github.com/ebadzmn"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-zinc-200 hover:border-zinc-900 rounded-sm bg-white hover:bg-zinc-900 hover:text-white transition-all duration-300 shadow-sm"
            title="GitHub Profile"
          >
            <GitHubIcon className="w-4 h-4 fill-current" />
          </a>
          <a 
            href="https://www.linkedin.com/in/ebaduzzaman-ebad/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-zinc-200 hover:border-zinc-900 rounded-sm bg-white hover:bg-zinc-900 hover:text-white transition-all duration-300 shadow-sm"
            title="LinkedIn Profile"
          >
            <LinkedInIcon className="w-4 h-4 fill-current" />
          </a>
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
