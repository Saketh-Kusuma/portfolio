import type { ReactNode } from "react";

/** Shared hierarchy and spacing for the homepage's main content sections. */
export default function HomeSection({
  id,
  title,
  action,
  children,
}: {
  id: string;
  title: string;
  action?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section
      aria-labelledby={id}
      className="min-w-0"
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 md:mb-5">
        <h2 id={id} className="text-xl font-semibold text-heading sm:text-2xl font-serif">
          {title}
        </h2>
        {action}
      </div>
      {children}
    </section>
  );
}
