import React, { useState } from 'react';
import { Layers, ShieldCheck, Gem, Clock, ArrowRight, CheckCircle2, AlertTriangle } from 'lucide-react';

interface ComparisonState {
  id: number;
  color: string;
  glowColor: string;
  label: string;
  traditional: {
    tag: string;
    headline: string;
    subheadline: string;
    status: string;
    image: string;
    badge1: string;
    badge2: string;
    footerTitle: string;
    footerDesc: string;
  };
  altimate: {
    quote: string;
    descriptor: string;
    tagline: string;
    image: string;
    footerTitle: string;
    footerDesc: string;
  };
}

const comparisonData: ComparisonState[] = [
  {
    id: 0,
    color: '#EA580C', // Orange (as in frame 0)
    glowColor: 'rgba(234, 88, 12, 0.45)',
    label: 'Render vs Reality',
    traditional: {
      tag: 'SPECULATIVE CONCEPT',
      headline: 'if there is no solution, keep hoping.',
      subheadline: 'STUDIO CONCEPT · The render for clients',
      status: 'Fragmented · Unbuildable',
      image: '/images/P36.jpeg',
      badge1: 'Pixelated',
      badge2: '1 layer',
      footerTitle: 'They give you a picture.',
      footerDesc: 'Done generating, not done working.',
    },
    altimate: {
      quote: "If there's no solution, we engineer one.",
      descriptor: 'ALTIMATE',
      tagline: 'The turnkey engine for elevated living',
      image: '/images/P06.jpeg',
      footerTitle: 'We give you a turnkey reality.',
      footerDesc: 'Fully engineered — Ready to live.',
    },
  },
  {
    id: 1,
    color: '#10B981', // Emerald Green
    glowColor: 'rgba(16, 185, 129, 0.45)',
    label: 'Single Accountability',
    traditional: {
      tag: 'DISJOINTED TRADES',
      headline: 'contractors blaming architects.',
      subheadline: '8 SUBCONTRACTORS · Endless finger pointing',
      status: 'No Single Lead',
      image: '/images/P42.jpeg',
      badge1: 'Coordination Void',
      badge2: 'Variable Specs',
      footerTitle: 'They give you excuses.',
      footerDesc: 'Endless site disputes, zero accountability.',
    },
    altimate: {
      quote: 'One single team. Total accountability from day one.',
      descriptor: 'ALTIMATE MANAGEMENT',
      tagline: 'Synchronized architecture, MEP & turnkey build',
      image: '/images/P14.jpeg',
      footerTitle: 'We give you a master builder.',
      footerDesc: 'Single contract, zero friction, guaranteed handover.',
    },
  },
  {
    id: 2,
    color: '#FFFFFF', // Pure White
    glowColor: 'rgba(255, 255, 255, 0.45)',
    label: 'Direct Sourcing',
    traditional: {
      tag: 'LOCAL RETAIL MARKUP',
      headline: 'catalogues with 300% middleman margin.',
      subheadline: 'GENERIC STOCK · Long import delays',
      status: 'Unverified Quarry',
      image: '/images/P25.jpeg',
      badge1: 'Third-party markups',
      badge2: 'Batch mismatch',
      footerTitle: 'They give you sample books.',
      footerDesc: 'Compromised quality, unpredictable lead times.',
    },
    altimate: {
      quote: 'Direct Italian quarry marble & bespoke joinery ateliers.',
      descriptor: 'ALTIMATE MATERIALITY',
      tagline: 'Curated stone slabs, certified European timber',
      image: '/images/P16.jpeg',
      footerTitle: 'We give you curated provenance.',
      footerDesc: 'Bespoke precision — Sourced directly from artisans.',
    },
  },
  {
    id: 3,
    color: '#64748B', // Slate / Grey
    glowColor: 'rgba(100, 116, 139, 0.45)',
    label: 'Fixed Cost Guarantee',
    traditional: {
      tag: 'VARIABLE BILLING',
      headline: 'initial quote was just the beginning.',
      subheadline: 'COST OVERRUNS · 40% unexpected variation fees',
      status: 'Surprise Invoices',
      image: '/images/P32.jpeg',
      badge1: 'Scope creeping',
      badge2: 'Hidden fees',
      footerTitle: 'They give you rising estimates.',
      footerDesc: 'Escalating variations, endless financial stress.',
    },
    altimate: {
      quote: 'Fixed-price contract. Every dirham locked before groundbreaking.',
      descriptor: 'ALTIMATE FINANCIAL INTEGRITY',
      tagline: 'Guaranteed milestone delivery with zero surprise costs',
      image: '/images/P28.jpeg',
      footerTitle: 'We give you price certainty.',
      footerDesc: 'Transparent luxury — Delivered precisely as agreed.',
    },
  },
];

