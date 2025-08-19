import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
              About Me
            </div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              A Passion for Building and Learning
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              I'm a dedicated software engineer with a passion for creating beautiful and functional user experiences. My journey in tech started with a simple curiosity for how things work, and it has evolved into a career where I get to build and learn every day.
            </p>
            <p className="max-w-[600px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              With experience in both front-end and back-end technologies, I enjoy tackling complex problems and turning ideas into reality. When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and hiking in the great outdoors.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/550x550.png"
              width={550}
              height={550}
              alt="About Me Portrait"
              data-ai-hint="developer portrait"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
