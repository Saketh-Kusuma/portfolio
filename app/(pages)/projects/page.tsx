import Container from "@/app/components/Container";
import Projects from "@/app/components/Projects";
import PageHeading from "@/app/components/PageHeading";
import FadeUp from "@/app/components/FadeUp";
import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Projects",
    description:
      "Explore software development projects by Saketh Kusuma, including full-stack web applications built with React, Next.js, TypeScript, Node.js, Express.js, MongoDB, Firebase, and AWS.",

    keywords: [
      "Saketh Kusuma Projects",
      "React Projects",
      "Next.js Projects",
      "Full Stack Projects",
      "MERN Stack Portfolio",
      "TypeScript Projects",
      "Node.js Projects",
      "MongoDB Projects",
      "Firebase Projects",
      "AWS Projects",
      "Software Developer Portfolio",
    ],

    alternates: {
      canonical: "/projects",
    },
  };
}
export default function ProjectsPage() {
  return (
    <div className="flex-1 flex items-start justify-start gap-10 w-full">
      <Container className="px-8 pt-20 md:px-20">
        <FadeUp>
          <PageHeading>Projects</PageHeading>
        </FadeUp>
        <Projects />
      </Container>
    </div>
  );
}
