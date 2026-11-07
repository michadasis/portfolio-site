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
      >
        <h1 className="text-4xl md:text-5xl font-bold text-green-400">
          Hi, I&apos;m Ioannis
        </h1>
        <p className="mt-2 text-green-300 font-mono text-sm md:text-base">
          Computer Science Student
        </p>
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
          . I learn by putting what I study into real projects that people actually use.
        </p>
        <p>
          Most of my work starts from a real problem, like a restaurant menu that&apos;s hard to find
          or a software setup that takes too many steps, and ends up as a working app.
          That&apos;s led me toward <span className="text-green-400">full stack development</span>, and I
          work across web, mobile and desktop depending on what the problem needs.
        </p>
        <p>
          I care about <span className="text-green-400">building software that holds up</span>: thinking
          the design through before writing code, keeping it clean and readable for the next person,
          and testing it properly before it reaches users.
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
