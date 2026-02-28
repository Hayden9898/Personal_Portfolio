"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { EASE_CINEMATIC } from "@/lib/motion";

const FULL_TEXT = "Hey, my name is Hayden!";

export function Hero() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayText(FULL_TEXT.slice(0, latest));
    });

    const controls = animate(count, FULL_TEXT.length, {
      duration: 1.5,
      delay: 0.4,
      ease: "easeOut",
    });

    controls.then(() => {
      setTimeout(() => setShowCursor(false), 800);
    });

    return () => {
      unsubscribe();
      controls.stop();
    };
  }, [count, rounded]);

  return (
    <section className="flex items-center justify-center px-6 pt-8 pb-10">
      <motion.h1
        className="font-serif text-3xl md:text-4xl text-primary text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2, ease: EASE_CINEMATIC }}
      >
        {displayText}
        {showCursor && (
          <motion.span
            className="inline-block w-[2px] h-[0.8em] bg-accent ml-0.5 align-baseline"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
          />
        )}
      </motion.h1>
    </section>
  );
}
