"use client";
import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: "risexcreative",
    title: "RisexCreative",
    description:
      "A modern portfolio section featuring a cinematic video showcase and polished UI. Built with Next.js and Tailwind CSS — focused on responsiveness and subtle motion.",
    img: "/images/prog7.png",
    tags: ["Next.js", "Tailwind CSS", "JavaScript"],
    repo: "https://github.com/ijawadahmadcs/risexcreative",
    live: "https://risexcreative.com/",
  },
  {
    id: "ui-upgrade",
    title: "IdeasPlanner (UI upgrade)",
    description:
      "UI refresh for IdeasPlanner — improved navigation, footer, and contact flows. Built with Next.js and Tailwind CSS for a professional, mobile-friendly experience.",
    img: "/images/prog6.png",
    tags: ["Next.js", "Tailwind CSS"],
    repo: "https://github.com/ijawadahmadcs/ideasplanner",
    live: "https://ideasplanner.vercel.app",
  },
  {
    id: "ecommerce",
    title: "E-commerce Website",
    description:
      "Responsive e-commerce front-end with product listings, cart UX and theme switching. Built with Next.js and Tailwind CSS — focuses on clarity and performance.",
    img: "/images/prog1.png",
    tags: ["Next.js", "Tailwind CSS", "JavaScript"],
    repo: "https://github.com/ijawadahmadcs/e-commerence.git",
    live: "https://picksyy.vercel.app",
  },
  {
    id: "clustr",
    title: "Clustr — Social Media App",
    description:
      "Twitter-like social platform built with Next.js. Supports auth, posts, likes, and comments with a minimal responsive UI.",
    img: "/images/prog5.jpg",
    tags: ["Next.js", "Tailwind CSS"],
    repo: "https://github.com/ijawadahmadcs/clustr",
    live: "https://clustrapp.vercel.app",
  },
  {
    id: "amazon-clone",
    title: "Amazon Clone",
    description:
      "Front-end replica of Amazon's homepage to practice layout, design and responsive grid patterns using static assets.",
    img: "/images/prog3.png",
    tags: ["HTML5", "Tailwind CSS"],
    repo: "https://github.com/ijawadahmadcs/Amazon.git",
    live: "",
  },
  {
    id: "travel-system",
    title: "Travel & Tour Management",
    description:
      "A management system featuring login/auth, package and booking CRUD operations and tabular management UI.",
    img: "/images/prog2.jpg",
    tags: ["C++"],
    repo: "https://github.com/ijawadahmadcs/travel-and-tour-management.git",
    live: "",
  },
  {
    id: "snake-game",
    title: "Snake Water Gun",
    description:
      "Simple Python CLI game demonstrating game logic and randomization — practice project for algorithmic thinking.",
    img: "/images/prog4.jpg",
    tags: ["Python"],
    repo: "https://github.com/ijawadahmadcs/snake-water-gun-game",
    live: "",
  },
  {
    id: "rydex",
    title: "Rydex",
    description:
      "Rydex is a university-level ride-sharing application implemented in Java with a MySQL backend. It aims to connect riders and drivers with a simple booking workflow, supporting payments, feedback, vehicle and shifts management, and two UI modes: a Swing-based GUI and a CLI version.",
    img: "/images/prog8.png",
    tags: ["Java", "Java Swing", "MySQL"],
    repo: "https://github.com/ijawadahmadcs/rydex",
    live: "",
  },
  {
    id: "net-spector",
    title: "Net-Spector",
    description:
      "Net-Spector is a web-based network analyzer that lets you visualize live packet traffic across all five OSI model layers—from physical hex data to application protocols—built with Next.js and Node.js to transform networking theory into interactive, real-time insight.",
    img: "/images/prog9.png",
    tags: ["Python"],
    repo: "https://github.com/ijawadahmadcs/net-spector",
    live: "https://net-spector.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#0b0d12] text-slate-200 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-4xl md:text-5xl font-mono font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
          My Projects
        </h2>

        <p className="mt-4 text-center text-sm text-slate-400 max-w-2xl mx-auto">
          Selected projects showcasing front-end work, UI upgrades and
          full-stack experiments.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
              aria-labelledby={`${p.id}-title`}
            >
              <div className="relative w-full h-48 bg-slate-900">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-5">
                <h3
                  id={`${p.id}-title`}
                  className="text-lg font-semibold text-slate-100"
                >
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300 line-clamp-4">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-900/60 border border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${p.title} repository`}
                    className="inline-flex items-center gap-2 text-xs font-medium bg-[#0b0f19] hover:bg-[#0b0f19] text-white px-3 py-1.5 rounded-md transition transform hover:scale-105"
                  >
                    <FaGithub />
                    <span>Code</span>
                  </a>

                  {p.live ? (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open live site for ${p.title}`}
                      className="text-xs px-3 py-1.5 rounded-md border border-slate-700 text-slate-200 hover:bg-slate-800/40 transition"
                    >
                      Visit Site
                    </a>
                  ) : (
                    <button
                      disabled
                      className="text-xs px-3 py-1.5 rounded-md border border-slate-700 text-slate-500 bg-slate-900/30 cursor-not-allowed"
                      aria-hidden="true"
                    >
                      No Live Demo
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
