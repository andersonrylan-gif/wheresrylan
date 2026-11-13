"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/content/site";

export function Header() {
  const pathname = usePathname();
  return (
    <header className="px-6 pt-10 pb-6 text-center sm:pt-14">
      <Link
        href="/"
        className="font-serif text-2xl tracking-wide sm:text-[1.7rem]"
      >
        {site.name}
      </Link>
      <nav aria-label="Main" className="mt-5">
        <ul className="eyebrow flex flex-wrap justify-center gap-x-7 gap-y-2 text-muted">
          {nav.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`link-plain inline-block py-1 ${active ? "text-ink" : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
