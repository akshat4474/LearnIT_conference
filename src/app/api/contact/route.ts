import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.SECRET_RESEND_API_KEY!);

// HTML sanitization
function escapeHTML(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Basic malicious pattern check (XSS, JS events, etc.)
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

    // Check for potentially malicious input
    if (containsMaliciousContent(name + email + phone + message)) {
      return NextResponse.json(
        { success: false, error: 'Malicious script detected.' },
        { status: 400 }
      );
    }

    // Determine which reCAPTCHA secret to use
    const isLikelyV2 = token.length < 100; // heuristic
    const secretKey = isLikelyV2
      ? process.env.RECAPTCHA_V2_SECRET_KEY
      : process.env.RECAPTCHA_SECRET_KEY;

    // Verify reCAPTCHA
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

    // Trigger v2 fallback if low score in v3
    if ('score' in recaptchaData && recaptchaData.score < 0.5) {
      return NextResponse.json({
        success: false,
        error: 'low_score',
        requireV2: true,
      }, { status: 200 });
    }

    // Send email
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

  } catch (error: any) {
    console.error('Resend error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal error' },
      { status: 500 }
    );
  }
}
