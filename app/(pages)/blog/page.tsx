import BlogsList from "../../components/Blogs-List";
import Container from "../../components/Container";
import PageHeading from "@/app/components/PageHeading";
import Paragraph from "@/app/components/Paragraph";
import FadeUp from "@/app/components/FadeUp";
import type { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Blogs | Saketh Kusuma",
    description:
      "A collection of technical blogs by Saketh Kusuma, covering topics like React, Next.js, TypeScript, Node.js, software engineering, and my journey as a developer.",
    keywords: [
      "Saketh Kusuma blogs",
      "Technical blogs",
      "Software engineering",
      "React tutorials",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Full Stack Development",
      "Developer journey",
    ],
    openGraph: {
      title: "Blogs | Saketh Kusuma",
      description:
        "A collection of technical blogs by Saketh Kusuma on software engineering and web development.",
      url: "https://yourdomain.com/blog",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Blogs by Saketh Kusuma",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Blogs | Saketh Kusuma",
      description:
        "A collection of technical blogs by Saketh Kusuma on software engineering and web development.",
      images: ["/og-image.png"],
    },
    alternates: {
      canonical: "/blog",
    },
  };
}

const AllBlogs = () => {
  return (
    <div className="flex-1 flex items-start justify-start gap-10 w-full">
      <Container className="px-8 pt-20 md:px-20">
        <FadeUp>
          <PageHeading>All blogs</PageHeading>
          <Paragraph className="pt-4">
            Thoughts on code, design, and building things.
          </Paragraph>
        </FadeUp>
        <BlogsList />
      </Container>
    </div>
  );
};

export default AllBlogs;
