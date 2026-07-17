"use client";

import type { WorkItem } from "@/lib/posters";
import {
  motion,
  type MotionValue,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useRef } from "react";

type PosterCardProps = {
  item: WorkItem;
  styleY?: MotionValue<number>;
};

export function PosterCard({ item, styleY }: PosterCardProps) {
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
      className="group cursor-default border border-border bg-bg transition-shadow hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]"
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
      <div className="flex min-h-[120px] items-center px-6 py-8">
        <span className="font-display text-lg font-bold uppercase tracking-widest text-fg">
          {item.label}
        </span>
      </div>
      <div className="flex items-center justify-between border-t border-border px-4 py-3">
        <span className="text-xs text-muted">Category</span>
        <span className="text-xs text-muted">#{item.id}</span>
      </div>
    </motion.article>
  );
}
