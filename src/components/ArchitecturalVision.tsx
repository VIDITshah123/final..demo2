import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FloatingPanel {
  id: string;
  src: string;
  title: string;
  tag: string;
  position: string;
  dimensions: string;
  aspect: string;
  speed: number;
}

const panels: FloatingPanel[] = [
  // Upper-Left
  {
    id: 'av-1',
    src: '/images/P08.jpeg',
    title: 'ARCHITECTURAL RESIDENCE',
    tag: 'CONCEPT',
    position: 'top-[6%] -left-[4%] lg:left-[2%]',
    dimensions: 'w-[200px] sm:w-[260px] md:w-[320px] lg:w-[360px]',
    aspect: 'aspect-[16/10]',
    speed: 0.18,
  },
  // Upper-Right
  {
    id: 'av-2',
    src: '/images/P11.jpeg',
    title: 'CURATED MATERIALITY',
    tag: 'FINISHES',
    position: 'top-[8%] -right-[4%] lg:right-[2%]',
    dimensions: 'w-[190px] sm:w-[250px] md:w-[300px] lg:w-[340px]',
    aspect: 'aspect-[4/3]',
    speed: -0.16,
  },
  // Lower-Left
  {
    id: 'av-3',
    src: '/images/P13.jpeg',
    title: 'BESPOKE SALON',
    tag: 'INTERIOR',
    position: 'bottom-[6%] -left-[3%] lg:left-[4%]',
    dimensions: 'w-[210px] sm:w-[270px] md:w-[320px] lg:w-[350px]',
    aspect: 'aspect-[3/4]',
    speed: -0.2,
  },
  // Lower-Right
  {
    id: 'av-4',
    src: '/images/P24.jpeg',
    title: 'LIGHTING CHOREOGRAPHY',
    tag: 'EXECUTION',
    position: 'bottom-[8%] -right-[3%] lg:right-[4%]',
    dimensions: 'w-[200px] sm:w-[260px] md:w-[310px] lg:w-[340px]',
    aspect: 'aspect-[4/5]',
    speed: 0.22,
  },
  // Mid Floating Accents
  {
    id: 'av-5',
    src: '/images/P27.jpeg',
    title: 'BRASS & FLUTED WOOD',
    tag: 'DETAIL',
    position: 'top-[36%] left-[14%] lg:left-[16%]',
    dimensions: 'w-[140px] sm:w-[170px] md:w-[210px]',
    aspect: 'aspect-[1/1]',
    speed: -0.1,
  },
  {
    id: 'av-6',
    src: '/images/P29.jpeg',
    title: 'CALACATTA COUNTER',
    tag: 'STONE',
    position: 'top-[38%] right-[14%] lg:right-[16%]',
    dimensions: 'w-[140px] sm:w-[170px] md:w-[210px]',
    aspect: 'aspect-[4/5]',
    speed: 0.12,
  },
];

