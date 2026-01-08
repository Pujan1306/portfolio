
import React from 'react';

interface GridBackgroundProps {
  opacity?: number;
  size?: number;
  color?: string;
}

const GridBackground: React.FC<GridBackgroundProps> = ({ 
  opacity = 0.4, 
  size = 45, 
  color = 'rgba(255, 255, 255, 0.07)' 
}) => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Base Grid Layer */}
      <div 
        className="absolute inset-0" 
        style={{ 
          opacity: opacity,
          backgroundImage: `
            linear-gradient(to right, ${color} 1px, transparent 1px),
            linear-gradient(to bottom, ${color} 1px, transparent 1px)
          `,
          backgroundSize: `${size}px ${size}px`,
        }} 
      />
      
      {/* Primary Blueprint Dots (at every intersection) */}
      <div 
        className="absolute inset-0" 
        style={{ 
          opacity: opacity * 1.5,
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: `${size}px ${size}px`,
          backgroundPosition: '-0.5px -0.5px'
        }} 
      />

      {/* Secondary Tech Accents (larger dots every 4 grids) */}
      <div 
        className="absolute inset-0" 
        style={{ 
          opacity: opacity * 0.8,
          backgroundImage: `radial-gradient(circle, rgba(16, 185, 129, 0.4) 1.5px, transparent 1.5px)`,
          backgroundSize: `${size * 4}px ${size * 4}px`,
          backgroundPosition: '-0.75px -0.75px'
        }} 
      />

      {/* Global Vignette to maintain focus and prevent edges from being too sharp */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(5,5,5,0.4) 100%)'
        }}
      />
    </div>
  );
};

export default GridBackground;
