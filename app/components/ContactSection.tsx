"use client";
import { motion } from "framer-motion";
import ContactButtons from "./ContactButtons";
import Footer from "./Footer";

// Full-width band at the bottom of the page, with the footer inside it.
export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative z-10 scroll-mt-14 border-t border-green-900/60 bg-green-950/40"
    >
      <div className="max-w-3xl mx-auto px-6 pt-16 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <h2 className="text-2xl font-semibold text-green-400 font-mono">
            Let&apos;s Connect
          </h2>
          <p className="text-green-300">
            I&apos;m always interested in new opportunities, collaborations, or just a good
            conversation about tech.
          </p>
          <ContactButtons />
        </motion.div>
        <div className="mt-14">
          <Footer />
        </div>
      </div>
    </section>
  );
}
