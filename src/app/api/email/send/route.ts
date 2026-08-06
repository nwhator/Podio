import { NextResponse } from "next/server";
import { sendPurchaseAcknowledgementEmail } from "@/lib/email-service";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    const { customerName, customerEmail, bookName, bookPrice, orderId, purchaseDate } = body || {};

    if (!customerEmail || !bookName) {
      return NextResponse.json(
        { error: "Missing required fields: customerEmail or bookName" },
        { status: 400 },
      );
    }

    await sendPurchaseAcknowledgementEmail({
      customerName,
      customerEmail,
      bookName,
      bookPrice,
      orderId,
      purchaseDate,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Email sending failed.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}