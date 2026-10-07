import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Things I've built.",
};

export default function ProjectsPage() {
  return (
    <main className="flex-1 px-4 py-8 sm:px-8 sm:py-12">
      <Link
        href="/"
        className="link text-sm font-semibold uppercase tracking-[0.2em]"
      >
        ← Back
      </Link>
      <h1 className="mt-6 font-display text-[clamp(3rem,13vw,11rem)] uppercase leading-[0.85] tracking-tighter">
        Projects
      </h1>

      <div className="mt-12 grid gap-10 border-t-[length:var(--rule)] border-ink pt-10 md:grid-cols-[14rem_1fr]">
        <nav aria-label="Projects" className="md:sticky md:top-8 md:self-start">
          <ol className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold uppercase tracking-[0.2em] md:flex-col">
            {projects.map((p) => (
              <li key={p.slug}>
                <a href={`#${p.slug}`} className="link">
                  {p.name}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div>
          {projects.map((p, i) => (
            <section
              key={p.slug}
              id={p.slug}
              className="scroll-mt-8 border-b border-ink pb-12 pt-12 first:pt-0 last:border-b-0"
            >
              <div className="flex items-baseline justify-between gap-4 text-sm font-semibold uppercase tracking-[0.2em]">
                <span>{String(i + 1).padStart(2, "0")}</span>
                <span>{p.year}</span>
              </div>
              <h2 className="mt-3 font-display text-[clamp(2.25rem,6vw,4.5rem)] uppercase leading-[0.9] tracking-tight break-words">
                {p.name}
              </h2>
              <p className="mt-4 text-xl font-semibold">{p.tagline}</p>
              <div className="mt-4 max-w-2xl space-y-4 text-lg leading-relaxed">
                {p.description.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li
                    key={s}
                    className="border-2 border-ink px-2 py-1 text-xs font-semibold uppercase tracking-[0.15em]"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                {p.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-ink px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-paper transition-colors hover:bg-paper hover:text-ink hover:outline hover:outline-[length:var(--rule)] hover:outline-ink"
                  >
                    {l.label} →
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
