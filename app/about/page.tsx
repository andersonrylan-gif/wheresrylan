import type { Metadata } from "next";
import { PageShell, Row } from "@/components/PageShell";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}.`,
};

export default function AboutPage() {
  return (
    <PageShell
      title="About"
      intro="TODO: Hi, I'm Rylan. Two or three sentences on who you are, in your own voice."
    >
      <Row label="Based in">
        <p>{site.location}</p>
      </Row>
      <Row label="Background">
        <p>TODO: where you grew up, school, how you got into what you do.</p>
      </Row>
      <Row label="Currently">
        <p>TODO: what you&apos;re working on, learning, or obsessed with.</p>
      </Row>
    </PageShell>
  );
}
