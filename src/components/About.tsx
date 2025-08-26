'use client';
import { CheckCircle, Plus, ChevronRight, Database } from 'lucide-react';

const aiSkills = [
  "ChatBot Development",
  "Natural Language Processing",
  "AI Integration",
  "OpenAI API",
  "Prompt Engineering"
];

const webTechnologies = [
  "React",
  "JavaScript/TypeScript",
  "Node.js",
  "HTML5 & CSS3",
  "Responsive Design"
];

const toolsPlatforms = [
  "Vercel",
  "Firebase",
  "MongoDB",
  "Telegram Bot API",
  "Git & GitHub"
];

const About = () => {
  const handleViewProjects = () => {
    // Scroll to projects section or navigate to projects page
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetInTouch = () => {
    // Open email client or navigate to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback to email
      window.location.href = 'mailto:contact@ryanwez.dev';
    }
  };

  return (
    <>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">About Me</h2>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto space-y-6">

        {/* My Journey & Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* My Journey */}
          <div className="glass p-8 rounded-2xl hover:translate-y-[-8px] hover:shadow-2xl transition-all duration-300 cursor-pointer group">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">My Journey</h3>
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <CheckCircle size={20} className="text-white" />
              </div>
            </div>
            <p className="text-foreground/80 leading-relaxed mb-6 group-hover:text-foreground transition-colors">
              I&apos;m RyanWez, an innovator passionate about leveraging Artificial Intelligence to create practical and exciting digital solutions. With a foundational knowledge of web technologies, I excel at orchestrating AI to build and deploy functional web apps and intelligent chatbots.
            </p>
            <p className="text-foreground/70 leading-relaxed group-hover:text-foreground/80 transition-colors">
              My passion lies in bridging the gap between complex AI technologies and practical, user-friendly applications. I believe in the power of AI to transform how we interact with digital platforms and solve real-world problems.
            </p>
          </div>

          {/* AI & Machine Learning */}
          <div className="glass p-8 rounded-2xl hover:translate-y-[-8px] hover:shadow-2xl transition-all duration-300 cursor-pointer group">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">AI & Machine Learning</h3>
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Plus size={20} className="text-white" />
              </div>
            </div>
            <div className="space-y-3">
              {aiSkills.map((skill, index) => (
                <div key={index} className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: `${index * 50}ms` }}>
                  <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-foreground/80 group-hover:text-foreground transition-colors">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Grid - Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Web Technologies */}
          <div className="glass p-8 rounded-2xl hover:translate-y-[-8px] hover:shadow-2xl transition-all duration-300 cursor-pointer group">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">Web Technologies</h3>
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ChevronRight size={20} className="text-white" />
              </div>
            </div>
            <div className="space-y-3">
              {webTechnologies.map((tech, index) => (
                <div key={index} className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: `${index * 50}ms` }}>
                  <div className="w-2 h-2 bg-purple-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-foreground/80 group-hover:text-foreground transition-colors">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Platforms */}
          <div className="glass p-8 rounded-2xl hover:translate-y-[-8px] hover:shadow-2xl transition-all duration-300 cursor-pointer group">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">Tools & Platforms</h3>
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Database size={20} className="text-white" />
              </div>
            </div>
            <div className="space-y-3">
              {toolsPlatforms.map((tool, index) => (
                <div key={index} className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: `${index * 50}ms` }}>
                  <div className="w-2 h-2 bg-orange-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-foreground/80 group-hover:text-foreground transition-colors">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="glass p-6 rounded-2xl text-center hover:translate-y-[-4px] hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-semibold mb-3">Ready to Collaborate?</h3>
          <p className="text-foreground/80 mb-4">
            Let&apos;s discuss how we can bring your ideas to life with innovative AI-powered solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={handleViewProjects}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              View Projects
            </button>
            <button
              onClick={handleGetInTouch}
              className="px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
