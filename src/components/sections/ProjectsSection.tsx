
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
      title: "Project One",
      description: "A modern web application built with React and TypeScript",
      tags: ["React", "TypeScript", "Tailwind"],
      link: "#",
      details: "This project showcases modern web development practices including responsive design, accessibility features, and performant animations. Built with React and TypeScript, it demonstrates clean code architecture and best practices.",
      images: ["/placeholder.svg", "/placeholder.svg"]
    },
    {
      title: "Project Two",
      description: "Mobile app development using React Native",
      tags: ["React Native", "Redux", "Node.js"],
      link: "#",
      details: "A cross-platform mobile application that delivers seamless user experience across iOS and Android. Features include offline support, push notifications, and real-time updates.",
      images: ["/placeholder.svg"]
    },
    {
      title: "Project Three",
      description: "Full-stack application with real-time features",
      tags: ["Next.js", "Supabase", "PostgreSQL"],
      link: "#",
      details: "A comprehensive full-stack solution featuring real-time updates, authentication, and database management. Built with modern technologies for optimal performance and scalability.",
      images: ["/placeholder.svg"]
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Advanced analytics platform with machine learning capabilities",
      tags: ["Python", "TensorFlow", "React", "D3.js"],
      link: "#",
      details: "An intelligent dashboard that processes and visualizes complex data patterns using machine learning algorithms. Features interactive charts and predictive analytics.",
      images: ["/placeholder.svg", "/placeholder.svg"]
    },
    {
      title: "E-commerce Platform",
      description: "Modern e-commerce solution with advanced features",
      tags: ["React", "Node.js", "Stripe", "MongoDB"],
      link: "#",
      details: "A full-featured e-commerce platform with secure payment processing, inventory management, and real-time order tracking.",
      images: ["/placeholder.svg"]
    },
    {
      title: "Social Media Manager",
      description: "Comprehensive social media management tool",
      tags: ["Vue.js", "Firebase", "Node.js"],
      link: "#",
      details: "A powerful tool for managing multiple social media accounts, scheduling posts, and analyzing engagement metrics.",
      images: ["/placeholder.svg"]
    },
    {
      title: "IoT Home Automation",
      description: "Smart home automation system with IoT integration",
      tags: ["React", "Node.js", "MQTT", "MongoDB"],
      link: "#",
      details: "An innovative home automation solution that connects and controls various IoT devices through a unified interface.",
      images: ["/placeholder.svg"]
    },
    {
      title: "Blockchain Explorer",
      description: "Cryptocurrency and blockchain visualization tool",
      tags: ["React", "Web3.js", "Node.js"],
      link: "#",
      details: "A comprehensive blockchain explorer for tracking transactions, analyzing smart contracts, and visualizing network statistics.",
      images: ["/placeholder.svg"]
    },
    {
      title: "Virtual Event Platform",
      description: "Interactive platform for hosting virtual events",
      tags: ["React", "WebRTC", "Socket.io"],
      link: "#",
      details: "A feature-rich platform for hosting virtual conferences, webinars, and interactive online events with real-time communication.",
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
