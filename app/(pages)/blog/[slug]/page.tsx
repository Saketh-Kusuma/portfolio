import { notFound } from "next/navigation";
import { blogs } from "../../../lib/blogs";
import Container from "@/app/components/Container";
interface Props {
  params: Promise<{
    slug: string;
  }>;
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const blog = blogs.find((blog) => blog.slug == slug);
  if (!blog) {
    return {
      title: "Blog not found",
    };
  }
  return {
    title: `Blog | ${blog.title}`,
    description: blog.description,
  };
}
export default async function BlogPage({ params }: Props) {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  const BlogContent = (await blog.loader()).default;

  return (
    <Container className="flex-1 w-full px-8 md:px-20 pt-20 pb-8">
      <article className="prose dark:prose-invert max-w-none">
        <BlogContent />
      </article>
    </Container>
  );
}
