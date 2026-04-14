import { NextRequest, NextResponse } from "next/server"

const N8N_WEBHOOK_URL = "https://ciaran124o23.app.n8n.cloud/webhook/810c79c7-7e1a-4709-ae3e-e591c8c89e9f"

export async function POST(req: NextRequest) {
  const { message, sessionId } = await req.json()

  const res = await fetch(N8N_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, sessionId }),
  })

  const data = await res.json()
  return NextResponse.json(data)
}
