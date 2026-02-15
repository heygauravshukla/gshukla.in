import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <main className="fixed inset-0 z-50 grid place-items-center bg-zinc-50 dark:bg-zinc-900">
      <Loader className="size-12 animate-spin text-teal-500 dark:text-teal-400" />
    </main>
  );
}
