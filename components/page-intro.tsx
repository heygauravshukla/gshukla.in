export function PageIntro({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="mt-12">
      <div className="container">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>

        {description && (
          <p className="mt-6 max-w-2xl text-lg leading-7 text-pretty text-neutral-600 dark:text-neutral-400">
            {description}
          </p>
        )}

        {children}
      </div>
    </section>
  );
}
