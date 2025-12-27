"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return true;
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const toggleMenu = () => setMenuOpen((v) => !v);
  const toggleTheme = () => setIsDark((v) => !v);

  return (
    <header
      role="navigation"
      aria-label="Main navigation"
      className="fixed inset-x-0 top-4 z-50 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`flex items-center justify-between gap-4 px-4 py-3 rounded-xl backdrop-blur-md border shadow-lg
            ${
              isDark
                ? "bg-[#0f172a]/80 border-slate-800"
                : "bg-white/80 border-slate-200"
            }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`font-mono text-lg md:text-xl font-semibold ${
                isDark ? "text-slate-100" : "text-slate-900"
              }`}
            >
              Jawad
            </div>
            <div className="hidden md:block text-xs text-slate-400 select-none">
              frontend.dev
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm text-slate-300 hover:text-slate-100 px-1 py-2 transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <a
              href="/jawad.pdf"
              download
              className="ml-2 inline-flex items-center gap-2 text-xs font-medium
                         bg-slate-200 text-slate-900 px-3 py-1.5 rounded-md
                         hover:bg-slate-100 transition"
            >
              CV
            </a>
          </nav>

          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-slate-300 hover:text-white transition"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden mt-2 transition-all duration-200 ${
          menuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        } overflow-hidden`}
      >
        <div
          className={`rounded-xl px-3 py-3 border shadow-lg
            ${
              isDark
                ? "bg-[#0f172a]/90 border-slate-800"
                : "bg-white/90 border-slate-200"
            }`}
        >
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-slate-200 hover:bg-slate-800/30 transition"
              >
                {link.name}
              </Link>
            ))}

            <div className="mt-3 border-t border-slate-700/40 pt-3">
              <a
                href="/jawad.pdf"
                download
                className="inline-flex items-center gap-2 text-sm
                           bg-slate-200 text-slate-900 px-3 py-1.5 rounded-md"
              >
                CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
