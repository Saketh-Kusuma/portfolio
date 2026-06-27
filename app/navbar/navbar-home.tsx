"use client";
import Container from "../components/Container";
import { Link } from "next-view-transitions";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  AnimatePresence,
} from "motion/react";
import { useState, useEffect } from "react";
import { ModeToggle } from "@/components/theme-toggle";

function getWidthRange(vw: number): [string, string] {
  if (vw < 640) return ["100%", "100%"];
  if (vw < 768) return ["100%", "100%"];
  if (vw < 1024) return ["100", "100%"];

  return ["100%", "100%"];
}

const NavbarHome = () => {
  const navItems = [
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
    { title: "Blog", href: "/blog" },
    { title: "Experience", href: "/experience" },

  ];

  const [hovered, setHovered] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const [shadow, setShadow] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const y = useTransform(scrollY, [0, 100], [0, 10]);
  const [[widthStart, widthEnd], setWidthRange] = useState<[string, string]>([
    "96%",
    "88%",
  ]);

  useEffect(() => {
    const update = () => setWidthRange(getWidthRange(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const width = useTransform(scrollY, [0, 100], [widthStart, widthEnd]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 10) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  });

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 mx-auto z-100 max-w-4xl w-full pt-3 px-3 flex justify-end items-center gap-2`}
      >
        <div className={` px-5 py-3 hidden sm:flex items-center`}>
          {navItems.map((item, index) => (
            <Link
              className="text-sm relative px-2 py-1"
              href={item.href}
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === index && (
                <motion.span
                  layoutId="hovered-span"
                  className="h-full w-full absolute inset-0 rounded-2xl bg-neutral-300 dark:bg-neutral-600"
                />
              )}
              <span className="relative z-10">{item.title}</span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <button
            id="hamburger-toggle"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="sm:hidden flex justify-center items-center w-9 h-9 rounded-lg focus:outline-none"
          >
            <div className="flex flex-col items-end gap-1.5">
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="block h-[2px] w-5 bg-neutral-800 dark:bg-neutral-100 origin-center rounded-full"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -4, width: "1.25rem" } : { rotate: 0, y: 0, width: "1rem" }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="block h-[2px] w-4 bg-neutral-800 dark:bg-neutral-100 origin-center rounded-full"
              />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="sm:hidden fixed top-[68px] inset-x-4 z-40 rounded-2xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-200 dark:border-neutral-700 shadow-lg overflow-hidden"
          >
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center px-5 py-4 text-sm font-medium text-neutral-800 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors border-b border-neutral-100 dark:border-neutral-800 last:border-none"
              >
                {item.title}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarHome;
