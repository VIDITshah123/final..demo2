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
}

interface StageData {
  eyebrow: string;
  highlightWord: string;
  line1Suffix: string;
  line2: string;
  description: string;
  cards: ShowcaseCard[];
}

// 4 carefully art-directed showcase cards per stage — clean composition, generous breathing room, zero lag
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
      {
        id: 's1-c1',
        src: '/images/P09.jpeg',
        title: 'VILLA LUMIÈRE',
        subtitle: 'Palm Jumeirah Beachfront Estate',
        tag: 'ARCHITECTURE',
        positionStyle: { top: '26%', left: 'max(5%, calc(50% - 540px))' },
        width: '275px',
        aspectRatio: '1 / 1',
      },
      {
        id: 's1-c2',
        src: '/images/P33.jpeg',
        title: 'COASTAL MONOLITH',
        subtitle: 'Exterior Facade & Screen Architecture',
        tag: 'FACADE',
        positionStyle: { top: '7%', left: 'max(2%, calc(50% - 630px))' },
        width: '215px',
        aspectRatio: '4 / 3',
      },
      {
        id: 's1-c3',
        src: '/images/P11.jpeg',
        title: 'GRAND SALON',
        subtitle: 'Double-Height Dining & Ambient Lighting',
        tag: 'INTERIORS',
        positionStyle: { top: '22%', left: 'min(72%, calc(50% + 240px))' },
        width: '275px',
        aspectRatio: '1 / 1',
      },
      {
        id: 's1-c4',
        src: '/images/P44.jpeg',
        title: 'SKYLINE PENTHOUSE',
        subtitle: 'Triplex Living at Downtown Dubai',
        tag: 'PENTHOUSE',
        positionStyle: { top: '54%', left: 'min(74%, calc(50% + 340px))' },
        width: '225px',
        aspectRatio: '4 / 3',
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
      {
        id: 's2-c1',
        src: '/images/P22.jpeg',
        title: 'MARINA SHORES',
        subtitle: 'Contemporary Villa Living & Lounge Space',
        tag: 'LIVING ROOM',
        positionStyle: { top: '26%', left: 'max(5%, calc(50% - 540px))' },
        width: '275px',
        aspectRatio: '1 / 1',
      },
      {
        id: 's2-c2',
        src: '/images/P29.jpeg',
        title: 'MARBLE JOINERY',
        subtitle: 'Seamless Transition from Stone to Timber',
        tag: 'STONEWORK',
        positionStyle: { top: '7%', left: 'max(2%, calc(50% - 630px))' },
        width: '215px',
        aspectRatio: '4 / 3',
      },
      {
        id: 's2-c3',
        src: '/images/P24.jpeg',
        title: 'BRONZE ACCENTS',
        subtitle: 'Fluted Wall Panels & Concealed Illumination',
        tag: 'JOINERY',
        positionStyle: { top: '22%', left: 'min(72%, calc(50% + 240px))' },
        width: '275px',
        aspectRatio: '1 / 1',
      },
      {
        id: 's2-c4',
        src: '/images/P34.jpeg',
        title: 'EMIRATES HILLS',
        subtitle: 'Double-Height Residence with Glass Monoliths',
        tag: 'ARCHITECTURE',
        positionStyle: { top: '54%', left: 'min(74%, calc(50% + 340px))' },
        width: '225px',
        aspectRatio: '4 / 3',
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
      {
        id: 's3-c1',
        src: '/images/P37.jpeg',
        title: 'MASTER SANCTUARY',
        subtitle: 'Penthouse Bedroom Suite with Custom Wardrobes',
        tag: 'PENTHOUSE',
        positionStyle: { top: '26%', left: 'max(5%, calc(50% - 540px))' },
        width: '275px',
        aspectRatio: '1 / 1',
      },
      {
        id: 's3-c2',
        src: '/images/P48.jpeg',
        title: 'CEILING ARCHITECTURE',
        subtitle: 'Acoustic Wood Ribs & Indirect Coves',
        tag: 'ENGINEERING',
        positionStyle: { top: '7%', left: 'max(2%, calc(50% - 630px))' },
        width: '215px',
        aspectRatio: '4 / 3',
      },
      {
        id: 's3-c3',
        src: '/images/P39.jpeg',
        title: 'CULINARY SUITE',
        subtitle: 'Seamless Monolith Kitchen & Wine Cellar',
        tag: 'FIT-OUT',
        positionStyle: { top: '22%', left: 'min(72%, calc(50% + 240px))' },
        width: '275px',
        aspectRatio: '1 / 1',
      },
      {
        id: 's3-c4',
        src: '/images/P45.jpeg',
        title: 'SPA BATHROOM',
        subtitle: 'Bookmatched Nero Marquina & Freestanding Tub',
        tag: 'WELLNESS',
        positionStyle: { top: '54%', left: 'min(74%, calc(50% + 340px))' },
        width: '225px',
        aspectRatio: '4 / 3',
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
    // This eliminates 60fps re-rendering overhead and eliminates scroll lag completely!
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

        {/* ================= CINEMATIC AMBIENT LIGHTING ================= */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
          <div
            className="ambient-orb ambient-orb-amber-show transition-[background] duration-700"
            style={{
              width: '68vw',
              height: '68vw',
              maxWidth: 900,
              maxHeight: 900,
              top: '-12%',
              left: '-10%',
              background:
                activeStageIndex === 0
                    ? 'radial-gradient(ellipse 66% 58% at 36% 30%, rgba(16,185,129,0.45) 0%, rgba(5,150,105,0.22) 45%, transparent 75%)'
                    : activeStageIndex === 1
                  ? 'radial-gradient(ellipse 66% 58% at 36% 30%, rgba(234,88,12,0.45) 0%, rgba(16,185,129,0.20) 48%, transparent 75%)'
              : 'radial-gradient(ellipse 66% 58% at 36% 30%, rgba(217,120,41,0.45) 0%, rgba(234,88,12,0.22) 48%, transparent 75%)',
            }}
          />

          <div
            className="ambient-orb ambient-orb-bronze-show"
            style={{
              width: '60vw',
              height: '60vw',
              maxWidth: 800,
              maxHeight: 800,
              top: '-8%',
              right: '-10%',
              background:
              'radial-gradient(circle at 68% 30%, rgba(245,158,11,0.35) 0%, rgba(196,130,63,0.18) 46%, transparent 80%)',
            }}
          />

          <div
            className="ambient-orb ambient-orb-emerald-show"
            style={{
              width: '50vw',
              height: '50vw',
              maxWidth: 650,
              maxHeight: 650,
              bottom: '-16%',
              left: '20%',
              background:
              'radial-gradient(ellipse at center, rgba(16,185,129,0.28) 0%, rgba(214,183,121,0.14) 48%, transparent 75%)',
            }}
          />

          {/* Center vignette */}
          <div
            className="absolute inset-0"
            style={{
              background:
              'radial-gradient(ellipse 900px 600px at center, rgba(7,7,7,0.75) 0%, rgba(7,7,7,0.35) 55%, transparent 95%)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070707]/30 via-transparent to-[#070707]/60 pointer-events-none" />
        </div>

        {/* ================= 3 STAGES RENDERED AS GPU SLIDER LAYERS (DESKTOP 768px+) ================= */}
        {/* Each stage is an ultra-fast GPU layer: translates smoothly with 0 React re-renders while scrolling */}
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
                        width: `min(${card.width}, 22vw)`,
                        minWidth: '190px',
                      }}
                    >
                      <div
                        className="w-full rounded-2xl overflow-hidden bg-[#141311] border border-white/10 relative group shadow-[0_12px_35px_rgba(0,0,0,0.75),inset_0_1px_1px_rgba(255,255,255,0.15)]"
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

                            {/* Top Category Badge */ }
                            <div className="absolute top-3 left-3 z-10">
                              <span className="px-2.5 py-0.5 rounded-[6px] text-[9px] font-mono tracking-wider uppercase bg-black/60 text-[#D6B779] shadow-sm border border-white/10">
                                {card.tag}
                              </span>
                            </div>

                                {/* Bottom Title & Subtitle */}
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
              ))
            }
        </div>

        {/* ================= CENTERED HEADLINE & ARCHITECTURAL DESCRIPTION ================= */}
        <div className="relative z-20 w-full max-w-2xl mx-auto text-center px-4 flex flex-col items-center justify-center pointer-events-auto">

          {/* Eyebrow Label */}
          <div className="mb-2 sm:mb-3 transition-opacity duration-300">
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
                </div>
    </div>
          );
};

          export default FloatingShowcase;
