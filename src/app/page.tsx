"use client"
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';

const App = () => {
  useEffect(() => {
    // Force dark as the default theme on initial load
    document.documentElement.classList.add('dark');

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'd' || event.key === 'D') {
        document.documentElement.classList.toggle('dark');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-emerald-500/30 transition-colors duration-500">
      <Header />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>


      <div className="fixed bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent pointer-events-none z-30" />
    </div>
  );
};
export default App;
