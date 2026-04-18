export function PageIntro({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <header className="max-w-2xl">
      <h1 className="text-4xl leading-tight font-medium tracking-tight sm:text-5xl md:text-6xl md:text-balance">
        {title}
      </h1>
      <p className="mt-6 leading-7 text-pretty text-mist-600 dark:text-mist-400">
        {description}
      </p>
    </header>
  );
}
