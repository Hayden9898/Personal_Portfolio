"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { education } from "@/data/portfolio";
import { EASE_CINEMATIC } from "@/lib/motion";
import { HoverRow } from "./HoverRow";
import { HoverPreview } from "./HoverPreview";

const previews = [
  { src: education.preview, alt: `${education.school} website` },
];

export function Education() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <motion.section
        className="py-4"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35, ease: EASE_CINEMATIC }}
      >
        <h2 className="text-xs font-medium text-muted uppercase tracking-widest mb-3 max-w-xl mx-auto px-6 md:px-12">
          Education
        </h2>
        <div ref={listRef} onMouseLeave={() => setActiveIndex(null)}>
          <HoverRow
            href={education.schoolUrl}
            onHover={() => setActiveIndex(0)}
          >
            <div data-preview-anchor className="flex items-center gap-3 w-fit">
              <Image
                src={education.logo}
                alt={education.school}
                width={32}
                height={32}
                className="rounded shrink-0 object-contain"
              />
              <div className="flex flex-col">
                <p className="text-primary">
                  <span className="font-medium">{education.program}</span>
                  <span className="text-link group-hover:text-link-hover text-xs border border-surface-3 group-hover:border-link/40 rounded-full px-2.5 py-0.5 ml-2 inline-block transition-colors duration-300">
                    @ {education.school}
                  </span>
                </p>
                <span className="text-[11px] text-[#888] mt-0.5">
                  {education.expectedGraduation}
                </span>
              </div>
            </div>
          </HoverRow>
        </div>
      </motion.section>
      <HoverPreview
        images={previews}
        activeIndex={activeIndex}
        listRef={listRef}
      />
    </>
  );
}
