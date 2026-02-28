"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { EASE_CINEMATIC } from "@/lib/motion";

export function HoverRow({
  href,
  children,
  delay = 0,
}: {
  href: string;
  children: React.ReactNode;
  delay?: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full py-2.5 cursor-pointer group no-underline"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="max-w-xl mx-auto px-6 md:px-12"
        initial={{ opacity: 0, y: 15 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: hovered ? 1.02 : 1,
        }}
        transition={{
          duration: 0.5,
          delay,
          ease: EASE_CINEMATIC,
          scale: { duration: 0.2, delay: 0 },
        }}
        style={{ transformOrigin: "left center" }}
      >
        {children}
      </motion.div>
    </a>
  );
}
