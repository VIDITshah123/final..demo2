import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FloatingShowcase } from './components/FloatingShowcase';
import { InteractiveStudio } from './components/InteractiveStudio';
import { HorizontalExperience } from './components/HorizontalExperience';
import { ProjectEnquiries } from './components/ProjectEnquiries';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#070707] text-[#F4F0E8] selection:bg-[#D6B779]/25 selection:text-[#F4F0E8]">
      {/* Global Luxury Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="w-full">
        {/* 1. Hero Section (Atmospheric glows, dynamic tokens, interactive prompt console) */}
        <Hero />

        {/* 2. Floating Architectural Showcase (Pinned 3-stage constellation) */}
        <FloatingShowcase />

        {/* 3. Interactive Studio (Spatial visualization workspace) */}
        <InteractiveStudio />

        {/* 4. Horizontal Experience (Seamless scroll-driven horizontal track hosting:
            - Slide 1: The Difference (Comparison engine with 4-dot selector)
            - Slide 2: Materiality & Specs Kit ("Your aesthetic, built in." where the Green Line starts)
            - Slide 3: Turnkey Velocity ("More precision. Zero burnout." with continuous Green Ribbon)
            - Slide 4: Immersive Chronograph Dial (Where the Green Line tapers)
            - Slide 5: One Vision Every Space (Interactive tabbed gallery)
        ) */}
        <HorizontalExperience />

        {/* 5. Turnkey FAQ Accordion & Project Engagement Tiers */}
        <ProjectEnquiries />
      </main>

      {/* Luxury Footer */}
      <Footer />
    </div>
  );
};

export default App;
