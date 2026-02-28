"use client";

import { motion } from "framer-motion";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { projects } from "@/data/portfolio";
import { EASE_CINEMATIC } from "@/lib/motion";
import { HoverRow } from "./HoverRow";

export function Projects() {
  return (
    <section className="py-4">
      <motion.h2
        className="text-xs font-medium text-muted uppercase tracking-widest mb-3 max-w-xl mx-auto px-6 md:px-12"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.55, ease: EASE_CINEMATIC }}
      >
        Projects
      </motion.h2>
      <div className="flex flex-col gap-1">
        {projects.map((project, i) => (
          <HoverRow
            key={project.name}
            href={project.githubUrl}
            delay={0.6 + i * 0.1}
          >
            <div className="flex items-center justify-between">
              <span className="text-primary text-sm font-medium">
                {project.name}
              </span>
              <SiGithub size={16} className="text-secondary group-hover:text-primary transition-colors duration-300" />
            </div>
          </HoverRow>
        ))}
      </div>
    </section>
  );
}
