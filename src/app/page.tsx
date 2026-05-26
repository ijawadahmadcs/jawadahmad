"use client";
import { useState } from "react";
import DesktopNav from "../components/DesktopNav";
import MobileNav from "../components/MobileNav";
import HeroSection from "../components/HeroSection";
import BioSection from "../components/BioSection";
import TechStackSection from "../components/TechStackSection";
import ProjectsSection from "../components/ProjectsSection";
import CertificationsSection from "../components/CertificationsSection";
import WorkExperienceSection from "../components/WorkExperienceSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <>
      <DesktopNav />
      <MobileNav />

      <main className="pt-16 pb-20 md:pb-0">
        <HeroSection />
        <BioSection />
        <TechStackSection />
        <WorkExperienceSection/>
        <CertificationsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
