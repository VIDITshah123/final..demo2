import React, { useState, useEffect, useRef } from 'react';

interface ShowcaseCard {
  id: string;
  src: string;
  title: string;
  subtitle: string;
  tag: string;
  positionStyle: React.CSSProperties;
  aspectRatio: string;
  width: string;
  isEdgeCard?: boolean;
}

interface StageData {
  eyebrow: string;
  highlightWord: string;
  line1Suffix: string;
  line2: string;
  description: string;
  cards: ShowcaseCard[];
}

const stages: StageData[] = [
  // ================= STAGE 1: CONCEIVED WITH VISION · SIGNATURE RESIDENCES =================
  {
    eyebrow: 'SIGNATURE RESIDENCES · ARCHITECTURAL EXCELLENCE',
    highlightWord: 'Conceived',
    line1Suffix: 'with vision',
    line2: 'Bespoke & Elevated.',
    description:
      'From conceptual architectural blueprints to the final curated spatial ambiance, ALTIMATE delivers bespoke private residences tailored exclusively for elevated Dubai lifestyles.',
    cards: [
      // 4 Inner Anchor Cards (Framing Central Text)
      {
        id: 's1-inner-tl',
        src: '/images/P04.jpeg',
        title: 'VILLA LUMIÈRE',
        subtitle: 'Palm Jumeirah Beachfront Estate',
        tag: 'ARCHITECTURE',
        positionStyle: { top: '8%', left: '7%' },
        width: '280px',
        aspectRatio: '1 / 1',
      },
      {
        id: 's1-inner-tr',
        src: '/images/P14.jpeg',
        title: 'GRAND SALON',
        subtitle: 'Double-Height Dining & Ambient Lighting',
        tag: 'INTERIORS',
        positionStyle: { top: '8%', right: '7%' },
        width: '270px',
        aspectRatio: '4 / 5',
      },
      {
        id: 's1-inner-bl',
        src: '/images/P01.jpeg',
        title: 'THE AZURE SUITE',
        subtitle: 'Penthouse Living with Panoramic Skyline',
        tag: 'FIT-OUT',
        positionStyle: { bottom: '7%', left: '7%' },
        width: '290px',
        aspectRatio: '4 / 3',
      },
      {
        id: 's1-inner-br',
        src: '/images/P03.jpeg',
        title: 'SANCTUARY BAY',
        subtitle: 'Intimate Lighting & Italian Travertine',
        tag: 'MATERIALITY',
        positionStyle: { bottom: '7%', right: '7%' },
        width: '280px',
        aspectRatio: '1 / 1',
      },

      // 5 Outer Constellation Cards (Partially Clipped at Viewport Perimeter)
      {
        id: 's1-edge-tl',
        src: '/images/P02.jpeg',
        title: 'COASTAL MONOLITH',
        subtitle: 'Exterior Facade & Screen Architecture',
        tag: 'RESIDENTIAL',
        positionStyle: { top: '22%', left: '-7%' },
        width: '250px',
        aspectRatio: '4 / 5',
        isEdgeCard: true,
      },
      {
        id: 's1-edge-bl',
        src: '/images/P12.jpeg',
        title: 'CALACATTA GALLERY',
        subtitle: 'Bookmatched Marble Entrance Foyer',
        tag: 'STONEWORK',
        positionStyle: { bottom: '15%', left: '-5%' },
        width: '230px',
        aspectRatio: '3 / 4',
        isEdgeCard: true,
      },
      {
        id: 's1-edge-top',
        src: '/images/P21.jpeg',
        title: 'FACADE INTEGRATION',
        subtitle: 'Perimeter Terrace & Architectural Pergola',
        tag: 'EXTERIOR',
        positionStyle: { top: '-7%', right: '28%' },
        width: '240px',
        aspectRatio: '16 / 10',
        isEdgeCard: true,
      },
      {
        id: 's1-edge-tr',
        src: '/images/P05.jpeg',
        title: 'SKYLINE PENTHOUSE',
        subtitle: 'Triplex Living at Downtown Dubai',
        tag: 'PENTHOUSE',
        positionStyle: { top: '20%', right: '-7%' },
        width: '250px',
        aspectRatio: '3 / 4',
        isEdgeCard: true,
      },
      {
        id: 's1-edge-br',
        src: '/images/P23.jpeg',
        title: 'PRIVATE ATELIER',
        subtitle: 'Executive Study with Bronze Millwork',
        tag: 'BESPOKE',
        positionStyle: { bottom: '14%', right: '-5%' },
        width: '230px',
        aspectRatio: '1 / 1',
        isEdgeCard: true,
      },
    ],
  },

  // ================= STAGE 2: CRAFTED IN DETAIL · BESPOKE INTERIORS =================
  {
    eyebrow: 'MATERIAL MASTERY · BESPOKE INTERIORS',
    highlightWord: 'Crafted',
    line1Suffix: 'in detail',
    line2: 'Refined & Timeless.',
    description:
      'Custom Italian millwork, bookmatched Calacatta marble, and meticulously curated lighting designed to orchestrate harmonious, sensory living environments.',
    cards: [
      // 4 Inner Anchor Cards
      {
        id: 's2-inner-tl',
        src: '/images/P07.jpeg',
        title: 'MARINA SHORES',
        subtitle: 'Contemporary Villa Living & Lounge Space',
        tag: 'LIVING ROOM',
        positionStyle: { top: '8%', left: '7%' },
        width: '280px',
        aspectRatio: '1 / 1',
      },
      {
        id: 's2-inner-tr',
        src: '/images/P16.jpeg',
        title: 'BRONZE ACCENTS',
        subtitle: 'Fluted Wall Panels & Concealed Illumination',
        tag: 'JOINERY',
        positionStyle: { top: '8%', right: '7%' },
        width: '270px',
        aspectRatio: '4 / 5',
      },
      {
        id: 's2-inner-bl',
        src: '/images/P18.jpeg',
        title: 'FORM & FUNCTION',
        subtitle: 'Custom Millwork & Kitchen Island Centerpiece',
        tag: 'TURNKEY',
        positionStyle: { bottom: '7%', left: '7%' },
        width: '290px',
        aspectRatio: '3 / 4',
      },
      {
        id: 's2-inner-br',
        src: '/images/P06.jpeg',
        title: 'EMIRATES HILLS',
        subtitle: 'Double-Height Residence with Floor-to-Ceiling Glass',
        tag: 'ARCHITECTURE',
        positionStyle: { bottom: '7%', right: '7%' },
        width: '280px',
        aspectRatio: '1 / 1',
      },

      // 5 Outer Constellation Cards
      {
        id: 's2-edge-tl',
        src: '/images/P20.jpeg',
        title: 'TACTILE FINISHES',
        subtitle: 'Natural Wood & Fluted Plaster Paneling',
        tag: 'FINISHES',
        positionStyle: { top: '22%', left: '-7%' },
        width: '240px',
        aspectRatio: '3 / 4',
        isEdgeCard: true,
      },
      {
        id: 's2-edge-bl',
        src: '/images/P28.jpeg',
        title: 'ARCHITECTURAL FIXTURES',
        subtitle: 'Precision Detail in Brushed Gunmetal',
        tag: 'HARDWARE',
        positionStyle: { bottom: '15%', left: '-5%' },
        width: '230px',
        aspectRatio: '1 / 1',
        isEdgeCard: true,
      },
      {
        id: 's2-edge-top',
        src: '/images/P25.jpeg',
        title: 'MARBLE JOINERY',
        subtitle: 'Seamless Transition from Stone to Timber',
        tag: 'STONEWORK',
        positionStyle: { top: '-7%', left: '26%' },
        width: '240px',
        aspectRatio: '4 / 5',
        isEdgeCard: true,
      },
      {
        id: 's2-edge-tr',
        src: '/images/P26.jpeg',
        title: 'CURATED LIGHTING',
        subtitle: 'Recessed Architectural Track Illumination',
        tag: 'LIGHTING',
        positionStyle: { top: '20%', right: '-7%' },
        width: '250px',
        aspectRatio: '4 / 5',
        isEdgeCard: true,
      },
      {
        id: 's2-edge-br',
        src: '/images/P30.jpeg',
        title: 'CALACATTA OVAL',
        subtitle: 'Sculptural Dining Table & Custom FF&E',
        tag: 'FURNITURE',
        positionStyle: { bottom: '14%', right: '-5%' },
        width: '230px',
        aspectRatio: '1 / 1',
        isEdgeCard: true,
      },
    ],
  },

  // ================= STAGE 3: DELIVERED TURNKEY · PROJECT EXECUTION =================
  {
    eyebrow: 'TURNKEY FIT-OUT · PROJECT EXECUTION',
    highlightWord: 'Delivered',
    line1Suffix: 'turnkey',
    line2: 'Flawless & On-schedule.',
    description:
      'Complete end-to-end execution, authority approvals, precision engineering, and turnkey handover delivered with uncompromising craftsmanship across Dubai.',
    cards: [
      // 4 Inner Anchor Cards
      {
        id: 's3-inner-tl',
        src: '/images/P10.jpeg',
        title: 'MASTER SANCTUARY',
        subtitle: 'Penthouse Bedroom Suite with Custom Wardrobes',
        tag: 'PENTHOUSE',
        positionStyle: { top: '8%', left: '7%' },
        width: '280px',
        aspectRatio: '1 / 1',
      },
      {
        id: 's3-inner-tr',
        src: '/images/P15.jpeg',
        title: 'CULINARY SUITE',
        subtitle: 'Seamless Monolith Kitchen & Wine Cellar',
        tag: 'FIT-OUT',
        positionStyle: { top: '8%', right: '7%' },
        width: '280px',
        aspectRatio: '1 / 1',
      },
      {
        id: 's3-inner-bl',
        src: '/images/P17.jpeg',
        title: 'AOLAO RESIDENCE',
        subtitle: 'Conversational Lounge & Suspended Fireplace',
        tag: 'RESIDENTIAL',
        positionStyle: { bottom: '7%', left: '7%' },
        width: '290px',
        aspectRatio: '3 / 4',
      },
      {
        id: 's3-inner-br',
        src: '/images/P19.jpeg',
        title: 'SPA BATHROOM',
        subtitle: 'Bookmatched Nero Marquina & Freestanding Tub',
        tag: 'WELLNESS',
        positionStyle: { bottom: '7%', right: '7%' },
        width: '270px',
        aspectRatio: '4 / 5',
      },

      // 5 Outer Constellation Cards
      {
        id: 's3-edge-tl',
        src: '/images/P38.jpeg',
        title: 'TERRACE HORIZON',
        subtitle: 'Indoor-Outdoor Infinity Glass Pergola',
        tag: 'TERRACE',
        positionStyle: { top: '22%', left: '-7%' },
        width: '250px',
        aspectRatio: '16 / 10',
        isEdgeCard: true,
      },
      {
        id: 's3-edge-bl',
        src: '/images/P42.jpeg',
        title: 'CHOREOGRAPHED LIGHT',
        subtitle: 'Automated Scene Lighting for Twilight',
        tag: 'AUTOMATION',
        positionStyle: { bottom: '15%', left: '-5%' },
        width: '230px',
        aspectRatio: '1 / 1',
        isEdgeCard: true,
      },
      {
        id: 's3-edge-top',
        src: '/images/P36.jpeg',
        title: 'CEILING ARCHITECTURE',
        subtitle: 'Acoustic Wood Ribs & Indirect Coves',
        tag: 'ENGINEERING',
        positionStyle: { top: '-7%', right: '30%' },
        width: '240px',
        aspectRatio: '4 / 3',
        isEdgeCard: true,
      },
      {
        id: 's3-edge-tr',
        src: '/images/P40.jpeg',
        title: 'EXECUTIVE SUITE',
        subtitle: 'Private Office Suite at DIFC Gate Towers',
        tag: 'COMMERCIAL',
        positionStyle: { top: '20%', right: '-7%' },
        width: '250px',
        aspectRatio: '16 / 10',
        isEdgeCard: true,
      },
      {
        id: 's3-edge-br',
        src: '/images/P45.jpeg',
        title: 'TURNKEY COMPLETION',
        subtitle: 'Final Handover at Jumeirah Islands Villa',
        tag: 'HANDOVER',
        positionStyle: { bottom: '14%', right: '-5%' },
        width: '240px',
        aspectRatio: '1 / 1',
        isEdgeCard: true,
      },
    ],
  },
];

