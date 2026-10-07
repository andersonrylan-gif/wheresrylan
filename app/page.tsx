import Link from "next/link";
import { tiles } from "@/content/site";

export default function Home() {
  return (
    <main className="grid flex-1 grid-cols-1 md:min-h-[calc(100svh-10rem)] md:grid-cols-2 md:grid-rows-2">
      {tiles.map((tile, i) => (
        <Link
          key={tile.href}
          href={tile.href}
          className={[
            "@container group relative flex min-h-[28svh] flex-col justify-between p-5 transition-colors duration-150 sm:p-8",
            "hover:bg-ink hover:text-paper focus-visible:bg-ink focus-visible:text-paper focus-visible:outline-none",
            // Thick rules between tiles: bottom on all but the last, right on the left column.
            i < tiles.length - 1 ? "border-b-[length:var(--rule)] border-ink" : "",
            i >= 2 ? "md:border-b-0" : "",
            i % 2 === 0 ? "md:border-r-[length:var(--rule)]" : "",
          ].join(" ")}
        >
          <div className="flex items-start justify-between text-sm font-semibold uppercase tracking-[0.2em]">
            <span>0{i + 1}</span>
            {/* Always shown on touch screens; slides in on hover with a mouse. */}
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="square"
              className="size-8 transition-all duration-200 md:size-12 can-hover:-translate-x-3 can-hover:opacity-0 can-hover:group-hover:translate-x-0 can-hover:group-hover:opacity-100 can-hover:group-focus-visible:translate-x-0 can-hover:group-focus-visible:opacity-100"
            >
              <path d="M3 12h17M13 5l7 7-7 7" />
            </svg>
          </div>
          <div>
            <span className="block font-display text-[min(12cqw,9rem)] uppercase leading-[0.85] tracking-tighter">
              {tile.label}
            </span>
            <span className="mt-3 block text-sm uppercase tracking-[0.2em]">
              {tile.blurb}
            </span>
          </div>
        </Link>
      ))}
    </main>
  );
}
