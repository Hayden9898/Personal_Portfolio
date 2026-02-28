"use client";

import { motion } from "framer-motion";
import { SocialLinks } from "./SocialLinks";
import { EASE_CINEMATIC } from "@/lib/motion";

export function TopBar() {
  return (
    <motion.nav
      className="flex justify-center px-6 py-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: EASE_CINEMATIC }}
    >
      <SocialLinks />
    </motion.nav>
  );
}
