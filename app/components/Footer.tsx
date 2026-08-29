import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-xs text-green-600 text-center">
      <p>© 2026 Ioannis Michadasis — michadasis.com</p>
      <a
        href="https://github.com/michadasis/portfolio-site"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 mt-2 hover:text-green-400 transition"
      >
        <Github size={12} />
        <span>source code for this site</span>
      </a>
    </footer>
  );
}