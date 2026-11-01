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

// 8 precisely balanced cards per stage matching the reference layout:
// 4 inner cards framing the central text (Top-Left, Top-Right, Bottom-Left, Bottom-Right)
// 4 outer cards bleeding off the screen edges (Far-Left Upper, Far-Left Lower, Far-Right Upper, Far-Right Lower)
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
      // 1. Inner Top-Left (Matches "Wild at Heart" in reference)
      {
        id: 's1-inner-tl',
        src: '/images/P09.jpeg',
        title: 'VILLA LUMIÈRE',
        subtitle: 'Palm Jumeirah Beachfront Estate',
        tag: 'ARCHITECTURE',
        positionStyle: { top: '8%', left: 'max(14%, calc(50% - 440px))' },
        width: '270px',
        aspectRatio: '1 / 1',
      },
      // 2. Inner Top-Right (Matches "Vigoureux / AI Security" in reference)
      {
        id: 's1-inner-tr',
        src: '/images/P11.jpeg',
        title: 'GRAND SALON',
        subtitle: 'Double-Height Dining & Ambient Lighting',
        tag: 'INTERIORS',
        positionStyle: { top: '6%', left: 'min(58%, calc(50% + 155px))' },
        width: '270px',
        aspectRatio: '1 / 1',
      },
      // 3. Inner Bottom-Left (Matches "Oasis" sunset landscape in reference)
      {
        id: 's1-inner-bl',
        src: '/images/P13.jpeg',
        title: 'CALACATTA GALLERY',
        subtitle: 'Bookmatched Marble Entrance Foyer',
        tag: 'STONEWORK',
        positionStyle: { top: '75%', left: 'max(12%, calc(50% - 480px))' },
        width: '280px',
        aspectRatio: '16 / 10',
      },
      // 4. Inner Bottom-Right (Matches "Glow Your Own Way" skincare in reference)
      {
        id: 's1-inner-br',
        src: '/images/P46.jpeg',
        title: 'PRIVATE ATELIER',
        subtitle: 'Executive Study with Bronze Millwork',
        tag: 'BESPOKE',
        positionStyle: { top: '72%', left: 'min(64%, calc(50% + 225px))' },
        width: '245px',
        aspectRatio: '1 / 1',
      },
      // 5. Far-Left Upper Edge (Matches "Pulse" drink can bleed in reference)
      {
        id: 's1-edge-lu',
        src: '/images/P33.jpeg',
        title: 'COASTAL MONOLITH',
        subtitle: 'Exterior Facade & Screen Architecture',
        tag: 'FACADE',
        positionStyle: { top: '22%', left: '-2.5%' },
        width: '235px',
        aspectRatio: '3 / 4',
        isEdgeCard: true,
      },
      // 6. Far-Left Lower Edge (Matches Girl drinking bleed in reference)
      {
        id: 's1-edge-ll',
        src: '/images/P31.jpeg',
        title: 'THE AZURE SUITE',
        subtitle: 'Penthouse Living with Panoramic Skyline',
        tag: 'FIT-OUT',
        positionStyle: { top: '65%', left: '-2.5%' },
        width: '225px',
        aspectRatio: '4 / 5',
        isEdgeCard: true,
      },
      // 7. Far-Right Upper Edge (Matches "Morph Effect" pants bleed in reference)
      {
        id: 's1-edge-ru',
        src: '/images/P44.jpeg',
        title: 'SKYLINE PENTHOUSE',
        subtitle: 'Triplex Living at Downtown Dubai',
        tag: 'PENTHOUSE',
        positionStyle: { top: '23%', right: '-2.5%' },
        width: '240px',
        aspectRatio: '4 / 5',
        isEdgeCard: true,
      },
      // 8. Far-Right Lower Edge (Matches "Liquid Silver" purple bleed in reference)
      {
        id: 's1-edge-rl',
        src: '/images/P08.jpeg',
        title: 'SANCTUARY BAY',
        subtitle: 'Intimate Lighting & Italian Travertine',
        tag: 'MATERIALITY',
        positionStyle: { top: '71%', right: '-2.5%' },
        width: '225px',
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
      // 1. Inner Top-Left
      {
        id: 's2-inner-tl',
        src: '/images/P22.jpeg',
        title: 'MARINA SHORES',
        subtitle: 'Contemporary Villa Living & Lounge Space',
        tag: 'LIVING ROOM',
        positionStyle: { top: '8%', left: 'max(14%, calc(50% - 440px))' },
        width: '270px',
        aspectRatio: '1 / 1',
      },
      // 2. Inner Top-Right
      {
        id: 's2-inner-tr',
        src: '/images/P24.jpeg',
        title: 'BRONZE ACCENTS',
        subtitle: 'Fluted Wall Panels & Concealed Illumination',
        tag: 'JOINERY',
        positionStyle: { top: '6%', left: 'min(58%, calc(50% + 155px))' },
        width: '270px',
        aspectRatio: '1 / 1',
      },
      // 3. Inner Bottom-Left
      {
        id: 's2-inner-bl',
        src: '/images/P32.jpeg',
        title: 'ARCHITECTURAL FIXTURES',
        subtitle: 'Precision Detail in Brushed Gunmetal',
        tag: 'HARDWARE',
        positionStyle: { top: '75%', left: 'max(12%, calc(50% - 480px))' },
        width: '280px',
        aspectRatio: '16 / 10',
      },
      // 4. Inner Bottom-Right
      {
        id: 's2-inner-br',
        src: '/images/P49.jpeg',
        title: 'CALACATTA OVAL',
        subtitle: 'Sculptural Dining Table & Custom FF&E',
        tag: 'FURNITURE',
        positionStyle: { top: '72%', left: 'min(64%, calc(50% + 225px))' },
        width: '245px',
        aspectRatio: '1 / 1',
      },
      // 5. Far-Left Upper Edge
      {
        id: 's2-edge-lu',
        src: '/images/P41.jpeg',
        title: 'TACTILE FINISHES',
        subtitle: 'Natural Wood & Fluted Plaster Paneling',
        tag: 'FINISHES',
        positionStyle: { top: '22%', left: '-2.5%' },
        width: '235px',
        aspectRatio: '3 / 4',
        isEdgeCard: true,
      },
      // 6. Far-Left Lower Edge
      {
        id: 's2-edge-ll',
        src: '/images/P27.jpeg',
        title: 'FORM & FUNCTION',
        subtitle: 'Custom Millwork & Kitchen Island Centerpiece',
        tag: 'TURNKEY',
        positionStyle: { top: '65%', left: '-2.5%' },
        width: '225px',
        aspectRatio: '4 / 5',
        isEdgeCard: true,
      },
      // 7. Far-Right Upper Edge
      {
        id: 's2-edge-ru',
        src: '/images/P47.jpeg',
        title: 'CURATED LIGHTING',
        subtitle: 'Recessed Architectural Track Illumination',
        tag: 'LIGHTING',
        positionStyle: { top: '23%', right: '-2.5%' },
        width: '240px',
        aspectRatio: '4 / 5',
        isEdgeCard: true,
      },
      // 8. Far-Right Lower Edge
      {
        id: 's2-edge-rl',
        src: '/images/P34.jpeg',
        title: 'EMIRATES HILLS',
        subtitle: 'Double-Height Residence with Glass Monoliths',
        tag: 'ARCHITECTURE',
        positionStyle: { top: '71%', right: '-2.5%' },
        width: '225px',
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
      // 1. Inner Top-Left
      {
        id: 's3-inner-tl',
        src: '/images/P37.jpeg',
        title: 'MASTER SANCTUARY',
        subtitle: 'Penthouse Bedroom Suite with Custom Wardrobes',
        tag: 'PENTHOUSE',
        positionStyle: { top: '8%', left: 'max(14%, calc(50% - 440px))' },
        width: '270px',
        aspectRatio: '1 / 1',
      },
      // 2. Inner Top-Right
      {
        id: 's3-inner-tr',
        src: '/images/P39.jpeg',
        title: 'CULINARY SUITE',
        subtitle: 'Seamless Monolith Kitchen & Wine Cellar',
        tag: 'FIT-OUT',
        positionStyle: { top: '6%', left: 'min(58%, calc(50% + 155px))' },
        width: '270px',
        aspectRatio: '1 / 1',
      },
      // 3. Inner Bottom-Left
      {
        id: 's3-inner-bl',
        src: '/images/P51.jpeg',
        title: 'CHOREOGRAPHED LIGHT',
        subtitle: 'Automated Scene Lighting for Twilight',
        tag: 'AUTOMATION',
        positionStyle: { top: '75%', left: 'max(12%, calc(50% - 480px))' },
        width: '280px',
        aspectRatio: '16 / 10',
      },
      // 4. Inner Bottom-Right
      {
        id: 's3-inner-br',
        src: '/images/P04.jpeg',
        title: 'TURNKEY COMPLETION',
        subtitle: 'Final Handover at Jumeirah Islands Villa',
        tag: 'HANDOVER',
        positionStyle: { top: '72%', left: 'min(64%, calc(50% + 225px))' },
        width: '245px',
        aspectRatio: '1 / 1',
      },
      // 5. Far-Left Upper Edge
      {
        id: 's3-edge-lu',
        src: '/images/P43.jpeg',
        title: 'TERRACE HORIZON',
        subtitle: 'Indoor-Outdoor Infinity Glass Pergola',
        tag: 'TERRACE',
        positionStyle: { top: '22%', left: '-2.5%' },
        width: '235px',
        aspectRatio: '3 / 4',
        isEdgeCard: true,
      },
      // 6. Far-Left Lower Edge
      {
        id: 's3-edge-ll',
        src: '/images/P50.jpeg',
        title: 'AOLAO RESIDENCE',
        subtitle: 'Conversational Lounge & Suspended Fireplace',
        tag: 'RESIDENTIAL',
        positionStyle: { top: '65%', left: '-2.5%' },
        width: '225px',
        aspectRatio: '4 / 5',
        isEdgeCard: true,
      },
      // 7. Far-Right Upper Edge
      {
        id: 's3-edge-ru',
        src: '/images/P52.jpeg',
        title: 'EXECUTIVE SUITE',
        subtitle: 'Private Office Suite at DIFC Gate Towers',
        tag: 'COMMERCIAL',
        positionStyle: { top: '23%', right: '-2.5%' },
        width: '240px',
        aspectRatio: '4 / 5',
        isEdgeCard: true,
      },
      // 8. Far-Right Lower Edge
      {
        id: 's3-edge-rl',
        src: '/images/P45.jpeg',
        title: 'SPA BATHROOM',
        subtitle: 'Bookmatched Nero Marquina & Freestanding Tub',
        tag: 'WELLNESS',
        positionStyle: { top: '71%', right: '-2.5%' },
        width: '225px',
        aspectRatio: '4 / 5',
        isEdgeCard: true,
      },
    ],
  },
];

