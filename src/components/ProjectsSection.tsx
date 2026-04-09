import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    title: "Nebula Dashboard",
    category: "Web App",
    tech: ["React", "TypeScript", "D3.js"],
    description: "Real-time analytics dashboard with interactive data visualizations and AI-powered insights.",
    year: "2024",
  },
  {
    title: "Pulse Commerce",
    category: "E-Commerce",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
    description: "High-performance headless commerce platform with sub-second page loads and dynamic personalization.",
    year: "2024",
  },
  {
    title: "Synthwave Studio",
    category: "Creative Tool",
    tech: ["WebGL", "Three.js", "WASM"],
    description: "Browser-based 3D audio visualizer that transforms music into immersive visual experiences.",
    year: "2023",
  },
  {
    title: "Vertex Protocol",
    category: "Web3",
    tech: ["Solidity", "React", "GraphQL"],
    description: "Decentralized exchange interface with real-time order book and portfolio analytics.",
    year: "2023",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative border-t border-border py-10 md:py-14 cursor-pointer"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-3">
            <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
            <span className="font-mono text-xs text-primary">{project.category}</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight transition-colors duration-300 group-hover:text-primary">
            {project.title}
          </h3>
        </div>

        <motion.div
          initial={false}
          animate={{ width: isHovered ? "auto" : 0, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden hidden md:block"
        >
          <p className="text-muted-foreground max-w-xs text-sm leading-relaxed whitespace-nowrap md:whitespace-normal">
            {project.description}
          </p>
        </motion.div>

        <div className="flex gap-2 flex-wrap">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground group-hover:border-primary/40 group-hover:text-primary transition-colors duration-300"
            >
              {t}
            </span>
          ))}
        </div>

        <motion.div
          animate={{ x: isHovered ? 0 : -10, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="hidden md:block text-primary text-2xl"
        >
          →
        </motion.div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24" id="projects">
      <div className="section-divider mb-32" />
      <div ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-6"
        >
          // Selected Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-16"
        >
          Projects
        </motion.h2>

        <div>
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
        <div className="border-t border-border" />
      </div>
    </section>
  );
};

export default ProjectsSection;
