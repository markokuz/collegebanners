import { CONTACT_EMAIL } from "@/lib/posters";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
        <div className="text-center sm:text-left">
          <p className="font-display text-lg font-bold text-fg">
            college<span className="text-accent">banners</span>
          </p>
          <p className="mt-2 text-sm text-muted">
            © {new Date().getFullYear()} Collegebanners
          </p>
        </div>

        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-sm font-medium text-fg underline-offset-4 hover:text-accent hover:underline"
        >
          {CONTACT_EMAIL}
        </a>
      </div>
    </footer>
  );
}
