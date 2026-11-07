"use client";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

type Entry = {
  period: string;
  current?: boolean;
  title: string;
  org: string;
  orgUrl?: string;
  points: string[];
};

const work: Entry[] = [
  {
    period: "May 2026 – Present",
    current: true,
    title: "Lead Software Engineer (Volunteer)",
    org: "Open Source UoM",
    orgUrl: "https://github.com/open-source-uom",
    points: [
      "Work on UniBackpack, a Qt6/C++ tool that installs the software each university department needs on Debian- and Arch-based systems.",
      "Set up the CI and packaging for the UniOS tools: GitHub Actions builds, Debian packages and Launchpad PPA releases.",
    ],
  },
  {
    period: "2026 – Present",
    current: true,
    title: "Founder",
    org: "Kastoria Dev Core",
    orgUrl: "https://github.com/Kastoria-Dev-Core",
    points: [
      "Started a team of students in Kastoria that builds open source projects together.",
      "Building the city bus app with every line, stop and timetable in Kastoria, approved by the operator, Astika KTEL Kastorias.",
      "Timetables sync from the operator's website every morning through GitHub Actions, and a Node.js service serves the operator's announcements as a JSON feed.",
    ],
  },
  {
    period: "2026 – Present",
    current: true,
    title: "Server Admin and Developer",
    org: "Πληροφορική UoWM, the CS students' Discord server",
    points: [
      "Started and run the Discord server for the department's Computer Science students.",
      "Built the bot that verifies new members through their university email, with one-time codes and rate limits.",
      "Built a watcher that posts new exam schedules and timetables from cs.uowm.gr within minutes of the department uploading them.",
    ],
  },
  {
    period: "Jul 2026",
    title: "Freelance Web Developer",
    org: "Nintri Taverna, Zakynthos",
    orgUrl: "https://nintritavern.com",
    points: [
      "Built the taverna's bilingual Greek and English website from scratch.",
      "Handled the SEO, image optimisation and production deployment.",
    ],
  },
  {
    period: "Dec 2025 – May 2026",
    title: "Student Member",
    org: "IEEE Student Branch UoWM Kastoria",
    orgUrl: "https://ieee.cs.uowm.gr/",
    points: [
      "Helped build out the my.cs.uowm.gr student portal.",
      "Added a PDF scraper that automates the weekly restaurant menu lookup.",
    ],
  },
];

const education: Entry[] = [
  {
    period: "Sep 2025 – Present",
    current: true,
    title: "BSc in Computer Science",
    org: "University of Western Macedonia",
    orgUrl: "https://cs.uowm.gr/",
    points: [],
  },
];

function Timeline({ entries }: { entries: Entry[] }) {
  return (
    <ol className="relative ml-[7px] border-l border-green-800 space-y-10">
      {entries.map((entry) => (
        <li key={`${entry.title}-${entry.org}`} className="relative pl-8">
          <span
            aria-hidden="true"
            className={`absolute -left-[8px] top-1 w-[15px] h-[15px] rounded-full border-[3px] border-black ${
              entry.current ? "bg-green-400" : "bg-green-800"
            }`}
          />
          <div className="flex flex-wrap items-center gap-2 font-mono text-sm text-green-500">
            <span>{entry.period}</span>
            {entry.current && (
              <span className="px-2 py-0.5 rounded-full border border-green-700 bg-green-500/15 text-green-300 text-xs font-semibold">
                Current
              </span>
            )}
          </div>
          <h4 className="mt-1 text-lg font-semibold text-green-300">{entry.title}</h4>
          <p className="text-green-500">
            {entry.orgUrl ? (
              <a
                href={entry.orgUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-300 transition"
              >
                {entry.org}
              </a>
            ) : (
              entry.org
            )}
          </p>
          {entry.points.length > 0 && (
            <ul className="mt-3 space-y-2 list-disc pl-5 marker:text-green-700 text-sm leading-relaxed text-green-300/90">
              {entry.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}

export default function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="scroll-mt-14 py-16 border-t border-green-900/60"
    >
      <h2 className="text-xl mb-8 flex items-center gap-2 font-mono">
        <Briefcase size={20} />
        $ cat experience.log
      </h2>

      <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-green-600">Work</h3>
      <Timeline entries={work} />

      <h3 className="mt-12 mb-6 font-mono text-xs uppercase tracking-[0.2em] text-green-600">Education</h3>
      <Timeline entries={education} />
    </motion.section>
  );
}
