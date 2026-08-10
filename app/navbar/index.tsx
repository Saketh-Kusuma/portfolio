"use client";
import Image from "next/image";
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
  if (vw < 640) return ["90%", "88%"];
  if (vw < 768) return ["95%", "70%"];
  if (vw < 1024) return ["85%", "70%"];

  return ["52%", "48%"];
}

const Navbar = () => {
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
    <Container>
      <motion.nav
        style={{
          boxShadow: shadow ? "var(--shadow-aceternity)" : "none",
          width,
          y,
        }}
        transition={{
          duration: 0.3,
          ease: "linear",
        }}
        className={`${shadow ? "rounded-4xl bg-neutral-200 dark:bg-neutral-900" : ""} fixed inset-x-0 top-0 z-100 max-w-4xl mx-auto flex items-center justify-between px-3 py-3 w-full mt-2`}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: 0.2,
            ease: "linear",
          }}
        >
          <Link href={"/"}>
            <Image
              src="/avatar-hero1.png"
              width="100"
              height="100"
              alt="avatar"
              loading="eager"
              className="h-10 w-10 rounded-full"
            />
          </Link>
        </motion.div>

        <div className="hidden sm:flex items-center">
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
      </motion.nav>

      {/* Mobile dropdown menu */}
    </Container>
  );
};

export default Navbar;
