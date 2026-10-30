import React from 'react';
import { Check } from 'lucide-react';

const supportingPoints = [
  'Thoughtful architectural planning.',
  'Carefully considered materials.',
  'Consistent design direction.',
  'Attention to finishing details.',
];

const imageryGroup = [
  {
    id: 'cg-1',
    src: '/images/P35.jpeg',
    title: 'PRIMARY LIVING SALON',
    subtitle: 'Integrated joinery & Italian marble flooring',
    tag: 'INTERIOR',
  },
  {
    id: 'cg-2',
    src: '/images/P37.jpeg',
    title: 'CULINARY PRECISION',
    subtitle: 'Concealed storage & monolithic island',
    tag: 'MILLWORK',
  },
  {
    id: 'cg-3',
    src: '/images/P39.jpeg',
    title: 'MASTER SANCTUARY',
    subtitle: 'Private dressing gallery & ambient lighting',
    tag: 'SUITE',
  },
];

const stagesGroup = [
  {
    step: '01',
    label: 'ARCHITECTURAL CONCEPT',
    desc: 'Volume, light, and orientation tailored to plot dynamics',
    img: '/images/P41.jpeg',
  },
  {
    step: '02',
    label: 'MATERIAL COHESION',
    desc: 'Unified palette across stone, timber, metal, and glass',
    img: '/images/P43.jpeg',
  },
  {
    step: '03',
    label: 'SEAMLESS REALIZATION',
    desc: 'Direct manufacturer control and zero-tolerance installation',
    img: '/images/P44.jpeg',
  },
];

export const CohesiveVision: React.FC = () => {
  return (
    <section
      id="cohesive"
      className="relative min-h-screen w-full bg-[#070707] py-28 sm:py-36 px-4 sm:px-6 lg:px-12 flex flex-col items-center justify-center overflow-hidden select-none border-t border-white/5"
    >
      {/* Soft Green & Warm Amber Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div
          className="absolute top-[10%] -left-[10%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full ambient-glow-lg"
          style={{
            background:
              'radial-gradient(circle, rgba(16, 185, 129, 0.14) 0%, rgba(18, 55, 40, 0.18) 45%, transparent 75%)',
          }}
        />
        <div
          className="absolute -bottom-[10%] right-[10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full ambient-glow-lg"
          style={{
            background:
              'radial-gradient(circle, rgba(214, 183, 121, 0.18) 0%, rgba(196, 130, 63, 0.12) 40%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col items-center">
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.28em] text-[#D6B779] font-medium block mb-3">
            A COHESIVE DESIGN APPROACH
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-[1.08]">
            Every Space. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D6B779] to-white">
              One Clear Vision.
            </span>
          </h2>

          <p className="mt-5 text-sm sm:text-base md:text-[17px] text-neutral-300 leading-relaxed font-light max-w-xl mx-auto">
            From the first concept to the finishing touches, ALTIMATE brings design intent,
            materials, and execution together in a cohesive experience.
          </p>

          {/* Compact Supporting Points */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {supportingPoints.map((point) => (
              <div
                key={point}
                className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300 text-xs font-light"
              >
                <Check className="w-3.5 h-3.5 text-[#D6B779]" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dual Visual Groups */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* GROUP 1: Architectural & Interior Spatial Imagery */}
          <div className="rounded-3xl bg-[#121110]/90 border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <span className="text-xs font-mono tracking-widest text-[#D6B779] uppercase">
                GROUP 01 · SPATIAL HARMONY
              </span>
              <span className="text-xs font-mono text-neutral-400">3 CURATED ZONES</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-1">
              {imageryGroup.map((item) => (
                <div
                  key={item.id}
                  className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/40 group aspect-[3/4] flex flex-col justify-end p-4"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="relative z-10">
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-black/60 text-[#D6B779] border border-white/10">
                      {item.tag}
                    </span>
                    <h4 className="font-bold text-xs text-white uppercase mt-2">{item.title}</h4>
                    <p className="text-[10px] text-neutral-400 font-light line-clamp-1">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-neutral-400 flex items-center justify-between">
              <span>Consistent architectural language throughout the residence</span>
              <span className="text-[#D6B779]">01 / 02</span>
            </div>
          </div>

          {/* GROUP 2: Sequence of Project-Stage & Material-Presentation Panels */}
          <div className="rounded-3xl bg-[#121110]/90 border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <span className="text-xs font-mono tracking-widest text-[#D6B779] uppercase">
                GROUP 02 · PROGRESSION &amp; MATERIALITY
              </span>
              <span className="text-xs font-mono text-neutral-400">3 MILESTONES</span>
            </div>

            <div className="flex flex-col space-y-4 flex-1 justify-center">
              {stagesGroup.map((stg) => (
                <div
                  key={stg.step}
                  className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center space-x-4 hover:border-[#D6B779]/40 transition-colors"
                >
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border border-white/10 relative">
                    <img src={stg.img} alt={stg.label} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-xs text-[#D6B779] font-bold">{stg.step}</span>
                      <h4 className="font-bold text-sm text-white uppercase">{stg.label}</h4>
                    </div>
                    <p className="text-xs text-neutral-400 font-light mt-1">{stg.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-neutral-400 flex items-center justify-between">
              <span>Meticulous translation from blueprint to tactile space</span>
              <span className="text-[#D6B779]">02 / 02</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CohesiveVision;

