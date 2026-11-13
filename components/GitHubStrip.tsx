import { site } from "@/content/site";
import { getGitHubStats } from "@/lib/github";

// Ink at increasing strength for GitHub's activity levels 0-4.
const LEVEL_OPACITY = [0.07, 0.25, 0.45, 0.7, 1];

/** Quiet "Lately on GitHub" block. Hides itself if GitHub can't be read. */
export async function GitHubStrip() {
  const stats = await getGitHubStats(site.githubUser);
  if (!stats) return null;

  const items = [
    [stats.total, "contributions in the last year"],
    ...(stats.thisMonth > 0 ? [[stats.thisMonth, "this month"] as const] : []),
    ...(stats.streak > 1 ? [[stats.streak, "day streak"] as const] : []),
  ] as const;

  // Columns are weeks, rows are weekdays, same as GitHub.
  const weeks: (typeof stats.recent)[] = [];
  stats.recent.forEach((d, i) => (weeks[Math.floor(i / 7)] ??= []).push(d));

  return (
    <section aria-labelledby="github" className="mt-12 border-t border-line pt-12 text-center">
      <h2 id="github" className="eyebrow text-muted">
        Lately on GitHub
      </h2>
      <a
        href={`https://github.com/${site.githubUser}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`GitHub activity: ${items.map(([n, label]) => `${n} ${label}`).join(", ")}`}
        className="group mt-6 inline-flex flex-col items-center gap-6"
      >
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-muted">
          {items.map(([n, label]) => (
            <li key={label}>
              <span className="font-serif text-xl text-ink">
                {n.toLocaleString("en-US")}
              </span>{" "}
              {label}
            </li>
          ))}
        </ul>
        <div aria-hidden className="flex gap-[3px] opacity-80 transition-opacity group-hover:opacity-100">
          {weeks.map((week) => (
            <div key={week[0].date} className="flex flex-col gap-[3px]">
              {week.map((d) => (
                <span
                  key={d.date}
                  className="size-[7px] rounded-[1px] sm:size-[8px]"
                  style={{
                    backgroundColor: `color-mix(in srgb, var(--ink) ${LEVEL_OPACITY[d.level] * 100}%, transparent)`,
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </a>
    </section>
  );
}
