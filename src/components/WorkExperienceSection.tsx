type Experience = {
  role: string;
  company: string;
  duration: string;
  type?: string;
  points: string[];
  color: "primary" | "secondary" | "tertiary";
};

type Society = {
  role: string;
  org: string;
};

const EXPERIENCES: Experience[] = [
  {
    role: "Frontend Web Development Intern",
    company: "Anemoia",
    duration: "July 2025 — August 2025",
    type: "6 Weeks",
    color: "primary",
    points: [
      "Worked with HTML, JavaScript, Next.js and Tailwind CSS to build responsive frontend interfaces.",
      "Applied UI/UX principles to improve accessibility, layout structure and user experience.",
      "Integrated interactive components and modern frontend features into web applications.",
      "Collaborated with team members to understand requirements and refine project implementations.",
      "Strengthened professional communication through regular discussions with mentors and teams.",
    ],
  },

  {
    role: "ChangeMaker Ambassador",
    company: "DataCrumbs",
    duration: "February 2026 — March 2026",
    type: "Remote • 6 Weeks",
    color: "secondary",
    points: [
      "Represented and expanded the ChangeMakers student community on campus.",
      "Helped students improve career readiness through resume and LinkedIn workshops.",
      "Connected peers with mentorship opportunities, CV banks and career resources.",
      "Promoted networking, collaboration and professional growth initiatives.",
    ],
  },
];

const SOCIETIES: Society[] = [
  {
    role: "Media Manager",
    org: "COMSATS Heritage Society",
  },
  {
    role: "Marketing Co-Lead",
    org: "Student Startup Business Society",
  },
  {
    role: "Senior Media Member",
    org: "COMSATS Sports Society",
  },
  {
    role: "General Member",
    org: "GDGoC CUI Wah",
  },
];

const EXPERIENCE_STYLES = {
  primary: {
    border: "border-primary/20",
    glow: "hover:shadow-[0_0_25px_rgba(0,245,255,0.18)]",
    title: "text-primary",
    badge: "bg-primary/10 text-primary-fixed",
  },

  secondary: {
    border: "border-secondary/20",
    glow: "hover:shadow-[0_0_25px_rgba(132,5,207,0.18)]",
    title: "text-secondary",
    badge: "bg-secondary/10 text-secondary-fixed",
  },

  tertiary: {
    border: "border-tertiary/20",
    glow: "hover:shadow-[0_0_25px_rgba(255,170,0,0.18)]",
    title: "text-tertiary",
    badge: "bg-tertiary/10 text-tertiary-fixed",
  },
};

function ExperienceCard({
  exp,
}: {
  exp: Experience;
}) {
  const styles = EXPERIENCE_STYLES[exp.color];

  return (
    <article
      className={`
        glass-panel rounded-2xl border p-6 md:p-8
        transition-all duration-300 hover:-translate-y-1
        ${styles.border}
        ${styles.glow}
      `}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

        <div>
          <h3
            className={`text-2xl md:text-3xl font-bold uppercase tracking-wide ${styles.title}`}
          >
            {exp.role}
          </h3>

          <p className="text-on-surface-variant mt-1 uppercase tracking-[0.15em] text-sm">
            {exp.company}
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end gap-2">
          <span
            className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.2em] ${styles.badge}`}
          >
            {exp.type}
          </span>

          <span className="text-sm text-outline uppercase tracking-wide">
            {exp.duration}
          </span>
        </div>
      </div>

      {/* Points */}
      <ul className="space-y-4">
        {exp.points.map((point, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-on-surface-variant"
          >
            <span className="mt-1 text-primary">
              ▹
            </span>

            <p className="leading-relaxed">
              {point}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}

function WorkExperienceSection() {
  return (
    <section
      id="work-experience"
      className="relative z-20 py-24"
    >
      <div className="container mx-auto px-margin-mobile md:px-margin-desktop">

        {/* Heading */}
        <div className="flex items-center gap-4 mb-14 border-b border-primary/20 pb-5">

          <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
            <span className="material-symbols-outlined text-primary text-3xl">
              work_history
            </span>
          </div>

          <div>

            <p className="text-sm uppercase tracking-[0.2em] text-on-surface-variant mt-1">
              Professional Journey & Leadership
            </p>
          </div>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {EXPERIENCES.map((exp) => (
            <ExperienceCard
              key={exp.role}
              exp={exp}
            />
          ))}
        </div>

        {/* University Societies */}
        <div className="mt-20">

          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-secondary text-3xl">
              groups
            </span>

            <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-wide text-secondary">
              University Societies
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {SOCIETIES.map((society) => (
              <div
                key={society.org}
                className="
                  glass-panel border border-secondary/15
                  rounded-2xl p-5
                  hover:border-secondary/30
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >
                <p className="text-secondary font-semibold uppercase tracking-wide">
                  {society.role}
                </p>

                <p className="text-on-surface-variant mt-2">
                  {society.org}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkExperienceSection;