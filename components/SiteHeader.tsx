"use client";

import { NAV_SECTIONS, type NavSectionId } from "@/lib/constants";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [active, setActive] = useState<NavSectionId | null>(null);

  useEffect(() => {
    const sections = NAV_SECTIONS.map((s) => document.getElementById(s.id)).filter(
      Boolean
    ) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActive(visible[0].target.id as NavSectionId);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#"
          className="font-display text-lg font-bold tracking-tight text-fg"
          aria-label="Posterized home"
        >
          poster<span className="text-accent">i</span>zed
        </a>
        <nav className="flex items-center gap-4 sm:gap-8" aria-label="Main">
          {NAV_SECTIONS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`relative text-xs font-medium transition-colors hover:text-fg sm:text-sm ${
                active === id ? "text-fg" : "text-muted"
              }`}
            >
              {label}
              {active === id && (
                <span
                  className="absolute -bottom-1 left-0 h-0.5 w-full bg-accent"
                  aria-hidden
                />
              )}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
