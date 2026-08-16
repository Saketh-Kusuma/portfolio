"use client";

import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { dockItems } from "@/app/content/nav";
import { cn } from "@/lib/utils";

/** How long a tapped label lingers before fading. */
const TIP_MS = 1200;

const isActiveHref = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname.startsWith(href);

const MobileDock = () => {
  const pathname = usePathname();

  const [tipFor, setTipFor] = useState<string | null>(null);
  const tipTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (tipTimer.current) clearTimeout(tipTimer.current);
    };
  }, []);

  const showTip = (href: string) => {
    if (tipTimer.current) clearTimeout(tipTimer.current);
    setTipFor(href);
    tipTimer.current = setTimeout(() => setTipFor(null), TIP_MS);
  };

  /* The dock stays pinned at all times — it never hides on scroll. <body> reserves
     matching bottom padding (see app/layout.tsx), and a dock that slid away would
     expose that reserved strip as dead space at the end of the page. */
  return (
    <div className="sm:hidden fixed inset-x-0 bottom-0 z-100 px-3 pb-[env(safe-area-inset-bottom)]">
      <nav
        aria-label="Primary"
        className="mb-3 flex items-center justify-between gap-0.5 rounded-full border border-border bg-card/80 p-1.5 shadow-[var(--shadow-aceternity)] backdrop-blur-md"
      >
        {dockItems.map((item) => {
          const active = isActiveHref(pathname, item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              onClick={() => showTip(item.href)}
              className="relative flex min-h-11 flex-1 items-center justify-center rounded-full"
            >
              {active && (
                <motion.span
                  layoutId="dock-active"
                  className="absolute inset-0 rounded-full bg-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}

              <Icon
                className={cn(
                  "relative z-10 h-5 w-5 transition-colors",
                  active ? "text-primary" : "text-secondary",
                )}
                strokeWidth={active ? 2.25 : 1.75}
              />
              <span className="sr-only">{item.title}</span>

              <AnimatePresence>
                {tipFor === item.href && (
                  <motion.span
                    // x lives in the transform (not a -translate-x class) so motion
                    // doesn't clobber the centering when it animates y.
                    initial={{ opacity: 0, y: 4, x: "-50%" }}
                    animate={{ opacity: 1, y: 0, x: "-50%" }}
                    exit={{ opacity: 0, y: 4, x: "-50%" }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 rounded-md bg-popover px-2 py-1 text-xs font-medium whitespace-nowrap text-popover-foreground shadow-md ring-1 ring-border"
                  >
                    {item.title}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default MobileDock;
