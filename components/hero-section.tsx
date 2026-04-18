import { SocialLinks } from "@/components/social-links";

export function HeroSection() {
  return (
    <section className="py-16">
      <div className="container">
        <h1 className="mt-8 max-w-[20ch] text-4xl leading-tight font-medium tracking-tight sm:text-5xl md:text-6xl">
          Software engineer, creator, and tech enthusiast.
        </h1>
        <p className="mt-6 max-w-[60ch] leading-7 text-pretty text-neutral-600 dark:text-neutral-400">
          I&apos;m Gaurav Shukla, a software engineer and creator based in
          India. I build production-ready web applications and share practical
          insights through in-depth articles.
        </p>
        <div className="mt-8">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
