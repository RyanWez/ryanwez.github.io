"use client";

import { useTheme } from "next-themes";
import { Moon, SunDim } from "lucide-react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export function AnimatedThemeToggler({ className }: Props) {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";

    // Type assertion for startViewTransition which is experimental
    const documentWithTransition = document as Document & {
      startViewTransition?: (callback: () => void) => void;
    };

    if (!documentWithTransition.startViewTransition) {
      setTheme(newTheme);
      return;
    }

    documentWithTransition.startViewTransition(() => {
      flushSync(() => {
        setTheme(newTheme);
      });
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn("relative inline-flex items-center justify-center rounded-full px-2 py-1.5 text-sm font-medium text-gray-500 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background", className)}
    >
      <span className="relative">
        <SunDim
          className={cn(
            "h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0",
          )}
        />
        <Moon
          className={cn(
            "absolute inset-0 h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100",
          )}
        />
        <span className="sr-only">Toggle theme</span>
      </span>
    </button>
  );
}
