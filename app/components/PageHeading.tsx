import { cn } from "@/lib/utils";
import React from "react";

interface PageHeadingProps {
  children: React.ReactNode;
  className?: string;
  /** Render as a different heading level — defaults to h1. Use h2 for secondary
   *  section headings on pages that already have an h1 (e.g. Education on /experience). */
  as?: "h1" | "h2" | "h3";
}

const PageHeading = ({ children, className, as: Tag = "h1" }: PageHeadingProps) => {
  return (
    <Tag
      className={cn(
        "text-2xl md:text-4xl font-bold tracking-tight text-primary dark:text-neutral-200",
        className,
      )}
    >
      {children}
    </Tag>
  );
};

export default PageHeading;
