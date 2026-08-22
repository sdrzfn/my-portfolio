import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // ============================================
    // KONFIGURASI EMAIL - ISI DENGAN EMAIL KAMU
    // ============================================
    //
    // Opsi A: Gmail (butuh App Password)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,      // email@gmail.com
        pass: process.env.EMAIL_PASS,      // App Password
      },
    });
    //
    // Opsi B: Resend (recommended untuk production)
    // const transporter = nodemailer.createTransport({
    //   host: "smtp.resend.com",
    //   port: 465,
    //   secure: true,
    //   auth: {
    //     user: "resend",
    //     pass: process.env.RESEND_API_KEY,
    //   },
    // });
    //
    // Opsi C: Custom SMTP
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: parseInt(process.env.SMTP_PORT || "465"),
    //   secure: true,
    //   auth: {
    //     user: process.env.SMTP_USER,
    //     pass: process.env.SMTP_PASS,
    //   },
    // });

    // Placeholder transporter - ganti dengan salah satu opsi di atas
    // const transporter = nodemailer.createTransport({
    //   host: "smtp.example.com",
    //   port: 465,
    //   secure: true,
    //   auth: {
    //     user: "your-email@example.com",
    //     pass: "your-password",
    //   },
    // });

    // ============================================
    // EMAIL TEMPLATE - SCRAPBOOK THEME
    // ============================================
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Portfolio Message</title>
        <style>
          /* Reset */
          * { box-sizing: border-box; margin: 0; padding: 0; }
          
          /* Base */
          body {
            font-family: 'Courier New', Courier, monospace;
            background-color: #f5ead0;
            background-image: 
              linear-gradient(to right, rgba(111,111,111,0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(111,111,111,0.15) 1px, transparent 1px);
            background-size: 24px 24px;
            padding: 40px 20px;
            line-height: 1.6;
            color: #171717;
          }
          
          /* Paper card */
          .paper {
            max-width: 600px;
            margin: 0 auto;
            background: #f8f4e7;
            padding: 48px;
            box-shadow: 0 16px 34px rgba(40,31,18,.12);
            position: relative;
          }
          
          /* Tape decoration */
          .tape {
            position: absolute;
            top: -12px;
            left: 50%;
            transform: translateX(-50%) rotate(-2deg);
            width: 120px;
            height: 28px;
            background: rgba(224,216,195,.85);
            box-shadow: inset 0 0 10px rgba(100,80,50,.12);
          }
          
          /* Header */
          .header {
            text-align: center;
            margin-bottom: 32px;
            padding-bottom: 24px;
            border-bottom: 2px dashed rgba(23,23,23,0.3);
          }
          
          .header h1 {
            font-family: 'Space Mono', 'Courier New', monospace;
            font-size: 1.5rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 8px;
          }
          
          .header .stamp {
            display: inline-block;
            padding: 4px 16px;
            background: #f1d74b;
            transform: rotate(-1deg);
            font-size: 0.75rem;
            font-weight: 700;
          }
          
          /* Content */
          .content {
            margin-bottom: 32px;
          }
          
          .field {
            margin-bottom: 20px;
          }
          
          .field-label {
            font-size: 0.7rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            color: #5b574e;
            margin-bottom: 4px;
          }
          
          .field-value {
            font-size: 0.95rem;
            padding: 12px 16px;
            background: rgba(248,244,231,.86);
            border: 1px solid rgba(0,0,0,.15);
            border-left: 3px solid #f1d74b;
          }
          
          .field-message {
            white-space: pre-wrap;
            line-height: 1.7;
          }
          
          /* Highlight marker effect */
          .highlight {
            background: #f1d74b;
            padding: 0 4px;
          }
          
          /* Footer */
          .footer {
            text-align: center;
            font-size: 0.7rem;
            color: #5b574e;
            padding-top: 20px;
            border-top: 1px dashed rgba(23,23,23,0.2);
          }
          
          /* Paper clip decoration */
          .paper-clip {
            position: absolute;
            top: -8px;
            right: 24px;
            width: 40px;
            height: 56px;
            opacity: 0.6;
          }
        </style>
      </head>
      <body>
        <div class="paper">
          <div class="tape"></div>
          
          <!-- Paper clip SVG -->
          <svg class="paper-clip" viewBox="0 0 92 130" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M57 15c-4-12-22-12-26 0l-11 65c-2 14 19 21 25 7l8-51" stroke="#4b3b1c" stroke-width="3"/>
          </svg>
          
          <div class="header">
            <h1>New Portfolio Message</h1>
            <span class="stamp">★ INBOX ★</span>
          </div>
          
          <div class="content">
            <div class="field">
              <div class="field-label">From</div>
              <div class="field-value">
                <strong>${name}</strong> &lt;${email}&gt;
              </div>
            </div>
            
            <div class="field">
              <div class="field-label">Message</div>
              <div class="field-value field-message">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
            </div>
          </div>
          
          <div class="footer">
            Sent from <span class="highlight">Sadrakh Z.P. Portfolio</span> — ${new Date().toLocaleString('id-ID', { 
              timeZone: 'Asia/Jakarta',
              dateStyle: 'full',
              timeStyle: 'short'
            })}
          </div>
        </div>
      </body>
      </html>
    `;

    const textContent = `
      New Portfolio Message
      ======================
      
      From: ${name} <${email}>
      
      Message:
      ${message}
      
      ---
      Sent from Sadrakh Z.P. Portfolio
      ${new Date().toLocaleString('id-ID')}
    `;

    // Transporter await function
    await transporter.sendMail({
      from: '"Portfolio Contact" <your-email@example.com>',
      to: "your-email@example.com",
      replyTo: email,
      subject: `[Portfolio] New message from ${name}`,
      text: textContent,
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}