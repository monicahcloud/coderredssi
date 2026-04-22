import { NextResponse } from "next/server";
import { buildSchoolEmail } from "@/lib/email/contact-email";
import { schoolSafetyIntakeSchema } from "@/lib/intake/schemas";

function createIntakeId() {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `CRSSI-${timestamp}-${random}`;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const parsed = schoolSafetyIntakeSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid intake submission.",
          errors: parsed.error.flatten(),
        },
        { status: 400 },
      );
    }

    const payload = parsed.data;
    const intakeId = createIntakeId();

    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!toEmail || !fromEmail) {
      return NextResponse.json(
        { success: false, message: "Email configuration is missing." },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      intakeId,
    });
  } catch (error) {
    console.error("School intake route error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send school intake." },
      { status: 500 },
    );
  }
}
