import type { Metadata } from "next";
import { PageShell, Section } from "@/components/PageShell";
import { fun } from "@/content/fun";

export const metadata: Metadata = {
  title: "Fun",
  description: "Everything else.",
};

export default function FunPage() {
  return (
    <PageShell title="Fun" intro={fun.intro}>
      {fun.lists.map((l) => (
        <Section key={l.label} label={l.label}>
          <ul className="space-y-2">
            {l.items.map((item) => (
              <li key={item} className="font-serif text-xl">
                {item}
              </li>
            ))}
          </ul>
        </Section>
      ))}
    </PageShell>
  );
}
