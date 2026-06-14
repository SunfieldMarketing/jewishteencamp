import { NextResponse } from 'next/server';

const RECIPIENT_EMAIL = 'RabbiZalman@chabadmammoth.com';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, childAge, subject, program, message } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Build a clean HTML message body for the email
    const htmlMessage = `
      <h2 style="color:#1B3A6B;font-family:sans-serif;">New Inquiry – Chicago Jewish Teen Camp</h2>
      <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5;border:1px solid #ddd;width:140px;">Name</td><td style="padding:8px;border:1px solid #ddd;">${name}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5;border:1px solid #ddd;">Email</td><td style="padding:8px;border:1px solid #ddd;"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5;border:1px solid #ddd;">Phone</td><td style="padding:8px;border:1px solid #ddd;">${phone || 'Not provided'}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5;border:1px solid #ddd;">Teen Age</td><td style="padding:8px;border:1px solid #ddd;">${childAge || 'Not specified'}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5;border:1px solid #ddd;">Subject</td><td style="padding:8px;border:1px solid #ddd;">${subject}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5;border:1px solid #ddd;">Program</td><td style="padding:8px;border:1px solid #ddd;">${program || 'General Inquiry'}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5;border:1px solid #ddd;">Message</td><td style="padding:8px;border:1px solid #ddd;">${message.replace(/\n/g, '<br/>')}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5;border:1px solid #ddd;">Submitted</td><td style="padding:8px;border:1px solid #ddd;">${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })} (CT)</td></tr>
      </table>
    `;

    // Send via FormSubmit AJAX endpoint — no API key required.
    // NOTE: The very first submission will trigger a one-time activation email
    // to ${RECIPIENT_EMAIL}. Click "Activate Form" in that email, then all
    // future submissions will deliver instantly.
    const formSubmitRes = await fetch(
      `https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          _subject: `New Inquiry: ${subject} – ${name}`,
          _template: 'table',
          _captcha: 'false',
          _replyto: email,
          // FormSubmit treats 'message' as the body; we pass our HTML table
          message: htmlMessage,
          // Extra fields shown in FormSubmit's own table format as backup
          Phone: phone || 'Not provided',
          'Teen Age': childAge || 'Not specified',
          Program: program || 'General Inquiry',
        }),
      }
    );

    const result = await formSubmitRes.json();

    if (!formSubmitRes.ok || result.success === 'false') {
      console.error('FormSubmit error:', result);
      return NextResponse.json(
        { error: 'Failed to send email. Please call or email us directly.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          'Your message has been received. We will contact you within 24 hours.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again or call us directly.' },
      { status: 500 }
    );
  }
}
