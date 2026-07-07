import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body?.parentName || !body?.email) {
    return NextResponse.json(
      { error: "Parent name and email are required." },
      { status: 400 },
    );
  }

  const payload = {
    parent_name: String(body.parentName),
    email: String(body.email),
    phone: body.phone ? String(body.phone) : null,
    enquiry_type: body.enquiryType ? String(body.enquiryType) : null,
    message: body.message ? String(body.message) : null,
    created_at: new Date().toISOString(),
  };

  const supabase = getSupabaseAdmin();

  if (supabase) {
    const { error } = await supabase.from("podio_enquiries").insert(payload);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }

  return NextResponse.json({
    ok: true,
    stored: Boolean(supabase),
  });
}
