
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real application, this would be an API call
      // Simulating sending email with a timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, we're just showing a success message
      // In production, this would be replaced with a real API call
      console.log("Sending email to: aif_rizqi_nafizan@students.edu.sg");
      console.log("From:", name, email);
      console.log("Message:", message);

      toast.success("Message sent successfully!");
      
      // Reset form
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("Error sending message:", error);
    } finally {
      setIsSubmitting(false);
    }
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Message</label>
            <textarea
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-200 resize-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-8 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>
          <p className="text-xs text-center text-muted-foreground mt-2">
            Your message will be sent to: aif_rizqi_nafizan@students.edu.sg
          </p>
        </motion.form>
      </div>
    </section>
  );
}
