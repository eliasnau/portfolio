"use client";
import { Hero } from "@/components/ui/Hero";
import { Skills } from "@/components/ui/Skills";
import { skillItems } from "@/components/ui/Skill-List";
import { Work } from "@/components/ui/Work-Experience";
import { WorkItems } from "@/components/ui/Work-List";

export default function Title() {
  return (
    <div>
      <Hero />
      <h1 className="text-center font-bold text-2xl">My Skills</h1>
      <Skills items={skillItems} />
      <h1 className="text-center font-bold text-2xl">My Work Experience</h1>
      <Work items={WorkItems} />
    </div>
  );
}
