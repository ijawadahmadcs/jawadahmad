import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#0b0d12] text-slate-200 py-20"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2
          id="about-heading"
          className="text-center text-4xl md:text-5xl font-mono font-semibold
                     bg-clip-text text-transparent
                     bg-gradient-to-r from-slate-200 via-slate-400 to-slate-500"
        >
          About Me
        </h2>

        <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
          {/* Image Card */}
          <div className="relative group">
            <div
              className="absolute -inset-1 rounded-2xl
                            bg-white/5 opacity-0
                            group-hover:opacity-100
                            transition-opacity blur-lg pointer-events-none"
            />

            <div
              className="relative rounded-2xl overflow-hidden
                         bg-[#0f1117] border border-slate-800 shadow-xl"
              role="img"
              aria-label="Portrait of Jawad Ahmad"
            >
              <Image
                src="/images/jawad.jpg"
                alt="Jawad Ahmad portrait"
                width={1200}
                height={1200}
                className="w-full h-full object-cover rounded-2xl
                           transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-slate-100">Who I Am</h3>

            <div className="text-slate-300 space-y-4 leading-relaxed">
              <p>
                Hi, I`m Jawad Ahmad, a passionate web developer who loves
                turning ideas into real, functional websites. I specialize in
                building clean, responsive, and user-friendly web experiences
                using modern technologies like HTML, CSS, JavaScript, and
                Next.js.
              </p>

              <p>
                I enjoy working on real-world projects that challenge my skills
                and help me grow as a developer. From creating simple static
                pages to developing dynamic web applications, I focus on writing
                clean code, following best practices, and delivering
                high-quality results.
              </p>
              <p>
                My goal is to continuously learn new technologies, improve my
                problem-solving skills, and build products that make a positive
                impact. I`m always open to new opportunities, collaborations,
                and exciting projects.
              </p>
              <p>
                When I`m not coding, I enjoy exploring new tech trends and
                improving my development workflow.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                "Next.js",
                "Tailwind CSS",
                "JavaScript",
                "HTML5",
                "Python",
                "C++",
                "Java",
              ].map((t) => (
                <span
                  key={t}
                  className="text-xs font-medium px-3 py-1 rounded-md
                             bg-[#12151c] border border-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="text-sm text-slate-400">
              Available for frontend, React, and Next.js roles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
