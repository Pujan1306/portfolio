
import React from "react"
import { motion } from "framer-motion"
import GridBackground from "./GridBackground"

const Skills: React.FC = () => {
  const orbits = [
    {
      radius: "350px",
      duration: "25s",
      skills: [
        { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
        { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
        { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A048" },
      ],
    },
    {
      radius: "550px",
      duration: "45s",
      reverse: true,
      skills: [
        { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
        { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
        { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
        { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
      ],
    },
    {
      radius: "750px",
      duration: "65s",
      skills: [
        { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/white" },
        { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
        { name: "Express", icon: "https://cdn.simpleicons.org/express/white" },
        { name: "Framer", icon: "https://cdn.simpleicons.org/framer/0055FF" },
      ],
    },
  ]

  return (
    <motion.section
      id="stack"
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative min-h-[900px] h-screen max-h-[1080px] py-20 flex items-center justify-center overflow-hidden bg-background"
    >
      <GridBackground opacity={0.3} size={50} />

      
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.2 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-emerald-500/10 blur-[140px]" />
      </motion.div>

      <div className="relative z-10 w-full h-full flex items-center justify-center pointer-events-none scale-[0.45] sm:scale-[0.6] md:scale-[0.8] lg:scale-[0.9] xl:scale-100">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-30 text-center pointer-events-auto"
        >
          <h2 className="text-[12rem] md:text-[14rem] font-black tracking-tighter leading-none pointer-events-auto bg-clip-text text-transparent bg-linear-to-tr from-foreground via-emerald-500 to-emerald-200 dark:from-foreground dark:via-emerald-400 dark:to-emerald-200/50">
            Skills
          </h2>
        </motion.div>

        
        {orbits.map((orbit, orbitIdx) => (
          <motion.div
            key={orbitIdx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: orbitIdx * 0.2, duration: 1 }}
            className="absolute rounded-full border border-dashed border-border"
            style={{
              width: orbit.radius,
              height: orbit.radius,
              animation: `rotate ${orbit.duration} linear infinite ${
                orbit.reverse ? "reverse" : "normal"
              }`,
            }}
          >
            {orbit.skills.map((skill, skillIdx) => {
              const angle = (skillIdx / orbit.skills.length) * 360
              const radiusValue = parseFloat(orbit.radius) / 2

              return (
                <div
                  key={skillIdx}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translate(${radiusValue}px) rotate(-${angle}deg)`,
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      y: {
                        duration: 3 + skillIdx,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                      scale: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      },
                    }}
                    className="relative flex items-center justify-center w-24 h-24 rounded-full
                      bg-card border border-border p-5 shadow-xl
                      group pointer-events-auto cursor-pointer
                      hover:border-emerald-500/40
                      hover:shadow-[0_0_40px_rgba(16,185,129,0.25)]"
                    style={{
                      animation: `counter-rotate ${orbit.duration} linear infinite ${
                        orbit.reverse ? "reverse" : "normal"
                      }`,
                    }}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="skill-icon w-full h-full object-contain"
                    />

                    
                    <div
                      className="absolute -top-14 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 pointer-events-none z-50"
                    >
                      <div className="bg-foreground text-background px-4 py-2 rounded-xl font-black tracking-widest uppercase text-[10px] whitespace-nowrap shadow-2xl relative">
                        {skill.name}
                        
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-foreground rotate-45" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </motion.div>
        ))}
      </div>

      
      <style>{`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes counter-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .skill-icon {
          transition: filter 0.4s ease, transform 0.4s ease;
          filter: grayscale(1) opacity(0.75);
        }
        .group:hover .skill-icon {
          filter: grayscale(0) opacity(1) brightness(1.05) contrast(1.1);
          transform: scale(1.05);
        }
        html:not(.dark) .skill-icon {
          filter: grayscale(1) opacity(0.6) brightness(0.85);
        }
        html:not(.dark) .group:hover img[src*="nextdotjs"],
        html:not(.dark) .group:hover img[src*="vercel"],
        html:not(.dark) .group:hover img[src*="express"] {
          filter: invert(1) brightness(1.2);
        }
        .dark .skill-icon {
          filter: grayscale(1) opacity(0.7);
        }
        .dark .group:hover .skill-icon {
          filter: grayscale(0) opacity(1);
        }
      `}</style>
    </motion.section>
  )
}

export default Skills