"use client";

import { motion } from "framer-motion";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { projects } from "@/data/portfolio";
import { SectionReveal } from "./SectionReveal";
import { EASE_CINEMATIC } from "@/lib/motion";

export function Projects() {
  return (
    <SectionReveal>
      <section className="px-6 md:px-12 py-12 max-w-2xl mx-auto">
        <motion.div
          className="flex flex-col gap-5"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            animate: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.name}
              className="flex items-center justify-between py-3 border-b border-surface-3/50"
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: EASE_CINEMATIC },
                },
              }}
            >
              <span className="text-bone font-medium">{project.name}</span>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ash hover:text-amber transition-colors duration-300"
                aria-label={`${project.name} on GitHub`}
              >
                <SiGithub size={18} />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </SectionReveal>
  );
}
