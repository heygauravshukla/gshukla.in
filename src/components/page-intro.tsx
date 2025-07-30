import * as motion from "motion/react-client";

export function PageIntro({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <header className="max-w-2xl">
      <motion.h1
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-4xl leading-tight font-medium tracking-tight sm:text-5xl md:text-6xl md:text-balance"
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        className="text-muted-foreground mt-6 leading-7 text-pretty"
      >
        {description}
      </motion.p>
    </header>
  );
}
