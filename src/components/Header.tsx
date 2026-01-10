import { motion } from 'framer-motion';
import { AnimatedThemeToggler } from './ui/animated-theme-toggler';

const Header: React.FC = () => {
  const navItems = ['About', 'Portfolio', 'Stack', 'Contact'];

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Resume/Resume.pdf';
    link.download = 'Pujan_Mestry_Resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 0.2 }}
      className="fixed top-5 md:top-8 left-1/2 -translate-x-1/2 z-100 w-fit max-w-[95%] pointer-events-none"
    >
      <nav 
        className="flex items-center gap-3 md:gap-8 px-4 md:px-8 py-2.5 md:py-3.5 border border-border rounded-full bg-(--background)/50 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] pointer-events-auto transition-all hover:bg-(--background)/80"
      >
        <div className="flex items-center gap-4 md:gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-[9px] md:text-[10px] font-black tracking-[0.2em] uppercase text-muted-foreground hover:text-emerald-500 transition-all duration-300 active:scale-95"
            >
              {item}
            </motion.a>
          ))}
        </div>
        <div className="h-4 w-px bg-border mx-1" />
        <AnimatedThemeToggler />
        <motion.button 
          onClick={handleResumeDownload}
          whileHover={{ scale: 1.05, color: '#10b981' }}
          whileTap={{ scale: 0.95 }}
          className="text-[10px] md:text-[11px] font-black tracking-[0.2em] uppercase text-emerald-500 transition-all px-2"
        >
          Resume
        </motion.button>
      </nav>
    </motion.header>
  );
};

export default Header;