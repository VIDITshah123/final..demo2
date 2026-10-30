import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#050505] border-t border-white/10 text-neutral-400 text-xs py-16 px-6 sm:px-8 lg:px-12 select-none">
      <div className="max-w-[1400px] mx-auto flex flex-col justify-between space-y-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/5">
          {/* Brand */}
          <div className="flex flex-col space-y-1.5">
            <span className="font-sans text-xl font-light tracking-[0.25em] text-white uppercase">
              ALTIMATE
            </span>
            <span className="text-[9px] font-mono tracking-[0.35em] text-[#D6B779] uppercase">
              ARCHITECTURE · INTERIOR DESIGN · FIT-OUT MANAGEMENT
            </span>
            <p className="text-xs text-neutral-400 font-light max-w-sm mt-2">
              Dubai-based luxury design and build company delivering turnkey architectural and interior solutions for elevated lifestyle spaces.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-8 text-neutral-300">
            <a href="#vision" className="hover:text-[#D6B779] transition-colors">Vision</a>
            <a href="#process" className="hover:text-[#D6B779] transition-colors">Process</a>
            <a href="#cohesive" className="hover:text-[#D6B779] transition-colors">Methodology</a>
            <a href="#approach" className="hover:text-[#D6B779] transition-colors">Approach</a>
            <a href="#contact" className="hover:text-[#D6B779] transition-colors">Enquiries</a>
          </div>

          {/* Scroll to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all hover:scale-105"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4 text-[#D6B779]" />
          </button>
        </div>

        {/* Bottom Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-neutral-400">
          <span>&copy; {new Date().getFullYear()} ALTIMATE INTERIORS LLC. ALL RIGHTS RESERVED.</span>
          <span>DUBAI · UNITED ARAB EMIRATES</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

