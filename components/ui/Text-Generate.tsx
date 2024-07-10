"use client";
import React, { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerate = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope, animate]);

  const renderText = () => {
    const textElements = React.Children.toArray(children);
    return (
      <motion.div ref={scope}>
        {textElements.map((element, idx) => {
          return (
            <motion.span
              key={idx}
              className="dark:text-white text-black opacity-0"
            >
              {element}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderText()}
        </div>
      </div>
    </div>
  );
};
