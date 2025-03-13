
import { motion } from "framer-motion";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image: string;
  link?: string;
}

export function AchievementsSection() {
  const certificates: Certificate[] = [
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "April 2023",
      image: "/placeholder.svg",
      link: "#"
    },
    {
      title: "Advanced TypeScript",
      issuer: "Microsoft",
      date: "January 2023",
      image: "/placeholder.svg",
      link: "#"
    },
    {
      title: "Full Stack Web Development",
      issuer: "Coursera",
      date: "November 2022",
      image: "/placeholder.svg",
      link: "#"
    },
    {
      title: "Mobile App Development",
      issuer: "Udemy",
      date: "July 2022",
      image: "/placeholder.svg",
      link: "#"
    }
  ];

  return (
    <section id="achievements" className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="max-w-6xl w-full space-y-12">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center"
        >
          Achievements
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 20px rgba(var(--primary), 0.4)"
              }}
              className="p-6 rounded-2xl bg-background/50 backdrop-blur-lg border border-border shadow-lg 
                         transition-all duration-300 hover:shadow-[0_0_15px_rgba(var(--primary),0.2)]
                         relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="flex flex-col md:flex-row gap-6 relative z-10">
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-32 object-cover rounded-lg border border-border"
                  />
                </div>
                
                <div className="flex-grow space-y-2">
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground">
                    <span className="font-medium">Issuer:</span> {cert.issuer}
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-medium">Date:</span> {cert.date}
                  </p>
                  
                  {cert.link && (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-primary hover:text-primary/90 transition-colors mt-2"
                    >
                      View Certificate →
                    </a>
                  )}
                </div>
              </div>
              
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
