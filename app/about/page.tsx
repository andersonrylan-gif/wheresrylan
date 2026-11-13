import type { Metadata } from "next";
import { PageShell, Section } from "@/components/PageShell";
import { about } from "@/content/about";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}.`,
};

export default function AboutPage() {
  return (
    <PageShell title="About" intro={about.intro}>
      {about.sections.map((s) => (
        <Section key={s.label} label={s.label}>
          {s.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Section>
      ))}
      <Section label="Say hello">
        <p>
          <a href={`mailto:${site.email}`} className="link">
            {site.email}
          </a>
        </p>
      </Section>
    </PageShell>
  );
}
