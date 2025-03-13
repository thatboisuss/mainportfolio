
import { motion } from "framer-motion";

interface Experience {
  position: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export function ExperienceSection() {
  const experiences: Experience[] = [
    {
      position: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      duration: "January 2022 - Present",
      description: [
        "Led the development of a complex SaaS platform with React and TypeScript",
        "Improved application performance by 40% through code optimization and lazy loading",
        "Mentored junior developers and implemented code review processes"
      ],
      technologies: ["React", "TypeScript", "Redux", "GraphQL"]
    },
    {
      position: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      duration: "March 2020 - December 2021",
      description: [
        "Developed and maintained multiple web applications using React and Node.js",
        "Implemented authentication systems and API integrations",
        "Collaborated with design team to create responsive and accessible UIs"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB"]
    },
    {
      position: "Mobile Developer",
      company: "App Creators Co.",
      duration: "June 2018 - February 2020",
      description: [
        "Built cross-platform mobile applications using React Native",
        "Integrated third-party APIs and services",
        "Implemented real-time features using WebSockets"
      ],
      technologies: ["React Native", "JavaScript", "Firebase", "Redux"]
    }
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="max-w-6xl w-full space-y-12">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center"
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:translate-x-0 translate-x-4" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`relative mb-12 md:mb-24 ${
                index % 2 === 0 ? "md:pr-12 md:ml-auto md:mr-0 md:text-right" : "md:pl-12"
              } md:w-1/2 pl-12 md:pl-0`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-auto md:right-0 top-0 w-8 h-8 bg-background rounded-full border-4 border-primary/50 transform translate-x-0.5 md:translate-x-4" />

              <div 
                className="p-6 rounded-2xl bg-background/50 backdrop-blur-lg border border-border shadow-lg 
                           hover:shadow-[0_0_15px_rgba(var(--primary),0.2)] transition-all duration-300
                           relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent mb-1">
                    {exp.position}
                  </h3>
                  
                  <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 mb-4">
                    <p className="font-medium">{exp.company}</p>
                    <span className="hidden md:inline-block">•</span>
                    <p className="text-muted-foreground text-sm">{exp.duration}</p>
                  </div>
                  
                  <ul className={`list-disc ${index % 2 === 0 ? "md:ml-auto md:mr-4" : "ml-4"} text-muted-foreground mb-4 space-y-1`}>
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
