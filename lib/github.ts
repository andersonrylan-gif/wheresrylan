import { cacheLife } from "next/cache";

export type Day = { date: string; count: number; level: number };

export type GitHubStats = {
  total: number;
  thisMonth: number;
  streak: number;
  recent: Day[]; // last 12 weeks, oldest first, starting on a Sunday
};

// GitHub's public contribution graph (the one on every profile page). It needs
// no token, but it is HTML rather than an official API, so parse defensively
// and return null if it ever stops looking right; the strip then hides itself.
export async function getGitHubStats(
  user: string,
): Promise<GitHubStats | null> {
  "use cache";
  cacheLife("hours");
  try {
    const res = await fetch(`https://github.com/users/${user}/contributions`, {
      headers: { "User-Agent": "wheresrylan.com" },
    });
    if (!res.ok) return null;
    return summarize(parseCalendar(await res.text()));
  } catch {
    return null;
  }
}

export function parseCalendar(html: string): Day[] {
  const cells = new Map<string, { date: string; level: number }>();
  for (const [td] of html.matchAll(
    /<td\b[^>]*ContributionCalendar-day[^>]*>/g,
  )) {
    const id = td.match(/\bid="([^"]+)"/)?.[1];
    const date = td.match(/\bdata-date="(\d{4}-\d{2}-\d{2})"/)?.[1];
    const level = Number(td.match(/\bdata-level="(\d)"/)?.[1] ?? 0);
    if (id && date) cells.set(id, { date, level });
  }
  const days: Day[] = [];
  for (const [, id, text] of html.matchAll(
    /<tool-tip\b[^>]*\bfor="([^"]+)"[^>]*>([^<]*)<\/tool-tip>/g,
  )) {
    const cell = cells.get(id);
    const n = text.match(/^(\d[\d,]*|No) contributions?/)?.[1];
    if (!cell || !n) continue;
    days.push({ ...cell, count: n === "No" ? 0 : Number(n.replace(/,/g, "")) });
  }
  return days.sort((a, b) => a.date.localeCompare(b.date));
}

export function summarize(days: Day[]): GitHubStats | null {
  if (days.length < 84) return null;
  const last = days[days.length - 1];
  const month = last.date.slice(0, 7);

  // A streak isn't broken until the current day is over.
  let i = days.length - 1;
  if (last.count === 0) i--;
  let streak = 0;
  while (i >= 0 && days[i].count > 0) {
    streak++;
    i--;
  }

  // Start the grid on a Sunday so its rows line up with weekdays.
  let start = days.length - 84;
  while (
    start > 0 &&
    new Date(`${days[start].date}T00:00:00Z`).getUTCDay() !== 0
  )
    start--;

  return {
    total: days.reduce((sum, d) => sum + d.count, 0),
    thisMonth: days
      .filter((d) => d.date.startsWith(month))
      .reduce((sum, d) => sum + d.count, 0),
    streak,
    recent: days.slice(start),
  };
}
