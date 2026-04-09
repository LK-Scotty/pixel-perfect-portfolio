import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-end pb-16 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <motion.div style={{ y, opacity }} className="relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-sm tracking-[0.3em] uppercase text-muted-foreground mb-8"
        >
          Developer & Creative Technologist
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="text-[clamp(3rem,12vw,12rem)] font-bold leading-[0.85] tracking-[-0.04em]"
          >
            <span className="block">Creative</span>
            <span className="block text-stroke">Developer</span>
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 flex items-end justify-between"
        >
          <p className="max-w-md text-muted-foreground text-lg leading-relaxed">
            Building digital experiences that live at the intersection of design and technology.
          </p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="hidden md:block font-mono text-xs text-muted-foreground tracking-widest"
            style={{ writingMode: "vertical-rl" }}
          >
            SCROLL
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Ambient gradient */}
      <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
};

export default HeroSection;
