import type { Metadata } from "next";
import { PageShell, Section } from "@/components/PageShell";
import { professional } from "@/content/professional";

export const metadata: Metadata = {
  title: "Professional",
  description: "Work and experience.",
};

export default function ProfessionalPage() {
  return (
    <PageShell title="Professional" intro={professional.intro}>
      {professional.roles.map((r) => (
        <Section key={r.title + r.org} label={r.when}>
          <h3 className="font-serif text-2xl leading-snug">
            {r.title}
            <span className="text-muted"> · {r.org}</span>
          </h3>
          <p className="text-muted">{r.summary}</p>
        </Section>
      ))}
      <Section label="Elsewhere">
        <p className="text-muted">
          Full history on LinkedIn. Links are at the bottom of every page.
        </p>
      </Section>
    </PageShell>
  );
}
