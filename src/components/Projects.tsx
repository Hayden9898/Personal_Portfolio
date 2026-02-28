"use client";

import { motion } from "framer-motion";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { projects } from "@/data/portfolio";
import { EASE_CINEMATIC } from "@/lib/motion";

export function Projects() {
  return (
    <section className="px-6 md:px-12 py-4 max-w-xl mx-auto">
      <motion.h2
        className="text-xs font-medium text-muted uppercase tracking-widest mb-3"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.55, ease: EASE_CINEMATIC }}
      >
        Projects
      </motion.h2>
      <div className="flex flex-col gap-2">
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            className="flex items-center justify-between py-2"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.6 + i * 0.1,
              ease: EASE_CINEMATIC,
            }}
          >
            <span className="text-primary text-sm font-medium">
              {project.name}
            </span>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors duration-300"
              aria-label={`${project.name} on GitHub`}
            >
              <SiGithub size={16} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
