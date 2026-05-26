import Image from "next/image";

type Project = {
  id: string;
  title: string;
  desc: string;
  img: string;
  tags: string[];
  repo: string;
  live?: string;
  color: "primary" | "secondary" | "tertiary";
};

const PROJECTS: Project[] = [
  {
    id: "PRJ-001",
    title: "PixelToPen",
    desc: "Transforms typed text, PDF and DOCX files into realistic handwritten assignments with notebook-style rendering and PDF export.",
    img: "/images/project1.jpeg",
    tags: ["Next.js", "Tailwind", "Python"],
    repo: "https://github.com/ijawadahmadcs/pixeltopen",
    live: "https://pixeltopen.vercel.app/",
    color: "primary",
  },
  {
    id: "PRJ-002",
    title: "IdeasPlanner",
    desc: "Professional UI redesign focused on improved navigation, contact flows and responsive experience.",
    img: "/images/project2.PNG",
    tags: ["Next.js", "UI/UX"],
    repo: "https://github.com/ijawadahmadcs/ideasplanner",
    live: "https://ideasplanner.vercel.app",
    color: "primary",
  },
  {
    id: "PRJ-003",
    title: "RisexCreative",
    desc: "Modern cinematic agency portfolio with immersive UI, responsive layouts and polished frontend animations.",
    img: "/images/project3.PNG",
    tags: ["Next.js", "Tailwind"],
    repo: "https://github.com/ijawadahmadcs/risexcreative",
    live: "https://risexcreative.com/",
    color: "secondary",
  },
  {
    id: "PRJ-004",
    title: "E-Commerce",
    desc: "Responsive storefront UI with product browsing, cart experience and theme switching optimized for performance.",
    img: "/images/project4.png",
    tags: ["Next.js", "JavaScript"],
    repo: "https://github.com/ijawadahmadcs/e-commerence.git",
    live: "https://picksyy.vercel.app",
    color: "tertiary",
  },
  {
    id: "PRJ-005",
    title: "Clustr",
    desc: "Twitter-inspired social media application supporting authentication, posts, likes and comments.",
    img: "/images/project5.jpg",
    tags: ["Next.js", "Social App"],
    repo: "https://github.com/ijawadahmadcs/clustr",
    live: "https://clustrapp.vercel.app",
    color: "secondary",
  },
   {
    id: "PRJ-006",
    title: "Rydex",
    desc: "Ride-sharing system built with Java and MySQL featuring booking workflows, payments and dual UI modes.",
    img: "/images/project6.png",
    tags: ["Java", "MySQL"],
    repo: "https://github.com/ijawadahmadcs/rydex",
    color: "secondary",
  },
  {
    id: "PRJ-07",
    title: "Net-Spector",
    desc: "Interactive network analyzer visualizing live packet traffic across all five OSI model layers.",
    img: "/images/project7.png",
    tags: ["Next.js", "Node.js"],
    repo: "https://github.com/ijawadahmadcs/net-spector",
    live: "https://net-spector.vercel.app/",
    color: "tertiary",
  },
  {
    id: "PRJ-008",
    title: "Amazon Clone",
    desc: "Frontend replica of Amazon homepage built to practice responsive layouts and complex UI structures.",
    img: "/images/project8.png",
    tags: ["HTML5", "Tailwind"],
    repo: "https://github.com/ijawadahmadcs/Amazon.git",
    color: "primary",
  },
  {
    id: "PRJ-009",
    title: "Travel Management",
    desc: "Management system with authentication, booking operations and structured admin dashboard workflows.",
    img: "/images/project9.jpg",
    tags: ["C++"],
    repo: "https://github.com/ijawadahmadcs/travel-and-tour-management.git",
    color: "tertiary",
  },
];

const PROJECT_STYLES: Record<
  Project["color"],
  { glow: string; badge: string; title: string; button: string }
> = {
  primary: {
    glow: "hover:shadow-[0_0_25px_rgba(0,245,255,0.18)]",
    badge: "bg-primary/20 text-primary-container",
    title: "text-primary-fixed",
    button: "hover:bg-primary hover:text-black",
  },

  secondary: {
    glow: "hover:shadow-[0_0_25px_rgba(132,5,207,0.2)]",
    badge: "bg-secondary/20 text-secondary-container",
    title: "text-secondary-fixed",
    button: "hover:bg-secondary hover:text-white",
  },

  tertiary: {
    glow: "hover:shadow-[0_0_25px_rgba(255,170,0,0.18)]",
    badge: "bg-tertiary/20 text-tertiary-container",
    title: "text-tertiary-fixed",
    button: "hover:bg-tertiary hover:text-black",
  },
};

function ProjectCard({ project }: { project: Project }) {
  const styles = PROJECT_STYLES[project.color];

  return (
    <article
      className={`
        group glass-panel neon-border rounded-2xl overflow-hidden
        border border-white/5 transition-all duration-500
        hover:-translate-y-2 ${styles.glow}
      `}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={project.img}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />

        <span
          className={`absolute top-4 right-4 text-[10px] px-3 py-1 rounded-full uppercase tracking-widest ${styles.badge}`}
        >
          Active
        </span>
      </div>

      {/* Content */}
      <div className="p-6">

        {/* Title */}
        <h3
          className={`text-2xl font-bold uppercase tracking-wide mb-3 ${styles.title}`}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-on-surface-variant mb-5">
          {project.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full border border-primary/15 bg-black/20 text-on-surface-variant"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">

          <span className="text-xs uppercase tracking-[0.25em] text-outline">
            {project.id}
          </span>

          <div className="flex gap-3">

            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                w-10 h-10 rounded-full border border-primary/20
                flex items-center justify-center transition-all duration-300
                ${styles.button}
              `}
            >
              <span className="material-symbols-outlined text-[18px]">
                code
              </span>
            </a>

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  w-10 h-10 rounded-full border border-primary/20
                  flex items-center justify-center transition-all duration-300
                  ${styles.button}
                `}
              >
                <span className="material-symbols-outlined text-[18px]">
                  open_in_new
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectsSection() {
  return (
    <section id="project-district" className="relative z-20 py-24">
      <div className="container mx-auto px-margin-mobile md:px-margin-desktop">

        {/* Heading */}
        <div className="flex items-center gap-4 mb-14 border-b border-secondary/20 pb-5">

          <div className="p-3 rounded-xl bg-secondary/10 border border-secondary/20">
            <span
              className="material-symbols-outlined text-secondary-fixed-dim text-3xl"
              aria-hidden="true"
            >
              folder_data
            </span>
          </div>

          <div>
           

            <p className="text-sm uppercase tracking-[0.2em] text-on-surface-variant mt-1">
              Featured Development Work
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;