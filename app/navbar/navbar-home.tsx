"use client";
import { Link } from "next-view-transitions";
import { motion } from "motion/react";
import { useState } from "react";
import { ModeToggle } from "@/components/theme-toggle";
import { navItems } from "@/app/content/nav";

const NavbarHome = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    // `absolute` below `sm` so this scrolls away with the page — the mobile dock
    // is the only docked bar there. See app/navbar/index.tsx for the same trade.
    <nav
      className={`absolute sm:fixed top-0 left-0 right-0 mx-auto z-100 max-w-4xl w-full pt-3 px-3 flex justify-end items-center gap-2`}
    >
      <div className={`px-5 py-3 hidden sm:flex items-center`}>
        {navItems.map((item, index) => (
          <Link
            className="text-sm relative px-3 py-1.5 text-secondary hover:text-primary transition-colors"
            href={item.href}
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            {hovered === index && (
              <motion.span
                layoutId="hovered-span"
                className="h-full w-full absolute inset-0 rounded-full bg-neutral-300 dark:bg-neutral-600"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{item.title}</span>
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <ModeToggle />
      </div>
    </nav>
  );
};

export default NavbarHome;
