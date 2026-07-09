import React from "react";
import { ContactSection } from "./components/ContactSection.jsx";
import { ExpertiseSection } from "./components/ExpertiseSection.jsx";
import { HeroSection } from "./components/HeroSection.jsx";
import { NavBar } from "./components/NavBar.jsx";
import { ProjectGridSection } from "./components/ProjectGridSection.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <NavBar />
      <main>
        <HeroSection />
        <ExpertiseSection />
        <ProjectGridSection />
        <ContactSection />
      </main>
    </div>
  );
}
