import { CONTACT_EMAIL } from "@/lib/posters";

const SOCIAL_PLACEHOLDERS = ["Instagram", "TikTok", "Pinterest"] as const;

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 sm:flex-row sm:items-end">
        <div className="text-center sm:text-left">
          <p className="font-display text-lg font-bold text-fg">
            poster<span className="text-accent">i</span>zed
          </p>
          <p className="mt-2 text-sm text-muted">
            © {new Date().getFullYear()} Posterized
          </p>
        </div>

        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-sm font-medium text-fg underline-offset-4 hover:text-accent hover:underline"
        >
          {CONTACT_EMAIL}
        </a>

        <ul className="flex gap-6" aria-label="Social links (coming soon)">
          {SOCIAL_PLACEHOLDERS.map((name) => (
            <li key={name}>
              <span
                className="cursor-not-allowed text-sm text-muted opacity-50"
                title="Add your link later"
                aria-disabled
              >
                {name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
