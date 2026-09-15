"use client";

import { useState, useEffect } from "react";
import { useClock } from "@/hooks/useClock";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export function Navbar() {
  const time = useClock();
  const [activeSection, setActiveSection] = useState("welcome");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 300;
      const projects = document.getElementById("projects")?.offsetTop || Infinity;
      const skills = document.getElementById("skills")?.offsetTop || Infinity;
      const experience = document.getElementById("experience")?.offsetTop || Infinity;
      const connect = document.getElementById("connect")?.offsetTop || Infinity;

      if (scrollPos >= connect) {
        setActiveSection("connect");
      } else if (scrollPos >= experience) {
        setActiveSection("experience");
      } else if (scrollPos >= skills) {
        setActiveSection("skills");
      } else if (scrollPos >= projects) {
        setActiveSection("projects");
      } else {
        setActiveSection("welcome");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm flex justify-between items-center py-4 border-b border-zinc-100/50 -mx-4 px-4 md:-mx-8 md:px-8 lg:-mx-12 lg:px-12">
      <a href="#" className="flex items-center gap-3 gsap-nav group cursor-pointer">
        <Logo className="w-9 h-9" />
        <div>
          <h1 className="font-bold tracking-tight text-sm uppercase group-hover:text-zinc-600 transition-colors">Ebaduzzaman Ebad</h1>
          <p className="text-zinc-400 text-xs tracking-widest uppercase">Flutter Developer</p>
        </div>
      </a>

      <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-zinc-500 uppercase tracking-widest">
        <a
          href="#"
          className={`gsap-nav transition-colors ${activeSection === "welcome" ? "text-zinc-900 border-b-2 border-zinc-900 pb-1" : "hover:text-zinc-900"}`}
        >
          Welcome
        </a>
        <a
          href="#projects"
          className={`gsap-nav transition-colors ${activeSection === "projects" ? "text-zinc-900 border-b-2 border-zinc-900 pb-1" : "hover:text-zinc-900"}`}
        >
          Projects
        </a>
        <a
          href="#skills"
          className={`gsap-nav transition-colors ${activeSection === "skills" ? "text-zinc-900 border-b-2 border-zinc-900 pb-1" : "hover:text-zinc-900"}`}
        >
          Skills
        </a>
        <a
          href="#experience"
          className={`gsap-nav transition-colors ${activeSection === "experience" ? "text-zinc-900 border-b-2 border-zinc-900 pb-1" : "hover:text-zinc-900"}`}
        >
          Experience
        </a>
        <a
          href="#connect"
          className={`gsap-nav transition-colors ${activeSection === "connect" ? "text-zinc-900 border-b-2 border-zinc-900 pb-1" : "hover:text-zinc-900"}`}
        >
          Connect
        </a>
        <a
          href="/test"
          className={`gsap-nav transition-colors ${activeSection === "test" ? "text-zinc-900 border-b-2 border-zinc-900 pb-1" : "hover:text-zinc-900"}`}
        >
          Test
        </a>
      </nav>

      <div className="flex items-center gap-4">
        <div className="hidden lg:flex items-center gap-2 bg-zinc-100 px-4 py-2 text-xs font-mono text-zinc-600 rounded-sm gsap-nav">
          <div className="w-2 h-2 rounded-full border border-zinc-400 flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-zinc-400" />
          </div>
          {time}
        </div>
        <a href="#connect">
          <Button variant="secondary" className="gsap-nav !border-zinc-900">
            Connect
            <ArrowUpRight className="w-3 h-3" />
          </Button>
        </a>
      </div>
    </header>
  );
}