export const TheDifference: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const current = comparisonData[activeTab];

  return (
    <section className="relative w-full py-28 md:py-36 bg-[#070707] text-[#F4F0E8] overflow-hidden selection:bg-[#D6B779]/25">
      {/* Background Lighting Gradients matching reference video */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute top-1/4 -left-32 w-[550px] h-[550px] rounded-full ambient-glow transition-all duration-1000"
          style={{
            background: `radial-gradient(circle, ${current.glowColor} 0%, rgba(7, 7, 7, 0) 70%)`,
          }}
        />
        <div
          className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full ambient-glow transition-all duration-1000"
          style={{
            background: 'radial-gradient(circle, rgba(214, 183, 121, 0.12) 0%, rgba(7, 7, 7, 0) 70%)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-neutral-300">
              THE DIFFERENCE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-[1.1]">
            They build image generators.
            <br />
            <span className="text-white/95">We built a design engine.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 max-w-xl mx-auto font-light leading-relaxed">
            Most studios stop at flat 3D pictures and leave you to manage site friction. ALTIMATE unifies architecture, interior design, and turnkey fit-out into a single cohesive reality.
          </p>
        </div>

        {/* ================= DUAL COMPARISON CARDS WITH VERTICAL 4-DOT SELECTOR ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-8 lg:gap-10 max-w-5xl mx-auto">
          
          {/* ================= LEFT CARD: THE TRADITIONAL APPROACH ================= */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-[420px] rounded-[28px] p-2.5 sm:p-3 bg-[#11100F] border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative group transition-all duration-500">
              {/* Inner Mock Screen */}
              <div className="w-full aspect-[4/5] rounded-[22px] bg-[#161513] overflow-hidden relative border border-white/5 flex flex-col justify-between p-5 sm:p-6">
                
                {/* Top Tags */}
                <div className="flex items-center justify-between z-10">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono tracking-wider bg-black/60 border border-white/10 text-neutral-400">
                    {current.traditional.badge1}
                  </span>
                  <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono tracking-wider bg-black/60 border border-white/10 text-neutral-400">
                    <span className="text-neutral-500">🔒</span>
                    <span>{current.traditional.badge2}</span>
                  </div>
                </div>

                {/* Gritty Concept Visual Layer */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={current.traditional.image}
                    alt="Traditional render concept"
                    className="w-full h-full object-cover filter grayscale contrast-125 brightness-[0.45] opacity-75 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>

                {/* Typography Overlay */}
                <div className="relative z-10 mt-auto pt-12">
                  <p className="font-serif italic text-lg sm:text-xl text-neutral-300 leading-tight">
                    {current.traditional.headline}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                        {current.traditional.tag}
                      </h4>
                      <p className="text-[10px] text-neutral-400 font-mono mt-0.5">
                        {current.traditional.subheadline}
                      </p>
                    </div>
                  </div>

                  {/* Mock status pill */}
                  <div className="mt-4 flex items-center justify-between p-2.5 rounded-lg bg-black/70 border border-white/10">
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                      <span className="text-[11px] font-mono text-neutral-300">{current.traditional.status}</span>
                    </div>
                    <span className="text-[9px] font-mono text-neutral-500">Bitmap.jpg</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Caption for Left Card */}
            <div className="mt-5 text-center">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
                {current.traditional.footerTitle}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-0.5 font-light">
                {current.traditional.footerDesc}
              </p>
            </div>
          </div>

          {/* ================= CENTER: VERTICAL 4-DOT PILL SELECTOR ================= */}
          <div className="flex lg:flex-col items-center justify-center space-x-3.5 lg:space-x-0 lg:space-y-4 py-2 px-3 lg:py-4 lg:px-2 rounded-full bg-[#161514] border border-white/10 shadow-2xl">
            {comparisonData.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(idx)}
                aria-label={`Select ${item.label}`}
                className="relative group p-1 focus:outline-none"
              >
                {/* Glow ring when selected */}
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    activeTab === idx
                      ? 'w-6 h-6 p-0.5 border-2 shadow-lg'
                      : 'w-4 h-4 hover:scale-110'
                  }`}
                  style={{
                    borderColor: activeTab === idx ? item.color : 'transparent',
                    boxShadow: activeTab === idx ? `0 0 16px ${item.color}` : 'none',
                  }}
                >
                  <span
                    className="block w-full h-full rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: item.color,
                      opacity: activeTab === idx ? 1 : 0.6,
                    }}
                  />
                </span>

                {/* Tooltip on hover */}
                <span className="absolute -top-8 lg:top-1/2 lg:-translate-y-1/2 left-1/2 -translate-x-1/2 lg:left-10 lg:translate-x-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-black/90 text-[10px] font-mono whitespace-nowrap px-2 py-0.5 rounded border border-white/10 text-white z-30">
                  {item.label}
                </span>
              </button>
            ))}
          </div>

          {/* ================= RIGHT CARD: THE ALTIMATE TURNKEY WAY ================= */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-[420px] rounded-[28px] p-2.5 sm:p-3 bg-[#11100F] border border-white/15 shadow-[0_25px_60px_rgba(234,88,12,0.15)] relative group transition-all duration-500 hover:border-white/30">
              
              {/* Inner Container matching the orange/white split card in frame 0 */}
              <div className="w-full aspect-[4/5] rounded-[22px] overflow-hidden relative flex flex-col">
                
                {/* Top Section: Crisp Pure White Luxury Panel */}
                <div className="bg-white text-black p-5 sm:p-6 flex flex-col justify-between">
                  <div>
                    <p className="font-serif italic text-lg sm:text-2xl text-neutral-900 leading-tight font-medium">
                      "{current.altimate.quote}"
                    </p>
                  </div>
                  <div className="mt-4 flex items-center space-x-2">
                    <span className="text-[#EA580C] text-base font-bold">✦</span>
                    <span className="text-xs font-mono font-bold tracking-widest uppercase text-neutral-900">
                      {current.altimate.descriptor}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-500 font-sans mt-0.5">
                    {current.altimate.tagline}
                  </p>
                </div>

                {/* Bottom Section: Rich Orange/Warm Accent Layer with Real Execution Imagery */}
                <div
                  className="flex-1 relative overflow-hidden flex items-end p-5 sm:p-6"
                  style={{
                    backgroundColor: current.color,
                  }}
                >
                  <img
                    src={current.altimate.image}
                    alt="ALTIMATE turnkey interior execution"
                    className="absolute inset-0 w-full h-full object-cover mix-blend-multiply filter contrast-110 brightness-90 group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Verification Pill */}
                  <div className="relative z-10 inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white shadow-lg">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-[10px] font-mono tracking-wider uppercase font-semibold">
                      DUBAI MUNICIPALITY VERIFIED
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Caption for Right Card */}
            <div className="mt-5 text-center">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
                {current.altimate.footerTitle}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-0.5 font-light">
                {current.altimate.footerDesc}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TheDifference;

