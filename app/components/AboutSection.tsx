"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
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
        I'm Ioannis — an undergraduate computer science student at the University of Western Macedonia.
      </p>
    </section>
  );
}