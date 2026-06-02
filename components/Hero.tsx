"use client";

import { PosterMedia } from "@/components/PosterMedia";
import { heroStackPresets } from "@/lib/posters";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (reduced || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative flex min-h-screen items-center overflow-x-clip pt-16"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
    >
      <div className="mesh-bg" aria-hidden />
      <div className="relative z-10 mx-auto grid w-full min-w-0 max-w-6xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center">
        <div className="relative z-20 min-w-0 w-full">
          <motion.h1
            className="font-display max-w-full text-[clamp(2.25rem,11.5vw,3.5rem)] font-extrabold leading-[0.95] tracking-tight text-fg sm:text-6xl md:text-7xl lg:text-8xl"
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            poster
            <span className="text-accent">i</span>
            zed
          </motion.h1>
          <motion.p
            className="mt-6 max-w-sm text-lg text-muted"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Campus popups. Posters you want.
          </motion.p>
          <motion.a
            href="#contact"
            className="mt-10 inline-flex items-center rounded-full border border-fg bg-fg px-8 py-3 text-sm font-semibold text-bg transition-colors hover:bg-accent hover:border-accent hover:text-fg"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Get in touch
          </motion.a>
        </div>

        <div className="relative z-10 mx-auto h-[420px] w-full max-w-md sm:h-[480px] lg:ml-auto lg:translate-x-10 xl:translate-x-14">
          {heroStackPresets.map((poster, i) => (
            <FloatingPoster
              key={poster.id}
              poster={poster}
              index={i}
              springX={springX}
              springY={springY}
              reduced={!!reduced}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FloatingPoster({
  poster,
  index,
  springX,
  springY,
  reduced,
}: {
  poster: (typeof heroStackPresets)[number];
  index: number;
  springX: ReturnType<typeof useSpring>;
  springY: ReturnType<typeof useSpring>;
  reduced: boolean;
}) {
  const depth = (index + 1) * 12;
  const x = useTransform(springX, (v) => (reduced ? 0 : v * depth));
  const y = useTransform(springY, (v) => (reduced ? 0 : v * depth));
  const offsets = [
    { top: "8%", left: "18%", z: 4 },
    { top: "18%", left: "38%", z: 3 },
    { top: "32%", left: "22%", z: 2 },
    { top: "42%", left: "48%", z: 1 },
  ];
  const pos = offsets[index] ?? offsets[0];

  return (
    <motion.div
      className="absolute w-[55%] border border-border bg-bg shadow-2xl"
      style={{
        top: pos.top,
        left: pos.left,
        zIndex: pos.z,
        x,
        y,
        rotate: poster.rotate ?? 0,
      }}
      initial={reduced ? false : { opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
    >
      <PosterMedia
        poster={poster}
        priority={index === 0}
        sizes="(max-width: 1024px) 55vw, 280px"
      />
      <div className="border-t border-border px-3 py-2">
        <span className="font-display text-xs font-semibold uppercase tracking-widest text-muted">
          {poster.label}
        </span>
      </div>
    </motion.div>
  );
}
