import Navbar from "./components/Navbar";
import ParticleBackground from "./components/ParticleBackground";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden pt-24">
        <ParticleBackground />

        <main className="relative z-10 max-w-4xl mx-auto px-6 py-20 space-y-24">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <Footer />
        </main>
      </div>
    </>
  );
}