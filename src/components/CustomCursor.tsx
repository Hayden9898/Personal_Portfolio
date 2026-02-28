"use client";

import { useEffect, useRef, useCallback } from "react";

interface Burst {
  x: number;
  y: number;
  time: number;
}

const LINE_COUNT = 8;
const LINE_LENGTH = 12;
const BURST_DURATION = 400;

export function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const burstsRef = useRef<Burst[]>([]);
  const animatingRef = useRef(false);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const now = Date.now();
    const activeBursts = burstsRef.current.filter(
      (b) => now - b.time < BURST_DURATION
    );
    burstsRef.current = activeBursts;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const dpr = window.devicePixelRatio || 1;

    for (const burst of activeBursts) {
      const elapsed = now - burst.time;
      const progress = elapsed / BURST_DURATION;
      const eased = 1 - (1 - progress) * (1 - progress); // ease out quad
      const opacity = 1 - progress;

      ctx.strokeStyle = `rgba(196, 122, 58, ${opacity * 0.7})`;
      ctx.lineWidth = 1.5 * dpr;
      ctx.lineCap = "round";

      for (let i = 0; i < LINE_COUNT; i++) {
        const angle = (i / LINE_COUNT) * Math.PI * 2;
        const innerR = 4 * eased * dpr;
        const outerR = (4 + LINE_LENGTH * eased) * dpr;

        const x = burst.x * dpr;
        const y = burst.y * dpr;

        ctx.beginPath();
        ctx.moveTo(
          x + Math.cos(angle) * innerR,
          y + Math.sin(angle) * innerR
        );
        ctx.lineTo(
          x + Math.cos(angle) * outerR,
          y + Math.sin(angle) * outerR
        );
        ctx.stroke();
      }
    }

    if (activeBursts.length > 0) {
      requestAnimationFrame(draw);
    } else {
      animatingRef.current = false;
    }
  }, []);

  const startAnimation = useCallback(() => {
    if (!animatingRef.current) {
      animatingRef.current = true;
      requestAnimationFrame(draw);
    }
  }, [draw]);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    const handleClick = (e: MouseEvent) => {
      burstsRef.current.push({ x: e.clientX, y: e.clientY, time: Date.now() });
      startAnimation();
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("click", handleClick);
    };
  }, [startAnimation]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[100] pointer-events-none"
    />
  );
}
