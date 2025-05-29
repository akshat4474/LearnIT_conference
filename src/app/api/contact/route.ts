import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.SECRET_RESEND_API_KEY!);

// Sanitize HTML input
function escapeHTML(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Simple XSS / injection detection
function containsMaliciousContent(text: string) {
  const maliciousPattern = /<script.*?>|<\/script>|javascript:|on\w+=|<iframe|<object|<embed/i;
  return maliciousPattern.test(text);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone = 'N/A',
      message,
    } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields.' },
        { status: 400 }
      );
    }

    // XSS/Malicious content check
    if (containsMaliciousContent(name + email + phone + message)) {
      return NextResponse.json(
        { success: false, error: 'Malicious script detected.' },
        { status: 400 }
      );
    }

    // Send Email via Resend
    await resend.emails.send({
      from: process.env.MAIL_SENDER!,
      to: process.env.MAIL_RECEIVER!,
      subject: 'New Contact Message',
      html: `
        <div style="font-family: sans-serif;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${escapeHTML(name)}</p>
          <p><strong>Email:</strong> ${escapeHTML(email)}</p>
          <p><strong>Phone:</strong> ${escapeHTML(phone)}</p>
          <p><strong>Message:</strong><br/>${escapeHTML(message).replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error: unknown) {
    const message =
      error instanceof Error
        ? error.message
        : typeof error === 'string'
        ? error
        : 'Internal error';

    console.error('Resend error:', error);
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
