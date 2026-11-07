import { Mail, Linkedin, Github, FileDown } from "lucide-react";

const links = [
  { label: "Email", href: "mailto:contact@michadasis.com", Icon: Mail, external: false },
  { label: "LinkedIn", href: "https://linkedin.com/in/johnmichadasis", Icon: Linkedin, external: true },
  { label: "GitHub", href: "https://github.com/michadasis", Icon: Github, external: true },
];

// Download CV + Email / LinkedIn / GitHub buttons, used in the hero and in the contact band.
export default function ContactButtons() {
  return (
    <div className="flex flex-wrap gap-3 font-mono">
      <a
        href="/Ioannis_Michadasis_CV.pdf"
        download
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-400 bg-green-400 text-black text-sm font-semibold hover:bg-green-300 transition"
      >
        <FileDown size={16} />
        Download CV
      </a>
      {links.map(({ label, href, Icon, external }) => (
        <a
          key={label}
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-700 text-green-300 text-sm hover:bg-green-500/10 hover:text-green-200 transition"
        >
          <Icon size={16} />
          {label}
        </a>
      ))}
    </div>
  );
}
