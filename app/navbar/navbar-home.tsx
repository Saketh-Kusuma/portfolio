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
            className="relative px-3 py-1.5 text-sm text-secondary transition-colors hover:text-primary"
            href={item.href}
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            {hovered === index && (
              <motion.span
                layoutId="nav-home-line"
                className="pointer-events-none absolute inset-x-3 bottom-0 h-px bg-black dark:bg-white"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
              />
            )}
            <span>{item.title}</span>
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
