import { blogs, formatDate } from "../lib/blogs";
import { Link } from "next-view-transitions";

const LandingBlogs = () => {
  return (
    <div>
      <p className="text-primary dark:text-neutral-200 text-sm max-w-lg pt-2 md:pt-4 mb-4">
        Writings
      </p>
      <div className="flex flex-col gap-4">
        {blogs.slice(0, 3).map((blog) => (
          <Link
            key={blog.slug}
            href={`/blog/${blog.slug}`}
            className="group hover:opacity-75 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-primary dark:text-neutral-200 text-base font-bold tracking-tight">
                {blog.title}
              </h2>
              <p className="text-primary dark:text-neutral-200 shrink-0 text-sm whitespace-nowrap">
                {formatDate(blog.date)}
              </p>
            </div>
            <p className="text-secondary dark:text-neutral-300 max-w-lg pt-2 text-sm">
              {blog.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LandingBlogs;
