import { notFound } from "next/navigation";
import { blogs } from "../../../lib/blogs";
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
    title: `Blog | ${blog.title} by Saketh Kusuma`,
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
    <div className="flex-1 pt-20 px-8 md:pl-20 prose dark:prose-invert mb-3">
      <BlogContent />
    </div>
  );
}
