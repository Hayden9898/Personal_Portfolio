"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { education } from "@/data/portfolio";
import { EASE_CINEMATIC } from "@/lib/motion";

export function Education() {
  return (
    <motion.section
      className="px-6 md:px-12 py-4 max-w-xl mx-auto"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.35, ease: EASE_CINEMATIC }}
    >
      <h2 className="text-xs font-medium text-muted uppercase tracking-widest mb-3">
        Education
      </h2>
      <div className="flex items-center gap-3">
        <Image
          src={education.logo}
          alt={education.school}
          width={28}
          height={28}
          className="rounded shrink-0 object-contain"
        />
        <p className="text-primary">
          <span className="font-medium">{education.program}</span>
          <span className="text-secondary"> @ {education.school}</span>
        </p>
      </div>
    </motion.section>
  );
}
