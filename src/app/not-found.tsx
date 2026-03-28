import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container min-h-svh content-center py-24 text-center">
      <p className="text-sm font-medium text-mist-500 dark:text-mist-400">
        404
      </p>
      <h1 className="mt-2 text-3xl font-medium tracking-tight sm:text-4xl">
        Page not found
      </h1>
      <p className="mx-auto mt-4 max-w-md text-pretty text-mist-600 dark:text-mist-400">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex text-sm font-medium text-teal-500 underline decoration-teal-200 dark:text-teal-400 dark:decoration-teal-800"
      >
        Back to home
      </Link>
    </div>
  );
}
