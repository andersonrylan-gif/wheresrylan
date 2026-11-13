import Link from "next/link";
import { GitHubStrip } from "@/components/GitHubStrip";
import { projects } from "@/content/projects";
import { intro, nav } from "@/content/site";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6">
      {/* Intro */}
      <section className="pt-12 pb-16 text-center sm:pt-20 sm:pb-20">
        <h1 className="font-serif text-4xl leading-tight sm:text-6xl">
          {intro.greeting}
        </h1>
        <div className="mx-auto mt-8 max-w-xl space-y-4 text-lg leading-relaxed text-muted">
          {intro.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <Link href="/about" className="eyebrow link mt-8 inline-block">
          More about me
        </Link>
      </section>

      {/* Explore */}
      <section aria-labelledby="explore" className="border-t border-line pt-12">
        <h2 id="explore" className="eyebrow text-center text-muted">
          Explore
        </h2>
        <ul className="mt-6">
          {nav.map((item) => (
            <li key={item.href} className="border-b border-line last:border-b-0">
              <Link
                href={item.href}
                className="group flex items-baseline justify-between gap-6 py-6"
              >
                <span className="font-serif text-2xl sm:text-3xl">{item.label}</span>
                <span className="flex items-baseline gap-3 text-sm text-muted">
                  <span className="hidden sm:inline">{item.blurb}</span>
                  <span
                    aria-hidden
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Latest projects */}
      <section aria-labelledby="latest" className="mt-12 border-t border-line pt-12">
        <h2 id="latest" className="eyebrow text-center text-muted">
          Latest projects
        </h2>
        <div className="mt-8 grid gap-10 sm:grid-cols-2">
          {projects.slice(0, 2).map((p) => (
            <Link key={p.slug} href={`/projects#${p.slug}`} className="group block">
              <p className="eyebrow text-faint">{p.year}</p>
              <h3 className="mt-2 font-serif text-2xl group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4">
                {p.name}
              </h3>
              <p className="mt-2 leading-relaxed text-muted">{p.tagline}</p>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/projects" className="eyebrow link">
            All projects
          </Link>
        </div>
      </section>

      <GitHubStrip />
    </main>
  );
}
