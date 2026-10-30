import { useEffect, useRef } from 'react';

/**
 * useRevealOnScroll
 *
 * Attaches an IntersectionObserver to all elements with
 * `.reveal-up`, `.reveal-left`, `.reveal-right`, or `.reveal-scale`
 * inside the returned ref container, adding `visible` when they
 * enter the viewport. Cleans up on unmount.
 *
 * Usage:
 *   const containerRef = useRevealOnScroll<HTMLDivElement>();
 *   return <div ref={containerRef}>...</div>;
 */
export function useRevealOnScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const targets = container.querySelectorAll<HTMLElement>(
      '.reveal-up, .reveal-left, .reveal-right, .reveal-scale'
    );
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.10, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
}

