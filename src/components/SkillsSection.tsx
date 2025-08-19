import { Badge } from "@/components/ui/badge";
import { Code, Database, Server, Wind } from "lucide-react";

export default function SkillsSection() {
  const skills = {
    "Frontend": ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    "Backend": ["Node.js", "Express.js", "Prisma", "REST APIs", "GraphQL"],
    "Databases": ["PostgreSQL", "MongoDB", "Firebase"],
    "DevOps & Tools": ["Git", "Docker", "Vercel", "Netlify", "CI/CD"]
  };

  const icons = {
    "Frontend": <Code className="h-6 w-6 text-primary" />,
    "Backend": <Server className="h-6 w-6 text-primary" />,
    "Databases": <Database className="h-6 w-6 text-primary" />,
    "DevOps & Tools": <Wind className="h-6 w-6 text-primary" />
  }

  return (
    <section id="skills" className="w-full bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
              Skills & Technologies
            </div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
              My Technical Toolbox
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A collection of the tools and technologies I use to bring ideas to life. I'm always eager to learn more.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {Object.entries(skills).map(([category, list]) => (
                <div key={category} className="rounded-lg border bg-card p-6 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                        {icons[category as keyof typeof icons]}
                        <h3 className="font-headline text-xl font-semibold">{category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {list.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-sm">{skill}</Badge>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
