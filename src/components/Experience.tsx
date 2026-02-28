"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";
import { EASE_CINEMATIC } from "@/lib/motion";
import { HoverRow } from "./HoverRow";

export function Experience() {
  return (
    <section className="py-4">
      <motion.h2
        className="text-xs font-medium text-muted uppercase tracking-widest mb-3 max-w-xl mx-auto px-6 md:px-12"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4, ease: EASE_CINEMATIC }}
      >
        Work
      </motion.h2>
      <div className="flex flex-col gap-1">
        {experience.map((job, i) => (
          <HoverRow
            key={`${job.role}-${job.company}`}
            href={job.companyUrl}
            delay={0.45 + i * 0.1}
          >
            <div className="flex items-center gap-3">
              {job.logo ? (
                <Image
                  src={job.logo}
                  alt={job.company}
                  width={28}
                  height={28}
                  className="rounded shrink-0 object-contain"
                />
              ) : (
                <div className="w-7 h-7 rounded bg-surface-2 shrink-0 flex items-center justify-center">
                  <span className="text-xs text-secondary font-medium">
                    {job.company[0]}
                  </span>
                </div>
              )}
              <p className="text-primary text-sm flex items-center gap-2 flex-wrap">
                <span className="font-medium">{job.role}</span>
                <span className="text-link group-hover:text-link-hover text-xs border border-surface-3 group-hover:border-link/40 rounded-full px-2.5 py-0.5 transition-colors duration-300">
                  @ {job.company}
                </span>
              </p>
            </div>
          </HoverRow>
        ))}
      </div>
    </section>
  );
}
