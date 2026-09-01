import { Badge } from "@/components/ui/Badge";
import { Smartphone, Layers, Briefcase, CheckCircle2, Terminal } from "lucide-react";

export function Experience() {
  return (
    <section className="py-20 md:py-24 relative z-10 w-full" id="experience">
      {/* ─── Section Header ─── */}
      <div className="max-w-3xl mb-12 gsap-exp-left">
        <Badge className="mb-4">
          PROFESSIONAL TIMELINE
        </Badge>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-4">
          Directing apps from Figma designs to App Store features.
        </h2>
        
        <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
          My engineering philosophy centers on fluid interfaces, maintainable clean architectures, 
          and pixel-perfect execution across the Flutter and Dart ecosystem.
        </p>
      </div>

      {/* ─── Main Content Grid ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left: Featured Experience Card (7 cols) */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="gsap-exp-left h-full border border-zinc-200 bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl hover:border-zinc-300 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-400"></div>

            <div>
              {/* Header with Role & Live Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold tracking-wider text-zinc-400 uppercase block">
                      SPARKTECH AGENCY
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-zinc-900">
                      Executive Mobile App Developer
                    </h3>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  OCT 2025 – PRESENT
                </div>
              </div>

              {/* Description */}
              <p className="text-zinc-600 text-sm md:text-base leading-relaxed mb-6">
                Architecting and maintaining production-grade cross-platform mobile applications using Flutter and Dart for iOS & Android. Implemented Clean Architecture with BLoC state management, integrated REST APIs, Firebase services, push notifications, and executed full-cycle debugging for high-availability production releases.
              </p>

              {/* Key Impact & Responsibilities */}
              <div className="space-y-2.5 mb-8 bg-zinc-50/80 rounded-xl p-4 border border-zinc-100">
                <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Key Contributions & Workflow</p>
                <div className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-zinc-900 shrink-0 mt-0.5" />
                  <span>Production-ready Clean Architecture & BLoC state management across client Flutter applications.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-zinc-900 shrink-0 mt-0.5" />
                  <span>End-to-end RESTful API and Firebase services integration (Auth, Firestore, Cloud Messaging).</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-zinc-900 shrink-0 mt-0.5" />
                  <span>UI/UX precision matching Figma prototypes with 60fps smooth animations and responsive layouts.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-zinc-900 shrink-0 mt-0.5" />
                  <span>Full-cycle debugging, crash diagnostics, and App Store / Google Play release management.</span>
                </div>
              </div>
            </div>

            {/* Tech Tags */}
            <div>
              <div className="pt-4 border-t border-zinc-100 flex flex-wrap gap-2">
                {["Flutter", "Dart", "BLoC", "Clean Architecture", "Firebase", "REST APIs", "iOS & Android", "Git"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-semibold uppercase tracking-wider text-zinc-700 bg-zinc-100 hover:bg-zinc-200 border border-zinc-200/80 px-3 py-1 rounded-md transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Right: Technical Focus & Setup Cards (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Card 1: Technical Core Focus */}
          <div className="gsap-exp-item border border-zinc-200 bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group">
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-zinc-900 group-hover:rotate-12 transition-transform" /> 
              Technical Core Focus
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 text-xs md:text-sm font-semibold text-zinc-700">
              <div className="flex items-center gap-2 bg-zinc-50 px-3 py-2 rounded-lg border border-zinc-100">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-900"></span>
                UI/UX Implementation & Pixel Perfection
              </div>
              <div className="flex items-center gap-2 bg-zinc-50 px-3 py-2 rounded-lg border border-zinc-100">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-900"></span>
                Advanced State Management (BLoC / Riverpod)
              </div>
              <div className="flex items-center gap-2 bg-zinc-50 px-3 py-2 rounded-lg border border-zinc-100">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-900"></span>
                Custom Animations & High Performance
              </div>
              <div className="flex items-center gap-2 bg-zinc-50 px-3 py-2 rounded-lg border border-zinc-100">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-900"></span>
                RESTful & GraphQL API Integration
              </div>
              <div className="flex items-center gap-2 bg-zinc-50 px-3 py-2 rounded-lg border border-zinc-100">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-900"></span>
                CI/CD & App Store Deployment
              </div>
            </div>
          </div>

          {/* Card 2: Mobile Development Setup */}
          <div className="gsap-exp-item border border-zinc-200 bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden group flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3 flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-zinc-900 group-hover:scale-110 transition-transform" /> 
                Mobile Development Setup
              </h3>
              <p className="text-xs md:text-sm font-medium text-zinc-600 leading-relaxed pr-24 sm:pr-32">
                Multi-platform compilation station with Xcode, Android Studio, VS Code, and physical iOS & Android testing devices for real-world validation.
              </p>
            </div>
            
            {/* Anime Character Working */}
            <img 
              src="/anime_laptop.png" 
              alt="Anime character coding" 
              className="absolute -bottom-4 -right-4 w-28 h-28 md:w-32 md:h-32 object-contain pointer-events-none drop-shadow-md group-hover:scale-105 transition-transform"
              style={{ mixBlendMode: 'multiply' }}
            />
          </div>

        </div>

      </div>
    </section>
  );
}

