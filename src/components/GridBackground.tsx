
import React from 'react';

interface GridBackgroundProps {
  opacity?: number;
  size?: number;
  color?: string;
}

const GridBackground: React.FC<GridBackgroundProps> = ({ 
  opacity = 0.4, 
  size = 50, 
  color = 'var(--border)' 
}) => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
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
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, var(--background) 100%)'
        }}
      />
    </div>
  );
};

export default GridBackground;
