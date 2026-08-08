"use client";

import { useState } from "react";
import { Copy, Check, Send } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const socialLinks = [
  { name: "GITHUB", url: "#" },
  { name: "LINKEDIN", url: "#" },
  { name: "HUGGING FACE", url: "#" },
  { name: "X / TWITTER", url: "#" },
  { name: "INSTAGRAM", url: "#" },
  { name: "MEDIUM", url: "#" },
];

export function Connect() {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText("ebaduzzaman.ebad@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:ebaduzzaman.ebad@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  };

  return (
    <section className="py-24 relative z-10 w-full" id="connect">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Column (Contact Info) */}
        <div className="lg:w-1/2 flex flex-col items-start gsap-connect-left">
          <Badge className="mb-6 bg-transparent border-none px-0 shadow-none text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
            CONNECT // DIRECT PIPELINE
          </Badge>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
            Let's build together.
          </h2>
          
          <p className="text-zinc-500 text-sm leading-relaxed mb-12 max-w-md">
            Available for mobile app development, cross-platform architecture 
            consulting, and custom UI/UX implementation using Flutter. 
            Let's start the dialogue.
          </p>

          <div className="w-full max-w-md border border-zinc-200 bg-zinc-50/50 p-6 rounded-sm mb-8">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-4">
              CONTACT INFORMATICS
            </h3>
            <div className="flex items-center justify-between bg-white border border-zinc-200 p-3 rounded-sm">
              <span className="font-bold text-zinc-900 text-sm tracking-wide">ebaduzzaman.ebad@gmail.com</span>
              <button 
                onClick={handleCopy}
                className="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 rounded-sm transition-colors relative"
              >
                {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                {copied && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-[10px] py-1 px-2 rounded-sm font-bold tracking-wider">
                    COPIED!
                  </span>
                )}
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 max-w-md">
            {socialLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.url}
                className="border border-zinc-200 bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500 rounded-sm hover:border-zinc-400 hover:text-zinc-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#"
              className="bg-zinc-900 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white rounded-sm hover:bg-zinc-800 transition-colors"
            >
              RESUME
            </a>
          </div>
        </div>

        {/* Right Column (Contact Form) */}
        <div className="lg:w-1/2 gsap-connect-right">
          <form 
            onSubmit={handleSubmit}
            className="border border-zinc-200 bg-white p-6 md:p-8 lg:p-12 rounded-sm h-full flex flex-col"
          >
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-8">
              TRANSMIT LOCAL ENQUIRY
            </h3>

            <div className="mb-6">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">
                ENQUIRY SUBJECT
              </label>
              <input 
                type="text" 
                required
                placeholder="e.g. AI System Design"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full border border-zinc-200 rounded-sm p-4 text-sm font-medium focus:outline-none focus:border-zinc-900 transition-colors"
              />
            </div>

            <div className="mb-8 flex-1 flex flex-col">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">
                DETAILED PROMPT / MESSAGE
              </label>
              <textarea 
                required
                placeholder="Describe your design parameters, dataset sizes, latency requirements..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border border-zinc-200 rounded-sm p-4 text-sm font-medium focus:outline-none focus:border-zinc-900 transition-colors resize-none flex-1 min-h-[150px]"
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-zinc-100">
              <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">
                *PRE-POPULATES YOUR SYSTEM EMAIL CLIENT ON SUBMISSION
              </p>
              <Button type="submit" variant="primary" className="w-full sm:w-auto shrink-0">
                TRANSMIT MESSAGE
                <Send className="w-3 h-3 ml-2" />
              </Button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
