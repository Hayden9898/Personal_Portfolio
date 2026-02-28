"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { education } from "@/data/portfolio";
import { EASE_CINEMATIC } from "@/lib/motion";
import { HoverRow } from "./HoverRow";

export function Education() {
  return (
    <motion.section
      className="py-4"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.35, ease: EASE_CINEMATIC }}
    >
      <h2 className="text-xs font-medium text-muted uppercase tracking-widest mb-3 max-w-xl mx-auto px-6 md:px-12">
        Education
      </h2>
      <HoverRow href={education.schoolUrl}>
        <div className="flex items-center gap-3">
          <Image
            src={education.logo}
            alt={education.school}
            width={32}
            height={32}
            className="rounded shrink-0 object-contain"
          />
          <p className="text-primary">
            <span className="font-medium">{education.program}</span>
            <span className="text-link group-hover:text-link-hover text-xs border border-surface-3 group-hover:border-link/40 rounded-full px-2.5 py-0.5 ml-2 inline-block transition-colors duration-300">
              @ {education.school}
            </span>
          </p>
        </div>
      </HoverRow>
    </motion.section>
  );
}
