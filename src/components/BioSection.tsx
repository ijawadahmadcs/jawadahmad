function BioSection() {
  return (
    <section id="bio-sector" className="py-20 relative z-20">
      <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-5xl">

        <div className="glass-panel neon-border rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(0,245,255,0.12)]">

          {/* Terminal Header */}
          <div className="bg-surface-container-high px-4 py-3 flex items-center justify-between border-b border-primary/20">
            <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest">
              BIO_SECTOR.EXE
            </span>

            <div className="flex gap-2" aria-hidden="true">
              <div className="w-3 h-3 rounded-full bg-error-container animate-pulse" />
              <div className="w-3 h-3 rounded-full bg-tertiary-container animate-pulse" />
              <div className="w-3 h-3 rounded-full bg-primary-container animate-pulse" />
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 md:p-8 font-body-md text-on-surface-variant leading-relaxed space-y-5">

            {/* Intro */}
            <div>
              <p className="mb-2">
                <span className="text-secondary-fixed">
                  root@jawad:~$
                </span>{" "}
                cat identity.txt
              </p>

              <p className="text-primary-fixed">
                CS Undergraduate @ COMSATS University Islamabad Wah Campus
              </p>

              <p className="text-primary-fixed mt-1">
                CGPA: 3.77
              </p>

              <p className="text-primary-fixed mt-1">
                Status: SEEKING_INTERNSHIP
              </p>
            </div>

            {/* About */}
            <div>
              <p className="mb-2">
                <span className="text-secondary-fixed">
                  root@jawad:~$
                </span>{" "}
                load_profile.sh
              </p>

              <p>
                Passionate frontend developer focused on building visually
                interactive, responsive, and performance-oriented web
                applications with modern UI/UX experiences.
              </p>
            </div>

            {/* Skills */}
            <div>
              <p className="mb-3">
                <span className="text-secondary-fixed">
                  root@jawad:~$
                </span>{" "}
                skills --list
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "Next.js",
                  "React",
                  "Tailwind CSS",
                  "JavaScript",
                  "TypeScript",
                  "Firebase",
                  "MongoDB",
                  "UI/UX",
                  "Framer Motion",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary-fixed text-sm hover:bg-primary/10 hover:scale-105 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div>
              <p className="mb-3">
                <span className="text-secondary-fixed">
                  root@jawad:~$
                </span>{" "}
                ls featured_projects/
              </p>

              <div className="grid md:grid-cols-2 gap-4">

                <div className="p-4 rounded-xl border border-primary/15 bg-black/10 hover:bg-primary/5 transition-all duration-300">
                  <h3 className="text-primary font-semibold">
                    PixelTopen
                  </h3>

                  <p className="text-sm mt-2 text-on-surface-variant">
                    Fullstack platfrom to generate handwritten notes using AI, built with Next.js, Tailwind CSS, and Python for seamless user experience and real-time note generation.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-primary/15 bg-black/10 hover:bg-primary/5 transition-all duration-300">
                  <h3 className="text-primary font-semibold">
                    Rydex - Ride Sharing App
                  </h3>

                  <p className="text-sm mt-2 text-on-surface-variant">
                    Full-stack academic project focused on optimized database, OOP structure, and clean frontend integration.
                  </p>
                </div>

              </div>
            </div>

            {/* Footer Terminal */}
            <div className="pt-4">
              <p>
                <span className="text-secondary-fixed">
                  root@jawad:~$
                </span>{" "}
                <span className="terminal-cursor" aria-hidden="true" />
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default BioSection;