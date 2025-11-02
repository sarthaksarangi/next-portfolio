import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { SkillsSection } from "./components/SkillsSection";
import { Navbar } from "./components/Navbar";

// Section Divider Component
function SectionDivider() {
  return (
    <div className="relative w-full h-px my-16 sm:my-20 md:my-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-pulse" />
    </div>
  );
}

export default function WebDeveloperPortfolio() {
  return (
    <main className="min-h-screen bg-[#0D1117] text-white relative overflow-hidden">
      {/* Global background gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#0D1117] via-[#0a0e14] to-[#0D1117] pointer-events-none -z-10" />

      <Navbar />
      <HeroSection />
      <SectionDivider />
      <SkillsSection />
      <SectionDivider />
      <ProjectsSection />
      <SectionDivider />
      <ContactSection />
    </main>
  );
}
