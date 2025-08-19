import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="w-full bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Ryan Wez
              </h1>
              <h2 className="text-xl font-medium text-primary md:text-2xl">
                Software Engineer & Web Developer
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                I build elegant, responsive, and user-friendly web applications with a focus on performance and clean code.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/resume.pdf" target="_blank">
                  Download CV
                  <FileText className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div
                className="relative w-full max-w-md h-80 lg:h-96 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary rounded-2xl shadow-lg overflow-hidden"
                data-ai-hint="abstract developer"
            >
                <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]"></div>
                <div className="absolute inset-0 bg-grid-slate-100/75 [mask-image:linear-gradient(90deg,#fff,rgba(255,255,255,0.6))]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <pre className="font-code text-sm text-foreground/50">
{`const ryanWez = {
  title: 'Software Engineer',
  skills: [
    'TypeScript', 
    'React', 
    'Next.js', 
    'Node.js'
  ],
  focus: 'Web Development'
};`}
                    </pre>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
