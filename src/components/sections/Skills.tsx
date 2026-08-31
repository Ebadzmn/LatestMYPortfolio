"use client";

import { Badge } from "@/components/ui/Badge";
import { 
  Smartphone, Layers, Server, LayoutTemplate, 
  Cpu, Code2, Zap, Sparkles, Terminal, 
  Database, Palette, GitBranch 
} from "lucide-react";

const coreSkills = [
  { name: "Flutter SDK", level: 95, icon: <Smartphone className="w-4 h-4" /> },
  { name: "Dart Language", level: 92, icon: <Code2 className="w-4 h-4" /> },
  { name: "Riverpod / BLoC", level: 94, icon: <Layers className="w-4 h-4" /> },
  { name: "Firebase Suite", level: 91, icon: <Database className="w-4 h-4" /> },
  { name: "REST & GraphQL", level: 88, icon: <Server className="w-4 h-4" /> },
  { name: "Custom UI Paint", level: 90, icon: <Palette className="w-4 h-4" /> },
  { name: "CI/CD Pipelines", level: 85, icon: <GitBranch className="w-4 h-4" /> },
  { name: "Native Channels", level: 83, icon: <Terminal className="w-4 h-4" /> },
];

const toolboxItems = [
  "Flutter", "Dart", "Firebase", "Riverpod", "BLoC", "Provider",
  "GraphQL", "WebSockets", "SQLite", "Hive", "Freezed", "GetX",
  "Stripe SDK", "Google Maps", "HealthKit", "Bluetooth LE",
  "Android Studio", "Xcode", "VS Code", "Figma", "Git",
  "Docker", "Fastlane", "Codemagic", "GitHub Actions",
];

export function Skills() {
  return (
    <section className="py-24 relative z-10 w-full" id="skills">

      {/* ─── HEADER ─── */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-20 gsap-skills-header">
        <div className="max-w-2xl">
          <Badge className="mb-6 bg-transparent border-none px-0 shadow-none text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-900"></span>
            TECHNICAL DNA // ENGINEERING STACK
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.05]">
            Tools I use to build
            <span className="text-zinc-400 block">extraordinary things.</span>
          </h2>
        </div>
        <p className="text-zinc-500 text-sm leading-relaxed max-w-sm lg:text-right">
          4+ years deep in the Flutter ecosystem. Every bar represents real production experience, not tutorial completions.
        </p>
      </div>

      {/* ─── MAIN CONTENT: 2-COLUMN LAYOUT ─── */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

        {/* LEFT: Skill Bars */}
        <div className="lg:w-3/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
            {coreSkills.map((skill, idx) => (
              <div key={skill.name} className="gsap-skill-card group">
                {/* Skill Label */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-sm bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-600 group-hover:bg-zinc-900 group-hover:text-white group-hover:border-zinc-900 transition-all duration-400">
                      {skill.icon}
                    </span>
                    <span className="text-sm font-bold tracking-tight">{skill.name}</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-zinc-400 group-hover:text-zinc-900 transition-colors">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Track */}
                <div className="w-full h-2.5 bg-zinc-100 rounded-full overflow-hidden border border-zinc-200/60">
                  <div
                    className="gsap-skill-bar h-full rounded-full bg-zinc-900 origin-left relative overflow-hidden"
                    style={{ width: `${skill.level}%` }}
                  >
                    {/* Shimmer effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stack Score Footer */}
          <div className="mt-12 flex items-center gap-4 pt-8 border-t border-zinc-100 gsap-skills-footer">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shrink-0"></div>
            <div>
              <h4 className="font-bold text-sm tracking-tight">Production Readiness Index</h4>
              <p className="text-xs text-zinc-400 mt-0.5">Actively exploring: Rust FFI, WebAssembly, Shorebird Code Push</p>
            </div>
            <span className="ml-auto text-2xl font-bold font-mono tracking-tight text-zinc-900">98.4<span className="text-zinc-300 text-lg">%</span></span>
          </div>
        </div>

        {/* RIGHT: Interactive Toolbox Cloud */}
        <div className="lg:w-2/5">
          <div className="border border-zinc-200 bg-white rounded-sm p-8 h-full relative overflow-hidden gsap-skill-card">
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-zinc-100 to-transparent pointer-events-none"></div>
            
            <div className="flex items-center gap-3 mb-8 relative z-10">
              <div className="w-10 h-10 rounded-sm bg-zinc-900 text-white flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-tight">Complete Toolbox</h3>
                <p className="text-xs text-zinc-400">{toolboxItems.length} technologies & tools</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 relative z-10">
              {toolboxItems.map((item, idx) => (
                <span
                  key={item}
                  className="gsap-toolbox-tag px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider border border-zinc-200 rounded-sm text-zinc-600 bg-zinc-50 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all duration-300 cursor-default select-none"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
