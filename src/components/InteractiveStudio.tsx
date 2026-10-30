import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Crop,
  Globe,
  Share2,
  MessageSquare,
  ChevronDown,
  ArrowUp,
  Check,
  CheckCircle2,
  Layers,
  Palette,
  Maximize2
} from 'lucide-react';

interface TabItem {
  id: 'envision' | 'refine' | 'deliver';
  title: string;
  icon: React.ReactNode;
  description: string;
}

const tabs: TabItem[] = [
  {
    id: 'envision',
    title: 'Envision it',
    icon: <Sparkles className="w-5 h-5 text-neutral-300" />,
    description:
      'Describe what you desire in plain words: a Palm Jumeirah beachfront villa, a duplex penthouse salon, or bespoke Italian marble suites. ALTIMATE translates your brief into refined spatial blueprints.',
  },
  {
    id: 'refine',
    title: 'Refine it',
    icon: <Crop className="w-5 h-5 text-neutral-300" />,
    description:
      'Change spatial layouts, swap bookmatched Calacatta marble, customize bronze millwork, and fine-tune lighting temperatures. Complete creative control before construction starts.',
  },
  {
    id: 'deliver',
    title: 'Deliver everywhere',
    icon: <Globe className="w-5 h-5 text-neutral-300" />,
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
  const [activeTab, setActiveTab] = useState<'envision' | 'refine' | 'deliver'>('envision');
  const [selectedSwatch, setSelectedSwatch] = useState('Calacatta Oro');
  const [isAutoCycle, setIsAutoCycle] = useState(true);
  const [shareCopied, setShareCopied] = useState(false);

  // Auto-cycle tabs if user is not actively interacting
  useEffect(() => {
    if (!isAutoCycle) return;
    const tabOrder: ('envision' | 'refine' | 'deliver')[] = ['envision', 'refine', 'deliver'];
    const timer = setInterval(() => {
      setActiveTab((prev) => {
        const nextIdx = (tabOrder.indexOf(prev) + 1) % tabOrder.length;
        return tabOrder[nextIdx];
      });
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoCycle]);

  const handleTabClick = (id: 'envision' | 'refine' | 'deliver') => {
    setIsAutoCycle(false);
    setActiveTab(id);
  };

  const handleShare = () => {
    setShareCopied(true);
    navigator.clipboard?.writeText(window.location.href);
    setTimeout(() => setShareCopied(false), 2500);
  };

  return (
    <section
      id="methodology"
      className="relative min-h-screen w-full bg-[#070707] py-16 sm:py-32 px-4 sm:px-6 lg:px-12 flex items-center justify-center overflow-hidden select-none border-t border-white/5"
    >
      {/* ================= BACKGROUND ATMOSPHERIC LIGHTING ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {/* Left Warm Amber/Orange Bloom */}
        <div
          className="absolute top-[20%] -left-[10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full ambient-glow-lg"
          style={{
            background:
              'radial-gradient(circle, rgba(234, 88, 12, 0.28) 0%, rgba(196, 130, 63, 0.16) 40%, transparent 75%)',
          }}
        />

        {/* Right Emerald/Teal Ambient Glow */}
        <div
          className="absolute top-[30%] -right-[12%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full ambient-glow-lg"
          style={{
            background:
              'radial-gradient(circle, rgba(16, 185, 129, 0.18) 0%, rgba(27, 44, 45, 0.22) 45%, transparent 75%)',
          }}
        />

        {/* Center Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(7, 7, 7, 0.4) 0%, rgba(7, 7, 7, 0.92) 100%)',
          }}
        />
      </div>

      {/* ================= MAIN TWO-COLUMN SPLIT CONTAINER ================= */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        
        {/* ================= LEFT COLUMN: INTERACTIVE STUDIO CANVAS (60%) ================= */}
        <div className="lg:col-span-7 w-full">
          <div className="relative w-full min-h-[380px] sm:min-h-0 sm:aspect-[16/11] lg:aspect-[16/11.5] rounded-2xl sm:rounded-[32px] ios-glass border border-white/15 border-t-white/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_30px_80px_rgba(0,0,0,0.85)] p-3.5 sm:p-7 flex flex-col justify-between overflow-hidden group">
            
            {/* Canvas Header Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-white/5 z-20">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EA580C] animate-pulse" />
                <span className="text-[11px] font-mono tracking-widest text-[#D6B779] uppercase">
                  ALTIMATE STUDIO WORKSPACE
                </span>
              </div>

              {/* Top-Right Control Capsule */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs">
                  <MessageSquare className="w-3.5 h-3.5 text-neutral-400" />
                  <div className="w-4 h-4 rounded-full bg-[#D6B779] text-[#070707] font-bold text-[9px] flex items-center justify-center">
                    A
                  </div>
                  <ChevronDown className="w-3 h-3 text-neutral-400" />
                </div>

                <button
                  type="button"
                  onClick={handleShare}
                  className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-medium transition-colors"
                >
                  {shareCopied ? (
                    <>
                      <Check className="w-3 h-3 text-[#10B981]" />
                      <span className="text-[11px] text-[#10B981]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3 h-3" />
                      <span className="text-[11px]">Share</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Canvas Interactive Display Stage */}
            <div className="relative flex-1 w-full my-3 flex items-center justify-center overflow-hidden">
              
              {/* ================= STATE 1: ENVISION IT ================= */}
              {activeTab === 'envision' && (
                <div className="relative w-full h-full flex flex-col justify-between p-2 animate-in fade-in zoom-in-95 duration-500">
                  {/* Architectural Conceptual Render Card */}
                  <div className="relative w-[95%] sm:w-[75%] max-w-md mx-auto aspect-[16/10] rounded-xl overflow-hidden border border-white/15 shadow-2xl bg-black/40 group/card">
                    <img
                      src="/images/P04.jpeg"
                      alt="Palm Jumeirah Villa Blueprint Concept"
                      className="w-full h-full object-cover filter brightness-95 contrast-105 group-hover/card:scale-105 transition-transform duration-700"
                    />

                    {/* Corner Markers */}
                    <div className="absolute top-2 left-2 text-white/50 font-mono text-[10px]">+</div>
                    <div className="absolute top-2 right-2 text-white/50 font-mono text-[10px]">+</div>
                    <div className="absolute bottom-2 left-2 text-white/50 font-mono text-[10px]">+</div>
                    <div className="absolute bottom-2 right-2 text-white/50 font-mono text-[10px]">+</div>

                    {/* Badge */}
                    <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[9px] font-mono tracking-wider text-[#D6B779] uppercase">
                      PALM JUMEIRAH ESTATE · 14,000 SQ FT
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-3.5 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                      <p className="font-bold text-sm text-white">VILLA LUMIÈRE</p>
                      <p className="text-[11px] text-neutral-300">Turnkey Concept &amp; Double-Height Architecture</p>
                    </div>
                  </div>

                  {/* Bottom Prompt Console (Inside Canvas) */}
                  <div className="w-full max-w-lg mx-auto rounded-2xl bg-[#1C1A17]/90 border border-white/15 p-3.5 shadow-xl flex items-center justify-between">
                    <div className="flex-1 pr-3">
                      <div className="flex items-center space-x-1.5 text-[10px] font-medium text-[#D6B779] uppercase tracking-wider mb-1">
                        <Sparkles className="w-3 h-3" />
                        <span>Architectural Brief</span>
                        <ChevronDown className="w-3 h-3 text-neutral-400" />
                      </div>
                      <p className="text-xs sm:text-[13px] text-neutral-200 font-light truncate">
                        Beachfront villa with double-height marble foyer, floor-to-ceiling glass &amp; infinity terrace|
                      </p>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-[#EA580C] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                      <ArrowUp className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              )}

              {/* ================= STATE 2: REFINE IT ================= */}
              {activeTab === 'refine' && (
                <div className="relative w-full h-full flex flex-col justify-between p-2 animate-in fade-in zoom-in-95 duration-500">
                  {/* Swatch Selector floating above */}
                  <div className="flex items-center justify-center space-x-2 pb-2">
                    {swatches.map((swatch) => (
                      <button
                        key={swatch.name}
                        type="button"
                        onClick={() => setSelectedSwatch(swatch.name)}
                        className={`px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase transition-all duration-200 border ${
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
                  <div className="relative w-[95%] sm:w-[75%] max-w-md mx-auto aspect-[16/10] rounded-xl overflow-hidden border-2 border-[#D6B779] shadow-2xl bg-black/40">
                    <img
                      src="/images/P07.jpeg"
                      alt="Refined Living Salon"
                      className="w-full h-full object-cover filter brightness-95 contrast-105"
                    />

                    {/* Transform Handles (Circles on Corners) */}
                    <div className="absolute -top-1.5 -left-1.5 w-3.5 h-3.5 rounded-full bg-[#D6B779] border-2 border-[#070707] shadow" />
                    <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-[#D6B779] border-2 border-[#070707] shadow" />
                    <div className="absolute -bottom-1.5 -left-1.5 w-3.5 h-3.5 rounded-full bg-[#D6B779] border-2 border-[#070707] shadow" />
                    <div className="absolute -bottom-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-[#D6B779] border-2 border-[#070707] shadow" />

                    {/* Side Pill Handles */}
                    <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-2.5 h-6 rounded-full bg-white border border-neutral-700 shadow" />
                    <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-2.5 h-6 rounded-full bg-white border border-neutral-700 shadow" />

                    {/* Active Material Tag */}
                    <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/75 backdrop-blur-md border border-[#D6B779]/40 text-[9px] font-mono tracking-wider text-[#D6B779] uppercase flex items-center space-x-1.5">
                      <Palette className="w-3 h-3 text-[#D6B779]" />
                      <span>{selectedSwatch} Applied</span>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-3.5 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end justify-between">
                      <div>
                        <p className="font-bold text-sm text-white">GRAND LIVING SALON</p>
                        <p className="text-[11px] text-neutral-300">Custom Travertine, Bronze Joinery &amp; Recessed Track</p>
                      </div>
                      <span className="text-[9px] font-mono text-[#D6B779] bg-[#D6B779]/20 px-2 py-0.5 rounded border border-[#D6B779]/30">
                        EDITING
                      </span>
                    </div>
                  </div>

                  {/* Floating Action Pill */}
                  <div className="flex items-center justify-center pt-2">
                    <div className="px-4 py-1.5 rounded-full bg-[#1C1A17] border border-[#D6B779]/30 text-xs text-neutral-200 flex items-center space-x-2 shadow-lg">
                      <Sparkles className="w-3.5 h-3.5 text-[#D6B779]" />
                      <span>Adjusting spatial geometry &amp; materials</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
                    </div>
                  </div>
                </div>
              )}

              {/* ================= STATE 3: DELIVER EVERYWHERE (EXPANDED ESTATE GRID) ================= */}
              {activeTab === 'deliver' && (
                <div className="relative w-full h-full flex flex-col justify-between p-2 animate-in fade-in zoom-in-95 duration-500">
                  {/* Coordinated Multi-Space Estate Grid (6 Coordinated Rooms) */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5 w-full h-[85%] max-h-[300px]">
                    <div className="relative rounded-lg overflow-hidden border border-white/10 group">
                      <img src="/images/P01.jpeg" alt="Living Salon" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                        <span className="text-[9px] font-mono uppercase text-white truncate">01. Living Salon</span>
                      </div>
                    </div>

                    <div className="relative rounded-lg overflow-hidden border border-white/10 group">
                      <img src="/images/P15.jpeg" alt="Culinary Suite" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                        <span className="text-[9px] font-mono uppercase text-white truncate">02. Culinary Suite</span>
                      </div>
                    </div>

                    <div className="relative rounded-lg overflow-hidden border border-white/10 group">
                      <img src="/images/P10.jpeg" alt="Master Suite" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                        <span className="text-[9px] font-mono uppercase text-white truncate">03. Master Suite</span>
                      </div>
                    </div>

                    <div className="relative rounded-lg overflow-hidden border border-white/10 group">
                      <img src="/images/P19.jpeg" alt="Spa Bathroom" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                        <span className="text-[9px] font-mono uppercase text-white truncate">04. Spa Sanctuary</span>
                      </div>
                    </div>

                    <div className="relative rounded-lg overflow-hidden border border-white/10 group">
                      <img src="/images/P14.jpeg" alt="Dining Room" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                        <span className="text-[9px] font-mono uppercase text-white truncate">05. Grand Dining</span>
                      </div>
                    </div>

                    <div className="relative rounded-lg overflow-hidden border border-white/10 group">
                      <img src="/images/P38.jpeg" alt="Terrace Pergola" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                        <span className="text-[9px] font-mono uppercase text-white truncate">06. Infinity Terrace</span>
                      </div>
                    </div>
                  </div>

                  {/* Status Indicator Pill */}
                  <div className="flex items-center justify-center pt-2">
                    <div className="px-4 py-1.5 rounded-full bg-[#1C1A17] border border-[#10B981]/40 text-xs text-neutral-200 flex items-center space-x-2 shadow-lg">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                      <span>Unified Turnkey Delivery · Handover Ready</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Canvas Footer Bar */}
            <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[10px] font-mono text-neutral-400">
              <span>ALTIMATE INTERIORS &amp; FIT-OUT DUBAI</span>
              <span className="text-[#D6B779]">STAGE: {activeTab.toUpperCase()}</span>
            </div>
          </div>
        </div>

        {/* ================= RIGHT COLUMN: HEADLINE, CTAs & INTERACTIVE TABS (40%) ================= */}
        <div className="lg:col-span-5 w-full flex flex-col justify-center">
          
          {/* Eyebrow */}
          <div className="mb-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D6B779] font-medium">
              HOW IT WORKS
            </span>
          </div>

          {/* Large Bold Headline matching reference video */}
          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-[1.06] mb-6">
            Describe it. <br />
            Tweak it. Use it <br />
            everywhere.
          </h2>

          {/* CTA Pill Buttons (Matching Video) */}
          <div className="flex items-center space-x-4 mb-8">
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full ios-glass-interactive text-white text-xs font-medium tracking-wide shadow-md hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]"
            >
              Get started
            </a>

            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#E58A3C] hover:brightness-110 text-white text-xs font-semibold tracking-wide transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_0_25px_rgba(234,88,12,0.5)]"
            >
              Contact sales
            </a>
          </div>

          {/* ================= VERTICAL INTERACTIVE TAB STACK (EXACT VIDEO MATCH) ================= */}
          <div className="flex flex-col space-y-3">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <div
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`cursor-pointer rounded-2xl transition-all duration-300 p-4 sm:p-5 border ${
                    isActive
                      ? 'bg-[#141210]/95 border-white/20 shadow-xl'
                      : 'bg-transparent border-white/5 hover:border-white/10 hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="flex items-start space-x-3.5">
                    {/* Icon Badge */}
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                        isActive
                          ? 'bg-white/15 border border-white/20 text-white'
                          : 'bg-white/5 border border-white/5 text-neutral-400'
                      }`}
                    >
                      {tab.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3
                        className={`text-base sm:text-lg font-bold transition-colors ${
                          isActive ? 'text-white' : 'text-neutral-400'
                        }`}
                      >
                        {tab.title}
                      </h3>

                      {isActive && (
                        <p className="mt-2 text-xs sm:text-[13px] text-neutral-300 font-light leading-relaxed animate-in fade-in slide-in-from-top-1 duration-300">
                          {tab.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveStudio;

