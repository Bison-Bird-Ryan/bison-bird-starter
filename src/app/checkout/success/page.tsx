import Link from "next/link";
import { getStripe } from "@/lib/stripe";

export default async function CheckoutSuccess({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;
  let paymentStatus = "unknown";

  if (session_id) {
    try {
      const session = await getStripe().checkout.sessions.retrieve(session_id);
      paymentStatus = session.payment_status;
    } catch {
      paymentStatus = "error";
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <div className="w-full max-w-md space-y-6 px-4 py-12 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
          <svg
            className="h-8 w-8 text-green-600 dark:text-green-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-bold tracking-tight text-black dark:text-zinc-50">
          Payment Successful
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Stripe test payment completed. Status:{" "}
          <span className="font-medium text-green-600 dark:text-green-400">
            {paymentStatus}
          </span>
        </p>

        <Link
          href="/dashboard"
          className="inline-block rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
