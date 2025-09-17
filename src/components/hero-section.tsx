import * as motion from "motion/react-client";

import { SocialLinks } from "@/components/social-links";

export function HeroSection() {
  return (
    <section className="from-background to-muted/40 bg-gradient-to-br py-20 md:py-32">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-[20ch] text-4xl leading-tight font-medium tracking-tight sm:text-5xl md:text-6xl"
        >
          Software engineer, creator, and tech enthusiast.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          className="text-muted-foreground mt-6 max-w-[60ch] leading-7 text-pretty"
        >
          I&apos;m Gaurav Shukla, a passionate software engineer and creator
          based in India. I specialize in web development, build awesome
          projects, and share knowledge through insightful articles and
          tutorials.
        </motion.p>
        <div className="mt-8">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
