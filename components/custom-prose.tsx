export function CustomProse({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose prose-neutral dark:prose-invert prose-headings:font-medium prose-headings:tracking-tight prose-img:rounded-2xl prose-headings:leading-snug md:prose-lg prose-headings:scroll-mt-24 mx-auto max-w-[70ch]">
      {children}
    </div>
  );
}
