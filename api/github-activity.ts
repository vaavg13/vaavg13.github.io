import { parseGithubActivity } from "../src/lib/github-activity.ts";

export async function GET() {
  try {
    const response = await fetch(
      "https://github-contributions-api.jogruber.de/v4/vaavg13?y=last",
      { signal: AbortSignal.timeout(12000) },
    );
    if (!response.ok)
      throw new Error(`GitHub calendar feed returned ${response.status}`);
    const activity = parseGithubActivity(await response.json());
    return Response.json(activity, {
      headers: {
        "Cache-Control":
          "public, max-age=300, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("Unable to load GitHub activity", error);
    return Response.json(
      { error: "GitHub activity is temporarily unavailable" },
      { status: 502, headers: { "Cache-Control": "no-store" } },
    );
  }
}
