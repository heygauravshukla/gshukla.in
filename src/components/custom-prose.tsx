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
        "prose prose-neutral dark:prose-invert prose-headings:font-medium prose-headings:tracking-tight prose-img:rounded-2xl prose-headings:scroll-mt-24 prose-h1:text-3xl prose-h1:leading-tight prose-a:underline-offset-2 prose-a:text-inherit mx-auto",
        className,
      )}
    >
      {children}
    </article>
  );
}
