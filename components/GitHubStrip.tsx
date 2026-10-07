import { getGitHubStats } from "@/lib/github";

const USER = "andersonrylan-gif";

// Black at increasing strength for GitHub's activity levels 1-4.
const LEVEL_OPACITY = [0, 0.3, 0.55, 0.8, 1];

export async function GitHubStrip() {
  const stats = await getGitHubStats(USER);
  if (!stats) return null;

  const items = [
    [stats.total, "contributions in the last year"],
    [stats.thisMonth, "this month"],
    ...(stats.streak > 1 ? [[stats.streak, "day streak"] as const] : []),
  ] as const;

  // Columns are weeks, rows are weekdays, same as GitHub.
  const weeks: (typeof stats.recent)[] = [];
  stats.recent.forEach((d, i) => (weeks[Math.floor(i / 7)] ??= []).push(d));

  return (
    <a
      href={`https://github.com/${USER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`GitHub activity: ${items.map(([n, label]) => `${n} ${label}`).join(", ")}`}
      className="group flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-b-[length:var(--rule)] border-ink px-4 py-3 transition-colors duration-150 hover:bg-ink hover:text-paper sm:px-8"
    >
      <ul className="flex flex-wrap items-baseline gap-x-6 gap-y-1 text-xs uppercase tracking-[0.15em]">
        <li className="font-semibold">GitHub</li>
        {items.map(([n, label]) => (
          <li key={label}>
            <span className="font-display text-base tracking-normal sm:text-lg">
              {n.toLocaleString("en-US")}
            </span>{" "}
            {label}
          </li>
        ))}
      </ul>
      <div aria-hidden className="hidden gap-[2px] lg:flex">
        {weeks.map((week) => (
          <div key={week[0].date} className="flex flex-col gap-[2px]">
            {week.map((d) => (
              <span
                key={d.date}
                className="size-[6px] border border-current"
                style={{
                  backgroundColor: `color-mix(in srgb, currentColor ${LEVEL_OPACITY[d.level] * 100}%, transparent)`,
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </a>
  );
}
