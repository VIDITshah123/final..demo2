import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      label: 'Architecture',
      hasDropdown: true,
      items: ['Luxury Residential', 'Bespoke Villas', 'Commercial Architecture', 'Landscape & Facades'],
    },
    {
      label: 'Interiors',
      hasDropdown: true,
      items: ['Penthouse Living', 'Custom Joinery & Millwork', 'Curated FF&E', 'Lighting Design'],
    },
    {
      label: 'Fit-Out',
      hasDropdown: true,
      items: ['Turnkey Management', 'Site Execution', 'Authority Approvals', 'Material Procurement'],
    },
    { label: 'Portfolio', hasDropdown: false, href: '#showcase' },
    { label: 'About', hasDropdown: false, href: '#about' },
    { label: 'Journal', hasDropdown: false, href: '#journal' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-[#080807]/70 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.6)] shadow-black/60'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo / Wordmark (Left) */}
          <div className="flex items-center space-x-3">
            <a
              href="#"
              className="flex items-center space-x-2.5 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D6B779]"
            >
              {/* Brand Geometric Monogram resembling luxury architectural line */}
              <div className="w-7 h-7 rounded-[6px] bg-gradient-to-br from-[#D6B779] via-[#C4823F] to-[#1E1812] p-[1px] shadow-sm">
                <div className="w-full h-full bg-[#080807] rounded-[5px] flex items-center justify-center">
                  <span className="font-serif font-bold text-xs text-[#D6B779]">A</span>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="font-sans text-lg font-light tracking-[0.24em] text-white uppercase group-hover:text-[#D6B779] transition-colors">
                  ALTIMATE
                </span>
                <span className="text-[8px] tracking-[0.32em] text-[#B8B0A3]/65 uppercase font-medium -mt-1">
                  DUBAI
                </span>
              </div>
            </a>
          </div>

          {/* Center Navigation Links with Dropdown Carets */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
              >
                {item.hasDropdown ? (
                  <button
                    type="button"
                    className="flex items-center space-x-1.5 text-[13px] tracking-wide text-neutral-300 hover:text-white transition-colors py-1 focus:outline-none"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-neutral-400 transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className="text-[13px] tracking-wide text-neutral-300 hover:text-white transition-colors py-1"
                  >
                    {item.label}
                  </a>
                )}

                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-56 rounded-xl bg-[#11100E]/95 backdrop-blur-xl border border-white/10 p-2 shadow-2xl shadow-black/80 animate-in fade-in slide-in-from-top-1 duration-200">
                    {item.items?.map((subItem) => (
                      <a
                        key={subItem}
                        href="#showcase"
                        className="block px-3.5 py-2 text-xs text-neutral-300 hover:text-[#D6B779] hover:bg-white/5 rounded-lg transition-colors"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Action Items */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="#contact"
              className="text-[13px] text-neutral-300 hover:text-white transition-colors"
            >
              Log in
            </a>

            {/* Pill CTA button matching screenshot */}
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 text-[13px] px-5 py-2 rounded-full ios-glass-pill hover:bg-white/15 text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]"
            >
              <span>Get started</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#D6B779] focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-[#080807]/80 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 w-[85%] max-w-sm h-full bg-[#11100E] border-l border-white/10 p-8 pt-24 flex flex-col justify-between transform transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col space-y-5">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#D6B779] font-medium pb-2 border-b border-white/10">
              ALTIMATE DUBAI
            </span>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href || '#showcase'}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-neutral-200 hover:text-[#D6B779] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col space-y-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 bg-[#D6B779] text-[#080807] font-semibold text-xs rounded-full transition-colors hover:bg-[#E8CF9B]"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
