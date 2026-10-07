import type { Metadata } from "next";
import { PageShell, Row } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Who is Rylan?",
  description: "Everything else.",
};

// TODO: replace with your own lists.
const lists = [
  { label: "Reading", items: ["Book one", "Book two", "Book three"] },
  { label: "Listening", items: ["Album or podcast", "Another one"] },
  { label: "Doing", items: ["Hobby", "Sport", "Side quest"] },
];

export default function FunPage() {
  return (
    <PageShell title="Who is Rylan?" intro="TODO: the stuff outside of work.">
      {lists.map((l) => (
        <Row key={l.label} label={l.label}>
          <ul className="space-y-1">
            {l.items.map((item) => (
              <li key={item} className="font-display text-2xl uppercase sm:text-3xl">
                {item}
              </li>
            ))}
          </ul>
        </Row>
      ))}
    </PageShell>
  );
}
