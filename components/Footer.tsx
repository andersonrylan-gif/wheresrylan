import { site, socials } from "@/content/site";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-2xl px-6 pt-20 pb-12 text-center">
      <div className="mx-auto mb-10 h-px w-12 bg-line" />
      <ul className="eyebrow flex flex-wrap justify-center gap-x-6 gap-y-2 text-muted">
        {socials.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              className="link-plain inline-block py-1"
              rel="me noopener noreferrer"
              target={s.href.startsWith("mailto:") ? undefined : "_blank"}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-xs text-faint">
        © {site.name} · Designed &amp; built by me
      </p>
    </footer>
  );
}
