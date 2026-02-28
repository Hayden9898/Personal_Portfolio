"use client";

import { useEffect, useRef } from "react";

interface Mote {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speedX: number;
  speedY: number;
  wobblePhase: number;
  wobbleSpeed: number;
  fadePhase: number;
  fadeSpeed: number;
}

export function CinematicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const MOTE_COUNT = 150;
    const motes: Mote[] = [];

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      canvas!.width = window.innerWidth * dpr;
      canvas!.height = window.innerHeight * dpr;
      canvas!.style.width = `${window.innerWidth}px`;
      canvas!.style.height = `${window.innerHeight}px`;
      ctx!.scale(dpr, dpr);
    }

    function createMote(): Mote {
      return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: 1 + Math.random() * 2.5,
        opacity: 0,
        speedX: (Math.random() - 0.5) * 0.15,
        speedY: -0.1 - Math.random() * 0.25,
        wobblePhase: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.005 + Math.random() * 0.01,
        fadePhase: Math.random() * Math.PI * 2,
        fadeSpeed: 0.008 + Math.random() * 0.008,
      };
    }

    for (let i = 0; i < MOTE_COUNT; i++) {
      motes.push(createMote());
    }

    function draw() {
      ctx!.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (const mote of motes) {
        // Gentle wobble on X axis
        mote.wobblePhase += mote.wobbleSpeed;
        const wobbleX = Math.sin(mote.wobblePhase) * 0.3;

        mote.x += mote.speedX + wobbleX;
        mote.y += mote.speedY;

        // Breathing opacity
        mote.fadePhase += mote.fadeSpeed;
        mote.opacity = 0.04 + Math.sin(mote.fadePhase) * 0.04 + 0.04;

        // Reset if off screen
        if (
          mote.y < -10 ||
          mote.x < -10 ||
          mote.x > window.innerWidth + 10
        ) {
          mote.x = Math.random() * window.innerWidth;
          mote.y = window.innerHeight + 10;
          mote.fadePhase = 0;
        }

        ctx!.beginPath();
        ctx!.arc(mote.x, mote.y, mote.size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(170, 150, 120, ${mote.opacity})`;
        ctx!.fill();
      }

      animationId = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      <div
        className="absolute inset-0"
        style={{ background: "#F7F5F0" }}
      />
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="grain" />
    </div>
  );
}
