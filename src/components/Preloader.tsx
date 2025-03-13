
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [stage, setStage] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [explodingRocket, setExplodingRocket] = useState<number | null>(null);
  
  useEffect(() => {
    // Progress through the animation stages
    const timer1 = setTimeout(() => setStage(1), 1500);
    const timer2 = setTimeout(() => setStage(2), 3000);
    
    // Automatically transition to the main site after 3 seconds
    const autoExitTimer = setTimeout(() => {
      setExiting(true);
    }, 3000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(autoExitTimer);
    };
  }, []);

  // Container variants
  const containerVariants = {
    initial: { opacity: 1 },
    exit: { 
      y: "-100%",
      transition: { 
        duration: 0.8, 
        ease: [0.45, 0, 0.55, 1],
        when: "afterChildren" 
      }
    }
  };

  // Text reveal animation
  const textVariants = {
    initial: { 
      opacity: 0,
      y: 20
    },
    animate: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4
      }
    }
  };
  
  // Blob animations
  const blobVariants = {
    initial: { 
      scale: 0,
      opacity: 0
    },
    animate: { 
      scale: 1,
      opacity: 0.8,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    },
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [0.8, 0.85, 0.8],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    exit: {
      scale: 1.5,
      opacity: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  // Rocket variants - fixed the TypeScript error by properly typing repeatType
  const rocketVariants = {
    initial: { y: 0 },
    animate: { 
      y: -10, 
      transition: { 
        duration: 1, 
        repeat: Infinity, 
        repeatType: "reverse" as const 
      } 
    },
    explode: { 
      scale: 0, 
      opacity: 0, 
      transition: { 
        duration: 0.3 
      } 
    }
  };

  const handleRocketClick = (index: number) => {
    setExplodingRocket(index);
    setTimeout(() => setExplodingRocket(null), 800);
  };

  // Generate rockets with random positions
  const rockets = [
    { x: '15%', y: '70%', size: 40, rotation: 15 },
    { x: '75%', y: '65%', size: 50, rotation: -10 },
    { x: '25%', y: '80%', size: 35, rotation: 5 },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate={exiting ? "exit" : "initial"}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden h-[100vh]"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      {/* Background blobs */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.div
          variants={blobVariants}
          initial="initial"
          animate={stage > 0 ? "pulse" : "animate"}
          exit="exit"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vh] h-[50vh] rounded-full bg-gradient-to-r from-primary/30 to-purple-500/30 blur-3xl"
        />
        <motion.div
          variants={blobVariants}
          initial="initial"
          animate={stage > 0 ? "pulse" : "animate"}
          exit="exit"
          transition={{ delay: 0.2 }}
          className="absolute top-[40%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-[30vh] h-[30vh] rounded-full bg-gradient-to-r from-blue-500/20 to-primary/20 blur-3xl"
        />
      </div>

      {/* Rockets */}
      {rockets.map((rocket, index) => (
        <div key={index} style={{ position: 'absolute', left: rocket.x, bottom: rocket.y }}>
          <motion.div
            onClick={() => handleRocketClick(index)}
            style={{ 
              width: rocket.size, 
              height: rocket.size * 2,
              cursor: 'pointer',
              rotate: `${rocket.rotation}deg`,
              originY: 1
            }}
            variants={rocketVariants}
            initial="initial"
            animate={explodingRocket === index ? "explode" : "animate"} 
            whileHover={{ scale: 1.1 }}
            className="relative"
          >
            {/* Rocket body */}
            <div className="absolute w-full h-[60%] bottom-0 rounded-lg bg-gradient-to-b from-primary to-primary/80"></div>
            
            {/* Rocket nose */}
            <div className="absolute w-full h-[40%] top-0 left-0 right-0 mx-auto">
              <div className="w-full h-full bg-gradient-to-b from-purple-400 to-primary rounded-t-full"></div>
            </div>
            
            {/* Windows */}
            <div className="absolute w-[40%] h-[15%] rounded-full bg-white/90 top-[35%] left-[30%]"></div>
            
            {/* Fins */}
            <div className="absolute bottom-0 left-[-30%] w-[30%] h-[30%] bg-purple-500 rounded-bl-lg"></div>
            <div className="absolute bottom-0 right-[-30%] w-[30%] h-[30%] bg-purple-500 rounded-br-lg"></div>
            
            {/* Flame */}
            <motion.div 
              className="absolute bottom-[-20%] left-[25%] w-[50%] h-[40%] rounded-b-full bg-gradient-to-t from-orange-500 via-yellow-400 to-red-500"
              animate={{
                height: ["30%", "40%", "30%"],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            ></motion.div>
          </motion.div>
          
          {/* Explosion particles */}
          <AnimatePresence>
            {explodingRocket === index && (
              <>
                {[...Array(20)].map((_, i) => {
                  const angle = (i / 20) * Math.PI * 2;
                  const radius = Math.random() * 100 + 50;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  const size = Math.random() * 15 + 5;
                  const color = [
                    'bg-primary',
                    'bg-purple-500',
                    'bg-yellow-400',
                    'bg-orange-500'
                  ][Math.floor(Math.random() * 4)];
                  
                  return (
                    <motion.div
                      key={i}
                      className={`absolute rounded-full ${color} opacity-80`}
                      initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                      animate={{
                        x,
                        y,
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut"
                      }}
                      style={{
                        width: size,
                        height: size,
                        left: rocket.size / 2,
                        top: rocket.size
                      }}
                    />
                  );
                })}
              </>
            )}
          </AnimatePresence>
        </div>
      ))}

      {/* Hello World text */}
      <div className="relative z-10 text-center">
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="relative"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Hello World!
          </h1>
          
          {stage > 0 && (
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ 
                duration: 1.5, 
                ease: "easeInOut" 
              }}
              className="h-[2px] bg-gradient-to-r from-primary to-purple-500 mt-4 mx-auto"
            />
          )}
          
          {stage > 1 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-4 text-muted-foreground"
            >
              Welcome to my portfolio
            </motion.p>
          )}
        </motion.div>
      </div>
      
      {/* Decorative particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
              scale: 0
            }}
            animate={{ 
              opacity: [0, 0.7, 0],
              scale: [0, 1, 0],
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            className="absolute w-2 h-2 rounded-full bg-primary/50"
          />
        ))}
      </div>
    </motion.div>
  );
}
