"use client";
import { motion } from "framer-motion";
import { Code2, BookOpen, Lightbulb, Terminal } from "lucide-react";
import { skills } from "../data/skills";

export default function AboutContent() {

  return (
    <div className="space-y-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">
          $ whoami
        </h1>
        <div className="h-1 w-20 bg-green-500 mb-8"></div>
      </motion.div>

      {/* Main About Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h2 className="text-xl mb-6 flex items-center gap-2">
          <Terminal size={20} />
          $ cat about.txt
        </h2>
        
        <div className="space-y-4 text-green-300 text-sm leading-relaxed border-l-2 border-green-700 pl-6">
          <p>
  Hi, my name is <span className="text-green-400 font-semibold">Ioannis Michadasis</span>, 
  I'm an undergraduate Computer Science student at the{" "}
  <a 
    href="https://cs.uowm.gr/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-green-400 hover:text-green-300 transition"
  >
    University of Western Macedonia
  </a>.
</p>
          
          <p>
            I'm passionate about building software that combines solid engineering with clean, 
            practical design. I'm particularly interested in <span className="text-green-400">full-stack development</span>, 
            <span className="text-green-400"> backend systems</span>, and modern web technologies.
          </p>
          
          <p>
            I enjoy learning by building, experimenting with new technologies, and continuously 
            improving my skills through personal projects and open-source contributions. I'm always 
            eager to take on new challenges, collaborate with others, and grow as a developer while 
            turning ideas into real, working solutions.
          </p>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-xl mb-6 flex items-center gap-2">
          <Code2 size={20} />
          $ ls skills/
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="border border-green-700 rounded-lg p-5 hover:bg-green-500/5 transition"
            >
              <h3 className="text-green-400 font-semibold mb-3 capitalize">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-green-900/30 border border-green-700 rounded text-green-300 text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* What I'm Learning */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="text-xl mb-6 flex items-center gap-2">
          <BookOpen size={20} />
          $ cat currently-learning.txt
        </h2>
        
        <div className="border-l-2 border-green-700 pl-6 space-y-3 text-green-300 text-sm">
          <p>
            Right now, I'm diving deeper into <span className="text-green-400">system design</span> and 
            <span className="text-green-400"> distributed systems</span>, learning how to build scalable 
            applications that can handle real-world complexity.
          </p>
          <p>
            I'm also exploring <span className="text-green-400">DevOps practices</span> and 
            <span className="text-green-400"> cloud technologies</span> to better understand the full 
            lifecycle of software development and deployment.
          </p>
        </div>
      </motion.section>

      {/* Interests & Approach */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-xl mb-6 flex items-center gap-2">
          <Lightbulb size={20} />
          $ cat philosophy.txt
        </h2>
        
        <div className="space-y-4 text-green-300 text-sm">
          <div className="border border-green-700 rounded-lg p-5 hover:bg-green-500/5 transition">
            <h3 className="text-green-400 font-semibold mb-2">Learning by Doing</h3>
            <p>
              I believe the best way to learn is by building. Every project teaches me something new, 
              whether it's a technical concept or a better way to approach problem-solving.
            </p>
          </div>
          
          <div className="border border-green-700 rounded-lg p-5 hover:bg-green-500/5 transition">
            <h3 className="text-green-400 font-semibold mb-2">Clean Code Matters</h3>
            <p>
              I strive to write code that's not just functional, but readable and maintainable. 
              Good code should communicate its intent clearly to any developer.
            </p>
          </div>
          
          <div className="border border-green-700 rounded-lg p-5 hover:bg-green-500/5 transition">
            <h3 className="text-green-400 font-semibold mb-2">Always Growing</h3>
            <p>
              Technology evolves constantly, and so should I. I'm committed to continuous learning, 
              staying curious, and embracing new challenges that push me outside my comfort zone.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center py-8"
      >
        <div className="border border-green-700 rounded-lg p-8 bg-green-500/5">
          <h2 className="text-2xl font-semibold text-green-400 mb-3">
            Let's Connect
          </h2>
          <p className="text-green-300 text-sm mb-6">
            I'm always interested in new opportunities, collaborations, or just a good conversation about tech.
          </p>
          <a
            href="mailto:johnmichadasis@gmail.com"
            className="inline-block px-6 py-3 bg-green-900 text-green-400 rounded-lg hover:bg-green-800 transition font-semibold"
          >
            Send message
          </a>
        </div>
      </motion.section>
    </div>
  );
}