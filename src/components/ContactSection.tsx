import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function ContactSection() {
  const socialLinks = [
    { name: "GitHub", href: "https://github.com", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com", icon: Twitter },
  ];

  return (
    <section id="contact" className="w-full bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
              Get in Touch
            </div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
              Let's Build Something Together
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a project in mind, a question, or just want to connect? Feel free to reach out. I'm always open to discussing new opportunities and collaborations.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-4 pt-8">
            <Button size="lg" asChild className="w-full">
              <a href="mailto:hello@ryanwez.com">
                <Mail className="mr-2 h-5 w-5" />
                hello@ryanwez.com
              </a>
            </Button>
            <div className="flex justify-center space-x-4">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <Button key={name} variant="ghost" size="icon" asChild>
                  <Link href={href} target="_blank" rel="noopener noreferrer">
                    <Icon className="h-6 w-6" />
                    <span className="sr-only">{name}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
