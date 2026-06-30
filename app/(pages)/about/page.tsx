import { Badge } from "@/components/ui/badge";
import Container from "../../components/Container";
import { skills } from "../../content/skills";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Timeline from "@/app/components/Timeline";
import { timeline } from "@/app/content/timeline";
import PageHeading from "@/app/components/PageHeading";
import Paragraph from "@/app/components/Paragraph";
import FadeUp from "@/app/components/FadeUp";
import type { Metadata } from "next";
import TechStackList from "@/app/components/TechStack-List";
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About",
    description:
      "Learn more about Saketh Kusuma, a Full Stack Developer passionate about building modern web applications with React, Next.js, TypeScript, Node.js, and MongoDB. Discover my journey, skills, and experience in software development.",

    keywords: [
      "Saketh Kusuma",
      "About Saketh Kusuma",
      "Full Stack Developer",
      "Frontend Developer",
      "React Developer",
      "Next.js Developer",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Portfolio",
      "Software Engineer",
    ],

    openGraph: {
      title: "About | Saketh Kusuma",
      description:
        "Learn more about Saketh Kusuma, a Full Stack Developer specializing in React, Next.js, TypeScript, and Node.js.",
      url: "https://yourdomain.com/about",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "About Saketh Kusuma",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: "About | Saketh Kusuma",
      description:
        "Learn more about Saketh Kusuma and my journey as a Full Stack Developer.",
      images: ["/og-image.png"],
    },

    alternates: {
      canonical: "/about",
    },
  };
}
export default function About() {
  return (
    <div className="flex-1 flex items-start justify-start gap-10 w-full">
      <Container className="px-8 pt-20 md:px-20">
        <FadeUp>
          <PageHeading>About Me</PageHeading>
          <Paragraph className="pt-4">hyderabad / india</Paragraph>
          <Paragraph className="pt-4">
            i&apos;m a software developer who loves solving real-world problems
          </Paragraph>
          <Paragraph className="pt-4">
            i enjoy breaking complex challenges into simple solutions
          </Paragraph>
          <Paragraph className="pt-4">
            currently building projects, writing blogs, and preparing for the
            next big opportunity
          </Paragraph>
          <Paragraph className="pt-4">
            powered by coffee and persistence
          </Paragraph>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div>
            <Paragraph className="text-primary text-sm md:text-sm max-w-lg pt-6">
              Tech Stack:
            </Paragraph>
            <TechStackList />
          </div>
        </FadeUp>
        <FadeUp delay={0.15}>
          <div>
            <p className="text-primary dark:text-neutral-200 text-sm md:text-sm max-w-lg py-6">
              Here&apos;s a timeline of my achivements:
            </p>
            <Timeline data={timeline} />
          </div>
        </FadeUp>
      </Container>
    </div>
  );
}
