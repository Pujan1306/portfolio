
import React from 'react';
import Globe from './Globe';

const Hero: React.FC = () => {
  return (
    <section 
      style={{ backgroundColor: 'var(--background)' }}
      className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Background Globe/Horizon */}
      <Globe />

      {/* Main Content Container */}
      <div className="relative z-10 text-center flex flex-col items-center mt-[-2vh] md:mt-[-5vh] w-full max-w-7xl">
        {/* Headline Group */}
        <div className="mb-6 md:mb-8 select-none">
          <h1 
            style={{ color: 'oklch(from var(--foreground) l c h / 0.9)' }}
            className="text-4xl sm:text-6xl md:text-[8rem] font-bold tracking-tighter leading-tight md:leading-none"
          >
            Hi, I am
          </h1>
          <h1 className="text-6xl sm:text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.85] mt-1 md:mt-[-0.5rem]">
            <span style={{ color: 'var(--foreground)' }}>John </span>
            <span style={{ color: 'var(--primary)' }} className="relative inline-block">
              Doe
              <span 
                style={{ backgroundColor: 'oklch(from var(--primary) l c h / 0.1)' }}
                className="absolute inset-0 blur-[30px] md:blur-[40px] -z-10 rounded-full scale-125"
              ></span>
            </span>
          </h1>
        </div>
        
        {/* Description */}
        <p 
          style={{ color: 'var(--muted-foreground)' }}
          className="text-sm md:text-xl font-medium mb-10 md:mb-12 max-w-[280px] sm:max-w-md md:max-w-2xl mx-auto leading-relaxed md:leading-relaxed"
        >
          I am a fullstack developer focusing on creating websites <br className="hidden md:block" />
          that provide users with the best digital experience.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full sm:w-auto px-4 sm:px-0">
          <button 
            style={{ 
              backgroundColor: 'var(--primary)',
              color: 'var(--primary-foreground)',
              boxShadow: 'var(--shadow-lg)'
            }}
            className="w-full sm:w-auto px-8 md:px-10 py-4 font-black text-base md:text-lg rounded-2xl transition-all duration-300 hover:brightness-110 hover:scale-105 active:scale-95"
          >
            Contact Me
          </button>
          <button 
            style={{ 
              backgroundColor: 'var(--card)',
              color: 'var(--foreground)',
              borderColor: 'var(--border)',
              boxShadow: 'var(--shadow-sm)'
            }}
            className="w-full sm:w-auto px-8 md:px-10 py-4 border font-black text-base md:text-lg rounded-2xl transition-all duration-300 hover:bg-opacity-80 hover:scale-105 active:scale-95"
          >
            View Work
          </button>
        </div>
      </div>

      {/* Subtle overlay noise effect */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
    </section>
  );
};

export default Hero;
