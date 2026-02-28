"use client";

import { motion } from "framer-motion";

function Particle({ index }: { index: number }) {
  const left = `${(index * 37 + 13) % 100}%`;
  const top = `${(index * 53 + 7) % 100}%`;
  const duration = 12 + (index % 5) * 4;
  const delay = index * 0.8;
  const size = 1.5 + (index % 3) * 0.5;

  return (
    <motion.div
      className="absolute rounded-full bg-amber"
      style={{
        width: size,
        height: size,
        left,
        top,
        opacity: 0,
      }}
      animate={{
        opacity: [0, 0.2, 0.15, 0],
        y: [0, -40, -80],
        x: [0, (index % 2 === 0 ? 1 : -1) * 15],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}

export function CinematicBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Radial amber glow */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(212,146,58,0.07) 0%, transparent 70%)",
        }}
        animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Sparse floating particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <Particle key={i} index={i} />
      ))}

      {/* Grain overlay */}
      <div className="grain" />
    </div>
  );
}
