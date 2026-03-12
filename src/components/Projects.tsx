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
            delay={0.6 + i * 0.1}
          >
            <div className="flex items-center justify-between">
              <a
                href={project.liveUrl ?? project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-sm font-medium no-underline"
              >
                {project.name}
              </a>
              <div className="flex items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-300 hover:scale-150"
                  >
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-secondary group-hover:text-primary transition-colors duration-300"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:scale-150"
                >
                  <SiGithub
                    size={16}
                    className="text-secondary group-hover:text-primary transition-colors duration-300"
                  />
                </a>
              </div>
            </div>
          </HoverRow>
        ))}
      </div>
    </section>
  );
}
