"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { EASE_CINEMATIC } from "@/lib/motion";

const WIDTH = 344;
const HEIGHT = 179;
const CURSOR_OFFSET = 28;
const CONTENT_GAP = 32;
const EDGE_GAP = 16;
const FOLLOW_SPRING = { stiffness: 220, damping: 28, mass: 0.6 };

export function HoverPreview({
  images,
  activeIndex,
  listRef,
}: {
  images: { src: string; alt: string }[];
  activeIndex: number | null;
  listRef: React.RefObject<HTMLElement | null>;
}) {
  const visible = activeIndex !== null;
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(mouseX, FOLLOW_SPRING);
  const y = useSpring(mouseY, FOLLOW_SPRING);
  const fullyHidden = useRef(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (visible) fullyHidden.current = false;
  }, [visible]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const anchors = listRef.current?.querySelectorAll("[data-preview-anchor]") ?? [];
      const contentRight = Math.max(
        0,
        ...Array.from(anchors, (el) => el.getBoundingClientRect().right)
      );
      const targetX = Math.min(
        Math.max(e.clientX + CURSOR_OFFSET, contentRight + CONTENT_GAP),
        window.innerWidth - WIDTH - EDGE_GAP
      );
      const targetY = Math.min(
        Math.max(e.clientY - HEIGHT / 2, EDGE_GAP),
        window.innerHeight - HEIGHT - EDGE_GAP
      );
      mouseX.set(targetX);
      mouseY.set(targetY);
      if (fullyHidden.current || reduceMotion) {
        x.jump(targetX);
        y.jump(targetY);
      }
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [listRef, reduceMotion, mouseX, mouseY, x, y]);

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 z-40 pointer-events-none max-lg:hidden pointer-coarse:hidden"
      style={{ x, y, width: WIDTH, height: HEIGHT }}
    >
      <motion.div
        className="relative w-full h-full overflow-hidden rounded-lg border border-surface-3 bg-surface-1 shadow-[0_12px_32px_-8px_rgba(26,26,30,0.25)]"
        initial={false}
        animate={
          visible
            ? { opacity: 1, scale: 1, filter: "blur(0px)" }
            : reduceMotion
              ? { opacity: 0 }
              : { opacity: 0, scale: 0.92, filter: "blur(4px)" }
        }
        transition={{ duration: visible ? 0.4 : 0.25, ease: EASE_CINEMATIC }}
        onAnimationComplete={() => {
          if (!visible) fullyHidden.current = true;
        }}
        style={{ transformOrigin: "left center" }}
      >
        {images.map((image, i) => (
          <motion.div
            key={image.src}
            className="absolute inset-0"
            initial={false}
            animate={{
              opacity: activeIndex === i ? 1 : 0,
              scale: activeIndex === i ? 1 : 1.06,
            }}
            transition={{ duration: 0.45, ease: EASE_CINEMATIC }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={`${WIDTH}px`}
              loading="eager"
              className="object-cover object-top"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
