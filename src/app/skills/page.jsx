"use client";
import { FaCode, FaLightbulb, FaUsers } from "react-icons/fa";
import React from "react";

const skillCards = [
  {
    id: "frontend",
    icon: FaCode,
    title: "Frontend Development",
    desc: "Modern frontend technologies & frameworks for performant UIs.",
    tags: ["HTML5", "CSS3", "JavaScript", "Next.js"],
    level: 92,
  },
  {
    id: "languages",
    icon: FaLightbulb,
    title: "Programming Languages",
    desc: "Proficient in multiple languages for building reliable systems.",
    tags: ["JavaScript", "Java", "C++"],
    level: 84,
  },
  {
    id: "frameworks",
    icon: FaUsers,
    title: "Frameworks & Tooling",
    desc: "Cutting-edge frameworks and developer tools for fast iteration.",
    tags: ["Next.js", "Tailwind CSS", "Git"],
    level: 88,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#0b0d12] text-slate-200 py-20"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2
          id="skills-heading"
          className="text-center text-4xl md:text-5xl font-mono font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400"
        >
          My Skills
        </h2>

        <p className="mt-4 text-center text-sm text-slate-400 max-w-2xl mx-auto">
          Practical expertise focused on shipping production-ready applications
          with performance and developer experience in mind.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.id}
                className="relative group bg-slate-800/60 border border-slate-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all focus-within:-translate-y-1"
                tabIndex={0}
                aria-labelledby={`${card.id}-title`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-black inline-flex">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1">
                    <h3
                      id={`${card.id}-title`}
                      className="text-lg font-semibold text-slate-100"
                    >
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-300">{card.desc}</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {card.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-300 font-medium">
                      Proficiency
                    </span>
                    <span className="text-xs text-slate-400">
                      {card.level}%
                    </span>
                  </div>

                  <div className="mt-2 w-full h-2 rounded-full bg-slate-700 overflow-hidden">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-1000 ease-out"
                      style={{ width: `${card.level}%` }}
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
