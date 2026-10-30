import React, { useState, useEffect, useRef } from 'react';
import { ArrowUp, Sparkles, Building2, Palette, ShieldCheck, ChevronDown, Check } from 'lucide-react';

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
  const currentPreset = presets[activePresetIndex];

  // Typing effect simulation
  useEffect(() => {
    let timeout: NodeJS.Timeout;
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
        // Wait before transitioning to next preset
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
      {/* ================= CINEMATIC AMBIENT ORB SYSTEM — 5 independent layers ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {/* LAYER A — Amber/Orange beacon, upper-left, slow sweeping drift */}
        <div
          className="ambient-orb ambient-orb-amber-hero"
          style={{
            width: '78vw',
            height: '78vw',
            maxWidth: 1040,
            maxHeight: 1040,
            top: '-14%',
            left: '-14%',
            background:
              'radial-gradient(ellipse 72% 62% at 35% 30%, rgba(245,158,11,0.82) 0%, rgba(234,88,12,0.58) 34%, rgba(180,83,9,0.28) 60%, transparent 82%)',
          }}
        />

        {/* LAYER B — Emerald pool, lower-left, rising arc */}
        <div
          className="ambient-orb ambient-orb-emerald-hero"
          style={{
            width: '72vw',
            height: '72vw',
            maxWidth: 980,
            maxHeight: 980,
            bottom: '-20%',
            left: '-10%',
            background:
              'radial-gradient(circle 640px at 38% 68%, rgba(16,185,129,0.64) 0%, rgba(5,150,105,0.40) 40%, rgba(4,120,87,0.16) 66%, transparent 84%)',
          }}
        />

        {/* LAYER C — Bronze/champagne, upper-right, counter to amber */}
        <div
          className="ambient-orb ambient-orb-bronze-hero"
          style={{
            width: '70vw',
            height: '70vw',
            maxWidth: 960,
            maxHeight: 960,
            top: '-12%',
            right: '-14%',
            background:
              'radial-gradient(circle 660px at 72% 32%, rgba(214,183,121,0.52) 0%, rgba(234,88,12,0.33) 46%, rgba(152,106,60,0.14) 70%, transparent 86%)',
          }}
        />

        {/* LAYER D — Secondary green, lower-center, slow meander */}
        <div
          className="ambient-orb ambient-orb-green2-hero"
          style={{
            width: '56vw',
            height: '56vw',
            maxWidth: 720,
            maxHeight: 720,
            bottom: '-22%',
            left: '18%',
            background:
              'radial-gradient(ellipse at center, rgba(20,158,110,0.34) 0%, rgba(16,185,129,0.18) 45%, transparent 80%)',
          }}
        />

        {/* LAYER E — Warm central veil (text contrast preserved) */}
        <div
          className="ambient-orb ambient-orb-center-hero"
          style={{
            width: '64vw',
            height: '64vw',
            maxWidth: 820,
            maxHeight: 820,
            top: '8%',
            left: '18%',
            background:
              'radial-gradient(ellipse at center, rgba(180,83,9,0.14) 0%, rgba(214,140,50,0.08) 50%, transparent 78%)',
          }}
        />

        {/* Deep center vignette — headline stays readable */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 900px 600px at center, rgba(7,7,7,0.76) 0%, rgba(7,7,7,0.42) 55%, transparent 95%)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070707]/28 via-transparent to-[#070707]/58 pointer-events-none" />
      </div>

      {/* ================= HERO MAIN CONTENT ================= */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center my-auto pt-4 sm:pt-8">
        
        {/* ROW 1: HEADLINE WITH EMBEDDED INTERACTIVE PILLS (EXACT SCREENSHOT LAYOUT) */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 text-lg sm:text-3xl md:text-4xl lg:text-[42px] font-medium text-white/95 tracking-tight mb-2">
          <span className="font-sans font-light text-neutral-300">Let</span>

          {/* Pill 1: Avatar Pill [ 👤 ALTIMATE ] */}
          <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 sm:px-3.5 sm:py-1.5 rounded-full ios-glass-pill shadow-lg">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-tr from-[#D6B779] to-[#EA580C] p-[1px] flex items-center justify-center overflow-hidden">
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

          {/* Pill 2: Purple / Indigo Tinted Pill [ 👥 Architecture / Interiors ] */}
          <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 sm:px-3.5 sm:py-1.5 rounded-full bg-[#3B1D54]/75 border border-[#A855F7]/35 backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_20px_rgba(168,85,247,0.25)]">
            <Building2 className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#C084FC]" />
            <span className="text-xs sm:text-base md:text-lg font-semibold text-white tracking-normal">
              {currentPreset.team}
            </span>
          </div>

          <span className="font-sans font-light text-neutral-300">create</span>

          {/* Pill 3: Glass Pill [ 🖼️ Project Space ] */}
          <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 sm:px-3.5 sm:py-1.5 rounded-full ios-glass-pill shadow-lg">
            <Palette className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D6B779]" />
            <span className="text-xs sm:text-base md:text-lg font-semibold text-white tracking-normal truncate max-w-[150px] sm:max-w-[200px]">
              {currentPreset.project}
            </span>
          </div>
        </div>

        {/* ROW 2: LARGE BOLD PUNCHLINE (EXACT SCREENSHOT: "On brand. Every time.") */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold text-white tracking-tight leading-[1.08] mt-1 sm:mt-2">
          Beyond ordinary. Every time.
        </h1>

        {/* ================= ROW 3: INTERACTIVE DESIGN STUDIO CONSOLE BOX (EXACT SCREENSHOT) ================= */}
        <div className="w-full max-w-2xl mt-8 sm:mt-10">
          <form
            onSubmit={handleSubmit}
            className="relative w-full rounded-[24px] sm:rounded-[32px] ios-glass border border-white/[0.14] hover:border-white/25 transition-all duration-500 p-4 sm:p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.22),0_25px_60px_rgba(0,0,0,0.85),0_0_35px_rgba(234,88,12,0.12)] flex flex-col justify-between min-h-[155px] sm:min-h-[195px] text-left group"
          >
            {/* Inner Content Area */}
            <div className="w-full pr-12">
              <div className="text-sm sm:text-base md:text-[17px] text-neutral-300 font-light leading-relaxed">
                <span className="text-neutral-400">Opening concept for </span>

                {/* Inline Orange Tag inside prompt [ 🟠 My Brand / Space ] */}
                <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-[#EA580C]/20 border border-[#EA580C]/40 text-[#FB923C] text-xs sm:text-sm font-medium align-middle mx-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C] animate-pulse" />
                  <span>{currentPreset.chip}</span>
                </span>

                <span className="text-neutral-200">
                  {customInput ? customInput : typedText.replace(currentPreset.chip, '')}
                </span>

                {/* Blinking Cursor */}
                <span className="inline-block w-[2px] h-4 sm:h-5 bg-[#EA580C] ml-1 align-middle animate-pulse" />
              </div>
            </div>

            {/* Bottom Row inside Console Box: Presets & Action Button */}
            <div className="flex items-center justify-between pt-4 mt-auto">
              {/* Preset suggestion chips */}
              <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-1">
                {presets.map((preset, idx) => (
                  <button
                    key={preset.chip}
                    type="button"
                    onClick={() => handleSelectPreset(idx)}
                    className={`text-[11px] sm:text-xs px-2.5 py-1 rounded-full transition-all duration-200 whitespace-nowrap ${
                      activePresetIndex === idx
                        ? 'bg-white/15 text-white border border-white/25'
                        : 'bg-white/5 text-neutral-400 hover:text-neutral-200 hover:bg-white/10 border border-transparent'
                    }`}
                  >
                    {preset.chip}
                  </button>
                ))}
              </div>

              {/* Circular Action Button in Bottom-Right (Vibrant Orange Up-Arrow) */}
              <button
                type="submit"
                aria-label="Generate Architectural Concept"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-[#EA580C] via-[#F97316] to-[#FB923C] flex items-center justify-center text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_0_25px_rgba(234,88,12,0.6)] transition-transform duration-300 hover:scale-110 active:scale-95 flex-shrink-0 ml-3 focus:outline-none"
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

        {/* ================= ROW 4: SUPPORTING DESCRIPTION BENEATH CONSOLE ================= */}
        <p className="mt-5 sm:mt-6 text-xs sm:text-[13px] md:text-sm text-neutral-400 max-w-xl mx-auto leading-relaxed font-normal">
          Describe your space. ALTIMATE&apos;s luxury studio orchestrates the whole set: blueprints,
          bespoke joinery, curated materials, 3D renders. Turnkey execution. Impeccably delivered in Dubai.
        </p>

        {/* ================= ROW 5: CALL-TO-ACTION BUTTONS (EXACT SCREENSHOT STYLE) ================= */}
        <div className="mt-7 sm:mt-8 flex items-center justify-center space-x-4 sm:space-x-5">
          {/* Left Button: Translucent Pill "Get started" */}
          <a
            href="#showcase"
            className="px-6 sm:px-8 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs sm:text-[13px] font-medium tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-sm backdrop-blur-md"
          >
            Get started
          </a>

          {/* Right Button: Vibrant Amber/Orange Pill "Contact sales" */}
          <a
            href="#contact"
            className="px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#E58A3C] hover:brightness-110 text-white text-xs sm:text-[13px] font-semibold tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_28px_rgba(234,88,12,0.45)] hover:shadow-[0_0_36px_rgba(234,88,12,0.65)]"
          >
            Contact sales
          </a>
        </div>
      </div>

      {/* ================= ROW 6: BOTTOM SCROLL INDICATOR ================= */}
      <div className="relative z-10 pt-4 flex flex-col items-center space-y-1">
        <a
          href="#showcase"
          className="group flex flex-col items-center text-neutral-500 hover:text-[#EA580C] transition-colors focus:outline-none"
          aria-label="Scroll down to explore"
        >
          <span className="text-xs sm:text-sm transition-transform duration-300 group-hover:translate-y-0.5">
            ↓
          </span>
          <span className="text-[11px] sm:text-xs tracking-wider text-neutral-400 group-hover:text-neutral-200 transition-colors">
            Scroll down to explore
          </span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
