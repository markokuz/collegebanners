import { SectionReveal } from "@/components/SectionReveal";

const CHIPS = ["Recent grads", "Campus popups", "Curator picks"] as const;

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            About us
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl md:text-5xl">
            Built by students, for students.
          </h2>
          <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-muted">
            <p>
              Collegebanners is run by two recent university graduates who still
              remember dorm move-in, cramped walls, and the hunt for something
              that actually feels like you. We started this because we get what
              students want: bold prints, familiar artists, and prices that make
              sense for a weekend popup.
            </p>
            <p>
              Every campus stop is built around curator picks we would hang
              ourselves, from film and music to design and pop culture. Our own
              designs are rare. Most of the wall comes from brands and artists
              students already talk about, chosen with the same eye we used when
              we were walking those hallways.
            </p>
          </div>
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
