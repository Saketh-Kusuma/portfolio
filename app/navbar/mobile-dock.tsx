"use client";

import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { dockItems } from "@/app/content/nav";
import { cn } from "@/lib/utils";

/** Below this scroll depth the dock always stays put — nothing to gain by hiding. */
const REVEAL_ABOVE = 80;
/** How long a tapped label lingers before fading. */
const TIP_MS = 1200;

const isActiveHref = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname.startsWith(href);

const MobileDock = () => {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const reduceMotion = useReducedMotion();

  const [hidden, setHidden] = useState(false);
  const [tipFor, setTipFor] = useState<string | null>(null);
  const tipTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // getPrevious() is undefined on the very first event.
    const previous = scrollY.getPrevious() ?? 0;

    if (latest < REVEAL_ABOVE) {
      setHidden(false);
      return;
    }
    if (latest > previous) setHidden(true);
    else if (latest < previous) setHidden(false);
  });

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

  // Honouring reduced-motion means staying pinned, not sliding out of reach.
  const isHidden = reduceMotion ? false : hidden;

  return (
    <motion.div
      animate={{ y: isHidden ? "150%" : "0%" }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className={cn(
        "sm:hidden fixed inset-x-0 bottom-0 z-100 px-3 pb-[env(safe-area-inset-bottom)]",
        // A dock that has slid away must not keep swallowing taps.
        isHidden && "pointer-events-none",
      )}
    >
      <nav
        aria-label="Primary"
        aria-hidden={isHidden}
        className="mb-3 flex items-center justify-between gap-0.5 rounded-3xl border border-border bg-card/80 p-1.5 shadow-[var(--shadow-aceternity)] backdrop-blur-md"
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
              className="relative flex min-h-11 flex-1 items-center justify-center rounded-2xl"
            >
              {active && (
                <motion.span
                  layoutId="dock-active"
                  className="absolute inset-0 rounded-2xl bg-accent"
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
    </motion.div>
  );
};

export default MobileDock;
