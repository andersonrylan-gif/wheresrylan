import Link from "next/link";

export function PageShell({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <main className="flex-1 px-4 py-8 sm:px-8 sm:py-12">
      <Link
        href="/"
        className="link text-sm font-semibold uppercase tracking-[0.2em]"
      >
        ← Back
      </Link>
      <h1 className="mt-6 font-display text-[clamp(3rem,13vw,11rem)] uppercase leading-[0.85] tracking-tighter break-words">
        {title}
      </h1>
      {intro && (
        <p className="mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl">
          {intro}
        </p>
      )}
      <div className="mt-12 border-t-[length:var(--rule)] border-ink pt-10">
        {children}
      </div>
    </main>
  );
}

/** A labeled row: small uppercase label on the left, content on the right. */
export function Row({
  label,
  children,
}: {
  label: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="grid gap-3 border-b border-ink py-8 first:pt-0 md:grid-cols-[14rem_1fr] md:gap-10">
      <h2 className="text-sm font-semibold uppercase tracking-[0.2em]">
        {label}
      </h2>
      <div className="max-w-2xl space-y-4 text-lg leading-relaxed">
        {children}
      </div>
    </section>
  );
}
