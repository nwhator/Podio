"use server";

import { redirect } from "next/navigation";
import { getStripe } from "@/lib/stripe";

const priceEnvByPlan = {
  monthly: "STRIPE_PRICE_MONTHLY",
  "three-month": "STRIPE_PRICE_THREE_MONTH",
} as const;

export async function startCheckout(formData: FormData) {
  const plan = formData.get("plan");

  if (plan !== "monthly" && plan !== "three-month") {
    throw new Error("Unknown checkout plan.");
  }

  const priceId = process.env[priceEnvByPlan[plan]];

  if (!priceId) {
    throw new Error(`${priceEnvByPlan[plan]} is not configured.`);
  }

  const appUrl =
    process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

  const session = await getStripe().checkout.sessions.create({
    mode: "subscription",
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${appUrl}/?checkout=success#pricing`,
    cancel_url: `${appUrl}/?checkout=cancelled#pricing`,
    allow_promotion_codes: true,
    billing_address_collection: "auto",
  });

  if (!session.url) {
    throw new Error("Stripe did not return a checkout URL.");
  }

  redirect(session.url);
}
