"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface WavyTextProps {
  text: string;
  delay?: number;
  duration?: number;
  className?: string;
  stagger?: number;
}

export function AnimatedWavyText({
  text,
  delay = 0,
  duration = 0.05,
  stagger = 0.02,
  className,
}: WavyTextProps) {
  const letters = Array.from(text);

  const container: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: i * delay,
      },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
        duration,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
        duration,
      },
    },
  };

  return (
    <motion.h1
      style={{ display: "flex", overflow: "hidden" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={cn("gradient-text", className)}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
}
