"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";
import { EASE_CINEMATIC } from "@/lib/motion";

export function Experience() {
  return (
    <section className="px-6 md:px-12 py-4 max-w-xl mx-auto">
      <motion.h2
        className="text-xs font-medium text-muted uppercase tracking-widest mb-3"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4, ease: EASE_CINEMATIC }}
      >
        Work
      </motion.h2>
      <div className="flex flex-col gap-3">
        {experience.map((job, i) => (
          <motion.div
            key={`${job.role}-${job.company}`}
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.45 + i * 0.1,
              ease: EASE_CINEMATIC,
            }}
          >
            {job.logo ? (
              <Image
                src={job.logo}
                alt={job.company}
                width={24}
                height={24}
                className="rounded shrink-0 object-contain"
              />
            ) : (
              <div className="w-6 h-6 rounded bg-surface-2 shrink-0 flex items-center justify-center">
                <span className="text-xs text-secondary font-medium">
                  {job.company[0]}
                </span>
              </div>
            )}
            <p className="text-primary text-sm">
              <span className="font-medium">{job.role}</span>{" "}
              <a
                href={job.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link hover:text-link-hover transition-colors duration-300"
              >
                @ {job.company}
              </a>
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
