"use client";
import Container from "../components/Container";
import { Link } from "next-view-transitions";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
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
    { title: "Experience", href: "/experience" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ];

  const [hovered, setHovered] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const [shadow, setShadow] = useState<boolean>(false);
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
        </div>
      </nav>
    </>
  );
};

export default NavbarHome;
