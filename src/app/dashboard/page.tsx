import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { logout } from "../(auth)/actions";
import { addNote, deleteNote } from "./actions";
import { CheckoutButton } from "./checkout-button";
import { AITest } from "./ai-test";
import { EmailTest } from "./email-test";

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: notes, error: notesError } = await supabase
    .from("notes")
    .select("id, title, created_at")
    .order("created_at", { ascending: false });

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <div className="w-full max-w-md space-y-6 px-4 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight text-black dark:text-zinc-50">
            Dashboard
          </h1>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            You are logged in
          </p>
        </div>

        <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Signed in as
          </p>
          <p className="mt-1 text-sm font-medium text-zinc-900 dark:text-zinc-100">
            {user.email}
          </p>
        </div>

        {/* Database CRUD Section */}
        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Database CRUD
          </h2>

          {/* Add note form */}
          <form action={addNote} className="flex gap-2">
            <input
              type="text"
              name="title"
              placeholder="New note..."
              required
              className="flex-1 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-zinc-500"
            />
            <button
              type="submit"
              className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Add
            </button>
          </form>

          {/* Notes list */}
          <div className="rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
            {notesError ? (
              <p className="p-4 text-sm text-red-600 dark:text-red-400">
                Error loading notes: {notesError.message}
              </p>
            ) : notes && notes.length > 0 ? (
              <ul className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {notes.map((note) => (
                  <li
                    key={note.id}
                    className="flex items-center justify-between p-3"
                  >
                    <div>
                      <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                        {note.title}
                      </p>
                      <p className="text-xs text-zinc-400 dark:text-zinc-500">
                        {new Date(note.created_at).toLocaleString()}
                      </p>
                    </div>
                    <form action={deleteNote}>
                      <input type="hidden" name="id" value={note.id} />
                      <button
                        type="submit"
                        className="rounded px-2 py-1 text-xs text-zinc-400 hover:bg-zinc-100 hover:text-red-600 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-red-400"
                      >
                        Delete
                      </button>
                    </form>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="p-4 text-center text-sm text-zinc-400 dark:text-zinc-500">
                No notes yet. Add one above to test database write + read.
              </p>
            )}
          </div>

          {/* Status indicator */}
          <div className="flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-500">
            <span
              className={`inline-block h-2 w-2 rounded-full ${
                notes && notes.length > 0
                  ? "bg-green-500"
                  : "bg-zinc-300 dark:bg-zinc-600"
              }`}
            />
            {notes && notes.length > 0
              ? `${notes.length} note${notes.length !== 1 ? "s" : ""} — database read/write confirmed`
              : "Insert a note to confirm database read/write"}
          </div>
        </div>

        {/* Stripe Checkout Section */}
        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Stripe Checkout
          </h2>
          <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
            <p className="mb-3 text-sm text-zinc-500 dark:text-zinc-400">
              Test the Stripe integration with a $10.00 test payment. Use card
              number <span className="font-mono font-medium text-zinc-700 dark:text-zinc-300">4242 4242 4242 4242</span> with any future expiry and any CVC.
            </p>
            <CheckoutButton />
          </div>
        </div>

        {/* Anthropic API Section */}
        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Anthropic API
          </h2>
          <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
            <p className="mb-3 text-sm text-zinc-500 dark:text-zinc-400">
              Test the Anthropic API integration. Sends a prompt to Claude and
              displays the response.
            </p>
            <AITest />
          </div>
        </div>

        {/* Resend Email Section */}
        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Resend Email
          </h2>
          <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
            <p className="mb-3 text-sm text-zinc-500 dark:text-zinc-400">
              Send a test email to your account email via Resend.
            </p>
            <EmailTest />
          </div>
        </div>

        <form>
          <button
            formAction={logout}
            className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            Log out
          </button>
        </form>
      </div>
    </div>
  );
}
