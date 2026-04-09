import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24" id="about">
      <div className="section-divider mb-32" />
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-6"
          >
            // About
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight"
          >
            I build scalable
            <br />
            <span className="gradient-text">digital solutions</span>
          </motion.h2>
        </div>

        <div className="flex flex-col gap-8">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Full Stack Developer with 9+ years delivering high-quality websites, web applications, and scalable digital solutions. Strong focus on Frontend development with deep expertise in Shopify, JavaScript, modern frameworks, and performance optimization.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Experienced in system integrations, SEO best practices, and leading technical teams. Skilled in building complete products — web apps, tools, scripts, extensions, and even game prototypes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-8 mt-8"
          >
            {[
              { number: "9+", label: "Years Experience" },
              { number: "6+", label: "Companies" },
              { number: "3", label: "Languages Spoken" },
              { number: "∞", label: "Lines of Code" },
            ].map((stat, i) => (
              <div key={i} className="border-l border-primary/30 pl-4">
                <span className="text-3xl font-bold text-primary">{stat.number}</span>
                <p className="text-sm text-muted-foreground mt-1 font-mono">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
