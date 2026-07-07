import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body?.parentName || !body?.childName || !body?.email || !body?.signature) {
    return NextResponse.json(
      { error: "Parent name, child name, email and signature are required." },
      { status: 400 },
    );
  }

  if (body.generalParticipation !== true) {
    return NextResponse.json(
      { error: "General participation consent is required." },
      { status: 400 },
    );
  }

  const payload = {
    parent_name: String(body.parentName),
    child_name: String(body.childName),
    email: String(body.email),
    general_participation: true,
    recording_consent: body.recordingConsent === true,
    photo_consent: body.photoConsent ? String(body.photoConsent) : null,
    communication_consent: body.communicationConsent === true,
    signature: String(body.signature),
    submitted_date: body.submittedDate ? String(body.submittedDate) : null,
    created_at: new Date().toISOString(),
  };

  const supabase = getSupabaseAdmin();

  if (supabase) {
    const { error } = await supabase.from("podio_consents").insert(payload);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }

  return NextResponse.json({
    ok: true,
    stored: Boolean(supabase),
  });
}
