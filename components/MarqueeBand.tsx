const MARQUEE_ITEMS = [
  { text: "POSTERIZED", accent: true },
  { text: "CAMPUS POPUPS", accent: false },
  { text: "UNIVERSITIES", accent: true },
  { text: "RESELLER PICKS", accent: false },
  { text: "MIXED STYLES", accent: true },
  { text: "POP UP SHOP", accent: false },
] as const;

function MarqueeContent() {
  return (
    <>
      {MARQUEE_ITEMS.map((item, i) => (
        <span key={i} className="mx-6 inline-flex items-center gap-6">
          <span
            className={`font-display text-4xl font-extrabold uppercase tracking-tight sm:text-5xl md:text-6xl ${
              item.accent
                ? "text-transparent [-webkit-text-stroke:2px_var(--accent)]"
                : "text-fg"
            }`}
          >
            {item.text}
          </span>
          <span className="text-accent" aria-hidden>
            ·
          </span>
        </span>
      ))}
    </>
  );
}

export function MarqueeBand() {
  return (
    <div
      className="overflow-hidden border-y border-border bg-bg py-8"
      aria-hidden
    >
      <div className="marquee-track flex w-max whitespace-nowrap">
        <div className="flex">
          <MarqueeContent />
        </div>
        <div className="flex">
          <MarqueeContent />
        </div>
      </div>
    </div>
  );
}
