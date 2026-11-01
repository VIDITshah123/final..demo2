import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  Crop,
  Globe,
  Share2,
  MessageSquare,
  ChevronDown,
  ArrowUp,
  Check,
  Palette
} from 'lucide-react';

interface TabItem {
  id: 'envision' | 'refine' | 'deliver';
  title: string;
  icon: React.ReactNode;
  badgeColor: string;
  description: string;
}

const tabs: TabItem[] = [
  {
    id: 'envision',
    title: 'Envision it',
    icon: <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />,
    badgeColor: '#D6B779',
    description:
      'Describe what you desire in plain words: a Palm Jumeirah beachfront villa, a duplex penthouse salon, or bespoke Italian marble suites. ALTIMATE translates your brief into refined spatial blueprints.',
  },
  {
    id: 'refine',
    title: 'Refine it',
    icon: <Crop className="w-4 h-4 sm:w-5 sm:h-5" />,
    badgeColor: '#EA580C',
    description:
      'Change spatial layouts, swap bookmatched Calacatta marble, customize bronze millwork, and fine-tune lighting temperatures. Complete creative control before construction starts.',
  },
  {
    id: 'deliver',
    title: 'Deliver everywhere',
    icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5" />,
    badgeColor: '#10B981',
    description:
      'A unified architectural aesthetic engineered across every room: living salons, master suites, culinary spaces, and wellness sanctuaries. Flawless turnkey handover across Dubai.',
  },
];

const swatches = [
  { name: 'Calacatta Oro', color: 'from-[#F4F0E8] to-[#D6B779]', border: 'border-[#D6B779]' },
  { name: 'Brushed Bronze', color: 'from-[#C4823F] to-[#986A3C]', border: 'border-[#C4823F]' },
  { name: 'Smoked Oak', color: 'from-[#2C241E] to-[#171412]', border: 'border-white/20' },
  { name: 'Nero Marquina', color: 'from-[#141414] to-[#0A0A0A]', border: 'border-white/30' },
];

