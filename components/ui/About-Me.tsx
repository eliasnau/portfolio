"use client";

import { Highlight, HeroHighlight } from "./hero-highlight";
import { TextGenerate } from "./Text-Generate";

export default function AboutMe() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <HeroHighlight>
        <div className="max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="flex justify-center text-3xl mb-16 font-bold">Timothee Bels</p>
          <TextGenerate className="text-center">
            I am an 8th-grade student at the Ignaz-Günther-Gymnasium with an{" "}
            <Highlight>interest in technology and programming.</Highlight>{" "}
            Through a school-offered technical course, I have gained
            foundational skills in programming, particularly in creating
            websites <Highlight>using React and Tailwind CSS.</Highlight>{" "}
            Additionally, I have a bit of experience in programming with Unreal
            Engine 5 (UE5). I am eager to further develop my programming
            abilities and apply my knowledge in real-world projects.
          </TextGenerate>
        </div>
      </HeroHighlight>
    </div>
  );
}
