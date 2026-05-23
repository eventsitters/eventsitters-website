import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const data = await req.json();

  const {
    eventType, date, duration, location,
    attendees, under3, age3to6, age7to12,
    firstName, lastName, company, email, phone, message,
  } = data;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const body = `
New quote request from the Event Sitters website.

EVENT DETAILS
─────────────
Type:      ${eventType || "Not specified"}
Date:      ${date ? new Date(date).toLocaleDateString("en-NZ") : "Not specified"}
Duration:  ${duration || "Not specified"}
Location:  ${location || "Not specified"}

CHILDREN ATTENDING
──────────────────
${attendees === "Don't know yet" ? "Not sure yet" : `Under 3: ${under3}\n3–6 years: ${age3to6}\n7–12 years: ${age7to12}`}

CONTACT DETAILS
───────────────
Name:    ${firstName} ${lastName}
${company ? `Company: ${company}\n` : ""}Email:   ${email}
${phone ? `Phone:   ${phone}\n` : ""}
${message ? `MESSAGE\n───────\n${message}` : ""}
  `.trim();

  try {
    await transporter.sendMail({
      from: `"Event Sitters Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO || "info@eventsitters.nz",
      replyTo: email,
      subject: `Quote Request – ${eventType || "General"} – ${firstName} ${lastName}`,
      text: body,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Email send failed:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
