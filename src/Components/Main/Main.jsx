import React from "react";

const stack = [
  "Next.js",
  "React",
  "JavaScript (ES6+)",
  "Tailwind CSS",
  "HTML5",
  "Python",
  "C++",
];

const Main = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#0b0f19] text-slate-100 px-6 pt-32"
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Jawad Ahmad
        </h1>

        <p className="mt-3 text-xl text-slate-300">Frontend Developer</p>

        <p className="mt-6 max-w-2xl text-slate-400 text-base leading-relaxed">
          Passionate about crafting engaging and user-friendly web experiences,
          I specialize in front-end development using modern technologies like
          React and Next.js. With a keen eye for design and detail, I strive to
          build responsive, accessible, and high-performance websites that not
          only look great but also deliver seamless user experiences.
        </p>

        <div className="mt-10">
          <h2 className="text-sm uppercase tracking-wide text-slate-500 mb-4">
            Tech Stack
          </h2>

          <div className="flex flex-wrap gap-3 max-w-3xl">
            {stack.map((tech) => (
              <span
                key={tech}
                className="text-sm text-slate-300 border border-slate-800 px-3 py-1.5 rounded-md hover:border-slate-600 transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-6">
          <a
            href="#projects"
            className="text-sm font-medium text-slate-100 underline underline-offset-4 hover:text-white transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-slate-100 underline underline-offset-4 hover:text-white transition"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default Main;
