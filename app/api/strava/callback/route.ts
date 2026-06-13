import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "No code provided" }, { status: 400 });
  }

  const res = await fetch("https://www.strava.com/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: process.env.STRAVA_CLIENT_ID,
      client_secret: process.env.STRAVA_CLIENT_SECRET,
      code,
      grant_type: "authorization_code",
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    return NextResponse.json({ error: data }, { status: 400 });
  }

  return NextResponse.json({
    message: "Copy this refresh_token into your .env.local as STRAVA_REFRESH_TOKEN",
    refresh_token: data.refresh_token,
    access_token: data.access_token,
    athlete: data.athlete?.firstname + " " + data.athlete?.lastname,
  });
}
