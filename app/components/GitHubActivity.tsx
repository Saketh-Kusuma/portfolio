import { ArrowUpRight } from "lucide-react";
import HomeSection from "./HomeSection";

const username = "Saketh-Kusuma";
const profileUrl = `https://github.com/${username}`;
const dayInMs = 86_400_000;
const cellSize = 10;
const cellStep = 13;

type Contribution = {
  date: string;
  count: number;
  level: number;
};

async function getContributions(): Promise<Contribution[] | null> {
  try {
    // Public contribution data; no GitHub token is sent to the browser.
    const response = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      { next: { revalidate: 3600 }, signal: AbortSignal.timeout(8000) },
    );
    if (!response.ok) return null;

    const data = await response.json();
    if (
      !Array.isArray(data.contributions) ||
      data.contributions.length === 0 ||
      !data.contributions.every(
        (day: Contribution) =>
          day !== null &&
          typeof day.date === "string" &&
          /^\d{4}-\d{2}-\d{2}$/.test(day.date) &&
          Number.isFinite(Date.parse(day.date)) &&
          Number.isInteger(day.count) &&
          day.count >= 0 &&
          Number.isInteger(day.level) &&
          day.level >= 0 &&
          day.level <= 4,
      )
    ) {
      return null;
    }

    return data.contributions.sort((a: Contribution, b: Contribution) =>
      a.date.localeCompare(b.date),
    );
  } catch {
    return null;
  }
}

function ActivityFrame({ children }: { children: React.ReactNode }) {
  return (
    <HomeSection
      id="github-activity-heading"
      title="GitHub Activity"
      action={
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-8 items-center gap-1.5 rounded-sm text-xs text-secondary transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:text-sm"
        >
          View GitHub <ArrowUpRight aria-hidden="true" size={13} />
        </a>
      }
    >
      <div className="min-w-0 rounded-2xl border border-dashed border-input bg-card p-4 sm:p-5">
        {children}
      </div>
    </HomeSection>
  );
}

export function GitHubActivitySkeleton() {
  return (
    <ActivityFrame>
      <div role="status" className="flex h-[147px] flex-col justify-between">
        <div aria-hidden="true" className="h-28 rounded-sm bg-muted motion-safe:animate-pulse" />
        <span className="text-xs text-secondary">Loading GitHub activity…</span>
      </div>
    </ActivityFrame>
  );
}

export default async function GitHubActivity() {
  const contributions = await getContributions();

  if (!contributions) {
    return (
      <ActivityFrame>
        <p className="flex min-h-[147px] items-center text-sm text-secondary">
          Activity is temporarily unavailable. You can still view it on GitHub.
        </p>
      </ActivityFrame>
    );
  }

  // Anchor weeks to Sunday in UTC so dates do not shift with the visitor's timezone.
  const firstDate = new Date(`${contributions[0].date}T00:00:00Z`);
  const start = firstDate.getTime() - firstDate.getUTCDay() * dayInMs;
  const days = contributions.map((day) => {
    const date = new Date(`${day.date}T00:00:00Z`);
    const offset = Math.round((date.getTime() - start) / dayInMs);
    return { ...day, dateObject: date, week: Math.floor(offset / 7), weekday: offset % 7 };
  });
  const weeks = days[days.length - 1].week + 1;
  const width = weeks * cellStep - (cellStep - cellSize);
  const total = contributions.reduce((sum, day) => sum + day.count, 0);
  const summary = `${total.toLocaleString("en-US")} contributions in the last year`;
  const monthFormat = new Intl.DateTimeFormat("en-US", { month: "short", timeZone: "UTC" });
  const dateFormat = new Intl.DateTimeFormat("en-US", {
    month: "long", day: "numeric", year: "numeric", timeZone: "UTC",
  });

  return (
    <ActivityFrame>
      <div
        role="region"
        aria-label="Daily GitHub contributions. Scroll horizontally to explore the full year."
        tabIndex={0}
        className="overflow-x-auto overscroll-x-contain rounded-sm pb-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <svg
          width={width}
          height={112}
          viewBox={`0 0 ${width} 112`}
          role="img"
          aria-labelledby="github-calendar-title github-calendar-description"
          className="block max-w-none text-secondary"
        >
          <title id="github-calendar-title">{summary}</title>
          <desc id="github-calendar-description">
            {username}&apos;s daily contributions. Stronger shades indicate more activity.
            Hover over a day for its date and contribution count.
          </desc>
          <g aria-hidden="true" fill="currentColor" fontSize="10">
            {days.filter((day) => day.dateObject.getUTCDate() === 1 && day.week < weeks - 2).map((day) => (
              <text key={day.date} x={day.week * cellStep} y={10}>
                {monthFormat.format(day.dateObject)}
              </text>
            ))}
          </g>
          {days.map((day) => (
            <rect
              key={day.date}
              x={day.week * cellStep}
              y={24 + day.weekday * cellStep}
              width={cellSize}
              height={cellSize}
              rx={2}
              data-date={day.date}
              data-level={day.level}
              style={{ fill: `var(--contribution-${day.level})` }}
              className="stroke-foreground/10 [stroke-width:0.5]"
            >
              <title>
                {`${day.count} ${day.count === 1 ? "contribution" : "contributions"} on ${dateFormat.format(day.dateObject)}`}
              </title>
            </rect>
          ))}
        </svg>
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-xs text-secondary">
        <p className="tabular-nums">{summary}</p>
        <div className="flex items-center gap-1.5" aria-label="Contribution intensity from less to more">
          <span>Less</span>
          {[0, 1, 2, 3, 4].map((level) => (
            <span
              key={level}
              aria-hidden="true"
              className="size-2.5 rounded-[2px] ring-[0.5px] ring-foreground/10"
              style={{ backgroundColor: `var(--contribution-${level})` }}
            />
          ))}
          <span>More</span>
        </div>
      </div>
    </ActivityFrame>
  );
}
