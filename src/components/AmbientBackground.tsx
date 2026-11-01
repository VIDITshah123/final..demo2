import React from 'react';

interface AmbientBackgroundProps {
  variant?:
    | 'hero'
  | 'showcase'
  | 'studio'
  | 'horizontal'
  | 'enquiries'
  | 'footer'
  | 'default';
className ?: string;
}

/**
 * AmbientBackground — Dynamic Neon Aurora Wave Engine
 * Continuously shifting, randomly waving neon orange and emerald green fields
 * glowing from behind the dark canvas (matching the Linearity reference design).
 */
export const AmbientBackground: React.FC<AmbientBackgroundProps> = ({
  variant = 'default',
  className = '',
}) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden z-0 ${className}`}
      aria-hidden="true"
    >
      {variant === 'hero' && <HeroLayers />}
      {variant === 'showcase' && <ShowcaseLayers />}
      {variant === 'horizontal' && <HorizontalLayers />}
      {variant === 'enquiries' && <EnquiriesLayers />}
      {variant === 'footer' && <FooterLayers />}
      {(variant === 'default' || variant === 'studio') && <DefaultLayers />}
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   HERO — Radiant Neon Aurora Waves (Emerald Green & Fiery Neon Orange)
   ───────────────────────────────────────────────────────────────────────────── */
const HeroLayers = () => (
  <>
    {/* Electric Neon Fiery Orange Wave */}
    <div
      className="ambient-orb ambient-orb-amber-hero"
      style={{
        width: '78vw',
        height: '78vw',
        maxWidth: 1060,
        maxHeight: 1060,
        top: '-15%',
        left: '-12%',
        background:
        'radial-gradient(ellipse 70% 60% at 35% 30%, rgba(255,85,0,0.88) 0%, rgba(255,122,0,0.65) 34%, rgba(245,158,11,0.28) 60%, transparent 84%)',
      }}
    />

    {/* Electric Neon Emerald / Mint Green Wave */}
    <div
      className="ambient-orb ambient-orb-emerald-hero"
      style={{
        width: '74vw',
        height: '74vw',
        maxWidth: 1000,
        maxHeight: 1000,
        bottom: '-14%',
        left: '-8%',
        background:
        'radial-gradient(circle 660px at 38% 68%, rgba(0,245,155,0.85) 0%, rgba(0,255,163,0.58) 36%, rgba(16,185,129,0.25) 66%, transparent 84%)',
      }}
    />

    {/* Neon Gold & Sunburst Amber Wave */}
    <div
      className="ambient-orb ambient-orb-bronze-hero"
      style={{
        width: '68vw',
        height: '68vw',
        maxWidth: 920,
        maxHeight: 920,
        top: '-10%',
        right: '-10%',
        background:
        'radial-gradient(circle 620px at 70% 32%, rgba(255,170,0,0.72) 0%, rgba(234,88,12,0.48) 44%, rgba(180,83,9,0.18) 70%, transparent 86%)',
      }}
    />

    {/* Localized subtle vignette */}
    <div
      className="absolute inset-0"
      style={{
        background:
        'radial-gradient(ellipse 680px 360px at center, rgba(7,7,7,0.65) 0%, rgba(7,7,7,0.15) 60%, transparent 100%)',
      }}
    />
  </>
);

/* ─────────────────────────────────────────────────────────────────────────────
   SHOWCASE — Neon Emerald on Left, Neon Orange on Right (Linearity Style)
   ───────────────────────────────────────────────────────────────────────────── */
const ShowcaseLayers = () => (
  <>
    {/* Left Neon Emerald Wave */}
    <div
      className="ambient-orb ambient-orb-emerald-show"
      style={{
        width: '72vw',
        height: '72vw',
        maxWidth: 1000,
        maxHeight: 1000,
        top: '6%',
        left: '-14%',
        background:
        'radial-gradient(ellipse 68% 58% at 35% 35%, rgba(0,245,155,0.85) 0%, rgba(0,255,163,0.55) 36%, rgba(16,185,129,0.25) 68%, transparent 84%)',
      }}
    />

    {/* Right Neon Fiery Orange Wave */}
    <div
      className="ambient-orb ambient-orb-amber-show"
      style={{
        width: '68vw',
        height: '68vw',
        maxWidth: 950,
        maxHeight: 950,
        bottom: '-10%',
        right: '-10%',
        background:
        'radial-gradient(circle at 65% 65%, rgba(255,85,0,0.85) 0%, rgba(255,122,0,0.58) 36%, rgba(255,170,0,0.22) 68%, transparent 84%)',
      }}
    />

    {/* Top Neon Amber Beam */}
    <div
      className="ambient-orb ambient-orb-bronze-show"
      style={{
        width: '54vw',
        height: '54vw',
        maxWidth: 750,
        maxHeight: 750,
        top: '-8%',
        right: '12%',
        background:
        'radial-gradient(circle at 60% 30%, rgba(255,184,0,0.65) 0%, rgba(234,88,12,0.35) 50%, transparent 84%)',
      }}
    />

    {/* Localized subtle vignette */}
    <div
      className="absolute inset-0"
      style={{
        background:
        'radial-gradient(ellipse 640px 380px at center, rgba(7,7,7,0.70) 0%, rgba(7,7,7,0.18) 60%, transparent 100%)',
      }}
    />
  </>
);

/* ─────────────────────────────────────────────────────────────────────────────
   HORIZONTAL EXPERIENCE — Blazing Neon Ribbons & Atmospheric Depth
   ───────────────────────────────────────────────────────────────────────────── */
const HorizontalLayers = () => (
  <>
    {/* Left Neon Orange Glow */}
    <div
      className="ambient-orb ambient-orb-amber-hx"
      style={{
        width: '66vw',
        height: '66vw',
        maxWidth: 900,
        maxHeight: 900,
        top: '8%',
        left: '-10%',
        background:
        'radial-gradient(ellipse 65% 58% at 32% 35%, rgba(255,85,0,0.82) 0%, rgba(234,88,12,0.52) 46%, transparent 84%)',
      }}
    />

    {/* Right Neon Emerald / Mint Glow */}
    <div
      className="ambient-orb ambient-orb-emerald-hx"
      style={{
        width: '64vw',
        height: '64vw',
        maxWidth: 880,
        maxHeight: 880,
        bottom: '-8%',
        right: '-6%',
        background:
        'radial-gradient(circle at 65% 65%, rgba(0,245,155,0.82) 0%, rgba(16,185,129,0.50) 46%, transparent 84%)',
      }}
    />

    {/* Sunburst Amber Accent */}
    <div
      className="ambient-orb ambient-orb-olive-hx"
      style={{
        width: '52vw',
        height: '52vw',
        maxWidth: 720,
        maxHeight: 720,
        top: '-10%',
        right: '25%',
        background:
        'radial-gradient(circle at center, rgba(255,170,0,0.60) 0%, rgba(234,88,12,0.30) 50%, transparent 84%)',
      }}
    />

    <div
      className="absolute inset-0"
      style={{
        background:
        'radial-gradient(ellipse 680px 400px at center, rgba(7,7,7,0.68) 0%, rgba(7,7,7,0.15) 60%, transparent 100%)',
      }}
    />
  </>
);

/* ─────────────────────────────────────────────────────────────────────────────
   ENQUIRIES — High-Gloss Glass & Neon Bloom
   ───────────────────────────────────────────────────────────────────────────── */
const EnquiriesLayers = () => (
  <>
    {/* Fiery Neon Orange Upper-Center */}
    <div
      className="ambient-orb ambient-orb-amber-enq"
      style={{
        width: '72vw',
        height: '72vw',
        maxWidth: 980,
        maxHeight: 980,
        top: '-10%',
        left: '12%',
        background:
        'radial-gradient(ellipse 70% 60% at 40% 30%, rgba(255,85,0,0.85) 0%, rgba(255,122,0,0.55) 44%, transparent 84%)',
      }}
    />

    {/* Neon Emerald Lower-Left */}
    <div
      className="ambient-orb ambient-orb-emerald-enq"
      style={{
        width: '68vw',
        height: '68vw',
        maxWidth: 920,
        maxHeight: 920,
        bottom: '-12%',
        left: '-8%',
        background:
        'radial-gradient(circle at 35% 70%, rgba(0,245,155,0.82) 0%, rgba(16,185,129,0.52) 46%, transparent 84%)',
      }}
    />

    {/* Neon Violet / Purple Accent Upper-Right */}
    <div
      className="ambient-orb ambient-orb-bronze-enq"
      style={{
        width: '54vw',
        height: '54vw',
        maxWidth: 720,
        maxHeight: 720,
        top: '-6%',
        right: '-6%',
        background:
        'radial-gradient(circle at center, rgba(139,92,246,0.55) 0%, rgba(99,102,241,0.28) 50%, transparent 84%)',
      }}
    />

    <div
      className="absolute inset-0"
      style={{
        background:
        'radial-gradient(ellipse 680px 400px at center, rgba(7,7,7,0.68) 0%, rgba(7,7,7,0.15) 60%, transparent 100%)',
      }}
    />
  </>
);

/* ─────────────────────────────────────────────────────────────────────────────
   FOOTER — Luminous Neon Aurora Reflection
   ───────────────────────────────────────────────────────────────────────────── */
const FooterLayers = () => (
  <>
    <div
      className="ambient-orb ambient-orb-amber-footer"
      style={{
        width: '56vw',
        height: '56vw',
        maxWidth: 750,
        maxHeight: 750,
        top: '-10%',
        left: '15%',
        background:
        'radial-gradient(circle at center, rgba(255,85,0,0.60) 0%, rgba(234,88,12,0.30) 48%, transparent 82%)',
      }}
    />
    <div
      className="ambient-orb ambient-orb-emerald-footer"
      style={{
        width: '52vw',
        height: '52vw',
        maxWidth: 700,
        maxHeight: 700,
        bottom: '-12%',
        right: '15%',
        background:
        'radial-gradient(circle at center, rgba(0,245,155,0.55) 0%, rgba(16,185,129,0.25) 48%, transparent 82%)',
      }}
    />
  </>
);

/* ─────────────────────────────────────────────────────────────────────────────
   DEFAULT / STUDIO — Balanced Neon Orange & Emerald Wave
   ───────────────────────────────────────────────────────────────────────────── */
const DefaultLayers = () => (
  <>
    <div
      className="ambient-orb ambient-orb-amber-hero"
      style={{
        width: '70vw',
        height: '70vw',
        maxWidth: 950,
        maxHeight: 950,
        top: '5%',
        left: '-10%',
        background:
        'radial-gradient(ellipse 65% 58% at 35% 35%, rgba(255,85,0,0.85) 0%, rgba(255,122,0,0.55) 44%, transparent 84%)',
      }}
    />
    <div
      className="ambient-orb ambient-orb-emerald-hero"
      style={{
        width: '66vw',
        height: '66vw',
        maxWidth: 900,
        maxHeight: 900,
        bottom: '-10%',
        right: '-8%',
        background:
        'radial-gradient(circle at 65% 65%, rgba(0,245,155,0.82) 0%, rgba(16,185,129,0.50) 44%, transparent 84%)',
      }}
    />
    <div
      className="absolute inset-0"
      style={{
        background:
        'radial-gradient(ellipse 680px 380px at center, rgba(7,7,7,0.68) 0%, rgba(7,7,7,0.18) 60%, transparent 100%)',
      }}
    />
  </>
);

export default AmbientBackground;
