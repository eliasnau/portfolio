"use client";
import { Hero } from "@/components/ui/Hero";
import { Skills } from "@/components/ui/Skills";
import { skillItems } from "@/components/ui/Skill-List"; // Importiere skillItems

export default function Title() {
  return (
    <div>
      <Hero />
      <Skills items={skillItems} />
    </div>
  );
}
