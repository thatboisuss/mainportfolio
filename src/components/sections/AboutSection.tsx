
import { motion } from "framer-motion";

export function AboutSection() {
  const cards = [
    {
      title: "Who I Am",
      content: "A passionate developer who loves creating beautiful and functional applications that make a difference."
    },
    {
      title: "My Journey",
      content: "Started coding at a young age, now specializing in web and mobile development with a focus on user experience."
    },
    {
      title: "My Mission",
      content: "To build innovative solutions that help businesses grow and users succeed."
    }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="max-w-6xl w-full space-y-12">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-2xl bg-background/50 backdrop-blur-lg border border-border shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                {card.title}
              </h3>
              <p className="text-muted-foreground">
                {card.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
