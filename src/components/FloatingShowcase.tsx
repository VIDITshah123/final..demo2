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
  // ================= STAGE 1: REAL OUTPUTS · ARCHITECTURAL SPACES =================
  {
    eyebrow: 'REAL OUTPUTS · ARCHITECTURAL SPACES',
    highlightWord: 'Prompted',
    line1Suffix: 'in seconds',
    line2: 'On-brand & Editable.',
    description:
      'Turn a spatial brief into polished architectural directions, then refine the layout, stone selections, custom millwork, and lighting with full creative control.',
    cards: [
      // 1. Inner Left Framing Card (Square, Directly Adjacent to Headline)
      {
        id: 's1-inner-left',
        src: '/images/P04.jpeg',
        title: 'VILLA LUMIÈRE',
        subtitle: 'Palm Jumeirah Beachfront Estate',
        tag: 'ARCHITECTURE',
        positionStyle: { top: '30%', left: 'max(4%, calc(50% - 545px))' },
        width: '285px',
        aspectRatio: '1 / 1',
      },

      // 2. Inner Right Framing Card (Square, Directly Adjacent to Headline, Slightly Higher)
      {
        id: 's1-inner-right',
        src: '/images/P14.jpeg',
        title: 'GRAND SALON',
        subtitle: 'Double-Height Dining & Ambient Lighting',
        tag: 'INTERIORS',
        positionStyle: { top: '22%', left: 'min(78%, calc(50% + 250px))' },
        width: '285px',
        aspectRatio: '1 / 1',
      },

      // 3. Mid-Left Edge Card (Tall Vertical, Partially Clipped at Screen Left)
      {
        id: 's1-edge-mid-left',
        src: '/images/P02.jpeg',
        title: 'COASTAL MONOLITH',
        subtitle: 'Exterior Facade & Screen Architecture',
        tag: 'RESIDENTIAL',
        positionStyle: { top: '27%', left: '-4%' },
        width: '260px',
        aspectRatio: '3 / 4',
        isEdgeCard: true,
      },

      // 4. Top-Left Edge Card (Partially Clipped at Screen Top-Left)
      {
        id: 's1-edge-top-left',
        src: '/images/P21.jpeg',
        title: 'FACADE INTEGRATION',
        subtitle: 'Perimeter Terrace & Architectural Pergola',
        tag: 'EXTERIOR',
        positionStyle: { top: '-5%', left: '1%' },
        width: '250px',
        aspectRatio: '4 / 5',
        isEdgeCard: true,
      },

      // 5. Bottom-Left Edge Card (Partially Clipped at Bottom-Left Corner)
      {
        id: 's1-edge-bottom-left',
        src: '/images/P01.jpeg',
        title: 'THE AZURE SUITE',
        subtitle: 'Penthouse Living with Panoramic Skyline',
        tag: 'FIT-OUT',
        positionStyle: { bottom: '-6%', left: '-2%' },
        width: '240px',
        aspectRatio: '1 / 1',
        isEdgeCard: true,
      },

      // 6. Bottom-Center-Left Edge Card (Tucked Along Lower Perimeter)
      {
        id: 's1-edge-bottom-mid',
        src: '/images/P12.jpeg',
        title: 'CALACATTA GALLERY',
        subtitle: 'Bookmatched Marble Entrance Foyer',
        tag: 'STONEWORK',
        positionStyle: { bottom: '-7%', left: '18%' },
        width: '260px',
        aspectRatio: '16 / 10',
        isEdgeCard: true,
      },

      // 7. Mid-Right Edge Card (Tall Vertical, Partially Clipped at Screen Right)
      {
        id: 's1-edge-mid-right',
        src: '/images/P05.jpeg',
        title: 'SKYLINE PENTHOUSE',
        subtitle: 'Triplex Living at Downtown Dubai',
        tag: 'PENTHOUSE',
        positionStyle: { top: '31%', right: '-3%' },
        width: '255px',
        aspectRatio: '9 / 16',
        isEdgeCard: true,
      },

      // 8. Top-Right Edge Card (Partially Clipped at Screen Top-Right)
      {
        id: 's1-edge-top-right',
        src: '/images/P03.jpeg',
        title: 'SANCTUARY BAY',
        subtitle: 'Intimate Lighting & Italian Travertine',
        tag: 'MATERIALITY',
        positionStyle: { top: '-5%', right: '5%' },
        width: '250px',
        aspectRatio: '1 / 1',
        isEdgeCard: true,
      },

      // 9. Bottom-Right Edge Card (Partially Clipped at Bottom-Right Corner)
      {
        id: 's1-edge-bottom-right',
        src: '/images/P23.jpeg',
        title: 'PRIVATE ATELIER',
        subtitle: 'Executive Study with Bronze Millwork',
        tag: 'BESPOKE',
        positionStyle: { bottom: '-6%', right: '3%' },
        width: '255px',
        aspectRatio: '4 / 5',
        isEdgeCard: true,
      },
    ],
  },

  // ================= STAGE 2: DESIGNED IN SECONDS · BESPOKE INTERIORS =================
  {
    eyebrow: 'CURATED MATERIALITY · BESPOKE INTERIORS',
    highlightWord: 'Designed',
    line1Suffix: 'in seconds',
    line2: 'On-brand & Editable.',
    description:
      'Create clean, flexible interiors you can keep adjusting in ALTIMATE Studio, from custom bronze joinery and lighting to bookmatched Italian marble.',
    cards: [
      // 1. Inner Left Framing Card (Square, Directly Adjacent to Headline)
      {
        id: 's2-inner-left',
        src: '/images/P07.jpeg',
        title: 'MARINA SHORES',
        subtitle: 'Contemporary Villa Living & Lounge Space',
        tag: 'LIVING ROOM',
        positionStyle: { top: '30%', left: 'max(4%, calc(50% - 545px))' },
        width: '285px',
        aspectRatio: '1 / 1',
      },

      // 2. Inner Right Framing Card (Square, Directly Adjacent to Headline, Slightly Higher)
      {
        id: 's2-inner-right',
        src: '/images/P16.jpeg',
        title: 'BRONZE ACCENTS',
        subtitle: 'Fluted Wall Panels & Concealed Illumination',
        tag: 'JOINERY',
        positionStyle: { top: '22%', left: 'min(78%, calc(50% + 250px))' },
        width: '285px',
        aspectRatio: '1 / 1',
      },

      // 3. Mid-Left Edge Card (Tall Vertical, Partially Clipped at Screen Left)
      {
        id: 's2-edge-mid-left',
        src: '/images/P20.jpeg',
        title: 'TACTILE FINISHES',
        subtitle: 'Natural Wood & Fluted Plaster Paneling',
        tag: 'FINISHES',
        positionStyle: { top: '27%', left: '-4%' },
        width: '260px',
        aspectRatio: '3 / 4',
        isEdgeCard: true,
      },

      // 4. Top-Left Edge Card (Partially Clipped at Screen Top-Left)
      {
        id: 's2-edge-top-left',
        src: '/images/P25.jpeg',
        title: 'MARBLE JOINERY',
        subtitle: 'Seamless Transition from Stone to Timber',
        tag: 'STONEWORK',
        positionStyle: { top: '-5%', left: '1%' },
        width: '250px',
        aspectRatio: '4 / 5',
        isEdgeCard: true,
      },

      // 5. Bottom-Left Edge Card (Partially Clipped at Bottom-Left Corner)
      {
        id: 's2-edge-bottom-left',
        src: '/images/P18.jpeg',
        title: 'FORM & FUNCTION',
        subtitle: 'Custom Millwork & Kitchen Island Centerpiece',
        tag: 'TURNKEY',
        positionStyle: { bottom: '-6%', left: '-2%' },
        width: '240px',
        aspectRatio: '1 / 1',
        isEdgeCard: true,
      },

      // 6. Bottom-Center-Left Edge Card (Tucked Along Lower Perimeter)
      {
        id: 's2-edge-bottom-mid',
        src: '/images/P28.jpeg',
        title: 'ARCHITECTURAL FIXTURES',
        subtitle: 'Precision Detail in Brushed Gunmetal',
        tag: 'HARDWARE',
        positionStyle: { bottom: '-7%', left: '18%' },
        width: '260px',
        aspectRatio: '16 / 10',
        isEdgeCard: true,
      },

      // 7. Mid-Right Edge Card (Tall Vertical, Partially Clipped at Screen Right)
      {
        id: 's2-edge-mid-right',
        src: '/images/P26.jpeg',
        title: 'CURATED LIGHTING',
        subtitle: 'Recessed Architectural Track Illumination',
        tag: 'LIGHTING',
        positionStyle: { top: '31%', right: '-3%' },
        width: '255px',
        aspectRatio: '9 / 16',
        isEdgeCard: true,
      },

      // 8. Top-Right Edge Card (Partially Clipped at Screen Top-Right)
      {
        id: 's2-edge-top-right',
        src: '/images/P06.jpeg',
        title: 'EMIRATES HILLS',
        subtitle: 'Double-Height Residence with Glass Monoliths',
        tag: 'ARCHITECTURE',
        positionStyle: { top: '-5%', right: '5%' },
        width: '250px',
        aspectRatio: '1 / 1',
        isEdgeCard: true,
      },

      // 9. Bottom-Right Edge Card (Partially Clipped at Bottom-Right Corner)
      {
        id: 's2-edge-bottom-right',
        src: '/images/P30.jpeg',
        title: 'CALACATTA OVAL',
        subtitle: 'Sculptural Dining Table & Custom FF&E',
        tag: 'FURNITURE',
        positionStyle: { bottom: '-6%', right: '3%' },
        width: '255px',
        aspectRatio: '4 / 5',
        isEdgeCard: true,
      },
    ],
  },

  // ================= STAGE 3: CREATED IN SECONDS · PROJECT EXECUTION =================
  {
    eyebrow: 'TURNKEY FIT-OUT · PROJECT EXECUTION',
    highlightWord: 'Created',
    line1Suffix: 'in seconds',
    line2: 'On-brand & Editable.',
    description:
      'Generate spaces that stay rigorously consistent with your architectural brief, engineered across Dubai with guaranteed turnkey delivery and single-source accountability.',
    cards: [
      // 1. Inner Left Framing Card (Square, Directly Adjacent to Headline)
      {
        id: 's3-inner-left',
        src: '/images/P10.jpeg',
        title: 'MASTER SANCTUARY',
        subtitle: 'Penthouse Bedroom Suite with Custom Wardrobes',
        tag: 'PENTHOUSE',
        positionStyle: { top: '30%', left: 'max(4%, calc(50% - 545px))' },
        width: '285px',
        aspectRatio: '1 / 1',
      },

      // 2. Inner Right Framing Card (Square, Directly Adjacent to Headline, Slightly Higher)
      {
        id: 's3-inner-right',
        src: '/images/P15.jpeg',
        title: 'CULINARY SUITE',
        subtitle: 'Seamless Monolith Kitchen & Wine Cellar',
        tag: 'FIT-OUT',
        positionStyle: { top: '22%', left: 'min(78%, calc(50% + 250px))' },
        width: '285px',
        aspectRatio: '1 / 1',
      },

      // 3. Mid-Left Edge Card (Tall Vertical, Partially Clipped at Screen Left)
      {
        id: 's3-edge-mid-left',
        src: '/images/P38.jpeg',
        title: 'TERRACE HORIZON',
        subtitle: 'Indoor-Outdoor Infinity Glass Pergola',
        tag: 'TERRACE',
        positionStyle: { top: '27%', left: '-4%' },
        width: '260px',
        aspectRatio: '3 / 4',
        isEdgeCard: true,
      },

      // 4. Top-Left Edge Card (Partially Clipped at Screen Top-Left)
      {
        id: 's3-edge-top-left',
        src: '/images/P36.jpeg',
        title: 'CEILING ARCHITECTURE',
        subtitle: 'Acoustic Wood Ribs & Indirect Coves',
        tag: 'ENGINEERING',
        positionStyle: { top: '-5%', left: '1%' },
        width: '250px',
        aspectRatio: '4 / 5',
        isEdgeCard: true,
      },

      // 5. Bottom-Left Edge Card (Partially Clipped at Bottom-Left Corner)
      {
        id: 's3-edge-bottom-left',
        src: '/images/P17.jpeg',
        title: 'AOLAO RESIDENCE',
        subtitle: 'Conversational Lounge & Suspended Fireplace',
        tag: 'RESIDENTIAL',
        positionStyle: { bottom: '-6%', left: '-2%' },
        width: '240px',
        aspectRatio: '1 / 1',
        isEdgeCard: true,
      },

      // 6. Bottom-Center-Left Edge Card (Tucked Along Lower Perimeter)
      {
        id: 's3-edge-bottom-mid',
        src: '/images/P42.jpeg',
        title: 'CHOREOGRAPHED LIGHT',
        subtitle: 'Automated Scene Lighting for Twilight',
        tag: 'AUTOMATION',
        positionStyle: { bottom: '-7%', left: '18%' },
        width: '260px',
        aspectRatio: '16 / 10',
        isEdgeCard: true,
      },

      // 7. Mid-Right Edge Card (Tall Vertical, Partially Clipped at Screen Right)
      {
        id: 's3-edge-mid-right',
        src: '/images/P40.jpeg',
        title: 'EXECUTIVE SUITE',
        subtitle: 'Private Office Suite at DIFC Gate Towers',
        tag: 'COMMERCIAL',
        positionStyle: { top: '31%', right: '-3%' },
        width: '255px',
        aspectRatio: '9 / 16',
        isEdgeCard: true,
      },

      // 8. Top-Right Edge Card (Partially Clipped at Screen Top-Right)
      {
        id: 's3-edge-top-right',
        src: '/images/P19.jpeg',
        title: 'SPA BATHROOM',
        subtitle: 'Bookmatched Nero Marquina & Freestanding Tub',
        tag: 'WELLNESS',
        positionStyle: { top: '-5%', right: '5%' },
        width: '250px',
        aspectRatio: '1 / 1',
        isEdgeCard: true,
      },

      // 9. Bottom-Right Edge Card (Partially Clipped at Bottom-Right Corner)
      {
        id: 's3-edge-bottom-right',
        src: '/images/P45.jpeg',
        title: 'TURNKEY COMPLETION',
        subtitle: 'Final Handover at Jumeirah Islands Villa',
        tag: 'HANDOVER',
        positionStyle: { bottom: '-6%', right: '3%' },
        width: '255px',
        aspectRatio: '4 / 5',
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
      className="relative w-full h-[260vh] md:h-[320vh] bg-[#070707]"
    >
      {/* ================= PINNED STICKY CONTAINER ================= */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#070707] select-none px-4">
        
        {/* ================= CINEMATIC AMBIENT ORB SYSTEM ================= */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
          {/* LAYER A — Stage-responsive amber/emerald top-left (independent drift) */}
          <div
            className="ambient-orb ambient-orb-amber-show transition-[background] duration-1000"
            style={{
              width: '72vw',
              height: '72vw',
              maxWidth: 960,
              maxHeight: 960,
              top: '-14%',
              left: '-12%',
              background:
                stageIndex === 0
                  ? 'radial-gradient(ellipse 66% 58% at 36% 30%, rgba(16,185,129,0.58) 0%, rgba(5,150,105,0.32) 45%, transparent 78%)'
                  : stageIndex === 1
                  ? 'radial-gradient(ellipse 66% 58% at 36% 30%, rgba(234,88,12,0.58) 0%, rgba(16,185,129,0.30) 48%, transparent 78%)'
                  : 'radial-gradient(ellipse 66% 58% at 36% 30%, rgba(217,120,41,0.58) 0%, rgba(234,88,12,0.32) 48%, transparent 78%)',
            }}
          />

          {/* LAYER B — Warm honey/amber, upper-right, independent path */}
          <div
            className="ambient-orb ambient-orb-bronze-show"
            style={{
              width: '68vw',
              height: '68vw',
              maxWidth: 920,
              maxHeight: 920,
              top: '-10%',
              right: '-14%',
              background: 'radial-gradient(circle at 68% 30%, rgba(245,158,11,0.48) 0%, rgba(196,130,63,0.26) 46%, transparent 82%)',
            }}
          />

          {/* LAYER C — Emerald floor reflection, lower-center */}
          <div
            className="ambient-orb ambient-orb-emerald-show"
            style={{
              width: '54vw',
              height: '54vw',
              maxWidth: 720,
              maxHeight: 720,
              bottom: '-18%',
              left: '18%',
              background: 'radial-gradient(ellipse at center, rgba(16,185,129,0.36) 0%, rgba(214,183,121,0.20) 48%, transparent 78%)',
            }}
          />

          {/* Deep center vignette */}
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 900px 600px at center, rgba(7,7,7,0.80) 0%, rgba(7,7,7,0.44) 55%, transparent 95%)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070707]/28 via-transparent to-[#070707]/58 pointer-events-none" />
        </div>

        {/* ================= 9 PRECISELY POSITIONED FLOATING CARDS (DESKTOP ONLY: 768px+) ================= */}
        <div className="hidden md:block absolute inset-0 pointer-events-none z-10 overflow-hidden">
          {currentStage.cards.map((card, i) => {
            // Parallax offset: subtle organic drift based on scroll
            const driftY = (stageProgress - 0.5) * (i < 2 ? -18 : (i % 2 === 0 ? -12 : 12));
            const driftX = (stageProgress - 0.5) * (i < 2 ? (i === 0 ? -16 : 16) : (i % 2 === 0 ? 12 : -12));

            return (
              <div
                key={card.id}
                className="absolute pointer-events-auto transition-all duration-700 ease-out will-change-transform"
                style={{
                  ...card.positionStyle,
                  width: `min(${card.width}, ${card.isEdgeCard ? '20vw' : '22vw'})`,
                  minWidth: card.isEdgeCard ? '160px' : '190px',
                  transform: `translate3d(${driftX}px, ${driftY}px, 0)`,
                }}
              >
                {/* Architectural Card Container with iOS Glass Edge & Refined Corners */}
                <div
                  className="w-full rounded-2xl overflow-hidden ios-glass border border-white/12 shadow-[0_20px_50px_rgba(0,0,0,0.85)] bg-[#11100E] relative group hover:border-white/35 transition-all duration-500"
                  style={{
                    aspectRatio: card.aspectRatio,
                  }}
                >
                  {/* High Quality Architectural Photograph */}
                  <img
                    src={card.src}
                    alt={card.title}
                    loading="eager"
                    className="w-full h-full object-cover object-center filter brightness-[0.93] contrast-[1.04] group-hover:scale-105 group-hover:brightness-100 transition-transform duration-700 ease-out"
                  />

                  {/* Corner Architectural Crosshair Accents */}
                  <div className="absolute top-2.5 left-2.5 text-white/40 font-mono text-[11px] pointer-events-none">+</div>
                  <div className="absolute top-2.5 right-2.5 text-white/40 font-mono text-[11px] pointer-events-none">+</div>
                  <div className="absolute bottom-2.5 left-2.5 text-white/40 font-mono text-[11px] pointer-events-none">+</div>
                  <div className="absolute bottom-2.5 right-2.5 text-white/40 font-mono text-[11px] pointer-events-none">+</div>

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-0.5 rounded-[6px] text-[9px] font-mono tracking-wider uppercase ios-glass text-[#D6B779] shadow-sm">
                      {card.tag}
                    </span>
                  </div>

                  {/* Bottom Text Overlay inside the Card */}
                  <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-black/95 via-black/75 to-transparent backdrop-blur-[2px] flex flex-col justify-end">
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
        <div className="relative z-20 w-full max-w-2xl mx-auto text-center px-4 flex flex-col items-center justify-center pointer-events-auto overflow-hidden">
          
          {/* Eyebrow Label */}
          <div className="mb-2 sm:mb-3">
            <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-neutral-400 font-medium">
              {currentStage.eyebrow}
            </span>
          </div>

          {/* Central Headline with Green/Emerald Squiggly Underline */}
          <div className="my-2 sm:my-3 flex flex-col items-center justify-center">
            <h2 className="text-[27px] sm:text-5xl md:text-6xl lg:text-[68px] font-bold text-white tracking-tight leading-[1.12] transition-all duration-500">
              {/* Row 1 with Green Underline Wave */}
              <span className="block">
                <span className="relative inline-block mr-2 sm:mr-3">
                  <span className="relative z-10 text-white font-bold">
                    {currentStage.highlightWord}
                  </span>
                  
                  {/* Organic Green Squiggly Underline Wave (Matching Reference Screenshot) */}
                  <svg
                    className="absolute -bottom-1 sm:-bottom-2.5 left-0 w-full h-3.5 sm:h-5 overflow-visible pointer-events-none -z-0"
                    viewBox="0 0 120 16"
                    preserveAspectRatio="none"
                    fill="none"
                  >
                    <path
                      d="M 2 8 C 25 15, 55 1, 85 9 C 102 14, 112 5, 118 7"
                      stroke="#10B981"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="filter drop-shadow-[0_0_12px_rgba(16,185,129,0.9)]"
                    />
                  </svg>
                </span>
                <span className="text-white font-normal">{currentStage.line1Suffix}</span>
              </span>

              {/* Row 2: Sub-Punchline */}
              <span className="block mt-1 sm:mt-2 text-white">
                {currentStage.line2}
              </span>
            </h2>
          </div>

          {/* ================= 3 CAROUSEL STATE DOTS (• • •) ================= */}
          <div className="flex items-center space-x-2.5 my-3 sm:my-5">
            {stages.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleDotClick(idx)}
                className={`transition-all duration-300 rounded-full focus:outline-none ${
                  stageIndex === idx
                    ? 'w-7 h-1.5 bg-white shadow-[0_0_16px_rgba(255,255,255,0.95),inset_0_1px_1px_rgba(255,255,255,0.8)]'
                    : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Go to stage ${idx + 1}`}
              />
            ))}
          </div>

          {/* Supporting Description beneath dots */}
          <p className="text-xs sm:text-sm md:text-[15px] text-neutral-400 max-w-lg mx-auto leading-relaxed font-light transition-opacity duration-400">
            {currentStage.description}
          </p>

          {/* ================= MOBILE FEATURED CARDS CAROUSEL (MOBILE ONLY: < 768px) ================= */}
          {/* Docked neatly below the text with zero collision and smooth swipe */}
          <div className="block md:hidden w-full max-w-full overflow-hidden mt-4">
            <div className="flex items-center space-x-3 overflow-x-auto no-scrollbar py-2 px-1 snap-x snap-mandatory">
              {currentStage.cards.slice(0, 3).map((card) => (
                <div
                  key={card.id}
                  className="w-[185px] sm:w-[210px] shrink-0 snap-center rounded-2xl overflow-hidden ios-glass border border-white/15 bg-[#121110] shadow-xl"
                >
                  <div className="w-full aspect-[4/3] relative">
                    <img
                      src={card.src}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded text-[8px] font-mono tracking-wider uppercase bg-black/60 text-[#D6B779] border border-white/10">
                      {card.tag}
                    </div>
                  </div>
                  <div className="p-3 bg-gradient-to-t from-black via-black/80 to-transparent text-left">
                    <h3 className="font-bold text-xs text-white uppercase truncate">
                      {card.title}
                    </h3>
                    <p className="text-[10px] text-neutral-400 truncate mt-0.5">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center space-x-1.5 mt-2 text-[10px] text-neutral-500 font-mono">
              <span>← Swipe to explore spaces →</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingShowcase;
