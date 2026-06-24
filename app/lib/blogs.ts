
export const blogs = [
  {
  slug: "hello-world",
  title: "Starting My Developer Journey in Public",
  description: "Why I started this blog, what I plan to write about, and what you can expect from my journey in web development and software engineering.",
  image: "/blogs/hello-world.png",
  date: "Wednesday, Jun 24, 2026",
  loader: () => import("../content/blogs/first-blog.mdx"),
},
];