import React from 'react';
import { Compass, Palette, ShieldCheck, Key } from 'lucide-react';

interface ApproachCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  tag: string;
}

const approachCards: ApproachCard[] = [
  {
    id: 'app-1',
    icon: <Compass className="w-5 h-5 text-[#D6B779]" />,
    title: 'Architecture',
    description: 'Thoughtful spatial planning and architectural design.',
    tag: 'SPATIAL VISION',
  },
  {
    id: 'app-2',
    icon: <Palette className="w-5 h-5 text-[#D6B779]" />,
    title: 'Interior Design',
    description: 'Considered layouts, materials, lighting, and finishes.',
    tag: 'MATERIAL CURATION',
  },
  {
    id: 'app-3',
    icon: <ShieldCheck className="w-5 h-5 text-[#D6B779]" />,
    title: 'Fit-Out Management',
    description: 'Coordinated execution with attention to quality and detail.',
    tag: 'PRECISION BUILD',
  },
  {
    id: 'app-4',
    icon: <Key className="w-5 h-5 text-[#D6B779]" />,
    title: 'Turnkey Delivery',
    description: 'A cohesive journey from initial concept to completed space.',
    tag: 'END-TO-END',
  },
];

export const ApproachCards: React.FC = () => {
  return (
    <section
      id="approach"
      className="relative min-h-screen w-full bg-[#070707] py-28 sm:py-36 px-4 sm:px-6 lg:px-12 flex items-center justify-center overflow-hidden select-none border-t border-white/5"
    >
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div
          className="absolute top-[20%] -left-[10%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full ambient-glow-lg"
          style={{
            background:
              'radial-gradient(circle, rgba(214, 183, 121, 0.16) 0%, rgba(152, 106, 60, 0.1) 40%, transparent 70%)',
          }}
        />
        <div
          className="absolute -bottom-[10%] -right-[8%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full ambient-glow-lg"
          style={{
            background:
              'radial-gradient(circle, rgba(234, 88, 12, 0.15) 0%, rgba(27, 44, 45, 0.14) 45%, transparent 75%)',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Headline Column */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="mb-3">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.28em] text-[#D6B779] font-medium">
              THE ALTIMATE APPROACH
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-[1.08] mb-6">
            One Vision. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D6B779] to-white">
              Every Detail.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light max-w-md">
            Architecture, interiors, and fit-out management brought together through a thoughtful,
            coordinated approach.
          </p>

          <div className="mt-8 flex items-center space-x-3 text-xs font-mono text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span>Integrated Studio · Dubai, UAE</span>
          </div>
        </div>

        {/* Right 4 Vertically Arranged Cards */}
        <div className="lg:col-span-7 flex flex-col space-y-4">
          {approachCards.map((card, idx) => (
            <div
              key={card.id}
              className="group p-6 sm:p-7 rounded-2xl bg-[#121110]/90 backdrop-blur-xl border border-white/10 hover:border-[#D6B779]/40 transition-all duration-300 shadow-xl flex items-start space-x-5"
            >
              <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-[#D6B779]/40 flex items-center justify-center flex-shrink-0 transition-colors">
                {card.icon}
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#D6B779] transition-colors">
                    {card.title}
                  </h3>
                  <span className="text-[10px] font-mono text-neutral-400 group-hover:text-[#D6B779] transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  {card.description}
                </p>

                <div className="mt-3 flex items-center space-x-2">
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#D6B779] border border-white/5 uppercase">
                    {card.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachCards;

