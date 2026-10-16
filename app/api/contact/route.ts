import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, company, package: pkg, category, message } = await req.json();

    await resend.emails.send({
      from: "Test D Tech <collabs@testdtech.com>",
      to: "collabs@testdtech.com",
      replyTo: email,
      subject: `New Partnership Inquiry — ${pkg} Package`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#18181b">
          <h2 style="color:#7c3aed">New Media Kit Inquiry</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#71717a;width:140px">Name</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#71717a">Email</td><td style="padding:8px 0;font-weight:600">${email}</td></tr>
            ${company ? `<tr><td style="padding:8px 0;color:#71717a">Company</td><td style="padding:8px 0;font-weight:600">${company}</td></tr>` : ""}
            <tr><td style="padding:8px 0;color:#71717a">Package</td><td style="padding:8px 0;font-weight:600">${pkg}</td></tr>
            <tr><td style="padding:8px 0;color:#71717a">Category</td><td style="padding:8px 0;font-weight:600">${category}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #e4e4e7;margin:16px 0"/>
          <p style="color:#71717a;margin-bottom:8px">Message</p>
          <p style="white-space:pre-wrap;line-height:1.6">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", JSON.stringify(err));
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}
