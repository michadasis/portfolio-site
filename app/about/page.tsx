import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import ParticleBackground from "../components/ParticleBackground";
import Footer from "../components/Footer";
import AboutContent from "../components/AboutContent";

const pageTitle = "About | Ioannis Michadasis";
const pageDescription =
  "About Ioannis Michadasis: Computer Science student at the University of Western Macedonia, open source contributor and full stack developer.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/about/",
  },
  openGraph: {
    type: "profile",
    url: "/about/",
    title: pageTitle,
    description: pageDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden pt-24">
        <ParticleBackground />
        <main className="relative z-10 max-w-4xl mx-auto px-6 pt-20 pb-24">
          <AboutContent />
          <div className="mt-24">
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
}