export const FloatingShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [stageIndex, setStageIndex] = useState(0);
  const [stageProgress, setStageProgress] = useState(0.5);

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
          const overallProgress = Math.max(0, Math.min(1, currentScroll / totalScrollable));

          if (overallProgress < 0.33) {
            setStageIndex(0);
            setStageProgress(overallProgress / 0.33);
          } else if (overallProgress < 0.67) {
            setStageIndex(1);
            setStageProgress((overallProgress - 0.33) / 0.34);
          } else {
            setStageIndex(2);
            setStageProgress((overallProgress - 0.67) / 0.33);
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

  const currentStage = stages[stageIndex];

  // Dot click navigation
  const handleDotClick = (index: number) => {
    if (!containerRef.current) return;
    const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
    const targetScroll = containerRef.current.offsetTop + (index / 2.2) * totalScrollable;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  return (
    <div
      id="showcase"
      ref={containerRef}
      className="relative w-full h-[320vh] bg-[#070707]"
    >
      {/* ================= PINNED STICKY CONTAINER ================= */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#070707] select-none">
        
        {/* ================= BACKGROUND ATMOSPHERIC LIGHTING ================= */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
          {/* Top-Left Ambient Glow */}
          <div
            className="absolute -top-[15%] -left-[10%] w-[55vw] h-[55vw] max-w-[750px] max-h-[750px] rounded-full ambient-glow-lg transition-all duration-1000"
            style={{
              background:
                stageIndex === 0
                  ? 'radial-gradient(circle, rgba(16, 185, 129, 0.16) 0%, rgba(152, 106, 60, 0.12) 40%, transparent 70%)'
                  : stageIndex === 1
                  ? 'radial-gradient(circle, rgba(234, 88, 12, 0.18) 0%, rgba(16, 185, 129, 0.12) 45%, transparent 70%)'
                  : 'radial-gradient(circle, rgba(217, 70, 239, 0.14) 0%, rgba(234, 88, 12, 0.14) 45%, transparent 70%)',
            }}
          />

          {/* Top-Right Warm Amber Bloom */}
          <div
            className="absolute -top-[10%] -right-[15%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full ambient-glow-lg"
            style={{
              background: 'radial-gradient(circle, rgba(196, 130, 63, 0.22) 0%, rgba(48, 20, 18, 0.15) 50%, transparent 75%)',
            }}
          />

          {/* Bottom Center Ambient Glow */}
          <div
            className="absolute -bottom-[15%] left-[25%] right-[25%] h-[40vw] max-h-[500px] rounded-full ambient-glow-lg"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(16, 185, 129, 0.12) 0%, rgba(234, 88, 12, 0.1) 45%, transparent 75%)',
            }}
          />

          {/* Center Contrast Vignette */}
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(7, 7, 7, 0.45) 0%, rgba(7, 7, 7, 0.9) 100%)',
            }}
          />
        </div>

        {/* ================= 9 EXPANSIVE FLOATING CARDS (4 INNER + 5 EDGE CLIPPED) ================= */}
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          {currentStage.cards.map((card, i) => {
            // Parallax offset: subtle inward drift based on stageProgress
            const driftY = (stageProgress - 0.5) * (i < 4 ? (i < 2 ? -24 : 24) : (i % 2 === 0 ? -16 : 16));
            const driftX = (stageProgress - 0.5) * (i < 4 ? (i % 2 === 0 ? -24 : 24) : (i % 2 === 0 ? 16 : -16));

            return (
              <div
                key={card.id}
                className={`absolute pointer-events-auto transition-all duration-700 ease-out will-change-transform ${
                  card.isEdgeCard ? 'hidden md:block' : 'block'
                }`}
                style={{
                  ...card.positionStyle,
                  width: `min(${card.width}, ${card.isEdgeCard ? '19vw' : '23vw'})`,
                  minWidth: card.isEdgeCard ? '150px' : '180px',
                  transform: `translate3d(${driftX}px, ${driftY}px, 0)`,
                }}
              >
                {/* Rectangular Card Container matching the reference video layout */}
                <div
                  className="w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.85)] bg-[#11100E] relative group hover:border-white/35 transition-all duration-500"
                  style={{
                    aspectRatio: card.aspectRatio,
                  }}
                >
                  {/* Architectural Image Asset */}
                  <img
                    src={card.src}
                    alt={card.title}
                    loading="eager"
                    className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05] group-hover:scale-105 group-hover:brightness-100 transition-transform duration-700 ease-out"
                  />

                  {/* Corner Architectural Crosshair Accents */}
                  <div className="absolute top-2.5 left-2.5 text-white/40 font-mono text-[11px] pointer-events-none">
                    +
                  </div>
                  <div className="absolute top-2.5 right-2.5 text-white/40 font-mono text-[11px] pointer-events-none">
                    +
                  </div>
                  <div className="absolute bottom-2.5 left-2.5 text-white/40 font-mono text-[11px] pointer-events-none">
                    +
                  </div>
                  <div className="absolute bottom-2.5 right-2.5 text-white/40 font-mono text-[11px] pointer-events-none">
                    +
                  </div>

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2 py-0.5 rounded-[4px] text-[9px] font-mono tracking-wider uppercase bg-black/60 backdrop-blur-md text-[#D6B779] border border-white/10">
                      {card.tag}
                    </span>
                  </div>

                  {/* Bottom Text Overlay inside the Card */}
                  <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-black/95 via-black/60 to-transparent flex flex-col justify-end">
                    <h3 className="font-sans font-bold text-xs sm:text-sm text-white tracking-wide uppercase leading-tight truncate">
                      {card.title}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-neutral-400 font-light mt-0.5 line-clamp-1">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= CENTERED HEADLINE & ARCHITECTURAL DESCRIPTION ================= */}
        <div className="relative z-20 max-w-2xl mx-auto text-center px-4 sm:px-6 flex flex-col items-center justify-center pointer-events-auto">
          
          {/* Eyebrow Label */}
          <div className="h-6 mb-3 overflow-hidden">
            <span className="text-[11px] sm:text-xs tracking-[0.28em] uppercase text-neutral-400 font-medium transition-all duration-300">
              {currentStage.eyebrow}
            </span>
          </div>

          {/* Central Headline with Green/Emerald Squiggly Brush Behind Dynamic Word */}
          <div className="min-h-[170px] sm:min-h-[200px] flex flex-col items-center justify-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold text-white tracking-tight leading-[1.05] transition-all duration-500">
              {/* Row 1 with Squiggly Highlighter Wave */}
              <span className="block">
                <span className="relative inline-block mr-2.5">
                  {/* Organic Green Squiggly Wave Stroke */}
                  <svg
                    className="absolute -inset-x-3 -inset-y-1.5 w-[calc(100%+24px)] h-[calc(100%+12px)] -z-10 text-[#10B981] opacity-95 transition-transform duration-500 ease-out transform -rotate-1"
                    viewBox="0 0 240 60"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M 12 32 Q 55 12 120 30 T 225 24 C 238 34 232 50 210 46 Q 135 54 65 44 C 25 38 10 44 12 32 Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="relative z-10 text-white font-bold">
                    {currentStage.highlightWord}
                  </span>
                </span>
                <span className="text-white font-normal">{currentStage.line1Suffix}</span>
              </span>

              {/* Row 2: Fixed Sub-Punchline */}
              <span className="block mt-1 sm:mt-2 text-white">
                {currentStage.line2}
              </span>
            </h2>
          </div>

          {/* ================= 3 CAROUSEL STATE DOTS (• • •) ================= */}
          <div className="flex items-center space-x-2.5 my-5 sm:my-6">
            {stages.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleDotClick(idx)}
                className={`transition-all duration-300 rounded-full focus:outline-none ${
                  stageIndex === idx
                    ? 'w-6 h-1.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]'
                    : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Go to stage ${idx + 1}`}
              />
            ))}
          </div>

          {/* Supporting Description beneath dots */}
          <p className="text-xs sm:text-sm md:text-[15px] text-neutral-400 max-w-lg mx-auto leading-relaxed font-light transition-opacity duration-400 min-h-[48px]">
            {currentStage.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FloatingShowcase;
