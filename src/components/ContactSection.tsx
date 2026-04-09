import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24" id="contact">
      <div className="section-divider mb-32" />
      <div ref={ref} className="text-center max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-6"
        >
          // Get in Touch
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
        >
          Let's build
          <br />
          <span className="text-stroke">something great</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-muted-foreground mb-12 max-w-lg mx-auto"
        >
          Have a project in mind? I'd love to hear about it. Let's create something extraordinary together.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          href="mailto:hello@yourname.dev"
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-full font-semibold text-lg transition-shadow duration-300 hover:shadow-[0_0_40px_hsl(72_100%_50%/0.3)]"
        >
          Say Hello
          <span className="text-xl">↗</span>
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex justify-center gap-8 mt-16"
        >
          {["GitHub", "LinkedIn", "Twitter", "Dribbble"].map((social) => (
            <a
              key={social}
              href="#"
              className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {social}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-32 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} — Designed & Built with passion
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          Available for freelance
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
