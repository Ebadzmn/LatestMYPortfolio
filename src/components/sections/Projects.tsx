"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/data/projects";

function AppleIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.78 1.06-1.85.94-2.94-.93.04-2.03.63-2.68 1.4-.58.67-.99 1.76-.87 2.82 1.04.08 2.08-.55 2.61-1.28z" />
    </svg>
  );
}

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-14 md:py-20 relative z-10 w-full" id="projects">
      {/* ─── Section Header ─── */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-5 gsap-project-header">
        <div className="max-w-xl">
          <Badge className="mb-3 bg-transparent border-none px-0 shadow-none text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-900"></span>
            SELECTED WORKS // 2023–2026
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
            Projects that define
            <span className="text-zinc-400 block">my craft.</span>
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 border ${
                selectedCategory === cat
                  ? "bg-zinc-900 text-white border-zinc-900 shadow-sm"
                  : "bg-zinc-100/80 text-zinc-600 border-zinc-200 hover:bg-zinc-200 hover:text-zinc-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ─── Projects Grid (Compact Bento) ─── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredProjects.map((project) => {
          return (
            <div
              key={project.slug}
              className="gsap-project-card group block relative rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700/80 shadow-md hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image Container with sleek Aspect Ratio */}
              <div className="relative w-full aspect-[16/9] sm:aspect-[16/8] md:aspect-[16/9] overflow-hidden bg-zinc-900">
                <Link href={`/projects/${project.slug}`} className="block w-full h-full cursor-pointer">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out opacity-85 group-hover:opacity-95"
                  />

                  {/* Gradient Overlay for Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
                </Link>

                {/* Top Overlay Badges */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10 pointer-events-none">
                  <div className="flex items-center gap-2 pointer-events-auto">
                    <span className="inline-flex items-center gap-1.5 bg-black/75 backdrop-blur-md text-white/95 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/15 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      {project.category}
                    </span>
                  </div>

                  {project.appStoreUrl ? (
                    <a
                      href={project.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pointer-events-auto inline-flex items-center gap-2 bg-white text-zinc-950 hover:bg-zinc-100 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white"
                      title="Download on Apple App Store"
                    >
                      <AppleIcon className="w-3.5 h-3.5 fill-current" />
                      <span>Download</span>
                      <ArrowUpRight className="w-3 h-3 text-zinc-600" />
                    </a>
                  ) : (
                    <Link
                      href={`/projects/${project.slug}`}
                      className="pointer-events-auto w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-white group-hover:bg-white group-hover:text-zinc-900 transition-all duration-300 group-hover:scale-110"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 bg-zinc-950 text-white flex flex-col justify-between flex-1">
                <div>
                  <Link href={`/projects/${project.slug}`}>
                    <h3 className="text-lg md:text-xl font-bold tracking-tight mb-1.5 text-white group-hover:text-emerald-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </Link>

                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed line-clamp-2 mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Row: Tags & Prominent App Store Download / Metrics */}
                <div className="pt-3 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium uppercase tracking-wider text-zinc-300 bg-zinc-900 border border-zinc-800 px-2.5 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-[10px] font-medium text-zinc-500 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded-md">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Highlight Action / App Store Button */}
                  <div className="flex items-center gap-2">
                    {project.appStoreUrl ? (
                      <a
                        href={project.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/90 px-3 py-1.5 rounded-lg transition-all duration-300 hover:border-zinc-500 shadow-sm group/btn"
                      >
                        <AppleIcon className="w-3.5 h-3.5 fill-current text-white group-hover/btn:scale-110 transition-transform" />
                        <span>App Store</span>
                        <ArrowUpRight className="w-3 h-3 text-zinc-400 group-hover/btn:text-white" />
                      </a>
                    ) : project.results.length > 0 ? (
                      <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold bg-emerald-950/40 border border-emerald-500/20 px-2.5 py-1 rounded-md">
                        <Sparkles className="w-3 h-3" />
                        <span>{project.results[0].label}:</span>
                        <span className="text-white font-bold">{project.results[0].value}</span>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ─── Bottom Section Divider ─── */}
      <div className="flex items-center gap-4 mt-12 opacity-40">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent"></div>
        <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-zinc-400">
          END // SELECTED WORKS
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent"></div>
      </div>
    </section>
  );
}

