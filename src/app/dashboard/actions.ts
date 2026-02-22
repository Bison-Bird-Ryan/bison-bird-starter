"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function addNote(formData: FormData) {
  const title = formData.get("title") as string;

  if (!title?.trim()) {
    return;
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  await supabase
    .from("notes")
    .insert({ title: title.trim(), user_id: user.id });

  revalidatePath("/dashboard");
}

export async function deleteNote(formData: FormData) {
  const id = formData.get("id") as string;

  if (!id) {
    return;
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  await supabase.from("notes").delete().eq("id", id);

  revalidatePath("/dashboard");
}
