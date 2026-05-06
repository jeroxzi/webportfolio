import { SectionTag } from "@/components/ui/SectionTag";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/data";
import { Mail, Phone, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/GithubIcon";
import Link from "next/link";

export function Contact() {
  const contactMethods = [
    { label: "Email", value: siteConfig.email, icon: Mail, href: `mailto:${siteConfig.email}` },
    { label: "Phone", value: siteConfig.phone, icon: Phone, href: `tel:${siteConfig.phone}` },
    { label: "GitHub", value: "github.com/jeroxzi", icon: GithubIcon, href: siteConfig.github },
  ];

  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-gradient-to-b from-bg-dark to-[#03040c]">
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(108,99,255,0.08)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-[1000px] mx-auto px-8 text-center relative z-10">
        <Reveal width="full">
          <SectionTag centered>Contact</SectionTag>
        </Reveal>
        
        <Reveal width="full">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Let&apos;s build something <span className="bg-gradient-to-br from-accent to-accent-light bg-clip-text text-transparent">great</span> together
          </h2>
        </Reveal>

        <Reveal width="full">
          <p className="text-text-secondary text-lg mb-12 max-w-2xl mx-auto">
            Open to full-time roles, freelance projects, and technical collaborations. I respond within 24 hours.
          </p>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {contactMethods.map((method, i) => (
            <Reveal key={method.label}>
              <Link 
                href={method.href}
                target={method.label === "Email" || method.label === "Phone" ? undefined : "_blank"}
                className="flex items-center gap-4 p-4 pr-8 bg-bg-card border border-border-subtle rounded-2xl transition-all hover:border-accent/40 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(108,99,255,0.12)] hover:bg-bg-card-hover group"
              >
                <div className="w-12 h-12 shrink-0 bg-accent/10 rounded-xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all shadow-sm">
                  <method.icon size={20} />
                </div>
                <div className="text-left">
                  <div className="text-[0.65rem] text-text-muted uppercase tracking-widest font-mono mb-0.5">{method.label}</div>
                  <div className="text-sm font-bold text-text-primary whitespace-nowrap">{method.value}</div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal width="full">
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href={`mailto:${siteConfig.email}`} 
              className="px-8 py-3.5 bg-gradient-to-br from-accent to-accent-light rounded-lg text-white font-semibold flex items-center gap-2 transition-all hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(108,99,255,0.4)]"
            >
              <Mail size={18} /> Send a Message
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-10 border-t border-border-subtle bg-[#03040c] text-center px-8">
      <p className="text-text-muted text-xs md:text-sm">
        Designed & Built by <Link href={`mailto:${siteConfig.email}`} className="text-accent hover:text-accent-light transition-colors">Jeroxzi Viduya</Link>
        <span className="mx-2">·</span>
        Frontend & Full-Stack Engineer
        <span className="mx-2">·</span>
        Bulacan, Philippines
        <span className="mx-2">·</span>
        <Link href={siteConfig.github} target="_blank" className="text-accent hover:text-accent-light transition-colors">GitHub</Link>
      </p>
    </footer>
  );
}
