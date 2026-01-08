
import React from 'react';
import GridBackground from './GridBackground';

const Skills: React.FC = () => {
  const orbits = [
    {
      radius: '350px',
      duration: '25s',
      skills: [
        { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
        { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
        { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A048' },
      ]
    },
    {
      radius: '600px',
      duration: '45s',
      reverse: true,
      skills: [
        { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/white' },
        { name: 'Tailwind', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
        { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032' },
        { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
      ]
    },
    {
      radius: '850px',
      duration: '65s',
      skills: [
        { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel/white' },
        { name: 'Postman', icon: 'https://cdn.simpleicons.org/postman/FF6C37' },
        { name: 'Express', icon: 'https://cdn.simpleicons.org/express/white' },
        { name: 'Framer', icon: 'https://cdn.simpleicons.org/framer/0055FF' },
      ]
    }
  ];

  return (
    <section id="stack" className="relative min-h-[120vh] py-32 flex items-center justify-center overflow-hidden bg-[#050505]">
      
      {/* High-visibility uniform grid */}
      <GridBackground opacity={0.5} size={50} />

      {/* Minimal clean glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-emerald-500/[0.03] blur-[120px]" />
      </div>

      {/* Orbital Content */}
      <div className="relative z-10 w-full max-w-full aspect-square flex items-center justify-center pointer-events-none scale-[0.35] sm:scale-[0.5] md:scale-[0.75] lg:scale-[0.9] xl:scale-100">
        
        <div className="relative z-30 select-none text-center">
          <h2 
            className="text-[12rem] md:text-[14rem] font-black tracking-tighter leading-none pointer-events-auto"
            style={{
              background: 'linear-gradient(to bottom, #ffffff 60%, #444444 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Skills
          </h2>
        </div>

        {orbits.map((orbit, orbitIdx) => (
          <div 
            key={orbitIdx}
            className="absolute rounded-full border border-dashed border-white/10 transition-all duration-700"
            style={{ 
              width: orbit.radius, 
              height: orbit.radius,
              animation: `rotate ${orbit.duration} linear infinite ${orbit.reverse ? 'reverse' : 'normal'}`
            }}
          >
            {orbit.skills.map((skill, skillIdx) => {
              const angle = (skillIdx / orbit.skills.length) * 360;
              const radiusValue = parseFloat(orbit.radius) / 2;
              
              return (
                <div
                  key={skillIdx}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translate(${radiusValue}px) rotate(-${angle}deg)`
                  }}
                >
                  <div 
                    className="flex items-center justify-center w-24 h-24 rounded-full bg-[#0a0a0a] border border-white/10 p-5 shadow-2xl group pointer-events-auto cursor-pointer transition-all duration-500 hover:scale-110 hover:border-emerald-500/40"
                    style={{
                      animation: `counter-rotate ${orbit.duration} linear infinite ${orbit.reverse ? 'reverse' : 'normal'}`
                    }}
                  >
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-full h-full object-contain filter brightness-75 group-hover:brightness-100 transition-all"
                    />
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white text-black px-4 py-1.5 rounded-lg font-black tracking-widest uppercase text-[9px] whitespace-nowrap shadow-xl">
                      {skill.name}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes counter-rotate { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
      `}</style>
    </section>
  );
};

export default Skills;
