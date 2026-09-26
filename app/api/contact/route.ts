import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Please complete all fields." },
        { status: 400 }
      );
    }

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailIsValid) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO;
    const from = process.env.CONTACT_FROM;

    if (!apiKey || !to || !from) {
      console.error("Missing contact email environment variables.");
      return NextResponse.json(
        { error: "Email service is not configured yet." },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Website contact from ${name}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          "",
          message,
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      const details = await response.text();
      console.error("Resend error:", details);
      return NextResponse.json(
        { error: "Could not send the message. Please try again later." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}