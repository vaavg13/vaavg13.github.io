export interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

export interface GithubActivityData {
  contributions: ContributionDay[];
  total: number;
}

export function parseGithubActivity(value: unknown): GithubActivityData {
  if (
    !value ||
    typeof value !== "object" ||
    !("contributions" in value) ||
    !Array.isArray(value.contributions) ||
    value.contributions.length < 1 ||
    value.contributions.length > 371
  ) {
    throw new Error("Invalid GitHub contribution calendar");
  }
  const contributions: ContributionDay[] = value.contributions
    .map((day: unknown) => {
      if (
        !day ||
        typeof day !== "object" ||
        !("date" in day) ||
        !("count" in day) ||
        !("level" in day) ||
        typeof day.date !== "string" ||
        !/^\d{4}-\d{2}-\d{2}$/.test(day.date) ||
        typeof day.count !== "number" ||
        !Number.isInteger(day.count) ||
        day.count < 0 ||
        typeof day.level !== "number" ||
        !Number.isInteger(day.level) ||
        day.level < 0 ||
        day.level > 4
      ) {
        throw new Error("Invalid GitHub contribution day");
      }
      return { date: day.date, count: day.count, level: day.level };
    })
    .sort((a, b) => a.date.localeCompare(b.date));
  for (let index = 0; index < contributions.length; index++) {
    const timestamp = Date.parse(`${contributions[index].date}T00:00:00Z`);
    if (
      !Number.isFinite(timestamp) ||
      new Date(timestamp).toISOString().slice(0, 10) !==
        contributions[index].date ||
      (index > 0 &&
        timestamp - Date.parse(`${contributions[index - 1].date}T00:00:00Z`) !==
          86400000)
    ) {
      throw new Error("GitHub contribution dates must be consecutive");
    }
  }
  return {
    contributions,
    total: contributions.reduce((total, day) => total + day.count, 0),
  };
}
