"use client";
import MediaCard from "./MediaCard";

/**
 * Plain, serializable shape. Deliberately NOT the Blog type from lib/blogs —
 * that carries a `loader` function, and functions can't cross into a client
 * component. The server page maps to this before rendering.
 */
export type BlogCard = {
  slug: string;
  title: string;
  description: string;
  image: string;
  meta: string;
};

const BlogsList = ({ blogs }: { blogs: BlogCard[] }) => {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 py-8 sm:grid-cols-2">
      {blogs.map((blog, index) => (
        <MediaCard
          key={blog.slug}
          href={`/blog/${blog.slug}`}
          image={blog.image}
          title={blog.title}
          description={blog.description}
          meta={blog.meta}
          index={index}
        />
      ))}
    </div>
  );
};

export default BlogsList;
