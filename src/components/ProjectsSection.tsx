import type { ProjectWithId } from "@/lib/definitions";
import ProjectCard from "./ProjectCard";

interface ProjectsSectionProps {
  projects: ProjectWithId[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="w-full bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
              Featured Projects
            </div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
              My Creative Portfolio
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of the projects I've worked on. Each one represents a unique challenge and an opportunity to learn and grow as a developer.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          {projects.length === 0 && (
            <div className="col-span-full text-center text-muted-foreground">
              <p>No projects have been added yet. Check back soon!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
