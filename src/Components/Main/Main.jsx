import Link from "next/link";
import React from "react";

const Main = () => {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white"
      >
        {/* Background gradients — same for all themes */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />

        <div className="text-center z-10 px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            Hi, I'm Jawad Ahmad
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            A professional web developer specializing in creating beautiful,
            functional websites and applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition transform hover:scale-105 shadow-lg"
            >
              Get in touch
            </Link>
            <Link
              href="/projects"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold transition transform hover:scale-105"
            >
              View My Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
