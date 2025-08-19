import Image from "next/image";
import Link from "next/link";
import { type ProjectWithId } from "@/lib/definitions";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: ProjectWithId;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
      <CardHeader>
        <div className="aspect-video relative mb-4">
            <Image
            src={project.imageUrl || `https://placehold.co/600x400.png`}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
            data-ai-hint="web application"
            />
        </div>
        <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
        <CardDescription className="flex-grow">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col justify-between flex-grow">
        <div>
          <h4 className="mb-2 font-semibold text-sm">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        <div className="mt-6 flex gap-4">
          <Button asChild className="flex-1" variant="outline">
            <Link href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </Link>
          </Button>
          <Button asChild className="flex-1">
            <Link href={project.sourceCodeUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> Source Code
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
