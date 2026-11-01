import React, { useState, useEffect } from 'react';
import { ArrowUp, Sparkles, Building2, Palette, ChevronDown, Check } from 'lucide-react';

interface PromptPreset {
  chip: string;
  query: string;
  lead: string;
  team: string;
  project: string;
}

const presets: PromptPreset[] = [
  {
    chip: 'Palm Jumeirah Villa',
    query: 'Turnkey architectural overhaul for beachfront villa with double-height marble foyer, floor-to-ceiling glass & infinity terrace',
    lead: 'ALTIMATE',
    team: 'Architecture',
    project: 'Palm Jumeirah Villa',
  },
  {
    chip: 'Downtown Penthouse',
    query: 'Bespoke interior fit-out for 8,500 sq ft triplex penthouse with customized bronze joinery, floating staircase & Italian travertine',
    lead: 'ALTIMATE',
    team: 'Interiors',
    project: 'Downtown Penthouse',
  },
  {
    chip: 'Emirates Hills Mansion',
    query: 'Contemporary architectural design & landscape planning with private wellness spa, subterranean lounge & smart automation',
    lead: 'ALTIMATE',
    team: 'Turnkey Fit-Out',
    project: 'Emirates Hills Mansion',
  },
  {
    chip: 'DIFC Executive Suite',
    query: 'High-end commercial headquarters fit-out with acoustic wood baffles, executive boardroom & panoramic Burj Khalifa vistas',
    lead: 'ALTIMATE',
    team: 'Commercial Studio',
    project: 'DIFC Executive Suite',
  },
];

