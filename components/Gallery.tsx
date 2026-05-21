"use client";

import { PosterCard } from "@/components/PosterCard";
import { SectionReveal } from "@/components/SectionReveal";
import { posterPresets, type PosterPreset } from "@/lib/posters";
import { useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

export function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section
      id="work"
      ref={ref}
      className="scroll-mt-24 border-t border-border px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Work
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl md:text-5xl">
            What we bring to campus.
          </h2>
        </SectionReveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posterPresets.map((poster, i) => (
            <ParallaxCard
              key={poster.id}
              poster={poster}
              index={i}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ParallaxCard({
  poster,
  index,
  scrollYProgress,
}: {
  poster: PosterPreset;
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const base = (index % 3) - 1;
  const y = useTransform(scrollYProgress, [0, 1], [base * 24, base * -24]);
  return <PosterCard poster={poster} styleY={y} />;
}
