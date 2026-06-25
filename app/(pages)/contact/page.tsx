import Container from "@/app/components/Container";
import PageHeading from "@/app/components/PageHeading";
import Paragraph from "@/app/components/Paragraph";
import FadeUp from "@/app/components/FadeUp";
import ContactForm from "./ContactForm";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact | Saketh Kusuma",
    description:
      "Get in touch with Saketh Kusuma for software development opportunities, freelance projects, collaborations, or any questions. I'd love to hear from you.",

    keywords: [
      "Contact Saketh Kusuma",
      "Hire Full Stack Developer",
      "React Developer",
      "Next.js Developer",
      "Frontend Developer",
      "Freelance Web Developer",
      "Software Engineer Contact",
    ],

    alternates: {
      canonical: "/contact",
    },
  };
}
const Contact = () => {
  return (
    <div className="flex-1 flex items-start justify-start w-full">
      <Container className="px-8 pt-20 md:px-20 mb-5">
        <FadeUp>
          <PageHeading>Contact</PageHeading>
          <Paragraph className="pt-4">
            Have a question or want to work together? Leave a message and
            I&apos;ll get back to you as soon as possible.
          </Paragraph>
        </FadeUp>

        <FadeUp delay={0.1}>
          <ContactForm />
        </FadeUp>
      </Container>
    </div>
  );
};

export default Contact;