export const InteractiveStudio: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [selectedSwatch, setSelectedSwatch] = useState('Calacatta Oro');
  const [shareCopied, setShareCopied] = useState(false);

  // ================= SCROLL-TRIGGERED ACCORDION & PHOTO MORPH =================
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) {
            ticking = false;
            return;
          }

          const rect = containerRef.current.getBoundingClientRect();
          const totalScrollable = Math.max(1, containerRef.current.offsetHeight - window.innerHeight);
          const currentScroll = Math.max(0, -rect.top);
          const progress = Math.max(0, Math.min(1, currentScroll / totalScrollable));

          // 3 Distinct Zones: 0.0 - 0.33 (Envision), 0.33 - 0.66 (Refine), 0.66 - 1.0 (Deliver)
          if (progress < 0.33) {
            setActiveTabIndex(0);
          } else if (progress < 0.66) {
            setActiveTabIndex(1);
          } else {
            setActiveTabIndex(2);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentTab = tabs[activeTabIndex];

  // Smooth click scroll to step
  const handleBoxClick = (index: number) => {
    setActiveTabIndex(index);
    if (!containerRef.current) return;
    const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
    const targetScroll = containerRef.current.offsetTop + (index / 2.05) * totalScrollable;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  const handleShare = () => {
    setShareCopied(true);
    navigator.clipboard?.writeText(window.location.href);
    setTimeout(() => setShareCopied(false), 2500);
  };

  return (
    <div
      id="methodology"
      ref={containerRef}
      className="relative w-full h-[280vh] sm:h-[300vh] bg-[#070707]"
    >
      {/* ================= PINNED STICKY VIEWPORT CONTAINER ================= */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-[#070707] select-none px-3 sm:px-6 lg:px-12 border-t border-white/5">
        
        {/* ================= DYNAMIC NEON AURORA WAVE ENGINE (Interactive Studio) ================= */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
          {/* Left Neon Orange Wave */}
          <div
            className="ambient-orb ambient-orb-amber-hero"
            style={{
              width: '68vw',
              height: '68vw',
              maxWidth: 920,
              maxHeight: 920,
              top: '5%',
              left: '-14%',
              background:
                'radial-gradient(ellipse 70% 60% at 35% 35%, rgba(255,85,0,0.85) 0%, rgba(255,122,0,0.55) 36%, rgba(245,158,11,0.22) 65%, transparent 84%)',
            }}
          />

          {/* Right Neon Emerald Wave */}
          <div
            className="ambient-orb ambient-orb-emerald-hero"
            style={{
              width: '66vw',
              height: '66vw',
              maxWidth: 900,
              maxHeight: 900,
              bottom: '-10%',
              right: '-10%',
              background:
                'radial-gradient(circle 650px at 65% 65%, rgba(0,245,155,0.85) 0%, rgba(0,255,163,0.55) 36%, rgba(16,185,129,0.22) 65%, transparent 84%)',
            }}
          />

          {/* Subtle center vignette */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 680px 380px at center, rgba(7,7,7,0.65) 0%, rgba(7,7,7,0.15) 60%, transparent 100%)',
            }}
          />
        </div>

        {/* ================= MAIN SPLIT CONTAINER ================= */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-6 lg:gap-14 items-center pt-12 sm:pt-14 lg:pt-0">
          
          {/* ================= LEFT COLUMN: CANVAS (CHANGES ON SCROLL) ================= */}
          <div className="lg:col-span-7 w-full order-2 lg:order-1">
            <div className="relative w-full h-[220px] sm:h-[360px] lg:h-[460px] rounded-xl sm:rounded-[32px] liquid-glass border border-white/20 border-t-white/80 shadow-[inset_0_2px_3px_rgba(255,255,255,0.65),0_30px_80px_rgba(0,0,0,0.85),0_0_30px_rgba(0,245,155,0.15)] p-2.5 sm:p-5 lg:p-6 flex flex-col justify-between overflow-hidden group">
              {/* Glass Specular Sheen */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.07] pointer-events-none rounded-xl sm:rounded-[32px]" />
              
              {/* Canvas Header Bar */}
              <div className="flex items-center justify-between pb-1.5 sm:pb-2.5 border-b border-white/5 z-20">
                <div className="flex items-center space-x-1.5 sm:space-x-2">
                  <span
                    className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full animate-pulse"
                    style={{ backgroundColor: currentTab.badgeColor }}
                  />
                  <span className="text-[9px] sm:text-[11px] font-mono tracking-widest text-[#D6B779] uppercase">
                    ALTIMATE STUDIO WORKSPACE
                  </span>
                </div>

                {/* Top-Right Control Capsule */}
                <div className="flex items-center space-x-1.5 sm:space-x-2">
                  <div className="hidden sm:flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs">
                    <MessageSquare className="w-3.5 h-3.5 text-neutral-400" />
                    <div className="w-4 h-4 rounded-full bg-[#D6B779] text-[#070707] font-bold text-[9px] flex items-center justify-center">
                      A
                    </div>
                    <ChevronDown className="w-3 h-3 text-neutral-400" />
                  </div>

                  <button
                    type="button"
                    onClick={handleShare}
                    className="inline-flex items-center space-x-1 sm:space-x-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white text-[10px] sm:text-xs font-medium transition-colors"
                  >
                    {shareCopied ? (
                      <>
                        <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#10B981]" />
                        <span className="text-[10px] sm:text-[11px] text-[#10B981]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        <span className="text-[10px] sm:text-[11px]">Share</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Canvas Interactive Display Stage (3 Smooth Morphing States) */}
              <div className="relative flex-1 w-full my-1 sm:my-2 flex items-center justify-center overflow-hidden">
                
                {/* ================= STATE 1: ENVISION IT ================= */}
                <div
                  className={`absolute inset-0 flex flex-col justify-between p-0.5 sm:p-2 transition-all duration-500 ease-out ${
                    activeTabIndex === 0
                      ? 'opacity-100 scale-100 pointer-events-auto z-10 translate-y-0'
                      : 'opacity-0 scale-95 pointer-events-none z-0 translate-y-2'
                  }`}
                >
                  {/* Architectural Conceptual Render Card */}
                  <div className="relative w-[92%] sm:w-[82%] max-w-md mx-auto h-[120px] sm:h-[220px] lg:h-[250px] rounded-lg sm:rounded-xl overflow-hidden border border-white/15 shadow-2xl bg-black/40 group/card">
                    <img
                      src="/images/P04.jpeg"
                      alt="Palm Jumeirah Villa Blueprint Concept"
                      className="w-full h-full object-cover filter brightness-95 contrast-105 group-hover/card:scale-105 transition-transform duration-700"
                    />

                    {/* Corner Markers */}
                    <div className="absolute top-1.5 left-1.5 text-white/50 font-mono text-[8px] sm:text-[10px]">+</div>
                    <div className="absolute top-1.5 right-1.5 text-white/50 font-mono text-[8px] sm:text-[10px]">+</div>
                    <div className="absolute bottom-1.5 left-1.5 text-white/50 font-mono text-[8px] sm:text-[10px]">+</div>
                    <div className="absolute bottom-1.5 right-1.5 text-white/50 font-mono text-[8px] sm:text-[10px]">+</div>

                    {/* Badge */}
                    <div className="absolute top-2 left-2 px-1.5 sm:px-2 py-0.5 rounded bg-black/70 backdrop-blur-md border border-white/10 text-[7px] sm:text-[9px] font-mono tracking-wider text-[#D6B779] uppercase">
                      PALM JUMEIRAH ESTATE · 14,000 SQ FT
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-2 sm:p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                      <p className="font-bold text-[11px] sm:text-sm text-white">VILLA LUMIÈRE</p>
                      <p className="text-[9px] sm:text-[11px] text-neutral-300 truncate">Turnkey Concept &amp; Double-Height Architecture</p>
                    </div>
                  </div>

                  {/* Bottom Prompt Console (Inside Canvas) */}
                  <div className="w-full max-w-lg mx-auto rounded-lg sm:rounded-xl bg-[#1C1A17] border border-white/15 p-1.5 sm:p-2.5 shadow-xl flex items-center justify-between">
                    <div className="flex-1 pr-2 min-w-0">
                      <div className="flex items-center space-x-1.5 text-[8px] sm:text-[10px] font-medium text-[#D6B779] uppercase tracking-wider">
                        <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        <span>Architectural Brief</span>
                        <ChevronDown className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-neutral-400" />
                      </div>
                      <p className="text-[9px] sm:text-xs text-neutral-200 font-light truncate">
                        Beachfront villa with double-height marble foyer, glass &amp; terrace
                      </p>
                    </div>

                    <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-[#EA580C] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                      <ArrowUp className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </div>
                  </div>
                </div>

                {/* ================= STATE 2: REFINE IT ================= */}
                <div
                  className={`absolute inset-0 flex flex-col justify-between p-0.5 sm:p-2 transition-all duration-500 ease-out ${
                    activeTabIndex === 1
                      ? 'opacity-100 scale-100 pointer-events-auto z-10 translate-y-0'
                      : 'opacity-0 scale-95 pointer-events-none z-0 translate-y-2'
                  }`}
                >
                  {/* Swatch Selector floating above */}
                  <div className="flex items-center justify-center space-x-1 sm:space-x-2 pb-1 overflow-x-auto no-scrollbar">
                    {swatches.map((swatch) => (
                      <button
                        key={swatch.name}
                        type="button"
                        onClick={() => setSelectedSwatch(swatch.name)}
                        className={`px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[8px] sm:text-[10px] font-mono tracking-wider uppercase transition-all duration-200 border shrink-0 ${
                          selectedSwatch === swatch.name
                            ? `${swatch.border} bg-white/15 text-white shadow-sm`
                            : 'border-white/10 bg-white/5 text-neutral-400 hover:text-white'
                        }`}
                      >
                        {swatch.name}
                      </button>
                    ))}
                  </div>

                  {/* Active Transform Bounding Box Card with Corner & Side Handles */}
                  <div className="relative w-[92%] sm:w-[82%] max-w-md mx-auto h-[120px] sm:h-[220px] lg:h-[250px] rounded-lg sm:rounded-xl overflow-hidden border-2 border-[#D6B779] shadow-2xl bg-black/40">
                    <img
                      src="/images/P07.jpeg"
                      alt="Refined Living Salon"
                      className="w-full h-full object-cover filter brightness-95 contrast-105"
                    />

                    {/* Transform Handles (Circles on Corners) */}
                    <div className="absolute -top-1 -left-1 sm:-top-1.5 sm:-left-1.5 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#D6B779] border sm:border-2 border-[#070707] shadow" />
                    <div className="absolute -top-1 -right-1 sm:-top-1.5 sm:-right-1.5 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#D6B779] border sm:border-2 border-[#070707] shadow" />
                    <div className="absolute -bottom-1 -left-1 sm:-bottom-1.5 sm:-left-1.5 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#D6B779] border sm:border-2 border-[#070707] shadow" />
                    <div className="absolute -bottom-1 -right-1 sm:-bottom-1.5 sm:-right-1.5 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#D6B779] border sm:border-2 border-[#070707] shadow" />

                    {/* Side Pill Handles */}
                    <div className="hidden sm:block absolute top-1/2 -left-1.5 -translate-y-1/2 w-2 h-5 rounded-full bg-white border border-neutral-700 shadow" />
                    <div className="hidden sm:block absolute top-1/2 -right-1.5 -translate-y-1/2 w-2 h-5 rounded-full bg-white border border-neutral-700 shadow" />

                    {/* Active Material Tag */}
                    <div className="absolute top-2 left-2 px-1.5 sm:px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-[#D6B779]/40 text-[7px] sm:text-[9px] font-mono tracking-wider text-[#D6B779] uppercase flex items-center space-x-1 sm:space-x-1.5">
                      <Palette className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#D6B779]" />
                      <span>{selectedSwatch}</span>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-2 sm:p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end justify-between">
                      <div>
                        <p className="font-bold text-[11px] sm:text-sm text-white">GRAND LIVING SALON</p>
                        <p className="text-[9px] sm:text-[11px] text-neutral-300 truncate">Custom Travertine &amp; Bronze Joinery</p>
                      </div>
                      <span className="text-[7px] sm:text-[9px] font-mono text-[#D6B779] bg-[#D6B779]/20 px-1.5 sm:px-2 py-0.5 rounded border border-[#D6B779]/30">
                        EDITING
                      </span>
                    </div>
                  </div>

                  {/* Floating Action Pill */}
                  <div className="flex items-center justify-center pt-1">
                    <div className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#1C1A17] border border-[#D6B779]/30 text-[9px] sm:text-xs text-neutral-200 flex items-center space-x-1.5 sm:space-x-2 shadow-lg">
                      <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#D6B779]" />
                      <span>Adjusting spatial geometry &amp; materials</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
                    </div>
                  </div>
                </div>

                {/* ================= STATE 3: DELIVER EVERYWHERE ================= */}
                <div
                  className={`absolute inset-0 flex flex-col justify-between p-0.5 sm:p-2 transition-all duration-500 ease-out ${
                    activeTabIndex === 2
                      ? 'opacity-100 scale-100 pointer-events-auto z-10 translate-y-0'
                      : 'opacity-0 scale-95 pointer-events-none z-0 translate-y-2'
                  }`}
                >
                  {/* Coordinated Multi-Space Estate Grid */}
                  <div className="grid grid-cols-3 gap-1 sm:gap-2 w-full h-[120px] sm:h-[220px] lg:h-[250px]">
                    <div className="relative rounded-md sm:rounded-lg overflow-hidden border border-white/10 group">
                      <img src="/images/P01.jpeg" alt="Living Salon" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-1 sm:p-1.5">
                        <span className="text-[7px] sm:text-[9px] font-mono uppercase text-white truncate">01. Living</span>
                      </div>
                    </div>

                    <div className="relative rounded-md sm:rounded-lg overflow-hidden border border-white/10 group">
                      <img src="/images/P15.jpeg" alt="Culinary Suite" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-1 sm:p-1.5">
                        <span className="text-[7px] sm:text-[9px] font-mono uppercase text-white truncate">02. Culinary</span>
                      </div>
                    </div>

                    <div className="relative rounded-md sm:rounded-lg overflow-hidden border border-white/10 group">
                      <img src="/images/P10.jpeg" alt="Master Suite" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-1 sm:p-1.5">
                        <span className="text-[7px] sm:text-[9px] font-mono uppercase text-white truncate">03. Master</span>
                      </div>
                    </div>

                    <div className="relative rounded-md sm:rounded-lg overflow-hidden border border-white/10 group">
                      <img src="/images/P19.jpeg" alt="Spa Bathroom" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-1 sm:p-1.5">
                        <span className="text-[7px] sm:text-[9px] font-mono uppercase text-white truncate">04. Spa</span>
                      </div>
                    </div>

                    <div className="relative rounded-md sm:rounded-lg overflow-hidden border border-white/10 group">
                      <img src="/images/P14.jpeg" alt="Dining Room" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-1 sm:p-1.5">
                        <span className="text-[7px] sm:text-[9px] font-mono uppercase text-white truncate">05. Dining</span>
                      </div>
                    </div>

                    <div className="relative rounded-md sm:rounded-lg overflow-hidden border border-white/10 group">
                      <img src="/images/P38.jpeg" alt="Terrace Pergola" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-1 sm:p-1.5">
                        <span className="text-[7px] sm:text-[9px] font-mono uppercase text-white truncate">06. Terrace</span>
                      </div>
                    </div>
                  </div>

                  {/* Delivery Guarantee Pill */}
                  <div className="flex items-center justify-center pt-1">
                    <div className="px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-full bg-[#1C1A17] border border-[#10B981]/30 text-[9px] sm:text-xs text-[#10B981] flex items-center space-x-1.5 sm:space-x-2 shadow-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                      <span>Coordinated turnkey execution across Dubai</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Canvas Footer Bar */}
              <div className="flex items-center justify-between pt-1 sm:pt-2 border-t border-white/5 text-[8px] sm:text-[10px] font-mono text-neutral-400">
                <span>ALTIMATE INTERIORS &amp; FIT-OUT</span>
                <span style={{ color: currentTab.badgeColor }}>STAGE: {currentTab.id.toUpperCase()}</span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: HEADLINE, CTAs & SCROLL ACCORDION BOXES ================= */}
          <div className="lg:col-span-5 w-full flex flex-col justify-center order-1 lg:order-2">
            
            {/* Eyebrow */}
            <div className="mb-1 sm:mb-2 lg:mb-3">
              <span className="text-[9px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#D6B779] font-medium">
                HOW IT WORKS
              </span>
            </div>

            {/* Large Bold Headline */}
            <h2 className="text-xl sm:text-3xl lg:text-[34px] font-bold text-white tracking-tight leading-[1.1] mb-2 sm:mb-4 lg:mb-6">
              Describe it. <br className="hidden sm:inline" />
              Tweak it. Use it everywhere.
            </h2>

            {/* CTA Pill Buttons */}
            <div className="flex items-center space-x-2.5 sm:space-x-4 mb-3 sm:mb-5 lg:mb-7">
              <a
                href="#contact"
                className="px-3.5 sm:px-6 py-1.5 sm:py-2.5 rounded-full neon-btn-glass text-white text-[10px] sm:text-xs font-medium tracking-wide"
              >
                Get started
              </a>

              <a
                href="#contact"
                className="px-3.5 sm:px-6 py-1.5 sm:py-2.5 rounded-full neon-btn-orange text-white text-[10px] sm:text-xs font-semibold tracking-wide"
              >
                Contact sales
              </a>
            </div>

            {/* ================= VERTICAL SCROLL ACCORDION (3 BOXES OPEN & CLOSE ON SCROLL) ================= */}
            <div className="flex flex-col space-y-1.5 sm:space-y-3">
              {tabs.map((tab, idx) => {
                const isActive = activeTabIndex === idx;

                return (
                  <div
                    key={tab.id}
                    onClick={() => handleBoxClick(idx)}
                    className={`cursor-pointer rounded-xl sm:rounded-2xl transition-all duration-500 p-2.5 sm:p-4 lg:p-5 border relative overflow-hidden ${
                      isActive
                        ? 'bg-gradient-to-r from-white/[0.09] via-white/[0.05] to-transparent border-white/25 shadow-[0_15px_40px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.22)] ring-1 ring-white/10 scale-[1.01]'
                        : 'bg-transparent border-white/5 hover:border-white/15 hover:bg-white/[0.02]'
                    }`}
                  >
                    {/* Active Accent Bar on Left */}
                    {isActive && (
                      <div
                        className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full"
                        style={{ backgroundColor: tab.badgeColor }}
                      />
                    )}

                    <div className="flex items-start space-x-2.5 sm:space-x-3.5">
                      {/* Icon Badge */}
                      <div
                        className={`w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                          isActive
                            ? 'bg-white/15 border border-white/25 text-white shadow-lg'
                            : 'bg-white/5 border border-white/5 text-neutral-500'
                        }`}
                        style={{
                          color: isActive ? tab.badgeColor : undefined,
                          boxShadow: isActive ? `0 0 15px ${tab.badgeColor}33` : 'none',
                        }}
                      >
                        {tab.icon}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3
                            className={`text-xs sm:text-base lg:text-lg font-bold transition-colors duration-300 ${
                              isActive ? 'text-white' : 'text-neutral-400'
                            }`}
                          >
                            {tab.title}
                          </h3>
                          <span
                            className={`text-[8px] sm:text-[10px] font-mono tracking-widest transition-opacity duration-300 ${
                              isActive ? 'opacity-100 text-[#D6B779]' : 'opacity-0'
                            }`}
                          >
                            0{idx + 1} / 03
                          </span>
                        </div>

                        {/* Collapsible Smooth Accordion Description */}
                        <div
                          className={`transition-all duration-500 ease-out overflow-hidden ${
                            isActive ? 'max-h-32 sm:max-h-40 opacity-100 mt-1.5 sm:mt-2.5' : 'max-h-0 opacity-0 mt-0'
                          }`}
                        >
                          <p className="text-[10px] sm:text-xs lg:text-[13px] text-neutral-300 font-light leading-relaxed">
                            {tab.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveStudio;
