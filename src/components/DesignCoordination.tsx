import React, { useState } from 'react';
import { CheckCircle2, ChevronRight, Layers, Ruler, Sparkles, Building, HardHat, Key } from 'lucide-react';

interface Stage {
  number: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  image: string;
  metric: string;
  details: string[];
}

const stages: Stage[] = [
  {
    number: '01',
    title: 'Concept & Planning',
    subtitle: 'Vision alignment, zoning & spatial masterplanning',
    icon: <Sparkles className="w-4 h-4 text-[#D6B779]" />,
    image: '/images/P09.jpeg',
    metric: '100% Client Aligned',
    details: ['Site survey & orientation study', 'Architectural volume massing', 'Feasibility & Dubai Municipality review'],
  },
  {
    number: '02',
    title: 'Design Development',
    subtitle: 'Photorealistic 3D renders, MEP & detail engineering',
    icon: <Ruler className="w-4 h-4 text-[#D6B779]" />,
    image: '/images/P22.jpeg',
    metric: 'BIM Level 2 Precision',
    details: ['Structural calculations & MEP schematics', 'Curated lighting layouts', 'Acoustic & thermal integration'],
  },
  {
    number: '03',
    title: 'Materials & Finishes',
    subtitle: 'Global procurement of Italian marble & bespoke millwork',
    icon: <Layers className="w-4 h-4 text-[#D6B779]" />,
    image: '/images/P23.jpeg',
    metric: 'Hand-Selected Slabs',
    details: ['Direct Italian quarry quarry sourcing', 'Custom brass & gunmetal ironmongery', 'Physical sample board reviews'],
  },
  {
    number: '04',
    title: 'Fit-Out Execution',
    subtitle: 'Dedicated on-site engineering & master craftsmen',
    icon: <HardHat className="w-4 h-4 text-[#D6B779]" />,
    image: '/images/P33.jpeg',
    metric: 'Daily QA / QC Audits',
    details: ['Dedicated project manager on-site', 'Milestone milestone tracking', 'Authority inspections & safety'],
  },
  {
    number: '05',
    title: 'Final Handover',
    subtitle: 'Turnkey styling, deep snagging & white-glove delivery',
    icon: <Key className="w-4 h-4 text-[#D6B779]" />,
    image: '/images/P34.jpeg',
    metric: 'Zero-Defect Standard',
    details: ['Comprehensive deep-clean & testing', 'Operation manuals & warranties', 'White-glove handover ceremony'],
  },
];

export const DesignCoordination: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(1);
  const activeStage = stages[activeStageIndex];

  return (
    <section
      id="process"
      className="relative min-h-screen w-full bg-[#070707] py-28 sm:py-36 px-4 sm:px-6 lg:px-12 flex items-center justify-center overflow-hidden select-none border-t border-white/5"
    >
      {/* Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div
          className="absolute -top-[10%] left-[20%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full ambient-glow-lg"
          style={{
            background:
              'radial-gradient(circle, rgba(214, 183, 121, 0.16) 0%, rgba(152, 106, 60, 0.12) 40%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-[5%] -right-[8%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full ambient-glow-lg"
          style={{
            background:
              'radial-gradient(circle, rgba(234, 88, 12, 0.16) 0%, rgba(27, 44, 45, 0.18) 45%, transparent 75%)',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        
        {/* ================= LEFT COLUMN: EDITORIAL CONTENT (5 Cols) ================= */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="mb-3">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.28em] text-[#D6B779] font-medium">
              A MORE CONSIDERED PROCESS
            </span>
          </div>

          <h2 className="text-4xl sm:text-4xl lg:text-[38px] font-bold text-white tracking-tight leading-[1.08] mb-6">
            Every Detail. <br />
            Under Control.
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light mb-8 max-w-lg">
            From design coordination and material selection to fit-out execution, every stage is
            approached with clarity, precision, and attention to detail.
          </p>

          {/* Interactive Stage Selector List */}
          <div className="flex flex-col space-y-2">
            {stages.map((stage, idx) => {
              const isActive = activeStageIndex === idx;
              return (
                <button
                  key={stage.number}
                  type="button"
                  onClick={() => setActiveStageIndex(idx)}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-xl transition-all duration-300 border flex items-center justify-between ${
                    isActive
                      ? 'bg-[#151311] border-[#D6B779]/40 shadow-lg shadow-black/60'
                      : 'bg-transparent border-white/5 hover:border-white/10 hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="flex items-center space-x-3.5">
                    <span className="font-mono text-xs text-[#D6B779] font-semibold">{stage.number}</span>
                    <div>
                      <p
                        className={`text-sm sm:text-[15px] font-medium transition-colors ${
                          isActive ? 'text-white' : 'text-neutral-400'
                        }`}
                      >
                        {stage.title}
                      </p>
                      <p className="text-[11px] text-neutral-400 font-light truncate max-w-[260px] sm:max-w-xs">
                        {stage.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    {isActive && (
                      <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-[#D6B779]/15 text-[#D6B779] border border-[#D6B779]/30">
                        ACTIVE
                      </span>
                    )}
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isActive ? 'text-[#D6B779] translate-x-1' : 'text-neutral-600'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= RIGHT COLUMN: CONNECTED PRESENTATION PANELS (7 Cols) ================= */}
        <div className="lg:col-span-7 w-full">
          <div className="relative w-full rounded-3xl bg-[#121110]/95 backdrop-blur-2xl border border-white/10 p-6 sm:p-8 shadow-[0_25px_65px_rgba(0,0,0,0.85)] flex flex-col justify-between">
            
            {/* Main Stage Overview Panel */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-[#D6B779]/15 border border-[#D6B779]/30 flex items-center justify-center">
                  {activeStage.icon}
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#D6B779] uppercase tracking-widest">
                    STAGE {activeStage.number} OVERVIEW
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">{activeStage.title}</h3>
                </div>
              </div>

              <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 font-mono text-xs">
                {activeStage.metric}
              </div>
            </div>

            {/* Split Visual Presentation Area */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 my-6 items-center">
              {/* Architectural Image Preview (7 Cols) */}
              <div className="md:col-span-7 relative aspect-[16/11] rounded-2xl overflow-hidden border border-white/10 bg-black/40 group">
                <img
                  src={activeStage.image}
                  alt={activeStage.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/15 text-[9px] font-mono text-[#D6B779]">
                  LIVE WORKFLOW PREVIEW
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs text-neutral-300 font-light truncate">{activeStage.subtitle}</p>
                </div>
              </div>

              {/* Connected Detailed Milestone Checklist (5 Cols) */}
              <div className="md:col-span-5 flex flex-col justify-between space-y-3">
                <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-400">
                  KEY DELIVERABLES
                </span>
                {activeStage.details.map((detail) => (
                  <div
                    key={detail}
                    className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-start space-x-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-neutral-300 font-light leading-snug">{detail}</span>
                  </div>
                ))}

                <div className="p-3 rounded-xl bg-[#D6B779]/10 border border-[#D6B779]/20 flex items-center justify-between text-xs">
                  <span className="text-[#D6B779] font-medium">Turnkey Quality Index</span>
                  <span className="font-mono text-white font-bold">99.8%</span>
                </div>
              </div>
            </div>

            {/* Bottom Stepper Timeline */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {stages.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeStageIndex === idx ? 'w-8 bg-[#D6B779]' : 'w-2 bg-white/20'
                    }`}
                  />
                ))}
              </div>
              <span className="text-[10px] font-mono text-neutral-400">
                STAGE {activeStageIndex + 1} OF 5
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignCoordination;

