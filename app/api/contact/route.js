import nodemailer from "nodemailer"

export async function POST(request) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing fields" }),
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.CONTACT_EMAIL,
        pass: process.env.CONTACT_EMAIL_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: `"Dealora Contact" <${process.env.CONTACT_EMAIL}>`,
      to: process.env.CONTACT_RECEIVER,
      replyTo: email,
      subject: `New Contact Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    })

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact error:", error)
    return new Response(
      JSON.stringify({ error: "Failed to send message" }),
      { status: 500 }
    )
  }
}