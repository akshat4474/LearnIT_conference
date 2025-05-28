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
      'g-recaptcha-response': token,
    } = body;

    if (!name || !email || !message || !token) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields or reCAPTCHA token.' },
        { status: 400 }
      );
    }

    if (containsMaliciousContent(name + email + phone + message)) {
      return NextResponse.json(
        { success: false, error: 'Malicious script detected.' },
        { status: 400 }
      );
    }

    // Use v2 or v3 secret based on token length (heuristic)
    const isLikelyV2 = token.length < 100;
    const secretKey = isLikelyV2
      ? process.env.RECAPTCHA_V2_SECRET_KEY
      : process.env.RECAPTCHA_SECRET_KEY;

    const recaptchaVerifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${secretKey}&response=${token}`,
    });

    const recaptchaData = await recaptchaVerifyRes.json();

    if (!recaptchaData.success) {
      return NextResponse.json(
        { success: false, error: 'reCAPTCHA failed verification.' },
        { status: 403 }
      );
    }

    if ('score' in recaptchaData && recaptchaData.score < 0.5) {
      return NextResponse.json({
        success: false,
        error: 'low_score',
        requireV2: true,
      }, { status: 200 });
    }

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
