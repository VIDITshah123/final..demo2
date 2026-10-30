import React, { useState, useEffect, useRef } from 'react';
import { AmbientBackground } from './AmbientBackground';
import {
  AlertTriangle,
  CheckCircle2,
  Compass,
  Palette,
  Wrench,
  Shield,
  ChevronRight,
  ChevronDown,
  ArrowUpRight,
  ArrowRight,
  User,
  Home,
  Building2,
  Briefcase,
  Sparkles,
} from 'lucide-react';

/* =========================================================================
   SLIDE 1: THE DIFFERENCE (Comparison Engine with 4-Dot Selector)
   ========================================================================= */

interface ComparisonState {
  id: number;
  color: string;
  glowColor: string;
  label: string;
  traditional: {
    tag: string;
    headline: string;
    subheadline: string;
    status: string;
    image: string;
    badge1: string;
    badge2: string;
    footerTitle: string;
    footerDesc: string;
  };
  altimate: {
    quote: string;
    descriptor: string;
    tagline: string;
    image: string;
    footerTitle: string;
    footerDesc: string;
  };
}

const comparisonData: ComparisonState[] = [
  {
    id: 0,
    color: '#EA580C',
    glowColor: 'rgba(234, 88, 12, 0.45)',
    label: 'Render vs Reality',
    traditional: {
      tag: 'SPECULATIVE CONCEPT',
      headline: 'if there is no solution, keep hoping.',
      subheadline: 'STUDIO CONCEPT · The render for clients',
      status: 'Fragmented · Unbuildable',
      image: '/images/P36.jpeg',
      badge1: 'Pixelated',
      badge2: '1 layer',
      footerTitle: 'They give you a picture.',
      footerDesc: 'Done generating, not done working.',
    },
    altimate: {
      quote: "If there's no solution, we engineer one.",
      descriptor: 'ALTIMATE',
      tagline: 'The turnkey engine for elevated living',
      image: '/images/P06.jpeg',
      footerTitle: 'We give you a turnkey reality.',
      footerDesc: 'Fully engineered — Ready to live.',
    },
  },
  {
    id: 1,
    color: '#10B981',
    glowColor: 'rgba(16, 185, 129, 0.45)',
    label: 'Single Accountability',
    traditional: {
      tag: 'DISJOINTED TRADES',
      headline: 'contractors blaming architects.',
      subheadline: '8 SUBCONTRACTORS · Endless finger pointing',
      status: 'No Single Lead',
      image: '/images/P42.jpeg',
      badge1: 'Coordination Void',
      badge2: 'Variable Specs',
      footerTitle: 'They give you excuses.',
      footerDesc: 'Endless site disputes, zero accountability.',
    },
    altimate: {
      quote: 'One single team. Total accountability from day one.',
      descriptor: 'ALTIMATE MANAGEMENT',
      tagline: 'Synchronized architecture, MEP & turnkey build',
      image: '/images/P14.jpeg',
      footerTitle: 'We give you a master builder.',
      footerDesc: 'Single contract, zero friction, guaranteed handover.',
    },
  },
  {
    id: 2,
    color: '#FFFFFF',
    glowColor: 'rgba(255, 255, 255, 0.45)',
    label: 'Direct Sourcing',
    traditional: {
      tag: 'LOCAL RETAIL MARKUP',
      headline: 'catalogues with 300% middleman margin.',
      subheadline: 'GENERIC STOCK · Long import delays',
      status: 'Unverified Quarry',
      image: '/images/P25.jpeg',
      badge1: 'Third-party markups',
      badge2: 'Batch mismatch',
      footerTitle: 'They give you sample books.',
      footerDesc: 'Compromised quality, unpredictable lead times.',
    },
    altimate: {
      quote: 'Direct Italian quarry marble & bespoke joinery ateliers.',
      descriptor: 'ALTIMATE MATERIALITY',
      tagline: 'Curated stone slabs, certified European timber',
      image: '/images/P16.jpeg',
      footerTitle: 'We give you curated provenance.',
      footerDesc: 'Bespoke precision — Sourced directly from artisans.',
    },
  },
  {
    id: 3,
    color: '#64748B',
    glowColor: 'rgba(100, 116, 139, 0.45)',
    label: 'Fixed Cost Guarantee',
    traditional: {
      tag: 'VARIABLE BILLING',
      headline: 'initial quote was just the beginning.',
      subheadline: 'COST OVERRUNS · 40% unexpected variation fees',
      status: 'Surprise Invoices',
      image: '/images/P32.jpeg',
      badge1: 'Scope creeping',
      badge2: 'Hidden fees',
      footerTitle: 'They give you rising estimates.',
      footerDesc: 'Escalating variations, endless financial stress.',
    },
    altimate: {
      quote: 'Fixed-price contract. Every dirham locked before groundbreaking.',
      descriptor: 'ALTIMATE FINANCIAL INTEGRITY',
      tagline: 'Guaranteed milestone delivery with zero surprise costs',
      image: '/images/P28.jpeg',
      footerTitle: 'We give you price certainty.',
      footerDesc: 'Transparent luxury — Delivered precisely as agreed.',
    },
  },
];


/* =========================================================================
   SLIDE 4: SIGNATURE WORKS — Featured Project Spotlight
   ========================================================================= */

interface SignatureProject {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  location: string;
  category: string;
  area: string;
  timeline: string;
  tag: string;
  description: string;
  accent: string;
  glow: string;
  year: string;
}

