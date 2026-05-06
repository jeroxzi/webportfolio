import { skills } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTag } from "@/components/ui/SectionTag";
import { cn } from "@/lib/utils";

export function Skills() {
  return (
    <section id="skills" className="py-28 bg-gradient-to-b from-[#080920] to-bg-dark">
      <div className="max-w-[1200px] mx-auto px-8">
        <Reveal width="full">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionTag centered>Technical Skills</SectionTag>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Built on a <span className="bg-gradient-to-br from-accent to-accent-light bg-clip-text text-transparent">deep</span> tech stack
            </h2>
            <p className="text-text-secondary text-lg">
              Full-spectrum expertise from pixel-perfect UIs to secure backend systems and cloud deployments.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((cat, idx) => (
            <Reveal key={cat.category} width="full">
              <div className="h-full bg-bg-card border border-border-subtle rounded-2xl p-8 transition-all hover:border-accent/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
                    cat.color === "purple" && "bg-accent/15 text-accent group-hover:bg-accent group-hover:text-white",
                    cat.color === "cyan" && "bg-accent-light/10 text-accent-light group-hover:bg-accent-light group-hover:text-black",
                    cat.color === "pink" && "bg-accent-pink/10 text-accent-pink group-hover:bg-accent-pink group-hover:text-white",
                    cat.color === "green" && "bg-green-500/10 text-green-500 group-hover:bg-green-500 group-hover:text-white",
                  )}>
                    <cat.icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg leading-none mb-1.5">{cat.category}</h3>
                    <p className="text-text-muted text-xs uppercase tracking-wide">Expertise Area</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill) => (
                    <span 
                      key={skill}
                      className={cn(
                        "px-3 py-1.5 rounded-lg text-[0.775rem] font-mono font-medium border border-transparent transition-all",
                        cat.color === "purple" && "bg-accent/10 text-accent/80 border-accent/20 hover:border-accent hover:bg-accent/20",
                        cat.color === "cyan" && "bg-accent-light/10 text-accent-light/80 border-accent-light/20 hover:border-accent-light hover:bg-accent-light/20",
                        cat.color === "pink" && "bg-accent-pink/10 text-accent-pink/80 border-accent-pink/20 hover:border-accent-pink hover:bg-accent-pink/20",
                        cat.color === "green" && "bg-green-500/10 text-green-500/80 border-green-500/20 hover:border-green-500 hover:bg-green-500/20",
                      )}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
