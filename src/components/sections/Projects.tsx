import { projects } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTag } from "@/components/ui/SectionTag";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Tilt } from "@/components/ui/Tilt";

export function Projects() {
  return (
    <section id="projects" className="py-28 bg-gradient-to-b from-bg-dark to-[#060818]">
      <div className="max-w-[1200px] mx-auto px-8">
        <Reveal width="full" className="mb-16">
          <SectionTag>Featured Work</SectionTag>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Production <span className="bg-gradient-to-br from-accent to-accent-light bg-clip-text text-transparent">projects</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl leading-relaxed">
            Real-world applications shipped to real users — spanning healthcare, eCommerce, banking, biotech, and beyond.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <Reveal key={project.title} width="full">
              <Tilt className="h-full">
                <div className="h-full bg-bg-card border border-border-subtle rounded-2xl p-7 flex flex-col gap-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-2xl hover:shadow-black/60 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <div className={cn(
                        "px-2.5 py-1 rounded-full text-[0.65rem] font-bold uppercase tracking-wider border",
                        project.badge === "Live" && "bg-green-500/10 text-green-400 border-green-500/20",
                        project.badge === "Full-Stack" && "bg-accent/10 text-accent-light border-accent/20",
                        project.badge === "Biotech" && "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
                        project.badge === "Fintech" && "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
                        project.badge === "eCommerce" && "bg-accent-pink/10 text-accent-pink border-accent-pink/20",
                        project.badge === "Architecture" && "bg-orange-500/10 text-orange-400 border-orange-500/20",
                        !["Live", "Full-Stack", "Biotech", "Fintech", "eCommerce", "Architecture"].includes(project.badge) && "bg-white/10 text-white/70 border-white/10"
                      )}>
                        {project.badge}
                      </div>
                      <project.icon size={20} className="text-text-muted group-hover:text-accent transition-colors" />
                    </div>
                    
                    <h3 className="text-lg font-bold mb-3">{project.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-6">
                      {project.desc}
                    </p>
                  </div>

                  <div className="mt-auto relative z-10">
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.stack.map((s) => (
                        <span key={s} className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[0.65rem] font-mono text-text-muted">
                          {s}
                        </span>
                      ))}
                    </div>

                    {project.link !== "#" && (
                      <Link 
                        href={project.link} 
                        target="_blank"
                        className="inline-flex items-center gap-1.5 text-accent-light text-[0.8rem] font-bold hover:gap-2.5 transition-all"
                      >
                        View Live →
                      </Link>
                    )}
                  </div>
                </div>
              </Tilt>
            </Reveal>
          ))}
          
          <Reveal delay={0.6} width="full">
            <Tilt className="h-full">
              <Link 
                href="https://github.com/jeroxzi" 
                target="_blank"
                className="h-full min-h-[250px] flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-accent/10 to-accent-light/5 border border-accent/25 rounded-2xl hover:border-accent/40 transition-all group relative overflow-hidden"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🚀</div>
                <h3 className="text-text-secondary font-bold text-[0.95rem] mb-2">More on GitHub</h3>
                <p className="text-text-muted text-xs mb-4 max-w-[200px]">Additional projects, experiments, and open-source contributions.</p>
                <span className="text-accent-light text-[0.8rem] font-bold">github.com/jeroxzi →</span>
              </Link>
            </Tilt>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
