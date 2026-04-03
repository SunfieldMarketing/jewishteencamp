import { NextResponse } from 'next/server';

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

    // Log the submission (in production, integrate with email service or CRM)
    console.log('New contact form submission:', {
      name,
      email,
      phone: phone || 'Not provided',
      childAge: childAge || 'Not specified',
      subject,
      program: program || 'General Inquiry',
      message,
      timestamp: new Date().toISOString(),
      source: 'Chicago Jewish Teens Website',
    });

    // To send emails in production, integrate with services like:
    // - Resend (resend.com) - free tier, no credit card needed
    // - SendGrid
    // - Nodemailer with Gmail
    // Example with Resend (add RESEND_API_KEY to environment variables):
    //
    // const { Resend } = await import('resend');
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'website@chicagojewishteens.com',
    //   to: 'zalman@chicagojewishteens.com',
    //   subject: `New Inquiry: ${subject} - ${name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
    //     <p><strong>Teen Age:</strong> ${childAge || 'Not specified'}</p>
    //     <p><strong>Subject:</strong> ${subject}</p>
    //     <p><strong>Program:</strong> ${program || 'General Inquiry'}</p>
    //     <p><strong>Message:</strong> ${message}</p>
    //   `,
    // });

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been received. We will contact you within 24 hours.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again.' },
      { status: 500 }
    );
  }
}
