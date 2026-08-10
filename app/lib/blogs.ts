
export const blogs = [
  {
  slug: "hello-world",
  title: "Starting My Developer Journey in Public",
  description: "Why I started this blog, what I plan to write about, and what you can expect from my journey in web development and software engineering.",
  image: "/blogs/hello-world.png",
  date: "Wednesday, Jun 24, 2026",
  loader: () => import("../content/blogs/first-blog.mdx"),
},
{
  slug: "seo-implementation",
  title: "How I Optimized My Next.js Portfolio for SEO",
  description: "A step-by-step guide to SEO for Next.js portfolios with metadata, Open Graph, sitemaps, robots.txt, structured data, and more.",
  image: "/blogs/seo-implementation.png",
  date: "Monday, Jun 30, 2026",
  loader: () => import("../content/blogs/seo-implementation.mdx"),
}
];