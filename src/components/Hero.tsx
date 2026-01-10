import React from 'react';
import { motion, Variants } from 'framer-motion';
import Globe from './Globe';

const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 100,
      },
    },
  };

  const nameVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100,
        delay: 0.5
      },
    },
  };

  return (
    <section 
      style={{ backgroundColor: 'var(--background)' }}
      className="relative min-h-svh flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      
      <Globe />

      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center flex flex-col items-center mt-[-2vh] md:mt-[-5vh] w-full max-w-7xl"
      >
       
        <div className="mb-6 md:mb-8 select-none">
          <motion.h1 
            variants={itemVariants}
            style={{ color: 'oklch(from var(--foreground) l c h / 0.9)' }}
            className="text-4xl sm:text-6xl md:text-[8rem] font-bold tracking-tighter leading-tight md:leading-none"
          >
            Hi, I am
          </motion.h1>
          <motion.h1 
            variants={nameVariants}
            className="text-6xl sm:text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.85] mt-1 md:-mt-2"
          >
            <span style={{ color: 'var(--foreground)' }}>Pujan </span>
            <span style={{ color: 'var(--primary)' }} className="relative inline-block">
              Mestry
              <motion.span 
                animate={{ scale: [1.2, 1.35, 1.2], opacity: [0.05, 0.15, 0.05] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{ backgroundColor: 'oklch(from var(--primary) l c h / 0.1)' }}
                className="absolute inset-0 blur-[30px] md:blur-2xl -z-10 rounded-full scale-125"
              ></motion.span>
            </span>
          </motion.h1>
        </div>
        
       
        <motion.p 
          variants={itemVariants}
          style={{ color: 'var(--muted-foreground)' }}
          className="text-sm md:text-xl font-medium mb-10 md:mb-12 max-w-[280px] sm:max-w-md md:max-w-2xl mx-auto leading-relaxed md:leading-relaxed"
        >
          I am a fullstack developer focusing on creating websites <br className="hidden md:block" />
          that provide users with the best digital experience.
        </motion.p>

        
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full sm:w-auto px-4 sm:px-0"
        >
          <motion.button 
            whileHover={{ scale: 1.05, filter: 'brightness(1.1)' }}
            whileTap={{ scale: 0.95 }}
            style={{ 
              backgroundColor: 'var(--primary)',
              color: 'var(--primary-foreground)',
              boxShadow: 'var(--shadow-lg)'
            }}
            className="w-full sm:w-auto px-8 md:px-10 py-4 font-black text-base md:text-lg rounded-2xl transition-all duration-300"
          > 
          <a href="#contact">Contact Me</a>
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
            whileTap={{ scale: 0.95 }}
            style={{ 
              backgroundColor: 'var(--card)',
              color: 'var(--foreground)',
              borderColor: 'var(--border)',
              boxShadow: 'var(--shadow-sm)'
            }}
            className="w-full sm:w-auto px-8 md:px-10 py-4 border font-black text-base md:text-lg rounded-2xl transition-all duration-300"
          >
            <a href="#portfolio">View Work</a>
          </motion.button>
        </motion.div>
      </motion.div>

      
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
    </section>
  );
};

export default Hero;