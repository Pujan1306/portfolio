
import React, { useState, useRef, MouseEvent } from 'react';
import GridBackground from './GridBackground';

interface Project {
  title: string;
  description: string;
  tech: string[];
  liveLink: string;
  githubLink: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Nova Dashboard",
    description: "A real-time financial analytics platform with interactive 3D visualizations.",
    tech: ["Next.js", "MongoDB", "Tailwind"],
    liveLink: "#",
    githubLink: "#",
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "EcoSphere AI",
    description: "Machine learning driven supply chain optimizer for sustainable businesses.",
    tech: ["Next.js", "MongoDB", "Tailwind"],
    liveLink: "#",
    githubLink: "#",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Krypton Wallet",
    description: "Next-gen decentralized multi-sig wallet with biometric authentication.",
    tech: ["Next.js", "MongoDB", "Tailwind"],
    liveLink: "#",
    githubLink: "#",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800"
  }
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col bg-[#0a0a0a] border border-white/[0.03] rounded-[2rem] overflow-hidden transition-all duration-500 hover:border-emerald-500/20 hover:-translate-y-2 hover:shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)]"
    >
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-30"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.04), transparent 70%)`
        }}
      />

      <div className="relative aspect-[16/10] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10 opacity-95" />
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[40%] group-hover:grayscale-0"
        />
        
        <div className="absolute top-5 left-5 z-20 flex flex-wrap gap-2">
          {project.tech.map((t, i) => (
            <span key={i} className="px-3 py-1 bg-black/80 backdrop-blur-md border border-white/10 rounded-full text-[8px] font-black tracking-widest text-emerald-400 uppercase">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow relative z-20">
        <h4 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-emerald-400 transition-colors">
          {project.title}
        </h4>
        <p className="text-sm text-gray-400 leading-relaxed mb-8">
          {project.description}
        </p>

        <div className="mt-auto flex items-center gap-6">
          <a href={project.liveLink} className="group/link flex items-center gap-2 text-[10px] font-black tracking-widest uppercase text-white transition-all">
            <span>Live Demo</span>
            <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="portfolio" className="relative py-40 px-6 bg-[#050505] overflow-hidden">
      {/* High-visibility uniform grid */}
      <GridBackground opacity={0.5} size={50} />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24 text-center">
          <div className="inline-block px-5 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-500 text-[10px] font-black tracking-[0.4em] uppercase mb-8">
            Portfolio
          </div>
          <h3 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-6">
            Crafting Digital <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">Experiences</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>

        <div className="mt-28 text-center">
          <button className="group relative px-12 py-6 bg-transparent text-white font-black tracking-[0.25em] uppercase text-[11px] rounded-xl border border-white/10 hover:border-emerald-500 transition-all duration-500 overflow-hidden">
            <span className="relative z-10">Explore All</span>
            <div className="absolute inset-0 bg-emerald-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="absolute inset-0 flex items-center justify-center text-black z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 font-black">
              Explore All
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