const signatureProjects: SignatureProject[] = [
  {
    id: 'sp-1',
    image: '/images/P04.jpeg',
    title: 'Villa Lumière',
    subtitle: 'Beachfront Estate',
    location: 'Palm Jumeirah, Dubai',
    category: 'PRIVATE ESTATE',
    area: '14,200 SQ FT',
    timeline: '11 Months',
    tag: 'ARCHITECTURE & INTERIORS',
    description: 'A beachfront estate defined by double-height glass curtain walls, bookmatched Calacatta marble, and bespoke bronze millwork — conceived as a single continuous architectural gesture from seafront to sky.',
    accent: '#EA580C',
    glow: 'rgba(234,88,12,0.28)',
    year: '2024',
  },
  {
    id: 'sp-2',
    image: '/images/P14.jpeg',
    title: 'The Grand Salon',
    subtitle: 'Emirates Hills Compound',
    location: 'Emirates Hills, Dubai',
    category: 'LUXURY VILLA',
    area: '22,000 SQ FT',
    timeline: '14 Months',
    tag: 'ARCHITECTURE & BUILD',
    description: 'A landmark gated compound featuring a formal reception salon in bookmatched Italian stone, subterranean entertainment vault, and private wellness spa with hydrotherapy.',
    accent: '#D6B779',
    glow: 'rgba(214,183,121,0.24)',
    year: '2024',
  },
  {
    id: 'sp-3',
    image: '/images/P01.jpeg',
    title: 'Sky Palace Duplex',
    subtitle: 'Penthouse Residence',
    location: 'Downtown Dubai, UAE',
    category: 'PENTHOUSE',
    area: '8,500 SQ FT',
    timeline: '8 Months',
    tag: 'TURNKEY FIT-OUT',
    description: 'A triplex sky residence with uninterrupted Burj Khalifa panoramas, floating architectural staircases in smoked oak, and fully integrated Crestron smart home automation.',
    accent: '#10B981',
    glow: 'rgba(16,185,129,0.22)',
    year: '2023',
  },
  {
    id: 'sp-4',
    image: '/images/P05.jpeg',
    title: 'Horizon Executive HQ',
    subtitle: 'Private Family Office',
    location: 'DIFC, Dubai',
    category: 'COMMERCIAL',
    area: '6,800 SQ FT',
    timeline: '5 Months',
    tag: 'COMMERCIAL INTERIORS',
    description: 'A high-altitude executive headquarters with acoustic timber baffles, curved Nero Marquina reception desk, and a private boardroom commanding 360° views of the Dubai skyline.',
    accent: '#EA580C',
    glow: 'rgba(234,88,12,0.22)',
    year: '2023',
  },
];

/* =========================================================================
   SLIDE 5: ONE VISION EVERY SPACE DATA
   ========================================================================= */

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

