"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Connect } from "@/components/sections/Connect";
import { Loader } from "@/components/layout/Loader";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useGSAP(() => {
    if (loading) return; // Don't animate until loader finishes

    // 1. Initial Hero Animations
    const tl = gsap.timeline();

    tl.fromTo(
      ".gsap-nav",
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" }
    )
      .fromTo(
        ".gsap-badge",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        ".gsap-heading-line",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power4.out" },
        "-=0.4"
      )
      .fromTo(
        ".gsap-paragraph",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo(
        ".gsap-tag",
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: "power2.out" },
        "-=0.4"
      )
      .fromTo(
        ".gsap-button",
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: "power2.out" },
        "-=0.4"
      )
      .fromTo(
        ".gsap-image",
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "power3.out" },
        "-=1.2"
      );

    // 2. Scroll Animations for Projects Section
    gsap.fromTo(".gsap-project-header", 
      { y: 30, opacity: 0 },
      {
        y: 0, 
        opacity: 1, 
        duration: 0.6,
        stagger: 0.1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#projects",
          start: "top 92%",
          toggleActions: "play none none none",
        }
      }
    );

    gsap.fromTo(".gsap-project-card",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#projects",
          start: "top 85%",
          toggleActions: "play none none none",
        }
      }
    );

    // 3. Scroll Animations for Skills Section
    gsap.fromTo(".gsap-skills-header",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#skills",
          start: "top 92%",
          toggleActions: "play none none none",
        }
      }
    );

    gsap.fromTo(".gsap-skill-card",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#skills",
          start: "top 85%",
          toggleActions: "play none none none",
        }
      }
    );

    gsap.fromTo(".gsap-skill-bar",
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.06,
        scrollTrigger: {
          trigger: "#skills",
          start: "top 80%",
          toggleActions: "play none none none",
        }
      }
    );

    gsap.fromTo(".gsap-toolbox-tag",
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        stagger: 0.02,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: "#skills",
          start: "top 75%",
          toggleActions: "play none none none",
        }
      }
    );

    gsap.fromTo(".gsap-skills-footer",
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".gsap-skills-footer",
          start: "top 95%",
          toggleActions: "play none none none",
        }
      }
    );

    // 4. Scroll Animations for Experience Section
    gsap.fromTo(".gsap-exp-left",
      { x: -30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#experience",
          start: "top 90%",
          toggleActions: "play none none none",
        }
      }
    );

    // Timeline draw animation
    gsap.to(".gsap-timeline-line", {
      scaleY: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".gsap-timeline-line",
        start: "top 85%",
        toggleActions: "play none none none",
      }
    });

    gsap.fromTo(".gsap-exp-item",
      { x: 30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#experience",
          start: "top 85%",
          toggleActions: "play none none none",
        }
      }
    );

    // 5. Scroll Animations for Connect Section
    gsap.fromTo(".gsap-connect-left",
      { x: -30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#connect",
          start: "top 90%",
          toggleActions: "play none none none",
        }
      }
    );

    gsap.fromTo(".gsap-connect-right",
      { x: 30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#connect",
          start: "top 90%",
          toggleActions: "play none none none",
        }
      }
    );

    // 5. Footer Animation on scroll
    gsap.fromTo(".gsap-footer",
      { opacity: 0 },
      {
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: "footer",
          start: "top 95%",
          end: "bottom bottom",
          scrub: 1,
        }
      }
    );

  }, { scope: container, dependencies: [loading] });

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      
      <div 
        ref={container} 
        className={`min-h-screen font-sans flex flex-col justify-between text-zinc-900 px-4 md:px-8 lg:px-12 transition-opacity duration-500 ${loading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}
      >
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Connect />
        <Footer />
      </div>
    </>
  );
}
