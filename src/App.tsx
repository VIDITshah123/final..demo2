import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FloatingShowcase } from './components/FloatingShowcase';
import { InteractiveStudio } from './components/InteractiveStudio';
import { TheDifference } from './components/TheDifference';
import { ConnectedWorkflow } from './components/ConnectedWorkflow';
import { TurnkeyVelocity } from './components/TurnkeyVelocity';
import { ImmersiveEmblem } from './components/ImmersiveEmblem';
import { OneVisionEverySpace } from './components/OneVisionEverySpace';
import { ProjectEnquiries } from './components/ProjectEnquiries';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#070707] text-[#F4F0E8] selection:bg-[#D6B779]/25 selection:text-[#F4F0E8]">
      {/* Global Luxury Navigation */}
      <Navbar />

      {/* Main Content Sections matching user references exactly */}
      <main className="w-full">
        {/* Hero Section (Atmospheric glows, dynamic tokens, live console) */}
        <Hero />

        {/* Section 2: Floating Architectural Showcase (Pinned 3-stage constellation) */}
        <FloatingShowcase />

        {/* Interactive Studio (Real-time spatial visualization canvas) */}
        <InteractiveStudio />

        {/* The Difference (Comparison engine with 4-dot vertical selector) */}
        <TheDifference />

        {/* Connected Specifications & Materiality Kit (SVG bezier curve cables) */}
        <ConnectedWorkflow />

        {/* Turnkey Velocity (Sweeping green curved architectural ribbon & capacity metrics) */}
        <TurnkeyVelocity />

        {/* Immersive Chronograph Dial & Floating Constellation */}
        <ImmersiveEmblem />

        {/* One Vision, Every Space (Interactive tabbed architectural portfolio) */}
        <OneVisionEverySpace />

        {/* Turnkey FAQ Accordion & Project Engagement Tiers */}
        <ProjectEnquiries />
      </main>

      {/* Luxury Footer */}
      <Footer />
    </div>
  );
};

export default App;
