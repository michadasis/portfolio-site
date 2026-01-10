import { Mail, Linkedin, Github } from "lucide-react";

export default function Navbar() {
  const navLinks = ["Home", "About"];
  const activeLink = "Home";

  return (
    <header className="w-full bg-black text-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-12 px-6 py-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-green-900 flex items-center justify-center overflow-hidden">
            <img
              src="../mich.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-semibold text-lg text-green-400">Ioannis Michadasis</span>
        </div>

        <nav className="flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`px-3 py-1 rounded-full transition ${
                activeLink === link
                  ? "bg-green-900 text-green-400 hover:text-green-600"
                  : "bg-green-900 text-green-400 hover:text-green-600"
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="mailto:johnmichadasis@gmail.com" className="text-green-500 hover:text-green-600">
            <Mail size={18} />
          </a>
          <a href="https://linkedin.com/in/johnmichadasis" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600">
            <Linkedin size={18} />
          </a>
          <a href="https://github.com/michadasis" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600">
            <Github size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}