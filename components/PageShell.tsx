/** Standard inner page: centered serif title, optional intro, narrow column. */
export function PageShell({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children?: React.ReactNode;
}) {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6 pt-12 sm:pt-16">
      <header className="text-center">
        <h1 className="font-serif text-4xl leading-tight sm:text-5xl">{title}</h1>
        {intro && (
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {intro}
          </p>
        )}
      </header>
      {children && <div className="mt-16">{children}</div>}
    </main>
  );
}

/** A section with a small uppercase label above its content. */
export function Section({
  label,
  id,
  children,
}: {
  label: React.ReactNode;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-10 border-t border-line py-10 first:border-t-0 first:pt-0">
      <h2 className="eyebrow mb-4 text-muted">{label}</h2>
      <div className="space-y-4 text-lg leading-relaxed">{children}</div>
    </section>
  );
}
