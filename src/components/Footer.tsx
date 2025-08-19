import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { name: "GitHub", href: "https://github.com", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com", icon: Twitter },
  ];

  return (
    <footer className="w-full border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} Ryan Wez. All Rights Reserved.
        </p>
        <div className="flex items-center gap-2">
          {socialLinks.map(({ name, href, icon: Icon }) => (
            <Button key={name} variant="ghost" size="icon" asChild>
              <Link href={href} target="_blank" rel="noopener noreferrer">
                <Icon className="h-5 w-5" />
                <span className="sr-only">{name}</span>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
