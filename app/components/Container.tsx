import React from "react";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`${className} max-w-4xl w-full bg-neutral-100 dark:bg-neutral-800 mx-auto`}
    >
      {children}
    </div>
  );
};

export default Container;