const spaceCategories: SpaceCategory[] = [
  {
    id: 'residences',
    title: 'Private Residences',
    subtitle: 'Beachfront villas, gated estates & sanctuary compounds',
    icon: <Home className="w-4 h-4 text-neutral-300" />,
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
    icon: <Building2 className="w-4 h-4 text-neutral-300" />,
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
    icon: <Briefcase className="w-4 h-4 text-neutral-300" />,
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
    icon: <Sparkles className="w-4 h-4 text-neutral-300" />,
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

/* =========================================================================
   MAIN HORIZONTAL EXPERIENCE CONTAINER
   ========================================================================= */

export const HorizontalExperience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const ribbonPathRef = useRef<SVGPathElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [pathLength, setPathLength] = useState(2800);

  // Slide 1 State
  const [diffActiveTab, setDiffActiveTab] = useState<number>(0);
  const currentDiff = comparisonData[diffActiveTab];

  // Slide 2 State
  const [selectedColor, setSelectedColor] = useState<number>(0);
  const [activeDept, setActiveDept] = useState<string>('arch');

  // Slide 4 State — Signature Works auto-advance
  const [activeProject, setActiveProject] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveProject((p) => (p + 1) % signatureProjects.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Slide 5 State
  const [spaceTab, setSpaceTab] = useState<number>(0);

  // Palette swatches for Slide 2
  const paletteSwatches = [
    { name: 'Warm Terracotta & Cedar', hex: '#EA580C' },
    { name: 'Cashmere & Fluted Plaster', hex: '#D8B4FE' },
    { name: 'Verde Emerald & Malachite', hex: '#10B981' },
    { name: 'Belgian Slate & Nero', hex: '#1C1917' },
    { name: 'Calacatta & Pure Chalk', hex: '#FAF8F5' },
  ];

  const departments = [
    {
      id: 'arch',
      title: 'Architecture',
      icon: <Compass className="w-4 h-4 text-[#EA580C]" />,
      active: activeDept === 'arch',
    },
    {
      id: 'interior',
      title: 'Interior Design',
      icon: <Palette className="w-4 h-4 text-[#EA580C]" />,
      active: activeDept === 'interior',
    },
    {
      id: 'mep',
      title: 'MEP & Engineering',
      icon: <Wrench className="w-4 h-4 text-[#EA580C]" />,
      active: activeDept === 'mep',
    },
    {
      id: 'fitout',
      title: 'Turnkey Fit-Out',
      icon: <Shield className="w-4 h-4 text-[#EA580C]" />,
      active: activeDept === 'fitout',
    },
  ];

  useEffect(() => {
    if (ribbonPathRef.current) {
      const len = ribbonPathRef.current.getTotalLength();
      if (len > 0) setPathLength(len);
    }
  }, []);

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
          const progress = Math.max(0, Math.min(1, currentScroll / totalScrollable));

          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Translation calculation: 5 slides = 500vw total width. Max translate is 400vw
  const translateX = scrollProgress * 400; // in vw units

  // Dynamic green ribbon progression tied directly to scroll movement:
  // Starts entering as user moves into Slide 2 (around 0.20),
  // sweeps dynamically through Slide 3, and finishes at Slide 4 (around 0.90).
  const ribbonStart = 0.16;
  const ribbonEnd = 0.78;
  const ribbonProgress = Math.min(1, Math.max(0, (scrollProgress - ribbonStart) / (ribbonEnd - ribbonStart)));
  const strokeDashoffset = pathLength * (1 - ribbonProgress);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[520vh] bg-[#070707] selection:bg-[#D6B779]/25"
    >
      {/* ===== CINEMATIC AMBIENT LIGHTING ===== */}
      <AmbientBackground variant="horizontal" />

      {/* ================= PINNED STICKY VIEWPORT CONTAINER ================= */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center bg-[#070707]">
        
        {/* ================= HORIZONTAL SCROLL TRACK (400vw Total Width) ================= */}
        <div
          ref={trackRef}
          className="flex h-full w-[500vw] will-change-transform relative"
          style={{
            transform: `translate3d(-${translateX}vw, 0, 0)`,
            transition: 'transform 0.06s ease-out',
          }}
        >
          {/* =========================================================================
             CONTINUOUS DYNAMIC GREEN ARCHITECTURAL RIBBON (Moves along with user scroll)
             Starts at "Your aesthetic, built in." and advances into Turnkey Velocity & Emblem
             ========================================================================= */}
          <svg
            className="absolute top-0 left-0 w-[500vw] h-full pointer-events-none z-0"
            viewBox="0 0 5000 1000"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="continuousGreenRibbon"
                x1="1040"
                y1="500"
                x2="3650"
                y2="500"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.95" />
                <stop offset="35%" stopColor="#059669" stopOpacity="0.95" />
                <stop offset="70%" stopColor="#047857" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#047857" stopOpacity="0" />
              </linearGradient>

              {/* Enhanced Soft Glow Filter */}
              <filter id="ribbonGlow" x="-10%" y="-10%" width="120%" height="120%">
                <feGaussianBlur stdDeviation="10" result="glow" />
                <feMerge>
                  <feMergeNode in="glow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* The single continuous ribbon: starts at x=1040 (bottom-left of Slide 2),
                sweeps through Slide 3 behind the cards, and tapers off at x=3480 in Slide 4.
                strokeDashoffset moves along dynamically with the user's scroll! */}
            <path
              ref={ribbonPathRef}
              d="M 1040 860 C 1380 800, 1720 600, 2040 440 C 2240 320, 2450 160, 2650 240 C 2850 320, 2920 680, 3120 740 C 3300 780, 3450 820, 3650 820"
              stroke="url(#continuousGreenRibbon)"
              strokeWidth="86"
              strokeLinecap="round"
              strokeDasharray={pathLength}
              strokeDashoffset={strokeDashoffset}
              style={{
                transition: 'stroke-dashoffset 0.08s ease-out',
                opacity: ribbonProgress > 0 ? 1 : 0,
              }}
              filter="url(#ribbonGlow)"
            />
          </svg>

          {/* =========================================================================
             SLIDE 1: THE DIFFERENCE (Frame 0 Reference)
             ========================================================================= */}
          <section className="w-screen min-w-[100vw] h-screen shrink-0 relative flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12 overflow-hidden select-none">
            
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
              <div
                className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full ambient-glow transition-all duration-700"
                style={{
                  background: `radial-gradient(circle, ${currentDiff.glowColor} 0%, rgba(7, 7, 7, 0) 70%)`,
                }}
              />
            </div>

            <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center justify-center my-auto pt-16 sm:pt-10">
              
              {/* Header */}
              <div className="text-center mb-6 lg:mb-8">
                <div className="inline-flex items-center space-x-2 px-3 py-0.5 rounded-full bg-white/[0.04] border border-white/10 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
                  <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-300">
                    THE DIFFERENCE
                  </span>
                </div>
                <h2 className="text-2xl sm:text-4xl lg:text-[34px] font-bold text-white tracking-tight leading-[1.1]">
                  They build image generators.
                  <br />
                  <span className="text-white/95">We built a design engine.</span>
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-neutral-400 max-w-lg mx-auto font-light leading-relaxed">
                  Most studios stop at flat 3D pictures. ALTIMATE unifies architecture, interior design, and turnkey fit-out into a single cohesive reality.
                </p>

                {/* Mobile 4-Dot Horizontal Selector */}
                <div className="flex md:hidden items-center justify-center space-x-3 mt-4 py-1.5 px-3 rounded-full ios-glass border border-white/15 max-w-xs mx-auto">
                  {comparisonData.map((item, idx) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setDiffActiveTab(idx)}
                      aria-label={`Select ${item.label}`}
                      className="relative p-0.5 focus:outline-none"
                    >
                      <span
                        className={`block rounded-full transition-all duration-300 ${
                          diffActiveTab === idx
                            ? 'w-4 h-4 p-0.5 border-2 shadow-lg'
                            : 'w-2.5 h-2.5 hover:scale-110'
                        }`}
                        style={{
                          borderColor: diffActiveTab === idx ? item.color : 'transparent',
                          boxShadow: diffActiveTab === idx ? `0 0 10px ${item.color}` : 'none',
                        }}
                      >
                        <span
                          className="block w-full h-full rounded-full transition-all"
                          style={{
                            backgroundColor: item.color,
                            opacity: diffActiveTab === idx ? 1 : 0.6,
                          }}
                        />
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Dual Cards + 4-Dot Selector (Optimized for Mobile & Desktop) */}
              <div className="grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center gap-2.5 sm:gap-6 lg:gap-8 w-full max-w-4xl">
                
                {/* Left Card: Traditional Approach */}
                <div className="flex flex-col items-center">
                  <div className="w-full max-w-[360px] rounded-[26px] p-2.5 sm:p-3 ios-glass border-t-white/25 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_20px_50px_rgba(0,0,0,0.85)] relative group transition-all">
                    <div className="w-full aspect-[3/4] sm:aspect-[4/5] rounded-[14px] sm:rounded-[18px] bg-[#161513] overflow-hidden relative border border-white/5 flex flex-col justify-between p-2.5 sm:p-5">
                      <div className="flex items-center justify-between z-10">
                        <span className="px-2 py-0.5 rounded text-[9px] font-mono tracking-wider bg-black/60 border border-white/10 text-neutral-400">
                          {currentDiff.traditional.badge1}
                        </span>
                        <div className="flex items-center space-x-1 px-2 py-0.5 rounded text-[9px] font-mono tracking-wider bg-black/60 border border-white/10 text-neutral-400">
                          <span>🔒</span>
                          <span>{currentDiff.traditional.badge2}</span>
                        </div>
                      </div>

                      <div className="absolute inset-0 z-0">
                        <img
                          src={currentDiff.traditional.image}
                          alt="Traditional render concept"
                          className="w-full h-full object-cover filter grayscale contrast-125 brightness-[0.45] opacity-75"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                      </div>

                      <div className="relative z-10 mt-auto pt-6">
                        <p className="font-serif italic text-base sm:text-lg text-neutral-300 leading-tight">
                          {currentDiff.traditional.headline}
                        </p>
                        <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
                          <div>
                            <h4 className="text-[11px] font-bold uppercase tracking-wider text-neutral-300">
                              {currentDiff.traditional.tag}
                            </h4>
                            <p className="text-[9px] text-neutral-400 font-mono">
                              {currentDiff.traditional.subheadline}
                            </p>
                          </div>
                        </div>

                        <div className="mt-3 flex items-center justify-between p-2 rounded-lg bg-black/70 border border-white/10">
                          <div className="flex items-center space-x-1.5">
                            <AlertTriangle className="w-3 h-3 text-amber-500" />
                            <span className="text-[10px] font-mono text-neutral-300">
                              {currentDiff.traditional.status}
                            </span>
                          </div>
                          <span className="text-[9px] font-mono text-neutral-500">Bitmap.jpg</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 text-center">
                    <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
                      {currentDiff.traditional.footerTitle}
                    </h3>
                    <p className="text-[11px] text-neutral-400 font-light">
                      {currentDiff.traditional.footerDesc}
                    </p>
                  </div>
                </div>

                {/* Center 4-Dot Vertical Selector (Desktop) */}
                <div className="hidden md:flex flex-col items-center justify-center space-y-3.5 py-3.5 px-2 rounded-full ios-glass border border-white/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_25px_rgba(0,0,0,0.7)]">
                  {comparisonData.map((item, idx) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setDiffActiveTab(idx)}
                      aria-label={`Select ${item.label}`}
                      className="relative group p-0.5 focus:outline-none"
                    >
                      <span
                        className={`block rounded-full transition-all duration-300 ${
                          diffActiveTab === idx
                            ? 'w-5 h-5 p-0.5 border-2 shadow-lg'
                            : 'w-3.5 h-3.5 hover:scale-110'
                        }`}
                        style={{
                          borderColor: diffActiveTab === idx ? item.color : 'transparent',
                          boxShadow: diffActiveTab === idx ? `0 0 14px ${item.color}` : 'none',
                        }}
                      >
                        <span
                          className="block w-full h-full rounded-full transition-all"
                          style={{
                            backgroundColor: item.color,
                            opacity: diffActiveTab === idx ? 1 : 0.6,
                          }}
                        />
                      </span>
                    </button>
                  ))}
                </div>

                {/* Right Card: ALTIMATE Turnkey */}
                <div className="flex flex-col items-center">
                  <div className="w-full max-w-[360px] rounded-[26px] p-2.5 sm:p-3 ios-glass border-t-white/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_20px_50px_rgba(234,88,12,0.2),0_0_30px_rgba(234,88,12,0.15)] relative group transition-all">
                    <div className="w-full aspect-[4/5] rounded-[18px] overflow-hidden relative flex flex-col">
                      <div className="bg-white text-black p-4 sm:p-5 flex flex-col justify-between">
                        <p className="font-serif italic text-base sm:text-xl text-neutral-900 leading-tight font-medium">
                          "{currentDiff.altimate.quote}"
                        </p>
                        <div className="mt-3 flex items-center space-x-1.5">
                          <span className="text-[#EA580C] text-sm font-bold">✦</span>
                          <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-neutral-900">
                            {currentDiff.altimate.descriptor}
                          </span>
                        </div>
                        <p className="text-[10px] text-neutral-500 font-sans">
                          {currentDiff.altimate.tagline}
                        </p>
                      </div>

                      <div
                        className="flex-1 relative overflow-hidden flex items-end p-4 sm:p-5"
                        style={{ backgroundColor: currentDiff.color }}
                      >
                        <img
                          src={currentDiff.altimate.image}
                          alt="ALTIMATE execution"
                          className="absolute inset-0 w-full h-full object-cover mix-blend-multiply filter contrast-110 brightness-90"
                        />
                        <div className="relative z-10 inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white shadow-lg">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          <span className="text-[9px] font-mono tracking-wider uppercase font-semibold">
                            DUBAI MUNICIPALITY VERIFIED
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 text-center">
                    <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
                      {currentDiff.altimate.footerTitle}
                    </h3>
                    <p className="text-[11px] text-neutral-400 font-light">
                      {currentDiff.altimate.footerDesc}
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </section>

          {/* =========================================================================
             SLIDE 2: CONNECTED SPECIFICATIONS & MATERIALITY KIT (Frames 1-3 Reference)
             * The Green Line starts at the bottom-left of this slide!
             ========================================================================= */}
          <section className="w-screen min-w-[100vw] h-screen shrink-0 relative flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12 overflow-hidden select-none">
            
            <div className="relative w-full max-w-6xl mx-auto flex flex-col my-auto pt-14 sm:pt-0">
              
              <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.9fr] items-center gap-10 lg:gap-14">
                
                {/* Left Column: Headline & Action */}
                <div>
                  <div className="inline-flex items-center space-x-2 px-3 py-0.5 rounded-full bg-white/[0.04] border border-white/10 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                    <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-300">
                      SYSTEMATIZED MATERIALITY
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold text-white tracking-tight leading-[1.05]">
                    Your aesthetic,
                    <br />
                    <span className="text-white/95">built in.</span>
                  </h2>

                  <p className="mt-4 text-xs sm:text-sm text-neutral-400 font-light leading-relaxed max-w-sm">
                    Set stone selections, custom joinery, architectural lighting, and hardware standards once. Every room stays flawlessly cohesive, from first concept render to final key handover.
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a
                      href="#contact"
                      className="px-5 py-2.5 rounded-full text-[11px] font-mono tracking-widest uppercase ios-glass-interactive text-white shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                    >
                      Explore Materials
                    </a>
                    <a
                      href="#contact"
                      className="px-5 py-2.5 rounded-full text-[11px] font-mono tracking-widest uppercase font-semibold text-white bg-gradient-to-r from-[#EA580C] to-[#F97316] shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),0_0_25px_rgba(234,88,12,0.5)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.45),0_0_35px_rgba(234,88,12,0.7)] transition-all"
                    >
                      Book Consultation
                    </a>
                  </div>
                </div>

                {/* Right Column: Connected Spec Kit & Output Cards (Fully Responsive) */}
                <div className="relative w-full pb-2">
                  {/* Desktop Layout: 3 Columns with Wires */}
                  <div className="hidden lg:grid grid-cols-[130px_1fr_180px] items-center gap-4 relative">
                    
                    {/* Discipline Pills */}
                    <div className="flex flex-col space-y-3 z-20">
                      {departments.map((dept) => (
                        <button
                          key={dept.id}
                          type="button"
                          onClick={() => setActiveDept(dept.id)}
                          className={`flex items-center space-x-2 px-2.5 py-2 rounded-full border text-left transition-all duration-300 focus:outline-none ${
                            activeDept === dept.id
                              ? 'bg-[#1E1C1A] border-[#EA580C]/90 shadow-[0_0_20px_rgba(234,88,12,0.35),inset_0_1px_1px_rgba(255,255,255,0.1)]'
                              : 'bg-[#121110]/80 border-white/10 hover:border-white/20'
                          }`}
                        >
                          <div className="w-6 h-6 rounded-full bg-black/60 flex items-center justify-center border border-white/10 shrink-0">
                            {dept.icon}
                          </div>
                          <span className="text-[11px] font-medium text-neutral-200 truncate">
                            {dept.title}
                          </span>
                        </button>
                      ))}
                    </div>

                    {/* Spec Kit Tablet */}
                    <div className="relative z-20 mx-auto w-full max-w-[320px] rounded-[26px] liquid-glass p-4">
                      <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2">
                        <div className="flex items-center space-x-1.5">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-white">
                            Material Kit
                          </span>
                          <span className="text-[10px]">🔒</span>
                        </div>
                        <span className="text-[9px] font-mono text-neutral-400">
                          altimate.ae/specs
                        </span>
                      </div>

                      <div className="text-base font-bold text-white tracking-wide mb-2">
                        ALTIMATE
                      </div>

                      <div className="flex items-center justify-between py-1.5 px-2.5 rounded-lg bg-[#181615] border border-white/5 mb-2.5 text-[11px] text-neutral-300">
                        <div className="flex items-center space-x-2">
                          <span>📐</span>
                          <span className="font-medium">Architectural Guide</span>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-neutral-500" />
                      </div>

                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between text-[11px] font-semibold text-neutral-300">
                          <div className="flex items-center space-x-1.5">
                            <span className="text-[10px]">⊞</span>
                            <span>Assets</span>
                          </div>
                          <ChevronDown className="w-3.5 h-3.5 text-neutral-500" />
                        </div>

                        <div>
                          <span className="text-[9px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                            Templates
                          </span>
                          <div className="grid grid-cols-4 gap-1">
                            {['/images/P09.jpeg', '/images/P22.jpeg', '/images/P11.jpeg', '/images/P24.jpeg'].map(
                              (src, idx) => (
                                <div
                                  key={idx}
                                  className="aspect-square rounded-md overflow-hidden border border-white/10"
                                >
                                  <img
                                    src={src}
                                    alt="Template"
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              )
                            )}
                          </div>
                        </div>

                        <div>
                          <span className="text-[9px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                            Atelier Marks
                          </span>
                          <div className="grid grid-cols-4 gap-1">
                            {['✦', '▲', '❖', '◈'].map((sym, idx) => (
                              <div
                                key={idx}
                                className="aspect-square rounded-md bg-[#181615] border border-white/10 flex items-center justify-center text-xs text-[#D6B779]"
                              >
                                {sym}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <span className="text-[9px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                            Curated Swatches
                          </span>
                          <div className="flex items-center space-x-1.5">
                            {paletteSwatches.map((swatch, idx) => (
                              <button
                                key={idx}
                                type="button"
                                onClick={() => setSelectedColor(idx)}
                                className={`w-6 h-6 rounded-md border transition-all relative focus:outline-none ${
                                  selectedColor === idx
                                    ? 'border-white scale-110 shadow-lg'
                                    : 'border-white/20'
                                }`}
                                style={{ backgroundColor: swatch.hex }}
                                title={swatch.name}
                              >
                                {selectedColor === idx && (
                                  <span className="absolute inset-0 flex items-center justify-center text-black font-bold text-[10px]">
                                    ✓
                                  </span>
                                )}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Output Cards */}
                    <div className="flex flex-col space-y-3 z-20">
                      <div className="w-[170px] rounded-2xl ios-glass border-t-white/25 p-2.5 shadow-[0_16px_40px_rgba(0,0,0,0.8)] group hover:border-white/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.12),0_0_20px_rgba(214,183,121,0.1)] transition-all duration-500">
                        <div className="flex items-center justify-between text-[9px] font-mono text-neutral-400 mb-1.5">
                          <span className="inline-flex items-center space-x-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            <span>Palm Suite</span>
                          </span>
                          <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                        </div>
                        <div className="w-full aspect-[4/3] rounded-lg overflow-hidden border border-white/10 mb-1.5 relative">
                          <img
                            src="/images/P04.jpeg"
                            alt="Palm suite"
                            className="w-full h-full object-cover"
                          />
                          <div
                            className="absolute inset-0 opacity-20 mix-blend-color"
                            style={{ backgroundColor: paletteSwatches[selectedColor].hex }}
                          />
                        </div>
                        <h4 className="text-[11px] font-bold text-white truncate">
                          Palm Beachfront Villa
                        </h4>
                        <p className="text-[9px] text-neutral-400">
                          Tariq A. — Principal
                        </p>
                      </div>

                      <div className="w-[170px] rounded-2xl ios-glass border-t-white/25 p-2.5 shadow-[0_16px_40px_rgba(0,0,0,0.8)] group hover:border-white/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.12),0_0_20px_rgba(214,183,121,0.1)] transition-all duration-500">
                        <div className="flex items-center justify-between text-[9px] font-mono text-neutral-400 mb-1.5">
                          <span className="inline-flex items-center space-x-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
                            <span>Emirates Hills</span>
                          </span>
                          <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                        </div>
                        <div className="w-full aspect-[4/3] rounded-lg overflow-hidden border border-white/10 mb-1.5 relative">
                          <img
                            src="/images/P14.jpeg"
                            alt="Grand salon"
                            className="w-full h-full object-cover"
                          />
                          <div
                            className="absolute inset-0 opacity-20 mix-blend-color"
                            style={{ backgroundColor: paletteSwatches[selectedColor].hex }}
                          />
                        </div>
                        <h4 className="text-[11px] font-bold text-white truncate">
                          Grand Living Salon
                        </h4>
                        <p className="text-[9px] text-neutral-400">
                          Karim M. — Design Lead
                        </p>
                      </div>
                    </div>

                    {/* Bezier Wires */}
                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none z-10"
                      viewBox="0 0 640 400"
                      fill="none"
                    >
                      <path
                        d="M 120 40 C 160 40, 170 100, 210 100"
                        stroke="rgba(234, 88, 12, 0.5)"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                      />
                      <path
                        d="M 120 100 C 160 100, 170 140, 210 140"
                        stroke="rgba(234, 88, 12, 0.4)"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M 120 160 C 160 160, 170 180, 210 180"
                        stroke="rgba(255, 255, 255, 0.25)"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M 120 210 C 160 210, 170 220, 210 220"
                        stroke="rgba(16, 185, 129, 0.4)"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M 430 120 C 460 120, 460 80, 490 80"
                        stroke="rgba(255, 255, 255, 0.35)"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M 430 240 C 460 240, 460 270, 490 270"
                        stroke="rgba(234, 88, 12, 0.45)"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                      />
                    </svg>

                  </div>

                  {/* Mobile & Tablet Layout (< 1024px): Clean Stacked Flow */}
                  <div className="block lg:hidden w-full space-y-3 mt-4">
                    {/* Horizontal Discipline Pills */}
                    <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-1">
                      {departments.map((dept) => (
                        <button
                          key={dept.id}
                          type="button"
                          onClick={() => setActiveDept(dept.id)}
                          className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full border text-left shrink-0 transition-all ${
                            activeDept === dept.id
                              ? 'bg-[#1E1C1A] border-[#EA580C]/90 shadow-[0_0_20px_rgba(234,88,12,0.35),inset_0_1px_1px_rgba(255,255,255,0.1)]'
                              : 'bg-[#121110]/80 border-white/10'
                          }`}
                        >
                          <div className="w-5 h-5 rounded-full bg-black/60 flex items-center justify-center shrink-0">
                            {dept.icon}
                          </div>
                          <span className="text-[10px] font-medium text-neutral-200">
                            {dept.title}
                          </span>
                        </button>
                      ))}
                    </div>

                    {/* Spec Kit Tablet on Mobile */}
                    <div className="w-full max-w-[340px] mx-auto rounded-2xl liquid-glass p-3.5">
                      <div className="flex items-center justify-between pb-1.5 border-b border-white/10 mb-2">
                        <div className="flex items-center space-x-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-white">Material Kit</span>
                          <span className="text-[9px]">🔒</span>
                        </div>
                        <span className="text-[9px] font-mono text-neutral-400">altimate.ae/specs</span>
                      </div>
                      <div className="text-sm font-bold text-white mb-2">ALTIMATE</div>

                      {/* Swatches Selector */}
                      <div className="flex items-center space-x-1.5 py-1">
                        {paletteSwatches.map((swatch, idx) => (
                          <button
                            key={swatch.name}
                            type="button"
                            onClick={() => setSelectedColor(idx)}
                            className={`w-6 h-6 rounded-full border transition-all ${
                              selectedColor === idx ? 'scale-110 border-white shadow-md' : 'border-transparent opacity-70'
                            }`}
                            style={{ backgroundColor: swatch.hex }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Dual Preview Cards on Mobile */}
                    <div className="grid grid-cols-2 gap-2 max-w-[340px] mx-auto">
                      <div className="rounded-xl ios-glass-card p-2">
                        <div className="w-full aspect-[4/3] rounded-lg overflow-hidden mb-1 relative">
                          <img src="/images/P22.jpeg" alt="Palm Beachfront Villa" className="w-full h-full object-cover" />
                        </div>
                        <p className="text-[10px] font-bold text-white truncate">Palm Villa</p>
                        <p className="text-[8px] text-neutral-400">Principal Lead</p>
                      </div>
                      <div className="rounded-xl ios-glass-card p-2">
                        <div className="w-full aspect-[4/3] rounded-lg overflow-hidden mb-1 relative">
                          <img src="/images/P09.jpeg" alt="Grand Living Salon" className="w-full h-full object-cover" />
                        </div>
                        <p className="text-[10px] font-bold text-white truncate">Grand Salon</p>
                        <p className="text-[8px] text-neutral-400">Design Lead</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>

          {/* =========================================================================
             SLIDE 3: TURNKEY VELOCITY (Frames 4-6 Reference)
             * The Green Ribbon sweeps across behind the cards here!
             ========================================================================= */}
          <section className="w-screen min-w-[100vw] h-screen shrink-0 relative flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12 overflow-hidden select-none">
            
            <div className="relative w-full max-w-6xl mx-auto flex flex-col my-auto z-10">
              
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] items-center gap-10 lg:gap-14">
                
                {/* Left Column */}
                <div className="max-w-lg">
                  <div className="inline-flex items-center space-x-2 px-3 py-0.5 rounded-full bg-white/[0.04] border border-white/10 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                    <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-300">
                      THE EXECUTION ADVANTAGE
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold text-white tracking-tight leading-[1.05]">
                    More precision.
                    <br />
                    <span className="text-white/95">Zero burnout.</span>
                  </h2>

                  <p className="mt-4 text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                    Luxury residential demand in Dubai is surging every quarter. ALTIMATE turns turnkey design and build into an orchestrated system, so your estate is handed over on time without contractor friction or burnout.
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a
                      href="#contact"
                      className="px-5 py-2.5 rounded-full text-[11px] font-mono tracking-widest uppercase ios-glass-interactive text-white shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                    >
                      View Timeline Guarantee
                    </a>
                    <a
                      href="#contact"
                      className="px-5 py-2.5 rounded-full text-[11px] font-mono tracking-widest uppercase font-semibold text-white bg-gradient-to-r from-[#EA580C] to-[#F97316] shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),0_0_25px_rgba(234,88,12,0.5)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.45),0_0_35px_rgba(234,88,12,0.7)] transition-all"
                    >
                      Contact Sales
                    </a>
                  </div>
                </div>

                {/* Right Column: Dual Capacity Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 relative">
                  
                  {/* Others Card */}
                  <div className="rounded-[26px] ios-glass border-t-white/20 p-4 sm:p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.18),0_20px_50px_rgba(0,0,0,0.85)] flex flex-col justify-between">
                    <div>
                      <h3 className="text-xs font-bold text-neutral-300 tracking-wide pb-3 border-b border-white/10">
                        Others
                      </h3>

                      <div className="mt-3">
                        <span className="text-[10px] text-neutral-500 font-sans block mb-1.5">
                          Members
                        </span>
                        <div className="flex items-center space-x-1.5">
                          {[1, 2, 3].map((n) => (
                            <div
                              key={n}
                              className="w-6 h-6 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-neutral-300"
                            >
                              <User className="w-3 h-3 text-neutral-400" />
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-4">
                        <div className="flex items-center justify-between text-[11px] mb-1.5">
                          <span className="text-neutral-400">Team load</span>
                          <span className="text-red-500 font-mono text-[10px] font-semibold">
                            Maxed out
                          </span>
                        </div>
                        {/* Segmented bar meter */}
                        <div className="flex items-end space-x-1 h-4 w-full">
                          {Array.from({ length: 24 }).map((_, i) => (
                            <div
                              key={i}
                              className={`flex-1 rounded-sm transition-all ${
                                i < 10
                                  ? 'h-full bg-emerald-500'
                                  : i < 16
                                  ? 'h-full bg-amber-500'
                                  : i < 20
                                  ? 'h-full bg-red-500'
                                  : 'h-1 bg-white/10'
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="mt-5">
                        <span className="text-[11px] text-neutral-400 block mb-2">
                          Milestones on schedule
                        </span>
                        <div className="grid grid-cols-8 gap-1.5">
                          {Array.from({ length: 40 }).map((_, i) => (
                            <div
                              key={i}
                              className={`w-3.5 h-3.5 rounded-full border transition-all ${
                                i < 12
                                  ? 'border-emerald-500/80 bg-emerald-500/20'
                                  : 'border-white/15 bg-transparent'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ALTIMATE Card */}
                  <div className="rounded-[26px] ios-glass border-[#10B981]/40 border-t-white/30 p-4 sm:p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(16,185,129,0.22)] flex flex-col justify-between group hover:border-[#10B981]/60 transition-all">
                    <div>
                      <div className="flex items-center space-x-1.5 pb-3 border-b border-white/10">
                        <span className="text-emerald-400 font-bold text-xs">✦</span>
                        <h3 className="text-xs font-bold text-white tracking-wide">
                          ALTIMATE
                        </h3>
                      </div>

                      <div className="mt-3">
                        <span className="text-[10px] text-neutral-500 font-sans block mb-1.5">
                          Members
                        </span>
                        <div className="flex items-center space-x-1.5">
                          {[1, 2, 3].map((n) => (
                            <div
                              key={n}
                              className="w-6 h-6 rounded-full bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-300"
                            >
                              <User className="w-3 h-3 text-emerald-400" />
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-4">
                        <div className="flex items-center justify-between text-[11px] mb-1.5">
                          <span className="text-neutral-400">Team load</span>
                          <span className="text-emerald-400 font-mono text-[10px] font-semibold">
                            Steady
                          </span>
                        </div>
                        {/* Segmented bar meter */}
                        <div className="flex items-end space-x-1 h-4 w-full">
                          {Array.from({ length: 24 }).map((_, i) => (
                            <div
                              key={i}
                              className={`flex-1 rounded-sm transition-all ${
                                i < 8 ? 'h-full bg-emerald-400' : 'h-1 bg-white/10'
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="mt-5">
                        <span className="text-[11px] text-neutral-400 block mb-2">
                          Milestones on schedule
                        </span>
                        <div className="grid grid-cols-8 gap-1.5">
                          {Array.from({ length: 40 }).map((_, i) => (
                            <div
                              key={i}
                              className="w-3.5 h-3.5 rounded-full border border-emerald-400 bg-emerald-500/20 shadow-[0_0_6px_rgba(16,185,129,0.35)]"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </section>

          {/* =========================================================================
             SLIDE 4: SIGNATURE WORKS — Featured Project Spotlight
             ========================================================================= */}
          <section className="w-screen min-w-[100vw] h-screen shrink-0 relative flex items-center justify-center overflow-hidden select-none">

            {/* Dynamic ambient glow that shifts with active project */}
            <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
              <div
                className="absolute inset-0 transition-all duration-1000"
                style={{
                  background: `radial-gradient(ellipse 80% 60% at 30% 50%, ${signatureProjects[activeProject].glow} 0%, transparent 70%)`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#070707]/0 via-[#070707]/60 to-[#070707]/95" />
            </div>

            {/* ── FULL-BLEED BACKGROUND IMAGE (fills left ~60%) ── */}
            <div className="absolute inset-0 z-0">
              {signatureProjects.map((proj, idx) => (
                <div
                  key={proj.id}
                  className="absolute inset-0 transition-all duration-1000 ease-in-out"
                  style={{
                    opacity: activeProject === idx ? 1 : 0,
                    transform: activeProject === idx ? 'scale(1.00)' : 'scale(1.04)',
                  }}
                >
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover object-center"
                    style={{ filter: 'brightness(0.55) contrast(1.08)' }}
                  />
                </div>
              ))}
              {/* Right-side fade to dark for content readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#070707]/55 to-[#070707]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070707]/70 via-transparent to-[#070707]/30" />
            </div>

            {/* ── CONTENT LAYER ── */}
            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col lg:flex-row items-end lg:items-center justify-between gap-8 h-full py-16">

              {/* Left — Editorial project title overlay (visible on image) */}
              <div className="flex-1 flex flex-col justify-end lg:justify-center pb-8 lg:pb-0">
                <div
                  className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-full border mb-5 w-fit transition-all duration-700"
                  style={{ borderColor: `${signatureProjects[activeProject].accent}55`, background: `${signatureProjects[activeProject].accent}18` }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: signatureProjects[activeProject].accent }}
                  />
                  <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-white/80">
                    {signatureProjects[activeProject].tag}
                  </span>
                </div>

                <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-white tracking-tight leading-[0.95] mb-3 transition-all duration-700">
                  {signatureProjects[activeProject].title}
                </h2>
                <p className="text-base sm:text-lg text-white/60 font-light tracking-wide mb-1">
                  {signatureProjects[activeProject].subtitle}
                </p>
                <p className="text-sm text-white/40 font-mono tracking-widest uppercase">
                  {signatureProjects[activeProject].location}
                </p>

                {/* Progress bar */}
                <div className="mt-8 flex items-center space-x-3">
                  {signatureProjects.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveProject(i)}
                      className="relative h-0.5 rounded-full overflow-hidden transition-all duration-300"
                      style={{
                        width: activeProject === i ? '48px' : '16px',
                        background: activeProject === i ? signatureProjects[activeProject].accent : 'rgba(255,255,255,0.2)',
                      }}
                    />
                  ))}
                  <span className="text-[10px] font-mono text-white/30 ml-2">
                    {String(activeProject + 1).padStart(2, '0')} / {String(signatureProjects.length).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Right — Project details panel */}
              <div className="w-full lg:w-[420px] shrink-0">
                <div
                  className="rounded-3xl border p-6 sm:p-8 backdrop-blur-xl transition-all duration-700"
                  style={{
                    background: 'linear-gradient(135deg, rgba(14,12,10,0.90) 0%, rgba(8,7,6,0.95) 100%)',
                    borderColor: `${signatureProjects[activeProject].accent}30`,
                    boxShadow: `inset 0 1px 1px rgba(255,255,255,0.08), 0 0 60px ${signatureProjects[activeProject].glow}, 0 30px 80px rgba(0,0,0,0.80)`,
                  }}
                >
                  {/* Year badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-mono text-white/30 tracking-widest uppercase">
                      PROJECT RECORD
                    </span>
                    <span
                      className="text-[11px] font-mono font-bold tracking-widest px-2.5 py-0.5 rounded-full border"
                      style={{
                        color: signatureProjects[activeProject].accent,
                        borderColor: `${signatureProjects[activeProject].accent}40`,
                        background: `${signatureProjects[activeProject].accent}12`,
                      }}
                    >
                      {signatureProjects[activeProject].year}
                    </span>
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {[
                      { label: 'CATEGORY', value: signatureProjects[activeProject].category },
                      { label: 'AREA', value: signatureProjects[activeProject].area },
                      { label: 'TIMELINE', value: signatureProjects[activeProject].timeline },
                    ].map((stat) => (
                      <div key={stat.label} className="rounded-xl bg-white/[0.04] border border-white/[0.07] p-3">
                        <span className="text-[8px] font-mono uppercase tracking-widest text-white/30 block mb-1">
                          {stat.label}
                        </span>
                        <span className="text-[11px] font-bold text-white leading-tight">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-neutral-400 font-light leading-relaxed mb-7 border-t border-white/[0.06] pt-5">
                    {signatureProjects[activeProject].description}
                  </p>

                  {/* Thumbnail selector row */}
                  <div className="grid grid-cols-4 gap-2">
                    {signatureProjects.map((proj, i) => (
                      <button
                        key={proj.id}
                        type="button"
                        onClick={() => setActiveProject(i)}
                        className="relative rounded-xl overflow-hidden aspect-square border-2 transition-all duration-300"
                        style={{
                          borderColor: activeProject === i ? signatureProjects[activeProject].accent : 'rgba(255,255,255,0.08)',
                          boxShadow: activeProject === i ? `0 0 12px ${signatureProjects[activeProject].accent}55` : 'none',
                        }}
                      >
                        <img
                          src={proj.image}
                          alt={proj.title}
                          className="w-full h-full object-cover transition-all duration-300"
                          style={{ filter: activeProject === i ? 'brightness(1)' : 'brightness(0.45) grayscale(0.3)' }}
                        />
                        {activeProject === i && (
                          <div
                            className="absolute inset-0 opacity-30"
                            style={{ background: `linear-gradient(to top, ${proj.accent}, transparent)` }}
                          />
                        )}
                      </button>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className="mt-5 w-full flex items-center justify-center space-x-2 py-3 rounded-2xl text-xs font-mono uppercase tracking-widest font-semibold transition-all duration-300 text-white"
                    style={{
                      background: `linear-gradient(135deg, ${signatureProjects[activeProject].accent}, ${signatureProjects[activeProject].accent}BB)`,
                      boxShadow: `0 0 24px ${signatureProjects[activeProject].glow}`,
                    }}
                  >
                    <span>Discuss a similar project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </section>

          {/* =========================================================================
             SLIDE 5: ONE VISION EVERY SPACE (Matching Reference & Screenshot 10)
             ========================================================================= */}
          <section className="w-screen min-w-[100vw] h-screen shrink-0 relative flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12 overflow-hidden select-none">
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

            <div className="relative w-full max-w-6xl mx-auto my-auto z-10">
              <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] items-center gap-5 lg:gap-14">
                
                {/* ================= LEFT COLUMN: DYNAMIC CARDS ================= */}
                <div className="space-y-4 sm:space-y-5">
                  {/* Top Card */}
                  <div className="rounded-[24px] ios-glass border-t-white/30 overflow-hidden shadow-2xl relative group transition-all duration-500 hover:border-white/35 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                    <div className="w-full aspect-[16/9] overflow-hidden relative">
                      <img
                        src={spaceCategories[spaceTab].cardTop.src}
                        alt={spaceCategories[spaceTab].cardTop.title}
                        className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                      
                      <div className="absolute top-3.5 left-3.5">
                        <span className="px-2.5 py-0.5 rounded text-[9px] font-mono tracking-wider uppercase bg-black/70 backdrop-blur-md text-[#D6B779] border border-white/10">
                          {spaceCategories[spaceTab].cardTop.tag}
                        </span>
                      </div>

                      <div className="absolute bottom-3.5 left-3.5 right-3.5">
                        <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
                          {spaceCategories[spaceTab].cardTop.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-neutral-300 font-light mt-0.5 line-clamp-1">
                          {spaceCategories[spaceTab].cardTop.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Card */}
                  <div className="rounded-[24px] ios-glass border-t-white/30 overflow-hidden shadow-2xl relative group transition-all duration-500 hover:border-white/35 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                    <div className="w-full aspect-[16/9] overflow-hidden relative">
                      <img
                        src={spaceCategories[spaceTab].cardBottom.src}
                        alt={spaceCategories[spaceTab].cardBottom.title}
                        className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                      
                      <div className="absolute top-3.5 left-3.5">
                        <span className="px-2.5 py-0.5 rounded text-[9px] font-mono tracking-wider uppercase bg-black/70 backdrop-blur-md text-[#10B981] border border-white/10">
                          {spaceCategories[spaceTab].cardBottom.tag}
                        </span>
                      </div>

                      <div className="absolute bottom-3.5 left-3.5 right-3.5">
                        <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
                          {spaceCategories[spaceTab].cardBottom.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-neutral-300 font-light mt-0.5 line-clamp-1">
                          {spaceCategories[spaceTab].cardBottom.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ================= RIGHT COLUMN: HEADLINE, CTAs & CATEGORY SELECTOR ================= */}
                <div>
                  <div className="mb-4">
                    <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold text-white tracking-tight leading-[1.05]">
                      One vision.
                      <br />
                      <span className="relative inline-block text-white">
                        Every space.
                        <svg
                          className="absolute -bottom-2 left-0 w-full h-3 text-[#10B981] opacity-90"
                          viewBox="0 0 160 16"
                          fill="none"
                          preserveAspectRatio="none"
                        >
                          <path
                            d="M 2 10 Q 80 2, 158 11"
                            stroke="currentColor"
                            strokeWidth="4"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </h2>
                  </div>

                  <div className="flex items-center space-x-3 mb-6">
                    <a
                      href="#contact"
                      className="px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider bg-white/10 hover:bg-white/15 text-white border border-white/15 transition-all shadow-md"
                    >
                      Get started
                    </a>
                    <a
                      href="#contact"
                      className="px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider font-semibold text-white bg-gradient-to-r from-[#EA580C] to-[#F97316] shadow-[0_0_20px_rgba(234,88,12,0.45)] hover:brightness-110 transition-all"
                    >
                      Contact sales
                    </a>
                  </div>

                  {/* 4 Interactive Category Tiles */}
                  <div className="space-y-2.5">
                    {spaceCategories.map((cat, idx) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setSpaceTab(idx)}
                        className={`w-full flex items-center justify-between p-3 sm:p-3.5 rounded-2xl text-left transition-all duration-300 ios-glass-interactive ${
                          spaceTab === idx
                            ? 'border-l-4 border-l-white border-white/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_0_30px_rgba(255,255,255,0.15)] bg-white/10'
                            : 'border-l-4 border-l-transparent'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-colors ${
                              spaceTab === idx
                                ? 'bg-white/10 border-white/20 text-white'
                                : 'bg-black/40 border-white/10 text-neutral-400'
                            }`}
                          >
                            {cat.icon}
                          </div>
                          <div>
                            <h4
                              className={`text-xs sm:text-sm font-bold transition-colors ${
                                spaceTab === idx ? 'text-white' : 'text-neutral-300'
                              }`}
                            >
                              {cat.title}
                            </h4>
                            <p className="text-[10px] sm:text-[11px] text-neutral-400 font-light mt-0.5 line-clamp-1">
                              {cat.subtitle}
                            </p>
                          </div>
                        </div>
                        <ArrowRight
                          className={`w-3.5 h-3.5 transition-transform duration-300 ${
                            spaceTab === idx ? 'text-white translate-x-1' : 'text-neutral-500'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
};

export default HorizontalExperience;
