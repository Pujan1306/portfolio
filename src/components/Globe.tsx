
import React from 'react';

const Globe: React.FC = () => {
  return (
    <div 
      style={{ backgroundColor: 'var(--background)' }}
      className="absolute inset-0 pointer-events-none overflow-hidden z-0"
    >
      {/* 1. Ambient Background Atmosphere */}
      <div 
        style={{ backgroundColor: 'oklch(from var(--primary) l c h / 0.03)' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full blur-[100px] md:blur-[150px]" 
      />

      {/* 2. The SVG Horizon Curve */}
      <div className="absolute top-[40%] md:top-[45%] left-1/2 -translate-x-1/2 w-[140vw] md:w-[120vw] min-w-[800px] md:min-w-[1200px] aspect-[3/1] md:aspect-[4/1]">
        {/* Radiant Curved Horizon + Atmosphere */}
      <svg
        className="absolute top-0 left-0 w-full h-[150px] md:h-[180px]"
        viewBox="0 0 1000 180"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Soft atmospheric blur */}
          <filter id="softBlur" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="18" />
          </filter>

          {/* Energy concentrated toward center */}
          <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="35%" stopColor="oklch(from var(--primary) l c h / 0.35)" />
            <stop offset="50%" stopColor="oklch(from var(--primary) l c h / 0.95)" />
            <stop offset="65%" stopColor="oklch(from var(--primary) l c h / 0.35)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>

          {/* Radiant atmospheric shell (wraps curve) */}
          <radialGradient id="atmosphereShell" cx="50%" cy="100%" r="85%">
            <stop offset="0%" stopColor="oklch(from var(--primary) l c h / 0.30)" />
            <stop offset="45%" stopColor="oklch(from var(--primary) l c h / 0.18)" />
            <stop offset="75%" stopColor="oklch(from var(--primary) l c h / 0.08)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* Atmospheric volume (wraps above & below curve) */}
        <path
          d="M0,160 Q500,-70 1000,160"
          fill="none"
          stroke="url(#atmosphereShell)"
          strokeWidth="120"
          filter="url(#softBlur)"
          opacity="0.65"
        />

        {/* Outer radiant glow */}
        <path
          d="M0,160 Q500,-70 1000,160"
          fill="none"
          stroke="url(#energyGradient)"
          strokeWidth="18"
          filter="url(#softBlur)"
          opacity="0.6"
        />

        {/* Core horizon line */}
        <path
          d="M0,160 Q500,-70 1000,160"
          fill="none"
          stroke="url(#energyGradient)"
          strokeWidth="1.3"
        />
      </svg>


        <div 
          style={{ backgroundColor: 'oklch(from var(--primary) l c h / 0.2)' }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-4 blur-[20px] rounded-full" 
        />
        <div 
          style={{ backgroundColor: 'oklch(from var(--foreground) l c h / 0.1)' }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-2 blur-[10px] rounded-full" 
        />
      </div>

      {/* 4. Central Core Glow */}
      <div 
        style={{ backgroundColor: 'oklch(from var(--primary) l c h / 0.1)' }}
        className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[400px] blur-[80px] md:blur-[120px] rounded-full opacity-60" 
      />

      {/* 5. Top Vignette */}
      <div 
        style={{ background: 'linear-gradient(to bottom, var(--background) 0%, oklch(from var(--background) l c h / 0.8) 60%, transparent 100%)' }}
        className="absolute inset-x-0 top-0 h-[60%]" 
      />
    </div>
  );
};

export default Globe;
