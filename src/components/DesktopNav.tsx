""
import { useState } from "react";
type NavLink = { label: string; href: string; icon: string; short: string };
const NAV_LINKS: NavLink[] = [
  { label: "CITY_HUB", href: "#city-hub", icon: "hub", short: "HUB" },
  { label: "BIO_SECTOR", href: "#bio-sector", icon: "person", short: "BIO" },
  { label: "TECH_STACK", href: "#tech-stack", icon: "code", short: "TECH" },
  { label: "WORK_EXPERIENCE", href: "#work-experience", icon: "work", short: "WORK" },
  { label: "CeRTIFICATIONS", href: "#certifications", icon: "verified", short: "CERT" },
  {
    label: "PROJECT_DISTRICT",
    href: "#project-district",
    icon: "folder_open",
    short: "PROJ",
  },
  {
    label: "CONTACT",
    href: "#contact",
    icon: "mail",
    short: "CONT",
  },
];

function DesktopNav() {
  const [activeTab, setActiveTab] = useState("#home");

  // Remove CV from main nav links
  const navItems = NAV_LINKS.filter((link) => link.label !== "CV");

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-desktop h-16 bg-surface/60 backdrop-blur-xl border-b border-primary/30 shadow-[0_0_15px_rgba(0,245,255,0.2)]">
      {/* Logo */}
      <div className="flex items-center gap-4">
      </div>

      {/* Navigation */}
      <div className="hidden md:flex gap-3 items-center" role="list">
        {navItems.map(({ label, href }) => {
          const isActive = activeTab === href;

          return (
            <a
              key={href}
              href={href}
              role="listitem"
              onClick={() => setActiveTab(href)}
              className={`relative px-4 py-2 rounded-lg uppercase font-label-caps text-label-caps transition-all duration-300 ${
                isActive
                  ? "text-primary bg-primary/10 shadow-[0_4px_12px_-2px_rgba(0,245,255,0.5)]"
                  : "text-on-surface-variant hover:text-primary hover:bg-primary/5"
              }`}
            >
              {label}

              {/* Active underline animation */}
              <span
                className={`absolute left-1/2 -bottom-1 h-0.5 bg-primary transition-all duration-300 ${
                  isActive
                    ? "w-8 -translate-x-1/2 opacity-100"
                    : "w-0 opacity-0"
                }`}
              />
            </a>
          );
        })}
      </div>

      {/* CV Button */}
      <div className="flex items-center gap-4">
        <a
          href="/cv/jawad-ahmad.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="px-4 py-2 rounded-lg border border-primary/30 text-primary hover:bg-primary hover:text-black transition-all duration-300 shadow-[0_0_12px_rgba(0,245,255,0.25)] hover:shadow-[0_0_20px_rgba(0,245,255,0.45)]"
        >
          CV
        </a>
      </div>
    </nav>
  );
}

export default DesktopNav;