"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xl mb-6"
      >
        $ cat about.txt
      </motion.h2>
      
      <div className="space-y-4 text-green-300 text-sm leading-relaxed">
        <p>
          Hi, my name is <span className="text-green-400 font-semibold">Ioannis Michadasis</span>, 
          I'm an undergraduate Computer Science student at the University of Western Macedonia.
        </p>
        
        <p>
          I'm passionate about building software that combines solid engineering with clean, 
          practical design. I’m particularly interested in <span className="text-green-400">full-stack development</span>, 
          <span className="text-green-400"> backend systems</span>, and modern web technologies.
        </p>
        
        <p>
          I have hands-on experience with tools like <span className="text-green-400">JavaScript</span>, 
          <span className="text-green-400"> TypeScript</span>, <span className="text-green-400">Python</span>, 
          <span className="text-green-400"> React</span>, <span className="text-green-400">Node.js</span>,  
          <span className="text-green-400"> Next.js</span> and <span className="text-green-400">FastAPI</span>.
        </p>
        
        <p>
          I enjoy learning by building, experimenting with new technologies, and continuously 
          improving my skills through personal projects and open-source contributions. I'm always 
          eager to take on new challenges, collaborate with others, and grow as a developer while 
          turning ideas into real, working solutions.
        </p>
      </div>
    </section>
  );
}