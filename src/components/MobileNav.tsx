"use client";
import { useState } from "react";
const NAV_LINKS: NavLink[] = [
  { label: "CITY_HUB", href: "#city-hub", icon: "hub", short: "HUB" },
  { label: "BIO_SECTOR", href: "#bio-sector", icon: "person", short: "BIO" },
  { label: "TECH_STACK", href: "#tech-stack", icon: "code", short: "TECH" },
  {
    label: "WORK_EXPERIENCE",
    href: "#work-experience",
    icon: "work",
    short: "WORK",
  },
  {
   label: "CeRTIFICATIONS",
   href: "#certifications",
   icon: "verified",
   short: "CERT",
  },
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
type NavLink = { label: string; href: string; icon: string; short: string };

function MobileNav() {
  const [activeTab, setActiveTab] = useState("#home");

  // Remove CV from bottom nav
  const orderedLinks = NAV_LINKS.filter((link) => link.short !== "CV");

  return (
    <>
      {/* Top Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 w-full z-50 h-14 px-5 flex items-center justify-between bg-surface-container-low/90 backdrop-blur-md border-b border-primary/20">
        {/* Name */}
        <h1 className="text-primary font-bold tracking-wider text-sm uppercase">
          Jawad Ahmad
        </h1>

        {/* CV Button */}
        <a
          href="/cv/jawad-ahmad.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="px-3 py-1.5 rounded-lg border border-primary/30 text-primary text-xs hover:bg-primary hover:text-black transition-all duration-300"
        >
          CV
        </a>
      </div>

      {/* Bottom Mobile Navigation */}
      <nav
        aria-label="Mobile navigation"
        className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-evenly items-center h-16 bg-surface-container-low/90 backdrop-blur-md border-t border-primary/20"
      >
        {orderedLinks.map(({ href, icon, short }) => {
          const isActive = activeTab === href;

          return (
            <a
              key={href}
              href={href}
              onClick={() => setActiveTab(href)}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-all duration-300 ${
                isActive
                  ? "text-primary-container bg-primary/10"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              <span
                className={`material-symbols-outlined text-[20px] transition-transform duration-300 ${
                  isActive ? "scale-110" : ""
                }`}
              >
                {icon}
              </span>

              <span className="font-label-caps text-[10px] mt-1">{short}</span>
            </a>
          );
        })}
      </nav>
    </>
  );
}

export default MobileNav;