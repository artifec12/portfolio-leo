import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    const GODADDY_EMAIL = process.env.GODADDY_EMAIL;
    const GODADDY_PASSWORD = process.env.GODADDY_PASSWORD;

    // ✅ Configure SMTP (use Gmail or your SMTP provider)
    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 465, // or 587 if you want to use STARTTLS
      secure: true, // true for 465, false for 587
      auth: {
        user: GODADDY_EMAIL,
        pass: GODADDY_PASSWORD,
      },
    });
    // ✅ Compose mail
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GODADDY_EMAIL}>`,
      to: "ashishleo12@gmail.com", // <-- your receiving email
      subject: `New Contact Form Submission from ${name}`,
      text: `
        You have a new contact request:

        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API Error:", err);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
