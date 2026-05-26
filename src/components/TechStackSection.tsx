type TechTag = {
  label: string;
  color: "primary" | "secondary" | "tertiary" | "outline";
  icon: string;
};

const TECH_TAGS: TechTag[] = [
  { label: "Next.js", color: "secondary", icon: "bolt" },
  { label: "React.js", color: "primary", icon: "deployed_code" },
  { label: "Tailwind CSS", color: "primary", icon: "palette" },
  { label: "JavaScript", color: "tertiary", icon: "javascript" },
  {label: "TypeScript", color: "primary", icon: "code" },
  { label: "Figma", color: "primary", icon: "design_services" },
  { label: "Stitch", color: "secondary", icon: "link" },
  { label: "Git", color: "outline", icon: "fork_right" },
  { label: "GitHub", color: "outline", icon: "code" },
  {label: "MongoDB", color: "secondary", icon: "storage" },
  { label: "Firebase", color: "secondary", icon: "cloud" },
  { label: "Redux", color: "secondary", icon: "hub" },
  { label: "SQL", color: "outline", icon: "database" },
  { label: "C++", color: "tertiary", icon: "code_blocks" },
  { label: "Java", color: "tertiary", icon: "coffee" },
  { label: "Python", color: "tertiary", icon: "terminal" },
  { label: "Dart", color: "outline", icon: "rocket_launch" },
];

const TAG_STYLES: Record<TechTag["color"], string> = {
  primary:
    "border-primary/30 text-primary-fixed-dim bg-primary/5 hover:bg-primary/10 hover:shadow-[0_0_18px_rgba(0,245,255,0.25)]",

  secondary:
    "border-secondary/30 text-secondary-fixed-dim bg-secondary/5 hover:bg-secondary/10 hover:shadow-[0_0_18px_rgba(132,5,207,0.35)]",

  tertiary:
    "border-tertiary/30 text-tertiary-fixed-dim bg-tertiary/5 hover:bg-tertiary/10",

  outline:
    "border-outline/30 text-on-surface-variant bg-surface-container/40 hover:border-primary/30 hover:text-primary",
};

function TechStackSection() {
  return (
    <section
      id="tech-stack"
      className="relative z-20 py-24 bg-surface-container-low/40 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/10 blur-3xl rounded-full" />
      </div>

      <div className="relative container mx-auto px-margin-mobile md:px-margin-desktop">

        {/* Heading */}
        <div className="flex items-center gap-4 mb-14 border-b border-primary/20 pb-5">
          <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
            <span
              className="material-symbols-outlined text-primary-container text-3xl"
              aria-hidden="true"
            >
              memory
            </span>
          </div>

          <div>
            <p className="text-sm text-on-surface-variant mt-1 uppercase tracking-[0.2em]">
              Tools & Technologies I Work With
            </p>
          </div>
        </div>

        {/* Tech Grid */}
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 list-none p-0">
          {TECH_TAGS.map(({ label, color, icon }) => (
            <li
              key={label}
              className={`
                group glass-panel border rounded-2xl px-4 py-5
                flex flex-col items-center justify-center gap-3
                transition-all duration-300 hover:-translate-y-2
                ${TAG_STYLES[color]}
              `}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-black/20 border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-2xl">
                  {icon}
                </span>
              </div>

              {/* Label */}
              <span className="text-sm md:text-base font-medium tracking-wide text-center">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TechStackSection;