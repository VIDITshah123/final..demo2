import React, { useState } from 'react';
import { Compass, Palette, Wrench, Shield, ChevronRight, ChevronDown, Check, ArrowUpRight } from 'lucide-react';

interface DeptPill {
  id: string;
  title: string;
  icon: React.ReactNode;
  active: boolean;
}

export const ConnectedWorkflow: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<number>(0);
  const [activeDept, setActiveDept] = useState<string>('arch');

  const departments: DeptPill[] = [
    {
      id: 'arch',
      title: 'Architecture',
      icon: <Compass className="w-4 h-4 text-[#EA580C]" />,
      active: activeDept === 'arch',
    },
    {
      id: 'interior',
      title: 'Interior Design',
      icon: <Palette className="w-4 h-4 text-[#EA580C]" />,
      active: activeDept === 'interior',
    },
    {
      id: 'mep',
      title: 'MEP & Engineering',
      icon: <Wrench className="w-4 h-4 text-[#EA580C]" />,
      active: activeDept === 'mep',
    },
    {
      id: 'fitout',
      title: 'Turnkey Fit-Out',
      icon: <Shield className="w-4 h-4 text-[#EA580C]" />,
      active: activeDept === 'fitout',
    },
  ];

  const paletteSwatches = [
    { name: 'Warm Terracotta & Cedar', hex: '#EA580C' },
    { name: 'Cashmere & Fluted Plaster', hex: '#D8B4FE' },
    { name: 'Verde Emerald & Malachite', hex: '#10B981' },
    { name: 'Belgian Slate & Nero', hex: '#1C1917' },
    { name: 'Calacatta & Pure Chalk', hex: '#FAF8F5' },
  ];

  return (
    <section className="relative w-full py-28 md:py-36 bg-[#070707] text-[#F4F0E8] overflow-hidden selection:bg-[#D6B779]/25">
      {/* Background Lighting Bloom */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute top-1/3 -left-20 w-[600px] h-[600px] rounded-full ambient-glow"
          style={{
            background: 'radial-gradient(circle, rgba(234, 88, 12, 0.16) 0%, rgba(7, 7, 7, 0) 70%)',
          }}
        />
        <div
          className="absolute -bottom-20 right-10 w-[550px] h-[550px] rounded-full ambient-glow"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.14) 0%, rgba(7, 7, 7, 0) 70%)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.9fr] items-start gap-12 lg:gap-16 mb-16">
          
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-neutral-300">
                SYSTEMATIZED MATERIALITY
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-[60px] font-bold text-white tracking-tight leading-[1.05]">
              Your aesthetic,
              <br />
              <span className="text-white/95">built in.</span>
            </h2>

            <p className="mt-5 text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-md">
              Set stone selections, custom joinery, architectural lighting, and hardware standards once. Every room stays flawlessly cohesive, from first concept render to final key handover.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-mono tracking-widest uppercase bg-[#181715] hover:bg-[#22211E] text-white border border-white/15 transition-all shadow-lg hover:border-white/30"
              >
                Explore Materials
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-mono tracking-widest uppercase font-semibold text-white bg-gradient-to-r from-[#EA580C] to-[#F97316] hover:from-[#F97316] hover:to-[#EA580C] transition-all shadow-[0_0_25px_rgba(234,88,12,0.45)]"
              >
                Book Consultation
              </a>
            </div>
          </div>

          {/* ================= CONNECTED DIAGRAM CANVAS ================= */}
          <div className="relative w-full overflow-x-auto pb-4 pt-2">
            <div className="min-w-[680px] grid grid-cols-[140px_1fr_200px] items-center gap-4 relative">
              
              {/* ================= LEFT COLUMN: 4 DISCIPLINE PILLS ================= */}
              <div className="flex flex-col space-y-4 z-20">
                {departments.map((dept) => (
                  <button
                    key={dept.id}
                    type="button"
                    onClick={() => setActiveDept(dept.id)}
                    className={`flex items-center space-x-2.5 px-3 py-2.5 rounded-full border text-left transition-all duration-300 focus:outline-none ${
                      activeDept === dept.id
                        ? 'bg-[#1E1C1A] border-[#EA580C]/80 shadow-[0_0_20px_rgba(234,88,12,0.25)]'
                        : 'bg-[#121110]/80 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="w-7 h-7 rounded-full bg-black/60 flex items-center justify-center border border-white/10 shrink-0">
                      {dept.icon}
                    </div>
                    <span className="text-xs font-medium text-neutral-200 truncate">
                      {dept.title}
                    </span>
                  </button>
                ))}
              </div>

              {/* ================= CENTER: SPECIFICATION KIT TABLET (Matching Frame 1 & 2) ================= */}
              <div className="relative z-20 mx-auto w-full max-w-[340px] rounded-[24px] bg-[#11100F] border border-white/15 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-white">
                      Material Kit
                    </span>
                    <span className="text-xs">🔒</span>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400">
                    altimate.ae/specs
                  </span>
                </div>

                <div className="text-lg font-bold text-white tracking-wide mb-3">
                  ALTIMATE
                </div>

                {/* Guide Row */}
                <div className="flex items-center justify-between py-2 px-3 rounded-lg bg-[#181615] border border-white/5 mb-3 text-xs text-neutral-300 cursor-pointer hover:bg-[#201E1C]">
                  <div className="flex items-center space-x-2">
                    <span>📐</span>
                    <span className="font-medium">Architectural Guide</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-neutral-500" />
                </div>

                {/* Assets Accordion */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-semibold text-neutral-300 pt-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs">⊞</span>
                      <span>Assets</span>
                    </div>
                    <ChevronDown className="w-4 h-4 text-neutral-500" />
                  </div>

                  {/* Templates / Previews */}
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block mb-1.5">
                      Templates
                    </span>
                    <div className="grid grid-cols-4 gap-1.5">
                      {['/images/P04.jpeg', '/images/P14.jpeg', '/images/P01.jpeg', '/images/P03.jpeg'].map(
                        (src, idx) => (
                          <div
                            key={idx}
                            className="aspect-square rounded-md overflow-hidden border border-white/10 hover:border-white/30 transition-all cursor-pointer"
                          >
                            <img
                              src={src}
                              alt="Template thumbnail"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Logos / Monograms */}
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block mb-1.5">
                      Atelier Marks
                    </span>
                    <div className="grid grid-cols-4 gap-1.5">
                      {['✦', '▲', '❖', '◈'].map((sym, idx) => (
                        <div
                          key={idx}
                          className="aspect-square rounded-md bg-[#181615] border border-white/10 flex items-center justify-center text-sm text-[#D6B779] hover:border-[#D6B779]/50 transition-all cursor-pointer"
                        >
                          {sym}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Colors / Material Swatches */}
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block mb-1.5">
                      Curated Swatches
                    </span>
                    <div className="flex items-center space-x-2">
                      {paletteSwatches.map((swatch, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSelectedColor(idx)}
                          className={`w-7 h-7 rounded-lg border transition-all duration-300 relative focus:outline-none ${
                            selectedColor === idx
                              ? 'border-white scale-110 shadow-lg'
                              : 'border-white/20 hover:border-white/60'
                          }`}
                          style={{ backgroundColor: swatch.hex }}
                          title={swatch.name}
                        >
                          {selectedColor === idx && (
                            <span className="absolute inset-0 flex items-center justify-center text-black font-bold text-xs">
                              ✓
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* ================= RIGHT COLUMN: LIVE OUTPUT PROJECT CARDS ================= */}
              <div className="flex flex-col space-y-4 z-20">
                
                {/* Top Output Card: Master Suite */}
                <div className="w-[190px] rounded-2xl bg-[#141312] border border-white/10 p-3 shadow-2xl relative group hover:border-white/30 transition-all">
                  <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 mb-2">
                    <span className="inline-flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Palm Suite</span>
                    </span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                  </div>
                  
                  <div className="w-full aspect-[4/3] rounded-lg overflow-hidden border border-white/10 mb-2 relative">
                    <img
                      src="/images/P04.jpeg"
                      alt="Palm beachfront master suite"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div
                      className="absolute inset-0 opacity-20 mix-blend-color pointer-events-none"
                      style={{ backgroundColor: paletteSwatches[selectedColor].hex }}
                    />
                  </div>

                  <h4 className="text-xs font-bold text-white truncate">
                    Palm Beachfront Villa
                  </h4>
                  <p className="text-[10px] text-neutral-400 mt-0.5">
                    Tariq A. — Principal
                  </p>
                </div>

                {/* Bottom Output Card: Reception Salon */}
                <div className="w-[190px] rounded-2xl bg-[#141312] border border-white/10 p-3 shadow-2xl relative group hover:border-white/30 transition-all">
                  <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 mb-2">
                    <span className="inline-flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
                      <span>Emirates Hills</span>
                    </span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                  </div>
                  
                  <div className="w-full aspect-[4/3] rounded-lg overflow-hidden border border-white/10 mb-2 relative">
                    <img
                      src="/images/P14.jpeg"
                      alt="Emirates Hills reception salon"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div
                      className="absolute inset-0 opacity-20 mix-blend-color pointer-events-none"
                      style={{ backgroundColor: paletteSwatches[selectedColor].hex }}
                    />
                  </div>

                  <h4 className="text-xs font-bold text-white truncate">
                    Grand Living Salon
                  </h4>
                  <p className="text-[10px] text-neutral-400 mt-0.5">
                    Karim M. — Design Lead
                  </p>
                </div>

              </div>

              {/* ================= SVG BEZIER CURVE CABLES CONNECTING EVERYTHING ================= */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
                viewBox="0 0 680 440"
                fill="none"
              >
                {/* Left cables from Department pills into Spec Kit */}
                <path
                  d="M 130 50 C 170 50, 180 120, 220 120"
                  stroke="rgba(234, 88, 12, 0.5)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <path
                  d="M 130 110 C 170 110, 180 160, 220 160"
                  stroke="rgba(234, 88, 12, 0.4)"
                  strokeWidth="1.5"
                />
                <path
                  d="M 130 170 C 170 170, 180 200, 220 200"
                  stroke="rgba(255, 255, 255, 0.25)"
                  strokeWidth="1.5"
                />
                <path
                  d="M 130 230 C 170 230, 180 240, 220 240"
                  stroke="rgba(16, 185, 129, 0.4)"
                  strokeWidth="1.5"
                />

                {/* Right cables from Spec Kit to Project Output cards */}
                <path
                  d="M 460 140 C 490 140, 480 90, 520 90"
                  stroke="rgba(255, 255, 255, 0.35)"
                  strokeWidth="1.5"
                />
                <path
                  d="M 460 260 C 490 260, 480 300, 520 300"
                  stroke="rgba(234, 88, 12, 0.45)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
              </svg>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ConnectedWorkflow;

