import React, { useState } from 'react';
import { Home, Building2, Briefcase, Sparkles, ArrowRight } from 'lucide-react';

interface SpaceCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  cardTop: {
    src: string;
    tag: string;
    title: string;
    desc: string;
  };
  cardBottom: {
    src: string;
    tag: string;
    title: string;
    desc: string;
  };
}

const categories: SpaceCategory[] = [
  {
    id: 'residences',
    title: 'Private Residences',
    subtitle: 'Beachfront villas, gated estates & sanctuary compounds',
    icon: <Home className="w-5 h-5 text-neutral-300" />,
    cardTop: {
      src: '/images/P04.jpeg',
      tag: 'PALM JUMEIRAH ESTATE',
      title: 'Villa Lumière Beachfront',
      desc: 'Double-height glass curtain wall overlooking the Arabian Gulf.',
    },
    cardBottom: {
      src: '/images/P14.jpeg',
      tag: 'EMIRATES HILLS',
      title: 'Formal Reception Salon',
      desc: 'Bookmatched Italian Calacatta marble and integrated architectural lighting.',
    },
  },
  {
    id: 'penthouses',
    title: 'Skyline Penthouses',
    subtitle: 'Triplex penthouses, sky lounges & 360° panoramas',
    icon: <Building2 className="w-5 h-5 text-neutral-300" />,
    cardTop: {
      src: '/images/P01.jpeg',
      tag: 'DOWNTOWN DUBAI',
      title: 'Sky Palace Duplex',
      desc: 'High-altitude panoramic living framed by bronze architectural fins.',
    },
    cardBottom: {
      src: '/images/P05.jpeg',
      tag: 'DIFC HORIZON',
      title: 'Private Sky Terrace',
      desc: 'Infinity edge reflecting pool with uninterrupted Burj Khalifa views.',
    },
  },
  {
    id: 'commercial',
    title: 'Executive Headquarters',
    subtitle: 'Family offices, boardroom suites & flagship embassies',
    icon: <Briefcase className="w-5 h-5 text-neutral-300" />,
    cardTop: {
      src: '/images/P18.jpeg',
      tag: 'DIFC GATE PRECINCT',
      title: 'Family Office Sanctuary',
      desc: 'Acoustic fluted walnut paneling and discreet executive hospitality bar.',
    },
    cardBottom: {
      src: '/images/P23.jpeg',
      tag: 'D3 DESIGN DISTRICT',
      title: 'Partner Boardroom Suite',
      desc: 'Monolithic quartz conferencing table with concealed AV connectivity.',
    },
  },
  {
    id: 'hospitality',
    title: 'Bespoke Hospitality',
    subtitle: 'Private wellness spas, tasting cellars & cigar lounges',
    icon: <Sparkles className="w-5 h-5 text-neutral-300" />,
    cardTop: {
      src: '/images/P28.jpeg',
      tag: 'JUMEIRAH BAY',
      title: 'Thermal Stone Wellness Spa',
      desc: 'Heated Finnish cedar sauna and hydrotherapy rain suite.',
    },
    cardBottom: {
      src: '/images/P30.jpeg',
      tag: 'PRIVATE COMPOUND',
      title: 'Sommelier Tasting Lounge',
      desc: 'Climate-controlled glass wine vault with custom brushed brass racks.',
    },
  },
];

export const OneVisionEverySpace: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const current = categories[activeTab];

  return (
    <section className="relative w-full py-28 md:py-36 bg-[#070707] text-[#F4F0E8] overflow-hidden selection:bg-[#D6B779]/25">
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute top-1/2 -right-20 w-[600px] h-[600px] rounded-full ambient-glow"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, rgba(7, 7, 7, 0) 70%)',
          }}
        />
        <div
          className="absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full ambient-glow"
          style={{
            background: 'radial-gradient(circle, rgba(234, 88, 12, 0.1) 0%, rgba(7, 7, 7, 0) 70%)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] items-center gap-12 lg:gap-16">
          
          {/* ================= LEFT COLUMN: DYNAMIC CARDS CORRESPONDING TO ACTIVE TAB ================= */}
          <div className="space-y-6">
            
            {/* Top Card */}
            <div className="rounded-[24px] bg-[#11100F] border border-white/10 overflow-hidden shadow-2xl relative group transition-all duration-500 hover:border-white/25">
              <div className="w-full aspect-[16/10] overflow-hidden relative">
                <img
                  src={current.cardTop.src}
                  alt={current.cardTop.title}
                  className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded text-[10px] font-mono tracking-wider uppercase bg-black/70 backdrop-blur-md text-[#D6B779] border border-white/10">
                    {current.cardTop.tag}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                    {current.cardTop.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 font-light mt-1">
                    {current.cardTop.desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Card */}
            <div className="rounded-[24px] bg-[#11100F] border border-white/10 overflow-hidden shadow-2xl relative group transition-all duration-500 hover:border-white/25">
              <div className="w-full aspect-[16/9] overflow-hidden relative">
                <img
                  src={current.cardBottom.src}
                  alt={current.cardBottom.title}
                  className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded text-[10px] font-mono tracking-wider uppercase bg-black/70 backdrop-blur-md text-[#10B981] border border-white/10">
                    {current.cardBottom.tag}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                    {current.cardBottom.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 font-light mt-1">
                    {current.cardBottom.desc}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: HEADLINE, BUTTONS & VERTICAL ACCORDION TABS (Matching Frame 9 & 10) ================= */}
          <div className="flex flex-col">
            
            {/* Headline with Green Wave Stroke under "space" */}
            <h2 className="text-4xl sm:text-5xl lg:text-[62px] font-bold text-white tracking-tight leading-[1.05]">
              One vision.
              <br />
              <span className="relative inline-block">
                <span>Every space.</span>
                <svg
                  className="absolute left-0 -bottom-2 w-full h-4 text-[#10B981] -z-10"
                  viewBox="0 0 260 20"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 5 12 Q 65 3 130 11 T 255 10"
                    stroke="currentColor"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-mono tracking-widest uppercase bg-[#181715] hover:bg-[#22211E] text-white border border-white/15 transition-all shadow-lg hover:border-white/30"
              >
                Get Started
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-mono tracking-widest uppercase font-semibold text-white bg-gradient-to-r from-[#EA580C] to-[#F97316] hover:from-[#F97316] hover:to-[#EA580C] transition-all shadow-[0_0_25px_rgba(234,88,12,0.45)]"
              >
                Contact Sales
              </a>
            </div>

            {/* Interactive Vertical Tab Group (Matching Frame 10) */}
            <div className="mt-12 space-y-3">
              {categories.map((cat, idx) => {
                const isActive = activeTab === idx;

                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 relative focus:outline-none flex items-start space-x-4 ${
                      isActive
                        ? 'bg-[#181615] border-white/20 shadow-xl'
                        : 'bg-[#11100E]/70 border-white/5 hover:border-white/15 hover:bg-[#151412]'
                    }`}
                  >
                    {/* Active Left Indicator Bar */}
                    {isActive && (
                      <span className="absolute left-0 top-3 bottom-3 w-1 bg-white rounded-r-full" />
                    )}

                    <div className="w-10 h-10 rounded-xl bg-black/60 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      {cat.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="text-base font-bold text-white tracking-wide">
                          {cat.title}
                        </h4>
                        <ArrowRight
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isActive ? 'text-white translate-x-1' : 'text-neutral-600'
                          }`}
                        />
                      </div>
                      <p className="text-xs text-neutral-400 mt-1 font-light leading-relaxed">
                        {cat.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default OneVisionEverySpace;

