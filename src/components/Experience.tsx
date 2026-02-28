"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";
import { SectionReveal } from "./SectionReveal";
import { EASE_CINEMATIC } from "@/lib/motion";

export function Experience() {
  return (
    <SectionReveal>
      <section className="px-6 md:px-12 py-12 max-w-2xl mx-auto">
        <motion.div
          className="flex flex-col gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            animate: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {experience.map((job) => (
            <motion.div
              key={`${job.role}-${job.company}`}
              className="flex items-start gap-4"
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: EASE_CINEMATIC },
                },
              }}
            >
              {/* Briefcase icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-amber shrink-0 mt-0.5"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
              <div>
                <p className="text-bone font-medium">
                  {job.role}{" "}
                  <a
                    href={job.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber hover:text-amber-hover transition-colors duration-300"
                  >
                    @ {job.company}
                  </a>
                </p>
                <p className="text-ash text-sm">{job.period}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </SectionReveal>
  );
}
