import { Dock } from "@/components/Dock";
import { AnimatedText } from "@/components/AnimatedText";
import { motion, AnimatePresence } from "framer-motion";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { Preloader } from "@/components/Preloader";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import { useEffect, useState } from "react";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const isDarkMode = document.documentElement.classList.contains("dark");
  const skills = ["React", "TypeScript", "Node.js", "React Native", "Python", "SQL"];
  
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);
  
  // ASCII art text for the name
  const asciiName = `
   ▄▄▄      ██▓  █████▒
  ▒████▄   ▓██▒▓██   ▒ 
  ▒██  ▀█▄ ▒██▒▒████ ░ 
  ░██▄▄▄▄██░██░░▓█▒  ░ 
   ▓█   ▓██░██░░▒█░    
   ▒▒   ▓▒█░▓   ▒ ░    
    ▒   ▒▒ ░▒ ░ ░      
    ░   ▒   ▒ ░ ░ ░    
        ░  ░░          
  `;
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  
  return <div className="relative min-h-screen w-full overflow-hidden">
      <DarkModeToggle />
      
      <AnimatePresence>
        {<Preloader />}
      </AnimatePresence>

      {/* Cursor Spotlight */}
      <div className="fixed inset-0 pointer-events-none z-[60] mix-blend-soft-light" style={{
      background: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, 
            ${isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)'}, 
            transparent)`
    }} />

      {/* Background particles - with reduced movement */}
      <div className="fixed inset-0 -z-10">
        {[...Array(20)].map((_, i) => <motion.div key={i} className="absolute w-4 h-4 bg-primary/10 rounded-full" initial={{
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight
      }} animate={{
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        scale: [1, 1.2, 1]
      }} transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }} />)}
      </div>

      {/* Hero Section */}
      <section id="home" className="h-screen flex flex-col items-center justify-center px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} className="text-center space-y-6">
          {/* 3D Effect 2: Rotating ASCII Name */}
          <motion.pre className="font-mono text-[0.5em] md:text-xs leading-none mb-4 text-primary whitespace-pre select-none" style={{
          fontFamily: "monospace"
        }} animate={{
          rotateX: [0, 360]
        }} transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}>
            {asciiName}
          </motion.pre>
          
          {/* 3D Effect 3: Floating Title */}
          <motion.div animate={{
          y: [0, -20, 0],
          rotateX: [0, 10, 0],
          rotateY: [0, 10, 0]
        }} transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }} style={{
          transformStyle: "preserve-3d"
        }}>
            <AnimatedText text="Web Developer and App Developer" delay={0.5} className="text-xl md:text-2xl text-muted-foreground" />
          </motion.div>
          
          {/* 3D Effect 4: Parallax Description */}
          <motion.p initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 1
        }} className="max-w-[600px] text-muted-foreground relative" style={{
          perspective: 1000
        }} whileHover={{
          rotateX: 10,
          scale: 1.05,
          transition: {
            duration: 0.3
          }
        }}>
            Crafting digital experiences with code and creativity. Specialized in building 
            beautiful, functional, and user-friendly applications.
          </motion.p>
          
          {/* 3D Effect 5: Dynamic Button */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 1.2
        }} className="pt-4" whileHover={{
          scale: 1.1,
          rotateY: 10
        }} style={{
          perspective: 1000
        }}>
            <button onClick={() => handleScroll('contact')} className="relative inline-flex items-center justify-center h-12 px-8 text-sm font-medium tracking-wide text-white transition-all duration-300 rounded-full bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 overflow-hidden group">
              <span className="relative z-10">Get in touch</span>
              <motion.div className="absolute inset-0 bg-white/20" animate={{
              scale: [1, 2],
              opacity: [0.5, 0]
            }} transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeOut"
            }} />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Infinite Scrolling Text */}
      <div className="relative w-full overflow-hidden py-4 bg-primary/5 backdrop-blur-sm">
        <motion.div className="flex whitespace-nowrap" animate={{
        x: [0, -1920] // Assuming standard screen width
      }} transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}>
          {[...Array(3)].map((_, i) => <div key={i} className="flex space-x-8">
              {skills.map((skill, index) => <span key={index} className="text-primary mx-[46px] text-6xl font-extrabold my-0 py-0 px-[57px]">
                  {skill}
                </span>)}
            </div>)}
        </motion.div>
      </div>

      {/* Other Sections */}
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <AchievementsSection />
      
      <ContactSection />

      {/* Background gradient */}
      <div className="fixed inset-0 -z-20 h-full w-full bg-white dark:bg-zinc-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Navigation */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <Dock onNavigate={handleScroll} />
      </nav>
    </div>;
};
export default Index;
