import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';

const App = () => {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-emerald-500/30">
      <Header />
      
      <main>
        <Hero />
        <Skills />
        <Projects />
      </main>

      {/* Adding a subtle bottom gradient to fade out for potential future sections */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#050505] to-transparent pointer-events-none z-30" />
    </div>

  );
};

export default App;
