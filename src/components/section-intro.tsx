import * as motion from "motion/react-client";

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
      <motion.h2
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-sm font-medium tracking-widest text-fuchsia-400 uppercase"
      >
        {heading}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mt-3 text-2xl font-medium tracking-tight sm:text-4xl"
      >
        {subheading}
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mt-4 max-w-xl leading-relaxed text-pretty text-gray-400"
      >
        {paragraph}
      </motion.p>
    </div>
  );
}
