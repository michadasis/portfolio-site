"use client";
import { motion } from "framer-motion";
import { Zap, Users, Code2, Rocket } from "lucide-react";

export default function HighlightsSection() {
  const highlights = [
    {
      icon: <Code2 size={24} />,
      title: "Clean Code Advocate",
      description: "I believe in writing code that's not just functional, but maintainable and scalable. Every line should tell a story that future developers can easily follow."
    },
    {
      icon: <Rocket size={24} />,
      title: "Problem Solver",
      description: "I thrive on challenges and approach problems systematically. Breaking down complex issues into manageable pieces is where I excel."
    }
  ];

  return (
    <section>

      <div className="grid md:grid-cols-2 gap-6">
        {highlights.map((highlight, index) => (
          <motion.div
            key={highlight.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border border-green-700 rounded-lg p-6 hover:bg-green-500/5 transition group"
          >
            <div className="flex items-start gap-4">
              <div className="text-green-400 group-hover:text-green-300 transition flex-shrink-0">
                {highlight.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-green-300 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}