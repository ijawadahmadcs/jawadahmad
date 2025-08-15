"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-50 transition-all duration-300"
      id="navbar"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Jawad
          </div>

          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="relative py-2 px-4 text-gray-700 hover:text-blue-600 transition-all duration-300 group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link
              href="/about"
              className="relative py-2 px-4 text-gray-700 hover:text-blue-600 transition-all duration-300 group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link
              href="/skills"
              className="relative py-2 px-4 text-gray-700 hover:text-blue-600 transition-all duration-300 group"
            >
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link
              href="/projects"
              className="relative py-2 px-4 text-gray-700 hover:text-blue-600 transition-all duration-300 group"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link
              href="/contact"
              className="relative py-2 px-4 text-gray-700 hover:text-blue-600 transition-all duration-300 group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          <button
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <Link
            href="/"
            className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors relative"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 "></span>
          </Link>

          <Link
            href="/about"
            className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors relative"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 "></span>
          </Link>

          <Link
            href="/skills"
            className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors relative"
          >
            Skills
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600"></span>
          </Link>

          <Link
            href="/projects"
            className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors relative"
          >
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600"></span>
          </Link>

          <Link
            href="/contact"
            className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors relative"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600"></span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
