'use client';
import { Bot, Code, Rocket, BrainCircuit } from 'lucide-react';

const skills = [
    { icon: <BrainCircuit size={48} className="text-primary"/>, name: "AI Integration" },
    { icon: <Code size={48} className="text-primary"/>, name: "Web Development" },
    { icon: <Bot size={48} className="text-primary"/>, name: "Bot Creation" },
    { icon: <Rocket size={48} className="text-primary"/>, name: "Rapid Deployment" },
];

const About = () => {
  return (
    <>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">About Me</h2>
      <div className="max-w-3xl mx-auto glass p-8 rounded-2xl">
        <p className="text-lg text-foreground/80 text-center leading-relaxed mb-8">
          I&apos;m RyanWez, an innovator passionate about leveraging Artificial Intelligence to create practical and exciting digital solutions. With a foundational knowledge of web technologies, I excel at orchestrating AI to build and deploy functional web apps and intelligent chatbots.
        </p>
        <div className="grid grid-cols-2 gap-16">
          {skills.map(skill => (
              <div key={skill.name} className="flex flex-col items-center gap-4 hover:translate-y-[-5px] transition-transform duration-300">
                  {skill.icon}
                  <span className="text-foreground/80 text-lg">{skill.name}</span>
              </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
