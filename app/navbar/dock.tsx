"use client";

import { Link } from "next-view-transitions";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Home,
  User,
  FolderGit2,
  Briefcase,
  BookOpen,
  Mail,
} from "lucide-react";

const dockItems = [
  { title: "Home", href: "/", icon: Home },
  { title: "About", href: "/about", icon: User },
  { title: "Projects", href: "/projects", icon: FolderGit2 },
  { title: "Work", href: "/experience", icon: Briefcase },
  { title: "Blog", href: "/blog", icon: BookOpen },
  { title: "Contact", href: "/contact", icon: Mail },
];

export default function MobileDock() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [pressedItem, setPressedItem] = useState<string | null>(null);

  // Auto-hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > lastScrollY && current > 60) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="mobile-dock"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="sm:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-50"
          aria-label="Mobile navigation dock"
        >
          {/* Pill container */}
          <div className="flex items-center gap-1 px-3 py-2.5 rounded-full bg-white/80 dark:bg-neutral-900/85 backdrop-blur-xl border border-neutral-200/70 dark:border-neutral-700/60 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            {dockItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              const isPressed = pressedItem === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  id={`dock-${item.title.toLowerCase()}`}
                  aria-label={item.title}
                  className="relative flex flex-col items-center justify-center w-11 h-11 rounded-full transition-colors duration-200 group"
                  onPointerDown={() => {
                    setPressedItem(item.href);
                    setTimeout(() => setPressedItem(null), 900);
                  }}
                >
                  {/* Active background bubble */}
                  {isActive && (
                    <motion.span
                      layoutId="dock-active-bg"
                      className="absolute inset-0 rounded-full bg-neutral-200 dark:bg-neutral-700"
                      transition={{
                        type: "spring",
                        stiffness: 180,
                        damping: 26,
                        mass: 0.8,
                      }}
                    />
                  )}

                  {/* Icon */}
                  <Icon
                    className={`relative z-10 transition-colors duration-200 ${
                      isActive
                        ? "text-neutral-900 dark:text-neutral-100"
                        : "text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-800 dark:group-hover:text-neutral-200"
                    }`}
                    size={18}
                    strokeWidth={isActive ? 2.2 : 1.8}
                  />

                  {/* Active dot indicator */}
                  {isActive && (
                    <motion.span
                      layoutId="dock-active-dot"
                      className="absolute -bottom-1 w-1 h-1 rounded-full bg-neutral-700 dark:bg-neutral-300"
                      transition={{
                        type: "spring",
                        stiffness: 180,
                        damping: 26,
                        mass: 0.8,
                      }}
                    />
                  )}

                  {/* Tap label — shows on press (mobile-friendly) */}
                  <AnimatePresence>
                    {isPressed && (
                      <motion.span
                        key="tap-label"
                        initial={{ opacity: 0, y: 4, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.9 }}
                        transition={{ duration: 0.15 }}
                        className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 text-[11px] font-medium rounded-lg bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 whitespace-nowrap shadow-md"
                      >
                        {item.title}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