export const ArchitecturalVision: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollYOffset, setScrollYOffset] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const offset = rect.top + rect.height / 2 - windowHeight / 2;
            setScrollYOffset(offset);
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
      id="vision"
      ref={sectionRef}
      className="relative min-h-[120vh] w-full flex items-center justify-center bg-[#070707] overflow-hidden py-32 px-4 sm:px-6 lg:px-8 select-none border-t border-white/5"
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {/* Dark Red & Bronze Bloom (Top-Left) */}
        <div
          className="absolute -top-[12%] -left-[10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full ambient-glow-lg animate-drift-1"
          style={{
            background:
              'radial-gradient(circle, rgba(120, 28, 20, 0.22) 0%, rgba(152, 106, 60, 0.18) 45%, transparent 75%)',
          }}
        />

        {/* Warm Amber (Bottom-Right) */}
        <div
          className="absolute -bottom-[10%] -right-[10%] w-[55vw] h-[55vw] max-w-[750px] max-h-[750px] rounded-full ambient-glow-lg animate-drift-2"
          style={{
            background:
              'radial-gradient(circle, rgba(196, 130, 63, 0.22) 0%, rgba(30, 24, 18, 0.25) 50%, transparent 75%)',
          }}
        />

        {/* Muted Green Glow (Mid-Right) */}
        <div
          className="absolute top-[40%] -right-[8%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full ambient-glow-lg animate-drift-3"
          style={{
            background:
              'radial-gradient(circle, rgba(18, 55, 40, 0.2) 0%, rgba(16, 185, 129, 0.1) 45%, transparent 70%)',
          }}
        />

        {/* Center Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(7, 7, 7, 0.45) 0%, rgba(7, 7, 7, 0.92) 100%)',
          }}
        />
      </div>

      {/* Floating Presentation Panels */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {panels.map((panel, idx) => {
          const parallaxTranslateY = scrollYOffset * panel.speed;
          const isMidAccent = idx >= 4;

          return (
            <div
              key={panel.id}
              className={`absolute ${panel.position} ${panel.dimensions} pointer-events-auto transition-transform duration-700 ease-out will-change-transform ${
                isMidAccent ? 'hidden lg:block' : 'block'
              }`}
              style={{
                transform: `translate3d(0, ${parallaxTranslateY}px, 0)`,
              }}
            >
              <div
                className={`w-full ${panel.aspect} rounded-2xl overflow-hidden border border-white/10 shadow-[0_22px_55px_rgba(0,0,0,0.85)] bg-[#11100E] relative group hover:border-[#D6B779]/40 transition-all duration-500`}
              >
                <img
                  src={panel.src}
                  alt={panel.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center filter brightness-90 contrast-[1.05] group-hover:scale-105 group-hover:brightness-100 transition-transform duration-700 ease-out"
                />

                {/* Subtle glass overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

                {/* Corner crosshairs */}
                <span className="absolute top-2.5 left-2.5 font-mono text-[10px] text-white/40">+</span>
                <span className="absolute top-2.5 right-2.5 font-mono text-[10px] text-white/40">+</span>

                {/* Tag */}
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono tracking-wider uppercase bg-black/60 backdrop-blur-md text-[#D6B779] border border-white/10">
                    {panel.tag}
                  </span>
                </div>

                {/* Bottom title */}
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                  <p className="font-sans font-bold text-xs sm:text-sm text-white tracking-wide uppercase truncate">
                    {panel.title}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Central Content */}
      <div className="relative z-20 max-w-2xl mx-auto text-center px-4 sm:px-6 flex flex-col items-center justify-center pointer-events-auto">
        {/* Eyebrow */}
        <div className="mb-4">
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#D6B779] font-medium">
            DESIGN &amp; BUILD
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-serif text-[clamp(2.5rem,5.8vw,4.8rem)] leading-[1.08] tracking-[-0.01em] text-white font-light">
          From First Vision <br />
          <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#D6B779] via-[#F4F0E8] to-[#D6B779]">
            To Final Detail.
          </span>
        </h2>

        {/* Supporting description */}
        <p className="mt-6 text-sm sm:text-base md:text-[17px] text-neutral-300 max-w-lg mx-auto leading-relaxed font-light">
          From architectural concepts to beautifully finished interiors, ALTIMATE brings every
          detail together through considered design and seamless project execution.
        </p>

        {/* Action Buttons */}
        <div className="mt-9 flex items-center justify-center gap-4 sm:gap-5">
          <a
            href="#showcase"
            className="group inline-flex items-center space-x-2.5 px-6 sm:px-7 py-3 rounded-full bg-[#D6B779] text-[#070707] text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-[#E8CF9B] hover:shadow-[0_0_24px_rgba(214,183,121,0.35)] active:scale-[0.98]"
          >
            <span>Explore Our Work</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center px-6 sm:px-7 py-3 rounded-full bg-white/5 border border-[#D6B779]/35 text-white text-xs font-medium uppercase tracking-wider transition-all duration-300 hover:border-[#D6B779] hover:bg-[#D6B779]/10 hover:text-[#D6B779] active:scale-[0.98]"
          >
            <span>Discuss Your Project</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ArchitecturalVision;

