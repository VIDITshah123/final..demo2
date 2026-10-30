import React from 'react';
import { User, CheckCircle2 } from 'lucide-react';

export const TurnkeyVelocity: React.FC = () => {
  return (
    <section className="relative w-full py-28 md:py-36 bg-[#070707] text-[#F4F0E8] overflow-hidden selection:bg-[#D6B779]/25">
      
      {/* ================= MASSIVE SWEEPING GREEN ARCHITECTURAL RIBBON (Matching Frame 4 & 5) ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <svg
          className="absolute -top-[15%] -left-[10%] w-[130%] h-[130%] opacity-90"
          viewBox="0 0 1440 800"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M -100 620 C 350 480 700 180 1550 220"
            stroke="url(#emeraldRibbonGradient)"
            strokeWidth="90"
            strokeLinecap="round"
            className="filter blur-[1px]"
          />
          <defs>
            <linearGradient id="emeraldRibbonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#059669" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#047857" stopOpacity="0.7" />
            </linearGradient>
          </defs>
        </svg>

        {/* Ambient warm glow behind */}
        <div
          className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full ambient-glow"
          style={{
            background: 'radial-gradient(circle, rgba(234, 88, 12, 0.15) 0%, rgba(7, 7, 7, 0) 70%)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] items-center gap-12 lg:gap-16">
          
          {/* ================= LEFT COLUMN: HEADLINE & COPY ================= */}
          <div className="max-w-xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-neutral-300">
                THE EXECUTION ADVANTAGE
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-[62px] font-bold text-white tracking-tight leading-[1.05]">
              More precision.
              <br />
              <span className="text-white/95">Zero burnout.</span>
            </h2>

            <p className="mt-5 text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              Luxury residential demand in Dubai is surging every quarter. ALTIMATE turns turnkey design and build into an orchestrated system, so your estate is handed over on time without contractor friction or burnout.
            </p>

            {/* CTAs matching frame 4 */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-mono tracking-widest uppercase bg-[#181715] hover:bg-[#22211E] text-white border border-white/15 transition-all shadow-lg hover:border-white/30"
              >
                View Timeline Guarantee
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-mono tracking-widest uppercase font-semibold text-white bg-gradient-to-r from-[#EA580C] to-[#F97316] hover:from-[#F97316] hover:to-[#EA580C] transition-all shadow-[0_0_25px_rgba(234,88,12,0.45)]"
              >
                Contact Sales
              </a>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: DUAL CAPACITY CARDS (Matching Frame 5 & 6) ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            
            {/* CARD 1: OTHERS / TRADITIONAL FIT-OUT */}
            <div className="rounded-[26px] bg-[#11100F]/90 backdrop-blur-md border border-white/10 p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-neutral-300 tracking-wide pb-4 border-b border-white/10">
                  Others
                </h3>

                {/* Members row */}
                <div className="mt-4">
                  <span className="text-[11px] text-neutral-500 font-sans block mb-2">
                    Members
                  </span>
                  <div className="flex items-center space-x-2">
                    {[1, 2, 3].map((n) => (
                      <div
                        key={n}
                        className="w-7 h-7 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-neutral-300"
                      >
                        <User className="w-3.5 h-3.5 text-neutral-400" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Team Load: Maxed out */}
                <div className="mt-6">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-neutral-400">Team load</span>
                    <span className="text-red-500 font-mono text-[11px] font-semibold">
                      Maxed out
                    </span>
                  </div>
                  {/* Segmented bar meter (24 segments, overloaded) */}
                  <div className="flex items-end space-x-1 h-5 w-full">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <div
                        key={i}
                        className={`flex-1 rounded-sm transition-all ${
                          i < 10
                            ? 'h-full bg-emerald-500'
                            : i < 16
                            ? 'h-full bg-amber-500'
                            : i < 20
                            ? 'h-full bg-red-500'
                            : 'h-1 bg-white/10'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Milestones Delivered on Time: Mostly empty dots */}
                <div className="mt-8">
                  <span className="text-xs text-neutral-400 block mb-3">
                    Milestones on schedule
                  </span>
                  <div className="grid grid-cols-8 gap-2">
                    {Array.from({ length: 40 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-4 h-4 rounded-full border transition-all ${
                          i < 12
                            ? 'border-emerald-500/80 bg-emerald-500/20'
                            : 'border-white/15 bg-transparent'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 2: ALTIMATE / SYNCHRONIZED TURNKEY */}
            <div className="rounded-[26px] bg-[#11100F]/90 backdrop-blur-md border border-[#10B981]/30 p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex flex-col justify-between relative group hover:border-[#10B981]/50 transition-all">
              <div>
                <div className="flex items-center space-x-2 pb-4 border-b border-white/10">
                  <span className="text-emerald-400 font-bold">✦</span>
                  <h3 className="text-sm font-bold text-white tracking-wide">
                    ALTIMATE
                  </h3>
                </div>

                {/* Members row */}
                <div className="mt-4">
                  <span className="text-[11px] text-neutral-500 font-sans block mb-2">
                    Members
                  </span>
                  <div className="flex items-center space-x-2">
                    {[1, 2, 3].map((n) => (
                      <div
                        key={n}
                        className="w-7 h-7 rounded-full bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-300"
                      >
                        <User className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Team Load: Steady */}
                <div className="mt-6">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-neutral-400">Team load</span>
                    <span className="text-emerald-400 font-mono text-[11px] font-semibold">
                      Steady
                    </span>
                  </div>
                  {/* Segmented bar meter (24 segments, balanced) */}
                  <div className="flex items-end space-x-1 h-5 w-full">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <div
                        key={i}
                        className={`flex-1 rounded-sm transition-all ${
                          i < 8 ? 'h-full bg-emerald-400' : 'h-1 bg-white/10'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Milestones Delivered on Time: FULL 40 GREEN CIRCLES */}
                <div className="mt-8">
                  <span className="text-xs text-neutral-400 block mb-3">
                    Milestones on schedule
                  </span>
                  <div className="grid grid-cols-8 gap-2">
                    {Array.from({ length: 40 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-4 h-4 rounded-full border border-emerald-400 bg-emerald-500/20 shadow-[0_0_8px_rgba(16,185,129,0.35)]"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default TurnkeyVelocity;
