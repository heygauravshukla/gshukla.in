import { cn } from "@/lib/utils";

export function CustomProse({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <article
      className={cn(
        "prose prose-neutral dark:prose-invert prose-headings:font-semibold prose-headings:tracking-tight prose-img:rounded-2xl prose-headings:leading-snug sm:prose-lg prose-headings:scroll-mt-24 mx-auto",
        className,
      )}
    >
      {children}
    </article>
  );
}
