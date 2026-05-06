import { SectionTag } from "@/components/ui/SectionTag";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/data";
import { MapPin, Phone, Mail, Zap, ShieldCheck } from "lucide-react";
import { GithubIcon } from "@/components/ui/GithubIcon";
import Link from "next/link";
import Image from "next/image";

export function About() {
  const highlights = [
    { label: "Years of Experience", value: "8+" },
    { label: "Companies Served", value: "7+" },
    { label: "Apps in 4 Months", value: "3" },
    { label: "Industry Verticals", value: "5" }
  ];

  const infoList = [
    { icon: MapPin, text: siteConfig.location },
    { icon: Phone, text: siteConfig.phone },
    { icon: Mail, text: siteConfig.email },
    { icon: GithubIcon, text: "github.com/jeroxzi" }
  ];

  return (
    <section id="about" className="py-28 bg-gradient-to-b from-bg-dark to-[#080920]">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <Reveal width="full">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-accent-light/20 rounded-[32px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="bg-bg-card border border-border-subtle rounded-[24px] p-6 md:p-12 relative transition-all duration-500 hover:shadow-[0_0_50px_rgba(108,99,255,0.15)] overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -mr-16 -mt-16" />
                
                <div className="relative mb-10 inline-block">
                  <div className="w-32 h-32 md:w-44 md:h-44 rounded-2xl overflow-hidden border-2 border-accent/30 shadow-[0_0_40px_rgba(108,99,255,0.25)] group-hover:border-accent transition-colors duration-500 bg-[#E2E8F0]">
                    <Image 
                      src="./jeroxzi.png" 
                      alt="Jeroxzi Viduya" 
                      width={176} 
                      height={176} 
                      priority
                      unoptimized
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>

                <h3 className="text-3xl font-bold mb-1 tracking-tight text-white group-hover:text-accent transition-colors duration-300">Jeroxzi Viduya</h3>
                <p className="text-accent-light font-mono text-[0.95rem] mb-10 font-bold tracking-wide uppercase opacity-90">{siteConfig.role}</p>
                
                <div className="space-y-4 relative">
                  {infoList.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-[0.85rem] md:text-[0.9rem] text-text-secondary group/item hover:text-text-primary transition-all duration-300">
                      <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0 group-hover/item:bg-accent group-hover/item:text-white group-hover/item:scale-110 transition-all duration-300 shadow-sm">
                        <item.icon size={16} className="md:size-[18px]" />
                      </div>
                      <span className="font-medium tracking-tight opacity-80 group-hover/item:opacity-100 break-all">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 bg-bg-card-hover border border-border-subtle rounded-xl p-2 md:p-3 flex items-center gap-2 md:gap-3 shadow-2xl animate-float-badge z-20">
                <div className="text-accent-light"><Zap size={18} className="md:size-5" /></div>
                <div>
                  <div className="text-[0.6rem] text-text-muted font-bold uppercase">Performance Focus</div>
                  <div className="text-[0.7rem] md:text-[0.8rem] font-bold">Core Web Vitals</div>
                </div>
              </div>

              <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 bg-bg-card-hover border border-border-subtle rounded-xl p-2 md:p-3 flex items-center gap-2 md:gap-3 shadow-2xl animate-float-badge [animation-delay:1s] z-20">
                <div className="text-accent-pink"><ShieldCheck size={18} className="md:size-5" /></div>
                <div>
                  <div className="text-[0.6rem] text-text-muted font-bold uppercase">OWASP Top-10</div>
                  <div className="text-[0.7rem] md:text-[0.8rem] font-bold">Security First</div>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <SectionTag>About Me</SectionTag>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8">
                Crafting digital <span className="bg-gradient-to-br from-accent to-accent-light bg-clip-text text-transparent">experiences</span> that scale
              </h2>
            </Reveal>

            <div className="space-y-6 text-text-secondary text-lg mb-10">
              <Reveal>
                <p>
                  Frontend-focused Software Engineer with <strong>8 years</strong> of experience building responsive, accessible, high-performance web and mobile applications. I specialize in component-based architecture, state management, and performance optimization.
                </p>
              </Reveal>
              <Reveal>
                <p>
                  With <strong>full-stack capability</strong> in ASP.NET, Node.js, and Supabase, I enable end-to-end feature ownership. My track record spans <strong>7+ companies</strong> across eCommerce, fintech, banking, healthcare, and enterprise SaaS.
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <Reveal key={h.label} width="full">
                  <div className="bg-bg-card border border-border-subtle rounded-xl p-5 hover:border-accent transition-colors">
                    <div className="text-2xl font-extrabold bg-gradient-to-br from-accent to-accent-light bg-clip-text text-transparent mb-1">
                      {h.value}
                    </div>
                    <div className="text-[0.7rem] text-text-muted uppercase tracking-wider font-bold">
                      {h.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export function Education() {
  const items = [
    {
      icon: "🎓",
      period: "2016 – 2018",
      title: "Bachelor of Science in Information Technology",
      school: "AMA Computer Learning Center, Meycauayan",
      color: "accent"
    },
    {
      icon: "📜",
      period: "2019",
      title: "Web Development NC III",
      school: "TESDA — Technical Education and Skills Development Authority",
      color: "accent-light"
    }
  ];

  return (
    <section id="education" className="py-28 bg-gradient-to-b from-[#060818] to-bg-dark">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="text-center mb-16">
          <SectionTag centered>Education & Certifications</SectionTag>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Foundations of <span className="bg-gradient-to-br from-accent to-accent-light bg-clip-text text-transparent">excellence</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {items.map((item, i) => (
            <Reveal key={item.title} width="full">
              <div className="bg-bg-card border border-border-subtle rounded-2xl p-8 text-center hover:border-accent transition-all hover:-translate-y-1">
                <div className="text-4xl mb-6">{item.icon}</div>
                <div className="text-[0.7rem] font-mono tracking-widest uppercase mb-2 text-accent-light">
                  {item.period}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-text-muted text-sm">{item.school}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
