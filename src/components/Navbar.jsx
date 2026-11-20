import { useEffect, useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

const links = ["Home", "About", "Skills", "Projects"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#home" className="logo gradient-text">Hak Hai.</a>
        <nav className={`nav-links ${open ? "open" : ""}`}>
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>
          ))}
        </nav>
        <div className="nav-actions">
          <a href="/Hak Hai.pdf" download className="btn btn-outline nav-resume">Resume</a>
          <button className="icon-btn" aria-label="Toggle theme" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
          <button className="icon-btn menu-btn" aria-label="Menu" onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
}
