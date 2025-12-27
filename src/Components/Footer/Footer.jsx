import React from "react";
import Link from "next/link";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

/**
 * Clean technical Footer
 * - Dark, high-contrast to match hero/header
 * - Accessible social buttons, contact links (mailto/tel), "Back to top"
 * - Tailwind-only, no external deps beyond react-icons
 */

export default function Footer() {
  return (
    <footer className="bg-[#0b1220] text-slate-200 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Brand / short */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                <span className="font-mono font-semibold text-black text-sm">
                  JA
                </span>
              </div>
              <div>
                <div className="font-mono text-lg font-semibold">
                  Jawad Ahmad
                </div>
                <div className="text-xs text-slate-400">Frontend Engineer</div>
              </div>
            </div>

            <p className="mt-4 text-sm text-slate-300 max-w-xs">
              I build fast, accessible frontends with a focus on DX and
              performance. Reach out for collaborations or freelance work.
            </p>

            <a
              href="#home"
              className="inline-block mt-4 text-xs font-medium bg-slate-800/60 hover:bg-slate-800/80 text-slate-100 px-3 py-1.5 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 transition"
              aria-label="Back to top"
            >
              ↑ Back to top
            </a>
          </div>

          {/* Contact */}
          <div className="text-sm">
            <h3 className="text-slate-100 font-medium mb-3">Contact</h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:ijawadahmadcs@gmail.com"
                  className="flex items-center gap-3 text-slate-300 hover:text-slate-100 transition"
                  aria-label="Email Jawad"
                >
                  <FaEnvelope className="text-slate-400" />
                  <span>ijawadahmadcs@gmail.com</span>
                </a>
              </li>

              <li>
                <a
                  href="tel:+923105997585"
                  className="flex items-center gap-3 text-slate-300 hover:text-slate-100 transition"
                  aria-label="Call Jawad"
                >
                  <FaPhone className="text-slate-400" />
                  <span>+92 310 5997585</span>
                </a>
              </li>

              <li>
                <a
                  href="https://www.google.com/maps/search/Wah Cantt+Pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-300 hover:text-slate-100 transition"
                  aria-label="Open location in maps"
                >
                  <FaMapMarkerAlt className="text-slate-400" />
                  <span>Wah Cantt, Pakistan</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social / quick links */}
          <div>
            <h3 className="text-slate-100 font-medium mb-3">Find me</h3>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/ijawadahmadcs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub — Jawad Ahmad"
                className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 transition transform hover:scale-105"
              >
                <FaGithub className="text-slate-100" />
              </a>

              <a
                href="http://www.linkedin.com/in/ijawadahmadcs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn — Jawad Ahmad"
                className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 transition transform hover:scale-105"
              >
                <FaLinkedin className="text-slate-100" />
              </a>

              <a
                href="https://x.com/sheikhjawadx?t=pC1wu171p5rKoh7kd58eWg&s=09"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter) — Jawad Ahmad"
                className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 transition transform hover:scale-105"
              >
                <BsTwitterX className="text-slate-100" />
              </a>

              <a
                href="https://www.instagram.com/ijawadahmad_?igsh=MWk0NTN2eTJwZmo5aA=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram — Jawad Ahmad"
                className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 transition transform hover:scale-105"
              >
                <FaInstagram className="text-slate-100" />
              </a>
            </div>

            <div className="mt-4 flex gap-2 flex-wrap">
              <a
                href="/jawad.pdf"
                download
                className="text-xs px-3 py-1 rounded-md bg-cyan-400 text-black hover:opacity-95 transition"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800/50 pt-6 text-center text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Jawad Ahmad — Built with Next.js &
            Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}
