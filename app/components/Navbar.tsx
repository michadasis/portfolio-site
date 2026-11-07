"use client";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// One page: every link is an in-page anchor.
const navLinks = [
  { id: "about", name: "About" },
  { id: "experience", name: "Experience" },
  { id: "projects", name: "Projects" },
  { id: "skills", name: "Skills" },
  { id: "contact", name: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);
  // While a click on a link scrolls the page, keep that link highlighted.
  const clickLock = useRef(false);
  const unlockTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // The active link follows whichever section has reached the upper part
  // of the screen. Contact is short, so reaching the bottom counts as it.
  useEffect(() => {
    const update = () => {
      const line = window.innerHeight * 0.35;
      let current = navLinks[0].id;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el && el.getBoundingClientRect().top <= line) current = link.id;
      }
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) current = navLinks[navLinks.length - 1].id;
      setActive(current);
    };

    const onScroll = () => {
      if (clickLock.current) {
        // Unlock once the scroll started by the click has settled.
        if (unlockTimer.current) clearTimeout(unlockTimer.current);
        unlockTimer.current = setTimeout(() => {
          clickLock.current = false;
        }, 150);
        return;
      }
      update();
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      if (unlockTimer.current) clearTimeout(unlockTimer.current);
    };
  }, []);

  const handleNavClick = (id: string) => {
    setActive(id);
    setOpen(false);
    clickLock.current = true;
    // Fallback in case the click doesn't scroll at all.
    if (unlockTimer.current) clearTimeout(unlockTimer.current);
    unlockTimer.current = setTimeout(() => {
      clickLock.current = false;
    }, 1000);
  };

  const linkClass = (id: string) =>
    `px-3 py-1 rounded-full border transition text-sm font-semibold ${
      active === id
        ? "bg-green-500/20 text-green-300 border-green-500"
        : "text-green-400 border-transparent hover:text-green-200"
    }`;

  return (
    <header className="w-full bg-black/90 backdrop-blur border-b border-green-900/60 fixed top-0 left-0 z-50 font-mono">
      <div className="max-w-3xl mx-auto flex items-center justify-between gap-4 px-6 py-3">
        {/* Logo */}
        <a href="#about" className="flex items-center gap-2 min-w-0" onClick={() => handleNavClick("about")}>
          <div className="w-8 h-8 rounded-full bg-green-900 overflow-hidden flex-shrink-0">
            <img src="/mich.png" alt="" className="w-full h-full object-cover" />
          </div>
          <span className="font-semibold text-green-400 whitespace-nowrap truncate">
            Ioannis Michadasis
          </span>
        </a>

        {/* Navigation Links */}
        <nav aria-label="Sections" className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => handleNavClick(link.id)}
              aria-current={active === link.id ? "location" : undefined}
              className={linkClass(link.id)}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-green-400 hover:text-green-200 transition"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Sections"
          className="md:hidden border-t border-green-900/60 px-6 py-3 flex flex-col items-start gap-1"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => handleNavClick(link.id)}
              aria-current={active === link.id ? "location" : undefined}
              className={linkClass(link.id)}
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
