
import React from 'react';

const Header: React.FC = () => {
  const navItems = ['About', 'Portfolio', 'Stack', 'Contact'];

  return (
    <header className="fixed top-6 md:top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto">
      <nav 
        style={{ 
          backgroundColor: 'oklch(from var(--background) l c h / 0.5)',
          borderColor: 'var(--border)',
          boxShadow: 'var(--shadow-2xl)',
          backdropFilter: 'blur(24px)'
        }}
        className="flex items-center justify-between md:justify-start gap-3 md:gap-8 px-5 md:px-8 py-3 border rounded-full"
      >
        <div className="flex items-center gap-4 md:gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{ color: 'var(--muted-foreground)' }}
              className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase hover:text-[var(--foreground)] transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        <div 
          style={{ backgroundColor: 'var(--border)' }}
          className="h-4 w-px mx-1 md:mx-2" 
        />
        <button 
          style={{ color: 'var(--primary)' }}
          className="text-[9px] md:text-[10px] font-black tracking-widest uppercase hover:brightness-125 transition-all whitespace-nowrap"
        >
          Resume
        </button>
      </nav>
    </header>
  );
};

export default Header;
