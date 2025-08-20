import { cn } from "@/lib/utils";

export function Loading({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center w-full min-h-[200px]", className)}>
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-primary rounded-full animate-spin border-t-transparent"></div>
      </div>
    </div>
  );
}
