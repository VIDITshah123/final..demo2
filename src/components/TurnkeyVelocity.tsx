import React, { useEffect, useRef, useState } from 'react';
import { User, CheckCircle2, Clock, TrendingUp, Shield, Zap } from 'lucide-react';

const MILESTONES = 40;

export const TurnkeyVelocity: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [othersCount, setOthersCount] = useState(0);
  const [altimateCount, setAltimateCount] = useState(0);

  // Animate counters when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let o = 0;
    let a = 0;
    const step = () => {
      if (o < 12) { setOthersCount(++o); }
      if (a < MILESTONES) { setAltimateCount(++a); }
      if (o < 12 || a < MILESTONES) setTimeout(step, 40);
    };
    setTimeout(step, 300);
  }, [visible]);

  const stats = [
    { icon: <Clock className="w-3.5 h-3.5" />, label: 'Avg. Delivery', value: '14 wks', color: '#10B981' },
    { icon: <TrendingUp className="w-3.5 h-3.5" />, label: 'On-time Rate', value: '98%', color: '#10B981' },
    { icon: <Shield className="w-3.5 h-3.5" />, label: 'Client Score', value: '4.9★', color: '#D6B779' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 md:py-32 bg-[#070707] text-[#F4F0E8] overflow-hidden selection:bg-[#D6B779]/25"
    >
      {/* ── SWEEPING GREEN RIBBON ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <svg
          className="absolute -top-[10%] -left-[5%] w-[120%] h-[130%] opacity-95"
          viewBox="0 0 1440 800"
          fill="none"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="tvRibbonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0" />
              <stop offset="20%" stopColor="#10B981" stopOpacity="0.92" />
              <stop offset="60%" stopColor="#059669" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#047857" stopOpacity="0.5" />
            </linearGradient>
            <filter id="tvGlow">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          <path
            d="M -120 580 C 280 430 620 150 1560 200"
            stroke="url(#tvRibbonGrad)"
            strokeWidth="80"
            strokeLinecap="round"
            filter="url(#tvGlow)"
          />
        </svg>

        {/* Subtle warm ambient glow */}
        <div
          className="absolute top-1/2 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(234,88,12,0.10) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Emerald glow accent bottom-right */}
        <div
          className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse, rgba(16,185,129,0.08) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] items-center gap-12 lg:gap-20">

          {/* ── LEFT: HEADLINE + STATS ── */}
          <div className="max-w-xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shadow-[0_0_6px_#10B981]" />
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-300">
                THE EXECUTION ADVANTAGE
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.05]">
              More precision.
              <br />
              <span className="text-white/90">Zero burnout.</span>
            </h2>

            <p className="mt-5 text-sm text-neutral-400 font-light leading-relaxed max-w-sm">
              Luxury residential demand in Dubai surges every quarter. ALTIMATE
              orchestrates design and build into one system — your estate handed
              over on time, with zero contractor friction.
            </p>

            {/* Micro stats row */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-white/[0.04] border border-white/10 p-3 flex flex-col space-y-1.5 backdrop-blur-sm"
                >
                  <div className="flex items-center space-x-1.5" style={{ color: s.color }}>
                    {s.icon}
                    <span className="text-[9px] font-mono uppercase tracking-wider text-neutral-400">
                      {s.label}
                    </span>
                  </div>
                  <span className="text-base font-bold text-white">{s.value}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-[11px] font-mono tracking-widest uppercase bg-[#181715] hover:bg-[#22211E] text-white border border-white/15 transition-all shadow-lg hover:border-white/30"
              >
                View Timeline Guarantee
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-[11px] font-mono tracking-widest uppercase font-semibold text-white bg-gradient-to-r from-[#EA580C] to-[#F97316] hover:brightness-110 transition-all shadow-[0_0_22px_rgba(234,88,12,0.45)]"
              >
                Contact Sales
              </a>
            </div>
          </div>

          {/* ── RIGHT: DUAL COMPARISON CARDS ── */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5">

            {/* CARD 1: OTHERS */}
            <div className="rounded-[24px] bg-[#0E0D0C]/90 backdrop-blur-xl border border-white/[0.08] p-5 shadow-[0_24px_60px_rgba(0,0,0,0.9)] flex flex-col">
              {/* Header */}
              <div className="pb-3 border-b border-white/[0.07]">
                <h3 className="text-[13px] font-semibold text-neutral-300 tracking-wide">Others</h3>
              </div>

              {/* Members */}
              <div className="mt-4">
                <span className="text-[10px] text-neutral-500 font-mono block mb-2">Members</span>
                <div className="flex items-center -space-x-1.5">
                  {[1, 2, 3].map((n) => (
                    <div
                      key={n}
                      className="w-7 h-7 rounded-full bg-neutral-800 border-2 border-[#0E0D0C] flex items-center justify-center"
                    >
                      <User className="w-3.5 h-3.5 text-neutral-500" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Team Load */}
              <div className="mt-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] text-neutral-400 font-mono">Team load</span>
                  <span className="text-[10px] font-mono text-red-400 font-semibold">Maxed out</span>
                </div>
                <div className="flex items-end space-x-[2px] h-4">
                  {Array.from({ length: 28 }).map((_, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-[1px] transition-all ${
                        i < 10
                          ? 'h-full bg-emerald-500'
                          : i < 18
                          ? 'h-full bg-amber-500'
                          : i < 24
                          ? 'h-full bg-red-500'
                          : 'h-1/3 bg-white/10'
                      }`}
                      style={{ opacity: visible ? 1 : 0, transition: `opacity ${0.04 * i + 0.2}s ease` }}
                    />
                  ))}
                </div>
              </div>

              {/* Milestones */}
              <div className="mt-5 flex-1">
                <span className="text-[10px] text-neutral-400 font-mono block mb-2.5">Milestones on schedule</span>
                <div className="grid grid-cols-8 gap-1.5">
                  {Array.from({ length: MILESTONES }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-3.5 h-3.5 rounded-full border transition-all duration-300 ${
                        i < othersCount
                          ? 'border-emerald-500/80 bg-emerald-500/20'
                          : 'border-white/12 bg-transparent'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* CARD 2: ALTIMATE */}
            <div className="rounded-[24px] bg-[#0A1410]/90 backdrop-blur-xl border border-emerald-500/20 p-5 shadow-[0_24px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(16,185,129,0.08)] flex flex-col relative group hover:border-emerald-500/40 transition-all duration-500">
              {/* Green edge glow */}
              <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-emerald-500/[0.04] to-transparent pointer-events-none" />

              {/* Header */}
              <div className="pb-3 border-b border-emerald-500/15 flex items-center space-x-2">
                <span className="text-emerald-400 text-xs font-bold">✦</span>
                <h3 className="text-[13px] font-semibold text-white tracking-wide">ALTIMATE</h3>
              </div>

              {/* Members */}
              <div className="mt-4">
                <span className="text-[10px] text-neutral-500 font-mono block mb-2">Members</span>
                <div className="flex items-center -space-x-1.5">
                  {[1, 2, 3].map((n) => (
                    <div
                      key={n}
                      className="w-7 h-7 rounded-full bg-emerald-950/80 border-2 border-[#0A1410] flex items-center justify-center"
                    >
                      <User className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Team Load */}
              <div className="mt-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] text-neutral-400 font-mono">Team load</span>
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold">Steady</span>
                </div>
                <div className="flex items-end space-x-[2px] h-4">
                  {Array.from({ length: 28 }).map((_, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-[1px] transition-all ${
                        i < 9
                          ? 'h-full bg-emerald-400 shadow-[0_0_4px_rgba(16,185,129,0.6)]'
                          : 'h-1/3 bg-white/8'
                      }`}
                      style={{ opacity: visible ? 1 : 0, transition: `opacity ${0.04 * i + 0.2}s ease` }}
                    />
                  ))}
                </div>
              </div>

              {/* Milestones — all green + glow */}
              <div className="mt-5 flex-1">
                <span className="text-[10px] text-neutral-400 font-mono block mb-2.5">Milestones on schedule</span>
                <div className="grid grid-cols-8 gap-1.5">
                  {Array.from({ length: MILESTONES }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-3.5 h-3.5 rounded-full border transition-all duration-300 ${
                        i < altimateCount
                          ? 'border-emerald-400 bg-emerald-500/25 shadow-[0_0_6px_rgba(16,185,129,0.4)]'
                          : 'border-white/12 bg-transparent'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Verified badge at bottom */}
              <div className="mt-4 pt-3 border-t border-emerald-500/10 flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="text-[9px] font-mono tracking-wider text-emerald-400/80 uppercase">
                  Dubai Municipality Verified
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TurnkeyVelocity;
