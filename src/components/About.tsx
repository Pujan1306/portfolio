import { motion } from 'framer-motion';
import GridBackground from './GridBackground';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6 bg-background transition-colors duration-500 overflow-hidden">
      <GridBackground opacity={0.15} size={60} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-emerald-500/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <h3 className="text-[clamp(2rem,6vw,4.5rem)] font-black tracking-tighter leading-[0.9] text-foreground">
              ABOUT MY <br />
              <span className="text-emerald-500">DEVELOPMENT</span> <br />
              JOURNEY
            </h3>
            
            <div className="mt-10 flex gap-8">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-foreground">1.5+</span>
                <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">Years Exp.</span>
              </div>
            </div>
          </motion.div>

          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 text-[10px] font-black tracking-[0.3em] uppercase">
              About Me
            </div>
            
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-foreground leading-snug font-semibold tracking-tight">
                I’m a full-stack developer focused on building clean,
                scalable web applications.
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-medium">
                I enjoy building websites with modern technologies like <span className="text-foreground">React.js</span>, <span className="text-foreground">Express.js</span>, <span className="text-foreground">Next.js</span>,
                <span className="text-foreground"> MongoDB</span>, and <span className="text-foreground">Tailwind CSS</span>, 
                and I’m constantly improving my problem-solving and system design skills.
              </p>
            </div>

            <div className="pt-4">
              <motion.a 
                href="#contact" 
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-3 text-[11px] font-black tracking-widest uppercase text-emerald-500 transition-all group"
              >
                <span>Let's build together</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;