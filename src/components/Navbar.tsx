import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-6 flex items-center justify-between mix-blend-difference">
      <a href="#" className="text-foreground font-bold text-xl tracking-tight">
        LC<span className="text-primary">.</span>
      </a>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="font-mono text-xs tracking-widest uppercase text-foreground hover:text-primary transition-colors duration-300"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col gap-1.5 z-50"
      >
        <motion.span
          animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          className="block w-6 h-0.5 bg-foreground"
        />
        <motion.span
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          className="block w-6 h-0.5 bg-foreground"
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          className="block w-6 h-0.5 bg-foreground"
        />
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-4xl font-bold hover:text-primary transition-colors duration-300"
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
