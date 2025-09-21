import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { SkillsSection } from "./components/SkillsSection";
import { Navbar } from "./components/Navbar";

export default function WebDeveloperPortfolio() {
  return (
    <main className="min-h-screen bg-[#0D1117] text-white">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
