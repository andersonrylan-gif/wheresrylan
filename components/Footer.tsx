import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="flex flex-col gap-1 border-t-[length:var(--rule)] border-ink px-4 py-4 text-xs uppercase tracking-[0.2em] sm:flex-row sm:justify-between sm:px-8">
      <span>
        © {site.name}
      </span>
      <span>Designed & built by me</span>
    </footer>
  );
}
