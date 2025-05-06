// app/api/contact/route.ts

import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const formData = await req.formData()
  const name = formData.get("name")
  const email = formData.get("email")
  const subject = formData.get("subject")
  const message = formData.get("message")

  console.log("Contact Form Submission:", {
    name,
    email,
    subject,
    message,
  })

  return NextResponse.json({ success: true })
}
