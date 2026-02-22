import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { logout } from "../(auth)/actions";

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <div className="w-full max-w-md space-y-6 px-4">
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
