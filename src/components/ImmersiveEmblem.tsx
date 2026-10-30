import React, { useEffect, useRef, useState } from 'react';

interface ShowcaseImage {
  id: string;
  src: string;
  title: string;
  tag: string;
  position: string;
  size: string;
  speed: number;
}

const images: ShowcaseImage[] = [
  // Top Perimeter
  {
    id: 'ie-1',
    src: '/images/P46.jpeg',
    title: 'TEXTURED FLUTING',
    tag: 'JOINERY',
    position: 'top-[6%] left-[6%] sm:left-[10%]',
    size: 'w-[180px] sm:w-[220px] md:w-[260px] aspect-[4/5]',
    speed: 0.16,
  },
  {
    id: 'ie-2',
    src: '/images/P47.jpeg',
    title: 'CONTEMPORARY FOYER',
    tag: 'ENTRANCE',
    position: 'top-[4%] right-[6%] sm:right-[10%]',
    size: 'w-[190px] sm:w-[230px] md:w-[270px] aspect-[1/1]',
    speed: -0.14,
  },
  // Left Perimeter
  {
    id: 'ie-3',
    src: '/images/P48.jpeg',
    title: 'PRIVATE ELEVATION',
    tag: 'ARCHITECTURE',
    position: 'top-[42%] -left-[2%] sm:left-[3%]',
    size: 'w-[200px] sm:w-[240px] md:w-[280px] aspect-[3/4]',
    speed: 0.2,
  },
  // Right Perimeter
  {
    id: 'ie-4',
    src: '/images/P49.jpeg',
    title: 'BESPOKE BATHROOM SUITE',
    tag: 'WELLNESS',
    position: 'top-[44%] -right-[2%] sm:right-[3%]',
    size: 'w-[200px] sm:w-[240px] md:w-[280px] aspect-[3/4]',
    speed: -0.18,
  },
  // Bottom Perimeter
  {
    id: 'ie-5',
    src: '/images/P50.jpeg',
    title: 'DOUBLE-HEIGHT ATRIUM',
    tag: 'VILLA',
    position: 'bottom-[6%] left-[8%] sm:left-[12%]',
    size: 'w-[180px] sm:w-[220px] md:w-[260px] aspect-[1/1]',
    speed: -0.16,
  },
  {
    id: 'ie-6',
    src: '/images/P51.jpeg',
    title: 'TRAVERTINE GALLERY',
    tag: 'FINISHES',
    position: 'bottom-[5%] right-[8%] sm:right-[14%]',
    size: 'w-[190px] sm:w-[230px] md:w-[270px] aspect-[4/5]',
    speed: 0.14,
  },
];

export const ImmersiveEmblem: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [scrollYOffset, setScrollYOffset] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            setScrollYOffset(rect.top + rect.height / 2 - windowHeight / 2);
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

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative min-h-[125vh] w-full flex items-center justify-center bg-[#070707] overflow-hidden py-32 px-4 select-none"
    >
      {/* Background Lighting: Subtle Emerald & Amber blooms matching Frame 8 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[850px] max-h-[850px] rounded-full ambient-glow-lg"
          style={{
            background:
              'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, rgba(234, 88, 12, 0.08) 40%, transparent 70%)',
          }}
        />
        <div
          className="absolute -top-[10%] -left-[10%] w-[45vw] h-[45vw] rounded-full ambient-glow-lg"
          style={{
            background: 'radial-gradient(circle, rgba(234, 88, 12, 0.16) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Floating Rectangular Images around Perimeter */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {images.map((img) => {
          const translateY = scrollYOffset * img.speed;

          return (
            <div
              key={img.id}
              className={`absolute ${img.position} ${img.size} pointer-events-auto transition-transform duration-700 ease-out will-change-transform`}
              style={{
                transform: `translate3d(0, ${translateY}px, 0)`,
              }}
            >
              <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.85)] bg-[#11100E] group hover:border-[#10B981]/50 transition-all duration-500 relative">
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/60 text-[#10B981] text-[9px] font-mono border border-white/10">
                  {img.tag}
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="font-bold text-xs text-white uppercase truncate">{img.title}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ================= CENTRAL CHRONOGRAPH RADAR DIAL & MONOGRAM (Matching Frame 8) ================= */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center pointer-events-auto">
        <div className="relative w-[340px] sm:w-[420px] md:w-[480px] h-[340px] sm:h-[420px] md:h-[480px] flex items-center justify-center">
          
          {/* Outer Large Thin Orbit Ring */}
          <div className="absolute inset-0 rounded-full border border-white/[0.08] pointer-events-none" />

          {/* Chronograph SVG Radial Tick Marks & Compass Points */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none transform -rotate-90 animate-spin-slow"
            viewBox="0 0 480 480"
          >
            {/* Fine Radial Ticks (120 ticks around the circle) */}
            {Array.from({ length: 120 }).map((_, i) => {
              const angle = (i * 360) / 120;
              const isMajor = i % 15 === 0;
              const r1 = isMajor ? 190 : 198;
              const r2 = 210;
              const rad = (angle * Math.PI) / 180;
              const x1 = 240 + r1 * Math.cos(rad);
              const y1 = 240 + r1 * Math.sin(rad);
              const x2 = 240 + r2 * Math.cos(rad);
              const y2 = 240 + r2 * Math.sin(rad);

              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={isMajor ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.15)'}
                  strokeWidth={isMajor ? '1.5' : '1'}
                />
              );
            })}

            {/* 8 Circular Compass Dots around the perimeter (Matching Frame 8) */}
            {Array.from({ length: 8 }).map((_, i) => {
              const angle = (i * 360) / 8;
              const rad = (angle * Math.PI) / 180;
              const cx = 240 + 175 * Math.cos(rad);
              const cy = 240 + 175 * Math.sin(rad);

              return (
                <circle
                  key={`dot-${i}`}
                  cx={cx}
                  cy={cy}
                  r="3"
                  fill="rgba(255, 255, 255, 0.6)"
                  className="shadow-sm"
                />
              );
            })}
          </svg>

          {/* Central Architectural Monogram Glyphs (Matching Frame 8 Wave/Emblem) */}
          <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
            {/* Custom Monogram: 3 flowing wave arches matching Frame 8 */}
            <svg
              className="w-16 h-16 sm:w-20 sm:h-20 text-white fill-current filter drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
              viewBox="0 0 100 100"
            >
              <path d="M 20 60 C 20 40, 40 30, 70 30 C 80 30, 85 35, 80 40 C 55 40, 35 48, 35 65 C 35 70, 25 72, 20 60 Z" />
              <path d="M 30 75 C 30 55, 50 45, 80 45 C 90 45, 95 50, 90 55 C 65 55, 45 63, 45 80 C 45 85, 35 87, 30 75 Z" />
              <path d="M 50 88 C 50 78, 62 70, 85 70 C 92 70, 96 75, 92 80 C 75 80, 62 85, 62 92 C 62 96, 52 97, 50 88 Z" />
            </svg>
          </div>

        </div>

        {/* Central Caption */}
        <div className="mt-4 max-w-md mx-auto">
          <p className="text-xs sm:text-sm text-neutral-400 font-light tracking-wide uppercase">
            Turnkey Architectural Excellence · Dubai
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImmersiveEmblem;
