"use client";
import { motion } from "framer-motion";
import { GraduationCap, CodeXml } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="text-center py-10">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-green-400 mb-2"
      >
        Hi, I'm Ioannis
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-green-300 mb-4"
      >
        Computer Science Student
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex justify-center gap-4"
      >
        <motion.span
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 px-4 py-2 bg-green-900 rounded-full text-green-200 text-sm cursor-default"
        >
          <GraduationCap size={16} />
          Student
        </motion.span>
        <motion.span
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 px-4 py-2 bg-green-900 rounded-full text-green-200 text-sm cursor-default"
        >
          <CodeXml size={16} />
          Developer
        </motion.span>
      </motion.div>
    </section>
  );
}