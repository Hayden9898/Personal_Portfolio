"use client";

import { motion } from "framer-motion";
import { EASE_CINEMATIC } from "@/lib/motion";

export function Hero() {
  return (
    <section className="flex items-center justify-center px-6 pt-8 pb-10">
      <motion.h1
        className="font-serif text-3xl md:text-4xl text-primary text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: EASE_CINEMATIC }}
      >
        Hey, my name is Hayden!
      </motion.h1>
    </section>
  );
}
