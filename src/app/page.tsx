import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/About"; // Education is in the same file
import { Contact } from "@/components/layout/Footer"; // Contact is in the same file

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <div className="h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent max-w-[1200px] mx-auto" />
      <Skills />
      <div className="h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent max-w-[1200px] mx-auto" />
      <Experience />
      <div className="h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent max-w-[1200px] mx-auto" />
      <Projects />
      <div className="h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent max-w-[1200px] mx-auto" />
      <Education />
      <Contact />
    </>
  );
}
