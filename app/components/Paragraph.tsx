import { cn } from "@/lib/utils";
import React from "react";

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

const Paragraph = ({ children, className }: ParagraphProps) => {
  return (
    <p
      className={cn(
        "text-secondary text-sm md:text-sm max-w-lg dark:text-neutral-200",
        className,
      )}
    >
      {children}
    </p>
  );
};

export default Paragraph;
