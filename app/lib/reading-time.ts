import { readFileSync } from "node:fs";
import path from "node:path";

const WORDS_PER_MINUTE = 200;

const BLOG_CONTENT_DIR = path.join(process.cwd(), "app", "content", "blogs");

/**
 * Estimated minutes to read an MDX post, counted at build time.
 *
 * SERVER ONLY — this touches the filesystem, so it must never be imported
 * from a "use client" module. Call it from a page/layout server component and
 * pass the resulting number down as a prop.
 *
 * Fenced code, frontmatter, JSX tags, and markdown punctuation are stripped
 * before counting: `seo-implementation.mdx` has 56 lines of code that would
 * otherwise inflate its estimate from ~3 minutes to ~4.
 *
 * Returns null when the file can't be read, so a renamed post degrades to
 * "no reading time shown" instead of failing the build.
 */
export function readingTime(fileName: string): number | null {
  let raw: string;
  try {
    raw = readFileSync(path.join(BLOG_CONTENT_DIR, fileName), "utf8");
  } catch {
    return null;
  }

  const prose = raw
    .replace(/^---\n[\s\S]*?\n---/, "") // frontmatter
    .replace(/```[\s\S]*?```/g, "") // fenced code
    .replace(/`[^`]*`/g, "") // inline code
    .replace(/<[^>]+>/g, " ") // JSX / html tags
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1") // links & images -> label
    .replace(/[#>*_~|-]/g, " "); // markdown punctuation

  const words = prose.split(/\s+/).filter(Boolean).length;
  if (words === 0) return null;

  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}
