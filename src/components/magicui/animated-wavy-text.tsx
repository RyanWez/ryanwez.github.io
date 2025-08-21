
"use client";

import { motion, Variants, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedWavyTextProps extends HTMLMotionProps<"div"> {
  text: string;
  className?: string;
  textClassName?: string;
}

const defaultVariants: Variants = {
  hidden: { y: 10, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const AnimatedWavyText = ({
  text,
  className,
  textClassName,
  ...props
}: AnimatedWavyTextProps) => {
  const characters = Array.from(text);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.05 }}
      aria-label={text}
      className={cn(
        "inline-block",
        className,
      )}
      {...props}
    >
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={defaultVariants}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
            y: {
              type: "spring",
              damping: 15,
              stiffness: 200,
            },
          }}
          className={cn(
            "gradient-text inline-block",
            textClassName,
          )}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedWavyText;
