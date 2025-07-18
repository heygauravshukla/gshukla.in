import { Metadata } from "next";
import { Wrapper } from "@/components/wrapper";
import { PageIntro } from "@/components/page-intro";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with me for collaborations, opportunities, or just to say hello",
};

export default function ContactPage() {
  return (
    <main>
      <section className="py-10 md:py-20">
        <Wrapper className="space-y-10 md:space-y-20">
          <PageIntro
            title="Contact Me"
            description="Have a question or want to work together? I'm always open to discussing new opportunities and interesting projects. Feel free to reach out."
          />
          <div className="max-w-xl">
            <ContactForm />
          </div>
        </Wrapper>
      </section>
    </main>
  );
}
