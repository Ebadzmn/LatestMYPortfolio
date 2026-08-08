import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
export function Projects() {
  return (
    <section className="py-24 relative z-10 w-full" id="projects">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 gsap-project-header">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
            SELECTED WORKS // 2023-2026
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Featured Projects
          </h2>
        </div>
        <a href="#" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-zinc-500 transition-colors">
          View All Archives
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Link 
            key={index} 
            href={`/projects/${project.slug}`}
            className="gsap-project-card group cursor-pointer block"
          >
            <div className="w-full aspect-[4/3] bg-zinc-100 rounded-sm mb-6 overflow-hidden relative border border-zinc-200 group">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-500"></div>

              <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-sm flex items-center justify-center shadow-sm text-zinc-900 z-10 border border-zinc-100">
                {project.icon}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                  {project.category}
                </span>
                <ArrowUpRight className="w-4 h-4 text-zinc-300 group-hover:text-zinc-900 transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              
              <h3 className="text-2xl font-bold">{project.title}</h3>
              
              <p className="text-zinc-500 text-sm leading-relaxed mb-2">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-zinc-900 bg-zinc-100 px-2 py-1 rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
