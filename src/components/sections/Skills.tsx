"use client";

import { Badge } from "@/components/ui/Badge";
import { Smartphone, Layers, Server, LayoutTemplate, Cpu, Code2, Zap } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  description: string;
  skills: { name: string; level: number; tag: string }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Cross-Platform & Mobile",
    icon: <Smartphone className="w-5 h-5 text-zinc-900" />,
    description: "Building production-grade Android & iOS applications with fluid 60fps UIs.",
    skills: [
      { name: "Flutter SDK", level: 95, tag: "Primary Core" },
      { name: "Dart Language", level: 92, tag: "Advanced" },
      { name: "Android Native (Kotlin)", level: 85, tag: "Platform Channel" },
      { name: "iOS Native (Swift)", level: 80, tag: "Integration" },
    ],
  },
  {
    title: "Architecture & State",
    icon: <Layers className="w-5 h-5 text-zinc-900" />,
    description: "Structuring scalable, testable, and maintainable cross-platform codebases.",
    skills: [
      { name: "Riverpod & BLoC Pattern", level: 94, tag: "State Arch" },
      { name: "Clean Architecture", level: 90, tag: "Design Pattern" },
      { name: "Freezed & Code Gen", level: 88, tag: "Immutable" },
      { name: "SQLite & Hive Storage", level: 85, tag: "Offline First" },
    ],
  },
  {
    title: "Backend & Cloud Services",
    icon: <Server className="w-5 h-5 text-zinc-900" />,
    description: "Integrating real-time data feeds, authentication, cloud services and APIs.",
    skills: [
      { name: "Firebase & Firestore", level: 92, tag: "BaaS" },
      { name: "REST & GraphQL APIs", level: 88, tag: "Data Fetching" },
      { name: "WebSockets Telemetry", level: 86, tag: "Real-Time" },
      { name: "Stripe Payment Gateway", level: 84, tag: "Fintech" },
    ],
  },
  {
    title: "UI/UX & Engineering Tools",
    icon: <LayoutTemplate className="w-5 h-5 text-zinc-900" />,
    description: "Pixel-perfect screen implementation, custom painters, and DevOps pipelines.",
    skills: [
      { name: "Custom Canvas Painters", level: 90, tag: "Graphics" },
      { name: "Figma to Flutter UI", level: 95, tag: "Pixel-Perfect" },
      { name: "Git & GitHub CI/CD", level: 88, tag: "DevOps" },
      { name: "Xcode & Android Studio", level: 90, tag: "Tooling" },
    ],
  },
];

export function Skills() {
  return (
    <section className="py-24 relative z-10 w-full" id="skills">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 gsap-skills-header">
        <div className="max-w-2xl">
          <Badge className="mb-4 bg-transparent border-none px-0 shadow-none text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-900"></span>
            TECHNICAL COMPETENCY // CORE SKILLS
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
            Engineering Capabilities <br />
            <span className="text-zinc-400">& Technology Stack</span>
          </h2>
        </div>
        <p className="text-zinc-500 text-sm leading-relaxed max-w-md">
          Specializing in Flutter & Dart ecosystem with deep expertise in state architecture, 
          custom animations, platform channels, and offline-first database solutions.
        </p>
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, idx) => (
          <div
            key={category.title}
            className="gsap-skill-card border border-zinc-200 bg-white p-8 md:p-10 rounded-sm relative overflow-hidden group hover:border-zinc-900 hover:shadow-xl transition-all duration-500"
          >
            {/* Top Border Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-zinc-900 via-zinc-400 to-zinc-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>

            {/* Category Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-sm bg-zinc-100 border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-all duration-500 shrink-0">
                {category.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight">{category.title}</h3>
                <p className="text-xs text-zinc-400 font-medium">{category.description}</p>
              </div>
            </div>

            {/* List of Skills with Animated Progress Bars */}
            <div className="space-y-6 pt-4 border-t border-zinc-100">
              {category.skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                    <span className="text-zinc-800 flex items-center gap-2">
                      <Zap className="w-3 h-3 text-zinc-400" />
                      {skill.name}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] text-zinc-400 font-mono font-medium border border-zinc-200 px-2 py-0.5 rounded-sm">
                        {skill.tag}
                      </span>
                      <span className="font-mono text-zinc-900">{skill.level}%</span>
                    </div>
                  </div>

                  {/* Progress Bar Container */}
                  <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden p-0.5 border border-zinc-200/60">
                    <div
                      className="gsap-skill-bar h-full bg-zinc-900 rounded-full transform origin-left transition-all duration-1000 ease-out group-hover:bg-gradient-to-r group-hover:from-zinc-900 group-hover:to-zinc-600"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Bottom Banner */}
      <div className="mt-12 p-8 border border-zinc-200 bg-zinc-50/80 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6 gsap-skills-footer">
        <div className="flex items-center gap-4">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider">Continuous Learning & R&D</h4>
            <p className="text-xs text-zinc-500 mt-0.5">Exploring WebAssembly, Flutter GPU painters, Rust FFI, and AI-assisted state management.</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400">
          <span>STACK SCORE: 98.4% OPTIMIZED</span>
        </div>
      </div>
    </section>
  );
}
