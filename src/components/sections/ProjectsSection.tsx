
import { useState, useEffect, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
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
  
  const projects: Project[] = [
    {
      title: "Weather app",
      description: "A simple yet effective weather app",
      tags: ["Python"],
      link: "https://github.com/thatboisuss/pythonweather",
      details: "A simple weather app that provides real-time weather updates and forecasts for any location worldwide.",
      images: ["/placeholder.svg", "/placeholder.svg"]
    },
    {
      title: "Portfolio",
      description: "A portfolio website built with Next.js",
      tags: ["Next.js", "Tailwind CSS"],
      link: "#",
      details: "A modern portfolio website built with Next.js and Tailwind CSS. Features a responsive design and smooth animations.",
      images: ["/placeholder.svg"]
    },
    {
      title: "Budget Tracker",
      description: "A mobile app made with React Native",
      tags: ["React Native", "Expo", "Firebase"],
      link: "#",
      details: "A mobile app for tracking expenses and managing budgets. Features real-time synchronization and cloud storage.",
      images: ["/placeholder.svg"]
    },
    {
      title: "Web Summarizer",
      description: "A web app that summarizes articles",
      tags: ["React, Typescript"],
      link: "https://github.com/thatboisuss/websummarizer",
      details: "A web app that summarizes articles and blog posts using advanced natural language processing techniques.",
      images: ["/placeholder.svg", "/placeholder.svg"]
    },
    {
      title: "-",
      description: "-",
      tags: ["-"],
      link: "#",
      details: "-",
      images: ["/placeholder.svg"]
    },
    {
      title: "-",
      description: "-",
      tags: ["-"],
      link: "#",
      details: "-",
      images: ["/placeholder.svg"]
    },
    {
      title: "-",
      description: "-",
      tags: ["React", "Node.js", "MQTT", "MongoDB"],
      link: "#",
      details: "-",
      images: ["/placeholder.svg"]
    },
    {
      title: "-",
      description: "-",
      tags: ["React", "Web3.js", "Node.js"],
      link: "#",
      details: "-",
      images: ["/placeholder.svg"]
    },
    {
      title: "-",
      description: "-",
      tags: ["-"],
      link: "#",
      details: "-",
      images: ["/placeholder.svg"]
    }
  ];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden">
      <div className="max-w-7xl w-full space-y-12">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <div 
                className="h-full p-6 rounded-2xl bg-background/50 backdrop-blur-lg border border-border shadow-lg 
                         transition-all duration-300
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
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-2xl bg-card rounded-xl p-6 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                {selectedProject.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {selectedProject.details || selectedProject.description}
              </p>

              {selectedProject.images && selectedProject.images.length > 0 && (
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {selectedProject.images.map((image, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={image}
                      alt={`${selectedProject.title} preview ${imgIndex + 1}`}
                      className="rounded-lg w-full h-32 object-cover"
                    />
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
              >
                View Project
              </a>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
