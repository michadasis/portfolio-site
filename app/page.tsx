"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, GraduationCap, ExternalLink, CodeXml } from "lucide-react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const projects = [
  {
    name: "UoWM Restaurant Menu App",
    desc: "An app developed for the University of Western Macedonia's students to access the weekly menu in a clean and simple way.",
    github: "https://github.com/michadasis/generic-restaurant-app",
    live: "#",
  },
  {
    name: "Multimusic Launcher",
    desc: "Multimusic Launcher is a powerful tool designed to simplify the process of launching music applications from a single interface.",
    github: "https://github.com/michadasis/multimusiclauncher",
    live: "#",
  },
  {
    name: "Kewl Bot",
    desc: "A feature-rich Discord bot with moderation and utility functionalities, designed to support everyday server management needs.",
    github: "https://github.com/michadasis/kewlbot",
    live: "#",
  },
];

// =================== NAVBAR COMPONENT ===================
function Navbar() {
  const navLinks = ["Home", "About"];
  const activeLink = "Home";

  return (
    <header className="w-full bg-black text-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-12 px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-green-900 flex items-center justify-center overflow-hidden">
  <img
    src="/mich.png"
    alt="Profile"
    className="w-full h-full object-cover"
  />
</div>

          <span className="font-semibold text-lg text-green-400">Ioannis Michadasis</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`px-3 py-1 rounded-full transition ${
                activeLink === link
                  ? "bg-green-900 text-green-400 hover:text-green-600"
                  : "bg-green-900 text-green-400 hover:text-green-600"
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-4 ">
        <div className="text-green-500 hover:text-green-600">
          <a href="mailto:johnmichadasis@gmail.com">
            <Mail size={18} />
          </a>
          </div>
          <div className="text-green-500 hover:text-green-600">
          <a href="https://linkedin.com/in/johnmichadasis" target="_blank">
            <Linkedin size={18} />
          </a>
          </div>
          <div className="text-green-500 hover:text-green-600">
          <a href="https://github.com/michadasis" target="_blank">
            <Github size={18} />
          </a>
        </div>
      </div>
      </div>
    </header>
  );
}

// =================== HOME PAGE ===================
export default function Home() {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden pt-24">
        {/* Terminal-style particle background */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            background: { color: "#000000" },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
                onClick: { enable: true, mode: "push" },
                resize: true,
              },
              modes: { repulse: { distance: 100 }, push: { quantity: 2 } },
            },
            particles: {
              color: { value: "#00FF00" },
              links: {
                color: "#00FF00",
                distance: 80,
                enable: true,
                opacity: 0.4,
                width: 1,
              },
              collisions: { enable: false },
              move: {
                direction: "none",
                enable: true,
                outModes: "bounce",
                random: true,
                speed: 1,
              },
              number: { density: { enable: true, area: 600 }, value: 80 },
              opacity: { value: 0.5 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
          className="absolute top-0 left-0 w-full h-full -z-10"
        />

        <main className="relative z-10 max-w-4xl mx-auto px-6 py-20 space-y-24">
{/* HERO SECTION */}
<section className="text-center py-10">
  <h1 className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
    Hey, I'm Ioannis
  </h1>
  <p className="text-green-300 mb-4">Computer Science Student</p>
  <div className="flex justify-center gap-4">
    <span className="flex items-center gap-2 px-4 py-2 bg-green-900 rounded-full text-green-200 text-sm cursor-default">
      <GraduationCap size={16} />
      Student
    </span>
    <span className="flex items-center gap-2 px-4 py-2 bg-green-900 rounded-full text-green-200 text-sm cursor-default">
      <CodeXml size={16} />
      Developer
    </span>
  </div>
</section>

          {/* ABOUT SECTION */}
          <section id="about">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl mb-4"
            >
              $ cat about.txt
            </motion.h2>
            <p className="text-green-300 text-sm leading-relaxed">
              I’m Ioannis — an undergraduate computer science student at the University of Western Macedonia.
            </p>
          </section>

          {/* PROJECTS SECTION */}
          <section id="activity">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl mb-6"
            >
              $ ls projects/
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((p) => (
                <div
                  key={p.name}
                  className="border border-green-700 rounded-lg p-4 hover:bg-green-500/5 transition"
                >
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <h3 className="text-lg">{p.name}</h3>
                      <p className="text-green-300 text-sm mt-1">{p.desc}</p>
                    </div>
                    <div className="flex gap-3 mt-3">
                      <a href={p.github} className="hover:text-green-200">
                        <Github size={18} />
                      </a>
                      {//p.live && (
                       // <a href={p.live} className="hover:text-green-200">
                       //   <ExternalLink size={18} />
                      //  </a>
                      //)
                      }
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FOOTER */}
          <footer className="text-xs text-green-600 text-center">
            <p>© 2025 Ioannis Michadasis — michadasis.dev</p>
          </footer>
        </main>
      </div>
    </>
  );
}
