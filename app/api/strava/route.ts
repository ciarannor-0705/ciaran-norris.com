import { NextResponse } from "next/server";

async function getAccessToken(): Promise<string> {
  const res = await fetch("https://www.strava.com/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: process.env.STRAVA_CLIENT_ID,
      client_secret: process.env.STRAVA_CLIENT_SECRET,
      refresh_token: process.env.STRAVA_REFRESH_TOKEN,
      grant_type: "refresh_token",
    }),
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to refresh Strava token");
  const data = await res.json();
  return data.access_token;
}

const formatPace = (metersPerSec: number) => {
  if (!metersPerSec) return "—";
  const secsPerKm = 1000 / metersPerSec;
  const mins = Math.floor(secsPerKm / 60);
  const secs = Math.round(secsPerKm % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

const formatDuration = (secs: number) => {
  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs % 3600) / 60);
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m`;
};

export async function GET() {
  try {
    const accessToken = await getAccessToken();

    const athleteRes = await fetch("https://www.strava.com/api/v3/athlete", {
      headers: { Authorization: `Bearer ${accessToken}` },
      next: { revalidate: 3600 },
    });
    if (!athleteRes.ok) throw new Error("Failed to fetch athlete");
    const athlete = await athleteRes.json();

    const statsRes = await fetch(
      `https://www.strava.com/api/v3/athletes/${athlete.id}/stats`,
      { headers: { Authorization: `Bearer ${accessToken}` }, next: { revalidate: 3600 } }
    );
    if (!statsRes.ok) throw new Error("Failed to fetch stats");
    const stats = await statsRes.json();

    // Fetch last 90 days of activities
    const ninetyDaysAgo = Math.floor((Date.now() - 90 * 24 * 60 * 60 * 1000) / 1000);
    const activitiesRes = await fetch(
      `https://www.strava.com/api/v3/athlete/activities?after=${ninetyDaysAgo}&per_page=200`,
      { headers: { Authorization: `Bearer ${accessToken}` }, next: { revalidate: 3600 } }
    );
    if (!activitiesRes.ok) throw new Error("Failed to fetch activities");
    const activities = await activitiesRes.json();

    const runs = activities
      .filter((a: { type: string }) => a.type === "Run")
      .map((a: {
        id: number; name: string; start_date_local: string;
        distance: number; moving_time: number;
        total_elevation_gain: number; average_speed: number;
      }) => ({
        id: a.id,
        name: a.name,
        date: a.start_date_local,
        distance_km: Math.round((a.distance / 1000) * 100) / 100,
        duration: formatDuration(a.moving_time),
        moving_time_secs: a.moving_time,
        pace: formatPace(a.average_speed),
        elevation_m: Math.round(a.total_elevation_gain),
        strava_url: `https://www.strava.com/activities/${a.id}`,
      }));

    // Group by month
    const monthMap: Record<string, { key: string; label: string; runs: typeof runs; distance_km: number; duration: string; moving_time_secs: number }> = {};
    for (const run of runs) {
      const d = new Date(run.date);
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
      const label = d.toLocaleString("en", { month: "long", year: "numeric" });
      if (!monthMap[key]) {
        monthMap[key] = { key, label, runs: [], distance_km: 0, duration: "", moving_time_secs: 0 };
      }
      monthMap[key].runs.push(run);
      monthMap[key].distance_km += run.distance_km;
      monthMap[key].moving_time_secs += run.moving_time_secs;
    }

    const months = Object.values(monthMap)
      .sort((a, b) => b.key.localeCompare(a.key))
      .map(m => ({
        ...m,
        distance_km: Math.round(m.distance_km * 10) / 10,
        duration: formatDuration(m.moving_time_secs),
        runs: m.runs.sort((a: { date: string }, b: { date: string }) => new Date(b.date).getTime() - new Date(a.date).getTime()),
      }));

    return NextResponse.json({
      ytd: {
        runs: stats.ytd_run_totals?.count ?? 0,
        distance_km: Math.round((stats.ytd_run_totals?.distance ?? 0) / 100) / 10,
      },
      months,
    });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
