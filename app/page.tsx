"use client";
import { Hero } from "@/components/ui/Hero";
import { Skills } from "@/components/ui/Skills";
import { skillItems } from "@/components/ui/Skill-List";
import { Work } from "@/components/ui/Work-Experience";
import { WorkItems } from "@/components/ui/Work-List";
import AboutMe from "@/components/ui/About-Me"
import Footer from "@/components/ui/Footer";

export default function Title() {
  return (
    <div className="bg-black">
      <Hero />
      <h1 className="text-center font-bold text-4xl">My Skills</h1>
      <Skills items={skillItems} />
      <h1 className="text-center font-bold text-4xl">My Work Experience</h1>
      <Work items={WorkItems} />
      <h1 className="text-center font-bold text-4xl"> More About Me</h1>
      <AboutMe />
      <Footer />
    </div>
  );
}
