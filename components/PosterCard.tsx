"use client";

import { PosterMedia } from "@/components/PosterMedia";
import type { PosterPreset } from "@/lib/posters";
import {
  motion,
  type MotionValue,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useRef } from "react";

type PosterCardProps = {
  poster: PosterPreset;
  styleY?: MotionValue<number>;
};

export function PosterCard({ poster, styleY }: PosterCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(x * 14);
    rotateX.set(-y * 14);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.article
      ref={ref}
      className="group cursor-default border border-border bg-bg transition-shadow hover:shadow-[0_0_40px_rgba(255,45,106,0.15)]"
      style={{
        y: styleY,
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformPerspective: 800,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={reduced ? undefined : { scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <PosterMedia
        poster={poster}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="flex items-center justify-between border-t border-border px-4 py-3">
        <span className="font-display text-xs font-semibold uppercase tracking-widest text-fg">
          {poster.label}
        </span>
        <span className="text-xs text-muted">#{poster.id}</span>
      </div>
    </motion.article>
  );
}
