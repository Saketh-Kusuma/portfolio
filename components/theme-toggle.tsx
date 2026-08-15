"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { buttonVariants } from "@/components/ui/button";
import { useMounted } from "@/hooks/use-mounted";
import { cn } from "@/lib/utils";

/* size-5! beats buttonVariants' own `[&_svg:not([class*='size-'])]:size-4` —
   the toggler renders its icons internally, so they can't carry a size class. */
const triggerClassName = cn(
  buttonVariants({ variant: "ghost", size: "icon" }),
  "h-6 w-6 cursor-pointer rounded-full [&_svg]:size-5! md:[&_svg]:size-4! text-muted-foreground",
);

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  /* resolvedTheme is undefined until next-themes mounts, so rendering the real
     toggler immediately shows the light-mode icon for a frame on a dark-mode
     load. This placeholder derives its icon from the `.dark` class — already on
     <html> before first paint — so the handover is invisible. */
  if (!mounted) {
    return (
      <span className={triggerClassName} aria-hidden>
        <Moon className="dark:hidden" />
        <Sun className="hidden dark:block" />
      </span>
    );
  }

  return (
    <AnimatedThemeToggler
      className={triggerClassName}
      duration={500}
      theme={resolvedTheme === "dark" ? "dark" : "light"}
      onThemeChange={setTheme}
      aria-label="Toggle theme"
    />
  );
}
