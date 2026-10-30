import React from 'react';

interface AmbientBackgroundProps {
  /** Which color composition to use for this section */
  variant?:
    | 'hero'        // Amber upper-left + emerald lower-left + bronze upper-right
    | 'showcase'    // Warm amber + muted green — card-gallery ambient
    | 'studio'      // Section-specific (handled by InteractiveStudio) — skip
    | 'horizontal'  // Slide-specific overrides — subtle amber + deep emerald
    | 'enquiries'   // Rich amber+emerald for CTA section
    | 'footer'      // Very dark with faint warm hint
    | 'default';    // Generic fallback
  className?: string;
}

/**
 * AmbientBackground — drop-in cinematic ambient-gradient system.
 *
 * Each gradient layer runs its own independent CSS keyframe animation so the
 * overall composition never looks static.  All transforms are GPU-composited
 * (translate + scale + opacity only) and `pointer-events: none` is enforced.
 *
 * Usage:
 *   <section className="relative …">
 *     <AmbientBackground variant="hero" />
 *     … content …
 *   </section>
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
   HERO — Rich 5-layer composition, largest & most expressive
   ───────────────────────────────────────────────────────────────────────────── */
const HeroLayers = () => (
  <>
    {/* LAYER A — Primary Amber/Orange beacon, upper-left, slow sweeping drift */}
    <div
      className="ambient-orb ambient-orb-amber-hero"
      style={{
        width: '75vw',
        height: '75vw',
        maxWidth: 1020,
        maxHeight: 1020,
        top: '-12%',
        left: '-12%',
        background:
          'radial-gradient(ellipse 72% 62% at 35% 30%, rgba(245,158,11,0.80) 0%, rgba(234,88,12,0.58) 34%, rgba(180,83,9,0.28) 60%, transparent 82%)',
      }}
    />

    {/* LAYER B — Emerald pool, lower-left, rising & swelling */}
    <div
      className="ambient-orb ambient-orb-emerald-hero"
      style={{
        width: '68vw',
        height: '68vw',
        maxWidth: 940,
        maxHeight: 940,
        bottom: '-16%',
        left: '-8%',
        background:
          'radial-gradient(circle 620px at 38% 68%, rgba(16,185,129,0.62) 0%, rgba(5,150,105,0.40) 40%, rgba(4,120,87,0.16) 66%, transparent 84%)',
      }}
    />

    {/* LAYER C — Bronze/champagne upper-right, counter-moving to amber */}
    <div
      className="ambient-orb ambient-orb-bronze-hero"
      style={{
        width: '68vw',
        height: '68vw',
        maxWidth: 920,
        maxHeight: 920,
        top: '-10%',
        right: '-12%',
        background:
          'radial-gradient(circle 650px at 72% 32%, rgba(214,183,121,0.50) 0%, rgba(234,88,12,0.33) 46%, rgba(152,106,60,0.14) 70%, transparent 86%)',
      }}
    />

    {/* LAYER D — Secondary green, lower-center, meandering pulse */}
    <div
      className="ambient-orb ambient-orb-green2-hero"
      style={{
        width: '54vw',
        height: '54vw',
        maxWidth: 680,
        maxHeight: 680,
        bottom: '-18%',
        left: '20%',
        right: '20%',
        background:
          'radial-gradient(ellipse at center, rgba(20,158,110,0.32) 0%, rgba(16,185,129,0.18) 45%, transparent 80%)',
      }}
    />

    {/* LAYER E — Subtle central warm veil — keeps text contrast intact */}
    <div
      className="ambient-orb ambient-orb-center-hero"
      style={{
        width: '60vw',
        height: '60vw',
        maxWidth: 780,
        maxHeight: 780,
        top: '10%',
        left: '20%',
        right: '20%',
        background:
          'radial-gradient(ellipse at center, rgba(180,83,9,0.14) 0%, rgba(214,140,50,0.08) 50%, transparent 78%)',
      }}
    />

    {/* Deep vignette — preserves headline readability */}
    <div
      className="absolute inset-0"
      style={{
        background:
          'radial-gradient(ellipse 900px 600px at center, rgba(7,7,7,0.76) 0%, rgba(7,7,7,0.42) 55%, transparent 95%)',
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-[#070707]/28 via-transparent to-[#070707]/58" />
  </>
);

/* ─────────────────────────────────────────────────────────────────────────────
   FLOATING SHOWCASE — Amber center, soft emerald lower-right
   ───────────────────────────────────────────────────────────────────────────── */
const ShowcaseLayers = () => (
  <>
    {/* Warm amber, drifting left→center */}
    <div
      className="ambient-orb ambient-orb-amber-show"
      style={{
        width: '60vw',
        height: '60vw',
        maxWidth: 820,
        maxHeight: 820,
        top: '5%',
        left: '-15%',
        background:
          'radial-gradient(ellipse 65% 55% at 32% 35%, rgba(217,120,41,0.52) 0%, rgba(180,83,9,0.28) 50%, transparent 80%)',
      }}
    />

    {/* Muted emerald, lower-right */}
    <div
      className="ambient-orb ambient-orb-emerald-show"
      style={{
        width: '55vw',
        height: '55vw',
        maxWidth: 740,
        maxHeight: 740,
        bottom: '-10%',
        right: '-10%',
        background:
          'radial-gradient(circle at 62% 68%, rgba(16,185,129,0.38) 0%, rgba(4,120,87,0.20) 50%, transparent 80%)',
      }}
    />

    {/* Bronze warmth, upper-right */}
    <div
      className="ambient-orb ambient-orb-bronze-show"
      style={{
        width: '42vw',
        height: '42vw',
        maxWidth: 580,
        maxHeight: 580,
        top: '-5%',
        right: '5%',
        background:
          'radial-gradient(circle at 68% 28%, rgba(199,164,106,0.30) 0%, rgba(152,106,60,0.14) 55%, transparent 82%)',
      }}
    />

    <div
      className="absolute inset-0"
      style={{
        background:
          'radial-gradient(ellipse 820px 500px at center, rgba(7,7,7,0.65) 0%, rgba(7,7,7,0.28) 60%, transparent 95%)',
      }}
    />
  </>
);

/* ─────────────────────────────────────────────────────────────────────────────
   HORIZONTAL EXPERIENCE — Deeper amber left, muted green right
   ───────────────────────────────────────────────────────────────────────────── */
const HorizontalLayers = () => (
  <>
    {/* Deep amber, left side */}
    <div
      className="ambient-orb ambient-orb-amber-hx"
      style={{
        width: '55vw',
        height: '55vw',
        maxWidth: 760,
        maxHeight: 760,
        top: '10%',
        left: '-10%',
        background:
          'radial-gradient(ellipse 60% 55% at 30% 35%, rgba(185,87,22,0.55) 0%, rgba(180,83,9,0.30) 50%, transparent 80%)',
      }}
    />

    {/* Muted deep emerald, lower-right */}
    <div
      className="ambient-orb ambient-orb-emerald-hx"
      style={{
        width: '52vw',
        height: '52vw',
        maxWidth: 700,
        maxHeight: 700,
        bottom: '-5%',
        right: '-5%',
        background:
          'radial-gradient(circle at 65% 65%, rgba(16,63,43,0.70) 0%, rgba(36,88,59,0.42) 45%, transparent 78%)',
      }}
    />

    {/* Soft olive tint center-bottom */}
    <div
      className="ambient-orb ambient-orb-olive-hx"
      style={{
        width: '38vw',
        height: '38vw',
        maxWidth: 500,
        maxHeight: 500,
        bottom: '-12%',
        left: '30%',
        background:
          'radial-gradient(circle at center, rgba(52,53,27,0.38) 0%, rgba(36,21,14,0.20) 55%, transparent 82%)',
      }}
    />

    <div
      className="absolute inset-0"
      style={{
        background:
          'radial-gradient(ellipse 860px 460px at center, rgba(7,7,7,0.70) 0%, rgba(7,7,7,0.30) 65%, transparent 95%)',
      }}
    />
  </>
);

/* ─────────────────────────────────────────────────────────────────────────────
   ENQUIRIES / CONTACT — Richest amber+emerald section
   ───────────────────────────────────────────────────────────────────────────── */
const EnquiriesLayers = () => (
  <>
    {/* Warm amber, upper-center */}
    <div
      className="ambient-orb ambient-orb-amber-enq"
      style={{
        width: '62vw',
        height: '62vw',
        maxWidth: 860,
        maxHeight: 860,
        top: '-8%',
        left: '10%',
        background:
          'radial-gradient(ellipse 68% 60% at 38% 28%, rgba(217,120,41,0.58) 0%, rgba(185,87,22,0.35) 48%, transparent 80%)',
      }}
    />

    {/* Emerald, lower-left */}
    <div
      className="ambient-orb ambient-orb-emerald-enq"
      style={{
        width: '58vw',
        height: '58vw',
        maxWidth: 800,
        maxHeight: 800,
        bottom: '-12%',
        left: '-8%',
        background:
          'radial-gradient(circle at 35% 72%, rgba(16,185,129,0.52) 0%, rgba(4,120,87,0.28) 50%, transparent 80%)',
      }}
    />

    {/* Bronze, upper-right */}
    <div
      className="ambient-orb ambient-orb-bronze-enq"
      style={{
        width: '46vw',
        height: '46vw',
        maxWidth: 640,
        maxHeight: 640,
        top: '0%',
        right: '-5%',
        background:
          'radial-gradient(circle at 68% 30%, rgba(199,164,106,0.34) 0%, rgba(152,106,60,0.16) 52%, transparent 80%)',
      }}
    />

    <div
      className="absolute inset-0"
      style={{
        background:
          'radial-gradient(ellipse 800px 550px at center, rgba(7,7,7,0.68) 0%, rgba(7,7,7,0.32) 62%, transparent 95%)',
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#070707]/50 via-transparent to-transparent" />
  </>
);

/* ─────────────────────────────────────────────────────────────────────────────
   FOOTER — Minimal warmth
   ───────────────────────────────────────────────────────────────────────────── */
const FooterLayers = () => (
  <>
    <div
      className="ambient-orb ambient-orb-amber-footer"
      style={{
        width: '50vw',
        height: '50vw',
        maxWidth: 680,
        maxHeight: 680,
        top: '-20%',
        left: '-5%',
        background:
          'radial-gradient(ellipse 60% 50% at 30% 30%, rgba(185,87,22,0.28) 0%, rgba(120,55,15,0.14) 55%, transparent 80%)',
      }}
    />
    <div
      className="ambient-orb ambient-orb-emerald-footer"
      style={{
        width: '40vw',
        height: '40vw',
        maxWidth: 520,
        maxHeight: 520,
        bottom: '-10%',
        right: '5%',
        background:
          'radial-gradient(circle at 65% 65%, rgba(16,63,43,0.32) 0%, rgba(4,80,50,0.15) 55%, transparent 80%)',
      }}
    />
  </>
);

/* ─────────────────────────────────────────────────────────────────────────────
   DEFAULT — Generic balanced composition
   ───────────────────────────────────────────────────────────────────────────── */
const DefaultLayers = () => (
  <>
    <div
      className="ambient-orb ambient-orb-amber-def"
      style={{
        width: '55vw',
        height: '55vw',
        maxWidth: 740,
        maxHeight: 740,
        top: '10%',
        left: '-8%',
        background:
          'radial-gradient(ellipse 62% 55% at 32% 38%, rgba(217,120,41,0.48) 0%, rgba(180,83,9,0.25) 52%, transparent 80%)',
      }}
    />
    <div
      className="ambient-orb ambient-orb-emerald-def"
      style={{
        width: '50vw',
        height: '50vw',
        maxWidth: 680,
        maxHeight: 680,
        bottom: '-5%',
        right: '-5%',
        background:
          'radial-gradient(circle at 65% 65%, rgba(16,185,129,0.35) 0%, rgba(4,120,87,0.18) 52%, transparent 80%)',
      }}
    />
    <div
      className="absolute inset-0"
      style={{
        background:
          'radial-gradient(ellipse 800px 500px at center, rgba(7,7,7,0.68) 0%, rgba(7,7,7,0.30) 62%, transparent 95%)',
      }}
    />
  </>
);

export default AmbientBackground;

