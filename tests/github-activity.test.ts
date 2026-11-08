import assert from "node:assert/strict";
import { test } from "node:test";
import { parseGithubActivity } from "../src/lib/github-activity.ts";
import { GET } from "../api/github-activity.ts";

const calendar = {
  contributions: [
    { date: "2026-11-07", count: 7, level: 4 },
    { date: "2026-11-08", count: 2, level: 1 },
  ],
};

test("uses the actual day counts and orders the calendar by date", () => {
  assert.deepEqual(
    parseGithubActivity({
      contributions: [...calendar.contributions].reverse(),
    }),
    { ...calendar, total: 9 },
  );
});

test("rejects malformed and incomplete calendars instead of displaying invented activity", () => {
  for (const value of [
    { contributions: [] },
    { contributions: [{ date: "2026-02-30", count: 1, level: 1 }] },
    { contributions: [{ date: "2026-11-07", count: -1, level: 1 }] },
    { contributions: [{ date: "2026-11-07", count: 1, level: 5 }] },
    { contributions: [calendar.contributions[0], calendar.contributions[0]] },
  ]) {
    assert.throws(() => parseGithubActivity(value));
  }
});

test("serves a cacheable calendar from the fixed public profile", async (context) => {
  context.mock.method(globalThis, "fetch", async (url: string) => {
    assert.equal(
      url,
      "https://github-contributions-api.jogruber.de/v4/vaavg13?y=last",
    );
    return Response.json(calendar);
  });
  const response = await GET();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("Cache-Control")!, /s-maxage=3600/);
  assert.deepEqual(await response.json(), { ...calendar, total: 9 });
});

test("upstream failure returns an uncached error", async (context) => {
  context.mock.method(
    globalThis,
    "fetch",
    async () => new Response("Unavailable", { status: 503 }),
  );
  context.mock.method(console, "error", () => {});
  const response = await GET();
  assert.equal(response.status, 502);
  assert.equal(response.headers.get("Cache-Control"), "no-store");
});
