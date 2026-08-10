import type { ComponentType } from "react";

export type Blog = {
  slug: string;
  title: string;
  description: string;
  image: string;
  /** ISO date (YYYY-MM-DD) — formatted for display via formatDate(). */
  date: string;
  /** MDX filename in app/content/blogs, used to compute reading time. */
  file: string;
  loader: () => Promise<{ default: ComponentType }>;
};

export const blogs: Blog[] = [
  {
    slug: "hello-world",
    title: "Starting My Developer Journey in Public",
    description:
      "Why I started this blog, what I plan to write about, and what you can expect from my journey in web development and software engineering.",
    image: "/blogs/hello-world.png",
    date: "2026-06-24",
    file: "first-blog.mdx",
    loader: () => import("../content/blogs/first-blog.mdx"),
  },
  {
    slug: "seo-implementation",
    title: "How I Optimized My Next.js Portfolio for SEO",
    description:
      "A step-by-step guide to SEO for Next.js portfolios with metadata, Open Graph, sitemaps, robots.txt, structured data, and more.",
    image: "/blogs/seo-implementation.png",
    date: "2026-06-30",
    file: "seo-implementation.mdx",
    loader: () => import("../content/blogs/seo-implementation.mdx"),
  },
];

/**
 * "2026-06-24" -> "Jun 24, 2026".
 *
 * Call this on the server only. Running Intl in a client component risks a
 * hydration mismatch when the server and browser resolve different locales —
 * the same failure mode already worked around in TechStack-List.tsx. The
 * explicit "en-US" locale and UTC timezone keep the output stable regardless
 * of where it runs, so a bare date string never shifts by a day.
 */
export function formatDate(iso: string): string {
  const parsed = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return iso;

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(parsed);
}
