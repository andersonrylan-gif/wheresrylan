import Link from "next/link";
import { site, socials } from "@/content/site";

export function Header() {
  return (
    <header className="flex flex-col gap-3 border-b-[length:var(--rule)] border-ink px-4 py-4 sm:px-8 sm:py-6 md:flex-row md:items-start md:justify-between">
      <div>
        <Link
          href="/"
          className="block font-display text-2xl uppercase leading-none tracking-tight sm:text-3xl"
        >
          {site.name}
        </Link>
        <a
          href={`mailto:${site.email}`}
          className="link mt-1 inline-block text-xs tracking-[0.1em]"
        >
          {site.email}
        </a>
      </div>
      <nav aria-label="Elsewhere">
        <ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-semibold uppercase tracking-[0.12em] sm:gap-x-5 sm:text-sm sm:tracking-[0.15em]">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                className="link"
                rel="me noopener noreferrer"
                target={s.href.startsWith("mailto:") ? undefined : "_blank"}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
