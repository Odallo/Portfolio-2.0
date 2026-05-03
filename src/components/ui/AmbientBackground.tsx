"use client";

import { useEffect, useRef } from 'react';

export default function AmbientBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      containerRef.current.style.setProperty('--mouse-x', `${x}%`);
      containerRef.current.style.setProperty('--mouse-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 -z-10 ambient-background noise-texture grid-overlay"
      style={{
        '--mouse-x': '50%',
        '--mouse-y': '50%',
      } as React.CSSProperties}
    >
      {/* Primary Ambient Blob */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[1400px] opacity-25"
        style={{
          background: 'radial-gradient(ellipse, rgba(94,106,210,0.4) 0%, rgba(94,106,210,0.1) 40%, transparent 70%)',
          filter: 'blur(150px)',
          animation: 'float 10s ease-in-out infinite',
        }}
      />
      
      {/* Secondary Ambient Blob */}
      <div 
        className="absolute top-1/4 left-0 w-[600px] h-[800px] opacity-15"
        style={{
          background: 'radial-gradient(ellipse, rgba(139,146,232,0.3) 0%, rgba(147,51,234,0.1) 40%, transparent 70%)',
          filter: 'blur(120px)',
          animation: 'float 8s ease-in-out infinite reverse',
        }}
      />
      
      {/* Tertiary Ambient Blob */}
      <div 
        className="absolute top-1/3 right-0 w-[500px] h-[700px] opacity-12"
        style={{
          background: 'radial-gradient(ellipse, rgba(59,130,246,0.3) 0%, rgba(94,106,210,0.1) 40%, transparent 70%)',
          filter: 'blur(100px)',
          animation: 'float 12s ease-in-out infinite',
        }}
      />
      
      {/* Bottom Accent Blob */}
      <div 
        className="absolute bottom-0 left-1/3 w-[400px] h-[600px] opacity-10"
        style={{
          background: 'radial-gradient(ellipse, rgba(94,106,210,0.2) 0%, transparent 60%)',
          filter: 'blur(80px)',
          animation: 'pulse-glow 4s ease-in-out infinite',
        }}
      />
      
      {/* Interactive Spotlight Layer */}
      <div 
        className="absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100 pointer-events-none"
        style={{
          background: `radial-gradient(
            circle at var(--mouse-x) var(--mouse-y),
            rgba(94,106,210,0.08) 0%,
            transparent 50%
          )`,
        }}
      />
    </div>
  );
}
