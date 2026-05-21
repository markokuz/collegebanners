import { SectionReveal } from "@/components/SectionReveal";
import { CONTACT_EMAIL } from "@/lib/posters";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-border px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl text-center">
        <SectionReveal>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Contact
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl md:text-5xl">
            Book us on your campus?
          </h2>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-12 inline-flex items-center rounded-full bg-accent px-10 py-4 font-display text-lg font-bold tracking-tight text-fg transition-transform hover:scale-105 active:scale-95"
          >
            {CONTACT_EMAIL}
          </a>
        </SectionReveal>
      </div>
    </section>
  );
}
