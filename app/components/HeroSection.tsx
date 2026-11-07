"use client";
import { motion } from "framer-motion";
import ContactButtons from "./ContactButtons";

export default function HeroSection() {
  return (
    <section id="about" className="scroll-mt-32 pb-16 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-5 sm:gap-7"
      >
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-green-700 bg-green-900 overflow-hidden flex-shrink-0">
          <img src="/profile.jpg" alt="Ioannis Michadasis" className="w-full h-full object-cover" />
        </div>
        <div className="min-w-0">
          <h1 className="text-4xl md:text-5xl font-bold text-green-400">
            Hi, I&apos;m Ioannis
          </h1>
          <p className="mt-2 text-green-300 font-mono text-sm md:text-base">
            Computer Science Student
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="space-y-4 text-green-300 leading-relaxed"
      >
        <p>
          I&apos;m a Computer Science student at the{" "}
          <a
            href="https://cs.uowm.gr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-200 transition"
          >
            University of Western Macedonia
          </a>
          . Most of what I know I&apos;ve picked up by shipping things, not by reading about them.
        </p>
        <p>
          I like taking a problem I actually have, a menu I keep forgetting to check, an install
          process that takes too many steps, and turning it into a working app. That&apos;s led me
          toward <span className="text-green-400">full stack development</span>, but I move across the
          stack pretty freely: web, mobile, desktop, whatever the problem calls for.
        </p>
        <p>
          My approach is simple: <span className="text-green-400">build the thing, then fix it.</span>{" "}
          I&apos;d rather have something working end-to-end and rough around the edges than a perfect
          plan and no code, and I try to write code that&apos;s easy for the next person to pick up.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <ContactButtons />
      </motion.div>
    </section>
  );
}
