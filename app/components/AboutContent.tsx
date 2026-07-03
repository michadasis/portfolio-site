"use client";
import { motion } from "framer-motion";
import { Code2, BookOpen, Lightbulb, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

type Skills = Record<string, string[]>;

export default function AboutContent() {
  const [skills, setSkills] = useState<Skills>({});

  useEffect(() => {
    fetch("/api/skills.php")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch(() => setSkills({}));
  }, []);

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
  Hi, I'm <span className="text-green-400 font-semibold">Ioannis Michadasis</span>, 
  a Computer Science student at the{" "}
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
            Most of what I know I've picked up by shipping things, not by reading about them. I like 
            taking a problem I actually have, a menu I keep forgetting to check, an install process 
            that takes too many steps — and turning it into a working app. That's led me toward 
            <span className="text-green-400"> full stack development</span>, but I move across the stack 
            pretty freely: web, mobile, desktop, whatever the problem calls for.
          </p>
          
          <p>
            Right now I volunteer with <span className="text-green-400">Open Source UoM</span>, where I 
            contribute to UniBackpack, a Qt6/C++ tool that cuts down the manual steps students go through 
            to install university software. Before that I worked with the{" "}
            <span className="text-green-400">IEEE Student Branch Kastoria</span> on my.cs.uowm.gr, 
            helping build out the portal and adding a PDF scraper that automates the weekly restaurant 
            menu lookup.
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
            My latest project is <span className="text-green-400">StaffOS</span>, a full staff management 
            platform with Next.js, Prisma, and MySQL, and spent a while getting role-based access control 
            right so people only see what they're supposed to. Between that and UniBackpack, I've been 
            splitting time pretty evenly between web and native/desktop work lately.
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
            <h3 className="text-green-400 font-semibold mb-2">Build the thing, then fix it</h3>
            <p>
              I'd rather have something working end-to-end and rough around the edges than a perfect 
              plan and no code. Most of what I actually learn happens after the first version breaks.
            </p>
          </div>
          
          <div className="border border-green-700 rounded-lg p-5 hover:bg-green-500/5 transition">
            <h3 className="text-green-400 font-semibold mb-2">Code other people can read</h3>
            <p>
              I've worked on a few team projects now, UniBackpack, my.cs.uowm.gr and the difference 
              between code that's easy to hand off and code that isn't is huge. I try to write the former.
            </p>
          </div>
          
          <div className="border border-green-700 rounded-lg p-5 hover:bg-green-500/5 transition">
            <h3 className="text-green-400 font-semibold mb-2">Still figuring a lot out</h3>
            <p>
              I'm early in this. I'd rather be upfront about that than pretend otherwise, I just try 
              to make sure each project teaches me something I didn't already know.
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