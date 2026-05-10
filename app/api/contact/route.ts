// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";
// import { z } from "zod";

// const contactSchema = z.object({
//   name: z.string().trim().min(1, "Name is required"),
//   email: z.string().trim().email("Valid email is required"),
//   organization: z.string().trim().min(1, "Organization is required"),
//   phone: z.string().trim().optional().or(z.literal("")),
//   message: z.string().trim().min(1, "Message is required"),
//   website: z.string().optional().or(z.literal("")),
// });

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const parsed = contactSchema.safeParse(body);

//     if (!parsed.success) {
//       return NextResponse.json(
//         { success: false, message: "Invalid form submission." },
//         { status: 400 },
//       );
//     }

//     const { name, email, organization, phone, message, website } = parsed.data;

//     if (website) {
//       return NextResponse.json({ success: true });
//     }

//     if (
//       !process.env.EMAIL_HOST ||
//       !process.env.EMAIL_PORT ||
//       !process.env.EMAIL_USER ||
//       !process.env.EMAIL_PASS
//     ) {
//       return NextResponse.json(
//         { success: false, message: "Email service is not configured." },
//         { status: 500 },
//       );
//     }

//     const transporter = nodemailer.createTransport({
//       host: process.env.EMAIL_HOST,
//       port: Number(process.env.EMAIL_PORT),
//       secure: Number(process.env.EMAIL_PORT) === 465,
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     const adminHtml = `
//       <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
//         <h2>New Contact Form Submission</h2>
//         <p><strong>Name:</strong> ${escapeHtml(name)}</p>
//         <p><strong>Email:</strong> ${escapeHtml(email)}</p>
//         <p><strong>Organization:</strong> ${escapeHtml(organization)}</p>
//         <p><strong>Phone:</strong> ${escapeHtml(phone || "N/A")}</p>
//         <p><strong>Message:</strong></p>
//         <div style="padding: 12px; border: 1px solid #ddd; border-radius: 8px; white-space: pre-wrap;">
//           ${escapeHtml(message)}
//         </div>
//       </div>
//     `;

//     const confirmationHtml = `
//       <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
//         <p>Hi ${escapeHtml(name)},</p>
//         <p>
//           Thank you for contacting <strong>Code Red Safe Schools Initiative</strong>.
//           We’ve received your message and a member of our team will follow up shortly.
//         </p>
//         <p>— Code Red Safe Schools Initiative</p>
//       </div>
//     `;

//     await transporter.sendMail({
//       from: `"Code Red Website" <${process.env.EMAIL_USER}>`,
//       to: "info@coderedssi.org",
//       replyTo: email,
//       subject: "New Contact Form Submission",
//       html: adminHtml,
//     });

//     await transporter.sendMail({
//       from: `"Code Red" <${process.env.EMAIL_USER}>`,
//       to: email,
//       subject: "We received your message",
//       html: confirmationHtml,
//     });

//     return NextResponse.json({
//       success: true,
//       message: "Message sent successfully.",
//     });
//   } catch (error) {
//     console.error("Contact route error:", error);
//     return NextResponse.json(
//       { success: false, message: "Failed to send message." },
//       { status: 500 },
//     );
//   }
// }

// function escapeHtml(str: string) {
//   return str
//     .replace(/&/g, "&amp;")
//     .replace(/</g, "&lt;")
//     .replace(/>/g, "&gt;")
//     .replace(/"/g, "&quot;")
//     .replace(/'/g, "&#039;");
// }

import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";
import { partnerIntakeSchema } from "@/lib/partner/schemas";
import { buildPartnerEmail } from "@/lib/email/contact-email";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (body?.type !== "partner") {
      return NextResponse.json(
        { success: false, message: "Unsupported contact type." },
        { status: 400 },
      );
    }

    const parsed = partnerIntakeSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid partner submission.",
          errors: parsed.error.flatten(),
        },
        { status: 400 },
      );
    }

    const payload = parsed.data;

    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!toEmail || !fromEmail) {
      return NextResponse.json(
        { success: false, message: "Email configuration is missing." },
        { status: 500 },
      );
    }

    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: payload.contact.email,
      subject: `New Partner Interest: ${payload.contact.organization}`,
      text: buildPartnerEmail(payload),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Partner contact route error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send partner submission." },
      { status: 500 },
    );
  }
}
