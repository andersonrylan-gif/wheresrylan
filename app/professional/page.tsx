import type { Metadata } from "next";
import { PageShell, Row } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Professional",
  description: "Work and experience.",
};

// TODO: replace with real roles, newest first.
const roles = [
  {
    when: "20XX — Now",
    title: "Your Title",
    org: "Company",
    summary: "One or two lines on what you own and the impact you've had.",
  },
  {
    when: "20XX — 20XX",
    title: "Previous Title",
    org: "Previous Company",
    summary: "What you did there and what you're proud of.",
  },
];

export default function ProfessionalPage() {
  return (
    <PageShell
      title="Professional"
      intro="TODO: a short paragraph on what you do, the kind of problems you like, and what you're looking for."
    >
      {roles.map((r) => (
        <Row key={r.title + r.org} label={r.when}>
          <h3 className="font-display text-2xl uppercase leading-tight sm:text-3xl">
            {r.title}
            <span className="block text-base font-sans font-semibold tracking-[0.15em]">
              {r.org}
            </span>
          </h3>
          <p>{r.summary}</p>
        </Row>
      ))}
      <Row label="Elsewhere">
        <p>
          Full history on LinkedIn. Links are at the top of every page.
        </p>
      </Row>
    </PageShell>
  );
}
