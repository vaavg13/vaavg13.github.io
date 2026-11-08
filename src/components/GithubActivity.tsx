import { useEffect, useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import {
  parseGithubActivity,
  type GithubActivityData,
} from "../lib/github-activity";

const monthFormat = new Intl.DateTimeFormat("en", {
  month: "short",
  timeZone: "UTC",
});
const dateFormat = new Intl.DateTimeFormat("en", {
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

export default function GithubActivity() {
  const [activity, setActivity] = useState<GithubActivityData | null>(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    async function load() {
      try {
        const response = await fetch("/api/github-activity", {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error("GitHub calendar unavailable");
        const data = parseGithubActivity(await response.json());
        if (!controller.signal.aborted) setActivity(data);
      } catch {
        if (!controller.signal.aborted) setFailed(true);
      }
    }
    load();
    return () => controller.abort();
  }, []);
  const offset = activity
    ? new Date(`${activity.contributions[0].date}T00:00:00Z`).getUTCDay()
    : 0;
  const columns = activity
    ? Math.ceil((offset + activity.contributions.length) / 7)
    : 53;
  return (
    <section className="github-activity" aria-labelledby="github-title">
      <div className="small-section-heading">
        <h2 id="github-title">On GitHub</h2>
        <a
          href="https://github.com/vaavg13"
          target="_blank"
          rel="noreferrer"
          className="github-profile-link"
        >
          <Github size={16} />
          vaavg13
          <ArrowUpRight size={15} />
        </a>
      </div>
      <div className="calendar-frame" aria-busy={!activity && !failed}>
        {activity ? (
          <>
            <p className="calendar-total">
              {activity.total.toLocaleString("en")} contributions in the last
              year
            </p>
            <div
              className="calendar-scroll"
              data-keyboard-navigation
              tabIndex={0}
              role="region"
              aria-label="GitHub contribution calendar, scroll horizontally to see the full year"
            >
              <svg
                className="contribution-calendar"
                viewBox={`0 0 ${columns * 12} 104`}
                role="img"
                aria-label={`${activity.total.toLocaleString("en")} GitHub contributions in the last year. Shading shows daily contribution counts.`}
              >
                {activity.contributions.map((day, index) => {
                  const date = new Date(`${day.date}T00:00:00Z`);
                  const column = Math.floor((index + offset) / 7);
                  const row = (index + offset) % 7;
                  const showMonth =
                    date.getUTCDate() === 1 && column < columns - 2;
                  return (
                    <g key={day.date}>
                      {showMonth && (
                        <text x={column * 12} y="9" className="calendar-month">
                          {monthFormat.format(date)}
                        </text>
                      )}
                      <rect
                        x={column * 12}
                        y={20 + row * 12}
                        width="9"
                        height="9"
                        rx="2"
                        className={`contribution-day contribution-day--${day.level}`}
                      >
                        <title>
                          {dateFormat.format(date)}: {day.count}{" "}
                          {day.count === 1 ? "contribution" : "contributions"}
                        </title>
                      </rect>
                    </g>
                  );
                })}
              </svg>
            </div>
            <div className="calendar-legend">
              <span>Less</span>
              {[0, 1, 2, 3, 4].map((level) => (
                <span
                  key={level}
                  className={`legend-day contribution-day--${level}`}
                  aria-hidden="true"
                />
              ))}
              <span>More</span>
            </div>
          </>
        ) : (
          <p className="calendar-message" role="status">
            {failed
              ? "The calendar is taking a break. You can still find me on GitHub."
              : "Loading contributions…"}
          </p>
        )}
      </div>
    </section>
  );
}
