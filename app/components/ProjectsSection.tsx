"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { projects } from "../data/projects";

export default function ProjectsSection() {
  return (
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
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="hover:text-green-200">
                  <Github size={18} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}