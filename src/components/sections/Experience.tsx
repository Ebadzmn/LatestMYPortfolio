import { Badge } from "@/components/ui/Badge";
import { Cpu, Database, Server, Smartphone, Layers, LayoutTemplate } from "lucide-react";

const experiences = [
  {
    role: "EXECUTIVE MOBILE APP DEVELOPER",
    company: "SPARKTECH AGENCY",
    period: "OCT 2025 - PRESENT",
    description: "Architecting and maintaining production-grade cross-platform mobile applications using Flutter and Dart for iOS & Android. Implemented Clean Architecture with BLoC state management, integrated REST APIs, Firebase services, push notifications, and executed full-cycle debugging for high-availability production releases.",
    tags: ["Flutter", "Dart", "BLoC", "Clean Architecture", "Firebase", "REST APIs"],
  },
  {
    role: "SENIOR FLUTTER ENGINEER",
    company: "TECH CORP",
    period: "2023 - 2025",
    description: "Leading the mobile development team. Architected a multi-platform app scaling to 1M+ active users. Implemented modular architecture and custom state management solutions using Riverpod and Freezed.",
    tags: ["Flutter", "Dart", "Riverpod", "CI/CD"],
  },
  {
    role: "MOBILE APP DEVELOPER",
    company: "STARTUP INC",
    period: "2021 - 2023",
    description: "Developed from scratch the core consumer application in Flutter. Reduced app launch time by 40% and implemented complex hero animations and custom UI painters for a unique brand identity.",
    tags: ["Flutter", "Provider", "Firebase", "SQLite"],
  },
  {
    role: "FRONTEND ENGINEER",
    company: "AGENCY LLC",
    period: "2019 - 2021",
    description: "Built responsive web applications and transitioned into cross-platform mobile development. Worked closely with designers to implement pixel-perfect user interfaces.",
    tags: ["React", "React Native", "TypeScript", "Redux"],
  },
];

export function Experience() {
  return (
    <section className="py-24 relative z-10 w-full" id="experience">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Column (Context) */}
        <div className="lg:w-1/3 flex flex-col items-start lg:sticky lg:top-32 lg:self-start lg:h-max">
          <Badge className="gsap-exp-left mb-6">
            PROFESSIONAL TIMELINE
          </Badge>
          
          <h2 className="gsap-exp-left text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
            Directing apps from Figma designs to App Store features.
          </h2>
          
          <p className="gsap-exp-left text-zinc-500 text-sm leading-relaxed mb-12">
            My engineering philosophy centers on fluid interfaces, maintainable codebases, 
            and pixel-perfect execution. I specialize in the Flutter ecosystem.
          </p>

          <div className="gsap-exp-left w-full border border-zinc-200 bg-white p-6 rounded-sm mb-6 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-4 flex items-center gap-2">
              <Layers className="w-3 h-3 group-hover:scale-125 transition-transform" /> 
              Technical Core Focus
            </h3>
            <div className="space-y-3 text-sm font-semibold text-zinc-700">
              <p>› UI/UX Implementation</p>
              <p>› Advanced State Management</p>
              <p>› Custom Animations & Painters</p>
              <p>› REST & GraphQL Integrations</p>
              <p>› App Performance Tuning</p>
            </div>
          </div>

          <div className="gsap-exp-left w-full border border-zinc-200 bg-white p-6 rounded-sm group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-4 flex items-center gap-2">
              <Smartphone className="w-3 h-3 group-hover:scale-125 transition-transform" /> 
              Mobile Development Setup
            </h3>
            <p className="text-sm font-semibold text-zinc-700 leading-relaxed pr-16">
              Mac Studio for multi-platform compilation, Xcode, Android Studio, 
              and a suite of physical testing devices for iOS and Android.
            </p>
            
            {/* Anime Character Working */}
            <img 
              src="/anime_laptop.png" 
              alt="Anime character coding" 
              className="hidden md:block absolute -bottom-8 -right-8 w-32 h-32 object-contain pointer-events-none drop-shadow-md z-10 hover:scale-110 transition-transform"
              style={{ mixBlendMode: 'multiply' }}
            />
          </div>
        </div>

        {/* Right Column (Timeline) */}
        <div className="lg:w-2/3 relative">
          {/* Vertical Line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-zinc-200 transform origin-top scale-y-0 gsap-timeline-line"></div>
          
          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => (
              <div key={index} className="gsap-exp-item relative pl-12 group">
                {/* Node */}
                <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-zinc-900 bg-white group-hover:bg-zinc-900 transition-colors duration-300 z-10"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <Badge className="w-fit bg-zinc-100 text-zinc-500 border-none">
                    {exp.period}
                  </Badge>
                </div>
                
                <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-4">
                  {exp.company}
                </h4>
                
                <p className="text-zinc-500 text-sm leading-relaxed mb-6 max-w-xl">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 border border-zinc-200 px-3 py-1 rounded-sm group-hover:border-zinc-400 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
