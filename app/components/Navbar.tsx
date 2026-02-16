"use client";
import { Mail, Linkedin, Github } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" }
  ];
  
  return (
    <header className="w-full bg-black text-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between md:justify-center md:gap-12 px-4 md:px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-green-900 flex items-center justify-center overflow-hidden flex-shrink-0">
            <img
              src="/mich.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-semibold text-lg text-green-400 whitespace-nowrap hidden md:inline">
            Ioannis Michadasis
          </span>
        </Link>
        {/* Navigation Links */}
        <nav className="flex items-center gap-4 md:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-3 py-1 rounded-full transition text-sm md:text-base ${
                pathname === link.href
                  ? "bg-green-900 text-green-400 hover:text-green-600"
                  : "bg-green-900 text-green-400 hover:text-green-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        {/* Right Icons */}
        <div className="flex items-center gap-3 md:gap-4">
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