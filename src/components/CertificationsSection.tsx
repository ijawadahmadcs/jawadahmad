type Cert = {
  org: string;
  title: string;
  dot: string;
  glow: string;
  text: string;
};

const CERTS: Cert[] = [
  {
    org: "Microsoft",
    title: "Fundamentals of UI/UX Design",
    dot: "bg-primary-container",
    glow: "shadow-[0_0_10px_rgba(0,245,255,0.8)]",
    text: "text-primary-fixed-dim",
  },

  {
    org: "University of Michigan",
    title: "Python Basics",
    dot: "bg-tertiary-container",
    glow: "shadow-[0_0_10px_rgba(255,216,149,0.8)]",
    text: "text-tertiary-fixed-dim",
  },

  {
    org: "The Johns Hopkins University",
    title: "HTML, CSS & JavaScript for Web Developers",
    dot: "bg-secondary-container",
    glow: "shadow-[0_0_10px_rgba(132,5,207,0.8)]",
    text: "text-secondary-fixed-dim",
  },

  {
    org: "DataCrumbs",
    title: "Google Stitch",
    dot: "bg-primary-container",
    glow: "shadow-[0_0_10px_rgba(0,245,255,0.8)]",
    text: "text-primary-fixed-dim",
  },

  {
    org: "GDGoC CUI Wah",
    title: "Web Development Bootcamp",
    dot: "bg-secondary-container",
    glow: "shadow-[0_0_10px_rgba(132,5,207,0.8)]",
    text: "text-secondary-fixed-dim",
  },

  {
    org: "GDGoC CUI Wah",
    title: "React Bootcamp",
    dot: "bg-tertiary-container",
    glow: "shadow-[0_0_10px_rgba(255,216,149,0.8)]",
    text: "text-tertiary-fixed-dim",
  },
];

function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="py-20 relative z-20 bg-surface-container-low/50"
    >
      <div className="container mx-auto px-margin-mobile md:px-margin-desktop">

        <div className="flex items-center gap-4 mb-12 border-b border-primary/20 pb-4">
          <span
            className="material-symbols-outlined text-primary-container text-4xl"
            aria-hidden="true"
          >
            map
          </span>

          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">
            Certifications & Achievements
          </h2>
        </div>

        <ol className="relative border-l-2 border-primary/30 ml-4 md:ml-8 space-y-12 pb-8 list-none p-0">

          {CERTS.map(({ org, title, dot, glow, text }) => (
            <li key={title} className="relative pl-8">

              {/* Timeline Dot */}
              <div
                className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full ${dot} ${glow}`}
                aria-hidden="true"
              />

              {/* Card */}
              <div className="glass-panel p-4 border border-outline/20 rounded inline-block hover:border-primary/20 hover:-translate-y-1 transition-all duration-300">

                <h4 className="font-headline-sm text-body-lg font-bold text-on-surface uppercase">
                  {org}
                </h4>

                <p className={`font-label-caps mt-1 ${text}`}>
                  {title}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default CertificationsSection;