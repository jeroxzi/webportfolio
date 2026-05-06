"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-[1000] px-8 py-5 flex items-center justify-between transition-all duration-400",
      isScrolled && "bg-bg-dark/95 backdrop-blur-md border-b border-border-subtle py-3.5"
    )}>
      <a 
        href="#hero" 
        className="font-mono text-[1.2rem] font-bold bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent tracking-tighter"
      >
        &lt;JV /&gt;
      </a>

      <ul className="hidden md:flex gap-10 list-none">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a 
              href={link.href}
              className="text-text-secondary hover:text-text-primary text-[0.875rem] font-medium tracking-[0.5px] uppercase transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-accent to-accent-light transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
        <li>
          <a 
            href="#contact"
            className="px-6 py-2 border border-accent rounded-md text-accent text-[0.875rem] font-semibold hover:bg-accent hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(108,99,255,0.4)]"
          >
            Hire Me
          </a>
        </li>
      </ul>

      <button 
        className="md:hidden text-text-primary p-1"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 top-[60px] bg-bg-dark/97 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 text-xl transition-all duration-300 md:hidden",
        isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      )}>
        {navLinks.map((link) => (
          <a 
            key={link.name}
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
            className="text-text-secondary hover:text-text-primary uppercase tracking-widest font-medium"
          >
            {link.name}
          </a>
        ))}
        <a 
          href="#contact"
          onClick={() => setIsMenuOpen(false)}
          className="px-8 py-3 border border-accent rounded-md text-accent font-semibold"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}
