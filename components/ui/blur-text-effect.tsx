'use client';

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

interface BlurTextEffectProps {
  children: string;
  className?: string;
}

export const BlurTextEffect: React.FC<BlurTextEffectProps> = ({ children, className = '' }) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const chars = containerRef.current.querySelectorAll('span.char');

    gsap.set(chars, { opacity: 0, y: 6 });

    gsap.to(chars, {
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: 'power2.out',
      stagger: 0.02,
    });
  }, [children]);

  return (
    <span
      className={`inline-block ${className}`}
      ref={containerRef}
      style={{
        fontVariantLigatures: 'none',
        fontFeatureSettings: '"liga" 0, "calt" 0, "dlig" 0',
        letterSpacing: '0.001em',
      }}
    >
      {children.split('').map((char, i) => (
        <span key={i} className="char inline-block" style={{ whiteSpace: 'pre' }}>
          {char === ' ' ? ' ' : char}
        </span>
      ))}
    </span>
  );
};
