import { NextResponse } from "next/server";
import { getResend } from "@/lib/resend";
import { createClient } from "@/lib/supabase/server";

export async function POST() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { data, error } = await getResend().emails.send({
      from: "Bison & Bird <onboarding@resend.dev>",
      to: user.email!,
      subject: "Bison & Bird — Test Email",
      html: `<h2>It works!</h2><p>This test email was sent from your Bison &amp; Bird starter app via Resend.</p><p>User: ${user.email}</p><p>Sent at: ${new Date().toISOString()}</p>`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ id: data?.id, to: user.email });
  } catch (err) {
    console.error("Resend API error:", err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
