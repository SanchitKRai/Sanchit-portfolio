import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectsSection from './components/ProjectsSection'
import PersonalitySection from './components/PersonalitySection'
import CapabilitiesSection from './components/CapabilitiesSection'
import ProcessSection from './components/ProcessSection'
import AboutSection from './components/AboutSection'
import FaqSection from './components/FaqSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import ProjectModal from './components/ProjectModal'

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div className="min-h-screen bg-[#0b140f] text-[#eae4d7] relative flex flex-col font-sans selection:bg-[#e2a84b]/30 selection:text-[#fce4ba]">
      {/* Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenModal={(project) => setSelectedProject(project)} />
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
        <PersonalitySection />
        <CapabilitiesSection />
        <ProcessSection />
        <AboutSection />
        <FaqSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modal Lightbox */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  )
}
