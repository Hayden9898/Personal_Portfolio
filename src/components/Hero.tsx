"use client";

import { motion } from "framer-motion";
import { EASE_CINEMATIC } from "@/lib/motion";

export function Hero() {
  return (
    <section className="flex min-h-[75vh] items-center justify-center px-6">
      <motion.h1
        className="font-serif text-5xl md:text-7xl lg:text-8xl text-bone text-center leading-tight"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease: EASE_CINEMATIC }}
      >
        Hey, my name is Hayden!
      </motion.h1>
    </section>
  );
}
