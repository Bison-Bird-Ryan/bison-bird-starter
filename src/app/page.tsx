import { createClient } from "@/lib/supabase/server";

export default async function Home() {
  let supabaseConnected = false;

  try {
    const supabase = await createClient();
    // getSession() is a lightweight call that proves we can reach Supabase
    const { error } = await supabase.auth.getSession();
    supabaseConnected = !error;
  } catch {
    supabaseConnected = false;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-2xl flex-col items-center justify-center gap-12 px-8 py-16">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-black dark:text-zinc-50">
            Bison & Bird Starter
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400">
            Platform validation dashboard
          </p>
        </div>

        <div className="w-full max-w-md space-y-4">
          <StatusRow label="Next.js on Vercel" status="connected" />
          <StatusRow
            label="Supabase"
            status={supabaseConnected ? "connected" : "error"}
          />
          <StatusRow label="Stripe" status="pending" />
          <StatusRow label="Anthropic API" status="pending" />
          <StatusRow label="Resend Email" status="pending" />
        </div>
      </main>
    </div>
  );
}

function StatusRow({
  label,
  status,
}: {
  label: string;
  status: "connected" | "error" | "pending";
}) {
  const badge = {
    connected: {
      text: "Connected",
      className:
        "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    },
    error: {
      text: "Not Connected",
      className:
        "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    },
    pending: {
      text: "Not Started",
      className:
        "bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400",
    },
  }[status];

  return (
    <div className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
      <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
        {label}
      </span>
      <span
        className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${badge.className}`}
      >
        {badge.text}
      </span>
    </div>
  );
}
