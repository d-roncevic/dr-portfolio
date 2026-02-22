import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const rateLimit = new Map<string, { count: number; lastRequest: number }>();
export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";

  const now = Date.now();
  const limit = rateLimit.get(ip);

  if (limit) {
    if (now - limit.lastRequest < 60000 && limit.count >= 5) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    if (now - limit.lastRequest > 60000) {
      rateLimit.set(ip, { count: 1, lastRequest: now });
    } else {
      rateLimit.set(ip, {
        count: limit.count + 1,
        lastRequest: now,
      });
    }
  } else {
    rateLimit.set(ip, { count: 1, lastRequest: now });
  }
  try {
    const { email, company, subject, message } = await req.json();

    if (!subject || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    if (company) {
      return NextResponse.json({ error: "Spam detected" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      subject: subject,
      text: `
      You received a new message.
          
      From: ${email}
      Subject: ${subject}
          
      Message:
      ${message}
        `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
