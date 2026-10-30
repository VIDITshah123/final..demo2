import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FloatingShowcase } from './components/FloatingShowcase';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#070707] text-[#F4F0E8] selection:bg-[#D6B779]/25 selection:text-[#F4F0E8]">
      {/* Global Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="w-full">
        {/* Section 1: Cinematic Full-Screen Hero */}
        <Hero />

        {/* Section 2: Floating Architectural Showcase (Pinned Sticky Scroll) */}
        <FloatingShowcase />
      </main>
    </div>
  );
};

export default App;
