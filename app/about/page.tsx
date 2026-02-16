import Navbar from "../components/Navbar";
import ParticleBackground from "../components/ParticleBackground";
import Footer from "../components/Footer";
import AboutContent from "../components/AboutContent";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden pt-24">
        <ParticleBackground />
        <main className="relative z-10 max-w-4xl mx-auto px-6 py-20">
          <AboutContent />
          <div className="mt-24">
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
}