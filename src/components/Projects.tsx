import React, { useState, useRef, MouseEvent } from 'react';
import { motion } from 'framer-motion';
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
    title: "Trelix (Current Best)",
    description:
      "Trelix is a modern, feature-rich task management application built with Next.js, designed to help teams collaborate and manage their work efficiently.",
    tech: ["Next.js", "TypeScript", "Tailwind", "MongoDB"],
    liveLink: "https://trelix-delta.vercel.app",
    githubLink: "https://github.com/Pujan1306/trelix",
    image: "/trelix.png",
  },
  {
    title: "Codexa",
    description:
      "A full-stack application for real-time code collaboration, featuring chat, video calls, and code execution capabilities.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    liveLink: "https://codexa-frontend-8xj5.onrender.com",
    githubLink: "https://github.com/Pujan1306/Codexa",
    image: "/codexa.png",
  },
  {
    title: "Secretly",
    description:
      "Secretly is a modern web application built with Next.js that allows users to send and receive anonymous messages.",
    tech: ["Next.js", "TypeScript", "Tailwind", "MongoDB"],
    liveLink: "https://secretly-sooty.vercel.app",
    githubLink: "https://github.com/Pujan1306/secretly",
    image: "/secretly.png",
  },
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({
  project,
  index,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleCardClick = () => {
    window.open(project.liveLink, "_blank");
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onClick={handleCardClick}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group relative flex flex-col cursor-pointer bg-(--card)/40 hover:bg-(--card)/90 backdrop-blur-sm border border-border rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-emerald-500/40 hover:-translate-y-2 shadow-sm hover:shadow-2xl"
    >
   
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-30 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(
            600px circle at ${mousePos.x}px ${mousePos.y}px,
            oklch(from var(--primary) l c h / 0.12),
            transparent 80%
          )`,
        }}
      />

    
      <div className="relative aspect-16/10 overflow-hidden bg-muted">
        <div className="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent z-10 opacity-40" />
        <motion.img
          src={project.image}
          alt={project.title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full object-cover"
        />
      </div>

   
      <div className="p-8 md:p-10 flex flex-col grow relative z-20">
        <div className="mb-6">
          <h4 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            {project.title}
          </h4>

          <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed font-medium">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-(--background)/80 border border-border rounded-full text-[8px] font-bold tracking-widest uppercase text-emerald-600 dark:text-emerald-400"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

    
        <div className="mt-auto pt-6 flex items-center justify-between border-t border-border">
        
          <motion.a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            whileHover={{ x: 5 }}
            className="flex items-center gap-2.5 text-[10px] font-black tracking-[0.2em] uppercase hover:text-emerald-600 transition-all"
          >
            <span>Preview</span>
            <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center">
              <svg
                className="w-3.5 h-3.5 -rotate-45"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </motion.a>

        
          <motion.a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="p-3 text-muted-foreground hover:text-foreground"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section
      id="portfolio"
      className="relative py-24 md:py-48 px-6 bg-background overflow-hidden"
    >
      <GridBackground opacity={0.2} size={50} />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <h3 className="text-[clamp(2.5rem,8vw,6rem)] font-black tracking-tighter">
            PROJECT EXPERIENCE
          </h3>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
