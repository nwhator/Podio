import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { sendPurchaseAcknowledgementEmail } from "@/lib/email-service";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const { priceId } = body ?? {};

  if (!priceId || typeof priceId !== "string") {
    return NextResponse.json(
      { error: "A valid priceId is required." },
      { status: 400 },
    );
  }

  const appUrl =
    process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

  try {
    const stripe = getStripe();

    // Retrieve price to determine one-time vs subscription mode
    const price = await stripe.prices.retrieve(priceId);
    const mode = price.recurring ? "subscription" : "payment";

    const session = await stripe.checkout.sessions.create({
      mode,
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${appUrl}/pricing/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/pricing`,
      billing_address_collection: "required",
      phone_number_collection: { enabled: true },
      custom_text: {
        submit: {
          message:
            "Your child is one step closer to finding their voice! 🎤",
        },
      },
    });

    if (!session.url) {
      throw new Error("Stripe did not return a checkout URL.");
    }

    // Try to get customer email from session for email acknowledgment
    const email = session.customer_email;
    const customerName = session.customer_details?.name || "Customer";

    // Determine which book was purchased based on priceId
    const books = [
      { stripePriceId: "price_1Tw0v8Q3GhEHrM2KtxIIa2AN", name: "My Voice Is A Superpower", price: "£25" },
      { stripePriceId: "price_1Tw0yKQ3GhEHrM2KSUGp4IoL", name: "My Voice Is A Superpower: Teen Edition", price: "£25" },
    ];

    const book = books.find(b => b.stripePriceId === priceId);

    // Send acknowledgment email if we have customer email
    if (email && book) {
      try {
        await sendPurchaseAcknowledgementEmail({
          customerName,
          customerEmail: email,
          bookName: book.name,
          bookPrice: book.price,
          orderId: session.id,
          purchaseDate: new Date().toISOString().split('T')[0],
        });
        console.log("Purchase acknowledgment email sent successfully to:", email);
      } catch (emailError) {
        // Don't fail the checkout if email sending fails
        console.error("Failed to send purchase acknowledgment email:", emailError);
      }
    }

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Stripe checkout failed.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
