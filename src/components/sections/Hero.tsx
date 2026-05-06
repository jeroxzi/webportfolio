"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { Particles } from "@/components/ui/Particles";
import Link from "next/link";
import Image from "next/image";
import { TypedText } from "@/components/ui/TypedText";
import { Counter } from "@/components/ui/Counter";

export function Hero() {
  const typedStrings = [
    "Frontend Engineer",
    "Full-Stack Developer",
    "React & Next.js Expert",
    "UI/UX Implementer",
    "Tech Lead & Mentor",
  ];

  const stats = [
    { label: "Years Experience", value: 8, suffix: "+" },
    { label: "Companies", value: 7, suffix: "+" },
    { label: "Production Apps", value: 20, suffix: "+" },
    { label: "Industry Verticals", value: 5, suffix: "" },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: "linear-gradient(135deg,#05060f 0%,#0d0e2a 50%,#050818 100%)" }}
    >
      <Particles />
      <div className="hero-grid absolute inset-0 pointer-events-none" />

      {/* Orbs */}
      <div className="hero-orb pointer-events-none w-[600px] h-[600px] -top-[100px] -left-[100px] animate-orb-1 transform-gpu will-change-transform"
        style={{ background: "radial-gradient(circle,rgba(108,99,255,0.25) 0%,transparent 70%)" }} />
      <div className="hero-orb pointer-events-none w-[500px] h-[500px] -bottom-[100px] -right-[50px] animate-orb-2 transform-gpu will-change-transform"
        style={{ background: "radial-gradient(circle,rgba(0,212,255,0.15) 0%,transparent 70%)" }} />
      <div className="hero-orb pointer-events-none w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orb-3 transform-gpu will-change-transform"
        style={{ background: "radial-gradient(circle,rgba(255,101,132,0.1) 0%,transparent 70%)" }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-[900px] w-full px-8 pt-32 pb-32 mx-auto">

        {/* Profile Image Badge */}
        <Reveal delay={0.05}>
          <div className="relative mb-8 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-accent-light rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500" />
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-white/10 p-1 bg-bg-card shadow-2xl">
              <Image 
                src="/jeroxzi.png" 
                alt="Jeroxzi Viduya" 
                width={96} 
                height={96} 
                priority
                unoptimized
                className="rounded-full object-cover w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 hover:scale-110 bg-[#E2E8F0]"
              />
            </div>
          </div>
        </Reveal>

        {/* Badge */}
        <Reveal delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 border border-accent/30 rounded-full text-[0.78rem] font-mono text-accent-light tracking-[2px] uppercase mb-8">
            <span className="w-1.5 h-1.5 bg-[#22d3ee] rounded-full animate-pulse" />
            Available for new opportunities
          </div>
        </Reveal>

        {/* Name */}
        <Reveal delay={0.2}>
          <h1 className="font-extrabold leading-[1.05] tracking-[-3px] mb-4"
            style={{ fontSize: "clamp(3rem,8vw,6.5rem)" }}>
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg,#a5a0ff 0%,#6c63ff 40%,#00d4ff 100%)" }}
            >
              Jeroxzi
            </span>
            <br />
            <span className="text-white">Viduya</span>
          </h1>
        </Reveal>

        {/* Typed subtitle */}
        <Reveal delay={0.3} width="full">
          <div className="text-xl md:text-2xl text-text-secondary font-normal mb-8 flex items-center justify-center gap-3 flex-wrap">
            <span className="min-h-[1.5em] flex items-center">
              <TypedText texts={typedStrings} />
            </span>
            <span className="text-text-muted hidden sm:inline">·</span>
            <strong className="text-accent-light font-bold">8+ Years of Craft</strong>
          </div>
        </Reveal>

        {/* Description */}
        <Reveal delay={0.4} width="full">
          <p className="text-base md:text-[1.05rem] text-text-secondary max-w-[640px] mx-auto mb-10 leading-[1.8]">
            Building responsive, accessible, high-performance web applications using{" "}
            <strong className="text-accent">React.js</strong>,{" "}
            <strong className="text-accent-light">Next.js</strong>,{" "}
            <strong className="text-accent">Vue.js</strong> &amp;{" "}
            <strong className="text-accent-light">TypeScript</strong>{" "}
            — with full-stack capability spanning eCommerce, fintech, banking, healthcare &amp; enterprise SaaS.
          </p>
        </Reveal>

        {/* Buttons */}
        <Reveal delay={0.5} width="full">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-20 px-4">
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-white font-bold flex items-center justify-center gap-2 transition-all hover:scale-[1.03] active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg,#6c63ff,#00d4ff)",
                boxShadow: "0 4px 24px rgba(108,99,255,0.4)",
              }}
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              View My Work
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 border border-white/10 rounded-lg text-text-primary font-medium flex items-center justify-center gap-2 transition-all hover:border-accent hover:text-accent hover:bg-accent/5 active:scale-[0.98]"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get In Touch
            </a>
          </div>
        </Reveal>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 md:gap-12 w-full max-w-[700px] mx-auto mb-24 px-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={0.6 + i * 0.05} width="full">
              <div className="text-center">
                <div
                  className="text-[2.2rem] md:text-[2.5rem] font-extrabold bg-clip-text text-transparent mb-1"
                  style={{ backgroundImage: "linear-gradient(135deg,#6c63ff,#00d4ff)" }}
                >
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[0.65rem] md:text-[0.7rem] text-text-muted uppercase tracking-widest font-bold opacity-80">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted/50 text-[0.6rem] uppercase tracking-[4px]">
        <span>Scroll</span>
        <div className="w-[1px] h-8 relative overflow-hidden"
          style={{ background: "linear-gradient(to bottom,transparent,rgba(108,99,255,0.3))" }}>
          <motion.div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom,transparent,#00d4ff,transparent)" }}
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
}
