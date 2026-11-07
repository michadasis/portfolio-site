"use client";
import { motion } from "framer-motion";
import { Code2, Github } from "lucide-react";
import { useEffect, useState } from "react";

type Skills = Record<string, string[]>;
type LoadState = "loading" | "ready" | "error";

const isSkills = (value: unknown): value is Skills =>
  typeof value === "object" &&
  value !== null &&
  !Array.isArray(value) &&
  Object.values(value as Record<string, unknown>).every(
    (items) =>
      Array.isArray(items) && items.every((item) => typeof item === "string")
  );

export default function SkillsSection() {
  const [skills, setSkills] = useState<Skills>({});
  const [skillsState, setSkillsState] = useState<LoadState>("loading");

  useEffect(() => {
    let cancelled = false;

    fetch("/api/skills.php")
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        if (!isSkills(data)) throw new Error("Unexpected response shape");
        setSkills(data);
        setSkillsState("ready");
      })
      .catch(() => {
        if (cancelled) return;
        setSkills({});
        setSkillsState("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="scroll-mt-14 py-16 border-t border-green-900/60"
    >
      <h2 className="text-xl mb-8 flex items-center gap-2 font-mono">
        <Code2 size={20} />
        $ ls skills/
      </h2>

      {skillsState === "loading" && (
        <div className="space-y-6" aria-busy="true">
          {[0, 1, 2].map((i) => (
            <div key={`skills-skeleton-${i}`} className="grid gap-3 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-6 animate-pulse">
              <div className="h-4 w-24 bg-green-900/60 rounded" />
              <div className="flex flex-wrap gap-2">
                {[0, 1, 2, 3].map((j) => (
                  <div key={`skills-skeleton-${i}-${j}`} className="h-6 w-20 bg-green-900/40 rounded" />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {skillsState === "error" && (
        <div className="border border-amber-600/60 bg-amber-500/5 rounded-lg p-5">
          <p className="text-amber-400 font-semibold mb-2 font-mono">
            $ skills: failed to load
          </p>
          <p className="text-green-300 text-sm">
            The skills list could not be loaded right now. The code behind
            every skill listed here is on GitHub.
          </p>
          <a
            href="https://github.com/michadasis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-sm text-green-400 hover:text-green-200 transition"
          >
            <Github size={16} />
            <span>github.com/michadasis</span>
          </a>
        </div>
      )}

      {skillsState === "ready" && Object.keys(skills).length === 0 && (
        <p className="text-green-300 text-sm">
          No skills are listed at the moment.
        </p>
      )}

      {skillsState === "ready" && Object.keys(skills).length > 0 && (
        <dl className="space-y-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="grid gap-3 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-6">
              <dt className="font-mono text-xs uppercase tracking-[0.2em] text-green-600 sm:pt-1.5">
                {category}
              </dt>
              <dd className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-green-900/30 border border-green-700 rounded text-green-300 text-xs font-mono"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      )}
    </motion.section>
  );
}
