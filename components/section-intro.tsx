export function SectionIntro({
  heading,
  subheading,
  paragraph,
}: {
  heading: string;
  subheading: string;
  paragraph: string;
}) {
  return (
    <div>
      <h2 className="text-sm font-medium tracking-widest text-teal-500 uppercase dark:text-teal-400">
        {heading}
      </h2>
      <p className="mt-3 text-2xl font-medium tracking-tight sm:text-4xl">
        {subheading}
      </p>
      <p className="mt-4 max-w-xl leading-relaxed text-pretty text-mist-600 dark:text-mist-400">
        {paragraph}
      </p>
    </div>
  );
}
