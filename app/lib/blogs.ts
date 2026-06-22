
export const blogs = [
  {
    slug: "tailwindcss",
    title: "Tailwind CSS Complete Guide",
    description: "Learn Tailwind CSS from basics to advanced.",
    image: "/blogs/tailwindcss.png",
    date:'Monday, Jun 22, 2026',
    loader: () => import("../content/blogs/tailwindcss.mdx"),
  },
  {
    slug: "nextjs",
    title: "Next.js Complete Guide",
    description: "Everything about Next.js (React Framework)",
    image: "/blogs/nextjs.png",
    date:'Monday, Jun 22, 2026',
    loader: () => import("../content/blogs/nextjs.mdx"),
  },
];