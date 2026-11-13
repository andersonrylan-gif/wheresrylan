import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Things I've built.",
};

export default function ProjectsPage() {
  return (
    <PageShell title="Projects" intro="Things I've built, newest first.">
      {projects.map((p) => (
        <article
          key={p.slug}
          id={p.slug}
          className="scroll-mt-10 border-t border-line py-12 first:border-t-0 first:pt-0"
        >
          <p className="eyebrow text-faint">{p.year}</p>
          <h2 className="mt-2 font-serif text-3xl leading-tight">{p.name}</h2>
          <p className="mt-3 text-lg text-ink">{p.tagline}</p>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
            {p.description.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
          <p className="mt-6 text-sm text-faint">{p.stack.join(" · ")}</p>
          <div className="mt-5 flex flex-wrap gap-6">
            {p.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="eyebrow link"
              >
                {l.label} →
              </a>
            ))}
          </div>
        </article>
      ))}
    </PageShell>
  );
}
