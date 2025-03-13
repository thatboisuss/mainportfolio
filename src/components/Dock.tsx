
import { motion } from "framer-motion";
import {
  Home,
  User,
  Code,
  Send,
  Award,
  Briefcase,
  HandHeart,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";

interface DockProps {
  onNavigate: (id: string) => void;
}

type Item = {
  name: string;
  icon: LucideIcon;
  id: string;
};

export const Dock = ({ onNavigate }: DockProps) => {
  const [hovered, setHovered] = useState<string | null>(null);

  const items: Item[] = [
    { name: "Home", icon: Home, id: "home" },
    { name: "About", icon: User, id: "about" },
    { name: "Experience", icon: Briefcase, id: "experience" },
    { name: "Projects", icon: Code, id: "projects" },
    { name: "Achievements", icon: Award, id: "achievements" },
    { name: "Skills", icon: HandHeart, id: "skills" },
    { name: "Contact", icon: Send, id: "contact" },
  ];

  return (
    <div className="flex items-center justify-center space-x-1 bg-background/70 backdrop-blur-sm p-2 rounded-full border border-border">
      {items.map((item) => (
        <motion.button
          key={item.id}
          className="relative flex items-center justify-center p-3 text-muted-foreground hover:text-foreground"
          onMouseEnter={() => setHovered(item.id)}
          onMouseLeave={() => setHovered(null)}
          onClick={() => onNavigate(item.id)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <item.icon size={20} />
          {hovered === item.id && (
            <motion.div
              className="absolute -top-8 px-2 py-1 rounded-md text-xs font-medium bg-background border border-border"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
            >
              {item.name}
            </motion.div>
          )}
        </motion.button>
      ))}
    </div>
  );
};
