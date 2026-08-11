import { NextResponse } from "next/server";
import { contactSchema } from "@/src/lib/validations/contact";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "hello@floorquoteconnect.com";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON request payload" },
      { status: 400 }
    );
  }

  const result = contactSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { success: false, error: result.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  const { name, email, subject, message } = result.data;

  const { data, error } = await resend.emails.send({
    from: "FloorQuote Contact Form <onboarding@resend.dev>",
    to: TO_EMAIL,
    replyTo: email,
    subject: `[Contact Form] ${subject}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a1a1a;">New Contact Form Submission</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #555; width: 100px;">Name</td>
            <td style="padding: 8px 0; color: #1a1a1a;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #555;">Email</td>
            <td style="padding: 8px 0; color: #1a1a1a;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #555;">Subject</td>
            <td style="padding: 8px 0; color: #1a1a1a;">${subject}</td>
          </tr>
        </table>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
        <h3 style="color: #1a1a1a;">Message</h3>
        <p style="color: #374151; white-space: pre-wrap;">${message}</p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }

  console.log("Contact email sent, id:", data?.id);
  return NextResponse.json({ success: true });
}
