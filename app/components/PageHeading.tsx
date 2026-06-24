import { cn } from "@/lib/utils";
import React from "react";

interface PageHeadingProps {
  children: React.ReactNode;
  className?: string;
}

const PageHeading = ({ children, className }: PageHeadingProps) => {
  return (
    <h1
      className={cn(
        "text-2xl md:text-4xl font-bold tracking-tight text-primary",
        className
      )}
    >
      {children}
    </h1>
  );
};

export default PageHeading;
