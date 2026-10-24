import { blogs, formatDate } from "../lib/blogs";
import { Link } from "next-view-transitions";

const LandingBlogs = () => {
  return (
    <div className="flex flex-col gap-8">
      {blogs.slice(0, 3).map((blog) => (
        <Link
          key={blog.slug}
          href={`/blog/${blog.slug}`}
          className="group hover:opacity-75 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
        >
          <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:gap-4">
            <h3 className="text-primary text-base font-medium font-serif">
              {blog.title}
            </h3>
            <p className="shrink-0 whitespace-nowrap text-xs text-secondary sm:text-sm">
              {formatDate(blog.date)}
            </p>
          </div>
          <p className="max-w-lg pt-2 text-sm leading-relaxed text-secondary">
            {blog.description}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default LandingBlogs;
