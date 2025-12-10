import { NextResponse } from "next/server"

export async function POST(request) {
  const body = await request.json()
  const { name, email, message } = body || {}

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }

  console.log("New contact submission from Dealora site", {
    name,
    email,
    message,
  })

  return NextResponse.json({ ok: true })
}
