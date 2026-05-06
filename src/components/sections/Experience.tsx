import { experience } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTag } from "@/components/ui/SectionTag";

export function Experience() {
  return (
    <section id="experience" className="py-28 relative bg-bg-dark">
      <div className="max-w-[1200px] mx-auto px-8">
        <Reveal width="full" className="mb-16">
          <SectionTag>Experience</SectionTag>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            A decade of <span className="bg-gradient-to-br from-accent to-accent-light bg-clip-text text-transparent">building</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-xl">
            From enterprise banking systems to biotech R&amp;D platforms — delivering production-grade software.
          </p>
        </Reveal>

        <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[1px] before:bg-gradient-to-b before:from-transparent before:via-accent before:to-transparent">
          {experience.map((item, idx) => (
            <Reveal key={item.role + item.period} width="full">
              <div className="relative mb-14 group">
                <div className="absolute -left-[2.4rem] top-3 w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_12px_var(--accent)] transition-transform duration-300 group-hover:scale-150" />
                
                <div className="bg-bg-card border border-border-subtle rounded-2xl p-8 transition-all hover:border-accent/30 hover:translate-x-1 overflow-hidden relative">
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-accent to-accent-light scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

                  <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{item.role}</h3>
                      <p className="text-accent-light font-mono text-sm">{item.company}</p>
                    </div>
                    <div className="px-3 py-1 bg-accent/5 border border-border-subtle rounded-full text-[0.7rem] font-mono text-text-muted">
                      {item.period}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {item.description.map((desc, i) => (
                      <li key={i} className="relative pl-6 text-sm text-text-secondary leading-relaxed flex items-start">
                         <span className="absolute left-0 text-accent font-bold">▸</span>
                         <span dangerouslySetInnerHTML={{ __html: desc }} />
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-6 border-t border-border-subtle">
                    {item.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 bg-accent/5 border border-accent/10 rounded-md text-[0.7rem] font-mono text-text-muted transition-colors hover:text-accent hover:border-accent">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
