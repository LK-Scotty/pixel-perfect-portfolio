import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  { name: "JavaScript / TypeScript", level: 95 },
  { name: "React / Vue / Angular", level: 92 },
  { name: "Shopify / Liquid", level: 95 },
  { name: "Node.js / Laravel", level: 88 },
  { name: "HTML / CSS / SASS", level: 97 },
  { name: "Docker / AWS / K8s", level: 80 },
  { name: "SEO / Performance", level: 85 },
  { name: "MySQL / SQLite / NoSQL", level: 82 },
];

const marqueeItems = [
  "React", "TypeScript", "Shopify", "Node.js", "Vue", "Angular",
  "Laravel", "Docker", "AWS", "jQuery", "Liquid", "PHP",
];

const SkillsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32" id="skills">
      <div className="px-6 md:px-12 lg:px-24">
        <div className="section-divider mb-32" />
      </div>

      {/* Marquee */}
      <div className="overflow-hidden py-12 border-y border-border mb-24">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="text-6xl md:text-8xl font-bold text-foreground/5 mx-8 select-none"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="px-6 md:px-12 lg:px-24" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-6"
        >
          // Skills & Tools
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-16"
        >
          Tech Stack
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-sm">{skill.name}</span>
                <span className="font-mono text-xs text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-1 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1.2, delay: 0.3 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full bg-primary rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
