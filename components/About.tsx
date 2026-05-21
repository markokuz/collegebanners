import { SectionReveal } from "@/components/SectionReveal";

const CHIPS = ["Campus popups", "Reseller picks", "Mixed styles"] as const;

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            About
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl md:text-5xl">
            We bring the posters. You bring the campus.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Posterized resells prints we love — film, music, design, and pop
            culture — at university popups across the country. Our own designs
            are rare; the wall is mostly picks from brands and artists we trust.
          </p>
          <ul className="mt-10 flex flex-wrap gap-3">
            {CHIPS.map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-border px-5 py-2 text-sm font-medium text-fg"
              >
                {chip}
              </li>
            ))}
          </ul>
        </SectionReveal>
      </div>
    </section>
  );
}
