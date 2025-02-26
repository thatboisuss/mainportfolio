
import { motion } from "framer-motion";

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="max-w-6xl w-full space-y-12">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center"
        >
          Get in Touch
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="max-w-md mx-auto space-y-6"
        >
          <div className="space-y-2">
            <label className="text-sm font-medium">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-200"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-200"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Message</label>
            <textarea
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-200 resize-none"
              required
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-8 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors duration-200"
            type="submit"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
