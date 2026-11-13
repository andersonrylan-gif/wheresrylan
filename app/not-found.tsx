import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export default function NotFound() {
  return (
    <PageShell title="Not found" intro="There's nothing at this address.">
      <p className="text-center">
        <Link href="/" className="eyebrow link">
          Back to the start
        </Link>
      </p>
    </PageShell>
  );
}
