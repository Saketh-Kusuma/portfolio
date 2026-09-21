import React from "react";
import { cn } from "@/lib/utils";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "max-w-4xl w-full bg-neutral-100 dark:bg-neutral-800 mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