function smoothstep(t: number): number {
  const c = Math.max(0, Math.min(1, t));
  return c * c * (3 - 2 * c);
}

  export const FloatingShowcase: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const desktopLayersRef = useRef<(HTMLDivElement | null)[]>([]);
    const mobileLayersRef = useRef<(HTMLDivElement | null)[]>([]);
    const activeIndexRef = useRef<number>(0);

    // React state ONLY updates when stage index changes (0 -> 1 -> 2)
    // This completely eliminates React reconciliation during scroll for 60/120 fps butter performance!
    const [activeStageIndex, setActiveStageIndex] = useState(0);

      useEffect(() => {
        let ticking = false;

          const updateTransforms = () => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const totalScrollable = Math.max(1, containerRef.current.offsetHeight - window.innerHeight);
            const currentScroll = Math.max(0, -rect.top);
            const overallProgress = Math.max(0, Math.min(1, currentScroll / totalScrollable));

            // Calculate smooth continuous stage position (0.0 to 2.0)
            let sf = 0;
            if (overallProgress <= 0.16) {
              sf = 0;
            } else if (overallProgress < 0.46) {
              const t = (overallProgress - 0.16) / 0.30;
              sf = smoothstep(t);
            } else if (overallProgress <= 0.68) {
              sf = 1;
            } else if (overallProgress < 0.94) {
              const t = (overallProgress - 0.68) / 0.26;
              sf = 1 + smoothstep(t);
            } else {
              sf = 2;
            }

            // Check if active index changed for text & dots
            const newActive = sf < 0.5 ? 0 : sf < 1.5 ? 1 : 2;
            if (newActive !== activeIndexRef.current) {
              activeIndexRef.current = newActive;
              setActiveStageIndex(newActive);
            }

            // Direct GPU transform on Desktop Layers (105vh distance per stage)
            desktopLayersRef.current.forEach((layer, sIdx) => {
              if (!layer) return;
              const diff = sIdx - sf;
              if (Math.abs(diff) > 1.15) {
                layer.style.visibility = 'hidden';
              } else {
                layer.style.visibility = 'visible';
                const yVh = Math.round(diff * 105 * 10) / 10;
                const opacity = Math.max(0, Math.min(1, Math.round((1.2 - Math.abs(diff) * 0.95) * 100) / 100));
                layer.style.transform = `translate3d(0, ${yVh}vh, 0)`;
                layer.style.opacity = String(opacity);
              }
            });

              // Direct GPU transform on Mobile Layers (230px distance per stage)
              mobileLayersRef.current.forEach((layer, sIdx) => {
                if (!layer) return;
                const diff = sIdx - sf;
                if (Math.abs(diff) > 1.15) {
                  layer.style.visibility = 'hidden';
                } else {
                  layer.style.visibility = 'visible';
                  const yPx = Math.round(diff * 230);
                  const opacity = Math.max(0, Math.min(1, Math.round((1.2 - Math.abs(diff) * 0.95) * 100) / 100));
                  layer.style.transform = `translate3d(0, ${yPx}px, 0)`;
                  layer.style.opacity = String(opacity);
                }
              });
            };

            const onScroll = () => {
              if (!ticking) {
                window.requestAnimationFrame(() => {
                  updateTransforms();
                  ticking = false;
                });
              ticking = true;
            }
          };

          window.addEventListener('scroll', onScroll, { passive: true });
          updateTransforms();

          return () => window.removeEventListener('scroll', onScroll);
        }, []);

      const currentStage = stages[activeStageIndex];

      // Dot click navigation: smoothly scrolls directly into target stage's dwell window
      const handleDotClick = (index: number) => {
        if (!containerRef.current) return;
        const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
        const targetProgress = index === 0 ? 0.08 : index === 1 ? 0.57 : 0.96;
        const targetScroll = containerRef.current.offsetTop + targetProgress * totalScrollable;
        window.scrollTo({ top: targetScroll, behavior: 'smooth' });
      };

      return (
        <div
          id="showcase"
          ref={containerRef}
          className="relative w-full h-[240vh] md:h-[300vh] bg-[#070707]"
        >
          {/* ================= PINNED STICKY CONTAINER ================= */}
          <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#070707] select-none px-4">

            {/* ================= ATMOSPHERIC AMBIENT GLOW SYSTEM (Matching Reference Image) ================= */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
              {/* Top-Left Teal / Emerald Glow */}
              <div
                className="ambient-orb transition-[background] duration-700"
                style={{
                  width: '64vw',
                  height: '64vw',
                  maxWidth: 850,
                  maxHeight: 850,
                  top: '-15%',
                  left: '-12%',
                  background:
                    activeStageIndex === 0
                        ? 'radial-gradient(ellipse 66% 58% at 36% 30%, rgba(16,185,129,0.48) 0%, rgba(5,150,105,0.22) 45%, transparent 75%)'
                        : activeStageIndex === 1
                          ? 'radial-gradient(ellipse 66% 58% at 36% 30%, rgba(234,88,12,0.45) 0%, rgba(16,185,129,0.20) 48%, transparent 75%)'
                  : 'radial-gradient(ellipse 66% 58% at 36% 30%, rgba(217,120,41,0.45) 0%, rgba(234,88,12,0.22) 48%, transparent 75%)',
            }}
          />

              {/* Top-Center / Right Warm Amber / Red-Orange Glow */}
              <div
                className="ambient-orb"
                style={{
                  width: '58vw',
                  height: '58vw',
                  maxWidth: 780,
                  maxHeight: 780,
                  top: '-12%',
                  right: '-6%',
                  background:
                  'radial-gradient(circle at 68% 30%, rgba(234,88,12,0.38) 0%, rgba(245,158,11,0.22) 44%, transparent 80%)',
                }}
              />

              {/* Bottom-Left Warm Sunset Glow */}
              <div
                className="ambient-orb"
                style={{
                  width: '52vw',
                  height: '52vw',
                  maxWidth: 700,
                  maxHeight: 700,
                  bottom: '-16%',
                  left: '12%',
                  background:
                  'radial-gradient(ellipse at center, rgba(217,120,41,0.32) 0%, rgba(234,88,12,0.16) 48%, transparent 75%)',
                }}
              />

              {/* Bottom-Right Violet / Indigo Glow */}
              <div
                className="ambient-orb"
                style={{
                  width: '48vw',
                  height: '48vw',
                  maxWidth: 640,
                  maxHeight: 640,
                  bottom: '-14%',
                  right: '-8%',
                  background:
                    'radial-gradient(circle at center, rgba(124,58,237,0.28) 0%, rgba(99,102,241,0.15) 50%, transparent 78%)',
                }}
              />

              {/* Deep center vignette so the white typography & cards pop */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                  'radial-gradient(ellipse 920px 620px at center, rgba(7,7,7,0.85) 0%, rgba(7,7,7,0.40) 55%, transparent 95%)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#070707]/30 via-transparent to-[#070707]/60 pointer-events-none" />
            </div>

            {/* ================= 8-CARD CONSTELLATION AS GPU SLIDER LAYERS (DESKTOP 768px+) ================= */}
            {/* Exactly mirrors the Linearity reference image pattern: 4 inner framing cards + 4 edge-bleed cards */}
            <div className="hidden md:block absolute inset-0 pointer-events-none z-10 overflow-hidden">
                  {
                    stages.map((stage, sIdx) => (
                      <div
                        key={stage.highlightWord}
                        ref={(el) => (desktopLayersRef.current[sIdx] = el)}
                        className="absolute inset-0 pointer-events-none will-change-transform"
                        style={{
                          transform: `translate3d(0, ${sIdx * 105}vh, 0)`,
                          opacity: sIdx === 0 ? 1 : 0,
                        }}
                      >
                        {stage.cards.map((card) => (
                          <div
                            key={card.id}
                            className="absolute pointer-events-auto transition-transform duration-500 ease-out hover:scale-[1.03]"
                            style={{
                              ...card.positionStyle,
                              width: `min(${card.width}, ${card.isEdgeCard ? '20vw' : '22vw'})`,
                              minWidth: card.isEdgeCard ? '160px' : '190px',
                              zIndex: card.isEdgeCard ? 10 : 20,
                            }}
                          >
                                  <div
                                    className="w-full rounded-2xl overflow-hidden bg-[#141311] border border-white/10 relative group shadow-[0_16px_40px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.18)]"
                                    style={{ aspectRatio: card.aspectRatio }}
                                  >
                                    <img
                                      src={card.src}
                                      alt={card.title}
                                      loading="eager"
                                      className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.03] group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />

                                    {/* Specular sheen highlight */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.08] pointer-events-none" />

                                    {/* Corner Crosshair Accents */}
                                    <div className="absolute top-2.5 left-2.5 text-white/30 font-mono text-[10px] pointer-events-none">+</div>
                                    <div className="absolute top-2.5 right-2.5 text-white/30 font-mono text-[10px] pointer-events-none">+</div>
                                    <div className="absolute bottom-2.5 left-2.5 text-white/30 font-mono text-[10px] pointer-events-none">+</div>
                                    <div className="absolute bottom-2.5 right-2.5 text-white/30 font-mono text-[10px] pointer-events-none">+</div>

                                    {/* Top Category Badge */}
                                    <div className="absolute top-3 left-3 z-10">
                                      <span className="px-2.5 py-0.5 rounded-[6px] text-[9px] font-mono tracking-wider uppercase bg-black/60 text-[#D6B779] shadow-sm border border-white/10">
                                        {card.tag}
                                      </span>
                                    </div>

                                  {/* Bottom Title & Subtitle Overlay */}
                                  <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-black/95 via-black/70 to-transparent flex flex-col justify-end">
                                    <h3 className="font-sans font-bold text-xs sm:text-sm text-white tracking-wide uppercase leading-tight truncate">
                                      {card.title}
                                    </h3>
                                    <p className="text-[10px] sm:text-[11px] text-neutral-400 font-light mt-0.5 line-clamp-1">
                                      {card.subtitle}
                                    </p>
                                  </div>
                                </div>
                              </div>
              ))}
                          </div>
                        ))}
                      </div>

        {/* ================= CENTERED HEADLINE & ARCHITECTURAL DESCRIPTION ================= */ }
                      < div className = "relative z-20 w-full max-w-2xl mx-auto text-center px-4 flex flex-col items-center justify-center pointer-events-auto" >

                      {/* Eyebrow Label */ }
                      < div className = "mb-2 sm:mb-3 transition-opacity duration-300" >
                      <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-neutral-400 font-medium">
                        {currentStage.eyebrow}
                      </span>
          </div>

            {/* Central Headline with Green Squiggly Underline */}
            <div className="my-2 sm:my-3 flex flex-col items-center justify-center transition-all duration-300">
              <h2 className="text-[22px] sm:text-4xl md:text-5xl lg:text-[38px] font-bold text-white tracking-tight leading-[1.12]">
                <span className="block">
                  <span className="relative inline-block mr-2 sm:mr-3">
                    <span className="relative z-10 text-white font-bold">
                      {currentStage.highlightWord}
                    </span>
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

                <span className="block mt-1 sm:mt-2 text-white">
                  {currentStage.line2}
                </span>
              </h2>
            </div>

            {/* 3 Carousel Dots */}
            <div className="flex items-center space-x-2.5 my-3 sm:my-5">
              {stages.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleDotClick(idx)}
                className={`transition-all duration-300 rounded-full focus:outline-none ${activeStageIndex === idx
                      ? 'w-7 h-1.5 bg-white shadow-[0_0_16px_rgba(255,255,255,0.95),inset_0_1px_1px_rgba(255,255,255,0.8)]'
                      : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60'
                }`}
              aria-label={`Go to stage ${idx + 1}`}
              />
            ))}
            </div>

            {/* Supporting Description */}
            <p className="text-xs sm:text-sm md:text-[15px] text-neutral-400 max-w-lg mx-auto leading-relaxed font-light transition-opacity duration-300">
              {currentStage.description}
            </p>

            {/* ================= MOBILE FEATURED CARDS VERTICAL SLIDER (< 768px) ================= */}
            <div className="block md:hidden w-full max-w-full mt-4 relative h-[215px] overflow-hidden">
              {stages.map((stage, sIdx) => (
                <div
                  key={stage.highlightWord}
                  ref={(el) => (mobileLayersRef.current[sIdx] = el)}
                  className="absolute inset-0 w-full flex items-center will-change-transform"
                  style={{
                    transform: `translate3d(0, ${sIdx * 230}px, 0)`,
                    opacity: sIdx === 0 ? 1 : 0,
                  }}
                >
                  <div className="flex items-center space-x-3 overflow-x-auto no-scrollbar py-2 px-1 snap-x snap-mandatory w-full justify-center">
                    {stage.cards.slice(0, 2).map((card) => (
                      <div
                        key={`mobile-${card.id}`}
                        className="w-[170px] sm:w-[195px] shrink-0 snap-center rounded-2xl overflow-hidden bg-[#141311] border border-white/10 shadow-lg"
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
                        <div className="p-2.5 bg-gradient-to-t from-black via-black/80 to-transparent text-left">
                          <h3 className="font-bold text-[11px] text-white uppercase truncate">
                            {card.title}
                          </h3>
                          <p className="text-[9px] text-neutral-400 truncate mt-0.5">
                            {card.subtitle}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex md:hidden items-center justify-center space-x-1.5 mt-2 text-[10px] text-neutral-500 font-mono">
              <span>← Swipe horizontally to explore spaces →</span>
            </div>
          </div>
      </div >
    </div >
  );
};

export default FloatingShowcase;
