
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Home, User, Briefcase, Code2, Mail } from "lucide-react";
import { useEffect, useRef } from "react";

const items = [
  { icon: Home, label: "Home", id: "home" },
  { icon: User, label: "About", id: "about" },
  { icon: Briefcase, label: "Projects", id: "projects" },
  { icon: Code2, label: "Skills", id: "skills" },
  { icon: Mail, label: "Contact", id: "contact" },
];

export function Dock({ onNavigate }: { onNavigate: (id: string) => void }) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div className="dock">
      {items.map((item) => (
        <DockItem
          key={item.id}
          mouseX={mouseX}
          icon={item.icon}
          label={item.label}
          onClick={() => onNavigate(item.id)}
        />
      ))}
    </motion.div>
  );
}

function DockItem({
  mouseX,
  icon: Icon,
  label,
  onClick,
}: {
  mouseX: any;
  icon: any;
  label: string;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useMotionValue(Infinity);
  const size = useSpring(useTransform(distance, [-150, 0, 150], [40, 60, 40]), {
    damping: 15,
    stiffness: 200,
  });

  useEffect(() => {
    if (!ref.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const distanceFromMouse = e.clientX - x;
      
      distance.set(distanceFromMouse);
      mouseX.set(e.clientX);
    };

    const handleMouseLeave = () => {
      distance.set(Infinity);
      mouseX.set(Infinity);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, distance]);

  return (
    <motion.div
      ref={ref}
      style={{ width: size, height: size }}
      className="dock-item group cursor-pointer"
      onClick={onClick}
    >
      <motion.div
        className="relative flex items-center justify-center w-full h-full"
        whileHover={{ y: -8 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Icon className="w-6 h-6 text-foreground transition-colors group-hover:text-primary" />
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-popover text-popover-foreground text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
          {label}
        </span>
      </motion.div>
    </motion.div>
  );
}
