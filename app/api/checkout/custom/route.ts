import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const amount = Number(searchParams.get("amount"));
  const frequency = searchParams.get("frequency") || "one-time";

  if (!amount || amount < 10) {
    return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
  }

  const isMonthly = frequency === "monthly";

  const session = await stripe.checkout.sessions.create({
    mode: isMonthly ? "subscription" : "payment",

    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "usd",
          unit_amount: amount * 100,
          recurring: isMonthly
            ? {
                interval: "month",
              }
            : undefined,
          product_data: {
            name: isMonthly
              ? `Monthly Donation - $${amount}`
              : `One-Time Donation - $${amount}`,
          },
        },
      },
    ],

    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/donate?success=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/donate?canceled=true`,
  });

  return NextResponse.redirect(session.url!);
}
