"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { EASE_CINEMATIC } from "@/lib/motion";

export function SectionReveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: EASE_CINEMATIC }}
    >
      {children}
    </motion.div>
  );
}
