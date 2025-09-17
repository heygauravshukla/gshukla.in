import { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { TimelineList } from "@/components/timeline-list";

export const metadata: Metadata = {
  title: "About",
  description:
    "A passionate Software Engineer with expertise in full-stack web development since 2020. Specializing in crafting elegant user interfaces, I combine design engineering with robust front-end and back-end development. I'm dedicated to sharing in-depth technical knowledge through comprehensive articles.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="py-10 md:py-20">
        <div className="container space-y-10 md:space-y-20">
          <PageIntro
            title="About Me"
            description="A passionate Software Engineer with expertise in full-stack web development since 2020. Specializing in crafting elegant user interfaces, I combine design engineering with robust front-end and back-end development. I'm dedicated to sharing in-depth technical knowledge through comprehensive articles."
          />
          <TimelineList />
        </div>
      </section>
    </main>
  );
}
