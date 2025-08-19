import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { getProjects } from '@/lib/actions';

export const revalidate = 3600; // Revalidate every hour

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProjectsSection projects={projects} />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
