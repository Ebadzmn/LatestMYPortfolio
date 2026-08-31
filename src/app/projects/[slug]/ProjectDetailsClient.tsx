"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { projects, type Project } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

export function ProjectDetailsClient({ project }: { project: Project }) {
  const container = useRef<HTMLDivElement>(null);

  // Find next project for navigation
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".gsap-nav",
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" }
    )
      .fromTo(
        ".gsap-back",
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=0.3"
      )
      .fromTo(
        ".gsap-hero-badge",
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=0.2"
      )
      .fromTo(
        ".gsap-hero-title",
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power4.out" },
        "-=0.3"
      )
      .fromTo(
        ".gsap-hero-desc",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo(
        ".gsap-hero-tag",
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.06, ease: "power2.out" },
        "-=0.4"
      )
      .fromTo(
        ".gsap-hero-image",
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo(
        ".gsap-meta-item",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power2.out" },
        "-=0.8"
      );

    // Scroll-triggered animations - instant reveal on entering viewport
    gsap.fromTo(".gsap-challenge",
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.6, ease: "power3.out",
        scrollTrigger: { trigger: ".gsap-challenge", start: "top 92%", toggleActions: "play none none none" }
      }
    );

    gsap.fromTo(".gsap-solution",
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.6, ease: "power3.out",
        scrollTrigger: { trigger: ".gsap-solution", start: "top 92%", toggleActions: "play none none none" }
      }
    );

    gsap.fromTo(".gsap-result-item",
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".gsap-results", start: "top 90%", toggleActions: "play none none none" }
      }
    );

    gsap.fromTo(".gsap-content-block",
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.6, ease: "power3.out",
        scrollTrigger: { trigger: ".gsap-content-block", start: "top 90%", toggleActions: "play none none none" }
      }
    );

    gsap.fromTo(".gsap-next-project",
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.6, ease: "power3.out",
        scrollTrigger: { trigger: ".gsap-next-project", start: "top 92%", toggleActions: "play none none none" }
      }
    );

    gsap.fromTo(".gsap-footer",
      { opacity: 0 },
      {
        opacity: 1, duration: 0.6, ease: "power3.out",
        scrollTrigger: { trigger: "footer", start: "top 95%", toggleActions: "play none none none" }
      }
    );

  }, { scope: container });

  return (
    <div ref={container} className="min-h-screen font-sans flex flex-col justify-between text-zinc-900 px-4 md:px-8 lg:px-12 relative overflow-hidden bg-zinc-50/50">
      
      {/* ──────────── AMBIENT BACKGROUND DESIGN ──────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Fine Architectural Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(24, 24, 27, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(24, 24, 27, 0.07) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        ></div>

        {/* Ambient Gradient Glows / Orbs */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-indigo-200/30 via-sky-100/20 to-transparent rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-[30%] -right-40 w-[500px] h-[500px] bg-gradient-to-bl from-amber-100/40 via-zinc-200/30 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-[20%] -left-20 w-[550px] h-[550px] bg-gradient-to-tr from-violet-100/30 via-slate-200/30 to-transparent rounded-full blur-3xl pointer-events-none"></div>

        {/* Corner Technical Crosshairs */}
        <div className="absolute top-28 left-8 text-zinc-300 font-mono text-xs font-light select-none">+ 01_PROJECT // SPEC</div>
        <div className="absolute top-28 right-8 text-zinc-300 font-mono text-xs font-light select-none">SYSTEM_VIEW // ACTIVE +</div>
      </div>

      <Navbar />

      <main className="flex-1 w-full pt-32 pb-24 relative z-10">

        {/* ──────────── HEADER SECTION ──────────── */}
        <div className="max-w-7xl mx-auto">

          {/* Back Button */}
          <div className="mb-16 gsap-back">
            <Link
              href="/"
              className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors group"
            >
              <span className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white group-hover:border-zinc-900 transition-all duration-300">
                <ArrowLeft className="w-4 h-4" />
              </span>
              Back to Home
            </Link>
          </div>

          {/* Hero Header */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8 gsap-hero-badge">
              <span className="w-2 h-2 rounded-full bg-zinc-900"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                {project.category}
              </span>
              <span className="flex-1 h-px bg-zinc-200"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                Case Study
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] mb-8 gsap-hero-title">
              {project.title}
            </h1>

            <p className="text-lg md:text-xl text-zinc-500 leading-relaxed max-w-2xl mb-10 gsap-hero-desc">
              {project.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 gsap-hero-desc">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="gsap-hero-tag text-[10px] font-bold uppercase tracking-widest text-zinc-900 bg-zinc-100 border border-zinc-200 px-4 py-2 rounded-sm hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all duration-300 cursor-default"
                >
                  {tag}
                </span>
              ))}

              {project.appStoreUrl && (
                <a
                  href={project.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white bg-zinc-900 border border-zinc-900 px-5 py-2 rounded-sm hover:bg-black transition-all duration-300 shadow-md group"
                >
                  View on App Store
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-zinc-900 rounded-sm overflow-hidden relative border border-zinc-200 mb-20 gsap-hero-image group shadow-2xl">
            <img 
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-1000 ease-out opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-black/20 pointer-events-none"></div>

            <div className="absolute top-6 left-6 flex items-center gap-3 z-10">
              <div className="w-12 h-12 bg-white/95 backdrop-blur-md rounded-sm flex items-center justify-center shadow-lg text-zinc-900 border border-zinc-100">
                {project.icon}
              </div>
            </div>

            <div className="absolute bottom-6 right-6 flex items-center gap-2 bg-zinc-900/90 text-white backdrop-blur-md px-4 py-2 rounded-sm border border-zinc-700/80 z-10 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">Live Project Mockup</span>
            </div>
          </div>
        </div>

        {/* ──────────── META GRID ──────────── */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-zinc-200/90 bg-white/80 backdrop-blur-md rounded-sm mb-32 shadow-sm">
            {[
              { label: "Client", value: project.client },
              { label: "Timeline", value: project.timeline },
              { label: "Role", value: project.role },
              { label: "Status", value: "Completed" },
            ].map((meta, idx) => (
              <div
                key={meta.label}
                className={`gsap-meta-item p-8 flex flex-col justify-between min-h-[140px] group hover:bg-zinc-900 hover:text-white transition-all duration-500 ${
                  idx < 3 ? "border-r border-zinc-200/80" : ""
                } ${idx < 2 ? "border-b md:border-b-0 border-zinc-200/80" : ""} ${
                  idx === 2 ? "border-b md:border-b-0 border-zinc-200/80 md:border-r" : ""
                } ${idx === 3 ? "border-b-0" : ""}`}
              >
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4 group-hover:text-zinc-400 transition-colors">
                  {meta.label}
                </h3>
                <p className="text-lg font-semibold tracking-tight">{meta.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ──────────── CHALLENGE & SOLUTION ──────────── */}
        <div className="max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-sm">

            {/* Challenge */}
            <div className="gsap-challenge border border-zinc-200/90 bg-white/80 backdrop-blur-md p-10 md:p-14 rounded-sm lg:rounded-r-none relative overflow-hidden group hover:shadow-xl transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-zinc-900 to-zinc-400"></div>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-8 h-8 bg-zinc-900 text-white rounded-sm flex items-center justify-center text-sm font-bold">01</span>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                  The Challenge
                </h3>
              </div>
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="gsap-solution border border-zinc-200/90 bg-white/80 backdrop-blur-md border-l-0 lg:border-l p-10 md:p-14 rounded-sm lg:rounded-l-none relative overflow-hidden group hover:shadow-xl transition-all duration-500 -mt-px lg:mt-0">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-zinc-400 to-zinc-200"></div>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-8 h-8 bg-zinc-100 text-zinc-900 rounded-sm flex items-center justify-center text-sm font-bold border border-zinc-200">02</span>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                  The Solution
                </h3>
              </div>
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>

        {/* ──────────── RESULTS METRICS ──────────── */}
        <div className="max-w-7xl mx-auto mb-32 gsap-results">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4 block">
              Impact & Metrics
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Results that speak
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {project.results.map((result, idx) => (
              <div
                key={result.label}
                className="gsap-result-item text-center p-8 border border-zinc-200 rounded-sm group hover:border-zinc-900 hover:shadow-lg transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-zinc-900 transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-out"></div>
                <div className="relative z-10">
                  <p className="text-4xl md:text-5xl font-bold tracking-tight mb-3 group-hover:text-white transition-colors duration-500">
                    {result.value}
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 group-hover:text-zinc-400 transition-colors duration-500">
                    {result.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ──────────── DETAILED CONTENT ──────────── */}
        <div className="max-w-3xl mx-auto mb-32 gsap-content-block">
          <div className="flex items-center gap-3 mb-12">
            <span className="w-2 h-2 rounded-full bg-zinc-900"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
              Deep Dive
            </span>
            <span className="flex-1 h-px bg-zinc-200"></span>
          </div>

          <div className="space-y-8">
            {project.content.split('\n\n').map((paragraph: string, idx: number) => (
              <p key={idx} className="text-lg md:text-xl text-zinc-600 leading-[1.8] first:text-zinc-900 first:text-xl first:md:text-2xl first:font-medium first:leading-[1.6]">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tech Stack Sidebar */}
          <div className="mt-16 p-8 border border-zinc-200 rounded-sm bg-zinc-50/50">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-white border border-zinc-200 text-xs font-bold uppercase tracking-widest text-zinc-700 rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ──────────── CTA SECTION ──────────── */}
        <div className="max-w-7xl mx-auto mb-32">
          <div className="border border-zinc-200 rounded-sm p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.02) 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }}></div>

            <div className="relative z-10">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4 block">
                Interested?
              </span>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                Let's build something
              </h3>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-10 text-zinc-400">
                extraordinary together.
              </h3>
              <Link
                href="/#connect"
                className="inline-flex items-center gap-3 bg-zinc-900 text-white px-10 py-5 text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-zinc-800 transition-colors group"
              >
                Start a Conversation
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* ──────────── NEXT PROJECT ──────────── */}
        <div className="max-w-7xl mx-auto gsap-next-project">
          <div className="border-t border-zinc-200 pt-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-8 block">
              Next Project
            </span>

            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-8 -mx-4 px-4 rounded-sm hover:bg-zinc-50 transition-colors duration-300"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-zinc-100 rounded-sm flex items-center justify-center text-zinc-600 border border-zinc-200 group-hover:bg-zinc-900 group-hover:text-white group-hover:border-zinc-900 transition-all duration-300">
                    {nextProject.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                    {nextProject.category}
                  </span>
                </div>
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight group-hover:text-zinc-600 transition-colors">
                  {nextProject.title}
                </h3>
              </div>
              <div className="w-14 h-14 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white group-hover:border-zinc-900 transition-all duration-300 shrink-0">
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Link>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