export const Hero: React.FC = () => {
  const [activePresetIndex, setActivePresetIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [customInput, setCustomInput] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const currentPreset = presets[activePresetIndex];

  // Coordinated entrance trigger
  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Typing effect simulation
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const fullText = currentPreset.query;
    let charIndex = 0;
    setTypedText('');
    setIsTyping(true);

    const typeChar = () => {
      if (charIndex <= fullText.length) {
        setTypedText(fullText.slice(0, charIndex));
        charIndex++;
        timeout = setTimeout(typeChar, 28);
      } else {
        setIsTyping(false);
        timeout = setTimeout(() => {
          setActivePresetIndex((prev) => (prev + 1) % presets.length);
        }, 5500);
      }
    };

    timeout = setTimeout(typeChar, 400);

    return () => clearTimeout(timeout);
  }, [activePresetIndex]);

  const handleSelectPreset = (index: number) => {
    setActivePresetIndex(index);
    setCustomInput('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="relative min-h-[100svh] w-full flex flex-col justify-between items-center bg-[#070707] overflow-hidden pt-28 pb-10 px-4 sm:px-6 lg:px-8 select-none">
      
      {/* ================= DYNAMIC NEON AURORA WAVE ENGINE (Vibrant Neon Orange & Emerald Green Shifts) ================= */}
      <div
        className={`absolute inset-0 pointer-events-none overflow-hidden z-0 transition-opacity duration-1000 ease-out ${
          isMounted ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      >
        {/* WAVE 1 — Dynamic Emerald Green Wave (Shifts dynamically between states 0-3, matching Screenshots 6-9) */}
        <div
          className="ambient-orb ambient-orb-emerald-hero transition-all duration-1000 ease-out"
          style={{
            width: activePresetIndex === 0 ? '78vw' : activePresetIndex === 1 ? '58vw' : activePresetIndex === 2 ? '62vw' : '72vw',
            height: activePresetIndex === 0 ? '78vw' : activePresetIndex === 1 ? '58vw' : activePresetIndex === 2 ? '62vw' : '72vw',
            maxWidth: 1040,
            maxHeight: 1040,
            top: activePresetIndex === 0 ? '2%' : activePresetIndex === 1 ? '42%' : activePresetIndex === 2 ? '38%' : '8%',
            left: activePresetIndex === 0 ? '-14%' : activePresetIndex === 1 ? '8%' : activePresetIndex === 2 ? '28%' : '-10%',
            background:
              'radial-gradient(ellipse 70% 60% at 35% 40%, rgba(0,245,155,0.88) 0%, rgba(0,255,163,0.58) 36%, rgba(16,185,129,0.25) 68%, transparent 84%)',
          }}
        />

        {/* WAVE 2 — Dynamic Fiery Neon Orange Wave (Shifts dynamically between states 0-3, matching Screenshots 6-9) */}
        <div
          className="ambient-orb ambient-orb-amber-hero transition-all duration-1000 ease-out"
          style={{
            width: activePresetIndex === 1 ? '82vw' : '72vw',
            height: activePresetIndex === 1 ? '82vw' : '72vw',
            maxWidth: 1080,
            maxHeight: 1080,
            top: activePresetIndex === 0 ? '-12%' : activePresetIndex === 1 ? '-16%' : activePresetIndex === 2 ? '-10%' : '-14%',
            right: activePresetIndex === 0 ? '-10%' : activePresetIndex === 1 ? '6%' : activePresetIndex === 2 ? '-6%' : '-12%',
            background:
              activePresetIndex === 1
                ? 'radial-gradient(ellipse 80% 50% at 35% 35%, rgba(255,85,0,0.92) 0%, rgba(255,122,0,0.65) 36%, rgba(255,170,0,0.25) 65%, transparent 84%)'
                : 'radial-gradient(circle 660px at 65% 35%, rgba(255,85,0,0.85) 0%, rgba(255,122,0,0.60) 36%, rgba(245,158,11,0.22) 65%, transparent 84%)',
          }}
        />

        {/* WAVE 3 — Sunburst Gold / Diagonal Beam (Like Linearity Screenshot 7 & 8) */}
        <div
          className="ambient-orb ambient-orb-bronze-hero transition-all duration-1000 ease-out"
          style={{
            width: '64vw',
            height: '64vw',
            maxWidth: 880,
            maxHeight: 880,
            top: activePresetIndex === 2 ? '-8%' : '-15%',
            left: activePresetIndex === 2 ? '15%' : '35%',
            background:
              'radial-gradient(circle 620px at 50% 30%, rgba(255,170,0,0.78) 0%, rgba(234,88,12,0.48) 42%, rgba(180,83,9,0.18) 70%, transparent 86%)',
          }}
        />

        {/* WAVE 4 — Secondary Neon Mint Pulse */}
        <div
          className="ambient-orb ambient-orb-green2-hero transition-all duration-1000 ease-out"
          style={{
            width: '56vw',
            height: '56vw',
            maxWidth: 740,
            maxHeight: 740,
            bottom: '-16%',
            right: '-6%',
            background:
              'radial-gradient(ellipse at center, rgba(0,245,155,0.60) 0%, rgba(16,185,129,0.32) 46%, transparent 80%)',
          }}
        />

        {/* Localized contrast mask — Keeps headline and console razor-sharp while allowing neon waves to blaze around */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 680px 340px at 50% 46%, rgba(7,7,7,0.65) 0%, rgba(7,7,7,0.15) 60%, transparent 100%)',
          }}
        />
      </div>

      {/* ================= HERO MAIN CONTENT ================= */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center my-auto pt-4 sm:pt-8">
        
        {/* ROW 1: HEADLINE WITH EMBEDDED GLOSSY INTERACTIVE PILLS (Matching Linearity Screenshot) */}
        <div
          className={`flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 text-base sm:text-2xl md:text-3xl lg:text-[32px] font-medium text-white tracking-tight mb-2 transition-all duration-700 ease-out ${
            isMounted ? 'opacity-100 translate-y-0 filter-none' : 'opacity-0 translate-y-4 blur-[6px]'
          }`}
        >
          <span className="font-sans font-light text-neutral-300">Let</span>

          {/* Pill 1: Avatar Pill [ ALTIMATE Lead ] with Neon Green Glow (Like 'Jonas' in screenshot) */}
          <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 sm:px-3.5 sm:py-1.5 rounded-full neon-pill-green transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-tr from-[#00F59B] to-[#10B981] p-[1px] flex items-center justify-center overflow-hidden shadow-[0_0_10px_rgba(0,245,155,0.8)]">
              <img
                src="/images/P12.jpeg"
                alt="ALTIMATE Lead"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="text-xs sm:text-base md:text-lg font-semibold text-white tracking-normal">
              {currentPreset.lead}
            </span>
          </div>

          <span className="font-sans font-light text-neutral-300">from</span>

          {/* Pill 2: Neon Orange / Amber Glowing Pill [ Department ] (Like 'Support' / 'Ecommerce' in screenshot) */}
          <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 sm:px-3.5 sm:py-1.5 rounded-full neon-pill-orange transition-all duration-300 hover:scale-105 cursor-pointer">
            <Building2 className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#FFA057]" />
            <span className="text-xs sm:text-base md:text-lg font-semibold text-white tracking-normal">
              {currentPreset.team}
            </span>
          </div>

          <span className="font-sans font-light text-neutral-300">create</span>

          {/* Pill 3: Glossy Glass Pill [ Project Space ] (Like 'Status Banner' in screenshot) */}
          <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 sm:px-3.5 sm:py-1.5 rounded-full neon-btn-glass shadow-lg hover:border-white/40 transition-all duration-300 hover:scale-105 cursor-pointer">
            <Palette className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D6B779]" />
            <span className="text-xs sm:text-base md:text-lg font-semibold text-white tracking-normal truncate max-w-[150px] sm:max-w-[200px]">
              {currentPreset.project}
            </span>
          </div>
        </div>

        {/* ROW 2: LARGE BOLD PUNCHLINE (Staggered Entrance) */}
        <h1
          className={`text-2xl sm:text-4xl md:text-5xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.08] mt-1 sm:mt-2 transition-all duration-700 delay-150 ease-out ${
            isMounted ? 'opacity-100 translate-y-0 filter-none' : 'opacity-0 translate-y-4 blur-[6px]'
          }`}
        >
          Beyond ordinary. Every time.
        </h1>

        {/* ================= ROW 3: ULTRA-GLOSSY DESIGN STUDIO CONSOLE BOX ================= */}
        <div
          className={`w-full max-w-2xl mt-8 sm:mt-10 transition-all duration-800 delay-300 ease-out ${
            isMounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-[0.98]'
          }`}
        >
          <form
            onSubmit={handleSubmit}
            className="relative w-full rounded-[24px] sm:rounded-[32px] liquid-glass hover:border-white/40 transition-all duration-500 p-4 sm:p-7 flex flex-col justify-between min-h-[155px] sm:min-h-[195px] text-left group shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.4),0_25px_60px_rgba(0,0,0,0.85),0_0_35px_rgba(255,107,0,0.18)]"
          >
            {/* Top Specular Sheen Stripe */}
            <div className="absolute top-0 inset-x-0 h-10 bg-gradient-to-b from-white/[0.14] to-transparent pointer-events-none rounded-t-[24px] sm:rounded-t-[32px]" />

            {/* Inner Content Area */}
            <div className="w-full pr-12 relative z-10">
              <div className="text-sm sm:text-base md:text-[17px] text-neutral-300 font-light leading-relaxed">
                <span className="text-neutral-400">Opening concept for </span>

                {/* Inline Glowing Orange Tag inside prompt (Like 'My Brand' in screenshot) */}
                <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-[#FF5500]/25 border border-[#FF7A00]/60 text-[#FFA057] text-xs sm:text-sm font-medium align-middle mx-1 shadow-[0_0_16px_rgba(255,85,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.4)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00] animate-pulse" />
                  <span>{currentPreset.chip}</span>
                </span>

                <span className="text-neutral-200">
                  {customInput ? customInput : typedText.replace(currentPreset.chip, '')}
                </span>

                {/* Blinking Neon Orange Cursor */}
                <span className="inline-block w-[2px] h-4 sm:h-5 bg-[#FF7A00] ml-1 align-middle animate-pulse shadow-[0_0_8px_#FF7A00]" />
              </div>
            </div>

            {/* Bottom Row inside Console Box: Presets & Action Button */}
            <div className="flex items-center justify-between pt-4 mt-auto relative z-10">
              {/* Preset suggestion chips */}
              <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-1">
                {presets.map((preset, idx) => (
                  <button
                    key={preset.chip}
                    type="button"
                    onClick={() => handleSelectPreset(idx)}
                    className={`text-[11px] sm:text-xs px-3 py-1 rounded-full transition-all duration-300 whitespace-nowrap ${
                      activePresetIndex === idx
                        ? 'bg-white/20 text-white border border-white/40 shadow-[0_0_14px_rgba(255,255,255,0.3),inset_0_1px_1px_rgba(255,255,255,0.5)]'
                        : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-white/5'
                    }`}
                  >
                    {preset.chip}
                  </button>
                ))}
              </div>

              {/* High-Gloss Circular Neon Orange Submit Button */}
              <button
                type="submit"
                aria-label="Generate Architectural Concept"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full neon-btn-orange flex items-center justify-center text-white flex-shrink-0 ml-3 focus:outline-none"
              >
                {submitted ? (
                  <Check className="w-5 h-5 text-white" />
                ) : (
                  <ArrowUp className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </form>
        </div>

        {/* ================= ROW 4 & 5: SUPPORTING DESCRIPTION & HIGH-GLOSS CTAs ================= */}
        <div
          className={`w-full flex flex-col items-center transition-all duration-700 delay-500 ease-out ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="mt-5 sm:mt-6 text-xs sm:text-[13px] md:text-sm text-neutral-400 max-w-xl mx-auto leading-relaxed font-normal">
            Describe your space. ALTIMATE&apos;s luxury studio orchestrates the whole set: blueprints,
            bespoke joinery, curated materials, 3D renders. Turnkey execution. Impeccably delivered in Dubai.
          </p>

          <div className="mt-7 sm:mt-8 flex items-center justify-center space-x-4 sm:space-x-5">
            {/* Left Button: Ultra-Glossy Glass Pill "Get started" */}
            <a
              href="#showcase"
              className="px-6 sm:px-8 py-3 rounded-full neon-btn-glass text-xs sm:text-[13px] font-medium tracking-wide"
            >
              Get started
            </a>

            {/* Right Button: Ultra-Glossy Neon Orange Pill "Contact sales" (Matching Screenshot) */}
            <a
              href="#contact"
              className="px-6 sm:px-8 py-3 rounded-full neon-btn-orange text-xs sm:text-[13px] font-semibold tracking-wide"
            >
              Contact sales
            </a>
          </div>
        </div>
      </div>

      {/* ================= ROW 6: BOTTOM SCROLL INDICATOR ================= */}
      <div
        className={`relative z-10 pt-4 flex flex-col items-center space-y-1 transition-all duration-700 delay-700 ease-out ${
          isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        <a
          href="#showcase"
          className="group flex flex-col items-center text-neutral-500 hover:text-[#FF7A00] transition-colors focus:outline-none"
          aria-label="Scroll down to explore"
        >
          <ChevronDown className="w-4 h-4 text-[#FF7A00] animate-bounce transition-transform duration-300" />
          <span className="text-[11px] sm:text-xs tracking-wider text-neutral-400 group-hover:text-neutral-200 transition-colors">
            Scroll down to explore
          </span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
