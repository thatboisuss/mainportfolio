
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  details?: string;
  images?: string[];
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "Portfolio Website",
      description: "Personal website built with React and Tailwind CSS",
      tags: ["React", "TypeScript", "Tailwind"],
      link: "#",
      details: "A modern and responsive portfolio website showcasing my projects, skills, and experience. Built with React, TypeScript, and Tailwind CSS.",
      images: ["/placeholder.svg", "/placeholder.svg"]
    },
    {
      title: "ClassBoard",
      description: "Cross-platform mobile app for classroom management",
      tags: ["React Native", "Redux", "Node.js"],
      link: "https://classroomboard.vercel.app/",
      details: "A website for students to put their notes and news. Built with React Native and Redux.",
      images: ["/placeholder.svg"]
    },
    {
      title: "Project Three",
      description: "Soon to come...",
      tags: ["Soon to come..."],
      link: "#",
      details: "Soon to come...",
      images: ["/placeholder.svg"]
    },
    {
      title: "Soon to come...",
      description: "Soon to come...",
      tags: ["Soon to come..."],
      link: "#",
      details: "Soon to come...",
      images: ["/placeholder.svg", "/placeholder.svg"]
    },
    {
      title: "Soon to come...",
      description: "Soon to come...",
      tags: ["Soon to come..."],
      link: "#",
      details: "Soon to come...",
      images: ["/placeholder.svg"]
    },
    {
      title: "Soon to come...",
      description: "Soon to come...",
      tags: ["Soon to come..."],
      link: "#",
      details: "Soon to come...",
      images: ["/placeholder.svg"]
    },
    {
      title: "Soon to come...",
      description: "Soon to come...",
      tags: ["Soon to come..."],
      link: "#",
      details: "Soon to come...",
      images: ["/placeholder.svg"]
    },
    {
      title: "Soon to come...",
      description: "Soon to come...",
      tags: ["Soon to come..."],
      link: "#",
      details: "Soon to come...",
      images: ["/placeholder.svg"]
    },
    {
      title: "Soon to come...",
      description: "Soon to come...",
      tags: ["Soon to come..."],
      link: "#",
      details: "Soon to come...",
      images: ["/placeholder.svg"]
    }
  ];

  const handleCardClick = (index: number, project: Project) => {
    if (flippedCard === index) {
      setFlippedCard(null);
    } else {
      setFlippedCard(index);
    }
  };

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center p-4 md:p-8 py-0 px-0">
      <div className="max-w-6xl w-full space-y-12 py-0">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center"
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="relative h-[300px] perspective-[1000px]">
              <motion.div
                initial={false}
                animate={{
                  rotateY: flippedCard === index ? 180 : 0,
                }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  damping: 15,
                }}
                onClick={() => handleCardClick(index, project)}
                className="w-full h-full cursor-pointer preserve-3d absolute"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Front of card */}
                <div
                  className="absolute w-full h-full backface-hidden p-6 rounded-2xl bg-background/50 backdrop-blur-lg border border-border shadow-lg 
                           transition-all duration-500 hover:shadow-xl
                           before:absolute before:inset-0 before:rounded-2xl before:bg-primary/5
                           before:opacity-0 hover:before:opacity-100 before:transition-opacity
                           after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-r
                           after:from-primary/20 after:to-purple-500/20 after:blur-xl
                           after:opacity-0 hover:after:opacity-100 after:transition-opacity
                           hover:shadow-[0_0_30px_rgba(var(--primary),0.2)]"
                >
                  <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Back of card */}
                <div
                  className="absolute w-full h-full backface-hidden p-6 rounded-2xl bg-background/50 backdrop-blur-lg border border-border shadow-lg 
                           [transform:rotateY(180deg)]"
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setFlippedCard(null);
                    }}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="h-full flex flex-col">
                    <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 flex-grow overflow-auto">
                      {project.details}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      {project.images?.map((image, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={image}
                          alt={`${project.title} preview ${imgIndex + 1}`}
                          className="rounded-lg w-full h-24 object-cover"
                        />
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .perspective-[1000px] {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}
