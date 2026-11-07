import Navbar from "./components/Navbar";
import ParticleBackground from "./components/ParticleBackground";
import HeroSection from "./components/HeroSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-green-400 font-sans relative overflow-hidden">
        <ParticleBackground />
        <main className="relative z-10 max-w-3xl mx-auto px-6 pt-32 md:pt-40">
          <HeroSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
        </main>
        <ContactSection />
      </div>
    </>
  );
}
