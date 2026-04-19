import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <main className="fixed inset-0 z-50 grid place-items-center bg-neutral-50 dark:bg-neutral-900">
      <Loader className="size-12 animate-spin text-blue-500 dark:text-blue-400" />
    </main>
  );
}
